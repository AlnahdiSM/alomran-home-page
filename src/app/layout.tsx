import "./globals.css";
import type { Metadata } from "next";
import {InfoBar} from "@/components";

export const metadata: Metadata = {
  title: "Alomran",
  description: "Descover the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="relative">
        <InfoBar />
        {children}
      </body>
    </html>
  );
}
