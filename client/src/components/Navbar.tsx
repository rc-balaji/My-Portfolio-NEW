import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div>
            <Link href="/">
              <a className="font-poppins text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                Balaji C
              </a>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <a 
              href="/assets/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:block px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Resume
            </a>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="flex flex-col space-y-4 px-4 py-6 bg-white dark:bg-dark-card shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="/assets/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors text-center"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
