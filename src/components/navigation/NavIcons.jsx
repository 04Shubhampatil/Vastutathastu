import { icons } from '../../data/content';

// Figma icon SVGs are white strokes; `dark` inverts them for the compact header and mobile menu.
export default function NavIcons({ dark = false, className = '' }) {
  const filter = dark ? 'brightness-0' : '';
  return (
    <div className={`flex items-center gap-8 p-2 ${className}`}>
      <a href="#bag" aria-label="Shopping bag" className="p-[3px] transition-opacity duration-300 hover:opacity-70">
        <img src={icons.bag} alt="" className={`h-[19px] w-[19px] ${filter}`} />
      </a>
      <a href="#search" aria-label="Search" className="p-[3px] transition-opacity duration-300 hover:opacity-70">
        <img src={icons.search} alt="" className={`h-[18px] w-[18px] ${filter}`} />
      </a>
      <a
        href="#login"
        className={`flex items-center gap-2 p-2 font-body text-[16px] transition-opacity duration-300 hover:opacity-70 ${dark ? 'text-ink' : 'text-white'}`}
      >
        <img src={icons.user} alt="" className={`h-6 w-6 ${filter}`} />
        <span>Login</span>
      </a>
    </div>
  );
}
