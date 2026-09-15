"use client";
import { useState } from "react";
const ca = "0xa1d63e8d513d2ff5de3c0b574f80d3be303cffff";
export default function CopyCA() {
  const [status, setStatus] = useState("");
  async function copy() {
    try { await navigator.clipboard.writeText(ca); setStatus("已复制 CA"); }
    catch { setStatus("复制失败，请长按或选中地址复制"); }
  }
  return <div className="copy-ca"><span>合约地址 · BSC</span><code>{ca}</code><button type="button" onClick={copy}>复制 CA</button><span className="copy-result" role="status">{status}</span></div>;
}
