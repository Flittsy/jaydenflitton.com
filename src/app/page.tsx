import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SidebarNav from "@/components/SidebarNav";
import Writing from "@/components/Writing";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SidebarNav />

      <div className="lg:pl-56">
        <Hero />
        <Projects />
        <Writing />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
