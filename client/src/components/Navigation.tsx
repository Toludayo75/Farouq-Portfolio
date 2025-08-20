import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "glass-effect" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold gradient-text">FAROUQ</div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-slate-300 hover:text-islamic-green-500 px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-300 hover:text-islamic-green-500 px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-about"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="text-slate-300 hover:text-islamic-green-500 px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-work"
              >
                My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-300 hover:text-islamic-green-500 px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-contact"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-islamic-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-islamic-green-700 transition-colors"
                data-testid="nav-get-social"
              >
                Get Social
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="text-slate-300 hover:text-islamic-green-500"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-effect">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection("home")}
              className="text-slate-300 hover:text-islamic-green-500 block px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-300 hover:text-islamic-green-500 block px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-about"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-slate-300 hover:text-islamic-green-500 block px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-work"
            >
              My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-300 hover:text-islamic-green-500 block px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
