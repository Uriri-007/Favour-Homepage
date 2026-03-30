import { motion } from "framer-motion";
import { Briefcase, ExternalLink, ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "Exaverse",
    description: "Led community engagement and growth strategies for a high-stakes metaverse ecosystem.",
    tags: ["Community Management", "Growth", "Metaverse"],
    image: "https://picsum.photos/seed/exaverse/800/600",
  },
  {
    title: "Drift Derby",
    description: "Executed social media campaigns and user retention strategies for a Web3 racing game.",
    tags: ["Social Media", "Gaming", "Retention"],
    image: "https://picsum.photos/seed/drift/800/600",
  },
  {
    title: "Dazzle Games",
    description: "Managed community relations and organic growth for a multi-game Web3 platform.",
    tags: ["Community", "Strategy", "P2E"],
    image: "https://picsum.photos/seed/dazzle/800/600",
  },
  {
    title: "Conquest.eth",
    description: "Strategic growth and ecosystem expansion for a decentralized conquest game.",
    tags: ["Ecosystem", "Growth", "DeFi"],
    image: "https://picsum.photos/seed/conquest/800/600",
  },
  {
    title: "SpyreIO",
    description: "Social media management and community building for a Web3 infrastructure project.",
    tags: ["Infrastructure", "Social Media", "B2B"],
    image: "https://picsum.photos/seed/spyre/800/600",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
              <Briefcase className="w-3 h-3" />
              Experience & Projects
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Contributions</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md">
            Over 3 years of driving value across diverse Web3 ecosystems, from gaming to infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  {project.title}
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-2 py-1 rounded bg-white/5 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
