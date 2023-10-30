import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/Header";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Challenge",
  description: "Client for a GraphQL Code Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={twMerge(
          inter.className,
          "min-h-screen bg-gradient-to-br from-[#B3FFAB] to-[#12FFF7] dark:from-[#360033] dark:to-[#0b8793]"
        )}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
