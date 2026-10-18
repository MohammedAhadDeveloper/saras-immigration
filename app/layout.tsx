import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Saras Immigration Consultancy | Licensed RCIC Canadian Immigration Services",
  description:
    "Saras Immigration Consultancy Inc. (RCIC #R710896) - 96% visa approval rate. Expert Canadian immigration services in Express Entry, Alberta AAIP, Ontario OINP, LMIA, Spousal Sponsorship, Study Permits, and Super Visas. Offices in Brampton & Edmonton.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Saras Immigration Consultancy | Licensed RCIC Canadian Immigration Services",
    description:
      "Saras Immigration Consultancy Inc. (RCIC #R710896) - 96% visa approval rate. Expert Canadian immigration services in Express Entry, Alberta AAIP, Ontario OINP, LMIA, Spousal Sponsorship, Study Permits, and Super Visas. Offices in Brampton & Edmonton.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        className="bg-slate-50 text-slate-900 antialiased overflow-x-hidden selection:bg-[#C8102E] selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
