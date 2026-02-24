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
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Patients who trust their smile with us
          </h2>
          <p className="mt-2 max-w-xl text-base text-slate-300">
            Real experiences from people who visited Smile Care Dental Clinic
            for everything from routine cleaning to advanced treatments.
          </p>
        </div>
        <p className="text-sm font-medium text-slate-400">
          Rated with care-first approach · Modern equipment · Friendly team
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <figure
            key={item.name}
            className="card relative p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="absolute right-6 top-6 text-5xl leading-none text-lime-400/20">
              “
            </div>
            <blockquote className="text-base leading-relaxed text-slate-200">
              {item.text}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="h-0.5 w-6 bg-lime-400/50" />
              <span className="text-sm font-bold text-lime-200">
                {item.name}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
