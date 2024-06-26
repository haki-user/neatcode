import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const TypoRound = localFont({
  src: "../public/fonts/TypoRound/Typo_Round_Regular_Demo.otf",
  variable: "--font-TypoRound",
});

const NimbusSans = localFont({
  src: "../public/fonts/Nimbus Sans/NimbusSanL-Reg.otf",
  style: "normal",
  variable: "--font-NimbusSans",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NeatCode",
  description: "Programming Practice Platform",
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={`${NimbusSans.variable} ${TypoRound.variable} ${inter.className}`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
