import { motion } from "framer-motion";
import { Mail, Send, MessageSquare, ArrowUpRight } from "lucide-react";
import { XIcon } from "./Icons";

export const Contact = () => {
  const email = "favyharden@gmail.com";
  
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
              <Mail className="w-3 h-3" />
              Contact
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
              Let's Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Future</span> Together
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-lg">
              Ready to scale your Web3 community or execute a high-impact growth strategy? Reach out and let's discuss how I can help.
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-red-500/10 text-red-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Email</p>
                    <p className="text-lg font-bold text-white break-all">{email}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://x.com/laflameiam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                    <XIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">X / Twitter</p>
                    <p className="text-lg font-bold text-white">@laflameiam</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://t.me/laflameiam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Telegram</p>
                    <p className="text-lg font-bold text-white">@laflameiam</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <form 
              className="space-y-6" 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const subject = formData.get('subject');
                const message = formData.get('message');
                window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Name: ${name}\n\n${message}`)}`;
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Subject</label>
                <select name="subject" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                  <option className="bg-black">Community Management</option>
                  <option className="bg-black">Growth Strategy</option>
                  <option className="bg-black">Social Media Management</option>
                  <option className="bg-black">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
