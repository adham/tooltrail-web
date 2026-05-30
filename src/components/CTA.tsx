import { ArrowRight } from "lucide-react";

const APP_SIGNUP_URL = "https://app.tooltrai.com.au/signup";

export default function CTA() {
  return (
    <section className="bg-slate-900 py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Glow */}
        <div
          aria-hidden
          className="absolute inset-x-0 h-96 bg-orange-500/5 blur-3xl pointer-events-none"
        />

        <h2 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Stop losing tools.{" "}
          <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Start the trial today.
          </span>
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Join Australian field teams who track every tool from shed to site and back — with QR codes, photo evidence, and zero paperwork.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={APP_SIGNUP_URL}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 w-full sm:w-auto justify-center"
          >
            Start your 14-day free trial
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="mailto:sales@tooltrai.com.au"
            className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
          >
            Talk to sales →
          </a>
        </div>

        <p className="text-slate-600 text-sm mt-6">
          No credit card required · 14-day free trial · Cancel anytime
        </p>
      </div>
    </section>
  );
}
