import React from 'react';

// Theme override for @theme/IdealImage.
//
// The ideal-image plugin serves downscaled, re-compressed variants
// (/assets/ideal-img/Name.hash.1010.jpg), which makes screenshot text soft,
// especially on HiDPI displays. Docs screenshots are small enough to serve
// as-is, so this override renders a plain <img> pointing at the untouched
// original in /img/ instead. The <Image img={...}> call sites in MDX stay
// unchanged.

const IDEAL_IMG_PATTERN = /\/assets\/ideal-img\/(.+)\.\w+\.\d+\.(jpe?g|png|webp|gif)$/i;

function resolveSrc(img) {
  if (typeof img === 'string') return img;
  if (img && typeof img === 'object') {
    if (typeof img.default === 'string') return img.default;
    if (img.src && typeof img.src.src === 'string') return img.src.src;
    if (typeof img.src === 'string') return img.src;
  }
  return '';
}

export default function IdealImage(props) {
  const {img, alt, className, ...rest} = props;
  const src = resolveSrc(img);
  const match = src.match(IDEAL_IMG_PATTERN);
  const finalSrc = match ? `/img/${match[1]}.${match[2]}` : src;

  return (
    <img
      src={finalSrc}
      alt={alt}
      className={className}
      loading="lazy"
      style={{maxWidth: '100%', height: 'auto'}}
      {...rest}
    />
  );
}
