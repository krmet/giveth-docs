(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return h}));var i=n(3),a=n(8),r=(n(0),n(155)),o=n(156),s=(n(38),{id:"bridgeSecurity",title:"Giveth Bridge Security Implementation"}),c={unversionedId:"bridgeSecurity",id:"bridgeSecurity",isDocsHomePage:!1,title:"Giveth Bridge Security Implementation",description:"A technical overview of the features, roles and theory behind the security of the Giveth Bridge.",source:"@site/trace/bridgeSecurity.md",slug:"/bridgeSecurity",permalink:"/trace/bridgeSecurity",editUrl:"https://github.com/giveth/giveth-docs/edit/master/trace/bridgeSecurity.md",version:"current",lastUpdatedBy:"divine-comedian",lastUpdatedAt:1622472167,formattedLastUpdatedAt:"5/31/2021",sidebar:"trace",previous:{title:"Giveth Entities and Roles",permalink:"/trace/entitiesAndRoles"},next:{title:"Leaving Traces (formerly Creating Milestones)",permalink:"/trace/leavingTraces"}},d=[{value:"What is the Giveth Bridge, exactly?",id:"what-is-the-giveth-bridge-exactly",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Security Roles",id:"security-roles",children:[{value:"Mainnet Owner",id:"mainnet-owner",children:[]},{value:"Mainnet Funding and EscapeHatch Destination",id:"mainnet-funding-and-escapehatch-destination",children:[]},{value:"Security Guard",id:"security-guard",children:[]},{value:"Mainnet EscapeHatchCaller",id:"mainnet-escapehatchcaller",children:[]},{value:"Allowed Spenders",id:"allowed-spenders",children:[]},{value:"ForeignGivethBridge Owner",id:"foreigngivethbridge-owner",children:[]},{value:"Rinkeby DappGod Multisig",id:"rinkeby-dappgod-multisig",children:[]},{value:"Rinkeby EscapeHatchCaller",id:"rinkeby-escapehatchcaller",children:[]}]},{value:"Possible Security Issue Scenarios",id:"possible-security-issue-scenarios",children:[]}],l={toc:d};function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h4",{id:"a-technical-overview-of-the-features-roles-and-theory-behind-the-security-of-the-giveth-bridge"},"A technical overview of the features, roles and theory behind the security of the Giveth Bridge."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"This document assumes that the reader has basic knowledge of smart contracts, multisig contracts and Ethereum testnet chains.")),Object(r.b)("h3",{id:"what-is-the-giveth-bridge-exactly"},"What is the Giveth Bridge, exactly?"),Object(r.b)("p",null,"The bridge has 3 parts: A contract on the Ethereum Mainnet, a contract on the Rinkeby Testnet, and an off-chain service that connects these two contracts. The off-chain service listens for events from these contracts and relays commands from one contract to the other."),Object(r.b)("img",{id:"contentimg",alt:"Giveth TRACE Bridge Flow",src:Object(o.a)("img/content/trace/givethbridge.png")}),Object(r.b)("h3",{id:"how-does-it-work"},"How does it work?"),Object(r.b)("p",null,"The Giveth Bridge contract on mainnet is simply a vault contract with 1 extra security measure and a few modifications to make it function as a bridge. Payments are only paid out under certain conditions. Every bridge payment has a standard 48-hour time lockout before payment can occur."),Object(r.b)("p",null,"During this time, the Security Guard has the ability to delay a payment further than the standard 48 hours - up to 30 days. This allows time to determine whether or not a payment needs to be cancelled. No payments can be issued without a check-in from the Security Guard happening XX minutes after the payment was requested. This check-in will happen daily so as not to delay authorized payments."),Object(r.b)("p",null,"There is also an ",Object(r.b)("inlineCode",{parentName:"p"},"escapeHatch")," that can be called by an ",Object(r.b)("inlineCode",{parentName:"p"},"escapeHatchCaller")," to send the funds in the bridge to the funding multisig during the 48 hour delay, or any additional delay generated by the Security Guard."),Object(r.b)("p",null,"This funding multisig will for some time also hold funds to diversify risk between the Bridge contract and the Consensus Multisig contract, when the bridge is holding too much value the funding multisig will ",Object(r.b)("inlineCode",{parentName:"p"},"escapeFunds()")," out of the bridge and when the bridge is getting low, the funding multisig will manually top it off."),Object(r.b)("p",null,"Donations and withdrawals will happen directly out of the bridge. When a donation is made to the bridge, a token is created by the TokenFactory (at 1:1 ETH) and sent to LiquidPledging, where the decisions are made about spending. When a payment is called for, tokens are sent from Liquid Pledging and burned by the ForeignGivethBridge, at which point the command is issued back across the Ghetto Bridge using the Bridge Key to the Giveth Bridge to issue a payment."),Object(r.b)("p",null,"In case for some reason the bridge goes down, the listener service will issue alarms to notify of a service interruption. The listener service will also create an alarm if tokens are created without a corresponding donation, or if tokens are not created at the time of a donation."),Object(r.b)("h2",{id:"security-roles"},"Security Roles"),Object(r.b)("h3",{id:"mainnet-owner"},"Mainnet Owner"),Object(r.b)("p",null,"This is the Giveth multisig that can issue control commands to the bridge. They can cancel any payment and can boot the Security Guard or remove the approved spender (bridge key)."),Object(r.b)("h3",{id:"mainnet-funding-and-escapehatch-destination"},"Mainnet Funding and EscapeHatch Destination"),Object(r.b)("p",null,"This multisig is used to both send funds to the Mainnet Bridge (Vault) and act as the destination for the EscapeHatch Call."),Object(r.b)("h3",{id:"security-guard"},"Security Guard"),Object(r.b)("p",null,"Keeps watch over all requested payments, checks in each day, and delays suspicious payments."),Object(r.b)("h3",{id:"mainnet-escapehatchcaller"},"Mainnet EscapeHatchCaller"),Object(r.b)("p",null,"This is a 1 of x multisig that can trigger the vault to dump its funds to a predetermined wallet. We have people that are scattered across the world, multiple points of contacts that can do this."),Object(r.b)("h3",{id:"allowed-spenders"},"Allowed Spenders"),Object(r.b)("p",null,"These addresses are a whitelist who can issue a payment request to the bridge contract. In the application the bridge key is the only Allowed Spender."),Object(r.b)("h3",{id:"foreigngivethbridge-owner"},"ForeignGivethBridge Owner"),Object(r.b)("p",null,"The bridge key."),Object(r.b)("h3",{id:"rinkeby-dappgod-multisig"},"Rinkeby DappGod Multisig"),Object(r.b)("p",null,"This multisig controls updates and has total access to control the ForeignGivethBridge. It also acts as the ",Object(r.b)("inlineCode",{parentName:"p"},"escapeHatchDestination")," for the ForeignGivethBridge and Liquid Pledging."),Object(r.b)("h3",{id:"rinkeby-escapehatchcaller"},"Rinkeby EscapeHatchCaller"),Object(r.b)("p",null,"This is a 1 of x multisig that can trigger the ForeignGivethBridge and Liquid Pledging contracts to dump their tokens to a predetermined wallet."),Object(r.b)("h2",{id:"possible-security-issue-scenarios"},"Possible Security Issue Scenarios"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Bridge Key is compromised:"),"\nA hacker could use bridge key to create transactions sending ETH to their own address to force transactions through. The Security Guard can delay these payments long enough for the owner multisig to cancel the payment and remove the compromised key on Mainnet."),Object(r.b)("p",null,"They could also create GivETH tokens as the token controller on the rinkeby side. The listener service would catch this though and sound the alarm any time GivETH tokens are generated without a corresponding Ether donation. (also sounds an alarm if the bridge key service decided to take a nap and doesn\u2019t create GivETH tokens when a donation is received.)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Owner multisig has a bug and is able to be taken over (like the parity hack) or 6 keys out of 11 of the keys are compromised:"),"\nThis is highly unlikely but if this happens there will be no loss of funds. This multisig doesn't hold any funds, it only controls the bridge. Tt could reduce the 48 hour delay to 25 hours, the Security Guard can still delay any payments but the Security Guard can be replaced by the owner. Funds could be escaped within the 25 hours in this scenario."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"EscapeHatchCaller keys get compromised:"),"\nIn this case the worst thing that can happen is that the flow of the DApp on Rinkeby can be disrupted. This can be repaired however, by removing the compromised key on the EscapeHatch 1 of x multisig, and DAppGod. Once that is done then simply sending the giveth tokens back to the address from which they came, a similar scenario is possible on Mainnet. The EscapeHatch Caller can only move money to an escape destination, and nowhere else. If a key is compromised the worst thing they can do is to remove all owners and themselves from the EscapeHatch multisig, but the owner 6 of 11 multisig on main net can still call the EscapeHatch and can replace the EscapeHatch caller and the 3 of 5 multisig on rinkeby can as well."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Funding multisig has a bug and is able to be taken over (like the parity hack) or 4 keys out of 7 of the keys are compromised:"),"\nThis is extremely unlikely but if this happens there will be a loss of funds. The loss however, would not be catastrophic as funds are split between the bridge and the multisig."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Bridge on mainnet has a bug that lets someone else take over as owner:"),"\nThe 48 hour delay can be only be reduced to 25 hours Security Guard can still delay any payments but the Security Guard can be replaced by the owner. Funds could be escaped within 25 hours in this scenario."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"DAppGod Multisig on the testnet decides to take over:"),"\nIf this were to occur, the EscapeHatch from the bridge would prevent any loss of funds, and the testnet set up could be manually redeployed."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"What if the Security Guard\u2019s key and Bridge Key Controller both get compromised (or their holders collude to steal funds)"),":\nThe Owner multisig can cancel payments and extend the time delay to longer than 48 hours. In this scenario though they probably wouldn't have to because the bridge funds can be escaped to the funding multisig. This is the only scenario that could be a serious risk to the funds in the bridge vault. This could be averted within 48 hours of the event starting because of the default delay and that funds can be escaped during that period."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Finally, what if the Event Listener falls off-line just previous to any of the aforementioned attacks that trigger alarms on compromise?"),"\nThe Security Guard should see any suspicious transactions and be able to delay payments until they are dealt with."))}h.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),h=l(n),p=i,b=h["".concat(o,".").concat(p)]||h[p]||u[p]||r;return n?a.a.createElement(b,s(s({ref:t},d),{},{components:n})):a.a.createElement(b,s({ref:t},d))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},156:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n(17),a=n(157);function r(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,o=r.forcePrependBaseUrl,s=void 0!==o&&o,c=r.absolute,d=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return d?e+l:l}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},157:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))}}]);