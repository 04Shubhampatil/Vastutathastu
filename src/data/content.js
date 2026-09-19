import logo from '../assets/logo.png';
import heroPoster from '../assets/hero-poster_video.mp4';
import founderPortrait from '../assets/founder-portrait.jpg';
import iconBag from '../assets/icons/bag.svg';
import iconSearch from '../assets/icons/search.svg';
import iconUser from '../assets/icons/user.svg';
import iconNext from '../assets/icons/next.png';

import catRudraksha from '../assets/categories/rudraksha.jpg';
import catYantra from '../assets/categories/yantra.jpg';
import catBracelet from '../assets/categories/bracelet.jpg';
import catMurti from '../assets/categories/murti.jpg';
import catMala from '../assets/categories/mala.jpg';
import catCrystalTree from '../assets/categories/crystal-tree.jpg';
import catPendant from '../assets/categories/pendant.jpg';
import catPujaEssentials from '../assets/categories/puja-essentials.jpg';

import prodChakraTree from '../assets/products/7-chakra-crystal-tree.jpg';
import prodRudraksha from '../assets/products/10-mukhi-rudraksha.jpg';
import prodPyriteBracelet from '../assets/products/pyrite-bracelet.jpg';
import prodSphatikMala from '../assets/products/round-sphatik-mala.jpg';
import prodGreenTree from '../assets/products/green-crystal-tree.jpg';
import prodPyritePendant from '../assets/products/pyrite-pendant.jpg';
import prodLamp from '../assets/products/vastu-shuddhi-lamp.jpg';
import prodBalaji from '../assets/products/brass-balaji-murti.jpg';

export const brand = {
  name: 'Vastutathastu',
  logo,
  heroPoster,
  // Drop the original hero video at /public/hero.mp4 — the poster frame is shown until it exists.
  heroVideo: '/hero.mp4',
};

export const icons = { bag: iconBag, search: iconSearch, user: iconUser, next: iconNext };

// Anchor targets are placeholders until real routes exist; edit here only.
export const navItems = [
  { label: 'New Arrivals', href: '#sacred-energy' },
  { label: 'Rudraksha', href: '#shop-by-category' },
  { label: 'Yantras', href: '#shop-by-category' },
  { label: 'Malas', href: '#shop-by-category' },
  { label: 'Bracelets', href: '#shop-by-category' },
  { label: 'Pendants', href: '#shop-by-category' },
  { label: 'Vastu Products', href: '#shop-by-category' },
  { label: 'World of Vastutathastu', href: '#founder' },
];

export const hero = {
  title: 'Sacred Living by Vastutathastu',
  primaryCta: { label: 'Shop now', href: '#shop-by-category' },
  secondaryCta: { label: 'Book a consultation', href: '#consultation' },
};

export const trusted = {
  title: 'Trusted Vedic Guidance for 22+ Years',
  body: 'Vastutathastu unites Vedic Vastushastra, astrology and numerology with authentic sacred products to help homes, workplaces and lives move into greater harmony.',
};

export const categories = [
  { name: 'Rudraksha', image: catRudraksha },
  { name: 'Yantras', image: catYantra },
  { name: 'Bracelets', image: catBracelet },
  { name: 'Murti', image: catMurti },
  { name: 'Malas', image: catMala },
  { name: 'Crystal Trees', image: catCrystalTree },
  { name: 'Pendants', image: catPendant },
  { name: 'Puja Essentials', image: catPujaEssentials },
];

export const featuredProduct = {
  title: '7 Chakra Crystal Tree',
  image: prodChakraTree,
  description:
    'Balance your space with Vastutathastu’s 7 Chakra Crystal Tree, crafted with natural crystal chips representing the seven chakras. A vibrant decor piece for desks, meditation corners, living spaces, and meaningful gifting.',
  price: 'Price: ₹810.',
  cta: { label: 'Shop now', href: '#shop-by-category' },
};

export const products = [
  { name: '10 Mukhi Rudraksha', tagline: 'Authentic Rudraksha', price: '₹ 10,000', image: prodRudraksha, badge: true },
  { name: 'Pyrite Bracelet', tagline: 'Pyrite energy bracelet', price: '₹ 1,500', image: prodPyriteBracelet, badge: true },
  { name: 'Round Sphatik Mala', tagline: 'Crystal meditation mala', price: '₹ 1,500', image: prodSphatikMala, badge: false },
  { name: 'Green Crystal Tree', tagline: 'Harmonious crystal tree', price: '₹ 2,100', image: prodGreenTree, badge: false },
  { name: 'Pyrite Pendant', tagline: 'Pyrite crystal pendant', price: '₹ 900', image: prodPyritePendant, badge: true },
  { name: 'Vastu Shuddhi Lamp', tagline: 'Vastu cleansing lamp', price: '₹ 2,700', image: prodLamp, badge: true },
  { name: 'Brass Balaji Murti', tagline: 'Brass devotional idol', price: '₹ 6,000', image: prodBalaji, badge: false },
];

export const founder = {
  title: 'Meet Makrannd Sardeshmukh',
  image: founderPortrait,
  body: 'Founder & Director of Vastutathastu. Specialist in Vedic Vastushastra and astrology, Building Biology, Geopathology, and Energy Architecture.',
  cta: { label: 'About the founder', href: '#founder' },
};

export const journal = {
  title: 'Wisdom for Harmonious Living',
  subtitle: 'Explore expert insights on Rudraksha, Vastu, Yantras, crystals, and meaningful spiritual practices.',
  articles: [
    {
      category: 'RUDRAKSHA GUIDE',
      title: 'How to Choose the Right Rudraksha',
      excerpt: 'Understand Mukhi types, traditional significance, and the essentials to consider before selecting an authentic Rudraksha.',
      image: catRudraksha,
      position: '50% 50%',
    },
    {
      category: 'VASTU WISDOM',
      title: 'Simple Vastu Principles for a Balanced Home',
      excerpt: 'Practical placement ideas for entrances, living spaces, work areas, and sacred corners to support harmony and positive energy.',
      image: catMurti,
      position: '50% 0%',
    },
    {
      category: 'YANTRA KNOWLEDGE',
      title: 'Yantras for Prosperity, Focus, and Protection',
      excerpt: 'Learn how sacred geometry, thoughtful placement, and personal intention come together when choosing a Yantra for your space.',
      image: catYantra,
      position: '50% 50%',
    },
  ],
};

export const consultation = {
  eyebrow: 'PERSONAL VEDIC GUIDANCE',
  title: 'Create harmony in every space.',
  body: 'Book a personal consultation for Vastu, astrology, numerology, and sacred-product guidance.',
  cta: { label: 'BOOK A CONSULTATION', href: '#consultation' },
};

export const footer = {
  description: 'Authentic Vedic wisdom and sacred products for harmonious homes, workplaces, and lives.',
  address: ['Nashik, Maharashtra, India', 'Guidance • Products • Consultations'],
  columns: [
    { heading: 'SHOP', width: 150, links: ['Rudraksha', 'Yantras', 'Bracelets', 'Malas', 'Crystal Trees', 'Puja Essentials'] },
    { heading: 'GUIDANCE', width: 170, links: ['Vastu Consultation', 'Astrology', 'Numerology', 'Energy Analysis', 'Book Appointment'] },
    { heading: 'ABOUT', width: 190, links: ['Our Story', 'Makrannd Sardeshmukh', '22+ Years of Guidance', 'Testimonials', 'Contact Us'] },
  ],
  newsletter: {
    eyebrow: 'STAY CONNECTED',
    title: 'Sacred guidance, delivered.',
    body: 'Receive new product updates, Vedic insights, and practical guidance.',
    placeholder: 'Enter your email',
    button: 'JOIN',
    social: ['Instagram', 'YouTube', 'Facebook'],
  },
  bottom: {
    copyright: '© 2026 Vastutathastu. All rights reserved.',
    legal: ['Privacy Policy', 'Terms & Conditions', 'Shipping & Returns'],
    locale: ['India', 'English'],
  },
};
