import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aswin Gunasekaran | Data Science & AI/ML Engineer",
  description: "Portfolio of Aswin Gunasekaran - Data Science, Machine Learning, and Cloud Engineering professional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
