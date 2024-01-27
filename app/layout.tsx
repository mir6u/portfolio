import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from "./logo.webp";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mirui's Portfolio",
  description: "I'm an expirienced Front end developer from Russia and currently learning Back end to become a FullStack developer",
  keywords: ["Mirui", "NextJS", "React", "Portfolio", "Frontend"],
  openGraph: {
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/139065133?v=4",
        width: 200,
        height: 200,
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
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="logo.ico" type="image/x-icon" />
        <meta property="twitter:title" content="Mirui | Portfolio"></meta>
        <meta property="twitter:description" content="I'm an expirienced Front end developer from Russia and currently learning Back end to become a FullStack developer"></meta>
        <meta
          content="https://mirui.ru/"
          property="og:url"
        />
        <meta property="og:title" content="Mirui | Portfolio"></meta>
        <meta content="logo.ico" property="og:image" />
        <meta content="#43B581" data-react-helmet="true" name="theme-color" />
        <meta property="og:description" content="I'm an expirienced Front end developer from Russia and currently learning Back end to become a FullStack developer" />
      </head>
      <body className={inter.className}>{children}
        <Analytics />
      </body>
    </html>
  );
}
