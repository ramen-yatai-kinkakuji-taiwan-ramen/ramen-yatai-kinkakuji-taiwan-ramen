import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://ramen-yatai-kinkakuji-taiwan-ramen.vercel.app";

const title =
  "らーめん屋台｜金閣寺 Taiwan Ramen | 京都・北野白梅町の台湾ラーメン";
const description =
  "らーめん屋台｜金閣寺 Taiwan Ramenは、京都市北区大将軍東鷹司町のラーメン店です。台湾ラーメン、チャーシュー入り台湾ラーメン、アパッチ、営業時間、予約、アクセス情報を掲載しています。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "らーめん屋台｜金閣寺 Taiwan Ramen",
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary",
    title,
    description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
