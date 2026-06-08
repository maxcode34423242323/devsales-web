import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-900 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.35em] text-white"
        >
          DevSales Web
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>

          <Link href="/#services" className="transition hover:text-white">
            Services
          </Link>

          <Link href="/#work" className="transition hover:text-white">
            Work
          </Link>

          <Link href="/#process" className="transition hover:text-white">
            Process
          </Link>

          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90"
        >
          Book Call
        </Link>
      </div>
    </header>
  );
}