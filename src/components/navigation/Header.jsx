import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';
import { navItems, brand } from '../../data/content';
import NavIcons from './NavIcons';
import MobileMenu from './MobileMenu';
import useScrolled from '../../hooks/useScrolled';
import { EASE_EXPO } from '../../utils/motion';

function NavList({ dark = false, size = 'text-[15.5px] leading-[18px]' }) {
  return (
    <ul className="flex items-center gap-6 p-2 wide:gap-10">
      {navItems.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className={`nav-link block whitespace-nowrap p-2 font-body tracking-[0.4px] ${size} ${dark ? 'text-ink' : 'text-white'}`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(240);

  return (
    <>
      {/* Hero overlay header — exactly as the Figma frame: centered logo, then nav row */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE_EXPO, delay: 0.2 }}
        className="absolute inset-x-0 top-0 z-40"
      >
        <div className="flex flex-col items-center gap-2 pt-1">
          <a href="#top" aria-label={brand.name} className="px-4 py-1">
            <img src={brand.logo} alt={brand.name} className="h-[64px] w-auto sm:h-[84px] lg:h-[110px]" loading="eager" />
          </a>
          <nav aria-label="Primary" className="hidden items-center justify-center gap-10 p-2 xl:flex wide:gap-[99px]">
            <NavList />
            <NavIcons />
          </nav>
        </div>
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="absolute right-4 top-5 p-2 text-white transition-opacity hover:opacity-70 xl:hidden"
        >
          <FiMenu size={26} />
        </button>
      </motion.header>

      {/* Scroll-aware compact header */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="compact"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.45, ease: EASE_EXPO }}
            className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-cream/95 shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur-md"
          >
            <div className="mx-auto flex h-[72px] max-w-[1450px] items-center justify-between px-4 lg:px-6">
              <a href="#top" aria-label={brand.name}>
                <img src={brand.logo} alt={brand.name} className="h-9 w-auto lg:h-10" />
              </a>
              <nav aria-label="Primary compact" className="hidden items-center gap-6 xl:flex">
                <NavList dark size="text-[13px] leading-[18px]" />
                <NavIcons dark className="gap-5 p-0" />
              </nav>
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="p-2 text-ink transition-opacity hover:opacity-70 xl:hidden"
              >
                <FiMenu size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
