import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import React from "react";

import '../../styles/global.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | Next Movies",
        default: "Next Movies",
    },
    description: "The best movies on the best framework",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navigation/>
            {children}
      </body>
    </html>
  );
}
