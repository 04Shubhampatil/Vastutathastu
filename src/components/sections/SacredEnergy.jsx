import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { products, icons } from '../../data/content';
import SectionHeading from '../ui/SectionHeading';
import ZoomImage from '../ui/ZoomImage';
import Container from '../layout/Container';
import { reveal, stagger } from '../../utils/motion';

function ProductCard({ product }) {
  return (
    <motion.a
      variants={reveal}
      href="#shop-by-category"
      className="group flex h-[460px] w-full flex-col items-center justify-between overflow-hidden bg-white transition-shadow duration-500 hover:shadow-[0_18px_40px_-24px_rgba(17,18,10,0.35)]"
    >
      <div className="pb-[72px] pt-[55px]">
        <ZoomImage src={product.image} alt={product.name} className="size-[192px]" reveal={false} />
      </div>
      <div className="flex h-[141px] w-full flex-col items-center justify-end px-[30px] pb-[30px]">
        {product.badge && <div className="mb-2 h-[18px] w-[55px] rounded-[9px] bg-cream" aria-hidden="true" />}
        <p className="whitespace-nowrap font-body text-[13px] leading-[15.6px] tracking-[0.4px] text-black">{product.name}</p>
        <p className="whitespace-nowrap py-2 font-body text-[13px] leading-[15.6px] tracking-[0.4px] text-black">{product.tagline}</p>
        <p className="whitespace-nowrap px-[7px] font-body text-[13px] leading-[15.6px] tracking-[0.4px] text-black">{product.price}</p>
      </div>
    </motion.a>
  );
}

export default function SacredEnergy() {
  const trackRef = useRef(null);

  const next = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
    track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + 357, behavior: 'smooth' });
  }, []);

  return (
    <section id="sacred-energy" className="w-full min-h-[676px] bg-cream">
      <Container className="py-[55px]">
        <div className="h-[10px] w-full" aria-hidden="true" />
        <div className="flex justify-center pb-[30px]">
          <SectionHeading size="md" className="text-center text-black">
            Sacred Energy, Refined
          </SectionHeading>
        </div>

        <div className="relative">
          <motion.div
            ref={trackRef}
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            data-lenis-prevent
            className="scrollbar-hide -mx-4 flex snap-x snap-mandatory overflow-x-auto scroll-smooth px-4 lg:mx-0 lg:px-0"
          >
            {products.map((product) => (
              <div key={product.name} className="w-[300px] shrink-0 snap-start pl-[2.5px] pr-[12.5px] sm:w-[357px]">
                <ProductCard product={product} />
              </div>
            ))}
          </motion.div>

          <motion.button
            type="button"
            onClick={next}
            aria-label="Next slide"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.94 }}
            className="absolute right-2 top-[210px] flex size-10 cursor-pointer items-center justify-center lg:right-[17px]"
          >
            <img src={icons.next} alt="" className="size-10 object-contain" />
          </motion.button>
        </div>
      </Container>
    </section>
  );
}
