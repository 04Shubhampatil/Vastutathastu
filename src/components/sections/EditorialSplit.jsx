import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { imageReveal, viewport } from '../../utils/motion';

// Shared 760x730 image + copy layout used by the Featured Product and Founder sections.
export default function EditorialSplit({ id, image, alt, imageFit = 'object-cover', imagePosition, children, imageHref = '#' }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-4%', '4%']);

  return (
    <section id={id} ref={ref} className="w-full overflow-hidden bg-white">
      <div className="mx-auto flex max-w-[1521px] flex-col items-center lg:h-[730px] lg:flex-row">
        <a href={imageHref} className="group block w-full overflow-hidden lg:h-[730px] lg:w-1/2">
          <motion.div variants={imageReveal} initial="hidden" whileInView="visible" viewport={viewport} className="h-full w-full">
            <motion.img
              src={image}
              alt={alt}
              loading="lazy"
              style={{ y, objectPosition: imagePosition }}
              className={`aspect-[760/730] w-full scale-[1.08] ${imageFit} transition-transform duration-700 ease-luxury group-hover:scale-[1.12] lg:h-full lg:aspect-auto`}
            />
          </motion.div>
        </a>
        <div className="flex w-full flex-col items-start px-6 py-14 sm:px-10 lg:w-1/2 lg:px-[126px] lg:py-0">{children}</div>
      </div>
    </section>
  );
}
