import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
  openGraph: {
    title: "Kingsway Community Life Centre",
    description: "Loving You Back to Life & Destiny",
    type: "website",
    url: "https://kclcministries.org",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
