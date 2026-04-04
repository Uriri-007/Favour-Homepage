import {
  motion
} from "framer-motion";
import {
  User,
  Target,
  Zap,
  TrendingUp,
  Users
} from "lucide-react";

const stats = [{
  label: "Years Experience",
  value: "3+",
  icon: <Zap className="w-4 h-4" />
},
  {
    label: "Projects Contributed",
    value: "10+",
    icon: <Target className="w-4 h-4" />
  },
  {
    label: "Community Growth",
    value: "50k+",
    icon: <TrendingUp className="w-4 h-4" />
  },
  {
    label: "Active Engagement",
    value: "85%",
    icon: <Users className="w-4 h-4" />
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={ { opacity: 0, x: -50 }}
            whileInView={ { opacity: 1, x: 0 }}
            viewport={ { once: true }}
            transition={ { duration: 0.6 }}
            >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-6">
              <User className="w-3 h-3" />
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              A Results-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Web3 Strategist</span>
            </h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              With over 3 years of experience in community management, social media growth, and user engagement—I have contributed to projects such as Exaverse, Drift Derby, Dazzle Games, Conquest.eth, and SpyreIO.
            </p>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              Known for building engaged communities, executing social media strategies, and driving organic growth. I am detail-oriented, adaptable, and deeply invested in continuous learning within the Web3 ecosystem.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={ { opacity: 0, y: 20 }}
                  whileInView={ { opacity: 1, y: 0 }}
                  viewport={ { once: true }}
                  transition={ { delay: idx * 0.1 }}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    {stat.icon}
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={ { opacity: 0, scale: 0.8 }}
            whileInView={ { opacity: 1, scale: 1 }}
            viewport={ { once: true }}
            transition={ { duration: 0.8 }}
            className="relative aspect-square max-w-md mx-auto lg:ml-auto"
            >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-3xl animate-pulse" />
            <div className="relative h-full w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center">
              <img
              className="w-40 h-40 rounded-md object-cover mb-6 shadow-2xl shadow-blue-500/20 border-2 border-white ring-1 ring-slate-100"
              src="/images/hero.jpg"
              alt="Favour's avatar"
              />
            <h3 className="text-2xl font-bold text-white mb-2">Favour Harden</h3>
            <p className="text-blue-400 font-medium mb-6">
              Web3 Community & Growth Strategist
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Community", "Growth", "Social Media", "Strategy"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
};