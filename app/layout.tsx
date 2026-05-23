import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Kartik Namjoshi | Telecom Transformation Leader",
  description:
    "Personal website for Kartik Namjoshi, showcasing delivery leadership, telecom transformation expertise, and OSS/BSS program success.",
  keywords: [
    "Technical Project Manager",
    "Delivery Principal",
    "Telecom Transformation",
    "OSS BSS",
    "Dubai IT Manager"
  ],
  authors: [{ name: "Kartik Namjoshi" }],
  openGraph: {
    title: "Kartik Namjoshi | Telecom Transformation Leader",
    description: "Delivery Principal driving enterprise OSS/BSS and telecom transformation programs.",
    url: "https://kartiknamjoshi.me",
    siteName: "Kartik Namjoshi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}