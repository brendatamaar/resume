import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { RESUME_DATA } from "@/data/resume-data";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans"
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - ${RESUME_DATA.currentJob}`,
  description: "RESUME_DATA.summary",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={` ${GeistSans.className} inset-0 h-full w-full bg-white dark:bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] `}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
      <Analytics />
    </html>
  );
}
