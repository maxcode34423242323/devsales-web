"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const projects = [
  ["Personal Injury Law", "Apex Injury Law", "/images/apex-legal.png", "01"], ["Plastic Surgery", "Maison Aesthetics", "/images/devilsales-home.png", "02"],
  ["Cosmetic Dentistry", "Ivory Dental Studio", "/images/devilsales-lead.png", "03"], ["Roofing", "Summit Roofing Co.", "/images/elite-estates.png", "04"],
  ["HVAC", "Northstar Climate", "/images/devilsales-car.png", "05"], ["Home Remodeling", "Atelier Build", "/images/devilsales-home.png", "06"],
  ["Luxury Home Builders", "Monument Custom Homes", "/images/elite-estates.png", "07"], ["Medical Spa", "Élan Med Spa", "/images/devilsales-lead.png", "08"],
  ["Property Restoration", "Revive Restoration", "/images/apex-legal.png", "09"], ["Commercial Landscaping", "Terra Commercial", "/images/elite-estates.png", "10"],
];
const services = [
  ["01", "Positioning & strategy", "We find the clearest, most valuable way to present your business before a single screen is designed."],
  ["02", "Art direction & design", "A distinctive visual system created to look credible at first glance and memorable after the visit."],
  ["03", "Development & motion", "Fast, responsive development with refined interaction, purposeful animation and easy content management."],
  ["04", "Conversion infrastructure", "Forms, booking, analytics, CRM connections and SEO foundations built into the experience."],
];
const reveal = { initial:{opacity:0,y:40}, whileInView:{opacity:1,y:0}, viewport:{once:true,margin:"-80px"}, transition:{duration:.8,ease:[.22,1,.36,1] as const} };

export default function Home(){
 const {scrollYProgress}=useScroll(); const heroY=useTransform(scrollYProgress,[0,.25],[0,100]);
 return <main className="luxury-page overflow-hidden"><Navbar/>
  <section className="hero-lux relative min-h-[960px] overflow-hidden px-5 pb-16 pt-32 text-[#f3efe6] md:px-10 md:pt-40">
   <motion.div style={{y:heroY}} className="hero-orbit absolute right-[-12%] top-[13%] h-[560px] w-[560px] rounded-full md:h-[780px] md:w-[780px]"/>
   <div className="relative mx-auto max-w-[1460px]">
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="mb-12 flex items-center justify-between border-b border-white/15 pb-5 text-[10px] uppercase tracking-[.28em] text-white/50"><span>Independent digital atelier</span><span className="hidden md:block">Italy · United States · Worldwide</span></motion.div>
    <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.15,duration:.8}} className="gold-label">Strategy · Design · Development</motion.p>
    <motion.h1 initial={{opacity:0,y:70}} animate={{opacity:1,y:0}} transition={{delay:.1,duration:1.2,ease:[.22,1,.36,1]}} className="lux-serif mt-7 max-w-[1280px] text-[17vw] leading-[.84] tracking-[-.065em] md:text-[128px] lg:text-[166px]">Websites that make you the <em className="font-normal text-[#bca579]">obvious</em> choice.</motion.h1>
    <div className="mt-16 grid gap-10 border-t border-white/15 pt-8 md:grid-cols-[1.4fr_.6fr] md:items-end"><motion.p {...reveal} className="max-w-2xl text-xl leading-relaxed text-white/58 md:text-2xl">High-conviction digital experiences for established service businesses ready to look as valuable as the work they deliver.</motion.p><motion.div {...reveal} className="flex md:justify-end"><Link href="/contact" className="lux-button">Discuss your project <span>↗</span></Link></motion.div></div>
   </div>
  </section>
  <div className="marquee border-y border-black/10 bg-[#e9e2d6] py-5"><div>LAW FIRMS · MEDICAL AESTHETICS · CONTRACTORS · DENTISTRY · LUXURY BUILDERS · RESTORATION · LANDSCAPING · HVAC · LAW FIRMS · MEDICAL AESTHETICS · CONTRACTORS · DENTISTRY · LUXURY BUILDERS · RESTORATION · LANDSCAPING · HVAC ·</div></div>
  <section className="bg-[#eee9df] px-5 py-28 md:px-10 md:py-44"><div className="mx-auto grid max-w-[1460px] gap-12 lg:grid-cols-[.55fr_1.45fr]"><motion.div {...reveal}><p className="gold-label">The DevilSales standard</p><p className="mt-7 max-w-sm leading-7 text-black/55">Your website should communicate expertise before a visitor reads the details. Every decision we make is designed around that moment.</p></motion.div><motion.h2 {...reveal} className="lux-serif text-6xl leading-[.98] tracking-[-.045em] md:text-8xl lg:text-[112px]">We make serious businesses feel unmistakably premium.</motion.h2></div></section>
  <section id="services" className="bg-[#171816] px-5 py-28 text-[#eee9df] md:px-10 md:py-40"><div className="mx-auto max-w-[1460px]">
   <motion.div {...reveal} className="mb-16 grid gap-8 border-b border-white/15 pb-12 md:grid-cols-2 md:items-end"><div><p className="gold-label">Capabilities</p><h2 className="lux-serif mt-5 text-6xl leading-none md:text-8xl">From first thought<br/>to first enquiry.</h2></div><p className="max-w-md text-lg leading-8 text-white/50 md:justify-self-end">One senior team shapes the strategy, visual identity, content structure, development and launch.</p></motion.div>
   {services.map(([n,t,d])=><motion.div {...reveal} key={n} className="service-row grid gap-5 border-b border-white/12 py-8 md:grid-cols-[100px_1fr_1fr] md:py-10"><span className="gold-label">{n}</span><h3 className="lux-serif text-4xl md:text-5xl">{t}</h3><p className="max-w-xl leading-7 text-white/45">{d}</p></motion.div>)}
  </div></section>
  <section id="work" className="bg-[#eee9df] px-5 py-28 md:px-10 md:py-40"><div className="mx-auto max-w-[1460px]">
   <motion.div {...reveal} className="mb-16 flex flex-col gap-7 border-b border-black/15 pb-10 md:flex-row md:items-end md:justify-between"><div><p className="gold-label">Selected industry concepts</p><h2 className="lux-serif mt-5 text-6xl md:text-8xl lg:text-[106px]">Built for your market.</h2></div><p className="max-w-md leading-7 text-black/50">Ten focused concept directions showing how premium positioning can translate across high-value service industries.</p></motion.div>
   <div className="grid gap-x-7 gap-y-16 md:grid-cols-2">{projects.map(([category,title,image,n],i)=><motion.article {...reveal} key={title} className={`project-card group ${i%3===1?"md:mt-24":""}`}><div className="relative aspect-[4/3] overflow-hidden bg-[#cfc8bb]"><Image src={image} alt={`${title} website concept`} fill className="object-cover object-top transition duration-[1200ms] ease-out group-hover:scale-[1.035]"/><div className="absolute inset-0 bg-black/5 transition group-hover:bg-transparent"/><span className="absolute right-4 top-4 rounded-full bg-[#eee9df]/90 px-4 py-2 text-[9px] uppercase tracking-[.2em] backdrop-blur">Industry concept</span></div><div className="mt-5 flex items-start justify-between border-t border-black/15 pt-5"><div><p className="gold-label">{category}</p><h3 className="lux-serif mt-2 text-4xl md:text-5xl">{title}</h3></div><span className="text-xs text-black/40">{n} / 10</span></div></motion.article>)}</div>
  </div></section>
  <section id="process" className="bg-[#d7c3a0] px-5 py-28 md:px-10 md:py-40"><div className="mx-auto grid max-w-[1460px] gap-16 lg:grid-cols-[1fr_1.15fr]"><motion.div {...reveal}><p className="gold-label text-black/55">A considered process</p><h2 className="lux-serif mt-5 text-6xl leading-[.98] md:text-8xl">Calm process.<br/>Sharp outcome.</h2></motion.div><div>{[["01","Discover"],["02","Position"],["03","Design"],["04","Build"],["05","Launch & evolve"]].map(([n,t])=><motion.div {...reveal} key={n} className="flex items-center justify-between border-b border-black/20 py-6"><span className="text-xs tracking-widest text-black/45">{n}</span><h3 className="lux-serif text-3xl md:text-4xl">{t}</h3><span>↗</span></motion.div>)}</div></div></section>
  <section className="hero-lux px-5 py-28 text-[#eee9df] md:px-10 md:py-40"><motion.div {...reveal} className="mx-auto max-w-[1460px]"><p className="gold-label">Projects from $10,000</p><h2 className="lux-serif mt-7 max-w-6xl text-6xl leading-[.92] tracking-[-.05em] md:text-8xl lg:text-[124px]">Let’s build the website your next chapter deserves.</h2><div className="mt-14"><Link href="/contact" className="lux-button">Start a conversation <span>↗</span></Link></div></motion.div></section><Footer/>
 </main>;
}
