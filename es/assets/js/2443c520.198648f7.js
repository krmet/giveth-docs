"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[7827],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(g,i(i({ref:t},h),{},{components:r})):a.createElement(g,i({ref:t},h))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6312:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var a=r(7462),n=(r(7294),r(3905)),o=r(4996);const i={slug:"whatDappened2",title:"What DAppened: March 31 \u2014 April 14",author:"Lauren",author_title:"Blockchain DAbbler and Heart-Centered Jack of All Trades",author_image_url:"/img/laurenAuthor.png",image:"img/blog/whatsDappening2Gif.gif"},l=void 0,s={permalink:"/es/blog/whatDappened2",source:"@site/blog/2021-04-19-whatDappened2.md",title:"What DAppened: March 31 \u2014 April 14",description:"We\u2019re back with another development update from our recent sprint cycle! Read on to stay in-the-know on what\u2019s dAppening at giveth.io",date:"2021-04-19T00:00:00.000Z",formattedDate:"19 de abril de 2021",tags:[],readingTime:2.67,hasTruncateMarker:!1,authors:[{name:"Lauren",title:"Blockchain DAbbler and Heart-Centered Jack of All Trades",imageURL:"/img/laurenAuthor.png"}],frontMatter:{slug:"whatDappened2",title:"What DAppened: March 31 \u2014 April 14",author:"Lauren",author_title:"Blockchain DAbbler and Heart-Centered Jack of All Trades",author_image_url:"/img/laurenAuthor.png",image:"img/blog/whatsDappening2Gif.gif"},prevItem:{title:"The First Change-Maker Submission Roundup is In!",permalink:"/es/blog/changeMakersRoundup1"},nextItem:{title:"Calling All Change-Makers!",permalink:"/es/blog/changeMakers"}},p={authorsImageUrls:[void 0]},h=[{value:"Want to get more involved?",id:"want-to-get-more-involved",level:2}],u={toc:h};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"We\u2019re back with another development update from our recent sprint cycle! Read on to stay in-the-know on what\u2019s dAppening at")," ",(0,n.kt)("a",{parentName:"p",href:"https://giveth.io/"},(0,n.kt)("em",{parentName:"a"},"giveth.io"))),(0,n.kt)("p",null,"In this past sprint, we discovered in our testing a wee little bug in our \u201csort\u201d feature that was causing only the pre-loaded projects to be sorted. Rest assured, we squashed that bug and now the sort/filter/search functionality is working smoothly. We have documented how to obtain a project with a high \u201cquality score\u201d in our ",(0,n.kt)("a",{parentName:"p",href:"https://docs.giveth.io/guides/qualityscore/"},"Giveth docs"),". Makers can now ensure that they\u2019re doing everything they can to see their projects rise to the top!"),(0,n.kt)("p",null,"We\u2019ve upgraded the projects page as well with \u201cinfinite scroll\u201d, allowing the user to scroll down the page as new projects load automatically."),(0,n.kt)("img",{alt:"Infinite Scroll is fun",class:"center",src:(0,o.Z)("img/blog/whatsDappening2Gif.gif")}),(0,n.kt)("p",null,"To further improve upon the quality of projects on our dApp, our team has been working on the new project verification method. We are developing a process in which Makers can submit their projects for review by our team and potentially achieve \u201cverified\u201d status. In the future, verified projects will be eligible for some exciting benefits \ud83d\ude09"),(0,n.kt)("img",{alt:"Bob Ross for Giveth4Change",class:"leftfloat",width:"475",height:"auto",src:(0,o.Z)("img/blog/whatsDappening2Meme1.jpg")}),(0,n.kt)("p",null,"If you haven\u2019t heard yet, we launched the \u201c",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/giveth/calling-all-change-makers-7fa964684c2b"},"Change Maker Campaign"),"\u201d with ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/hashtag/Giveth4Change?src=hashtag_click"},"#giveth4change"),", encouraging Makers to creatively share their stories on how they are making a positive impact in the world we live in. Our favourite projects are going to be highlighted across the Giveth social network, helping them gain cred and support!"),(0,n.kt)("p",null,"It runs until May 12, 2021, so it\u2019s not too late to submit your projects!"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Coming with our next sprint, we\u2019ll be putting the finishing touches on rich text formatting for project descriptions so Makers can add photos, embed videos, create lists, format texts, and customize the presentation of their project information."),(0,n.kt)("p",null,"We\u2019re also continuing to improve email notifications so that our users get appropriate and useful emails in accordance with their interactions on Giveth."),(0,n.kt)("p",null,"Further adding to the dApp, we\u2019ll be integrating an embedded support chat so that users on giveth.io can ask questions directly to our team while using the platform."),(0,n.kt)("p",null,"Still in the works is the implementation of efficient methods of fiat on-ramping and off-ramping, and we now have more of our team members focusing efforts on resolving this long standing issue."),(0,n.kt)("hr",null),(0,n.kt)("p",null,"As always, we are committed to building the future of giving based on feedback from you, our community! Let us know what you\u2019d like to see us work on in future sprints by ",(0,n.kt)("a",{parentName:"p",href:"http://giveth.io/"},"trying out the DApp")," and sharing your thoughts in our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/invite/JftjK8Un3z"},"Discord"),"."),(0,n.kt)("p",null,"Thanks for reading and we\u2019ll see you at the end of the next sprint for more dev updates \ud83d\ude18"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Many thanks to our amazing team for making all this possible: James, Mateo, Kay, Merlin, Danibelle, Willy, Griff, Marko, Mitch, Ashley, and Lauren!")),(0,n.kt)("h2",{id:"want-to-get-more-involved"},"Want to get more involved?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Join us on ",(0,n.kt)("a",{parentName:"li",href:"https://discord.giveth.io"},"Discord")," or ",(0,n.kt)("a",{parentName:"li",href:"http://t.me/givethio"},"Telegram")),(0,n.kt)("li",{parentName:"ul"},"Discover our ",(0,n.kt)("a",{parentName:"li",href:"http://giveth.io/"},"Site"),", ",(0,n.kt)("a",{parentName:"li",href:"https://docs.giveth.io/"},"Docs")," and ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.giveth.io/"},"Wiki")),(0,n.kt)("li",{parentName:"ul"},"Fork our code on ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Giveth/"},"GitHub")),(0,n.kt)("li",{parentName:"ul"},"Follow us on ",(0,n.kt)("a",{parentName:"li",href:"http://medium.com/giveth/"},"Medium"),", ",(0,n.kt)("a",{parentName:"li",href:"https://www.facebook.com/givethio"},"Facebook"),", ",(0,n.kt)("a",{parentName:"li",href:"http://twitter.com/givethio"},"Twitter"),", ",(0,n.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/giveth/"},"Reddit")," and ",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/channel/UClfutpRoY0WTVnq0oB0E0wQ"},"YouTube"))),(0,n.kt)("p",null,"Help us Build the Future of Giving: \ud83e\udd84 ",(0,n.kt)("a",{parentName:"p",href:"http://donate.giveth.io/"},"Donate directly")," \ud83e\udd84 or ",(0,n.kt)("a",{parentName:"p",href:"https://www.ledgerwallet.com/products/ledger-nano-s?utm_source=&utm_medium=affiliate&utm_campaign=d663"},"buy a Ledger with our affiliate link")))}c.isMDXComponent=!0}}]);