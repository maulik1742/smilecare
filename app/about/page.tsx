import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="section-container space-y-8 pb-16">
      <header className="max-w-3xl pt-2">
        <span className="badge">About the clinic</span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
          A neighbourhood clinic built around your comfort
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
          Warm, clean and modern setup with a calm, non‑hospital feel.
        </p>
      </header>

      <section className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
        <article className="card p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-lime-200">
            Why families choose Smile Care
          </h2>
          <ul className="mt-6 space-y-4 text-base text-slate-200">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-lime-400" />
              <span>
                Friendly, patient‑first experience &mdash; we explain every
                treatment in simple language before we start.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-lime-400" />
              <span>
                Modern equipment and strict infection‑control protocol for safe,
                clean dentistry.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-lime-400" />
              <span>
                Transparent plans &amp; options so you know what to expect in
                terms of visits and costs.
              </span>
            </li>
          </ul>

          <div className="mt-8 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-lime-400">1K+</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                Smiles treated*
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-lime-400">3+</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                Languages
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-lime-400">Hitech</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                Comfort care
              </p>
            </div>
          </div>
        </article>

        <div className="space-y-6">
          <div className="card overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <div className="relative h-64 w-full md:h-80">
              <Image
                src="/clinic/2.jpg"
                alt="Dental treatment room at Smile Care Dental Clinic"
                fill
                sizes="(min-width: 768px) 500px, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>

          <div className="card border-lime-400/20 bg-lime-400/5 px-6 py-5 shadow-lg">
            <p className="text-sm font-bold text-lime-300 sm:text-base">
              Easy to reach, easy to trust
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Located at Sunny Society on LBS Road, with flexible appointments
              that suit working professionals, students and senior citizens.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
