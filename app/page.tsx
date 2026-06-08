"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const services = [
    {
      title: "Custom Web Development",
      description:
        "Revenue-focused websites engineered for performance, scalability and growth.",
    },
    {
      title: "E-Commerce Infrastructure",
      description:
        "Online stores designed to increase conversion rates and average order value.",
    },
    {
      title: "Premium UI/UX Design",
      description:
        "Modern digital experiences that increase trust, engagement and retention.",
    },
    {
      title: "Mobile Applications",
      description:
        "Turnkey iOS and Android applications built for ambitious brands.",
    },
    {
      title: "Growth Engineering",
      description:
        "Continuous optimization, audits and performance improvements.",
    },
  ];

  const process = ["Discover", "Design", "Develop", "Launch", "Optimize"];

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind",
    "Sanity",
    "Vercel",
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200 opacity-40 blur-[140px]" />
        <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-purple-200 opacity-40 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-32 pt-48">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex rounded-full border border-zinc-300 bg-white/70 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-700 backdrop-blur">
              Projects Starting From €5,000
            </div>

            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">
              Digital Infrastructure & Growth Engineering
            </p>

            <h1 className="max-w-6xl text-6xl font-bold leading-[0.92] tracking-tight text-black md:text-8xl">
              Build Digital Assets
              <br />
              That Generate Revenue.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-600">
              Premium websites, e-commerce platforms and mobile applications
              engineered to increase conversions, strengthen brand authority and
              support long-term growth.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Book A Strategy Call
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-zinc-300 bg-white px-8 py-4 transition hover:bg-zinc-50"
              >
                Get Free Audit
              </Link>
            </div>

            <p className="mt-8 text-sm text-zinc-500">
              Trusted by ambitious brands across Europe, UK, UAE and North
              America.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-20 grid gap-3 border-t border-zinc-200 pt-8 sm:grid-cols-3 md:grid-cols-6"
          >
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-xl border border-zinc-200 bg-white/70 px-4 py-3 text-center text-sm text-zinc-600 shadow-sm backdrop-blur"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* REVENUE LEAKS */}
      <section className="mx-auto max-w-7xl border-t border-zinc-200 px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            The Reality Check
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-black md:text-5xl">
            Your Website Is Losing Revenue Every Day.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-600">
            Most companies don&apos;t have a traffic problem. They have a
            conversion, performance and trust problem.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {[
            [
              "53%",
              "Visitors leave when a website takes longer than 3 seconds to load.",
            ],
            ["70%+", "Most digital traffic now happens on mobile devices."],
            ["94%", "First impressions are influenced by design and usability."],
            ["22%", "Average conversion lift after UX optimization."],
          ].map(([number, text]) => (
            <motion.div
              key={number}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition"
            >
              <p className="text-4xl font-bold text-black">{number}</p>
              <p className="mt-4 text-sm leading-6 text-zinc-600">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="mx-auto max-w-7xl border-t border-zinc-200 px-6 py-24"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Services
        </p>

        <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-black md:text-5xl">
          Digital Infrastructure Built For Growth.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition"
            >
              <h3 className="text-xl font-semibold text-black">
                {service.title}
              </h3>
              <p className="mt-4 leading-relaxed text-zinc-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section
        id="work"
        className="mx-auto max-w-7xl border-t border-zinc-200 px-6 py-24"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Selected Work
            </p>

            <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-black md:text-5xl">
              Projects Designed To Perform.
            </h2>
          </div>

          <Link
            href="/work"
            className="w-fit rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-50"
          >
            View All Work
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Link
            href="/work/devilsales-auto"
            className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="h-56 overflow-hidden border-b border-zinc-200">
              <img
                src="/images/devilsales-home.png"
                alt="DevilSales Auto"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-black">DevilSales Auto</h3>
              <p className="mt-3 text-zinc-600">Luxury Automotive Platform</p>
              <p className="mt-8 text-sm text-zinc-500 transition group-hover:text-black">
                View Case Study →
              </p>
            </div>
          </Link>

          <div className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="h-56 overflow-hidden border-b border-zinc-200">
              <img
                src="/images/elite-estates.png"
                alt="Elite Estates"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-black">Elite Estates</h3>
              <p className="mt-3 text-zinc-600">
                Luxury Real Estate Experience
              </p>
              <p className="mt-8 text-sm text-zinc-500">Coming Soon</p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="h-56 overflow-hidden border-b border-zinc-200">
              <img
                src="/images/apex-legal.png"
                alt="Apex Legal"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-black">Apex Legal</h3>
              <p className="mt-3 text-zinc-600">
                Premium Law Firm Transformation
              </p>
              <p className="mt-8 text-sm text-zinc-500">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="mx-auto max-w-7xl border-t border-zinc-200 px-6 py-24"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Process
        </p>

        <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-black md:text-5xl">
          The DevSales Method.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-5">
          {process.map((step, index) => (
            <motion.div
              key={step}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition"
            >
              <p className="text-sm text-zinc-500">0{index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold text-black">{step}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-zinc-200 bg-zinc-50 px-6 py-32"
      >
        <div className="absolute left-1/2 top-20 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-200 opacity-40 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Free Audit
            </p>

            <h2 className="text-5xl font-bold leading-tight tracking-tight text-black">
              Get A Free 60-Second Video Audit.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-zinc-600">
              We&apos;ll identify the biggest conversion leaks on your website
              and show you exactly where revenue is being lost.
            </p>

            <div className="mt-12">
              <Link
                href="/contact"
                className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Request My Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}