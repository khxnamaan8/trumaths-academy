import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Users, BookOpen, Trophy } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "500+", label: "Students Taught" },
  { icon: Users, value: "10+", label: "Expert Teachers" },
  { icon: BookOpen, value: "12", label: "Class Levels" },
  { icon: Trophy, value: "95%", label: "Pass Rate" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-3 text-foreground">
            Why Choose <span className="text-gradient">TruMaths?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            TruMaths Coaching Centre in Laxmi Nagar provides quality education for students from Class 1st to 12th with strong focus on Mathematics and concept clarity.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl p-6 md:p-8 text-center shadow-card hover:shadow-glow transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
