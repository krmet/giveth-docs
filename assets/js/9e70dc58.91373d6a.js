"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[2481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={id:"regenFarmContracts",title:"Regen Farm Smart Contract Guide",slug:"dapps/regenFarmContracts"},i=void 0,s={unversionedId:"regenFarmContracts",id:"regenFarmContracts",title:"Regen Farm Smart Contract Guide",description:"GIVeconomy is a collection of audited smart contracts which work together to provide capabilities, including: token streaming, airdropping, and various types of farming. Contracts and scripts can be found at the Giveth giv-token-contracts repository.",source:"@site/dapps/regenFarmContracts.md",sourceDirName:".",slug:"/dapps/regenFarmContracts",permalink:"/dapps/regenFarmContracts",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/regenFarmContracts.md",tags:[],version:"current",lastUpdatedBy:"Amin Latifi",lastUpdatedAt:1652119118,formattedLastUpdatedAt:"May 9, 2022",frontMatter:{id:"regenFarmContracts",title:"Regen Farm Smart Contract Guide",slug:"dapps/regenFarmContracts"},sidebar:"dapps",previous:{title:"GIVeconomy Testing Guidelines",permalink:"/dapps/testingGIVeconomy"},next:{title:"Responsible Disclosure",permalink:"/security/responsible-disclosure"}},l={},p=[{value:"Contracts",id:"contracts",level:2},{value:"Streaming",id:"streaming",level:3},{value:"Air Drop",id:"air-drop",level:3},{value:"Farming",id:"farming",level:3},{value:"Deployment",id:"deployment",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"GIVeconomy is a collection of audited smart contracts which work together to provide capabilities, including: token streaming, airdropping, and various types of farming. Contracts and scripts can be found at the ",(0,a.kt)("strong",{parentName:"p"},"Giveth")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Giveth/giv-token-contracts"},"giv-token-contracts")," repository."),(0,a.kt)("h2",{id:"contracts"},"Contracts"),(0,a.kt)("h3",{id:"streaming"},"Streaming"),(0,a.kt)("p",null,"The streaming allows any rewards (e.g. airdrop, liquidity mining reward, ...) to be released gradually across a given time span instead of the whole sum moving immediately to the end user's wallet. To achieve that, every reward payment to users will be an ",(0,a.kt)("inlineCode",{parentName:"p"},"allocate")," on stream instead of a traditional ",(0,a.kt)("inlineCode",{parentName:"p"},"transfer/safeTransfer"),"."),(0,a.kt)("p",null,"Each instance of a ",(0,a.kt)("strong",{parentName:"p"},"Stream")," is deployed with these configuration parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Total Tokens:")," Total amount of tokens that will be distributed over the stream period"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Start Time:")," The time stamp that the stream begins"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Duration:")," Total duration of the stream. At the end of stream 100% of tokens are released and can be claimed by recipients."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cliff Period:")," The length of an initial period after the start of the stream. During this period, only the intitial percentage of the stream can be claimed and not more."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Initial Percentage:")," The percentage of immediately claimable rewards during the ",(0,a.kt)("em",{parentName:"li"},"Cliff Period"),"  ")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"TokenDistro")," is the smart contract which has implemented the streaming feature.  Any eligible smart contract or eligible user can call ",(0,a.kt)("inlineCode",{parentName:"p"},"allocate")," method on the ",(0,a.kt)("strong",{parentName:"p"},"TokenDistro")," to add to the recipient's balance of their stream. Eligible contracts or users who can call ",(0,a.kt)("inlineCode",{parentName:"p"},"allocate")," should have the ",(0,a.kt)("strong",{parentName:"p"},"DISTRIBUTOR")," role for the ",(0,a.kt)("strong",{parentName:"p"},"TokenDistro")," smart contract. They are called ",(0,a.kt)("strong",{parentName:"p"},"Distributors"),". Each Distributor has a balance that they can distribute. Therefore, on each allocation the allocated amount sent is decreased from the distributor's balance and is added to recipient's balance."),(0,a.kt)("p",null,"A percentage of the allocated amount is claimable immediately, and the remaining percent goes into increasing recipient's stream flowrate. The flowrate is an expression of how many tokens become claimable from their stream over a weekly period. Over time, a greater percentage of the recipient's balance will be claimable immediately following the continued expansion of the stream."),(0,a.kt)("h3",{id:"air-drop"},"Air Drop"),(0,a.kt)("p",null,"The initial token distribution can be done by the ",(0,a.kt)("strong",{parentName:"p"},"MerkleDistro")," smart contract. It utilizes ",(0,a.kt)("em",{parentName:"p"},"Merkle Tree")," theory and each eligible recipient should provide its own unique proof data to claim their air drop. The air drop value actually will be allocated by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"allocate")," on ",(0,a.kt)("strong",{parentName:"p"},"TokenDistro")," and will be added to user's stream balance."),(0,a.kt)("p",null,"Each instance of ",(0,a.kt)("strong",{parentName:"p"},"MerkleDistro")," is deployed with these configuration parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Merkle Tree Root:")," The key of the merkle tree root (read blow)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Token Distro Address:")," The address of the deployed TokenDistro instance.")),(0,a.kt)("p",null,"In order to deploy the ",(0,a.kt)("strong",{parentName:"p"},"MerkleDistro")," smart contract, the deployer must generate a merkle tree. The value of root will be used on the smart contract at deployment time, and the whole tree data is needed to obtain each user unique path to root. In ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Giveth/giv-token-contracts"},"giv-token-contracts")," repo, there is a script to generate merkle tree data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ts-node scripts/generate-merkle-root.ts --input <airdrop json file path> --output <output file path>\n")),(0,a.kt)("p",null,"A JSON format of the airdrop data is not easy to generate for everyone, an ",(0,a.kt)("inlineCode",{parentName:"p"},"airdrop json file")," can be generated by a separate script from a CSV file, which is a more convenient format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ts-node scripts/csv2json.ts <airdrop csv list path> <airdrop json file path>\n")),(0,a.kt)("h3",{id:"farming"},"Farming"),(0,a.kt)("p",null,"Giveth uses the ",(0,a.kt)("strong",{parentName:"p"},"UnipoolTokenDistro"),", a derivative of the ",(0,a.kt)("em",{parentName:"p"},"Unipool")," smart contract, for farming purposes. The difference is that ",(0,a.kt)("strong",{parentName:"p"},"UnipoolTokenDistro")," pays stakers' rewards by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"allocate")," method on the ",(0,a.kt)("em",{parentName:"p"},"TokenDistro(stream)")," instead of transferring real tokens to the recipient's address."),(0,a.kt)("p",null,"Generally, the Unipool contract rewards stakers based on the liquidity they have staked. The liquidity token is named ",(0,a.kt)("inlineCode",{parentName:"p"},"uni")," deposited by stakers, and can be any token such as native token (e.g. GIV, FOX, ...)  or a LP token obtained by staking in a pool (e.g. UniswapV2, SushiSwap, HoneySwap, ...)."),(0,a.kt)("p",null,"The Unipool reward amount is set by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"notifyRewardAmount(uint256 reward)")," method by the ",(0,a.kt)("strong",{parentName:"p"},"rewardDistribution"),". ",(0,a.kt)("strong",{parentName:"p"},"rewardDistribution")," can be set by the ",(0,a.kt)("strong",{parentName:"p"},"owner")," role and in the deployment script, deployer set its own address as ",(0,a.kt)("strong",{parentName:"p"},"rewardDistribution")," by default. Each time this method is called, the Unipool will set to disperse rewards in the ",(0,a.kt)("inlineCode",{parentName:"p"},"duration")," length period to stakers. Therefore, the reward distributor need to regularly call ",(0,a.kt)("inlineCode",{parentName:"p"},"notifyRewardAmount")," to keep a positive reward rate, and adjust the reward rate as it can be different on each round.\nEach instance of the ",(0,a.kt)("strong",{parentName:"p"},"UnipoolTokenDistro")," is deployed with these configuration parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TokenDistro Address:")," The address of deployed TokenDistro instance."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Uni Token Address:")," The liquidity token address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Duration:")," Each rewarding program round length")),(0,a.kt)("h2",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"Deployment of a stream with farms and an airdrop is complicated and would be error prone to be done manually. Therefore, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Giveth/giv-token-contracts"},"giv-token-contracts")," has scripts to make it easier. Most of these scripts are tailored for GIVeconomy use cases."),(0,a.kt)("p",null,"However, a script is ready for DAOs to deploy their own stream (tokenDistro) and farming programs (Unipools). The script can be found in the path ",(0,a.kt)("inlineCode",{parentName:"p"},"deployments/regenFarms/1_regenFarm.ts"),". The script reads the deployment configuration from ",(0,a.kt)("inlineCode",{parentName:"p"},"deployments/regenFarms/config.ts")," file. The configuration format in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.ts")," is as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'const config: IRegenConfig = {\n    alreadyDeployedTokenDistroAddress: "",\n    newTokenDistroParams: {\n        startTime: <start time timestamp>\n        cliffPeriod: <cliff time duration seconds>\n        duration: <duration seconds>\n        initialPercentage: <percentage number, like 20_00>, // two decimals of precision, 20_00 means 20%\n        tokenAddress: <Reward token address>\n        totalTokens: <Total number of tokens to distribute limit>, // In ether format\n        cancelable: <boolean>, // whether admins can cancel an allocation\n    },\n    unipools: {\n        <Key>: {\n            uniTokenAddress: <unit token address>,\n            lmDuration: <unipool reward round duration seconds>\n            rewardAmount: <Unipool balance on token distro>, // Number of tokens it can allocate\n        },\n        ...\n    },\n};\n')),(0,a.kt)("p",null,"To deploy via script these environmental variables should be set:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"INFURA_PROJECT_ID:")," When the network is not xDai (Gnosis-Chain)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PRIVATE_KEY:")," The private key of deployer account, used when network is not xDAI (Gnosis-Chain)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PRIVATE_KEY_XDAI:")," The private key of deployer account, used when network is xDAI (Gnosis-Chain)")),(0,a.kt)("p",null,"The script can be run by this command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HARDHAT_NETWORK=<network e.g. xDAI, mainnet, kovan> ts-node deployments/regenFarms/1_regenFarm.ts\n")))}c.isMDXComponent=!0}}]);