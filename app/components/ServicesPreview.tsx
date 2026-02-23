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
      <div className="flex items-end justify-between gap-4">
        <div>
          <span className="badge">Treatments</span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Complete dental care under one roof
          </h2>
        </div>
        <Link href="/services" className="text-xs font-medium text-lime-300">
          View all services →
        </Link>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.name}
            className="card group flex flex-col overflow-hidden transition hover:border-lime-400/60 hover:bg-slate-900"
          >
            <div className="relative h-32 w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="260px"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between px-4 pb-4 pt-3">
              <h3 className="text-sm font-semibold text-lime-200 sm:text-base">
                {service.name}
              </h3>
              <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                {service.short}
              </p>
              <p className="mt-3 text-xs font-medium text-lime-300/80 opacity-0 transition group-hover:opacity-100">
                Learn more →
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

