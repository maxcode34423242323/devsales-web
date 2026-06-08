import Image from "next/image";
import Footer from "../../components/Footer";

export default function DevilSalesAutoCaseStudy() {
  const technologies = [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Sanity CMS",
    "Vercel",
    "Lead API",
    "Telegram CRM",
  ];

  const results = [
    ["100%", "Custom Platform"],
    ["CMS", "Inventory Management"],
    ["CRM", "Lead Automation"],
    ["SEO", "Growth Ready"],
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-32">
        <a href="/" className="text-sm text-zinc-500 transition hover:text-white">
          ← Back to Home
        </a>

        <p className="mt-16 mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Case Study
        </p>

        <h1 className="max-w-5xl text-6xl font-bold leading-tight tracking-tight md:text-8xl">
          DevilSales Auto
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-400">
          A luxury automotive brokerage platform engineered to showcase premium
          vehicles, capture qualified leads and support future international
          expansion.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <span className="rounded-full border border-zinc-800 px-5 py-3 text-sm text-zinc-400">
            Luxury Automotive
          </span>
          <span className="rounded-full border border-zinc-800 px-5 py-3 text-sm text-zinc-400">
            Lead Generation
          </span>
          <span className="rounded-full border border-zinc-800 px-5 py-3 text-sm text-zinc-400">
            CMS Platform
          </span>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
          <Image
            src="/images/devilsales-home.png"
            alt="DevilSales Auto homepage"
            width={1600}
            height={900}
            className="w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto grid max-w-7xl gap-10 border-t border-zinc-900 px-6 py-24 md:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Project
          </p>
          <p className="mt-3 text-xl font-semibold">Automotive Platform</p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Market
          </p>
          <p className="mt-3 text-xl font-semibold">Italy + International</p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Objective
          </p>
          <p className="mt-3 text-xl font-semibold">Inventory + Lead Growth</p>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          The Challenge
        </p>

        <h2 className="max-w-4xl text-5xl font-bold tracking-tight">
          Build a premium digital presence for a luxury automotive brand.
        </h2>

        <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">
          DevilSales Auto needed more than a simple dealership website. The
          platform had to present premium vehicles with a luxury visual style,
          manage inventory through a CMS, capture qualified leads, support
          multilingual expansion and create a digital foundation for future
          brokerage, sourcing and consulting services.
        </p>
      </section>

      {/* CAR PAGE IMAGE */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
          <Image
            src="/images/devilsales-car.png"
            alt="DevilSales Auto vehicle page"
            width={1600}
            height={900}
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* SOLUTION */}
      <section className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          The Solution
        </p>

        <h2 className="max-w-4xl text-5xl font-bold tracking-tight">
          A custom automotive platform built for conversion and control.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
            <h3 className="text-xl font-semibold">Dynamic Vehicle Inventory</h3>
            <p className="mt-4 leading-relaxed text-zinc-400">
              A custom inventory system allows vehicles to be published,
              updated and managed through Sanity CMS without touching code.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
            <h3 className="text-xl font-semibold">Premium Vehicle Pages</h3>
            <p className="mt-4 leading-relaxed text-zinc-400">
              Individual car pages showcase gallery images, pricing, technical
              details and luxury positioning in a clean dark interface.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
            <h3 className="text-xl font-semibold">Lead Capture Architecture</h3>
            <p className="mt-4 leading-relaxed text-zinc-400">
              Conversion-focused forms collect buyer enquiries, consultation
              requests and sourcing leads directly from the website.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
            <h3 className="text-xl font-semibold">Telegram CRM Notifications</h3>
            <p className="mt-4 leading-relaxed text-zinc-400">
              Every lead is automatically sent to Telegram, creating a fast
              response workflow for sales conversations.
            </p>
          </div>
        </div>
      </section>

      {/* LEAD IMAGE */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
          <Image
            src="/images/devilsales-lead.png"
            alt="DevilSales Auto lead generation form"
            width={1600}
            height={900}
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Technology Stack
        </p>

        <h2 className="text-5xl font-bold tracking-tight">
          Modern stack. Fast execution. Scalable foundation.
        </h2>

        <div className="mt-10 flex flex-wrap gap-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-full border border-zinc-800 px-5 py-3 text-sm text-zinc-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Results
        </p>

        <h2 className="max-w-4xl text-5xl font-bold tracking-tight">
          A premium digital platform ready for lead generation and growth.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {results.map(([number, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8"
            >
              <p className="text-4xl font-bold">{number}</p>
              <p className="mt-3 text-zinc-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-32">
        <h2 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight">
          Looking to build a digital platform that actually drives business?
        </h2>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-400">
          DevSales Web designs and engineers premium websites, e-commerce
          platforms and mobile applications for ambitious brands across Europe,
          the UK, UAE and North America.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="/#contact"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:opacity-90"
          >
            Book a Strategy Call
          </a>

          <a
            href="/"
            className="rounded-xl border border-zinc-700 px-8 py-4 transition hover:border-zinc-500"
          >
            Back To Home
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}