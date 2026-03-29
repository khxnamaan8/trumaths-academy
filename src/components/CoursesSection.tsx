import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BookOpen, Calculator, Atom, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    icon: BookOpen,
    title: "Class 1st to 5th",
    subtitle: "All Subjects",
    description: "Build a strong academic foundation with fun, engaging lessons across all subjects.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Calculator,
    title: "Class 6th to 8th",
    subtitle: "Foundation + Maths",
    description: "Strengthen mathematical thinking and problem-solving abilities for middle school.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Atom,
    title: "Class 9th & 10th",
    subtitle: "CBSE Maths + Science",
    description: "Board exam focused preparation with concept clarity and extensive practice.",
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: Brain,
    title: "Class 11th & 12th",
    subtitle: "Advanced Mathematics",
    description: "Master calculus, algebra, and advanced topics for board exams and competitive entrance.",
    color: "from-orange-400 to-red-500",
  },
];

const CoursesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Programs</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-3 text-foreground">
            Courses We <span className="text-gradient">Offer</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <course.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{course.title}</h3>
              <p className="text-sm font-semibold text-primary mt-1">{course.subtitle}</p>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{course.description}</p>
              <a href="#contact" className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-4 group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a href="#contact">
            <Button size="lg" className="gradient-primary text-primary-foreground px-8 py-6 shadow-glow hover:opacity-90 transition-opacity gap-2">
              Enroll Now <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
