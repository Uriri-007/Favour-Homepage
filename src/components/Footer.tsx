import { Send } from "lucide-react";
import { XIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-xs font-bold text-white">FH</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tighter">Favour Harden</span>
          </div>
          <p className="text-gray-500 text-sm max-w-xs mx-auto md:mx-0">
            Architecting the future of Web3 communities through strategic growth and hyper-engagement.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://x.com/laflameiam" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <XIcon className="w-5 h-5" />
          </a>
          <a href="https://t.me/laflameiam" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <Send className="w-5 h-5" />
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Favour Harden. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
