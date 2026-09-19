import Header from '../components/navigation/Header';
import Hero from '../components/sections/Hero';
import TrustedGuidance from '../components/sections/TrustedGuidance';
import ShopByCategory from '../components/sections/ShopByCategory';
import FeaturedProduct from '../components/sections/FeaturedProduct';
import SacredEnergy from '../components/sections/SacredEnergy';
import Founder from '../components/sections/Founder';
import Journal from '../components/sections/Journal';
import ConsultationCTA from '../components/sections/ConsultationCTA';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <div className="relative bg-cream">
      <Header />
      <main>
        <Hero />
        <TrustedGuidance />
        <ShopByCategory />
        <FeaturedProduct />
        <SacredEnergy />
        <Founder />
        <Journal />
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
}
