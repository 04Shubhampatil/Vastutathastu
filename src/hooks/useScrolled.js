import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

export default function useScrolled(threshold = 200) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const next = y > threshold;
    if (next !== scrolled) setScrolled(next);
  });

  return scrolled;
}
