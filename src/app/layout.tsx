import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ToolTrail — Know Where Every Tool Is, Right Now",
  description:
    "ToolTrail gives field teams and site managers real-time visibility into every piece of equipment — QR check-out, photo evidence, overdue alerts, and full audit trails. Built for Australian trades, construction, and industrial teams.",
  keywords: [
    "tool tracking",
    "asset management",
    "QR code tools",
    "construction asset tracking",
    "equipment management",
    "trade tools",
    "Australia",
  ],
  openGraph: {
    title: "ToolTrail — Know Where Every Tool Is, Right Now",
    description:
      "QR-based tool tracking for Australian field teams. Real-time oversight, photo evidence, and full audit trails.",
    url: "https://www.tooltrai.com.au",
    siteName: "ToolTrail",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolTrail — Know Where Every Tool Is, Right Now",
    description:
      "QR-based tool tracking for Australian field teams. Real-time oversight, photo evidence, and full audit trails.",
  },
  metadataBase: new URL("https://www.tooltrai.com.au"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
