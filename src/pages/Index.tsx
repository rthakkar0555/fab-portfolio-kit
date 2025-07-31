import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <Awards />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
