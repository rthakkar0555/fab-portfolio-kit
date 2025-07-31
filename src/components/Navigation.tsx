import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    name: "About",
    href: "#about"
  }, {
    name: "Skills",
    href: "#skills"
  }, {
    name: "Education",
    href: "#education"
  }, {
    name: "Projects",
    href: "#projects"
  }, {
    name: "Awards",
    href: "#awards"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  const scrollToSection = (href: string) => {
    setIsOpen(false);
    if (href === "#about") {
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
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : ""}`}>
      <div className="container mx-auto px-6">
        

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => <a key={item.name} href={item.href} onClick={e => {
            e.preventDefault();
            scrollToSection(item.href);
          }} className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200">
                  {item.name}
                </a>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;