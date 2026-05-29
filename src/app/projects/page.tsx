import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeader label="Selected Work" title="Projects" />

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          A collection of technical projects, prototypes, and analysis — work
          across software, engineering, and finance that reflects how I build,
          learn, and think.
        </p>

        <div className="mt-10 border-t border-border">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
