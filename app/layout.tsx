import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "CMDS Auto Broker - We Check. We Broker. We Move. You Profit.",
  description: "Premium vehicle inspections, HPI checks, truck contracts, and load sourcing in Secunda, Mpumalanga.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <meta name="theme-color" content="#080F1D" />
      </head>
      <body className="bg-cmds-dark text-white font-inter">{children}</body>
    </html>
  );
}
