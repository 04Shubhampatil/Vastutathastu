import { useEffect } from 'react';

export default function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.lenis?.stop();
    return () => {
      document.body.style.overflow = previous;
      window.lenis?.start();
    };
  }, [locked]);
}
