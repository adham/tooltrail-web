import { ArrowRight, CheckCircle } from "lucide-react";

const APP_SIGNUP_URL = "https://app.tooltrail.com.au/signup";

const trustPoints = [
  "14-day free trial",
  "No credit card required",
  "Cancel anytime",
];

export default function Hero() {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-orange-600/5 blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Now available in Australia
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
            Every tool.{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Accounted for.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            ToolTrail gives site managers real-time visibility into every piece
            of equipment from check-out to return, with QR codes, photo
            evidence, and automatic overdue alerts.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={APP_SIGNUP_URL}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 w-full sm:w-auto justify-center"
            >
              Start your free trial
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-200 w-full sm:w-auto justify-center"
            >
              See how it works
            </a>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {trustPoints.map((point) => (
              <span
                key={point}
                className="flex items-center gap-1.5 text-slate-400 text-sm"
              >
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                {point}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-black/60">
            {/* Browser chrome */}
            <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-slate-700/50 rounded-md px-3 py-1 text-slate-400 text-xs font-mono text-center">
                  app.tooltrail.com.au/manager
                </div>
              </div>
            </div>

            {/* Dashboard UI mockup */}
            <div className="bg-slate-950 p-6">
              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { label: "Assets Out", value: "24", color: "text-blue-400" },
                  { label: "Utilisation", value: "68%", color: "text-green-400" },
                  { label: "Overdue", value: "3", color: "text-red-400" },
                  { label: "Open Issues", value: "2", color: "text-amber-400" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/40"
                  >
                    <div className={`text-2xl font-bold ${stat.color} mb-0.5`}>
                      {stat.value}
                    </div>
                    <div className="text-slate-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Asset list mockup */}
              <div className="bg-slate-800/40 rounded-xl border border-slate-700/40 overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-700/40 flex items-center justify-between">
                  <span className="text-slate-300 text-sm font-medium">
                    Recent Activity
                  </span>
                  <span className="text-orange-500 text-xs">View all →</span>
                </div>
                <div className="divide-y divide-slate-700/30">
                  {[
                    {
                      asset: "Makita Drill 18V",
                      worker: "Tom Barnes",
                      action: "Checked out",
                      time: "2 min ago",
                      status: "checked-out",
                    },
                    {
                      asset: "DeWalt Circular Saw",
                      worker: "Jamie Lee",
                      action: "Returned - Good",
                      time: "14 min ago",
                      status: "returned",
                    },
                    {
                      asset: "Angle Grinder 230mm",
                      worker: "Sam Cruz",
                      action: "Issue reported",
                      time: "1 hr ago",
                      status: "issue",
                    },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="px-4 py-3 flex items-center gap-3"
                    >
                      <div
                        className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          row.status === "checked-out"
                            ? "bg-blue-500"
                            : row.status === "returned"
                            ? "bg-green-500"
                            : "bg-amber-500"
                        }`}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-slate-200 text-sm font-medium truncate">
                          {row.asset}
                        </div>
                        <div className="text-slate-500 text-xs">
                          {row.worker} · {row.action}
                        </div>
                      </div>
                      <div className="text-slate-600 text-xs flex-shrink-0">
                        {row.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Glow under the mockup */}
          <div
            aria-hidden
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-orange-500/10 blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}
