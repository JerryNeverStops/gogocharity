import { NextResponse } from "next/server";

const wallet = "0x92a1556D3d13a7816710dc47984893cE222535f2";
const providers = ["https://bsc-dataseed.binance.org/", "https://bsc-dataseed.bnbchain.org/"];
export const dynamic = "force-dynamic";

export async function GET() {
  for (const provider of providers) {
    try {
      async function rpc(method: string, params: unknown[]) {
        const response = await fetch(provider, {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
          cache: "no-store", signal: AbortSignal.timeout(5000),
        });
        if (!response.ok) throw new Error("RPC unavailable");
        const data = await response.json();
        if (data.error || data.result == null) throw new Error("Invalid RPC response");
        return data.result;
      }
      const block = await rpc("eth_getBlockByNumber", ["latest", false]);
      if (!/^0x[0-9a-f]+$/i.test(block.number) || !/^0x[0-9a-f]+$/i.test(block.timestamp)) throw new Error("Invalid block");
      const blockTime = Number(BigInt(block.timestamp)) * 1000;
      if (Date.now() - blockTime > 120000 || blockTime > Date.now() + 30000) throw new Error("Stale block");
      const value = await rpc("eth_getBalance", [wallet, block.number]);
      if (!/^0x[0-9a-f]+$/i.test(value)) throw new Error("Invalid balance");
      const wei = BigInt(value);
      const balance = `${wei / BigInt("1000000000000000000")}.${(wei % BigInt("1000000000000000000")).toString().padStart(18, "0")}`;
      return NextResponse.json({ wallet, balance, block: Number(BigInt(block.number)), blockTime: new Date(blockTime).toISOString(), updatedAt: new Date().toISOString() }, {
        headers: { "Cache-Control": "public, max-age=0, s-maxage=15" },
      });
    } catch { /* Try the next public provider without returning a fabricated balance. */ }
  }
  return NextResponse.json({ error: "链上数据暂时不可用，请稍后重试。" }, { status: 503, headers: { "Cache-Control": "no-store" } });
}
