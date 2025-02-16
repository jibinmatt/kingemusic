import type { Metadata } from "next";
import { Geist, Geist_Mono, Neuton } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const neuton = Neuton({
  variable: "--font-neuton",
  weight: ["200", "300", "400", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KING E",
  description: "Rapper's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${neuton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
