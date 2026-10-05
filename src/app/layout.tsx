import type { Metadata, Viewport } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f4f2ee",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://haniizem.github.io"),
  title: "Hani IZEM — Electronics & Embedded Systems Engineer",
  description:
    "Portfolio of Hani IZEM — Electronics & Embedded Systems Engineer. Railway Signaling, PLM Systems Engineering, IoT & Automated Workflows.",
  keywords: [
    "Hani IZEM",
    "Electronics Engineer",
    "Embedded Systems",
    "Railway Signaling",
    "ERTMS",
    "PLM",
    "3DEXPERIENCE",
    "Alstom",
    "Assystem",
  ],
  authors: [{ name: "Hani IZEM", url: "https://haniizem.github.io" }],
  creator: "Hani IZEM",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://haniizem.github.io",
    title: "Hani IZEM — Electronics & Embedded Systems Engineer",
    description:
      "Mission-critical railway signaling, automated PLM workflows, and intelligent embedded architectures.",
    siteName: "Hani IZEM Portfolio",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Hani IZEM — Electronics & Embedded Systems Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hani IZEM — Electronics & Embedded Systems Engineer",
    description:
      "Mission-critical railway signaling, automated PLM workflows, and intelligent embedded architectures.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/portrait-bust.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[var(--paper)] text-[var(--ink)] font-sans min-h-screen selection:bg-[var(--ink)] selection:text-[var(--paper)]">
        {children}
      </body>
    </html>
  );
}
