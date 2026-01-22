import AddonsSection from "./components/AddonsSection";
import ContactSection from "./components/ContactSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MobileBar from "./components/MobileBar";
import SectionDivider from "./components/SectionDivider";
import ServicesSection from "./components/ServicesSection";
import VisionSection from "./components/VisionSection";

export default function App() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SectionDivider />
      <ServicesSection />
      <AddonsSection />
      <CtaSection />
      <SectionDivider />
      <VisionSection />
      <ContactSection />
      <Footer year={year} />
      <MobileBar />
    </div>
  );
}
