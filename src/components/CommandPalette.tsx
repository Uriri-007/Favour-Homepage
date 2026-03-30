import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Terminal, X, ArrowRight, User, Briefcase, Code, MessageSquare, Mail, Sparkles, Copy, Check } from "lucide-react";
import { cn } from "../lib/utils";

const actions = [
  { name: "Go to About", icon: <User className="w-4 h-4" />, href: "#about" },
  { name: "View Experience", icon: <Briefcase className="w-4 h-4" />, href: "#experience" },
  { name: "Check Skills", icon: <Code className="w-4 h-4" />, href: "#skills" },
  { name: "Read Testimonials", icon: <MessageSquare className="w-4 h-4" />, href: "#testimonials" },
  { name: "Contact Favour", icon: <Mail className="w-4 h-4" />, href: "#contact" },
];

const FAVOUR_BIO = `I am a results-driven Web3 strategist with over 3 years of experience in community management, social media growth, and user engagement. I have contributed to projects such as Exaverse, Drift Derby, Dazzle Games, Conquest.eth, and SpyreIO. I specialize in building engaged communities, executing social media strategies, and driving organic growth. I am detail-oriented, adaptable, and deeply invested in continuous learning within the Web3 ecosystem.`;

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setIsActionsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleAskAI = () => {
    const prompt = `Explain Favour Harden's Web3 strategist background and how his experience with projects like Exaverse and Drift Derby makes him a valuable asset for community growth: ${FAVOUR_BIO}`;
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.open(`https://chatgpt.com/?q=${encodeURIComponent(prompt)}`, "_blank");
  };

  const filteredActions = actions.filter((action) =>
    action.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-xl bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-600"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-500 font-mono">
                  <span className="text-xs">ESC</span>
                </div>
              </div>

              <div className="p-2 max-h-[300px] overflow-y-auto">
                {/* AI Action Featured */}
                <button
                  onClick={handleAskAI}
                  className="w-full flex items-center justify-between px-3 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-colors group mb-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="block text-sm font-bold text-white">Ask AI about Favour</span>
                      <span className="block text-[10px] text-blue-400/70">Copy bio & open ChatGPT</span>
                    </div>
                  </div>
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <ArrowRight className="w-4 h-4 text-blue-400" />}
                </button>

                {filteredActions.length > 0 ? (
                  filteredActions.map((action) => (
                    <a
                      key={action.name}
                      href={action.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-3 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-blue-400 transition-colors">
                          {action.icon}
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                          {action.name}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                    </a>
                  ))
                ) : (
                  <div className="p-8 text-center text-gray-500 text-sm">
                    No results found for "{search}"
                  </div>
                )}
              </div>

              <div className="px-4 py-3 bg-white/[0.02] border-t border-white/10 flex items-center justify-between text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 rotate-90" /> Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <Terminal className="w-3 h-3" /> Select
                  </span>
                </div>
                <span>Favour Harden Portfolio</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Trigger for Mobile/Discovery */}
      <div className="fixed bottom-8 right-8 z-[90] flex flex-col items-end gap-4">
        <AnimatePresence>
          {isActionsOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="flex flex-col items-end gap-3 mb-2"
            >
              <button
                onClick={handleAskAI}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-zinc-900 border border-white/10 text-white shadow-2xl hover:bg-zinc-800 transition-all group"
              >
                <div className="text-right">
                  <p className="text-xs font-bold">Ask AI</p>
                  <p className="text-[10px] text-gray-500">Copy bio & ChatGPT</p>
                </div>
                <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
              </button>
              
              <button
                onClick={() => {
                  setIsOpen(true);
                  setIsActionsOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-zinc-900 border border-white/10 text-white shadow-2xl hover:bg-zinc-800 transition-all group"
              >
                <p className="text-xs font-bold">Commands</p>
                <div className="p-2 rounded-xl bg-white/5 text-gray-400 group-hover:scale-110 transition-transform">
                  <Search className="w-5 h-5" />
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsActionsOpen(!isActionsOpen)}
          className={cn(
            "p-4 rounded-full text-white shadow-lg shadow-blue-600/20 transition-all duration-300",
            isActionsOpen ? "bg-zinc-800 rotate-90" : "bg-blue-600"
          )}
        >
          {isActionsOpen ? <X className="w-6 h-6" /> : <Terminal className="w-6 h-6" />}
        </motion.button>
      </div>
    </>
  );
};
