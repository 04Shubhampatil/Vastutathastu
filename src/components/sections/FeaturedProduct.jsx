import { motion } from 'framer-motion';
import { featuredProduct } from '../../data/content';
import EditorialSplit from './EditorialSplit';
import SectionHeading from '../ui/SectionHeading';
import { fadeUp, stagger, viewport } from '../../utils/motion';

export default function FeaturedProduct() {
  return (
    <EditorialSplit
      image={featuredProduct.image}
      alt={featuredProduct.title}
      imagePosition="50% 26%"
      imageHref={featuredProduct.cta.href}
    >
      <motion.div variants={stagger()} initial="hidden" whileInView="visible" viewport={viewport} className="w-full max-w-[508px]">
        <div className="pt-2">
          <SectionHeading size="md" className="text-black">
            {featuredProduct.title}
          </SectionHeading>
        </div>
        <motion.div variants={fadeUp} className="pt-[21px] font-body text-[16px] leading-[25.6px] tracking-[0.4px] text-black">
          <p>{featuredProduct.description}</p>
          <p>{featuredProduct.price}</p>
        </motion.div>
        <motion.div variants={fadeUp} className="pt-[34px]">
          {/* Figma font: Euclid Ignited (unavailable) — Inter substituted */}
          <a href={featuredProduct.cta.href} className="underline-link inline-block pb-[3px] font-body text-[16px] leading-[22.4px] tracking-[0.4px] text-black">
            {featuredProduct.cta.label}
          </a>
        </motion.div>
      </motion.div>
    </EditorialSplit>
  );
}
