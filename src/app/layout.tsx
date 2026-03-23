import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kingsway Community Life Centre",
  description:
    "Loving You Back to Life & Destiny. Join us every Sunday at 10:00 AM at 73 Alness Street, North York, ON.",
  keywords: [
    "church",
    "North York",
    "Toronto",
    "Pastor Richard Brown",
    "Kingsway Community Life Centre",
    "KCLC",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Kingsway Community Life Centre",
    description: "Loving You Back to Life & Destiny",
    type: "website",
    url: "https://kclcministries.org",
    images: [
      {
        url: "/kclc_logo2.png",
        alt: "Kingsway Community Life Centre",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script src="https://js.churchcenter.com/modal/v1" defer />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
