"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Playground() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    // Select all the project panels
    const panels = gsap.utils.toArray(".project-panel");

    // Create the horizontal scroll animation
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1), // Move left by 100% per panel
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        // The 'end' value dictates how long the user has to scroll vertically 
        // to complete the horizontal movement. "+=3000" makes it nice and slow.
        end: "+=3000", 
      }
    });

  }, { scope: containerRef });

  return (
    // The Outer Container (Pins to the screen)
    <section ref={containerRef} className="relative w-full h-screen bg-[#020202] overflow-hidden flex items-center">
      
      {/* Subtle background noise/grid to keep the hacker vibe */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,20,0.5)_0%,rgba(2,2,2,1)_100%)] pointer-events-none" />

      {/* The Track (Slides to the left) */}
      <div ref={trackRef} className="flex h-full w-[300vw]"> 
        
        {/* PANEL 1: The Intro Title */}
        <div className="project-panel w-screen h-full flex flex-col justify-center px-12 md:px-32 flex-shrink-0 relative">
          <p className="text-blue-500 font-mono tracking-widest uppercase mb-4 pl-2 border-l-2 border-blue-500">
            // Frontend Architecture
          </p>
          <h2 className="text-7xl md:text-[150px] font-bold text-white tracking-tighter leading-none mb-6" style={{ textShadow: "0 10px 30px rgba(0,0,0,0.8)" }}>
            THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500">
              PLAYGROUND.
            </span>
          </h2>
          <p className="max-w-xl text-xl text-zinc-400 font-mono">
            Where unbound UI/UX meets hardcore logic. Keep scrolling.
          </p>
        </div>

        {/* PANEL 2: AI Interview Platform */}
        <div className="project-panel w-screen h-full flex items-center justify-center p-8 md:p-24 flex-shrink-0">
          <div className="group relative w-full max-w-6xl h-full max-h-[700px] bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col md:flex-row hover:border-purple-500/50 transition-colors duration-500">
             
             {/* Left: Project Details */}
             <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-10 bg-gradient-to-r from-zinc-950/90 to-transparent">
                <span className="text-purple-400 font-mono text-sm mb-4 tracking-widest">01 // AI INTEGRATION</span>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Voice Interviewer</h3>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  A machine learning driven interview platform. Captures native Hindi voice responses, executes real-time translation to English, and evaluates logic against ideal candidate answers using AI rating systems.
                </p>
                <div className="flex flex-wrap gap-3">
                   {['Next.js', 'Speech-to-Text', 'AI Evaluation', 'Node.js'].map(tech => (
                     <span key={tech} className="text-xs font-mono text-purple-300 bg-purple-900/20 border border-purple-500/20 px-3 py-1.5 rounded-full">{tech}</span>
                   ))}
                </div>
             </div>

             {/* Right: Mockup/Visual (Placeholder for your project image) */}
             <div className="w-full md:w-1/2 h-full bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center border-l border-zinc-800/50">
                {/* Simulated Audio Waveform Visual */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                   <div className="w-full h-32 flex items-center justify-center space-x-2">
                     {[40, 70, 30, 90, 50, 100, 60, 20].map((h, i) => (
                        <div key={i} className="w-3 bg-purple-500 rounded-full animate-pulse" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}></div>
                     ))}
                   </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10"></div>
             </div>
          </div>
        </div>

        {/* PANEL 3: Beauty Objectified */}
        <div className="project-panel w-screen h-full flex items-center justify-center p-8 md:p-24 flex-shrink-0">
          <div className="group relative w-full max-w-6xl h-full max-h-[700px] bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col md:flex-row hover:border-cyan-500/50 transition-colors duration-500">
             
             {/* Left: Project Details */}
             <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-10 bg-gradient-to-r from-zinc-950/90 to-transparent">
                <span className="text-cyan-400 font-mono text-sm mb-4 tracking-widest">02 // WEB ANIMATION</span>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Beauty Objectified</h3>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  A high-end architectural web portfolio bridging heritage conservation and contemporary design. Engineered with complex GSAP scroll animations, Gateway Transitions, and material intelligence showcases.
                </p>
                <div className="flex flex-wrap gap-3">
                   {['React', 'GSAP', 'ScrollTrigger', 'Tailwind'].map(tech => (
                     <span key={tech} className="text-xs font-mono text-cyan-300 bg-cyan-900/20 border border-cyan-500/20 px-3 py-1.5 rounded-full">{tech}</span>
                   ))}
                </div>
             </div>

             {/* Right: Mockup/Visual */}
             <div className="w-full md:w-1/2 h-full bg-zinc-950 relative overflow-hidden flex items-center justify-center border-l border-zinc-800/50">
                {/* Simulated Architecture wireframe visual */}
                <div className="w-3/4 h-3/4 border border-cyan-500/30 rounded-t-full relative group-hover:scale-105 transition-transform duration-700">
                   <div className="absolute bottom-0 w-full h-1/2 border-t border-cyan-500/30"></div>
                   <div className="absolute left-1/2 h-full w-px bg-cyan-500/30"></div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}