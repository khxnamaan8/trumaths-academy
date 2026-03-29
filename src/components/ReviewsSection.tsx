import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    text: "Provided professional teaching... excellent teacher at affordable price. My son's grades improved dramatically in just 3 months!",
    rating: 5,
  },
  {
    name: "Priya Gupta",
    text: "Best place to improve your skills in mathematics. The teachers are very patient and explain every concept clearly.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    text: "TruMaths has been a game changer for my daughter. She went from fearing maths to loving it. Highly recommended!",
    rating: 5,
  },
  {
    name: "Neha Singh",
    text: "Affordable, quality education in Laxmi Nagar. The personal attention given to each student is remarkable.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-3 text-foreground">
            What Parents <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 relative"
            >
              <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed italic">"{review.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{review.name}</div>
                  <div className="text-xs text-muted-foreground">Google Review</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
