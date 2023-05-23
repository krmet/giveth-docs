"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[8221],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),y=n,m=d["".concat(s,".").concat(y)]||d[y]||p[y]||a;return r?i.createElement(m,o(o({ref:t},c),{},{components:r})):i.createElement(m,o({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1747:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=r(7462),n=(r(7294),r(3905));const a={id:"disclosure",title:"Responsible Disclosure",slug:"security/responsible-disclosure"},o="Reporting a Security Issue or Vulnerability",l={unversionedId:"disclosure",id:"disclosure",title:"Responsible Disclosure",description:"Smart Contract security",source:"@site/dapps/submit-vulnerability.md",sourceDirName:".",slug:"/security/responsible-disclosure",permalink:"/security/responsible-disclosure",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/submit-vulnerability.md",tags:[],version:"current",lastUpdatedBy:"geleeroyale",lastUpdatedAt:1684849938,formattedLastUpdatedAt:"May 23, 2023",frontMatter:{id:"disclosure",title:"Responsible Disclosure",slug:"security/responsible-disclosure"},sidebar:"dapps",previous:{title:"Regen Farm Smart Contract Guide",permalink:"/dapps/regenFarmContracts"}},s={},u=[{value:"Smart Contract security",id:"smart-contract-security",level:2},{value:"Service vulnerability",id:"service-vulnerability",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"reporting-a-security-issue-or-vulnerability"},"Reporting a Security Issue or Vulnerability"),(0,n.kt)("h2",{id:"smart-contract-security"},"Smart Contract security"),(0,n.kt)("p",null,"If you believe you\u2019ve identified a ssmart contract issue or vulnerability, please submit a report via ",(0,n.kt)("a",{parentName:"p",href:"https://app.hats.finance/vulnerability"},"Hats.finance anon-friendly submission portal")," "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"On that page, under \u2018Select Project\u2019, search for \u2018Giveth\u2019"),(0,n.kt)("li",{parentName:"ol"},"enter the details of the security issue via the form.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Using this method will encrypt your communications with Giveth\u2019s security team, and will use the Hat\u2019s bug bounty system which you can learn more about ",(0,n.kt)("a",{parentName:"em",href:"https://docs.hats.finance/"},"in the hats.finance documentation"),".")),(0,n.kt)("h2",{id:"service-vulnerability"},"Service vulnerability"),(0,n.kt)("p",null,"If you believe you have identified a security vulnerability on the backend or in the way our deployments work, you are also welcome to email the security team directly at ",(0,n.kt)("inlineCode",{parentName:"p"},"security@giveth.io"),", with the subject line \u201cBug Bounty Program Submission\u201d.\nThe email should include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a detailed description of the vulnerability and steps to reproduce it. "),(0,n.kt)("li",{parentName:"ul"},"Please also include your Arbitrum wallet address for reward distribution. "),(0,n.kt)("li",{parentName:"ul"},"If you wish to encrypt your message to us, our public PGP key is available ",(0,n.kt)("a",{parentName:"li",href:"https://gist.github.com/geleeroyale/745bf235baae31de87bd270141736605"},"HERE"),".  ")),(0,n.kt)("p",null,"Once the report is received, the Giveth security team will review the vulnerability and respond with a determination of its validity and severity. If the report is valid, the team will work to fix the vulnerability and distribute the reward to the reporter."))}p.isMDXComponent=!0}}]);