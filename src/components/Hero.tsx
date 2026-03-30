import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Globe, Send } from "lucide-react";
import { XIcon } from "./Icons";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for New Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1]"
        >
          Favour <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Harden</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Architecting the future of Web3 communities through <span className="text-white">strategic growth</span> and <span className="text-white">hyper-engagement</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-12 text-center"
          >
            <span className="relative z-10">Get in Touch</span>
            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
          </a>
          <a
            href="#experience"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all text-center"
          >
            View My Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex items-center justify-center gap-6 text-gray-500"
        >
          <a href="https://x.com/laflameiam" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <XIcon className="w-5 h-5" />
          </a>
          <a href="https://t.me/laflameiam" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <Send className="w-5 h-5" />
          </a>
          <div className="w-px h-10 bg-white/10 mx-2" />
          <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest">
            <Globe className="w-4 h-4" />
            <span>Web3 Ecosystem</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};
