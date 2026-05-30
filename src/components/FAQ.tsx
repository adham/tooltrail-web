"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of assets can I track?",
    a: "Any physical asset that can have a QR label attached — power tools, hand tools, testing and measuring equipment, safety gear, PPE, vehicles, trailers, machinery, and more. If it leaves your shed, you can track it.",
  },
  {
    q: "Do workers need to download an app?",
    a: "No. ToolTrail is a Progressive Web App — workers open it in their phone's browser and add it to their home screen like a native app. No App Store, no Play Store, no IT approval required. Workers receive an SMS invitation with a link, tap it, set their PIN, and they're ready to scan.",
  },
  {
    q: "Can I use ToolTrail across multiple job sites?",
    a: "Yes. Create separate zones for each site, vehicle, or storage location. Assets are assigned a home zone, and workers confirm return location on every return scan. Managers and org admins see the full picture across all sites in one dashboard.",
  },
  {
    q: "Is my data secure?",
    a: "All data is encrypted in transit and at rest. Your organisation's data is fully isolated from other customers — ToolTrail is multi-tenant by design with org-scoped queries. Photos are stored in enterprise-grade object storage with signed, time-limited access URLs.",
  },
  {
    q: "How long does setup take?",
    a: "Most teams are fully operational in under an hour. Add your assets (or import via CSV), print and stick QR labels, then invite workers via SMS — they set up their PIN in 60 seconds with no IT help needed.",
  },
  {
    q: "What happens when a worker reports damage?",
    a: "An issue card is created with the worker's photos and notes. The manager receives an alert and can triage immediately: block the asset from checkout until it's fixed, or allow continued use with a warning flag. The full issue history is logged permanently.",
  },
  {
    q: "Can I enforce SWMS or safety sign-offs before checkout?",
    a: "Yes. For each asset, you can require a Safe Work Method Statement (SWMS) acknowledgement and/or a training confirmation checkbox. These are enforced in the checkout flow — the worker cannot complete checkout until they've ticked both.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes. Every plan starts with a 14-day free trial with full access to all features. No credit card required. At the end of the trial, you choose a plan to continue — or your account pauses, with your data retained for 90 days.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-slate-50 py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Common questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-slate-900 font-semibold text-sm pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 border-t border-slate-100">
                  <p className="text-slate-600 text-sm leading-relaxed pt-4">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support link */}
        <p className="text-center text-slate-500 text-sm mt-10">
          Still have questions?{" "}
          <a
            href="mailto:hello@tooltrai.com.au"
            className="text-orange-500 hover:underline font-medium"
          >
            Email us
          </a>{" "}
          — we&apos;ll get back to you within one business day.
        </p>
      </div>
    </section>
  );
}
