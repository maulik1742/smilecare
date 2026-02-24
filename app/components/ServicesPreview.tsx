import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Dental Implants",
    image: "/services/dental_implant.jpg",
    short: "Replace missing teeth with fixed, natural‑looking crowns.",
  },
  {
    name: "Teeth Whitening",
    image: "/services/teeth_bleaching.jpg",
    short: "Brighten stained teeth safely under dentist supervision.",
  },
  {
    name: "Braces & Aligners",
    image: "/services/dental_braces.webp",
    short: "Straighten crowded teeth and improve your bite.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="section-container py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <span className="badge">Treatments</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Complete dental care under one roof
          </h2>
        </div>
        <Link
          href="/services"
          className="text-sm font-medium text-lime-300 hover:text-lime-200"
        >
          View all services →
        </Link>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.name}
            className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950 transition-all duration-500 hover:-translate-y-2 hover:border-lime-400/50 hover:shadow-[0_20px_50px_rgba(163,230,53,0.15)]"
          >
            {/* Image Section */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(min-width: 768px) 400px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            </div>

            {/* Content Section */}
            <div className="relative flex flex-1 flex-col p-8 pt-6">
              <div className="mb-4 flex h-1.5 w-12 rounded-full bg-lime-400/30 transition-all duration-500 group-hover:w-20 group-hover:bg-lime-400" />

              <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-lime-300 sm:text-2xl">
                {service.name}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-200">
                {service.short}
              </p>

              <div className="mt-auto pt-8">
                <Link
                  href="/services"
                  className="text-sm font-medium text-lime-300 hover:text-lime-200"
                >
                  <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-lime-400 transition-all duration-300 group-hover:gap-3 group-hover:text-lime-300">
                    Explore Treatment
                    <span className="text-lg">→</span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Decorative background glow */}
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-lime-400/5 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </section>
  );
}
