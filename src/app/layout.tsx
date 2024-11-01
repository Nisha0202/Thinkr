import type { Metadata } from "next";
import localFont from "next/font/local";
import { Work_Sans } from 'next/font/google';  
import "./globals.css";

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Thinkr",
  description: "Idea is discovered here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
