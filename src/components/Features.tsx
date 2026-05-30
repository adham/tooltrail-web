import {
  QrCode,
  MapPin,
  Camera,
  AlertTriangle,
  Wrench,
  ClipboardList,
} from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "QR Code Check-Out",
    description:
      "Workers scan any tool in seconds using their phone camera. No app download, no paperwork. Safety sign-offs and training requirements enforced automatically before they walk off-site.",
    accent: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description:
      "See who has what, which zone it belongs to, and when it's due back — live. The manager dashboard updates the moment any tool moves.",
    accent: "bg-green-500/10 text-green-400",
  },
  {
    icon: Camera,
    title: "Photo Evidence",
    description:
      "Require return photos for high-value or high-risk assets. Workers capture condition shots and wide-angle location photos on return. Every return is timestamped and documented.",
    accent: "bg-purple-500/10 text-purple-400",
  },
  {
    icon: AlertTriangle,
    title: "Issue Reporting",
    description:
      "Workers flag damage from their phone the moment they spot it — with photos and notes. Managers triage instantly: block checkout until fixed, or allow it with a warning. Nothing slips through.",
    accent: "bg-amber-500/10 text-amber-400",
  },
  {
    icon: Wrench,
    title: "Maintenance Scheduling",
    description:
      "Set per-asset service intervals. ToolTrail tracks the last maintenance date and alerts you when service is overdue — before a breakdown costs you a job.",
    accent: "bg-red-500/10 text-red-400",
  },
  {
    icon: ClipboardList,
    title: "Complete Audit Trail",
    description:
      "Every check-out, return, condition rating, issue report, and manager action is permanently logged. Pull chain-of-custody reports for insurance claims, compliance audits, or incident investigations in seconds.",
    accent: "bg-orange-500/10 text-orange-400",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Everything you need
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Built for the real world of field work
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Not another spreadsheet or clipboard. ToolTrail is purpose-built for
            teams where tools move fast and accountability matters.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.accent} mb-5`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
