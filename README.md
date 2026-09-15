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

3% 税率及金库分配是拟定方案，尚未核实合约。合约和金库地址尚未提供；账本未连接链上数据，金额显示待核实。网站不包含发币、钱包签名或交易功能。
