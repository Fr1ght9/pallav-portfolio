"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Loader() {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const percentRef = useRef(null);

  useGSAP(() => {
    // Lock scrolling while loading
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        // Unlock scrolling when the loader disappears
        document.body.style.overflow = "auto";
        // Tell GSAP to recalculate all trigger positions just in case
        ScrollTrigger.refresh(); 
      }
    });

    // 1. Stagger the terminal boot text
    tl.from(".terminal-line", {
      y: 20,
      opacity: 0,
      duration: 0.4,
      stagger: 0.15,
      ease: "power2.out"
    })
    
    // 2. Animate the progress bar width
    .to(progressRef.current, {
      width: "100%",
      duration: 1.5,
      ease: "power3.inOut"
    }, "-=0.2")
    
    // 3. Simultaneously fake the percentage counter from 0 to 100
    .to({ val: 0 }, {
      val: 100,
      duration: 1.5,
      ease: "power3.inOut",
      onUpdate: function() {
        if (percentRef.current) {
          percentRef.current.innerText = Math.round(this.targets()[0].val) + "%";
        }
      }
    }, "<")
    
    // 4. Flash "System Ready" in green
    .to(".access-text", { opacity: 1, duration: 0.2 })
    .to(".access-text", { opacity: 0, duration: 0.1, yoyo: true, repeat: 3 })
    .to(".access-text", { opacity: 1, duration: 0.2 })
    
    // 5. Slide the entire loader up and away like a blast door
    .to(loaderRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "expo.inOut",
      delay: 0.3
    });

  }, { scope: loaderRef });

  return (
    // Fixed overlay with the highest z-index so it sits on top of everything
    <div ref={loaderRef} className="fixed inset-0 z-[9999] bg-[#020202] flex flex-col items-center justify-center font-mono text-white">
       
       <div className="w-full max-w-2xl px-8 flex flex-col">
         
         {/* Terminal Boot Sequence */}
         <div className="text-blue-400 text-sm md:text-base mb-8 flex flex-col gap-2">
            <p className="terminal-line">&gt; system.boot(Fr1ght9_Protocol)</p>
            <p className="terminal-line text-zinc-500">&gt; establishing secure enterprise connection...</p>
            <p className="terminal-line text-zinc-500">&gt; mounting dynamics_365 & oracle_fusion...</p>
            <p className="terminal-line text-zinc-500">&gt; injecting unbound_ui(gsap, next.js)...</p>
         </div>

         {/* Progress Bar Track */}
         <div className="terminal-line w-full h-1 bg-zinc-900 rounded-full overflow-hidden mb-4 relative">
            <div ref={progressRef} className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 w-0"></div>
         </div>

         {/* Status Text & Percentage */}
         <div className="terminal-line flex justify-between items-center text-xs md:text-sm font-bold">
            <span className="text-zinc-600 uppercase tracking-widest animate-pulse">Compiling Assets</span>
            <span ref={percentRef} className="text-white text-lg md:text-xl">0%</span>
         </div>

         {/* Final Access Granted Text */}
         <div className="access-text opacity-0 mt-12 text-center text-green-400 font-bold tracking-[0.4em] uppercase text-xl md:text-2xl drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">
            System Ready.
         </div>
       </div>

    </div>
  );
}