"use client";

import { useEffect, useState } from "react";
type Snapshot = { wallet: string; balance: string; block: number; blockTime: string; updatedAt: string };

export default function LiveTreasury() {
  const [data, setData] = useState<Snapshot | null>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout>;
    async function refresh() {
      try {
        const response = await fetch("/api/treasury", { cache: "no-store", signal: controller.signal });
        if (!response.ok) throw new Error("Unavailable");
        const next = await response.json();
        if (typeof next.balance !== "string" || !Number.isFinite(next.block) || !Number.isFinite(Date.parse(next.updatedAt)) || Date.now() - Date.parse(next.updatedAt) > 120000) throw new Error("Stale data");
        if (!controller.signal.aborted) { setData(next); setFailed(false); }
      } catch {
        if (!controller.signal.aborted) setFailed(true);
      } finally {
        if (!controller.signal.aborted) timer = setTimeout(refresh, 30000);
      }
    }
    refresh();
    return () => { controller.abort(); clearTimeout(timer); };
  }, []);
  const balance = data ? data.balance.replace(/0+$/, "").replace(/\.$/, "") : "—";
  return <div className="live-treasury">
    <div className="live-heading"><strong>金库链上余额</strong><span role="status" className={failed ? "live-warning" : "status"}>{failed ? "更新失败 · 暂勿视为实时数据" : data ? "自动更新 · 每 30 秒刷新" : "正在读取链上数据…"}</span></div>
    <div className="live-balance">{balance} <small>BNB</small></div>
    {data && <p>数据获取时间：{new Date(data.updatedAt).toLocaleString("zh-CN", { timeZone: "Asia/Shanghai", hour12: false })}（北京时间）<br />区块：<a href={`https://bscscan.com/block/${data.block}`} target="_blank" rel="noopener noreferrer">{data.block}</a>{failed && " · 显示最后一次成功读取的余额"}</p>}
    <p>余额包含钱包中的所有原生 BNB，不等于累计税费或已捐赠金额。余额读取自最新区块，可能随链上确认发生变化。</p>
    <a href="https://bscscan.com/address/0x92a1556D3d13a7816710dc47984893cE222535f2" target="_blank" rel="noopener noreferrer">查看钱包交易记录 ↗</a>

  </div>;
}
