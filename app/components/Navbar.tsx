"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["Expertise", "/#services"], ["Selected work", "/#work"], ["Process", "/#process"], ["Contact", "/contact"]];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#151614]/80 text-[#f3efe6] backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-10">
        <Link href="/" className="flex items-center gap-3 font-black tracking-[-.04em]">
          <span className="grid h-8 w-8 place-items-center border border-[#bca579] text-sm font-normal">D</span>
          <span className="text-sm tracking-[.06em]">DEVILSALES<span className="font-normal text-[#bca579]"> / WEB</span></span>
        </Link>
        <nav className="hidden items-center gap-9 text-[12px] font-bold uppercase tracking-[.14em] text-white/65 md:flex">
          {links.map(([label, href]) => <Link key={label} href={href} className="transition hover:text-white">{label}</Link>)}
        </nav>
        <Link href="/contact" className="hidden border border-[#bca579]/60 px-5 py-3 text-[10px] font-bold uppercase tracking-[.16em] transition hover:bg-[#bca579] hover:text-black md:block">Start a project ↗</Link>
        <button onClick={() => setOpen(!open)} className="text-xs font-black uppercase tracking-widest md:hidden" aria-expanded={open}>Menu</button>
      </div>
      {open && <nav className="border-t border-white/10 bg-[#151614] px-5 py-5 md:hidden">{links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={label} href={href} className="block border-b border-white/10 py-4 text-xl font-bold">{label}</Link>)}</nav>}
    </header>
  );
}
