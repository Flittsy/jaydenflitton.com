import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Writing />
      <About />
      <Contact />
    </main>
  );
}
