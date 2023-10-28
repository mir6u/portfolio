import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from './logo.webp'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mirui's Portfolio",
  description: "My Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="logo.ico" type="image/x-icon" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
