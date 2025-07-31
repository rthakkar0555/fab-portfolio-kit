import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Dock from "@/components/Dock";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <main className="pb-20">
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Dock />
    </div>
  );
};

export default Index;
