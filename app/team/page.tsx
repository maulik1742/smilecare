import Image from "next/image";

export default function TeamPage() {
  return (
    <div className="section-container space-y-10 pb-16">
      <header className="max-w-3xl pt-2">
        <span className="badge">Our Doctor</span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
          A caring dentist focused on long‑term oral health
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
          Meet the expert behind Smile Care Dental Clinic.
        </p>
      </header>

      <section className="grid gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-start">
        <article className="card p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-lime-200">
            Doctor&apos;s introduction
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-200">
            <p>
              Use this space to write a few lines about why the doctor chose
              dentistry, years of experience and special interests such as
              implants, braces or cosmetic work.
            </p>
            <p>
              Add one short paragraph on their philosophy: clear explanations,
              transparent treatment plans and a calm, caring chair‑side manner.
            </p>
          </div>
        </article>

        <div className="card overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <div className="relative h-80 w-full md:h-96">
            <Image
              src="/clinic/doctor.jpg"
              alt="Dental themed background"
              fill
              sizes="(min-width: 768px) 500px, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>
      </section>

      <section className="card p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-lime-200">
          Credentials & memberships
        </h2>
        <ul className="mt-6 grid gap-4 text-base md:grid-cols-3">
          <li className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
            <span>Degree & college</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
            <span>Key certifications</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
            <span>Associations</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
