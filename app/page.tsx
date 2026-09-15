import Image from "next/image";
import CopyCA from "./copy-ca";
import LiveTreasury from "./live-treasury";

export default function Home() {
  return (<>
<header className="wrap nav"><a className="brand" href="#">GO<span>♥</span>GO</a><nav className="navlinks"><a href="#mission">初衷</a><a href="#transparency">公开账本</a><a className="pill" href="#verify">验证信息</a></nav></header>
  <main>
    <section className="wrap hero">
      <div><div className="eyebrow">Guangzhou Together · 09.14</div><h1>GO<span className="heart">♥</span>GO</h1><p className="lead">广州大学城，9 月 14 日。<br />为受影响的人，留一份支持。</p><p><a className="pill" href="https://four.meme/en/token/0xa1d63e8d513d2ff5de3c0b574f80d3be303cffff" target="_blank" rel="noopener noreferrer">查看 GOGO 代币 ↗</a></p></div>
      <aside className="hero-note"><strong>买入 3% · 卖出 3%</strong><p>税费 100% 分配至公开收款钱包。到账不等于捐出，每一步留有记录。</p></aside>
      <CopyCA />
    </section>
    <section className="statement" id="mission"><div className="wrap statement-grid"><figure className="police-notice"><a href="/images/panyu-police-notice-20260914.jpg" target="_blank" rel="noopener noreferrer" aria-label="查看警情通报原图（新窗口）"><Image src="/images/panyu-police-notice-20260914.jpg" alt="警情通报：2026年9月14日，小谷围街发生持刀伤人事件，警方抓获嫌疑人，伤者经救治均无生命危险。落款为广州市公安局番禺分局。" width={690} height={1227} sizes="(max-width: 760px) 90vw, 360px" /></a><figcaption>图中署名：广州市公安局番禺分局<br />2026 年 9 月 14 日 · 项目方提供<br /><a href="/images/panyu-police-notice-20260914.jpg" target="_blank" rel="noopener noreferrer">点击查看原图 ↗</a></figcaption></figure><div><h2>一座城。<br />一份牵挂。</h2><p>据广州番禺公安 2026 年 9 月 14 日通报，小谷围街发生持刀伤人事件，嫌疑人已被抓获，伤者经救治均无生命危险，案件仍在进一步侦办。GOGO 不代表受害者、商场、学校、警方或政府机构。</p></div></div></section>
    <section className="wrap section"><div className="section-head"><h2>每一笔，去哪里。</h2><p>交易税进入公开钱包。援助渠道确认后，再公布转账和收款证明。</p></div><div className="flow"><article className="step"><span className="num">01 · TRADE</span><div><h3>产生交易税</h3><p>Four.meme 显示买入税率 3%、卖出税率 3%；具体适用交易以合约机制为准。</p></div><span className="arrow">→</span></article><article className="step"><span className="num">02 · TREASURY</span><div><h3>进入公开金库</h3><p>税费 100% 分配至下方公开的收款钱包，可通过 BscScan 查看链上记录。</p></div><span className="arrow">→</span></article><article className="step"><span className="num">03 · ASSISTANCE</span><div><h3>核实后捐出</h3><p>公开受赠方、交易哈希及可披露的收款证明。</p></div><span className="arrow">↗</span></article></div></section>
    <section className="wrap section" id="transparency"><div className="section-head"><h2>账本，公开。</h2><p>金库余额自动读取 BNB Smart Chain，每 30 秒刷新。</p></div><LiveTreasury /><div className="notice"><strong>透明度原则</strong><p>在出现经过核实的受赠渠道以前，金库中的金额只称为“待援助资金”，不称为“已捐款”，也不承诺可以直接转交给某位具体受害者。</p></div></section>
    <section className="wrap section" id="verify"><div className="section-head"><h2>验证信息</h2><p>税率与分配比例依据 Four.meme 截图；完整收款地址由项目方提供，与截图中的缩写一致，尚未独立核对合约收款配置。</p></div><div className="details"><div className="detail"><div className="detail-label">GOGO 合约地址</div><code><a href="https://bscscan.com/token/0xa1d63e8d513d2ff5de3c0b574f80d3be303cffff" target="_blank" rel="noopener noreferrer">0xa1d63e8d513d2ff5de3c0b574f80d3be303cffff</a></code><p><a href="https://four.meme/en/token/0xa1d63e8d513d2ff5de3c0b574f80d3be303cffff" target="_blank" rel="noopener noreferrer">在 Four.meme 查看 GOGO ↗</a></p></div><div className="detail"><div className="detail-label">Charity Treasury</div><code><a href="https://bscscan.com/address/0x92a1556D3d13a7816710dc47984893cE222535f2" target="_blank" rel="noopener noreferrer">0x92a1556D3d13a7816710dc47984893cE222535f2</a></code></div><div className="detail"><div className="detail-label">Network</div><code>BNB Smart Chain</code></div><div className="detail"><div className="detail-label">Tax</div><code>买入 3% / 卖出 3% · 税费 100% 分配至收款钱包</code></div></div></section>
  </main>
  <footer className="wrap footer"><div><strong>GOGO — Guangzhou Together</strong>Independent community initiative · 2026</div><div><strong>重要声明</strong>本项目并非官方募捐或投资产品，不与受害者、GOGO 新天地、任何高校、警方或政府机构存在隶属或授权关系。加密资产风险极高，请勿将购买代币视为捐赠的替代方式。</div></footer>
  </>);
}
