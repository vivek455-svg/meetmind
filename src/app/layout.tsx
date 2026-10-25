import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { RevealObserver } from "@/components/Reveal";
import "./globals.css";

const inria = localFont({
  src: "../fonts/inria-serif-latin-400-italic.woff2",
  style: "italic",
  weight: "400",
  variable: "--font-inria",
  display: "swap",
});

const caveat = localFont({
  src: "../fonts/caveat-latin-700-normal.woff2",
  weight: "700",
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meetmind — Stop taking notes. Start closing more work.",
  description:
    "Meetmind automatically records meetings, creates summaries, captures action items and syncs everything to your workspace so you never miss a detail.",
  openGraph: {
    title: "Meetmind",
    description: "Stop taking notes. Start closing more work.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f7f7",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${inria.variable} ${caveat.variable} antialiased`}>
      <body>
        <noscript>
          <style>{`[data-reveal],.step-card,.footer-wordmark>span{opacity:1!important;transform:none!important;clip-path:none!important;filter:none!important}.anim-scope *{animation-play-state:running!important}`}</style>
        </noscript>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
