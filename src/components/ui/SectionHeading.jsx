import { motion } from 'framer-motion';
import { EASE_EXPO, viewport } from '../../utils/motion';

const sizes = {
  xl: 'text-[32px] leading-[40px] sm:text-[40px] sm:leading-[50px] lg:text-[47px] lg:leading-[56.4px]',
  lg: 'text-[32px] leading-[40px] sm:text-[38px] sm:leading-[48px] lg:text-[44px] lg:leading-[56px]',
  md: 'text-[28px] leading-[34px] lg:text-[36px] lg:leading-[43.2px]',
};

const mask = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_EXPO } },
};

const line = {
  hidden: { y: '105%' },
  visible: { y: 0, transition: { duration: 0.9, ease: EASE_EXPO } },
};

// Masked heading reveal: outer wrapper fades/rises while the text slides up out of an overflow clip.
export default function SectionHeading({ as: Tag = 'h2', size = 'md', className = '', children, animate = true }) {
  const classes = `font-display font-normal ${sizes[size]} ${className}`;
  if (!animate) return <Tag className={classes}>{children}</Tag>;
  return (
    <motion.div variants={mask} initial="hidden" whileInView="visible" viewport={viewport} className="overflow-hidden pb-[0.12em]">
      <Tag className={classes}>
        <motion.span variants={line} className="block">
          {children}
        </motion.span>
      </Tag>
    </motion.div>
  );
}
