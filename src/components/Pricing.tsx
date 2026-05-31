"use client";

import { useState } from "react";
import { Check, Zap } from "lucide-react";

const APP_SIGNUP_URL = "https://app.tooltrail.com.au/signup";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 59,
    annualPrice: 49,
    description: "For small crews getting started with tool accountability.",
    highlight: false,
    badge: null,
    features: [
      "Up to 100 assets",
      "Up to 15 workers",
      "1 manager account",
      "QR code check-out & return",
      "Issue reporting & triage",
      "Photo evidence on return",
      "Email support",
    ],
    notIncluded: [
      "Maintenance scheduling",
      "Audit log export",
      "Multiple managers",
    ],
    cta: "Start free trial",
    ctaStyle: "border border-slate-700 text-slate-900 bg-white hover:bg-slate-50",
  },
  {
    name: "Pro",
    monthlyPrice: 179,
    annualPrice: 149,
    description: "For growing operations with multiple managers and job sites.",
    highlight: true,
    badge: "Most popular",
    features: [
      "Up to 500 assets",
      "Unlimited workers",
      "Up to 5 manager accounts",
      "QR code check-out & return",
      "Issue reporting & triage",
      "Photo evidence on return",
      "Maintenance scheduling",
      "Audit log & export",
      "Priority support",
    ],
    notIncluded: [],
    cta: "Start free trial",
    ctaStyle: "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30",
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    description: "For large organisations needing custom limits and SLAs.",
    highlight: false,
    badge: null,
    features: [
      "Unlimited assets",
      "Unlimited workers",
      "Unlimited managers",
      "Everything in Pro",
      "Custom onboarding",
      "Dedicated account manager",
      "SLA guarantee",
      "Invoice billing",
    ],
    notIncluded: [],
    cta: "Contact sales",
    ctaStyle: "border border-slate-700 text-slate-900 bg-white hover:bg-slate-50",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="bg-slate-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Simple pricing
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Pay for what you use
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            All plans include a 14-day free trial. No credit card required.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                !annual
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                annual
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Annual
              <span className="bg-green-500/20 text-green-600 text-xs font-bold px-1.5 py-0.5 rounded-full">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-slate-900 border-2 border-orange-500 shadow-2xl shadow-orange-500/20"
                  : "bg-white border border-slate-200"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    <Zap className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <h3
                  className={`text-lg font-bold mb-1 ${
                    plan.highlight ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.highlight ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                {plan.monthlyPrice !== null ? (
                  <div className="flex items-end gap-1">
                    <span
                      className={`text-5xl font-extrabold ${
                        plan.highlight ? "text-white" : "text-slate-900"
                      }`}
                    >
                      ${annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span
                      className={`text-sm pb-2 ${
                        plan.highlight ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      AUD / month
                    </span>
                  </div>
                ) : (
                  <div
                    className={`text-4xl font-extrabold ${
                      plan.highlight ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Custom
                  </div>
                )}
                {annual && plan.monthlyPrice !== null && (
                  <p
                    className={`text-xs mt-1 ${
                      plan.highlight ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    billed annually · ${annual ? plan.annualPrice! * 12 : plan.monthlyPrice! * 12} AUD/year
                  </p>
                )}
              </div>

              {/* CTA */}
              <a
                href={
                  plan.name === "Enterprise"
                    ? "mailto:sales@tooltrail.com.au"
                    : APP_SIGNUP_URL
                }
                className={`w-full text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 mb-8 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        plan.highlight ? "text-orange-400" : "text-green-500"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 opacity-40">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                    >
                      <path
                        d="M4 8h8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          All prices in AUD. GST will be added at checkout.{" "}
          <a href="mailto:sales@tooltrail.com.au" className="text-orange-500 hover:underline">
            Contact us
          </a>{" "}
          for volume discounts or custom requirements.
        </p>
      </div>
    </section>
  );
}
