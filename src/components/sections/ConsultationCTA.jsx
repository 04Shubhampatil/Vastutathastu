import { motion } from 'framer-motion';
import { consultation } from '../../data/content';
import { fadeUp, stagger, viewport } from '../../utils/motion';

export default function ConsultationCTA() {
  return (
    <section
      id="consultation"
      className="flex w-full flex-col items-start justify-between gap-8 overflow-hidden bg-linen px-6 py-[54px] lg:h-[260px] lg:flex-row lg:items-center lg:px-[104px]"
    >
      <motion.div variants={stagger()} initial="hidden" whileInView="visible" viewport={viewport} className="flex max-w-[800px] flex-col gap-4 p-2">
        <motion.p variants={fadeUp} className="font-body text-[13px] font-semibold leading-[18px] text-gold">
          {consultation.eyebrow}
        </motion.p>
        <motion.h2 variants={fadeUp} className="font-display text-[30px] leading-[38px] text-forest sm:text-[38px] sm:leading-[46px]">
          {consultation.title}
        </motion.h2>
        <motion.p variants={fadeUp} className="font-body text-[16px] leading-6 text-forest">
          {consultation.body}
        </motion.p>
      </motion.div>

      <motion.a
        href={consultation.cta.href}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.35 }}
        style={{ backgroundImage: 'linear-gradient(103.94deg, #0b251f 52.7%, #2b8b73 100.26%)' }}
        className="ml-2 inline-flex shrink-0 items-center justify-center rounded-[12px] p-7 font-body text-[20px] font-semibold leading-[18px] text-white shadow-[0_14px_30px_-18px_rgba(11,37,31,0.7)] transition-shadow duration-300 hover:shadow-[0_22px_40px_-18px_rgba(11,37,31,0.75)] lg:ml-0"
      >
        {consultation.cta.label}
      </motion.a>
    </section>
  );
}
