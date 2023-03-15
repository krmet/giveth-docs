"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[6702],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=i,c=h["".concat(s,".").concat(m)]||h[m]||d[m]||o;return n?a.createElement(c,r(r({ref:t},u),{},{components:n})):a.createElement(c,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),i=(n(7294),n(3905)),o=n(4996);const r={id:"contributors",title:"Contributing to Giveth Development",slug:"dapps/contributors"},l=void 0,s={unversionedId:"contributors",id:"contributors",title:"Contributing to Giveth Development",description:"Giveth currently maintains three products that focus on funding management, peer to peer donations, and DeFi for-good token economics. These are Giveth TRACE, Giveth.io and the GIVeconomy respectively",source:"@site/dapps/doc1a-contributors.md",sourceDirName:".",slug:"/dapps/contributors",permalink:"/dapps/contributors",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/doc1a-contributors.md",tags:[],version:"current",lastUpdatedBy:"mitch",lastUpdatedAt:1649688459,formattedLastUpdatedAt:"Apr 11, 2022",frontMatter:{id:"contributors",title:"Contributing to Giveth Development",slug:"dapps/contributors"},sidebar:"dapps",previous:{title:"The Givers PFP Collection",permalink:"/dapps/giverspfp"},next:{title:"Installing Giveth.io for Local Development",permalink:"/dapps/givethioinstallation"}},p={},u=[{value:"Github Management",id:"github-management",level:2},{value:"Repositories",id:"repositories",level:3},{value:"Pipelines on the <code>All-Devs</code> Workspace",id:"pipelines-on-the-all-devs-workspace",level:3},{value:"Creating Issues",id:"creating-issues",level:3},{value:"Ceremonies",id:"ceremonies",level:2},{value:"Sprint Management",id:"sprint-management",level:2},{value:"What is Scrum?",id:"what-is-scrum",level:3},{value:"Key Contacts",id:"key-contacts",level:2},{value:"Installation Guides for Local Development",id:"installation-guides-for-local-development",level:2},{value:"Testing Guidelines",id:"testing-guidelines",level:2},{value:"Tools we Use",id:"tools-we-use",level:2}],d={toc:u};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Giveth currently maintains three products that focus on funding management, peer to peer donations, and DeFi for-good token economics. These are ",(0,i.kt)("a",{parentName:"p",href:"https://trace.giveth.io"},"Giveth TRACE"),", ",(0,i.kt)("a",{parentName:"p",href:"https://giveth.io"},"Giveth.io")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://giveth.io"},"GIVeconomy")," respectively"),(0,i.kt)("p",null,"All our products share some common development standards that are paramount to learn before engaging in any development for Giveth. In this document we'll show you how to interact with our open-source repositories, getting in touch with the right people and how to begin creating and picking up issues."),(0,i.kt)("h2",{id:"github-management"},"Github Management"),(0,i.kt)("p",null,"First things first, you'll need to install the ",(0,i.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd"},"zenhub extension for github")," for your web browser that will allow you to see the workspaces and pipelines we use in Github to manage issues."),(0,i.kt)("img",{alt:"All-Devs Zenhub Board",width:"85%",height:"auto",src:(0,o.Z)("img/content/allDevsZenhub.png")}),(0,i.kt)("p",null,"We have transitioned to manage all three DApps(products) under one workspace, ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"All-Devs")),"."),(0,i.kt)("h3",{id:"repositories"},"Repositories"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Giveth"},"Giveth Github organization")," has many, many repositories. Here\u2019s a general overview of relevant repositories that relate to our active products:"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h3",null,"Product")),(0,i.kt)("td",null,(0,i.kt)("h3",null,"Repository")),(0,i.kt)("td",null,(0,i.kt)("h3",null,"Description"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Giveth.io"),(0,i.kt)("td",null,"impact-graph"),(0,i.kt)("td",null,"Backend of Giveth.io")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Giveth.io"),(0,i.kt)("td",null,"giveth-next"),(0,i.kt)("td",null,"Giveth.io current version")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Giveth.io"),(0,i.kt)("td",null,"giveth-io-typescript"),(0,i.kt)("td",null,"Givethio typescript version with new design.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"GIVEeconomy"),(0,i.kt)("td",null,"GIVeconomy"),(0,i.kt)("td",null,"Usually used for planning and issue tracking")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"GIVeconomy"),(0,i.kt)("td",null,"giv-token-contracts"),(0,i.kt)("td",null,"Smart contract implementations")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"GIVeconomy"),(0,i.kt)("td",null,"liquidity-mining-dapp"),(0,i.kt)("td",null,"GIVeconomy Frontend UI")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"GIVeconomy"),(0,i.kt)("td",null,"giv-token-subgraph"),(0,i.kt)("td",null,"Calculating $GIV data for GIVeconomy Frontend")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"GIVeconomy"),(0,i.kt)("td",null,"givback-calculation"),(0,i.kt)("td",null,"Calculating GIVbacks")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"TRACE"),(0,i.kt)("td",null,"giveth-dapp"),(0,i.kt)("td",null,"Frontend and planning of giveth TRACE")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"TRACE"),(0,i.kt)("td",null,"feathers-giveth"),(0,i.kt)("td",null,"Backend of Giveth TRACE")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"TRACE"),(0,i.kt)("td",null,"dapp-mailer"),(0,i.kt)("td",null,"Email notification system for TRACE")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"TRACE"),(0,i.kt)("td",null,"giveth-bridge"),(0,i.kt)("td",null,"Giveth Rinkeby - Mainnet Bridge system")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"General Services"),(0,i.kt)("td",null,"ui-design-system"),(0,i.kt)("td",null,"npm package for Giveth design assets"))),(0,i.kt)("h3",{id:"pipelines-on-the-all-devs-workspace"},"Pipelines on the ",(0,i.kt)("inlineCode",{parentName:"h3"},"All-Devs")," Workspace"),(0,i.kt)("p",null,"When you enter a workspace on the Zenhub tab you'll see a line of adjacent columns that are used to identify and manage the statuses of issues currently in the repositories. You can find a short description of each below:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"New Issues")," - New bugs and features go here first."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Epics")," - Pipeline for Epic Issues. Larger tasks comprised of several smaller issues."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Icebox")," - Features or Suggestions that have been archived. Issues here are non-priority and might be added into sprints only if Devs have the bandwidth."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Backlog")," - Lower Priority Issues waiting to get pulled into Sprint Planning."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sprint Backlog")," - These issues have been vetted and are ready to be worked on. They will be added into the next sprint according to priority and Developer bandwidth."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In Progress")," - Picked up and being worked on by the Developers, usually on local builds."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code Reviews")," - Open Pull Requests waiting for review and eventual merge into the staging server."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It\u2019s mandatory to have the code reviewed by one of the core team members, usually your mentor or the one which introduces the project to you can review it, pls ask for review before pushing it to any environment.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"UAT Testing/QA")," - The feature or bug fix is deployed on the staging server for user testing and Quality Assurance."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Done")," - Bug fix or feature has been completed, and is ready to be deployed on the live server."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"All issues should meet DoD (Definition of Done) criteria to be approved as Done and being in this column:\nSuccess Criteria passed (if it\u2019s  get mentioned in User Story / Task or related issue)\nDeployed in Staging\nUAT Tested by a tester or PM\nDocumented")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Closed")," - The bug fix or feature has been copied live. It\u2019s recommended that all closed issues get related to a release number in the zenhub and get closed right after the version goes live."),(0,i.kt)("h3",{id:"creating-issues"},"Creating Issues"),(0,i.kt)("p",null,"Creating Github issues is essential to ensure bug fixes or features are tracked properly and relevant information can be organized, and consolidated. The new issue template is a guide only, feel free to delete any heading that you don't use."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Labels")," will help add context to your issue, please use them so other developers can get a better understanding of issues at a glance and pick them up. Some commonly used labels in ",(0,i.kt)("inlineCode",{parentName:"p"},"All-Devs")," are:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"fast follow"))," - Priority features or improvements following a product launch or version release."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"documentation"))," - Requesting creation or updates of technical documentation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"bugs"))," - Functionality or feature of a product that is broken or not working as intended"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"feature request"))," - Requesting for a new feature or functionality to be added to a product"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"design needed"))," - Requesting support from the design team to create assets relevant to this issue"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"question"))," - There is a pending question inside this issue that needs a response in order to move forward"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"security"))," - Security issue or improvement"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"UI"))," - This issue relates to the User Interface of a given product"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"UX"))," - This issue relates to the User Experience of a given product"),(0,i.kt)("h2",{id:"ceremonies"},"Ceremonies"),(0,i.kt)("p",null,"We host in the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.giveth.io"},"Giveth Discord")," many Developer meetings throughout the week including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Daily Dev Standups from Tuesday to Thursday at 6:30am GMT-6  "),(0,i.kt)("li",{parentName:"ul"},"All-Devs Sync weekly on Mondays at 10:00am GMT-6"),(0,i.kt)("li",{parentName:"ul"},"GIVeconomy Sync weekly on Wednesdays at 8:00am GMT-6")),(0,i.kt)("p",null,"These meetings are important places to stay up to date with DApp development and to integrate with the Giveth Team as a Development Contributor."),(0,i.kt)("h2",{id:"sprint-management"},"Sprint Management"),(0,i.kt)("p",null,"Framework: We\u2019re practicing mostly Scrum, in biweekly iterations (called sprints), sometimes based on project situations we move to KanBan."),(0,i.kt)("h3",{id:"what-is-scrum"},"What is Scrum?"),(0,i.kt)("p",null,"In scrum, the sprint is a set period of time where all the work is done. However, before you can leap into action you have to set up the sprint. You need to decide on how long the time box is going to be, the sprint goal, and where you're going to start. The sprint planning session kicks off the sprint by setting the agenda and focus."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"The What")," \u2013  The product owner describes the objective(or goal) of the sprint and what backlog items contribute to that goal. The scrum team decides what can be done in the coming sprint and what they will do during the sprint to make that happen.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"The How")," \u2013 The development team plans the work necessary to deliver the sprint goal. Ultimately, the resulting sprint plan is a negotiation between the development team and product owner based on value and effort.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"The Who")," \u2013 You cannot do sprint planning without the product owner or the development team. The product owner defines the goal based on the value that they seek. The development team needs to understand how they can or cannot deliver that goal. If either is missing from this event it makes planning the sprint almost impossible.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"The Inputs")," \u2013 A great starting point for the sprint plan is the product backlog as it provides a list of \u2018stuff\u2019 that could potentially be part of the current sprint. The team should also look at the existing work done in the increment and have a view to capacity.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"The Outputs")," \u2013 The most important outcome for the sprint planning meeting is that the team can describe the goal of the sprint and how it will start working toward that goal. This is made visible in the sprint backlog."))),(0,i.kt)("img",{alt:"sprint planning",width:"75%",src:(0,o.Z)("img/content/sprintInfo.png")}),(0,i.kt)("p",null,"Before the iteration starts, you may need to have your expected total contribution hours in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1fJcFTLJof6o0rViKIy4C46sXuisySTud40HFsMGE1e0/edit#gid=311929329"},"Giveth Resource Planning Spreadsheet"),", the link usually gets shared in the Discord dev channel before the sprint meeting. You can find the sprint sheet and update the following cells:"),(0,i.kt)("img",{alt:"resource planning spreadsheet",src:(0,o.Z)("img/content/resourcePlanningAllDevs.png")}),(0,i.kt)("p",null,"It helps the Product Managers (PMs) to plan for the resources better and know if they are able to meet the milestone in each sprint or not. If you couldn\u2019t find time to fill out the spreadsheet, you may be asked to do so during the meeting or whenever you can have an estimate, just DM it to PMs or put it in the dev channel."),(0,i.kt)("p",null,"The usual sprint planning goes like this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"PMs bring the issues (Preferably User Stories to the planning meeting, describe it and make sure it\u2019s clear for the team to start implementing."),(0,i.kt)("li",{parentName:"ol"},"PM facilitates talks between devs to make it as clear as it can be."),(0,i.kt)("li",{parentName:"ol"},"PM asks for estimations in Story Points (Story Points are the unit of minimum effort spent on a product which can be delivered asap, like a simple bug fix, for example, could take half of a working day. )"),(0,i.kt)("li",{parentName:"ol"},"PM starts building \u201cSprint Backlog\u201d with prioritizing the issues and makes sure the total amount of Story Points are proportionate with the total capacity of the teams and contributors."),(0,i.kt)("li",{parentName:"ol"},"Everyone agrees on the sprint plan and commits to the expected goal.")),(0,i.kt)("h2",{id:"key-contacts"},"Key Contacts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Development Working Group Steward - Amin",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Discord Handle: ",(0,i.kt)("inlineCode",{parentName:"li"},"Amin#2164")))),(0,i.kt)("li",{parentName:"ul"},"GIVeconomy Product Manager - Lauren",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Discord Handle: ",(0,i.kt)("inlineCode",{parentName:"li"},"karmaticacid#1218")))),(0,i.kt)("li",{parentName:"ul"},"Giveth TRACE, Giveth.io Product Manager - MoeNick",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Discord Handle: ",(0,i.kt)("inlineCode",{parentName:"li"},"MoeNick#1374")))),(0,i.kt)("li",{parentName:"ul"},"Giveth.io Lead Developer - Mateo",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Discord Handle: ",(0,i.kt)("inlineCode",{parentName:"li"},"mateodaza#3156")))),(0,i.kt)("li",{parentName:"ul"},"DevOps & Security - Kay",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Discord Handle: ",(0,i.kt)("inlineCode",{parentName:"li"},"geleeroyale#3228")))),(0,i.kt)("li",{parentName:"ul"},"Lead Designer - Marko",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Discord Handle: ",(0,i.kt)("inlineCode",{parentName:"li"},"markop#2007"))))),(0,i.kt)("h2",{id:"installation-guides-for-local-development"},"Installation Guides for Local Development"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./givethioinstallation"},"Giveth.io")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./TRACEinstallation"},"Giveth TRACE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./installGIVeconomy"},"GIVeconomy"))),(0,i.kt)("h2",{id:"testing-guidelines"},"Testing Guidelines"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./testing-guidelines"},"Giveth.io")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./testingGIVeconomy"},"GIVeconomy"))),(0,i.kt)("h2",{id:"tools-we-use"},"Tools we Use"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://segment.com/"},"Segment")," (Giveth TRACE, Giveth.io)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sentry.io/welcome/"},"Sentry")," (Giveth TRACE, Giveth.io)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://infura.io/"},"Infura")," (Giveth TRACE, Giveth.io)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://journeys.autopilotapp.com/features/email-marketing-software"},"Autopilot")," (Giveth.io)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.amplitude.com/"},"Amplitude")," (Giveth TRACE, Giveth.io)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"Docusaurus")," (Documentation)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://thegraph.com/en/"},"The Graph")," (GIVeconomy)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.netlify.com/"},"Netlify")," (Giveth TRACE)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://vercel.com/dashboard"},"Vercel")," (Giveth.io, GIVeconomy)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.cryptocompare.com/"},"Cryptocompare")," (Giveth TRACE)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.coingecko.com/en/api"},"Coingecko")," (All Products)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/features/actions"},"Github Actions")," (All Products)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.mongodb.com/"},"MongoDB")," (Giveth TRACE)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL")," (Giveth.io)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redis.io/"},"Redis")," (Giveth TRACE, Giveth.io)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.elastic.co/elasticsearch/"},"Elastic Search")," (Giveth TRACE)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.elastic.co/kibana/"},"Kibana")," (Giveth TRACE)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.pinata.cloud/"},"Pinata")," (Giveth.io, GIVeconomy)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://transak.com/"},"Transak")," (Giveth.io)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://v2.adminbro.com/index.html"},"AdminBro")," (Giveth.io)")))}h.isMDXComponent=!0}}]);