"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",      
        end: "+=500%",         
        scrub: 1,              
        pin: true,             
      }
    });

    // --- PHASE 1: THE TEXT INTRO ---
    tl.to(".intro-text-1", { opacity: 0, y: -20, duration: 1 })
      .fromTo(".intro-text-2", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 })
      .to(".intro-text-2", { opacity: 0, scale: 1.1, duration: 1, delay: 0.5 })
      .to(".intro-overlay", { opacity: 0, duration: 1.5 })

    // --- PHASE 2: THE VOID SETUP ---
      // 1. Fade in the RGB borders and keyboard glow
      .to(".rgb-glow", { opacity: 1, duration: 2 }, "-=0.5")
      
      // We add a label here so the next two animations happen SIMULTANEOUSLY
      .add("zoomPhase")
      
      // 2. Scroll VSCode text upward (Synced with zoomPhase)
      .to(".vscode-text", { yPercent: -45, duration: 4, ease: "none" }, "zoomPhase")
      
      // 3. Zoom straight into the center of the Monitor (Synced with zoomPhase)
      .to(container.current, { 
        scale: 4.5,            
        xPercent: 0,           
        yPercent: 8,          
        duration: 4, 
        ease: "power2.inOut" 
      }, "zoomPhase")
      
      // 4. Fade to black
      .to(".workspace-wrapper", { opacity: 0, duration: 1 });

  }, { scope: container });

  return (
    <div ref={container} className="relative h-screen w-full bg-[#050505] overflow-hidden flex items-center justify-center origin-center">
       
       {/* INTRO OVERLAY */}
       <div className="intro-overlay absolute inset-0 z-50 bg-[#050505] flex items-center justify-center pointer-events-none">
          <h1 className="intro-text-1 absolute text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-white to-zinc-500 tracking-widest uppercase">
            Ready to Dive in?
          </h1>
          <h1 className="intro-text-2 absolute text-4xl md:text-7xl font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-white to-zinc-500 opacity-0 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Hi, THIS IS PALLAV
          </h1>
       </div>

       {/* THE VOID WORKSPACE */}
       <div className="workspace-wrapper relative w-full h-full flex items-center justify-center" style={{ perspective: "1500px" }}>
          
          {/* Infinite Void Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,15,20,1)_0%,rgba(5,5,5,1)_100%)] pointer-events-none" />

          {/* === THE COMMAND CENTER === */}
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[90%] max-w-5xl flex flex-col items-center z-10" style={{ transformStyle: 'preserve-3d' }}>
             
             {/* 1. MONITOR WITH RGB BORDERS */}
             <div className="relative w-full aspect-[21/9] rounded-t-lg rounded-b-md shadow-[0_30px_60px_rgba(0,0,0,0.95)] z-20 flex p-[3px]">
                
                {/* RGB Edge Lighting Layers */}
                <div className="rgb-glow absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-t-lg rounded-b-md opacity-0 blur-md pointer-events-none"></div>
                <div className="rgb-glow absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-t-lg rounded-b-md opacity-0 pointer-events-none"></div>
                
                {/* Monitor Inner Screen */}
                <div className="relative w-full flex-grow bg-[#0a0a0a] overflow-hidden rounded-sm flex flex-col z-10">
                   {/* Glass Reflection */}
                   <div className="absolute top-0 left-0 w-[150%] h-[150%] bg-gradient-to-br from-white/5 to-transparent transform -rotate-12 pointer-events-none z-50"></div>
                   
                   {/* VSCode Header */}
                   <div className="w-full h-6 md:h-8 bg-[#1e1e1e] flex items-center px-4 space-x-2 shrink-0 z-10 border-b border-zinc-800">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                      <div className="ml-4 text-[9px] md:text-[11px] text-zinc-500 font-mono tracking-widest">Fr1ght9_System_Init.js</div>
                   </div>
                   
                   {/* VSCode Content */}
                   <div className="relative flex-grow p-4 md:p-8 font-mono text-[9px] md:text-[12px] leading-relaxed text-blue-300">
                      {/* Added pb-32 to give the text space to scroll without cutting off abruptly */}
                      <div className="vscode-text absolute top-6 left-6 right-6 pb-32">
                        <p><span className="text-purple-400">import</span> {`{ Dynamics365 }`} <span className="text-purple-400">from</span> <span className="text-green-300">'@enterprise/primary'</span>;</p>
                        <p><span className="text-purple-400">import</span> {`{ OracleFusion, EBS }`} <span className="text-purple-400">from</span> <span className="text-green-300">'@enterprise/secondary'</span>;</p>
                        <br/>
                        <p><span className="text-blue-400">export default class</span> <span className="text-yellow-300">Pallav</span> <span className="text-blue-400">extends</span> <span className="text-yellow-300">Developer</span> {`{`}</p>
                        <p className="pl-4 md:pl-8"><span className="text-blue-400">constructor</span>() {`{`}</p>
                        <p className="pl-8 md:pl-16"><span className="text-blue-400">super</span>();</p>
                        <p className="pl-8 md:pl-16">this.coreLogic = <span className="text-orange-300">new</span> <span className="text-yellow-300">Dynamics365</span>();</p>
                        <p className="pl-8 md:pl-16">this.integrations = <span className="text-orange-300">new</span> <span className="text-yellow-300">OracleFusion</span>();</p>
                        <p className="pl-8 md:pl-16">this.ui = <span className="text-green-300">'Unbound'</span>;</p>
                        <p className="pl-4 md:pl-8">{`}`}</p>
                        <br/>
                        <p className="pl-4 md:pl-8"><span className="text-yellow-300">executeScrollAnimation</span>() {`{`}</p>
                        <p className="pl-8 md:pl-16"><span className="text-purple-400">await</span> this.system.initialize();</p>
                        <p className="pl-8 md:pl-16">console.<span className="text-blue-300">log</span>(<span className="text-green-300">"Floating in the void..."</span>);</p>
                        <p className="pl-8 md:pl-16"><span className="text-purple-400">return</span> <span className="text-orange-300">true</span>;</p>
                        <p className="pl-4 md:pl-8">{`}`}</p>
                        <br/>
                        <p className="pl-4 md:pl-8"><span className="text-yellow-300">buildFuture</span>() {`{`}</p>
                        <p className="pl-8 md:pl-16">this.deploy(this.skills);</p>
                        <p className="pl-4 md:pl-8">{`}`}</p>
                        <p>{`}`}</p>
                        <br/>
                        <p className="pl-4 md:pl-8"><span className="text-zinc-500">// System Check Complete</span></p>
                        <p className="pl-4 md:pl-8"><span className="text-zinc-500">// Initiating Handover Protocol...</span></p>
                      </div>
                   </div>
                </div>
             </div>
             
             {/* 2. THE STAND / NECK */}
             <div className="rgb-glow opacity-0 w-10 md:w-12 h-12 md:h-16 bg-gradient-to-b from-zinc-800 to-zinc-950 border-l border-r border-zinc-700 shadow-inner z-10"></div>
             
             {/* 3. THE KEYBOARD */}
             <div className="relative w-[50%] flex flex-col items-center justify-center z-30" style={{ transform: 'rotateX(65deg) translateZ(20px)' }}>
                <div className="rgb-glow absolute w-[120%] h-[150%] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-xl md:blur-3xl opacity-0 rounded-full" />
                
                <div className="w-full h-12 md:h-20 bg-[#0f0f0f] border-t border-zinc-700 border-b-4 border-b-black rounded shadow-[0_20px_40px_rgba(0,0,0,1)] relative z-10 flex items-center justify-center p-1.5 md:p-2">
                   <div className="w-full h-full border border-black/50 rounded-sm shadow-inner bg-[linear-gradient(to_right,#1a1a1a_2px,transparent_2px),linear-gradient(to_bottom,#1a1a1a_2px,transparent_2px)] md:bg-[size:10px_10px] bg-[size:6px_6px] opacity-80"></div>
                </div>
             </div>
          </div>

       </div>
    </div>
  );
}