// Click-to-zoom for content images, built directly on medium-zoom.
//
// Two problems this solves over the off-the-shelf plugin:
// 1. IdealImage lazy-loads images, so a zoom attached at route load can miss
//    the real <img> nodes. A MutationObserver attaches zoom to images as they
//    appear.
// 2. medium-zoom caps the zoomed size at the natural size of the loaded
//    responsive variant, which can equal the inline size. Pointing
//    data-zoom-src at the largest srcset candidate zooms the full-resolution
//    original instead.

import mediumZoom from 'medium-zoom';

const attached = new WeakSet();
let zoom = null;
let observer = null;

function largestFromSrcset(srcset) {
  let best = null;
  let bestWidth = 0;
  for (const candidate of srcset.split(',')) {
    const [url, descriptor] = candidate.trim().split(/\s+/);
    const width = descriptor && descriptor.endsWith('w') ? parseInt(descriptor, 10) : 0;
    if (url && width >= bestWidth) {
      bestWidth = width;
      best = url;
    }
  }
  return best;
}

// IdealImage emits variants like /assets/ideal-img/Name.abc123.1010.jpg and
// sets a single one as plain src. The untouched original is always copied to
// /img/Name.jpg, so map the variant back to it.
const IDEAL_IMG_PATTERN = /\/assets\/ideal-img\/(.+)\.\w+\.\d+\.(jpe?g|png|webp|gif)$/i;

function setHighResSource(img) {
  if (img.dataset.zoomSrc) return;
  const src = img.getAttribute('src') || '';
  const idealMatch = src.match(IDEAL_IMG_PATTERN);
  if (idealMatch) {
    img.dataset.zoomSrc = `/img/${idealMatch[1]}.${idealMatch[2]}`;
    return;
  }
  const srcset = img.getAttribute('srcset');
  if (srcset) {
    const best = largestFromSrcset(srcset);
    if (best) img.dataset.zoomSrc = best;
  }
}

function attachImages() {
  const imgs = Array.from(document.querySelectorAll('.markdown img')).filter(
    (img) => !attached.has(img),
  );
  if (imgs.length === 0) return;
  if (!zoom) {
    zoom = mediumZoom({margin: 24, background: 'rgba(12, 12, 12, 0.85)'});
  }
  for (const img of imgs) {
    setHighResSource(img);
    attached.add(img);
  }
  zoom.attach(...imgs);
}

function ensureObserver() {
  if (observer) return;
  observer = new MutationObserver(() => attachImages());
  observer.observe(document.documentElement, {childList: true, subtree: true});
}

if (typeof document !== 'undefined') {
  // Lazy images may gain their srcset after being attached; refresh the
  // high-res source right before medium-zoom handles the click.
  document.addEventListener(
    'click',
    (event) => {
      const target = event.target;
      if (target instanceof HTMLImageElement && target.closest('.markdown')) {
        setHighResSource(target);
      }
    },
    true,
  );
}

export function onRouteDidUpdate() {
  setTimeout(() => {
    attachImages();
    ensureObserver();
  }, 0);
}
