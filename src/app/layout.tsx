import type { Metadata } from "next";
import { Inter } from "next/font/google";

import './css/style.css'
import './css/bootstrap.min.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reqress Staff App",
  description: "This app is a demonstration of Reqress_staff application using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container d-flex flex-column text-capitalize">
          {children}
        </div>
      </body>
    </html>
  );
}
