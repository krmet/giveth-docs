"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[9904],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,g=d["".concat(u,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8280:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return c}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a={id:"contributors",title:"Contributor Guide"},s=void 0,u={unversionedId:"contributors",id:"contributors",isDocsHomePage:!1,title:"Contributor Guide",description:"Getting Started",source:"@site/docs/doc1a-contributors.md",sourceDirName:".",slug:"/contributors",permalink:"/docs/contributors",tags:[],version:"current",frontMatter:{id:"contributors",title:"Contributor Guide"},sidebar:"defaultSidebar",previous:{title:"Style Guide",permalink:"/docs/styleguide"},next:{title:"Testing Guidelines",permalink:"/docs/testing-guidelines"}},l=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Zenhub",id:"zenhub",children:[]},{value:"Github Issue Management",id:"github-issue-management",children:[{value:"Creating Issues",id:"creating-issues",children:[]}]}],p={toc:l};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"getting-started"},"Getting Started"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Like, star and fork the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Giveth/giveth-2"},"repo")," if you want to help with visibility.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Before starting any work, please introduce yourself on the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/qf7XZ48gCU"},"Giveth Discord")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"#Contribute")," channel (see chat links here: ",(0,o.kt)("a",{parentName:"p",href:"https://giveth.io/join"},"https://giveth.io/join"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you found the project via a Gitcoin bounty, please make sure to check the issue every few days until completion (Gitcoin requires some proof of life checks).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Please start a new branch on your fork named with the feature/fix you want to attempt and make a ",(0,o.kt)("strong",{parentName:"p"},"pull request")," when you are confident everything is ready to publish."))),(0,o.kt)("h2",{id:"zenhub"},"Zenhub"),(0,o.kt)("p",null,"We use Zenhub, ",(0,o.kt)("a",{parentName:"p",href:"https://www.zenhub.com/extension"},"which you can install from here"),"."),(0,o.kt)("p",null,"The use of columns in Zenhub in ",(0,o.kt)("inlineCode",{parentName:"p"},"giveth-2"),":"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"New Issues")," - New bugs and features go here first."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Epics")," - Pipeline for Epic Issues. Larger tasks comprised of several smaller issues."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Icebox")," - Features or Suggestions that have been archived. Issues here are non-priority and might be added into sprints only if Devs have the bandwidth."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Backlog")," - Lower Priority Issues waiting to get pulled into Sprint Planning."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sprint Backlog")," - These issues have been vetted and are ready to be worked on. They will be added into the next sprint according to priority and Developer bandwidth."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In Progress")," - Picked up and being worked on by the Developers, usually on local builds."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"On Develop")," - Local changes have been pushed to the developer build for developers to test."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Staging (User testing)")," - The feature or bug fix is deployed on the staging server for user testing."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Done")," - Bug fixes or feature has been completed, and is ready to be deployed on the live server."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Closed")," - The bug fix or feature has been copied live"),(0,o.kt)("p",null,"Please follow these guidelines, when working with Github issues"),(0,o.kt)("h2",{id:"github-issue-management"},"Github Issue Management"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Epics")," are for breaking up larger issues into smaller, more manageable issues."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sprints")," are broken down into 2 weeks each. Developers are expected to finish their assigned tasks for the end each sprint. Before the beginning of each new sprint progress is assessed and Developers are assigned new issues brought in from the backlog for the upcoming sprint."),(0,o.kt)("h3",{id:"creating-issues"},"Creating Issues"),(0,o.kt)("p",null,"When you create an issue it's important to assign it to a developer so it get's acknowledged and properly prioritized. If you're not sure who to tag, reach out in discord."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Labels")," will help add context to your issue, please use them so contributors can get a better understanding of issues at a glance and pick them up."),(0,o.kt)("p",null,"The new issue template is a guide only, feel free to delete any heading that you don't use."))}c.isMDXComponent=!0}}]);