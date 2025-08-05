import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <ThemeToggle />
    </nav>
  );
};

export default Navigation;