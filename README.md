# GOGO — Guangzhou Together

独立社区项目网站，使用 Next.js App Router、React、TypeScript 和 CSS。源码采用 MIT 许可。

## 本地运行

```sh
npm ci
npm run dev -- --port 3050
```

## 验证

```sh
npm run build
npm run typecheck
```

## 部署

在 Vercel 的 `jerry-wus-projects-40613264` 团队导入 `JerryNeverStops/gogocharity`，框架选择 Next.js，根目录保持默认，无需环境变量。生产分支为 main。

部署成功后添加 gogocharity.com 和 www.gogocharity.com，以 Vercel 实际提供的 DNS 记录为准。

## 数据状态

- 合约：`0xa1d63e8d513d2ff5de3c0b574f80d3be303cffff`，已通过链上 name/symbol 读取确认 GOGO。
- 项目方提供的收款地址：`0x92a1556D3d13a7816710dc47984893cE222535f2`。与截图缩写一致，完整合约收款配置尚未独立核对。
- 项目方于 2026-09-15 提供的 Four.meme 截图显示：买入 3%、卖出 3%，税费 100% 分配至 Funds Recipient Wallet。
- 截图中的 Sent to Funds Recipient 为 0.014423 BNB，仅作为平台统计快照展示；不是实时余额、已核对税费收入或已捐赠金额。
- 账本尚未接入实时链上数据；当前余额、到账明细与捐赠仍待核实。
- 网站不包含发币、钱包签名或交易功能。
