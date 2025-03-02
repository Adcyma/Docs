import { useEffect } from 'react';

export default function Homepage(): JSX.Element {
  useEffect(() => {
    // Redirect immediately to /v1 when users land on the homepage
    window.location.replace('/v1/start');
  }, []);

  return null; // No content needed since we are redirecting
}
