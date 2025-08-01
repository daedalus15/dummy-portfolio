import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { smoothScrollTo } from "@/lib/smooth-scroll";

const navItems = [
  { href: "home", label: "$ home" },
  { href: "about", label: "$ about" },
  { href: "projects", label: "$ projects" },
  { href: "skills", label: "$ skills" },
  { href: "workshops", label: "$ volunteering" },
  { href: "resume", label: "$ resume" },
  { href: "contact", label: "$ contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleNavClick = (href: string) => {
    smoothScrollTo(href);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-terminal/90 backdrop-blur-md border-b border-neon-teal/30 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => handleNavClick('home')}
            className="font-mono text-xl font-bold text-neon-teal hover:text-neon-green transition-colors"
          >
            ~/suchir
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-neon-teal transition-colors duration-300 font-mono"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hidden md:flex items-center space-x-2 text-neon-teal hover:text-neon-green transition-colors"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neon-teal"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block text-gray-300 hover:text-neon-teal transition-colors font-mono"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center space-x-2 text-neon-teal hover:text-neon-green transition-colors"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="font-mono">$ theme</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
