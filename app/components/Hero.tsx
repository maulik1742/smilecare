import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section-container grid gap-10 pb-16 pt-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center lg:gap-16">
      <div className="space-y-4">
        <span className="badge">Gentle Dentistry in Kurla West</span>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
          Confident smiles,{" "}
          <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-300 bg-clip-text text-transparent">
            comfortable care
          </span>
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Gentle, modern dentistry in Kurla West for everyday care, braces,
          implants and more.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Book an appointment
          </Link>
          <Link href="/services" className="btn-ghost">
            View treatments
          </Link>
        </div>
        <dl className="mt-4 grid grid-cols-3 gap-4 text-xs text-slate-300 sm:text-sm md:max-w-md">
          <div>
            <dt className="font-semibold text-slate-100">Location</dt>
            <dd>Kurla West, Mumbai</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Languages</dt>
            <dd>English, Hindi, Marathi</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Contact</dt>
            <dd>099702 79892</dd>
          </div>
        </dl>
      </div>

      <div className="relative mx-auto flex max-w-sm items-center justify-center">
        <div className="card relative w-full max-w-xs overflow-hidden p-3">
          <div className="pointer-events-none absolute -right-16 -top-20 h-40 w-40 rounded-full bg-lime-400/20 blur-3xl" />
          <div className="relative flex flex-col items-center gap-3 text-center">
            <div className="relative h-36 w-full overflow-hidden rounded-2xl animate-float">
              <Image
                src="/clinic/1.jpg"
                alt="Patient smiling after dental treatment"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
            <p className="text-xs font-medium text-lime-200">
              Comfortable, patient‑friendly clinic with a focus on natural‑looking
              smiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


