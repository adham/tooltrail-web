"use client";

import { useState } from "react";
import { HardHat, LayoutDashboard, Building2 } from "lucide-react";

const roles = [
  {
    id: "worker",
    icon: HardHat,
    label: "Field Workers",
    headline: "Check out tools in seconds. No paperwork, ever.",
    description:
      "Workers log in with their phone number and a 4-digit PIN. One QR scan checks a tool in or out. The app tells them where to return it, what condition to rate it, and whether a photo is needed — they just follow the prompts.",
    points: [
      "QR scan check-out from any smartphone",
      "Safety acknowledgement before access",
      "Photo evidence at return",
      "Damage reporting with photos",
      "View all your currently held tools",
      "Overdue reminders and due-date tracking",
    ],
  },
  {
    id: "manager",
    icon: LayoutDashboard,
    label: "Site Managers",
    headline: "Full visibility. Instant control.",
    description:
      "Managers get a live dashboard that shows exactly who has what, what's overdue, and what issues need attention. Triage reported problems, schedule maintenance, and pull an audit log for any asset in seconds.",
    points: [
      "Real-time asset dashboard",
      "Overdue asset alerts and reports",
      "Issue triage — approve or block checkouts",
      "Maintenance schedule tracking",
      "Worker management and SMS onboarding",
      "Complete audit log and history",
    ],
  },
  {
    id: "org-admin",
    icon: Building2,
    label: "Org Admins",
    headline: "Fleet-wide visibility. One control panel.",
    description:
      "Organisation admins see utilisation metrics across all managers and job sites, manage billing, and control who has access to what. Built for business owners who want accountability without micromanagement.",
    points: [
      "Cross-site utilisation metrics",
      "Manager and worker administration",
      "Billing and subscription management",
      "Organisation-wide settings",
      "Asset and workforce overview",
      "Role-based access control",
    ],
  },
];

export default function Roles() {
  const [active, setActive] = useState("manager");
  const activeRole = roles.find((r) => r.id === active)!;
  const Icon = activeRole.icon;

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Built for every role
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            One platform. Everyone covered.
          </h2>
          <p className="text-slate-600 text-lg">
            Different views, different needs. ToolTrail adapts to the person
            using it.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-100 rounded-xl p-1 gap-1">
            {roles.map((role) => {
              const RoleIcon = role.icon;
              return (
                <button
                  key={role.id}
                  onClick={() => setActive(role.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    active === role.id
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  <RoleIcon className="w-4 h-4" />
                  {role.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Role detail */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-5">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              {activeRole.headline}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-7">
              {activeRole.description}
            </p>
            <ul className="space-y-3">
              {activeRole.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-slate-700 text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual panel */}
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
            {active === "worker" && <WorkerMockup />}
            {active === "manager" && <ManagerMockup />}
            {active === "org-admin" && <OrgAdminMockup />}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkerMockup() {
  return (
    <div className="space-y-3">
      <div className="text-slate-400 text-xs font-mono mb-4">
        Worker home · Tom Barnes
      </div>
      <div className="bg-slate-800 rounded-xl p-4">
        <div className="text-slate-400 text-xs mb-1">Tools held by you</div>
        <div className="text-3xl font-bold text-white">3</div>
      </div>
      {[
        { name: "Makita Drill 18V", due: "Due in 3 days", color: "bg-green-500" },
        { name: "DeWalt Circular Saw", due: "OVERDUE", color: "bg-red-500" },
        { name: "Spirit Level 1200mm", due: "Due in 7 days", color: "bg-green-500" },
      ].map((item) => (
        <div
          key={item.name}
          className="bg-slate-800/70 rounded-lg px-4 py-3 flex items-center gap-3"
        >
          <div className={`w-2 h-2 rounded-full ${item.color} flex-shrink-0`} />
          <div className="flex-1 min-w-0">
            <div className="text-slate-200 text-sm font-medium truncate">
              {item.name}
            </div>
          </div>
          <div
            className={`text-xs font-medium flex-shrink-0 ${
              item.due === "OVERDUE" ? "text-red-400" : "text-slate-500"
            }`}
          >
            {item.due}
          </div>
        </div>
      ))}
      <button className="w-full mt-2 bg-orange-500 text-white rounded-xl py-3 text-sm font-semibold">
        📷 Scan a tool
      </button>
    </div>
  );
}

function ManagerMockup() {
  return (
    <div className="space-y-3">
      <div className="text-slate-400 text-xs font-mono mb-4">
        Manager dashboard
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Out", value: "24", color: "text-blue-400" },
          { label: "Overdue", value: "3", color: "text-red-400" },
          { label: "Issues", value: "2", color: "text-amber-400" },
        ].map((s) => (
          <div key={s.label} className="bg-slate-800 rounded-lg p-3 text-center">
            <div className={`text-xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-slate-500 text-xs">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
        <div className="text-red-400 text-xs font-semibold mb-2">
          ⚠️ Overdue assets
        </div>
        {["DeWalt Circular Saw — Tom Barnes", "Angle Grinder — Sam Cruz"].map(
          (s) => (
            <div key={s} className="text-slate-400 text-xs py-0.5">
              {s}
            </div>
          )
        )}
      </div>
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-3">
        <div className="text-amber-400 text-xs font-semibold mb-1">
          🔧 Issue pending triage
        </div>
        <div className="text-slate-400 text-xs">Hilti Hammer Drill — Blade worn</div>
        <div className="flex gap-2 mt-2">
          <button className="flex-1 bg-green-500/20 text-green-400 text-xs py-1.5 rounded-md">
            Allow
          </button>
          <button className="flex-1 bg-red-500/20 text-red-400 text-xs py-1.5 rounded-md">
            Block
          </button>
        </div>
      </div>
    </div>
  );
}

function OrgAdminMockup() {
  return (
    <div className="space-y-3">
      <div className="text-slate-400 text-xs font-mono mb-4">
        Org admin · Thornton Civil
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Total assets", value: "142" },
          { label: "Utilisation", value: "71%" },
          { label: "Active workers", value: "38" },
          { label: "Managers", value: "4" },
        ].map((s) => (
          <div key={s.label} className="bg-slate-800 rounded-lg p-3">
            <div className="text-xl font-bold text-white">{s.value}</div>
            <div className="text-slate-500 text-xs">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="bg-slate-800/60 rounded-lg px-4 py-3 border border-slate-700/40">
        <div className="text-slate-400 text-xs font-semibold mb-2">
          Subscription — Pro Plan
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-slate-500">Assets used</span>
          <span className="text-slate-300">142 / 500</span>
        </div>
        <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full w-[28%] bg-orange-500 rounded-full" />
        </div>
      </div>
    </div>
  );
}
