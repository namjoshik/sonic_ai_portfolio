import "./globals.css";

export const metadata = {
 title: "Kartik Namjoshi | Delivery Principal | Telecom Transformation Leader",
  description:
    "Technical Project Manager with 11+ years experience delivering OSS/BSS transformation programs, leading 100+ teams and driving enterprise delivery.",
  keywords: [
    "Technical Project Manager",
    "Delivery Principal",
    "Telecom Transformation",
    "OSS BSS",
    "Dubai IT Manager"
  ],
  authors: [{ name: "Kartik Namjoshi" }],
  openGraph: {
    title: "Kartik Namjoshi Portfolio",
    description: "Delivery Leader | Telecom Transformation Expert",
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
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}