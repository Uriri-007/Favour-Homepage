import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Teddy Lee",
    role: "Web3 Founder",
    content: "An active learner with a strong work ethic. Favour is on a fast track to significant growth.",
    avatar: "https://picsum.photos/seed/teddy/100/100",
  },
  {
    name: "Josh Tambourine",
    role: "Growth Lead",
    content: "Smart, detail-oriented, and always open to learning — a valuable asset to any team.",
    avatar: "https://picsum.photos/seed/josh/100/100",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-medium mb-6">
            <Star className="w-3 h-3" />
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Industry Leaders</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-white/5 group-hover:text-blue-500/10 transition-colors" />
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-blue-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-lg text-gray-300 italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
