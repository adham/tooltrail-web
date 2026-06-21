export default function TrustBar() {
  return (
    <section className="bg-slate-950 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-orange-400 text-sm font-semibold mb-6 uppercase tracking-widest">
          Trusted by teams in
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {[
            "Construction",
            "Electrical & Plumbing",
            "Mining & Resources",
            "Facilities Management",
            "Manufacturing",
            "Civil Engineering",
          ].map((industry) => (
            <span
              key={industry}
              className="text-slate-200 text-sm font-semibold"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
