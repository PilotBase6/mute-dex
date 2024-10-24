import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <a href="/">
          <h1 className="text-[clamp(1.5rem,5vw+1rem,3rem)]  font-bold bg-gradient-to-r from-red-700 to-blue-700 hover:from-blue-600 hover:to-red-600 text-transparent bg-clip-text pt-20 md:p-20 md:pb-0 md:pt-10 text-center">
            MUTA PokeDex
          </h1>
        </a>
        {children}
      </body>
    </html>
  );
}
