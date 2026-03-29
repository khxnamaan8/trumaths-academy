import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70 py-12">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-extrabold text-xl text-primary-foreground">
            Tru<span className="text-primary-glow">Maths</span>
          </span>
          <p className="text-sm mt-2">Master Mathematics with Confidence</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/trumaths" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-sm">
        © {new Date().getFullYear()} TruMaths Academy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
