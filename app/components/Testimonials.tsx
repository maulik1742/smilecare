const testimonials = [
  {
    name: "Family Patient",
    text: "Very gentle and patient-friendly clinic. The doctor explained every step and my treatment was painless.",
  },
  {
    name: "Working Professional",
    text: "Flexible appointment timings and clean, modern setup. Highly recommended for regular dental care.",
  },
  {
    name: "Implant Patient",
    text: "Got my dental implant done here. The procedure was smooth and I can finally chew comfortably again.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-container py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="badge">Testimonials</span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Patients who trust their smile with us
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-300 sm:text-base">
            Real experiences from people who visited Smile Care Dental Clinic
            for everything from routine cleaning to advanced treatments.
          </p>
        </div>
        <p className="text-xs text-slate-400 sm:text-sm">
          Rated with care-first approach · Modern equipment · Friendly team
        </p>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <figure key={item.name} className="card relative p-5">
            <div className="absolute right-5 top-5 text-4xl leading-none text-lime-400/30">
              “
            </div>
            <blockquote className="text-sm leading-relaxed text-slate-200">
              {item.text}
            </blockquote>
            <figcaption className="mt-4 text-xs font-medium text-lime-200">
              {item.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}


