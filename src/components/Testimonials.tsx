const testimonials = [
  {
    quote:
      "We used to lose tens of thousands in tools every year. Now I know exactly where every piece of equipment is, who has it, and when it's due back. ToolTrail paid for itself in the first month.",
    name: "Jake Thornton",
    title: "Site Manager",
    company: "Thornton Civil Contracting",
    initials: "JT",
    color: "bg-blue-500",
  },
  {
    quote:
      "My team of 40 electricians used to run off a whiteboard and gut feel. Now every instrument and piece of test gear is tracked. The damage reporting feature alone has saved us thousands in false insurance claims.",
    name: "Sarah Keller",
    title: "Operations Manager",
    company: "Keller Electrical Services",
    initials: "SK",
    color: "bg-purple-500",
  },
  {
    quote:
      "Setup took less than an hour. Workers were scanning tools by lunch. The QR scan flow is so simple that our guys actually use it - and that's what we'd always struggled with before.",
    name: "David Russo",
    title: "Workshop Manager",
    company: "Russo Industrial",
    initials: "DR",
    color: "bg-green-500",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Customer stories
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Teams that stopped losing tools
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col"
            >
              {/* Quote mark */}
              <svg
                className="w-8 h-8 text-orange-500/30 mb-4 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.79 1.21-1.42 2.04-1.9.23-.13.26-.43.06-.6l-1.04-.87c-.18-.15-.44-.14-.61.04C7.27 8.14 6.51 9.32 6.09 10.7c-.44 1.38-.57 2.76-.39 4.14.18 1.38.64 2.55 1.38 3.51.74.96 1.68 1.55 2.82 1.76.54.1 1.02.06 1.44-.13.42-.19.74-.5.96-.93.22-.43.33-.93.33-1.49l-.46.21c-.16.07-.3.06-.43-.04-.13-.1-.22-.26-.27-.48-.05-.22-.07-.46-.07-.72zm9 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.79 1.21-1.42 2.04-1.9.23-.13.26-.43.06-.6l-1.04-.87c-.18-.15-.44-.14-.61.04-1.58 1.79-2.34 2.97-2.76 4.35-.44 1.38-.57 2.76-.39 4.14.18 1.38.64 2.55 1.38 3.51.74.96 1.68 1.55 2.82 1.76.54.1 1.02.06 1.44-.13.42-.19.74-.5.96-.93.22-.43.33-.93.33-1.49l-.46.21c-.16.07-.3.06-.43-.04-.13-.1-.22-.26-.27-.48-.05-.22-.07-.46-.07-.72z" />
              </svg>

              <p className="text-slate-700 text-sm leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-slate-900 font-semibold text-sm">
                    {t.name}
                  </div>
                  <div className="text-slate-500 text-xs">
                    {t.title} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-200 pt-14">
          {[
            { value: "< 1hr", label: "Average setup time" },
            { value: "98%", label: "Return rate improvement" },
            { value: "60 sec", label: "Worker account setup via SMS" },
            { value: "14 days", label: "Free trial, no credit card" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
