import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "레티",
  description: "쉽고 빠르게 모두에게 뉴스레터 보내보세요",
};
export const Pretendard = localFont({
  src: "../public/font/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-Pretendard",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Pretendard.className}`}>{children}</body>
    </html>
  );
}
