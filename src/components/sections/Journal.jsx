import { motion } from 'framer-motion';
import { journal } from '../../data/content';
import SectionHeading from '../ui/SectionHeading';
import ZoomImage from '../ui/ZoomImage';
import { fadeUp, reveal, stagger, viewport } from '../../utils/motion';

function ArticleCard({ article }) {
  return (
    <motion.a variants={reveal} href="#journal" className="group flex h-[560px] w-full flex-col overflow-hidden bg-sand">
      <ZoomImage src={article.image} alt="" className="h-[300px] w-full" style={{ objectPosition: article.position }} />
      <div className="flex h-[260px] flex-col gap-3 bg-white px-6 pb-[22px] pt-6">
        <p className="whitespace-nowrap font-body text-[11px] font-medium leading-4 tracking-[0.99px] text-bronze">{article.category}</p>
        <h3 className="h-[64px] font-display text-[25px] font-normal leading-8 text-night">{article.title}</h3>
        <p className="h-[60px] font-body text-[13px] leading-5 text-stone">{article.excerpt}</p>
        <p className="mt-auto flex items-center font-body text-[11px] font-medium leading-4 tracking-[0.77px] text-soot">
          READ ARTICLE
          <span className="ml-2 inline-block transition-transform duration-300 ease-expo group-hover:translate-x-1">→</span>
        </p>
      </div>
    </motion.a>
  );
}

export default function Journal() {
  return (
    <section id="journal" className="flex w-full flex-col gap-[18px] bg-white px-6 pb-16 pt-[58px] lg:px-[55px]">
      <motion.div
        variants={stagger()}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="flex w-full flex-col items-center gap-[18px] p-2 text-center"
      >
        <SectionHeading size="lg" className="w-full text-night">
          {journal.title}
        </SectionHeading>
        <motion.p variants={fadeUp} className="max-w-[880px] font-body text-[16px] leading-[26px] text-umber">
          {journal.subtitle}
        </motion.p>
      </motion.div>

      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto grid w-full max-w-[1411px] grid-cols-1 gap-6 md:grid-cols-3"
      >
        {journal.articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </motion.div>
    </section>
  );
}
