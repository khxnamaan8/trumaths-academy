import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingSymbols from "./FloatingSymbols";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <FloatingSymbols />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
          {/* Offer Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-offer text-primary text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            25% OFF Admission — 20 March to 20 April
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-foreground"
          >
            Build Strong Maths Foundation from{" "}
            <span className="text-gradient">Class 1st to 12th</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl"
          >
            Expert Teachers · Affordable Fees · Proven Results
          </motion.p>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 mt-4 justify-center md:justify-start"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground">5.0 (45 Google Reviews)</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start"
          >
            <a href="#contact">
              <Button size="lg" className="gradient-primary text-primary-foreground text-base px-8 py-6 shadow-glow hover:opacity-90 transition-opacity gap-2 w-full sm:w-auto">
                Book Free Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="tel:09873419187">
              <Button size="lg" variant="outline" className="text-base px-8 py-6 border-primary/20 text-primary hover:bg-primary/5 w-full sm:w-auto">
                Call Now — 09873419187
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
