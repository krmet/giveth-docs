(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{155:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},v=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),v=i,f=u["".concat(a,".").concat(v)]||u[v]||b[v]||o;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),r=n(8),o=(n(0),n(155)),a={id:"oldinstallation",title:"Installation"},c={unversionedId:"oldinstallation",id:"oldinstallation",isDocsHomePage:!1,title:"Installation",description:"Giveth is maintaining multiple versions of different applications, most prominently the Giveth Donation Applications. For a full list of projects check out our github organization",source:"@site/docs/doc0-installation.md",slug:"/oldinstallation",permalink:"/docs/oldinstallation",version:"current"},l=[{value:"Giveth v2 (frontend)",id:"giveth-v2-frontend",children:[{value:"Build status of Giveth v2 deployments",id:"build-status-of-giveth-v2-deployments",children:[]}]},{value:"Giveth v2 (backend services)",id:"giveth-v2-backend-services",children:[]},{value:"Giveth v1 (beta.giveth.io)",id:"giveth-v1-betagivethio",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Giveth is maintaining multiple versions of different applications, most prominently the Giveth Donation Applications. For a full list of projects check out our ",Object(o.b)("a",{parentName:"p",href:"https://github.com/giveth"},"github organization")),Object(o.b)("h2",{id:"giveth-v2-frontend"},"Giveth v2 (frontend)"),Object(o.b)("p",null,"To run a local version for development, or deploy the full application visit the ",Object(o.b)("a",{parentName:"p",href:"/docs/run-giveth2"},"Instructions to run Giveth v2"),"."),Object(o.b)("h3",{id:"build-status-of-giveth-v2-deployments"},"Build status of Giveth v2 deployments"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://v2.giveth.io"},"master")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://app.netlify.com/sites/giveth2/deploys"},Object(o.b)("img",{parentName:"a",src:"https://api.netlify.com/api/v1/badges/f914ac7e-ce27-4909-bd3e-14d749731a52/deploy-status",alt:"Netlify Status"}))),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://staging.giveth.io"},"staging")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://app.netlify.com/sites/giveth-website-staging/deploys"},Object(o.b)("img",{parentName:"a",src:"https://api.netlify.com/api/v1/badges/2f325b5b-e159-443e-bac7-c5e15f3578c0/deploy-status",alt:"Netlify Status"}))),Object(o.b)("br",null),Object(o.b)("h2",{id:"giveth-v2-backend-services"},"Giveth v2 (backend services)"),Object(o.b)("p",null,"You will need to deploy some services if you want to deploy the full scale application. Visit ",Object(o.b)("a",{parentName:"p",href:"/docs/run-giveth2-backend"},"Instructions to run the backend for Giveth v2")),Object(o.b)("h2",{id:"giveth-v1-betagivethio"},"Giveth v1 (beta.giveth.io)"))}p.isMDXComponent=!0}}]);