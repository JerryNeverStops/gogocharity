import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GOGO — Guangzhou Together",
  description: "GOGO 是一个独立社区纪念项目，以公开记录追踪拟定交易税金与后续援助。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
