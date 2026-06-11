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
    let mm = gsap.matchMedia();

    // --- DESKTOP LOGIC (Screens 768px and wider) ---
    mm.add("(min-width: 768px)", () => {
      const panels = gsap.utils.toArray(".project-panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: "+=3000", 
        }
      });
    });

    // --- MOBILE LOGIC (Screens smaller than 768px) ---
    mm.add("(max-width: 767px)", () => {
      const panels = gsap.utils.toArray(".project-panel");
      
      // Instead of pinning, we just fade each project up naturally as you scroll down to it
      panels.forEach((panel) => {
        gsap.from(panel, {
          scrollTrigger: {
            trigger: panel,
            start: "top 85%", // Trigger when the top of the card hits 85% down the screen
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      });
    });

    return () => mm.revert(); // Clean up on unmount

  }, { scope: containerRef });

  return (
    // Changed h-screen to h-auto on mobile so it can scroll naturally!
    <section ref={containerRef} className="relative w-full h-auto md:h-screen bg-[#020202] overflow-hidden md:flex items-center">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,20,0.5)_0%,rgba(2,2,2,1)_100%)] pointer-events-none" />

      {/* Changed w-[300vw] to flex-col on mobile, and horizontal track on desktop */}
      <div ref={trackRef} className="flex flex-col md:flex-row h-auto md:h-full w-full md:w-[300vw]"> 
        
        {/* PANEL 1: The Intro Title */}
        <div className="project-panel w-full md:w-screen min-h-[60vh] md:h-full flex flex-col justify-center px-8 py-20 md:px-32 flex-shrink-0 relative">
          <p className="text-blue-500 font-mono tracking-widest uppercase mb-4 pl-2 border-l-2 border-blue-500 text-sm">
            // Frontend Architecture
          </p>
          <h2 className="text-6xl md:text-[150px] font-bold text-white tracking-tighter leading-none mb-6" style={{ textShadow: "0 10px 30px rgba(0,0,0,0.8)" }}>
            THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500">
              PLAYGROUND.
            </span>
          </h2>
          <p className="max-w-xl text-lg md:text-xl text-zinc-400 font-mono">
            Where unbound UI/UX meets hardcore logic. Keep scrolling.
          </p>
        </div>

        {/* PANEL 2: AI Interview Platform */}
        <div className="project-panel w-full md:w-screen h-auto md:h-full flex items-center justify-center p-6 py-12 md:p-24 flex-shrink-0">
          <div className="group relative w-full max-w-6xl h-auto md:h-full max-h-[700px] bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col md:flex-row hover:border-purple-500/50 transition-colors duration-500">
             
             <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-center relative z-10 bg-zinc-950/90 md:bg-gradient-to-r md:from-zinc-950/90 md:to-transparent">
                <span className="text-purple-400 font-mono text-xs md:text-sm mb-4 tracking-widest">01 // AI INTEGRATION</span>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">AI Voice Interviewer</h3>
                <p className="text-zinc-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  A machine learning driven interview platform. Captures native Hindi voice responses, executes real-time translation to English, and evaluates logic against ideal candidate answers using AI rating systems.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                   {['Next.js', 'Speech-to-Text', 'AI Evaluation'].map(tech => (
                     <span key={tech} className="text-[10px] md:text-xs font-mono text-purple-300 bg-purple-900/20 border border-purple-500/20 px-3 py-1.5 rounded-full">{tech}</span>
                   ))}
                </div>
             </div>

             <div className="w-full md:w-1/2 h-64 md:h-full bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center border-t md:border-t-0 md:border-l border-zinc-800/50">
                <div className="absolute inset-0 flex items-center justify-center opacity-50 md:opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                   <div className="w-full h-16 md:h-32 flex items-center justify-center space-x-1 md:space-x-2">
                     {[40, 70, 30, 90, 50, 100, 60, 20].map((h, i) => (
                        <div key={i} className="w-2 md:w-3 bg-purple-500 rounded-full animate-pulse" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}></div>
                     ))}
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* PANEL 3: Beauty Objectified */}
        <div className="project-panel w-full md:w-screen h-auto md:h-full flex items-center justify-center p-6 py-12 md:p-24 flex-shrink-0">
          <div className="group relative w-full max-w-6xl h-auto md:h-full max-h-[700px] bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col md:flex-row hover:border-cyan-500/50 transition-colors duration-500">
             
             <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-center relative z-10 bg-zinc-950/90 md:bg-gradient-to-r md:from-zinc-950/90 md:to-transparent">
                <span className="text-cyan-400 font-mono text-xs md:text-sm mb-4 tracking-widest">02 // WEB ANIMATION</span>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">Beauty Objectified</h3>
                <p className="text-zinc-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  A high-end architectural web portfolio bridging heritage conservation and contemporary design. Engineered with complex GSAP scroll animations, Gateway Transitions, and material intelligence showcases.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                   {['React', 'GSAP', 'ScrollTrigger'].map(tech => (
                     <span key={tech} className="text-[10px] md:text-xs font-mono text-cyan-300 bg-cyan-900/20 border border-cyan-500/20 px-3 py-1.5 rounded-full">{tech}</span>
                   ))}
                </div>
                <div>
                   <a 
                  href="https://anunaik360-arc.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center text-cyan-400 font-mono text-sm group/link"
                >
                  <span className="border-b border-cyan-500/30 pb-1 group-hover/link:border-cyan-400 transition-colors">Visit Site</span>
                  <svg className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                </div>
             </div>

             <div className="w-full md:w-1/2 h-64 md:h-full bg-zinc-950 relative overflow-hidden flex items-center justify-center border-t md:border-t-0 md:border-l border-zinc-800/50">
                <div className="w-1/2 md:w-3/4 h-3/4 border border-cyan-500/30 rounded-t-full relative group-hover:scale-105 transition-transform duration-700">
                   <div className="absolute bottom-0 w-full h-1/2 border-t border-cyan-500/30"></div>
                   <div className="absolute left-1/2 h-full w-px bg-cyan-500/30"></div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}