import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechLogos from "@/components/TechLogos";
import Insights from "@/components/Insights";
import Wallet from "@/components/Wallet";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
