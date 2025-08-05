import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    
    // Check if browser supports View Transitions API
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    // Use View Transitions API for smooth animation
    document.startViewTransition(() => {
      setTheme(newTheme);
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="w-10 h-10 p-1"
    >
      <img 
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTQ2bTd2djN4MTIzM2cwazZheGhwYWs2bHQxNXoyZjA5NHMwODUwcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/tHIRLHtNwxpjIFqPdV/giphy.gif"
        alt="Theme toggle"
        className="w-full h-full object-cover rounded"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;