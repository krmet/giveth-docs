"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[739],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=o(a),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(f,l(l({ref:t},d),{},{components:a})):n.createElement(f,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8932:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={toc:[]};function l(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Giveth TRACE has officially been deprecated. After 5 years of faithful service, Giveth and its platform, services and products have fully migrated to ",(0,r.kt)("a",{parentName:"strong",href:"https://giveth.io"},"Giveth.io"),". With the deprecation of the Rinkeby network and low user activity, the Giveth DAO decided to sunset its original dApp in Q3 of 2022. The code has and will forever be open-source, and you can find it in ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/Giveth"},"Giveth's Github repositories"),"."))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"This documentation will remain available for historical reference."))),(0,r.kt)("hr",null))}l.isMDXComponent=!0},3914:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),i=a(8932);const l={id:"traceContracts",title:"Contracts, Bridges and Multisigs Technical Information",slug:"dapps/traceContracts"},c=void 0,s={unversionedId:"traceContracts",id:"traceContracts",title:"Contracts, Bridges and Multisigs Technical Information",description:"Contracts:",source:"@site/dapps/traceContracts.md",sourceDirName:".",slug:"/dapps/traceContracts",permalink:"/dapps/traceContracts",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/traceContracts.md",tags:[],version:"current",lastUpdatedBy:"Mitch Oz",lastUpdatedAt:1693588589,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{id:"traceContracts",title:"Contracts, Bridges and Multisigs Technical Information",slug:"dapps/traceContracts"},sidebar:"dapps",previous:{title:"Exchange Rates",permalink:"/dapps/exchangeRates"}},o={},d=[{value:"Contracts:",id:"contracts",level:2},{value:"Mainnet multisigs:",id:"mainnet-multisigs",level:4},{value:"Rinkeby multisigs:",id:"rinkeby-multisigs",level:4},{value:"Contract Roles/params:",id:"contract-rolesparams",level:2},{value:"Mainnet",id:"mainnet",level:3},{value:"Rinkeby",id:"rinkeby",level:3},{value:"Liquid Pledging Contracts (Rinkeby)",id:"liquid-pledging-contracts-rinkeby",level:4}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.ZP,{mdxType:"TraceDeprecated"}),(0,r.kt)("h2",{id:"contracts"},"Contracts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GivethBridge on Mainnet"),(0,r.kt)("li",{parentName:"ul"},"ForeignGivethBridge on Rinkeby"),(0,r.kt)("li",{parentName:"ul"},"LiquidPledging contracts on Rinkeby"),(0,r.kt)("li",{parentName:"ul"},"Escapable contracts to Mainnet for each contract on Rinkeby")),(0,r.kt)("h4",{id:"mainnet-multisigs"},"Mainnet multisigs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x4D9339dd97db55e3B9bCBE65dE39fF9c04d1C2cd"},"Giveth Mainnet: 0x4D9339dd97db55e3B9bCBE65dE39fF9c04d1C2cd")," (6 of 13 multisig)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x16fda2fcc887dd7ac65c46be144473067cff8654"},"Giveth Overflow: 0x16fda2fcc887dd7ac65c46be144473067cff8654")," (4 of 7 multisig)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb"},"EscapeHatch Caller: 0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb")," (1 of x multisig)")),(0,r.kt)("h4",{id:"rinkeby-multisigs"},"Rinkeby multisigs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rinkeby.etherscan.io/address/0xc3b2128ca330871037d35fdc5f7b05e195aac5ce"},"EscapeHatch Caller: 0xc3b2128ca330871037d35fdc5f7b05e195aac5ce")," (1 of x multisig)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rinkeby.etherscan.io/address/0x20fc2ec2518dec7041b4c3e82663d6071bae953f"},"Dapp God/EscapeHatch Destination: 0x20fc2ec2518dec7041b4c3e82663d6071bae953f")," (3 of 6 multisig)")),(0,r.kt)("h2",{id:"contract-rolesparams"},"Contract Roles/params:"),(0,r.kt)("h3",{id:"mainnet"},"Mainnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x30f938fED5dE6e06a9A7Cd2Ac3517131C317B1E7"},(0,r.kt)("strong",{parentName:"a"},"GivethBridge"),": 0x30f938fED5dE6e06a9A7Cd2Ac3517131C317B1E7"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Owns the bridge."),(0,r.kt)("li",{parentName:"ul"},"Receives and deals with donations."),(0,r.kt)("li",{parentName:"ul"},"Can cancel payments in the bridge."),(0,r.kt)("li",{parentName:"ul"},"Can pause and unpause the bridge."),(0,r.kt)("li",{parentName:"ul"},"Add tokens to whitelist."),(0,r.kt)("li",{parentName:"ul"},"Can change the max security guard delay."),(0,r.kt)("li",{parentName:"ul"},"Can change the security guard."),(0,r.kt)("li",{parentName:"ul"},"Can change the 2 day time lock in the bridge."),(0,r.kt)("li",{parentName:"ul"},"Can change the escape hatch caller."),(0,r.kt)("li",{parentName:"ul"},"Can remove/change ownership."),(0,r.kt)("li",{parentName:"ul"},"Can call the ",(0,r.kt)("inlineCode",{parentName:"li"},"escapeHatch(address _token)")," in an emergency to move all the money out of the bridge for the specified token."),(0,r.kt)("li",{parentName:"ul"},"Can call ",(0,r.kt)("inlineCode",{parentName:"li"},"escapeFunds(address _token, uint _amount) ")," to move some of the money out of the bridge to be extra cautious."),(0,r.kt)("li",{parentName:"ul"},"Has all the powers needed to decentralize the bridge."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x16fda2fcc887dd7ac65c46be144473067cff8654"},(0,r.kt)("strong",{parentName:"a"},"Giveth Overflow"),": 0x16fda2fcc887dd7ac65c46be144473067cff8654"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Receives overflow/escaped funds from the bridge."),(0,r.kt)("li",{parentName:"ul"},"Sends funds back to the bridge when funds get low using ",(0,r.kt)("inlineCode",{parentName:"li"},"depositEscapedFunds()"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb"},(0,r.kt)("strong",{parentName:"a"},"EscapeHatch Caller"),": 0x1e9f6746147e937e8e1c29180e15af0bd5fd64bb"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Can call the ",(0,r.kt)("inlineCode",{parentName:"li"},"escapeHatch(address _token)")," in an emergency to move all the money out of the bridge for the specified token."),(0,r.kt)("li",{parentName:"ul"},"Can call ",(0,r.kt)("inlineCode",{parentName:"li"},"escapeFunds(address _token, uint _amount) ")," to move some of the money out of the bridge to be extra cautious."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0xDAa172456F5815256831aeE19C8A370a83522871"},(0,r.kt)("strong",{parentName:"a"},"SecurityGuard"),": 0xDAa172456F5815256831aeE19C8A370a83522871"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MaxSecurityGuardDelay:  1 month")))),(0,r.kt)("h3",{id:"rinkeby"},"Rinkeby"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rinkeby.etherscan.io/address/0xff9cd5140e79377feb23f6dfaf1f8b558c0fe621"},(0,r.kt)("strong",{parentName:"a"},"ForeignGivethBridge"),": 0xfF9CD5140e79377feB23f6DFaF1f8b558C0FE621"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Mints tokens on Rinkeby."),(0,r.kt)("li",{parentName:"ul"},"Can delegate tokens to Liquidpledging."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rinkeby.etherscan.io/address/0xc3b2128ca330871037d35fdc5f7b05e195aac5ce"},(0,r.kt)("strong",{parentName:"a"},"EscapeHatch Caller"),": 0xc3b2128ca330871037d35fdc5f7b05e195aac5ce"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In case there is a weird unexpected movement of Rinkeby tokens (which represent our accounting in the bridge), this Multisig would be able to get the tokens out to maintain our accounting."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rinkeby.etherscan.io/address/0x20fc2ec2518dec7041b4c3e82663d6071bae953f"},(0,r.kt)("strong",{parentName:"a"},"Dapp God/EscapeHatch Destination"),": 0x20fc2ec2518dec7041b4c3e82663d6071bae953f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This multisig has a special place in the AragonApp it: authorizes upgrades to any smart contract in our system."),(0,r.kt)("li",{parentName:"ul"},"Also acts as the escape hatch destination for the Rinkeby LP Vault."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rinkeby.etherscan.io/address/0xf3012a211facf4a1590086a14482aaa88397af15"},(0,r.kt)("strong",{parentName:"a"},"Token Factory:")," 0xf3012a211fAcf4a1590086A14482Aaa88397aF15"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Mints Minime tokens to be sent to Liquid Pledging.")))),(0,r.kt)("h4",{id:"liquid-pledging-contracts-rinkeby"},"Liquid Pledging Contracts (Rinkeby)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rinkeby.etherscan.io/address/0xa2b1485bd9ad623b9e51fc41952b226313250ada"},"LPVault: 0xA2B1485Bd9ad623b9e51FC41952B226313250Ada"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Constructor params: None"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rinkeby.etherscan.io/address/0x8eb047585abed935a73ba4b9525213f126a0c979"},"LiquidPledging: 0x8eB047585ABeD935a73ba4b9525213F126A0c979"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Constructor params: None"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rinkeby.etherscan.io/address/0x71408CE2125b1F07f614b93C8Bd0340e8Fc31CFA"},"LPPCampaignFactory: 0x71408CE2125b1F07f614b93C8Bd0340e8Fc31CFA"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Constructor params: 000000000000000000000000a018199569d94c9dfb6de1d8e8cb37928f20d444"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rinkeby.etherscan.io/address/0x8e8d4840568c786e2e4c83c761ca002f256ad9c2"},"milestoneFactoryAddress: 0x8E8d4840568c786E2e4c83C761ca002F256aD9c2"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Constructor params: 000000000000000000000000a018199569d94c9dfb6de1d8e8cb37928f20d444"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rinkeby.etherscan.io/address/0x19e88e279844f0201079b39c736a94b87b32b6b6"},"LPPCappedMilestoneFactory: 0x19e88e279844f0201079b39c736a94b87b32b6b6"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Constructor params: 000000000000000000000000a018199569d94c9dfb6de1d8e8cb37928f20d444")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," All escapeHatches for liquidPledging contracts (not bridge) have been replaced with the recoveryVault functionality of AragonOS. We will register 1 recoveryVault (Giveth Multisig on Rinkeby) in the kernel and all app will be \u201cescapable\u201d to that vault."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wallet Funding Account:")," 0xf94230D278b36a29fD1363Bd57D12AEb8b8D426B"))}u.isMDXComponent=!0}}]);