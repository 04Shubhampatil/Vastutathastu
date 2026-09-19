import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { brand } from '../../data/content';
import { EASE_EXPO } from '../../utils/motion';

// Minimal brand intro: logo fades in, curtain lifts. Kept under a second.
export default function Preloader() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const id = setTimeout(() => setDone(true), reduce ? 150 : 950);
    return () => clearTimeout(id);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          aria-hidden="true"
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: EASE_EXPO } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cream"
        >
          <motion.img
            src={brand.logo}
            alt=""
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            transition={{ duration: 0.6, ease: EASE_EXPO }}
            className="h-14 w-auto sm:h-20"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
