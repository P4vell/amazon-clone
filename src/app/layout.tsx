import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amazon Clone",
  description: "Full-stack Amazon clone",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
