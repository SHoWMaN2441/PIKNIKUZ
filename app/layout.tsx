"use client";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Footer from "./footer";
const poppins = localFont({
  weight: "400",
  src: "/local_font.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}   antialiased bg-cover`}>
        <Toaster />

        {/* <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"> */}
        <Header />
        {/* </div> */}
        {children}

        <Footer />
      </body>
    </html>
  );
}
