export const EASE_EXPO = [0.22, 1, 0.36, 1];
export const EASE_LUXURY = [0.165, 0.84, 0.44, 1];

export const viewport = { once: true, amount: 0.2 };

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_EXPO } },
};

export const reveal = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: EASE_EXPO } },
};

export const imageReveal = {
  hidden: { scale: 1.08, opacity: 0.7 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: EASE_EXPO } },
};

export const stagger = (staggerChildren = 0.12, delayChildren = 0.05) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});
