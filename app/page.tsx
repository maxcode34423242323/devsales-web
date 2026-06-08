"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const services = [
    ["Custom Web Development", "Revenue-focused websites engineered for performance, scalability and growth."],
    ["E-Commerce Infrastructure", "Online stores designed to increase conversion rates and average order value."],
    ["Premium UI/UX Design", "Modern digital experiences that increase trust, engagement and retention."],
    ["Mobile Applications", "Turnkey iOS and Android applications built for ambitious brands."],
    ["Growth Engineering", "Continuous optimization, audits and performance improvements."],
    ["SEO Optimization", "Technical SEO foundations built for visibility, indexing and organic growth."],
  ];

  const process = ["Discover", "Design", "Develop", "Launch", "Optimize"];

  const technologies = ["Next.js", "React", "TypeScript", "Tailwind", "Sanity", "Vercel"];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8fb] text-black">
      <Navbar />

      <section className="relative px-6 pb-32 pt-48">
        <div className="absolute left-1/2 top-0 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-blue-200/50 blur-[160px]" />
        <div className="absolute right-[-120px] top-40 h-[520px] w-[520px] rounded-full bg-violet-200/60 blur-[150px]" />
        <div className="absolute left-[-120px] top-72 h-[420px] w-[420px] rounded-full bg-cyan-100 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl"
          >
            <div className="mb-8 inline-flex rounded-full border border-black/10 bg-white/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-700 shadow-sm backdrop-blur">
              Projects Starting From €5,000
            </div>

            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.4em] text-zinc-500">
              Premium Digital Infrastructure
            </p>

            <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.06em] text-black md:text-8xl">
              Build Websites
              <br />
              That Convert Into
              <br />
              Revenue.
            </h1>

            <p className="mt-9 max-w-3xl text-xl leading-relaxed text-zinc-600">
              DevilSales Web designs premium websites, e-commerce platforms and
              mobile applications engineered to increase conversions, strengthen
              brand authority and support long-term growth.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-2xl bg-black px-8 py-4 font-bold text-white shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:opacity-90"
              >
                Book A Strategy Call
              </Link>

              <Link
                href="/work"
                className="rounded-2xl border border-black/10 bg-white px-8 py-4 font-bold text-black shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-20 rounded-[2rem] border border-black/10 bg-white/75 p-4 shadow-2xl shadow-black/10 backdrop-blur-xl"
          >
            <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-6">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-center text-sm font-semibold text-zinc-600 shadow-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
          The Reality Check
        </p>

        <h2 className="max-w-4xl text-5xl font-black tracking-[-0.04em] md:text-6xl">
          Your Website Is Losing Revenue Every Day.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
          Most companies do not have a traffic problem. They have a conversion,
          performance and trust problem.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {[
            ["53%", "Visitors leave when a website takes longer than 3 seconds to load."],
            ["70%+", "Most digital traffic now happens on mobile devices."],
            ["94%", "First impressions are influenced by design and usability."],
            ["22%", "Average conversion lift after UX optimization."],
          ].map(([number, text]) => (
            <motion.div
              key={number}
              whileHover={{ y: -8 }}
              className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-xl shadow-black/5"
            >
              <p className="text-5xl font-black">{number}</p>
              <p className="mt-5 text-sm leading-6 text-zinc-600">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
          Services
        </p>

        <h2 className="max-w-4xl text-5xl font-black tracking-[-0.04em] md:text-6xl">
          Digital Infrastructure Built For Growth.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, description]) => (
            <motion.div
              key={title}
              whileHover={{ y: -8 }}
              className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-xl shadow-black/5"
            >
              <h3 className="text-2xl font-black">{title}</h3>
              <p className="mt-4 leading-relaxed text-zinc-600">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-28">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
              Selected Work
            </p>

            <h2 className="max-w-4xl text-5xl font-black tracking-[-0.04em] md:text-6xl">
              Projects Designed To Perform.
            </h2>
          </div>

          <Link
            href="/work"
            className="w-fit rounded-2xl border border-black/10 bg-white px-7 py-4 font-bold shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            View All Work
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Link
            href="/work/devilsales-auto"
            className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl shadow-black/5 transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="h-64 overflow-hidden border-b border-zinc-200">
              <img
                src="/images/devilsales-home.png"
                alt="DevilSales Auto"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-black">DevilSales Auto</h3>
              <p className="mt-3 text-zinc-600">Luxury Automotive Platform</p>
              <p className="mt-8 text-sm font-bold text-zinc-500 group-hover:text-black">
                View Case Study →
              </p>
            </div>
          </Link>

          {[
            ["Elite Estates", "Luxury Real Estate Experience"],
            ["Apex Legal", "Premium Law Firm Transformation"],
          ].map(([title, subtitle]) => (
            <div
              key={title}
              className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl shadow-black/5 opacity-80"
            >
              <div className="flex h-64 items-center justify-center bg-zinc-100">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-zinc-400">
                  Coming Soon
                </p>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-black">{title}</h3>
                <p className="mt-3 text-zinc-600">{subtitle}</p>
                <p className="mt-8 text-sm font-bold text-zinc-500">
                  Case Study In Progress
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
          Process
        </p>

        <h2 className="max-w-4xl text-5xl font-black tracking-[-0.04em] md:text-6xl">
          The DevilSales Method.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-5">
          {process.map((step, index) => (
            <motion.div
              key={step}
              whileHover={{ y: -8 }}
              className="rounded-[2rem] border border-black/10 bg-white p-8 text-center shadow-xl shadow-black/5"
            >
              <p className="text-sm font-bold text-zinc-400">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-2xl font-black">{step}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-black px-6 py-32 text-white"
      >
        <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/30 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-400">
            Free Audit
          </p>

          <h2 className="max-w-4xl text-5xl font-black leading-tight tracking-[-0.04em] md:text-6xl">
            Get A Free 60-Second Video Audit.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-300">
            We will identify the biggest conversion leaks on your website and
            show exactly where revenue is being lost.
          </p>

          <div className="mt-12">
            <Link
              href="/contact"
              className="rounded-2xl bg-white px-8 py-4 font-bold text-black transition hover:-translate-y-1 hover:opacity-90"
            >
              Request My Audit
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}