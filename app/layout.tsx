import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crafty Damsel by Beeba Sheikh",
  description: "Bespoke handcrafted artistry and design in Karachi.",
  icons: {
    icon: "/crafty_damsel_logo.jpg",
    shortcut: "/crafty_damsel_logo.jpg",
    apple: "/crafty_damsel_logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
