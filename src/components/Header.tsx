import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
      <nav className="hero-nav mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4">
        <Link to="/" className="text-sm font-medium tracking-[0.24em] no-underline uppercase">
          Tulme
        </Link>

        <div className="hero-nav-muted hidden items-center gap-8 text-[0.68rem] tracking-[0.28em] uppercase md:flex">
          <a href="/#collections" className="hero-nav transition no-underline">
            Collections
          </a>
          <a href="/#brands" className="hero-nav transition no-underline">
            Brands
          </a>
          <a href="/#design-logistics" className="hero-nav transition no-underline">
            Route
          </a>
          <a href="/#process" className="hero-nav transition no-underline">
            Process
          </a>
          <a href="/#contact" className="hero-nav transition no-underline">
            Contact
          </a>
        </div>

        <a
          href="/#contact"
          className="hero-nav border-b border-hero-border pb-1 text-[0.68rem] tracking-[0.28em] uppercase transition no-underline"
        >
          Demand perfection
        </a>
      </nav>
    </header>
  );
}
