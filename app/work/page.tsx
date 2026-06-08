import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-48">
        <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
          Portfolio
        </p>

        <h1 className="mt-6 max-w-5xl text-6xl font-bold leading-tight tracking-tight md:text-7xl">
          Selected Work.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-400">
          Premium websites, e-commerce platforms and digital systems engineered
          for growth, conversion and long-term scalability.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-8 md:grid-cols-3">

          <Link
            href="/work/devilsales-auto"
            className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition hover:border-zinc-500"
          >
            <div className="overflow-hidden">
              <Image
                src="/images/devilsales-home.png"
                alt="DevilSales Auto"
                width={1200}
                height={800}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold">
                DevilSales Auto
              </h3>

              <p className="mt-3 text-zinc-400">
                Luxury Automotive Brokerage Platform
              </p>

              <p className="mt-8 text-sm text-zinc-500 transition group-hover:text-white">
                View Case Study →
              </p>
            </div>
          </Link>

          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 opacity-70">
            <div className="flex h-72 items-center justify-center bg-zinc-900">
              <p className="text-zinc-500">
                Coming Soon
              </p>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold">
                Elite Estates
              </h3>

              <p className="mt-3 text-zinc-400">
                Luxury Real Estate Platform
              </p>

              <p className="mt-8 text-sm text-zinc-500">
                Case Study In Progress
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 opacity-70">
            <div className="flex h-72 items-center justify-center bg-zinc-900">
              <p className="text-zinc-500">
                Coming Soon
              </p>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold">
                Apex Legal
              </h3>

              <p className="mt-3 text-zinc-400">
                Premium Law Firm Website
              </p>

              <p className="mt-8 text-sm text-zinc-500">
                Case Study In Progress
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}