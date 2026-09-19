import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { brand, hero } from '../../data/content';
import Button from '../ui/Button';
import { EASE_EXPO } from '../../utils/motion';

const words = hero.title.split(' ');

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const rawScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);
  const rawY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -50]);
  const rawTextY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const scale = useSpring(rawScale, { stiffness: 80, damping: 20 });
  const y = useSpring(rawY, { stiffness: 80, damping: 20 });
  const textY = useSpring(rawTextY, { stiffness: 80, damping: 20 });

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] max-h-[1250px] min-h-[650px] w-full overflow-hidden bg-cream lg:h-[855px]"
    >
      <motion.div style={{ scale, y, opacity }} className="absolute inset-0 will-change-transform">
        <video
          className="h-full w-full object-cover"
          poster={brand.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={brand.heroVideo} type="video/mp4" />
        </video>
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex h-full flex-col justify-start px-6 pt-[128px] sm:justify-center sm:px-10 sm:pt-[120px] lg:absolute lg:left-[98px] lg:top-[340px] lg:block lg:h-auto lg:px-0 lg:pt-0"
      >
        <h1 className="max-w-[600px] font-display text-[42px] font-semibold leading-[1.15] text-ink sm:text-[56px] lg:text-[70px] lg:leading-[82px]">
          {words.map((word, i) => (
            <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: EASE_EXPO, delay: 0.35 + i * 0.08 }}
              >
                {word}
                {i < words.length - 1 ? ' ' : ''}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_EXPO, delay: 0.9 }}
          className="mt-8 flex flex-col sm:mt-[52px] sm:flex-row lg:mt-[83px]"
        >
          <div className="p-2">
            <Button href={hero.primaryCta.href} variant="solid">
              {hero.primaryCta.label}
            </Button>
          </div>
          <div className="p-2">
            <Button href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
