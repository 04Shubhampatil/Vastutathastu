import { useEffect } from 'react';
import Lenis from 'lenis';

// Inertia scrolling (Swarovski-style). Disabled for users who prefer reduced motion.
export default function SmoothScroll({ children }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 0.9,
      smoothWheel: true,
      anchors: { offset: -72 },
    });

    window.lenis = lenis;

    let frame = 0;
    const loop = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return children;
}
