import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Light.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: '../public/fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../public/fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../public/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../public/fonts/Satoshi-Black.woff2',
      weight: '900',
      style: 'black',
    },
  ],
})

export const metadata: Metadata = {
  title: "Dropit",
  description: "Your Gateway to Effortless File and Text Sharing Across Devices Bridging Cross-platform Gaps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>{children}</body>
    </html>
  );
}
