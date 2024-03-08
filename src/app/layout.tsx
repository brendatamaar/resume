import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { RESUME_DATA } from "@/data/resume-data";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - ${RESUME_DATA.currentJob}`,
  description: "RESUME_DATA.summary",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className="container relative mx-auto scroll-my-12 overflow-auto p-6 print:p-12 md:p-16">
          {children}
        </main></body>
      <Analytics />
    </html>
  );
}
