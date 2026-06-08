import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-24 pt-48">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200 opacity-40 blur-[140px]" />
        <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-purple-200 opacity-40 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            Portfolio
          </p>

          <h1 className="mt-6 max-w-5xl text-6xl font-bold leading-tight tracking-tight text-black md:text-7xl">
            Selected Work.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-600">
            Premium websites, e-commerce platforms and digital systems
            engineered for growth, conversion and long-term scalability.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-8 md:grid-cols-3">
          <Link
            href="/work/devilsales-auto"
            className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="overflow-hidden border-b border-zinc-200">
              <Image
                src="/images/devilsales-home.png"
                alt="DevilSales Auto"
                width={1200}
                height={800}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-black">
                DevilSales Auto
              </h3>

              <p className="mt-3 text-zinc-600">
                Luxury Automotive Brokerage Platform
              </p>

              <p className="mt-8 text-sm text-zinc-500 transition group-hover:text-black">
                View Case Study →
              </p>
            </div>
          </Link>

          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg opacity-80">
            <div className="flex h-72 items-center justify-center bg-zinc-50">
              <p className="text-zinc-500">Coming Soon</p>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-black">Elite Estates</h3>

              <p className="mt-3 text-zinc-600">
                Luxury Real Estate Platform
              </p>

              <p className="mt-8 text-sm text-zinc-500">
                Case Study In Progress
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg opacity-80">
            <div className="flex h-72 items-center justify-center bg-zinc-50">
              <p className="text-zinc-500">Coming Soon</p>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-black">Apex Legal</h3>

              <p className="mt-3 text-zinc-600">
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