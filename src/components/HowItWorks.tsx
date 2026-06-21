const steps = [
  {
    number: "01",
    title: "Label your assets",
    description:
      "Add your tools to ToolTrail, print QR stickers, and stick them on. Assign zones, categories, safety requirements, and maintenance intervals. Most teams are fully set up in under an hour.",
    detail: "Drag-and-drop QR label printing · Import from CSV · Category & zone management",
  },
  {
    number: "02",
    title: "Workers scan & go",
    description:
      "A quick camera scan checks a tool in or out - right from any smartphone browser, no app install needed. Safety acknowledgements, return photo requirements, and due dates are enforced automatically.",
    detail: "Works on any iOS or Android · No app download · PIN-based login",
  },
  {
    number: "03",
    title: "Managers stay in control",
    description:
      "Get live overdue alerts, triage reported issues, approve or block checkouts, track maintenance schedules, and pull complete audit reports - all from one dashboard, on any device.",
    detail: "Real-time dashboard · Overdue alerts · Full audit export",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-900 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Up and running in minutes
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            No lengthy onboarding. No IT project. Workers set up their account
            from an SMS link in under 60 seconds.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-14 left-1/2 -translate-x-1/2 w-[calc(66%-120px)] h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"
          />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Step number bubble */}
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white font-extrabold text-sm flex items-center justify-center mb-6 mx-auto lg:mx-0 z-10 relative shadow-lg shadow-orange-500/40">
                  {step.number}
                </div>

                <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-7 hover:border-orange-500/30 transition-colors duration-300">
                  <h3 className="text-white font-bold text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {step.description}
                  </p>
                  <div className="border-t border-slate-700/60 pt-4">
                    {step.detail.split(" · ").map((d) => (
                      <div
                        key={d}
                        className="flex items-center gap-2 text-slate-500 text-xs mb-1.5 last:mb-0"
                      >
                        <span className="w-1 h-1 rounded-full bg-orange-500 flex-shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow callout */}
        <div className="mt-16 bg-gradient-to-r from-orange-500/10 to-amber-500/5 border border-orange-500/20 rounded-2xl p-8 text-center">
          <p className="text-slate-300 text-lg">
            <span className="text-white font-semibold">From shed to job site and back.</span>{" "}
            Every movement photographed, rated, and logged. The full chain of custody,
            automatically.
          </p>
        </div>
      </div>
    </section>
  );
}
