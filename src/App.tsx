/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Background } from "./components/Background";
import { CommandPalette } from "./components/CommandPalette";

export default function App() {
  return (
    <main className="relative min-h-screen text-white selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Background />
      <Navbar />
      <CommandPalette />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
      </div>

      {/* Custom Cursor or other global elements can go here */}
      <div className="fixed inset-0 pointer-events-none z-[100] border-[1px] border-white/5 m-2 sm:m-4 rounded-[1.5rem] sm:rounded-[2rem]" />
    </main>
  );
}
