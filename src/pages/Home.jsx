import Header from '../components/layout/Header';
import HeroSlider from '../components/sections/HeroSlider';
import StorySection from '../components/sections/StorySection';
import PortfolioSection from '../components/sections/PortfolioSection';
import WhyGlenserSection from '../components/sections/WhyGlenserSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection from '../components/sections/CtaSection';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <StorySection />
        <PortfolioSection />
        <WhyGlenserSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
