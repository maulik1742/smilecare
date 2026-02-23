import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="section-container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          {/* <div className="relative h-9 w-9 overflow-hidden rounded-2xl bg-slate-900/60 p-1.5"> */}
            <img
              src="/white_logo.png"
              alt="Smile Care Dental Clinic logo"
              className="object-contain h-14 w-auto"
            />
          {/* </div> */}
          {/* <div className="leading-tight">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
              Smile Care
            </p>
            <p className="text-sm font-medium text-slate-50">
              Dental & Implant Centre
            </p>
          </div> */}
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative transition hover:text-lime-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-primary hidden md:inline-flex">
          Book Appointment
        </Link>
      </div>
    </header>
  );
}


