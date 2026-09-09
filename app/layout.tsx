import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Henry Chen — Portfolio",
  description: "Creative technology, music, and interactive storytelling by Henry Chen.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
