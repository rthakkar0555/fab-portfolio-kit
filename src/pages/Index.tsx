import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import SectionDivider from "@/components/SectionDivider";
import Dock from "@/components/Dock";
import DotGrid from "@/components/DotGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Dotted grid background for entire website */}
      <DotGrid 
        dotSize={3}
        gap={40}
        proximity={100}
        shockRadius={180}
        shockStrength={2}
        returnDuration={1.5}
        activeColor="#5227ff"
        className="fixed inset-0"
        style={{ zIndex: 1 }}
      />
      
      <div className="relative" style={{ zIndex: 10 }}>
        <Navigation />
        <main className="pb-20">
          <Hero />
          <SectionDivider className="my-6 opacity-60" />
          <Skills />
          <SectionDivider className="my-6 opacity-60" />
          <Education />
          <SectionDivider className="my-6 opacity-60" />
          <Experience />
          <SectionDivider className="my-6 opacity-60" />
          <Projects />
          <SectionDivider className="my-6 opacity-60" />
          <Awards />
          <SectionDivider className="my-6 opacity-60" />
          <Contact />
        </main>
        <Dock />
      </div>
    </div>
  );
};

export default Index;
