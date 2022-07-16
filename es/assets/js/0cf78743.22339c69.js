"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[7516],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),o=a(4996);const i={id:"givethioinstallation",title:"Installing Giveth.io for Local development"},l=void 0,s={unversionedId:"givethioinstallation",id:"givethioinstallation",title:"Installing Giveth.io for Local development",description:"Esta gu\xeda documentar\xe1 los pasos para configurar y ejecutar Giveth.io localmente con fines de desarrollo. El proceso de configuraci\xf3n se document\xf3 con Ubuntu 20.04 LTS.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/givethioinstallation.md",sourceDirName:".",slug:"/givethioinstallation",permalink:"/es/docs/givethioinstallation",draft:!1,tags:[],version:"current",frontMatter:{id:"givethioinstallation",title:"Installing Giveth.io for Local development"},sidebar:"defaultSidebar"},p={},c=[{value:"Instalar gr\xe1fico de impacto desde GitHub",id:"instalar-gr\xe1fico-de-impacto-desde-github",level:3},{value:"Crear una base de datos y un usuario en Postgres usando psql",id:"crear-una-base-de-datos-y-un-usuario-en-postgres-usando-psql",level:3},{value:"Clonar e instalar la interfaz",id:"clonar-e-instalar-la-interfaz",level:3},{value:"Obtener las variables de entorno",id:"obtener-las-variables-de-entorno",level:3},{value:"Inicie el entorno y el servidor de desarrollo",id:"inicie-el-entorno-y-el-servidor-de-desarrollo",level:3},{value:"\xa1Iniciar la edici\xf3n!",id:"iniciar-la-edici\xf3n",level:3}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Esta gu\xeda documentar\xe1 los pasos para configurar y ejecutar Giveth.io localmente con fines de desarrollo. El proceso de configuraci\xf3n se document\xf3 con Ubuntu 20.04 LTS."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Necesitar\xe1 un par de requisitos previos para comenzar.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://redis.io/topics/quickstart"},"Redis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.postgresql.org/download"},"Postgres"),"\n-Bash CLI"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.gatsbyjs.com/docs/reference/gatsby-cli/"},"CLI de Gatsby")),(0,n.kt)("li",{parentName:"ul"},"Configurar NodeJS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.gatsbyjs.com/docs/how-to/local-development/gatsby-on-linux/"},"Para Linux")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.gatsbyjs.com/docs/how-to/local-development/gatsby-on-windows/"},"Para Windows")))),(0,n.kt)("li",{parentName:"ul"},"Tu editor de c\xf3digo favorito (VScode para ajustes preestablecidos de pelusa)")),(0,n.kt)("h3",{id:"instalar-gr\xe1fico-de-impacto-desde-github"},"Instalar gr\xe1fico de impacto desde GitHub"),(0,n.kt)("p",null,"Para desarrollar localmente, tambi\xe9n necesita clonar el servidor backend. Estamos usando ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Giveth/impact-graph"},"https://github.com/Giveth/impact-graph")," para esto."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a trav\xe9s de SSH en la CLI:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:Giveth/impact-graph.git\ngr\xe1fico de impacto de cd\nnpm yo\ncp .env.ejemplo .env\n")))),(0,n.kt)("h3",{id:"crear-una-base-de-datos-y-un-usuario-en-postgres-usando-psql"},"Crear una base de datos y un usuario en Postgres usando psql"),(0,n.kt)("p",null,"Siga este tutorial sobre PSQL para configurar su nombre de usuario y crear la base de datos.\n",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e"},"https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e"),")"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"TL;DR")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u postgres psql\npostgres=# crear base de datos <databaseName>;\npostgres=# crear usuario <nombre de usuario> con contrase\xf1a cifrada '<contrase\xf1aAqu\xed>';\npostgres=# otorgar todos los privilegios en la base de datos <nombre de la base de datos> a <nombre de usuario>;\n")),(0,n.kt)("h3",{id:"clonar-e-instalar-la-interfaz"},"Clonar e instalar la interfaz"),(0,n.kt)("p",null,"  Dir\xedgete a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Giveth/giveth-2"},"https://github.com/Giveth/giveth-2")," y clona el repositorio."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a trav\xe9s de la CLI:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:Dar/dar-2.git\ncd giveth-2\nnpm yo\n")))),(0,n.kt)("h3",{id:"obtener-las-variables-de-entorno"},"Obtener las variables de entorno"),(0,n.kt)("p",null," Para ejecutar la compilaci\xf3n local de Giveth.io, deber\xe1 solicitar las variables de entorno. Dir\xedgete a nuestro ","[Discord de Colaboradores]"," (",(0,n.kt)("a",{parentName:"p",href:"https://discord.giveth.io"},"https://discord.giveth.io"),") saluda y ponte en contacto con uno de los desarrolladores."),(0,n.kt)("h3",{id:"inicie-el-entorno-y-el-servidor-de-desarrollo"},"Inicie el entorno y el servidor de desarrollo"),(0,n.kt)("p",null," Inicie el servidor backend ",(0,n.kt)("inlineCode",{parentName:"p"},"impact-graph")," y redis."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ejecute redis usando el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"redis-server"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Desde el repositorio del gr\xe1fico de impacto, comience con ",(0,n.kt)("inlineCode",{parentName:"p"},"npm start")),(0,n.kt)("p",{parentName:"li"},"Para aprovechar los ajustes preestablecidos de linting, utilice ",(0,n.kt)("strong",{parentName:"p"},"VSCODE"),":"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Seleccione ",(0,n.kt)("em",{parentName:"p"},"Archivo -> Abrir espacio de trabajo"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Navegar al directorio giveth-2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Abra el archivo del espacio de trabajo ",(0,n.kt)("inlineCode",{parentName:"p"},"giveth2-full-stack.code-workspace"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Instale las extensiones recomendadas (complementos Prettier y StandardJS)"),(0,n.kt)("p",{parentName:"li"},"Luego inicie el servidor de desarrollo local."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"gatsby desarrollar\n")))),(0,n.kt)("h3",{id:"iniciar-la-edici\xf3n"},"\xa1Iniciar la edici\xf3n!"),(0,n.kt)("p",null,"Abra el repositorio giveth2 en su editor de c\xf3digo."),(0,n.kt)("p",null,"Giveth.io ahora se ejecuta localmente en ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:8000"),"."),(0,n.kt)("img",{alt:"Giveth ejecut\xe1ndose localmente",src:(0,o.Z)("img/content/givethlocalresized.png")}),(0,n.kt)("p",null,"Tambi\xe9n puede expirar consultando sus datos a trav\xe9s de GraphQL; lo encontrar\xe1 en este enlace aqu\xed: ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:8000/___graphql"),"\nObt\xe9n m\xe1s informaci\xf3n sobre el uso de esta herramienta en el ",(0,n.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql"},"tutorial de Gatsby"),"."),(0,n.kt)("p",null,"  \xa1Guarde sus cambios y el navegador se actualizar\xe1 en tiempo real!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Estados de compilaci\xf3n actuales")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://v2.giveth.io"},"maestro")),(0,n.kt)("p",null,"[",(0,n.kt)("img",{parentName:"p",src:"https://api.netlify.com/api/v1/badges/f914ac7e-ce27-4909-bd3e-14d749731a52/deploy-status",alt:"Estado de Netlify"}),"](",(0,n.kt)("a",{parentName:"p",href:"https://app.netlify.com/sites"},"https://app.netlify.com/sites")," /dar2/despliega)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://staging.giveth.io"},"puesta en escena")),(0,n.kt)("p",null,"[",(0,n.kt)("img",{parentName:"p",src:"https://api.netlify.com/api/v1/badges/2f325b5b-e159-443e-bac7-c5e15f3578c0/deploy-status",alt:"Estado de Netlify"}),"](",(0,n.kt)("a",{parentName:"p",href:"https://app.netlify.com/sites"},"https://app.netlify.com/sites")," /giveth-website-staging/deploys)"),(0,n.kt)("br",null))}u.isMDXComponent=!0}}]);