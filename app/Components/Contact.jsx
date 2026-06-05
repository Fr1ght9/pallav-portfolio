"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // A clean, sequential fade-up for the footer elements
    gsap.from(".contact-elem", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full min-h-[70vh] bg-[#020202] flex flex-col items-center justify-center border-t border-zinc-900 overflow-hidden z-20">
      
      {/* Subtle CRT Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(10,10,10,1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>

      <div className="relative z-10 w-full max-w-5xl px-8 flex flex-col items-center text-center">
        
        <p className="contact-elem text-zinc-600 font-mono tracking-[0.3em] uppercase mb-6 text-xs md:text-sm">
          // End of Line
        </p>
        
        <h2 className="contact-elem text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8">
          Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500">Handshake.</span>
        </h2>

        <p className="contact-elem text-zinc-400 font-mono text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
          Currently engineering backend logic at Highradius, but always open to exploring unbound frontend architecture and high-performance web systems.
        </p>

        {/* The Action Button */}
        <a href="mailto:your.email@example.com" className="contact-elem group relative inline-flex items-center justify-center px-8 py-4 font-mono font-bold text-blue-400 transition-all duration-300 bg-zinc-950 border border-zinc-800 rounded-sm hover:bg-zinc-900 hover:border-blue-500 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] focus:outline-none overflow-hidden">
          {/* Button scanline flash on hover */}
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
          <span className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></span>
          <span className="relative">system.execute("send_email")</span>
        </a>

        {/* Social / Links Directory */}
        <div className="contact-elem mt-24 flex flex-wrap justify-center gap-8 md:gap-12 font-mono text-sm">
          <a href="https://www.linkedin.com/in/pallav-lenka-6642a524a/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="#" className="text-zinc-600 hover:text-white border-b border-zinc-800 hover:border-white transition-all pb-1">Resume_v2.pdf</a>
        </div>
        
        <p className="contact-elem absolute bottom-8 text-[10px] text-zinc-700 font-mono">
          © {new Date().getFullYear()} PALLAV. BUILT WITH UNBOUND LOGIC.
        </p>

      </div>

      {/* Tailwind Config for the shimmer animation (Add this to your globals.css if you want the button flash!)
      @key ames shimmer {
        100% { left: 200%; }
      }
      */}
    </section>
  );
}