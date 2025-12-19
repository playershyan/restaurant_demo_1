/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Tastes",
  description: "Global Tastes International Restaurant Experience",
  openGraph: {
    title: "Global Tastes",
    description: "Global Tastes International Restaurant Experience",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://restaurant-demo-1-alpha.vercel.app",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://restaurant-demo-1-alpha.vercel.app"}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Global Tastes Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Tastes",
    description: "Global Tastes International Restaurant Experience",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || "https://restaurant-demo-1-alpha.vercel.app"}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  );
}
