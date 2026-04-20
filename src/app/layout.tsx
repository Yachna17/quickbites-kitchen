import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "QuickBites Kitchen | Healthy 15-Minute Recipes",
    template: "%s | QuickBites Kitchen",
  },
  description: "Delicious, healthy recipes you can make in 15 minutes or less. Perfect for busy people, weight loss, and high-protein diets.",
  openGraph: {
    title: "QuickBites Kitchen | Healthy 15-Minute Recipes",
    description: "Delicious, healthy recipes you can make in 15 minutes or less.",
    siteName: "QuickBites Kitchen",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7E9NTG58DP"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7E9NTG58DP');
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        <main style={{ flex: "1" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
