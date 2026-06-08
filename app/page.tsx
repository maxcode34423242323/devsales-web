import Link from "next/link";
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
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pb-28 pt-48">
        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">
          Digital Infrastructure & Growth Engineering
        </p>

        <div className="mb-8 inline-flex rounded-full border border-zinc-800 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
          Projects Starting From €5,000
        </div>

        <h1 className="max-w-6xl text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
          Build Digital Assets That Generate Revenue.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-400">
          Premium websites, e-commerce platforms and mobile applications
          engineered to increase conversions, strengthen brand authority and
          support long-term growth.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:opacity-90"
          >
            Book a Strategy Call
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-zinc-700 px-8 py-4 transition hover:border-zinc-500"
          >
            Get Free Audit
          </Link>
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          Trusted by ambitious brands across Europe, the UK and UAE.
        </p>

        <div className="mt-20 grid gap-3 border-t border-zinc-900 pt-8 sm:grid-cols-3 md:grid-cols-6">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-xl border border-zinc-900 bg-zinc-950 px-4 py-3 text-center text-sm text-zinc-400"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            The Reality Check
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Your Website Is Losing Revenue Every Day.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Most companies don't have a traffic problem. They have a
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
            <div
              key={number}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-zinc-500"
            >
              <p className="text-4xl font-bold">{number}</p>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-24"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Services
        </p>

        <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
          Digital Infrastructure Built For Growth.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-zinc-500"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="work"
        className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-24"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Selected Work
        </p>

        <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
          Projects Designed To Perform.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Link
            href="/work/devilsales-auto"
            className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition hover:border-zinc-500"
          >
            <div className="h-56 overflow-hidden border-b border-zinc-800">
              <img
                src="/images/devilsales-home.png"
                alt="DevilSales Auto"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold">DevilSales Auto</h3>
              <p className="mt-3 text-zinc-400">Luxury Automotive Platform</p>
              <p className="mt-8 text-sm text-zinc-500 transition group-hover:text-white">
                View Case Study →
              </p>
            </div>
          </Link>

          <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition hover:border-zinc-500">
            <div className="h-56 overflow-hidden border-b border-zinc-800">
              <img
                src="/images/elite-estates.png"
                alt="Elite Estates"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold">Elite Estates</h3>
              <p className="mt-3 text-zinc-400">
                Luxury Real Estate Experience
              </p>
              <p className="mt-8 text-sm text-zinc-500">Coming Soon</p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition hover:border-zinc-500">
            <div className="h-56 overflow-hidden border-b border-zinc-800">
              <img
                src="/images/apex-legal.png"
                alt="Apex Legal"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold">Apex Legal</h3>
              <p className="mt-3 text-zinc-400">
                Premium Law Firm Transformation
              </p>
              <p className="mt-8 text-sm text-zinc-500">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-24"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Process
        </p>

        <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
          The DevSales Method.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-5">
          {process.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-center transition hover:border-zinc-500"
            >
              <p className="text-sm text-zinc-500">0{index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-32"
      >
        <div className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Free Audit
          </p>

          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Get A Free 60-Second Video Audit.
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-zinc-400">
            We'll identify the biggest conversion leaks on your website and
            show you exactly where revenue is being lost.
          </p>

          <div className="mt-12">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:opacity-90"
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