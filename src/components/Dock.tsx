import { useState, useEffect } from "react";
import { Home, User, Code, Award, Mail, Briefcase } from "lucide-react";
const Dock = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const dockItems = [{
    name: "Home",
    icon: Home,
    href: "#hero",
    section: "hero"
  }, {
    name: "About",
    icon: User,
    href: "#skills",
    section: "skills"
  }, {
    name: "Projects",
    icon: Code,
    href: "#projects",
    section: "projects"
  }, {
    name: "Education",
    icon: Briefcase,
    href: "#education",
    section: "education"
  }, {
    name: "Awards",
    icon: Award,
    href: "#awards",
    section: "awards"
  }, {
    name: "Contact",
    icon: Mail,
    href: "#contact",
    section: "contact"
  }];
  useEffect(() => {
    const handleScroll = () => {
      const sections = dockItems.map(item => item.section);
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (href: string, section: string) => {
    if (section === "hero") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <div className="dock-container bg-[#0d0d00]/25 rounded-full">
      <div className="flex items-center gap-3">
        {dockItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = activeSection === item.section;
        return <div key={index} className="relative group">
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-foreground text-background text-xs rounded-lg px-2 py-1 whitespace-nowrap">
                  {item.name}
                </div>
                <div className="w-2 h-2 bg-foreground transform rotate-45 mx-auto -mt-1"></div>
              </div>
              
              {/* Dock Item */}
              <button onClick={e => {
            e.preventDefault();
            scrollToSection(item.href, item.section);
          }} className={`dock-item p-3 rounded-xl transition-all duration-300 ${isActive ? 'bg-primary text-primary-foreground shadow-glow' : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'}`}>
                <Icon className="h-5 w-5" />
              </button>
              
              {/* Active indicator */}
              {isActive && <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-scale-in"></div>}
            </div>;
      })}
      </div>
    </div>;
};
export default Dock;