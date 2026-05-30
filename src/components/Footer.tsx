const currentYear = new Date().getFullYear();

const links = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "mailto:hello@tooltrai.com.au" },
  ],
  Support: [
    { label: "Help Centre", href: "#" },
    { label: "FAQ", href: "#faq" },
    { label: "Status", href: "#" },
    { label: "sales@tooltrai.com.au", href: "mailto:sales@tooltrai.com.au" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Data Processing", href: "#" },
  ],
};

function TrailIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
      <circle cx="4" cy="16" r="2.5" fill="white" />
      <circle cx="10" cy="10" r="2.5" fill="white" opacity="0.7" />
      <circle cx="16" cy="4" r="2.5" fill="white" opacity="0.4" />
      <path
        d="M4 16 Q7 13 10 10 Q13 7 16 4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                <TrailIcon />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Tool<span className="text-orange-500">Trail</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Tool tracking for Australian field teams. QR check-out, photo
              evidence, and real-time oversight — without the paperwork.
            </p>
            <p className="text-slate-600 text-xs">
              🇦🇺 Made in Australia
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-slate-300 font-semibold text-sm mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800/60 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            &copy; {currentYear} ToolTrail Pty Ltd. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm">
            ABN: XX XXX XXX XXX
          </p>
        </div>
      </div>
    </footer>
  );
}
