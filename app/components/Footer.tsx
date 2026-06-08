import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold text-black">
              DevSales Web
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-600">
              Premium websites, e-commerce platforms and mobile applications
              engineered for ambitious brands across Europe, UK, UAE and North
              America.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-black">
              Services
            </h4>

            <ul className="space-y-3 text-sm text-zinc-600">
              <li>Web Development</li>
              <li>E-Commerce</li>
              <li>Mobile Applications</li>
              <li>UI/UX Design</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-black">
              Portfolio
            </h4>

            <ul className="space-y-3 text-sm text-zinc-600">
              <li>
                <Link
                  href="/work/devilsales-auto"
                  className="transition hover:text-black"
                >
                  DevilSales Auto
                </Link>
              </li>

              <li>Elite Estates</li>
              <li>Apex Legal</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-black">
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-zinc-600">
              <li>info@devsales.dev</li>
              <li>Europe</li>
              <li>United Kingdom</li>
              <li>United Arab Emirates</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-zinc-200 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 DevSales Web. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-black"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-black"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}