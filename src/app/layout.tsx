import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keita SHIBUYA's Portfolio",
  description:
    "Site Reliability Engineer specializing in Google Cloud, DevOps, and distributed systems.",
  keywords: [
    "Google Cloud",
    "SRE",
    "Site Reliability Engineering",
    "DevOps",
    "Cloud Architecture",
  ],
  authors: [{ name: "SRE Engineer" }],
  creator: "SRE Engineer",
  metadataBase: new URL("https://lec-infra.com/"),
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-icon.png",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-sre.vercel.app",
    title: "Keita SHIBUYA's Portfolio",
    description:
      "Site Reliability Engineer specializing in Google Cloud, DevOps, and distributed systems.",
    siteName: "Keita SHIBUYA's Portfolio",
    images: [
      {
        url: "/images/ogp/og-image.png",
        width: 1200,
        height: 630,
        alt: "Keita SHIBUYA's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keita SHIBUYA's Portfolio",
    description:
      "Site Reliability Engineer specializing in Google Cloud, DevOps, and distributed systems.",
    images: ["/images/ogp/og-image.png"],
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
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  );
}
