import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import QuoteSection from "@/components/QuoteSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-navy-900 text-slate-100 overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
