"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[4617],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=d(a),m=r,c=g["".concat(s,".").concat(m)]||g[m]||p[m]||l;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4536:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),l=a(4996);const i={id:"angelVault",title:"The Angel Vault"},o=void 0,s={unversionedId:"angelVault",id:"angelVault",title:"The Angel Vault",description:"The Angel Vault is a strategically managed Univ3 position structured to protect GIV from downward volatility. It is managed by our Angel Vault multisig, a 4/7 multisig of Giveth core team members and two members for ICHI. To learn more about Angel Vaults and how they work, please refer to ICHI\u2019s documentation.",source:"@site/dapps/angelVault.md",sourceDirName:".",slug:"/angelVault",permalink:"/angelVault",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/angelVault.md",tags:[],version:"current",lastUpdatedBy:"divine-comedian",lastUpdatedAt:1659365183,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"angelVault",title:"The Angel Vault"},sidebar:"dapps",previous:{title:"Regen Farms",permalink:"/regenFarms"},next:{title:"$nice Token",permalink:"/giveconomy/niceToken"}},d={},u=[{value:"Contracts",id:"contracts",level:2},{value:"oneGIV",id:"onegiv",level:2},{value:"Providing &amp; Removing Liquidity",id:"providing--removing-liquidity",level:2},{value:"Earning Rewards",id:"earning-rewards",level:2},{value:"Distribution of GIV rewards to Angel Vault LP Stakers",id:"distribution-of-giv-rewards-to-angel-vault-lp-stakers",level:2},{value:"Incentives Plan\u200a\u2014\u200aThe Jagged Staircase",id:"incentives-planthe-jagged-staircase",level:3}],p={toc:u};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Angel Vault is a strategically managed Univ3 position structured to protect GIV from downward volatility. It is managed by our Angel Vault multisig, a ",(0,r.kt)("a",{parentName:"p",href:"https://gnosis-safe.io/app/eth:0x2B0ee142dCFE7C2dD150cDbd7B6832F6e9977f51/home"},"4/7 multisig of Giveth core team members and two members for ICHI"),". To learn more about Angel Vaults and how they work, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ichi.org/ichi-docs-v3/ichi-vaults/angel-vaults"},"ICHI\u2019s documentation"),"."),(0,r.kt)("h2",{id:"contracts"},"Contracts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Angel Vault (ICHI) LM (Unipool): ",(0,r.kt)("inlineCode",{parentName:"li"},"0xA4b727DF6fD608d1835e3440288c73fB28c4eF16")),(0,r.kt)("li",{parentName:"ul"},"Angel Vault (ICHI) LP: ",(0,r.kt)("inlineCode",{parentName:"li"},"0xc3151A58d519B94E915f66B044De3E55F77c2dd9"))),(0,r.kt)("h2",{id:"onegiv"},"oneGIV"),(0,r.kt)("p",null,"oneGIV is a Giveth Branded Dollar (by ICHI) that can be minted using DAI at a 1:1 ratio. This can be done via ",(0,r.kt)("a",{parentName:"p",href:"https://app.ichi.org/vault?poolId=20009&back=vault"},"ICHI\u2019s website"),". To learn more about ICHI\u2019s branded dollar, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ichi.org/ichi-docs-v3/branded-dollars/overview"},"please refer to their documentation"),"."),(0,r.kt)("p",null,"oneGIV is minted using 100% DAI, and is also over-collateralized by GIV. The contract holds GIV as additional collateral in case there is some issue with the DAI. All mints & burns of oneGIV happen via a contract managed by our Angel Vault multisig."),(0,r.kt)("p",null,"Over time, the Giveth DAO may vote to change the minting ratio from 100% DAI to a combination of DAI and GIV (e.g. 80% DAI, 20% GIV). However, to keep the peg to the dollar, burning oneGIV to redeem DAI will always result in 100% DAI."),(0,r.kt)("h2",{id:"providing--removing-liquidity"},"Providing & Removing Liquidity"),(0,r.kt)("p",null,"Liquidity providers can add liquidity to the Angel Vault using oneGIV via ",(0,r.kt)("a",{parentName:"p",href:"https://app.ichi.org/vault?poolId=20009&back=vault"},"ICHI\u2019s website"),", and then stake their LP tokens in the ",(0,r.kt)("a",{parentName:"p",href:"https://giveth.io/givfarm"},"GIVfarm"),". Because this oneGIV is added to a oneGIV / GIV Univ3 position, when you remove liquidity you will get oneGIV & GIV proportional to the holdings in the Angel Vault."),(0,r.kt)("h2",{id:"earning-rewards"},"Earning Rewards"),(0,r.kt)("p",null,"Rewards are given to liquidity providers in proportion to the liquidity provided. When you stake your LP tokens, you earn rewards in two parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The 1% Uniswap fee which automatically increase your Angel Vault position (",(0,r.kt)("a",{parentName:"li",href:"https://docs.ichi.org/ichi-docs-v3/resources/faqs#what-does-the-irr-metric-on-the-angel-vault-page-represent"},"IRR"),")."),(0,r.kt)("li",{parentName:"ol"},"GIV incentives from within the GIVfarm, which as always, are distributed according to the GIVstream. Check out the ",(0,r.kt)("a",{parentName:"li",href:"https://giveth.io/givstream"},(0,r.kt)("strong",{parentName:"a"},"GIViverse Expansion"))," to understand how much your claimable rewards will be.")),(0,r.kt)("p",null,"The APR shown in the GIVfarm oneGIV/GIV staking pool is the sum of these two reward rates."),(0,r.kt)("img",{alt:"angel vault staking farm staking card",src:(0,l.Z)("/img/content/giveconomy/angelVaultCard.png")}),(0,r.kt)("h2",{id:"distribution-of-giv-rewards-to-angel-vault-lp-stakers"},"Distribution of GIV rewards to Angel Vault LP Stakers"),(0,r.kt)("p",null,"A total of 6 Million GIV has been allocated to run a rewards program for Angel Vault LP stakers for 26 weeks from the start date August 4, 2022. The amount of rewards being sent out throughout each two week period is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Week"),(0,r.kt)("th",{parentName:"tr",align:null},"GIV Rewarded (within the 2 week period)"),(0,r.kt)("th",{parentName:"tr",align:null},"% of rewards"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Week 1"),(0,r.kt)("td",{parentName:"tr",align:null},"485,143"),(0,r.kt)("td",{parentName:"tr",align:null},"8.09%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Week 3"),(0,r.kt)("td",{parentName:"tr",align:null},"569,143"),(0,r.kt)("td",{parentName:"tr",align:null},"9.49%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Week 5"),(0,r.kt)("td",{parentName:"tr",align:null},"140,000"),(0,r.kt)("td",{parentName:"tr",align:null},"2.33%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Week 7"),(0,r.kt)("td",{parentName:"tr",align:null},"653,143"),(0,r.kt)("td",{parentName:"tr",align:null},"10.89%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Week 9"),(0,r.kt)("td",{parentName:"tr",align:null},"140,000"),(0,r.kt)("td",{parentName:"tr",align:null},"2.33%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Week 11"),(0,r.kt)("td",{parentName:"tr",align:null},"737,143"),(0,r.kt)("td",{parentName:"tr",align:null},"12.29%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Week 13"),(0,r.kt)("td",{parentName:"tr",align:null},"140,000"),(0,r.kt)("td",{parentName:"tr",align:null},"2.33%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Week 15"),(0,r.kt)("td",{parentName:"tr",align:null},"821,143"),(0,r.kt)("td",{parentName:"tr",align:null},"13.69%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Week 17"),(0,r.kt)("td",{parentName:"tr",align:null},"140,000"),(0,r.kt)("td",{parentName:"tr",align:null},"2.33%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Week 19"),(0,r.kt)("td",{parentName:"tr",align:null},"905,143"),(0,r.kt)("td",{parentName:"tr",align:null},"15.09%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Week 21"),(0,r.kt)("td",{parentName:"tr",align:null},"140,000"),(0,r.kt)("td",{parentName:"tr",align:null},"2.33%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Week 23"),(0,r.kt)("td",{parentName:"tr",align:null},"989,143"),(0,r.kt)("td",{parentName:"tr",align:null},"16.49%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Week 25"),(0,r.kt)("td",{parentName:"tr",align:null},"140,000"),(0,r.kt)("td",{parentName:"tr",align:null},"2.32%")))),(0,r.kt)("h3",{id:"incentives-planthe-jagged-staircase"},"Incentives Plan\u200a\u2014\u200aThe Jagged Staircase"),(0,r.kt)("p",null,"When the Angel Vault is initialized, the entirety of its liquidity will be in oneGIV. This is beneficial as the Angel Vault works best when there is a high percentage of oneGIV in the vault, but this percentage does not stay stable over time.\nThe ratio of GIV goes up when there is sell pressure in the market on the GIV token.\nThe ratio of oneGIV goes up when new Angel Vault LP positions are created.\nThe ratio of GIV/oneGIV stays the same when Angel Vault LP positions are removed.\nWe therefore want to encourage liquidity providers to periodically withdraw liquidity\u200a\u2014\u200a removing some % of GIV from the pool\u200a\u2014\u200aand then re-add liquidity in oneGIV, increasing the total concentration of stables in the Angel Vault. This will help to support the strength of the Angel Vault buy-wall."),(0,r.kt)("img",{alt:"rewards distribution schedule for jagged staircase",src:(0,l.Z)("/img/content/giveconomy/jaggedStaircase.png")}))}g.isMDXComponent=!0}}]);