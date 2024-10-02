import '@/app/ui/global.css'; // import 'global.css' to this file
import {inter} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* adding Inter the <body> element has makes the font applied all throughout this app */}
      {/* 'anitialiased' is a Tailwind class that smooths out the font. Not necsesary, but adds a nice touch */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
