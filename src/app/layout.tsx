/*
 * @Date: 2026-02-13 20:10:49
 * @LastEditors: lifangdi
 * @LastEditTime: 2026-02-13 21:56:50
 */
import "./globals.css";
import Navbar from "@/components/Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className="antialiased bg-[#fafafa]">
        <Navbar />
        <main className="pr-0 md:pr-48 w-full min-h-screen">{children}</main>
      </body>
    </html>
  );
}
