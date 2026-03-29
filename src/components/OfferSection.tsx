import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const OfferSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl gradient-primary p-10 md:p-16 text-center animate-pulse-glow"
        >
          <div className="absolute inset-0 opacity-10">
            {["π", "∑", "√", "∫", "x²"].map((s, i) => (
              <span
                key={i}
                className="absolute text-primary-foreground font-bold float-symbol"
                style={{
                  left: `${15 + i * 18}%`,
                  top: `${10 + (i % 3) * 30}%`,
                  fontSize: `${30 + i * 8}px`,
                  "--duration": `${10 + i * 3}s`,
                  "--delay": `${i * 2}s`,
                } as React.CSSProperties}
              >
                {s}
              </span>
            ))}
          </div>
          <div className="relative z-10">
            <Sparkles className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground">
              25% OFF Admission
            </h2>
            <p className="text-primary-foreground/80 text-lg mt-3">Valid from 20 March to 20 April · Limited seats available</p>
            <a href="#contact">
              <Button size="lg" className="mt-8 bg-card text-primary font-bold px-8 py-6 hover:bg-card/90 transition-colors gap-2">
                Claim Offer <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
