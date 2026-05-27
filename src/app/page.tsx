import About from "@/components/About";
import Contact from "@/components/Contact";
import CurrentFocus from "@/components/CurrentFocus";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <CurrentFocus />
      <Projects />
      <Writing />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
