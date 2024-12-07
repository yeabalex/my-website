import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Yeabsira",
    default: "Yeabsira",
  },
  description: "Showcase of my work",
  icons: {
    icon: "/my-pic.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<head>
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9723083264237471"
    crossOrigin="anonymous"
  ></script>
</head>

      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
