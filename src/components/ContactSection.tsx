import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Clock, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${formData.name}. ${formData.message || "I'd like to book a demo."}`;
    window.open(`https://wa.me/919873419187?text=${encodeURIComponent(msg)}`, "_blank");
    toast({ title: "Redirecting to WhatsApp!", description: "We'll connect with you shortly." });
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-3 text-foreground">
            Book Your <span className="text-gradient">Free Demo</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 shadow-card space-y-5"
          >
            <Input
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-12 bg-secondary border-0"
            />
            <Input
              placeholder="Phone Number"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-12 bg-secondary border-0"
            />
            <Textarea
              placeholder="Your Message (optional)"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-secondary border-0 min-h-[100px]"
            />
            <Button type="submit" size="lg" className="w-full gradient-primary text-primary-foreground py-6 shadow-glow hover:opacity-90 transition-opacity gap-2">
              <Send className="w-5 h-5" /> Send Message
            </Button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl p-6 shadow-card flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Address</h4>
                <p className="text-sm text-muted-foreground mt-1">690, Gurudwara Rd, Guru Angad Nagar West, Laxmi Nagar, New Delhi, 110092</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Phone</h4>
                <a href="tel:09873419187" className="text-sm text-primary font-medium mt-1 block">09873419187</a>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Hours</h4>
                <p className="text-sm text-muted-foreground mt-1">Open daily till 10 PM</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-card h-48">
              <iframe
                title="TruMaths Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9!2d77.27!3d28.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzAyLjAiTiA3N8KwMTYnMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
