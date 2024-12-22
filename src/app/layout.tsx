import type { Metadata } from "next";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Analytics } from "@vercel/analytics/react";
import "./globals.scss";
import { silka } from "@/fonts";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Vishnu R",
  description: "A portfolio of Vishnu R, a Software Engineer based in Kerala, India.",
  authors: [
    { name: "Vishnu R", url: "www.visorry.github.io" },
  ],
  openGraph: {
    title: "Vishnu R",
    description: "A portfolio of Vishnu R, a Software Engineer based in Kerala, India.",
    url: "www.visorry.github.io",
    siteName: "Vishnu R",
    type: "website",
    // images: [
    //   {
    //     url: "https://www.vishnur.com/Screenshot.png",
    //     width: 3410,
    //     height: 2072,
    //     alt: "Vishnu R - Portfolio",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${silka.className}`}>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
