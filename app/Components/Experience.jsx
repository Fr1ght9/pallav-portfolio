"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Experience() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Animate the section header (Fades up)
    gsap.from(".exp-header", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%", 
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // 2. The Bi-directional Horizontal Reveal Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%", // Triggers right as the grid centers in the viewport
      }
    });

    // The Primary Skill (Dynamics 365) flies in from the Left
    tl.from(".card-left", {
      x: -200,          // Start 200px off to the left
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    
    // The Secondary Skill (Oracle) flies in from the Right
    // The "-=0.7" makes it start slightly before the first one finishes, creating that smooth sequence!
    .from(".card-right", {
      x: 200,           // Start 200px off to the right
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.7"); 

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-[#050505] flex flex-col items-center pt-32 pb-24 px-6 md:px-12 z-10 overflow-hidden">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-6xl w-full">
        
        {/* Header Section */}
        <div className="exp-header mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-8">
           <div>
             <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-2">
               Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">Logic.</span>
             </h2>
             <p className="text-xl md:text-2xl text-zinc-500 font-mono tracking-widest uppercase">
               Unbound Execution.
             </p>
           </div>
           
           {/* Professional Tenure Badge */}
           <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end font-mono">
              <span className="text-green-400 text-sm mb-1 flex items-center">
                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                 System Active
              </span>
              <p className="text-zinc-400 text-xs text-right">
                 Highradius Corp.<br/>
                 <span className="text-white">2+ Years Established Dev</span>
              </p>
           </div>
        </div>

        {/* The Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Primary Expertise (Flies from Left) */}
          <div className="card-left group md:col-span-2 relative bg-zinc-900/30 border border-zinc-800/80 p-8 md:p-10 rounded-2xl backdrop-blur-md overflow-hidden hover:border-blue-500/50 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
               <div>
                  <div className="flex items-center justify-between mb-6">
                     <h3 className="text-3xl font-bold text-white">
                        Microsoft <span className="text-blue-500">Dynamics 365</span>
                     </h3>
                     <span className="text-blue-500/20 font-mono text-5xl font-black">01</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-lg max-w-xl">
                    As a specialized Microsoft Dynamics 365 F&O (X++) Developer, I focus on building robust system integrations and optimizing high-stakes
                    financial data pipelines. I have a proven track record of stepping into complex enterprise environments to refactor failing vendor 
                    architectures, engineer native custom frameworks from scratch,and secure zero-loss document processing for global brands like Fila and Geotab.

                  </p>
               </div>
               
               <div className="mt-8 flex flex-wrap gap-3">
                  {['F&O', 'X++', 'Data Entities', 'AIF'].map(tech => (
                     <span key={tech} className="text-xs font-mono text-blue-300 bg-blue-900/30 border border-blue-500/20 px-3 py-1.5 rounded-full">
                        {tech}
                     </span>
                  ))}
               </div>
            </div>
          </div>

          {/* Card 2: Secondary Expertise (Flies from Right) */}
          <div className="card-right group md:col-span-1 relative bg-zinc-900/30 border border-zinc-800/80 p-8 md:p-10 rounded-2xl backdrop-blur-md overflow-hidden hover:border-red-500/50 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-bl from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
               <div>
                  <div className="flex items-center justify-between mb-6">
                     <h3 className="text-2xl font-bold text-white leading-tight">
                        Oracle <br/><span className="text-red-500">Fusion & EBS</span>
                     </h3>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    Leveraging strong secondary expertise in Oracle Fusion ERP, I design and architect complex BIP Queries and customized data models to automate financial visibility for massive manufacturing and retail
                    operations. From managing structured report storage via custom Catalog creation to scheduling automated ESS Jobs for large-scale data processing, I ensure global enterprises like Bimbo Bakers and
                    Chemical Guys possess reliable, real-time insights into their financial workflows.
                  </p>
               </div>

               <div className="mt-8 flex flex-wrap gap-3">
                  {['PL/SQL', 'Integrations', 'Cloud'].map(tech => (
                     <span key={tech} className="text-xs font-mono text-red-300 bg-red-900/30 border border-red-500/20 px-3 py-1.5 rounded-full">
                        {tech}
                     </span>
                  ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}