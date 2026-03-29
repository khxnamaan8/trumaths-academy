import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["Home", "Courses", "About", "Reviews", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-extrabold text-lg">T</span>
          </div>
          <span className="font-extrabold text-xl text-foreground">
            Tru<span className="text-gradient">Maths</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:09873419187">
            <Button variant="outline" size="sm" className="gap-2 border-primary/20 text-primary hover:bg-primary/5">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>
          <a href="#contact">
            <Button size="sm" className="gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow">
              Book Demo
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-muted-foreground hover:text-primary py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full gradient-primary text-primary-foreground mt-2">
                  Book Free Demo
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
