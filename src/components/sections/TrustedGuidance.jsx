import { motion } from 'framer-motion';
import { trusted } from '../../data/content';
import SectionHeading from '../ui/SectionHeading';
import { fadeUp, viewport } from '../../utils/motion';

export default function TrustedGuidance() {
  return (
    <section className="w-full bg-cream">
      <div className="mx-auto flex max-w-[1024px] flex-col items-center px-4 py-[55px] text-center">
        <SectionHeading as="h1" size="xl" className="text-black lg:whitespace-nowrap">
          {trusted.title}
        </SectionHeading>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="py-[34px]">
          <p className="max-w-[1024px] font-body text-[16px] leading-[25.6px] tracking-[0.4px] text-black">{trusted.body}</p>
        </motion.div>
      </div>
    </section>
  );
}
