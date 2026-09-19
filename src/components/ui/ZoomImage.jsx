import { motion } from 'framer-motion';
import { imageReveal, viewport } from '../../utils/motion';

// Image inside a clipped container; zooms on parent `.group` hover (Figma: 100% -> 110%, 400ms, luxury easing).
export default function ZoomImage({ src, alt, className = '', imgClassName = '', style, reveal = true, loading = 'lazy' }) {
  const img = (
    <img
      src={src}
      alt={alt}
      loading={loading}
      style={style}
      className={`h-full w-full object-cover transition-transform duration-[400ms] ease-luxury group-hover:scale-110 ${imgClassName}`}
    />
  );

  return (
    <div className={`overflow-hidden ${className}`}>
      {reveal ? (
        <motion.div variants={imageReveal} initial="hidden" whileInView="visible" viewport={viewport} className="h-full w-full">
          {img}
        </motion.div>
      ) : (
        img
      )}
    </div>
  );
}
