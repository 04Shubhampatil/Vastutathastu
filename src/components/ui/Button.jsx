import { motion } from 'framer-motion';

const variants = {
  solid: 'bg-brown text-white hover:bg-transparent hover:text-brown',
  outline: 'bg-transparent text-brown hover:bg-brown hover:text-white',
};

export default function Button({ href = '#', variant = 'solid', children, className = '' }) {
  return (
    <motion.a
      href={href}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex h-12 min-h-12 w-full items-center justify-center border border-solid border-brown px-4 font-body text-[17px] leading-[24px] tracking-[0.4px] transition-colors duration-300 ease-expo sm:w-[260px] ${variants[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
