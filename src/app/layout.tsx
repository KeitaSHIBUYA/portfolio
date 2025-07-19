import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google Cloud SRE Engineer | Portfolio",
  description:
    "Site Reliability Engineer specializing in Google Cloud Platform, DevOps, and distributed systems.",
  keywords: [
    "Google Cloud",
    "SRE",
    "Site Reliability Engineering",
    "DevOps",
    "Cloud Architecture",
  ],
  authors: [{ name: "SRE Engineer" }],
  creator: "SRE Engineer",
  metadataBase: new URL("https://portfolio-sre.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-sre.vercel.app",
    title: "Google Cloud SRE Engineer | Portfolio",
    description:
      "Site Reliability Engineer specializing in Google Cloud Platform, DevOps, and distributed systems.",
    siteName: "SRE Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Cloud SRE Engineer | Portfolio",
    description:
      "Site Reliability Engineer specializing in Google Cloud Platform, DevOps, and distributed systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
