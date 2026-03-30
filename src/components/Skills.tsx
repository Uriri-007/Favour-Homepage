import { motion } from "framer-motion";
import { Code, Users, TrendingUp, Zap, Shield, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Community Building",
    icon: <Users className="w-6 h-6 text-blue-400" />,
    skills: ["Engagement Strategy", "Discord/Telegram Management", "Moderation", "Event Hosting"],
  },
  {
    title: "Growth Strategy",
    icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
    skills: ["Organic Growth", "Campaign Execution", "User Retention", "Analytics"],
  },
  {
    title: "Social Media",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    skills: ["Content Strategy", "Platform Optimization", "Brand Voice", "Influencer Relations"],
  },
  {
    title: "Web3 Ecosystem",
    icon: <Globe className="w-6 h-6 text-green-400" />,
    skills: ["Tokenomics Basics", "NFT Communities", "DAO Participation", "Ecosystem Mapping"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
            <Code className="w-3 h-3" />
            Core Strengths
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Toolkit</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2 group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-gray-400">
                    <Shield className="w-3 h-3 text-blue-500/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
