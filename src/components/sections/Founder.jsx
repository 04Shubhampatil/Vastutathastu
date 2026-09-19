import { motion } from 'framer-motion';
import { founder } from '../../data/content';
import EditorialSplit from './EditorialSplit';
import SectionHeading from '../ui/SectionHeading';
import { fadeUp, stagger, viewport } from '../../utils/motion';

export default function Founder() {
  return (
    <EditorialSplit id="founder" image={founder.image} alt="Makrannd Sardeshmukh, founder of Vastutathastu" imageFit="object-contain" imageHref={founder.cta.href}>
      <motion.div variants={stagger()} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col gap-[10px]">
        <div className="flex flex-col gap-8 p-2">
          <div className="pt-2">
            <SectionHeading size="md" className="max-w-[508px] text-black">
              {founder.title}
            </SectionHeading>
          </div>
          <motion.p variants={fadeUp} className="max-w-[508px] font-body text-[16px] leading-[20px] tracking-[0.4px] text-black">
            {founder.body}
          </motion.p>
        </div>
        <motion.div variants={fadeUp} className="p-3">
          <a href={founder.cta.href} className="underline-link inline-block pb-[3px] font-body text-[18px] font-medium leading-[22.4px] tracking-[0.4px] text-black">
            {founder.cta.label}
          </a>
        </motion.div>
      </motion.div>
    </EditorialSplit>
  );
}
