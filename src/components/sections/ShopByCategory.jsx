import { motion } from 'framer-motion';
import { categories } from '../../data/content';
import SectionHeading from '../ui/SectionHeading';
import ZoomImage from '../ui/ZoomImage';
import Container from '../layout/Container';
import { reveal, stagger, viewport } from '../../utils/motion';

function CategoryCard({ name, image }) {
  return (
    <motion.a
      variants={reveal}
      href="#shop-by-category"
      className="group block h-full bg-white/50"
      aria-label={`Shop ${name}`}
    >
      <ZoomImage src={image} alt={name} className="aspect-[359/360] w-full" reveal={false} />
      <div className="flex h-[50px] items-center justify-center px-[5px]">
        <span className="whitespace-nowrap font-body text-[16px] leading-[22.4px] tracking-[0.4px] text-black">{name}</span>
      </div>
    </motion.a>
  );
}

export default function ShopByCategory() {
  return (
    <section id="shop-by-category" className="w-full bg-white">
      <Container className="py-[55px] xl:px-0">
        <div className="mx-auto max-w-[1024px] py-[55px] text-center">
          {/* Figma uses ITC Novarese Medium here; Playfair Display is the closest available web substitute. */}
          <SectionHeading size="xl" className="pt-[5px] text-black">
            Shop by Category
          </SectionHeading>
        </div>
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-[5px] xs:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
