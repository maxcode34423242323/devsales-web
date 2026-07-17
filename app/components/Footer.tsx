"use client";
import Link from "next/link";
import {motion} from "framer-motion";
const reveal={initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:true,margin:"-80px"},transition:{duration:.7}};
export default function Footer(){return <footer className="mix-footer"><motion.div {...reveal} className="footer-shell">
  <div className="footer-cta"><h2>Starting a new project and think we&apos;re the right fit?</h2><Link href="/contact" className="footer-talk"><span>Let&apos;s Talk</span><span>Let&apos;s Talk</span></Link></div>
  <div className="footer-main"><div><Link className="footer-logo" href="/"><i>DS</i><span><b>DEVILSALES</b><small>WEB STUDIO · USA</small></span></Link><p>Strategy, design and development for ambitious service businesses across the United States.</p></div><div><h3>Pages</h3><Link href="/">Home</Link><Link href="/#services">Services</Link><Link href="/work">Portfolio</Link><Link href="/contact">Contact</Link></div><div><h3>Contact</h3><a href="mailto:info@devilsales.dev">info@devilsales.dev</a><a href="tel:+13155478952">315-547-8952</a><p>Serving businesses across the USA</p></div></div>
  <div className="footer-bottom"><span>© 2026 DevilSales Web</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/sms-policy">SMS</Link></div><span>Built for serious growth.</span></div>
 </motion.div></footer>}
