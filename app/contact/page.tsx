export default function ContactPage() {
  return (
    <div className="section-container space-y-10 pb-16">
      <header className="max-w-3xl pt-2">
        <span className="badge">Contact</span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
          Book your visit
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
          Send a quick enquiry or call for same‑day availability.
        </p>
      </header>

      <section className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
        <form className="card space-y-5 p-8 shadow-2xl">
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Full name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 outline-none ring-lime-400/0 transition focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20"
            />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Mobile number
              </label>
              <input
                type="tel"
                placeholder="099702 79892"
                className="w-full rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 outline-none ring-lime-400/0 transition focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Preferred date
              </label>
              <input
                type="date"
                className="w-full rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 outline-none ring-lime-400/0 transition focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Treatment / concern
            </label>
            <textarea
              rows={4}
              placeholder="Example: pain in upper tooth, want to replace missing tooth, regular check-up etc."
              className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 outline-none ring-lime-400/0 transition focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20"
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full py-4 text-base font-bold shadow-xl md:w-auto"
          >
            Submit enquiry
          </button>
          <p className="text-xs leading-relaxed text-slate-400">
            For faster response, call{" "}
            <a
              href="tel:09970279892"
              className="font-bold text-lime-400 hover:text-lime-300"
            >
              099702 79892
            </a>{" "}
            or email{" "}
            <a
              href="mailto:aurabhinam@gmail.com"
              className="font-bold text-lime-400 hover:text-lime-300"
            >
              saurabhinam@gmail.com
            </a>
          </p>
        </form>

        <aside className="space-y-6">
          <div className="card p-8 shadow-2xl">
            <h2 className="text-xl font-bold text-lime-200">Clinic address</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Shop no. 1, Sunny Society, Lal Bahadur Shastri Rd, 400070
              <br />
              Kurla West, Maharashtra, India
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
              <p className="text-sm font-medium text-emerald-400">
                Active Appointment Hours
              </p>
            </div>
          </div>

          <div className="card overflow-hidden rounded-3xl border border-white/10 p-0 shadow-2xl">
            <div className="aspect-video">
              <iframe
                title="Smile Care Dental Clinic map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.7387752087541!2d72.8747075!3d19.0657116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9a556777eef%3A0x23bab342ac97014f!2sSmile%20Care%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1771852123345!5m2!1sen!2sin"
                className="h-full w-full border-0 transition-opacity duration-500 hover:opacity-100"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
