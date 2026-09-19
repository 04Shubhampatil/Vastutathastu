import { useState } from 'react';
import { motion } from 'framer-motion';
import { brand, footer } from '../../data/content';
import { fadeUp, stagger } from '../../utils/motion';

function FooterLink({ children }) {
  return (
    <a href="#top" className="block font-body text-[14px] leading-5 text-white transition-colors duration-300 hover:text-gold">
      {children}
    </a>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const { newsletter, bottom } = footer;

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="w-full bg-forest text-white">
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-wrap items-start gap-x-[54px] gap-y-10 px-6 py-16 lg:px-10"
      >
        <motion.div variants={fadeUp} className="flex max-w-[326px] flex-col gap-[17px] p-2">
          <a href="#top" aria-label={brand.name} className="flex items-center justify-center self-start">
            <img src={brand.logo} alt={brand.name} className="h-[76px] w-[250px] object-cover" loading="lazy" />
          </a>
          <p className="max-w-[310px] font-body text-[15px] leading-[23px] text-mint">{footer.description}</p>
          <div className="max-w-[310px] font-body text-[14px] leading-[22px] text-white">
            {footer.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </motion.div>

        {footer.columns.map((column) => (
          <motion.div key={column.heading} variants={fadeUp} className="flex flex-col gap-[14px] p-2" style={{ width: column.width + 16 }}>
            <p className="font-body text-[13px] font-semibold leading-[18px] text-gold">{column.heading}</p>
            {column.links.map((link) => (
              <FooterLink key={link}>{link}</FooterLink>
            ))}
          </motion.div>
        ))}

        <motion.div variants={fadeUp} className="flex w-full max-w-[346px] flex-col gap-[15px] p-2">
          <p className="font-body text-[13px] font-semibold leading-[18px] text-gold">{newsletter.eyebrow}</p>
          <p className="font-display text-[25px] leading-8 text-white">{newsletter.title}</p>
          <p className="font-body text-[14px] leading-[22px] text-mint">{newsletter.body}</p>
          <form onSubmit={handleSubmit} className="flex items-center gap-5 self-start rounded-[5px] bg-white p-2">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={newsletter.placeholder}
              className="w-[145px] bg-transparent text-center font-body text-[14px] leading-5 text-ink outline-none placeholder:text-slate"
            />
            <button
              type="submit"
              className="w-[60px] rounded-[6px] bg-gold p-2 text-center font-body text-[12px] font-semibold leading-4 text-forest transition-colors duration-300 hover:bg-[#c99a48]"
            >
              {newsletter.button}
            </button>
          </form>
          <p className="whitespace-pre-wrap font-body text-[14px] leading-5 text-white">
            {newsletter.social.map((s, i) => (
              <span key={s}>
                <a href="#top" className="transition-colors duration-300 hover:text-gold">
                  {s}
                </a>
                {i < newsletter.social.length - 1 ? '  •  ' : ''}
              </span>
            ))}
          </p>
        </motion.div>
      </motion.div>

      <div className="flex flex-col items-start justify-between gap-3 border-t border-moss px-6 py-7 font-body text-[12px] leading-[18px] md:flex-row md:items-center lg:h-[100px] lg:px-[104px]">
        <p className="text-mint">{bottom.copyright}</p>
        <p className="whitespace-pre-wrap text-mint">{bottom.legal.join('   •   ')}</p>
        <p className="whitespace-pre-wrap text-white">{bottom.locale.join('  •  ')}</p>
      </div>
    </footer>
  );
}
