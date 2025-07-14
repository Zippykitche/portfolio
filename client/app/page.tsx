import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen text-white">
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <ContactSection />
    </main>
  );
}
