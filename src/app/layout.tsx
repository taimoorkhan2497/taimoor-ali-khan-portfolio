import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taimoor Ali Khan | Senior React.js and Next.js Developer",
  description:
    "Hiring-focused portfolio for Taimoor Ali Khan, a React.js, Next.js, TypeScript, Redux, and React Native software engineer based in Rawalpindi, Pakistan.",
  keywords: [
    "Taimoor Ali Khan",
    "React.js Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Software Engineer",
    "TypeScript",
    "Redux",
    "React Native",
    "Pakistan",
  ],
  openGraph: {
    title: "Taimoor Ali Khan | Senior React.js and Next.js Developer",
    description:
      "5+ years shipping scalable web and mobile products with React.js, Next.js, TypeScript, Redux, and React Native.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
