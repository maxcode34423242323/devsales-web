import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-white/75 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-sm font-black uppercase tracking-[0.45em] text-black"
        >
          DEVILSALES
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
          <Link href="/" className="transition hover:text-black">
            Home
          </Link>
          <Link href="/#services" className="transition hover:text-black">
            Services
          </Link>
          <Link href="/work" className="transition hover:text-black">
            Work
          </Link>
          <Link href="/#process" className="transition hover:text-black">
            Process
          </Link>
          <Link href="/contact" className="transition hover:text-black">
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:opacity-90"
        >
          Book Call
        </Link>
      </div>
    </header>
  );
}