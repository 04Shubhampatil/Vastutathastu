import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { navItems, brand } from '../../data/content';
import NavIcons from './NavIcons';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import { EASE_EXPO } from '../../utils/motion';

const panel = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 0.5, ease: EASE_EXPO, when: 'beforeChildren', staggerChildren: 0.06, delayChildren: 0.15 } },
  exit: { x: '100%', transition: { duration: 0.35, ease: EASE_EXPO, when: 'afterChildren', staggerChildren: 0.03, staggerDirection: -1 } },
};

const item = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE_EXPO } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
};

export default function MobileMenu({ open, onClose }) {
  useLockBodyScroll(open);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <motion.button
            aria-label="Close menu"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-forest/60 backdrop-blur-sm"
          />
          <motion.aside
            variants={panel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-y-0 right-0 flex w-[min(86vw,360px)] flex-col bg-cream shadow-2xl"
          >
            <div className="flex items-center justify-between px-5 pt-5 pb-3">
              <img src={brand.logo} alt={brand.name} className="h-10 w-auto" />
              <button onClick={onClose} aria-label="Close menu" className="p-2 text-ink transition-opacity hover:opacity-60">
                <FiX size={24} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="flex flex-col">
                {navItems.map((link) => (
                  <motion.li key={link.label} variants={item}>
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="block border-b border-black/10 py-4 font-body text-[16px] tracking-[0.4px] text-ink transition-colors hover:text-brown"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div variants={item} className="border-t border-black/10 px-3 py-3">
              <NavIcons dark />
            </motion.div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
