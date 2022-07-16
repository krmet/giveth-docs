"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[2340],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>p});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),l=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},u=function(e){var a=l(e.components);return t.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,g=m["".concat(s,".").concat(p)]||m[p]||c[p]||i;return n?t.createElement(g,o(o({ref:a},u),{},{components:n})):t.createElement(g,o({ref:a},u))}));function p(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var d={};for(var s in a)hasOwnProperty.call(a,s)&&(d[s]=a[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var l=2;l<i;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7379:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var t=n(7462),r=(n(7294),n(3905)),i=n(4996);const o={id:"entitiesAndRoles",title:"Entidades y roles de Giveth",slug:"dapps/entitiesAndRoles"},d=void 0,s={unversionedId:"entitiesAndRoles",id:"entitiesAndRoles",title:"Entidades y roles de Giveth",description:"",source:"@site/i18n/es/docusaurus-plugin-content-docs-dapps/current/entitiesAndRoles.md",sourceDirName:".",slug:"/dapps/entitiesAndRoles",permalink:"/es/dapps/entitiesAndRoles",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/entitiesAndRoles.md",tags:[],version:"current",lastUpdatedBy:"MrBearCr",lastUpdatedAt:1657816341,formattedLastUpdatedAt:"14 jul 2022",frontMatter:{id:"entitiesAndRoles",title:"Entidades y roles de Giveth",slug:"dapps/entitiesAndRoles"},sidebar:"dapps",previous:{title:"Introducci\xf3n a Giveth TRACE",permalink:"/es/dapps/introTrace"},next:{title:"Empieza tu proyecto en TRACE",permalink:"/es/dapps/makeTraceableProject"}},l={},u=[{value:"Funciones",id:"funciones",level:2},{value:"Usuario del sitio web",id:"usuario-del-sitio-web",level:3},{value:"C\xf3mo convertirse en un usuario del sitio web",id:"c\xf3mo-convertirse-en-un-usuario-del-sitio-web",level:4},{value:"Poder de un usuario del sitio web",id:"poder-de-un-usuario-del-sitio-web",level:4},{value:'<a name="Giver">Giver</a>',id:"giver",level:3},{value:"C\xf3mo convertirse en un Giver",id:"c\xf3mo-convertirse-en-un-giver",level:4},{value:"El poder de un Giver",id:"el-poder-de-un-giver",level:4},{value:'<a name="communityManager">Administrador de la comunidad (anteriormente Delegado)</a>',id:"administrador-de-la-comunidad-anteriormente-delegado",level:3},{value:"C\xf3mo convertirse en un administrador de la comunidad",id:"c\xf3mo-convertirse-en-un-administrador-de-la-comunidad",level:4},{value:"Poder de un Administrador de comunidad",id:"poder-de-un-administrador-de-comunidad",level:4},{value:'<a name="campaignManager">Administrador de campa\xf1as</a>',id:"administrador-de-campa\xf1as",level:3},{value:"C\xf3mo convertirse en un administrador de campa\xf1a",id:"c\xf3mo-convertirse-en-un-administrador-de-campa\xf1a",level:4},{value:"El poder de un administrador de campa\xf1as",id:"el-poder-de-un-administrador-de-campa\xf1as",level:4},{value:'<a name="campaignReviewer">Revisor de campa\xf1as</a>',id:"revisor-de-campa\xf1as",level:3},{value:"C\xf3mo convertirse en revisor de campa\xf1as",id:"c\xf3mo-convertirse-en-revisor-de-campa\xf1as",level:4},{value:"El poder de un revisor de campa\xf1as",id:"el-poder-de-un-revisor-de-campa\xf1as",level:4},{value:'<a name="traceManager">Administrador de trace (anteriormente Administrador de hitos)</a>',id:"administrador-de-trace-anteriormente-administrador-de-hitos",level:3},{value:"C\xf3mo convertirse en administrador de traces",id:"c\xf3mo-convertirse-en-administrador-de-traces",level:4},{value:"El poder de un administrador de trace",id:"el-poder-de-un-administrador-de-trace",level:4},{value:'<a name="traceReviewer">Revisor de trace</a>',id:"revisor-de-trace",level:3},{value:"El poder de un revisor de trace",id:"el-poder-de-un-revisor-de-trace",level:4},{value:'<a name="recipient">Destinatario</a>',id:"destinatario",level:3},{value:"C\xf3mo convertirse en un Destinatario",id:"c\xf3mo-convertirse-en-un-destinatario",level:4},{value:"Poder de un Destinatario",id:"poder-de-un-destinatario",level:4},{value:"Latencia",id:"latencia",level:4},{value:"Localidad de roles",id:"localidad-de-roles",level:4},{value:"Flujo de divisas",id:"flujo-de-divisas",level:3},{value:"Flujo de divisas en Giveth TRACE",id:"flujo-de-divisas-en-giveth-trace",level:6},{value:"Entidades",id:"entidades",level:2},{value:"Relaci\xf3n entre las Entidades de la DApp",id:"relaci\xf3n-entre-las-entidades-de-la-dapp",level:5},{value:'<a name="Communities">Comunidades</a>',id:"comunidades",level:3},{value:"<strong>Diagrama de estado para Comunidad -&gt; Flujo de delegaci\xf3n de campa\xf1a</strong>, que muestra c\xf3mo las donaciones realizadas a un DAC se delegan a una Campa\xf1a.",id:"diagrama-de-estado-para-comunidad---flujo-de-delegaci\xf3n-de-campa\xf1a-que-muestra-c\xf3mo-las-donaciones-realizadas-a-un-dac-se-delegan-a-una-campa\xf1a",level:5},{value:"<strong>Diagrama de estado para Comunidad -&gt; Flujo de delegaci\xf3n de trace</strong>, que muestra c\xf3mo las donaciones realizadas a una Comunidad se delegan directamente a un trace.",id:"diagrama-de-estado-para-comunidad---flujo-de-delegaci\xf3n-de-trace-que-muestra-c\xf3mo-las-donaciones-realizadas-a-una-comunidad-se-delegan-directamente-a-un-trace",level:5},{value:'<a name="Campaigns">Campa\xf1as</a>',id:"campa\xf1as",level:3},{value:"<strong>Diagrama de estado de las donaciones realizadas a Campaign.</strong>",id:"diagrama-de-estado-de-las-donaciones-realizadas-a-campaign",level:5},{value:'<a name="traces">Traces</a>',id:"traces",level:3},{value:'<a name="traceTypes">Entidades de Traces</a>',id:"entidades-de-traces",level:3},{value:"<strong>Hitos</strong>",id:"hitos",level:3},{value:"<strong>Recompensas</strong>",id:"recompensas",level:3},{value:"<strong>Gastos</strong>",id:"gastos",level:3},{value:"<strong>Pagos</strong>",id:"pagos",level:3},{value:"Notas:",id:"notas",level:3}],c={toc:u};function m(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"El contenido y las ideas se modificaron a partir de este excelente art\xedculo ",(0,r.kt)("a",{parentName:"em",href:"https://medium.com/giveth/what-is-the-future-of-giving-d50446b0a0e4"},"\u201cUna descripci\xf3n general de la solicitud de donaci\xf3n de Giveth\u201d")," escrito por Kris Decoodt en 2017. Se han revisado y modificado muchas cosas desde 2017. Aqu\xed desglosamos la DApp tal como est\xe1 en 2022.")),(0,r.kt)("p",null,"Este documento explica c\xf3mo se pueden realizar diferentes interacciones dentro de Giveth DApp. El objetivo es proporcionar un esquema claro de las entidades y roles dentro de Giveth TRACE DApp. Este documento ha sido dise\xf1ado para varias audiencias y casos de uso de la siguiente manera:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Los desarrolladores:")," pueden usar este documento como parte de los requisitos del sistema."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Los Testers:")," pueden usar este documento para comprender c\xf3mo deber\xeda funcionar la DApp para determinar qu\xe9 comportamiento es incorrecto y se debe informar como un error. Este documento no es un caso de prueba formal en SDLC (oftware Development Life Cycle), pero a\xfan puede usarse como gu\xeda."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"El equipo de soporte:")," puede usar este documento como referencia para ayudar a los nuevos usuarios que experimentan dificultades con la DApp."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"El usuario final:")," puede usar este documento para comprender mejor c\xf3mo funciona la DApp. Sin embargo, se recomienda un conocimiento b\xe1sico de Blockchain, Ethereum y Giveth.")),(0,r.kt)("h2",{id:"funciones"},"Funciones"),(0,r.kt)("p",null,"Tenemos ocho roles en Giveth TRACE. En esta secci\xf3n explicamos en profundidad cada rol, su funci\xf3n, c\xf3mo convertirse en uno y el poder que tiene cada rol."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{href:"#giver"},(0,r.kt)("strong",null,"Giver"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{href:"#communityManager"},(0,r.kt)("strong",null,"Administrador de la comunidad"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{href:"#campaignManager"},(0,r.kt)("strong",null,"Administrador de campa\xf1as"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{href:"#campaignReviewer"},(0,r.kt)("strong",null,"Revisor de campa\xf1as"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{href:"#traceManager"},(0,r.kt)("strong",null,"Administrador de trace"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{href:"#traceReviewer"},(0,r.kt)("strong",null,"Revisor de trace"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{href:"#recipient"},(0,r.kt)("strong",null,"Destinatario"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{href:"#websiteUser"},(0,r.kt)("strong",null,"Usuario del sitio web")))),(0,r.kt)("h3",{id:"usuario-del-sitio-web"},"Usuario del sitio web"),(0,r.kt)("p",null,"Esto se refiere a cualquier persona que visite nuestro sitio web. Sin registrarse como usuario en Rinkeby, no pueden interactuar con ninguna entidad de Giveth ni hacer donaciones en Giveth TRACE."),(0,r.kt)("h4",{id:"c\xf3mo-convertirse-en-un-usuario-del-sitio-web"},"C\xf3mo convertirse en un usuario del sitio web"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cualquier persona con la direcci\xf3n del sitio web de Giveth TRACE puede convertirse en Usuario.")),(0,r.kt)("h4",{id:"poder-de-un-usuario-del-sitio-web"},"Poder de un usuario del sitio web"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navegar a trav\xe9s de Comunidades, Campa\xf1as y traces."),(0,r.kt)("li",{parentName:"ul"},"Registrar un perfil."),(0,r.kt)("li",{parentName:"ul"},"Editar su perfil."),(0,r.kt)("li",{parentName:"ul"},"Ver el perfil de otra persona."),(0,r.kt)("li",{parentName:"ul"},"Suscr\xedbete a una Comunidad, Campa\xf1a o trace.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*Nota:")," La mayor\xeda de las acciones del sitio requieren autenticaci\xf3n a trav\xe9s de una billetera web Ethereum; Actualmente, Giveth TRACE solo es compatible con MetaMask.*"),(0,r.kt)("h3",{id:"giver"},(0,r.kt)("a",{name:"Giver"},"Giver")),(0,r.kt)("p",null,"El t\xe9rmino giver describe a cualquiera que use nuestra plataforma para hacer donaciones a una Comunidad, Campa\xf1a o trace. Los givers pueden interactuar con las 3 entidades, pero no son expl\xedcitamente parte de ninguna a menos que elijan unirse a una comunidad o asumir otro rol tambi\xe9n."),(0,r.kt)("h4",{id:"c\xf3mo-convertirse-en-un-giver"},"C\xf3mo convertirse en un Giver"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cualquier persona con una billetera Ethereum puede donar a una Comunidad, Campa\xf1a o trace en la DApp y convertirse en giver.")),(0,r.kt)("h4",{id:"el-poder-de-un-giver"},"El poder de un Giver"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aceptar o rechazar una delegaci\xf3n retrasada de una Comunidad o Campa\xf1a.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*Nota:"),' Los givers pueden vetar o "rechazar" una Delegaci\xf3n propuesta dentro de los 3 d\xedas posteriores a la propuesta de delegaci\xf3n. Esto se denomina "retraso" de la delegaci\xf3n. Despu\xe9s de 3 d\xedas, la DApp aceptar\xe1 autom\xe1ticamente la delegaci\xf3n retrasada.*'),(0,r.kt)("h3",{id:"administrador-de-la-comunidad-anteriormente-delegado"},(0,r.kt)("a",{name:"communityManager"},"Administrador de la comunidad (anteriormente Delegado)")),(0,r.kt)("p",null,"Un Administrador de la Comunidad es el usuario registrado que posee una Comunidad. Pueden delegar los fondos donados a sus Comunidades. Una delegaci\xf3n es un proceso, donde la donaci\xf3n comprometida a una Comunidad se transfiere a una Campa\xf1a o Trace. Una vez delegada, el giver tiene 3 d\xedas para rechazar (o aprobar) la delegaci\xf3n. Despu\xe9s de ese tiempo, el dinero se aprueba autom\xe1ticamente y se bloquea en la Campa\xf1a o Trace a la que se deleg\xf3 el dinero."),(0,r.kt)("h4",{id:"c\xf3mo-convertirse-en-un-administrador-de-la-comunidad"},"C\xf3mo convertirse en un administrador de la comunidad"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Un usuario puede crear una comunidad y convertirse en el administrador de la comunidad despu\xe9s de que un administrador de DApp lo incluya en la lista blanca.")),(0,r.kt)("h4",{id:"poder-de-un-administrador-de-comunidad"},"Poder de un Administrador de comunidad"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Editar el nombre, la descripci\xf3n, la imagen y el enlace de su Comunidad."),(0,r.kt)("li",{parentName:"ul"},"Entregar fondos comunitarios (a trav\xe9s de delegaci\xf3n diferida) a Campa\xf1as y Traces.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*Nota:"),' Para iniciar una delegaci\xf3n retrasada, el administrador de la comunidad debe ir a la p\xe1gina Rastreos o Campa\xf1a y hacer clic en el bot\xf3n "Delegar fondos".*'),(0,r.kt)("h3",{id:"administrador-de-campa\xf1as"},(0,r.kt)("a",{name:"campaignManager"},"Administrador de campa\xf1as")),(0,r.kt)("p",null,"Los administradores de campa\xf1a son usuarios de Giveth.io que han optado por hacer que su proyecto sea rastreable y han pasado el proceso de verificaci\xf3n del proyecto. El rol del administrador de campa\xf1a es crear Traces a trav\xe9s de los cuales puedan financiar el trabajo de las personas y el costo de los recursos detr\xe1s del proyecto."),(0,r.kt)("h4",{id:"c\xf3mo-convertirse-en-un-administrador-de-campa\xf1a"},"C\xf3mo convertirse en un administrador de campa\xf1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verificar su proyecto Giveth.io y solicitar ser rastreable, actualizar a una Campa\xf1a en TRACE y convertirse en el Gerente de Campa\xf1a de dicha Campa\xf1a.")),(0,r.kt)("h4",{id:"el-poder-de-un-administrador-de-campa\xf1as"},"El poder de un administrador de campa\xf1as"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Editar su Campa\xf1a."),(0,r.kt)("li",{parentName:"ul"},"Enviar fondos de campa\xf1a (a trav\xe9s de delegaci\xf3n) a Traces dentro de su campa\xf1a."),(0,r.kt)("li",{parentName:"ul"},"Rechazar o aceptar Traces propuestos para su Campa\xf1a."),(0,r.kt)("li",{parentName:"ul"},"Crear o editar Traces en su propia Campa\xf1a.\n",(0,r.kt)("strong",{parentName:"li"},"*Nota:")," Un Trace debe pertenecer a al menos una campa\xf1a y debe ser aprobado por el administrador de la campa\xf1a.*")),(0,r.kt)("h3",{id:"revisor-de-campa\xf1as"},(0,r.kt)("a",{name:"campaignReviewer"},"Revisor de campa\xf1as")),(0,r.kt)("p",null,"Debido a que las donaciones a una campa\xf1a est\xe1n bloqueadas, la funci\xf3n de revisor de campa\xf1a es fundamental para revisar y realizar un seguimiento del progreso de la campa\xf1a. Los revisores de campa\xf1a tienen la responsabilidad de verificar la legitimidad de una campa\xf1a y sus traces. Tambi\xe9n tienen un poder considerable dentro de una Campa\xf1a."),(0,r.kt)("h4",{id:"c\xf3mo-convertirse-en-revisor-de-campa\xf1as"},"C\xf3mo convertirse en revisor de campa\xf1as"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Un administrador de campa\xf1a puede asignar a un usuario para que se convierta en revisor de campa\xf1a.")),(0,r.kt)("h4",{id:"el-poder-de-un-revisor-de-campa\xf1as"},"El poder de un revisor de campa\xf1as"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rechazar o aprobar traces Completados."),(0,r.kt)("li",{parentName:"ul"},"Cancelar traces dentro de su Campa\xf1a."),(0,r.kt)("li",{parentName:"ul"},"Cancelar una Campa\xf1a.")),(0,r.kt)("h3",{id:"administrador-de-trace-anteriormente-administrador-de-hitos"},(0,r.kt)("a",{name:"traceManager"},"Administrador de trace (anteriormente Administrador de hitos)")),(0,r.kt)("p",null,"Los traces son la base del sistema Giveth. Cualquier usuario registrado puede proponer un Trace a una Campa\xf1a. Sin embargo, un Gerente de Campa\xf1a o Revisor de Campa\xf1a debe aprobar el trace propuesto a su Campa\xf1a para que sea v\xe1lido. Los traces pueden representar varios tipos de solicitudes de financiaci\xf3n. M\xe1s informaci\xf3n sobre ",(0,r.kt)("a",{href:"#traceTypes"},"tipos de Traces")," se detalla m\xe1s adelante en este documento."),(0,r.kt)("h4",{id:"c\xf3mo-convertirse-en-administrador-de-traces"},"C\xf3mo convertirse en administrador de traces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Un usuario puede proponer un Trace a la campa\xf1a y convertirse en el Administrador de Trace.")),(0,r.kt)("h4",{id:"el-poder-de-un-administrador-de-trace"},"El poder de un administrador de trace"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Editar su trace."),(0,r.kt)("li",{parentName:"ul"},"En el caso de crear una recompensa o un Hito, un Administrador de trace puede establecer un Revisor de trace."),(0,r.kt)("li",{parentName:"ul"},"Marcar un Trace como completo.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*Nota"),": Un trace ya no se puede editar una vez que ha recibido una delegaci\xf3n o donaci\xf3n.*"),(0,r.kt)("h3",{id:"revisor-de-trace"},(0,r.kt)("a",{name:"traceReviewer"},"Revisor de trace")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Un revisor de trace puede ser asignado por un administrador de trace.")),(0,r.kt)("h4",{id:"el-poder-de-un-revisor-de-trace"},"El poder de un revisor de trace"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rechazar o aprobar un Trace completado."),(0,r.kt)("li",{parentName:"ul"},"Cancelar un trace.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*Nota:")," En el caso de que se cancele un Trace, la moneda vuelve a la fuente, es decir, al giver para una donaci\xf3n o a la Comunidad/Campa\xf1a para una delegaci\xf3n.*"),(0,r.kt)("h3",{id:"destinatario"},(0,r.kt)("a",{name:"recipient"},"Destinatario")),(0,r.kt)("p",null,"Un Destinatario es un usuario registrado que recibir\xe1 el pago de su trace completado con \xe9xito. En la mayor\xeda de los casos, el Destinatario tambi\xe9n es el Administrador de trace, ya que es el que trabaja en el trace. Sin embargo, en algunos casos, el destinatario est\xe1 separado, como en el caso de pagos a un proveedor o un hito para una campa\xf1a."),(0,r.kt)("h4",{id:"c\xf3mo-convertirse-en-un-destinatario"},"C\xf3mo convertirse en un Destinatario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Un Destinatario puede ser designado por un Administrador de trace; puede ser el administrador de trace u otro usuario.")),(0,r.kt)("h4",{id:"poder-de-un-destinatario"},"Poder de un Destinatario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Marcar un Trace como completo."),(0,r.kt)("li",{parentName:"ul"},"Solicitar el pago de los fondos de Trace.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*Nota:")," En el caso de que Trace tenga un Revisor, la recaudaci\xf3n de fondos necesita la aprobaci\xf3n del Revisor.*"),(0,r.kt)("h4",{id:"latencia"},"Latencia"),(0,r.kt)("p",null,"Algunas acciones deben registrarse en la red blockchain de Ethereum. Agregar transacciones a la cadena de bloques no ocurre de inmediato, por lo que observamos una latencia en algunas acciones. Esta latencia depende de las condiciones de la red, por ejemplo, el tr\xe1fico en la red."),(0,r.kt)("h4",{id:"localidad-de-roles"},"Localidad de roles"),(0,r.kt)("p",null,"Todos los roles tienen un alcance limitado y una vez que una entidad deja de existir, tambi\xe9n lo hacen los roles conectados. Cada Comunidad contiene exactamente un Administrador. Cada campa\xf1a tiene un administrador de campa\xf1a y un revisor de campa\xf1a. Cada trace tiene un administrador de trace, un destinatario y, potencialmente, un revisor. El giver no est\xe1 asociado expl\xedcitamente con ninguna entidad, pero puede interactuar con todas ellas."),(0,r.kt)("img",{alt:"Relations between Communities, Campaigns and Traces",src:(0,i.Z)("img/content/trace/role-locality.svg")}),(0,r.kt)("h3",{id:"flujo-de-divisas"},"Flujo de divisas"),(0,r.kt)("p",null,"Giveth TRACE a nivel t\xe9cnico es un sistema de gesti\xf3n de divisas. Los t\xe9rminos que se refieren al movimiento de fondos dentro del sistema Giveth se definen a continuaci\xf3n:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Donaci\xf3n:")," Cuando un giver env\xeda fondos de su billetera a un trace, Campa\xf1a o Comunidad."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Recaudaci\xf3n:"),' Cuando el Destinatario env\xeda o "recauda" fondos de un Trace a su billetera.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Desembolso:")," Cuando un administrador de Trace env\xeda fondos desde una cuenta de Trace a la billetera del Destinatario."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Delegaci\xf3n:")," Cuando un administrador de campa\xf1a o un administrador de la comunidad env\xeda dinero desde la cuenta de la campa\xf1a o comunidad a la cuenta de trace en nombre del giver original. Un giver puede rechazar la Delegaci\xf3n dentro de las 72 horas, despu\xe9s de lo cual la transferencia de Divisas se vuelve irreversible."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reembolso:")," Un giver que haya contribuido a una Comunidad puede retirar sus fondos siempre que no est\xe9 comprometido con una Campa\xf1a o trace. Un giver que contribuya a una campa\xf1a puede retirar sus fondos siempre que no est\xe9 comprometido con un trace.")),(0,r.kt)("img",{alt:"Currency Flow on Giveth TRACE",src:(0,i.Z)("img/content/trace/currencyFlow.svg")}),(0,r.kt)("h6",{id:"flujo-de-divisas-en-giveth-trace"},"Flujo de divisas en Giveth TRACE"),(0,r.kt)("h2",{id:"entidades"},"Entidades"),(0,r.kt)("p",null,"Giveth TRACE, a nivel t\xe9cnico, es un sistema de gesti\xf3n de divisas. Las entidades de la DApp son cuentas en las que las personas pueden depositar, transferir o retirar divisas. Tenemos tres entidades en Giveth TRACE, ",(0,r.kt)("a",{href:"#communities"},(0,r.kt)("strong",{parentName:"p"},"Comunidades")),", ",(0,r.kt)("a",{href:"#campaigns"},(0,r.kt)("strong",{parentName:"p"},"Campa\xf1as"))," y ",(0,r.kt)("a",{href:"#traces"},(0,r.kt)("strong",{parentName:"p"},"Traces")),". La relaci\xf3n entre ellos se define en el siguiente cuadro. Cada entidad corresponde a uno o m\xe1s contratos inteligentes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*Nota:")," En el primer trimestre de 2021, el equipo de Giveth cambi\xf3 el nombre de las entidades ",(0,r.kt)("strong",{parentName:"p"},"DAC")," (Comunidades altruistas descentralizadas) a simplemente ",(0,r.kt)("strong",{parentName:"p"},"Comunidades"),", y ",(0,r.kt)("strong",{parentName:"p"},"Hitos")," a ",(0,r.kt)("strong",{parentName:"p"},"Rastros"),".*"),(0,r.kt)("img",{alt:"Relationship between The DApp's Entities",src:(0,i.Z)("img/content/trace/relations.svg")}),(0,r.kt)("h5",{id:"relaci\xf3n-entre-las-entidades-de-la-dapp"},"Relaci\xf3n entre las Entidades de la DApp"),(0,r.kt)("h3",{id:"comunidades"},(0,r.kt)("a",{name:"Communities"},"Comunidades")),(0,r.kt)("p",null,"Las comunidades, ",(0,r.kt)("strong",{parentName:"p"},"anteriormente conocidas como DAC"),", son la entidad m\xe1s general en el Sistema Giveth. El prop\xf3sito de una Comunidad es unir givers en torno a una causa y brindarles la posibilidad de donar dinero a una causa sin tener que hacer la investigaci\xf3n necesaria para encontrar la Campa\xf1a exacta a la que contribuir. El giver puede recuperar cualquier dinero donado a una comunidad, sin embargo, desaconsejamos encarecidamente a los giver que lo hagan. Los fondos permanecen en la Comunidad hasta que son delegados a una Campa\xf1a o un Trace, o retirados por el giver. ",(0,r.kt)("strong",{parentName:"p"},"Los Adminitradores de comunidad")," pueden respaldar cualquier Campa\xf1a o trace enviando dinero a la cuenta del destinatario."),(0,r.kt)("img",{alt:"Community to Campaign delegation state diagram",src:(0,i.Z)("img/content/trace/dac-campaign-donation-statediagram.svg")}),(0,r.kt)("h5",{id:"diagrama-de-estado-para-comunidad---flujo-de-delegaci\xf3n-de-campa\xf1a-que-muestra-c\xf3mo-las-donaciones-realizadas-a-un-dac-se-delegan-a-una-campa\xf1a"},(0,r.kt)("strong",{parentName:"h5"},"Diagrama de estado para Comunidad -> Flujo de delegaci\xf3n de campa\xf1a"),", que muestra c\xf3mo las donaciones realizadas a un DAC se delegan a una Campa\xf1a."),(0,r.kt)("img",{alt:"Community to Trace delegation state diagram",src:(0,i.Z)("img/content/trace/dac-milestone-donation-statediagram.svg")}),(0,r.kt)("h5",{id:"diagrama-de-estado-para-comunidad---flujo-de-delegaci\xf3n-de-trace-que-muestra-c\xf3mo-las-donaciones-realizadas-a-una-comunidad-se-delegan-directamente-a-un-trace"},(0,r.kt)("strong",{parentName:"h5"},"Diagrama de estado para Comunidad -> Flujo de delegaci\xf3n de trace"),", que muestra c\xf3mo las donaciones realizadas a una Comunidad se delegan directamente a un trace."),(0,r.kt)("h3",{id:"campa\xf1as"},(0,r.kt)("a",{name:"Campaigns"},"Campa\xf1as")),(0,r.kt)("p",null,"Las campa\xf1as est\xe1n en el centro del sistema de donaciones de Giveth. Son herramientas efectivas para dirigir el dinero hacia las entidades m\xe1s peque\xf1as, Traces. Una Campa\xf1a puede ser apoyada por m\xe1s de una Comunidad o por ninguna Comunidad. Los copropietarios de la campa\xf1a solo pueden aceptar o rechazar los traces propuestos. ",(0,r.kt)("strong",{parentName:"p"},"Los revisores de campa\xf1a")," pueden cancelar la campa\xf1a si es mala o ya no est\xe1 activa."),(0,r.kt)("p",null,"Las donaciones realizadas a una campa\xf1a est\xe1n bloqueadas y, a menos que se cancele la campa\xf1a, el giver ya no tiene control sobre la donaci\xf3n. La raz\xf3n por la que bloqueamos las donaciones es para darles a las personas detr\xe1s de la Campa\xf1a cierto nivel de certeza de que pueden contar con recibir las donaciones prometidas y comprometerlas con uno de sus Traces."),(0,r.kt)("img",{alt:"Campaign Donation state diagram",src:(0,i.Z)("img/content/trace/campaign-donation-statediagram.svg")}),(0,r.kt)("h5",{id:"diagrama-de-estado-de-las-donaciones-realizadas-a-campaign"},(0,r.kt)("strong",{parentName:"h5"},"Diagrama de estado de las donaciones realizadas a Campaign.")),(0,r.kt)("h3",{id:"traces"},(0,r.kt)("a",{name:"traces"},"Traces")),(0,r.kt)("p",null,"Los principales componentes b\xe1sicos de DApp son Traces, ",(0,r.kt)("strong",{parentName:"p"},"anteriormente conocidos como Milestones"),". Un Trace es la \xfanica forma en que los fondos pueden salir del sistema Giveth. Los traces deben crearse dentro de una campa\xf1a. En comparaci\xf3n con una comunidad o una campa\xf1a, los traces son m\xe1s complejos porque pueden interactuar m\xe1s roles con ellos."),(0,r.kt)("h3",{id:"entidades-de-traces"},(0,r.kt)("a",{name:"traceTypes"},"Entidades de Traces")),(0,r.kt)("p",null,"Para adaptar Traces para satisfacer las necesidades espec\xedficas de las comunidades y las campa\xf1as, se pueden aplicar ciertas reglas."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Traces limitadas:")," Se establece la moneda m\xe1xima que se le puede dar a la Traza. Este m\xe1ximo se llama l\xedmite m\xe1ximo."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Traces con revisor:")," Los fondos no se pueden cobrar ni desembolsar de este Trace sin la confirmaci\xf3n de un revisor de trace asignado."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Especifique la moneda recibida:")," El creador del trace puede especificar en cu\xe1l de las criptomonedas incluidas en la lista blanca le gustar\xeda recibir sus fondos.")),(0,r.kt)("p",null,"Seg\xfan estas reglas, podemos tener ",(0,r.kt)("em",{parentName:"p"},"cuatro")," tipos de Traces con sus propias propiedades distintas: ",(0,r.kt)("strong",{parentName:"p"},"Hitos, Recompensas, Gastos")," y ",(0,r.kt)("strong",{parentName:"p"},"Pagos"),"."),(0,r.kt)("h3",{id:"hitos"},(0,r.kt)("strong",{parentName:"h3"},"Hitos")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Objetivos o eventos importantes para una Campa\xf1a. Todos los fondos recaudados en Hitos se destinan a la Campa\xf1a de la que forma parte.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"El ciclo de vida de los hitos en la DApp es el siguiente:")),(0,r.kt)("img",{alt:"Lifecycle of Milestones",src:(0,i.Z)("img/content/trace/milestone.png")}),(0,r.kt)("h3",{id:"recompensas"},(0,r.kt)("strong",{parentName:"h3"},"Recompensas")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Si una Campa\xf1a o Comunidad necesita subcontratar trabajo para realizar, pueden usar una Recompensa para compensar a los contribuyentes por completar tareas espec\xedficas.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"El ciclo de vida de las recompensas es el siguiente:")),(0,r.kt)("img",{alt:"Lifecycle of Bounties",src:(0,i.Z)("img/content/trace/Bounty.png")}),(0,r.kt)("h3",{id:"gastos"},(0,r.kt)("strong",{parentName:"h3"},"Gastos")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Si hay gastos recurrentes o singulares que fueron pagados por una campa\xf1a o un miembro de la comunidad, este Trace puede rastrearlos y reembolsarlos.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"El ciclo de vida de los gastos es el siguiente:")),(0,r.kt)("img",{alt:"Lifecycle of Expenses",src:(0,i.Z)("img/content/trace/Expense.png")}),(0,r.kt)("h3",{id:"pagos"},(0,r.kt)("strong",{parentName:"h3"},"Pagos")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Los pagos son una compensaci\xf3n a los miembros de la Campa\xf1a por el trabajo que han realizado. Los pagos pueden ser ilimitados o limitados por la financiaci\xf3n que pueden recibir.")),(0,r.kt)("p",null," ",(0,r.kt)("em",{parentName:"p"},"El ciclo de vida de los pagos SIN l\xedmite es el siguiente:")),(0,r.kt)("img",{alt:"Lifecycle of Payments without Cap",src:(0,i.Z)("img/content/trace/paymentNoCap.png")}),(0,r.kt)("p",null,"El desglose de sus funciones se puede resumir en el siguiente cuadro:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tipo de trace"),(0,r.kt)("th",{parentName:"tr",align:null},"La financiaci\xf3n est\xe1 limitada"),(0,r.kt)("th",{parentName:"tr",align:null},"Especifique la moneda recibida"),(0,r.kt)("th",{parentName:"tr",align:null},"puede asignar revisor"),(0,r.kt)("th",{parentName:"tr",align:null},"Moneda Destino"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hito"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"S\xed"),(0,r.kt)("td",{parentName:"tr",align:null},"Campa\xf1a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Recompensa"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"S\xed"),(0,r.kt)("td",{parentName:"tr",align:null},"Cualquier direcci\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Gasto"),(0,r.kt)("td",{parentName:"tr",align:null},"S\xed"),(0,r.kt)("td",{parentName:"tr",align:null},"S\xed"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Cualquier direcci\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pago SIN tope"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"S\xed"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Cualquier direcci\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pago con Cap"),(0,r.kt)("td",{parentName:"tr",align:null},"S\xed"),(0,r.kt)("td",{parentName:"tr",align:null},"S\xed"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Cualquier direcci\xf3n")))),(0,r.kt)("h3",{id:"notas"},"Notas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"En codificaci\xf3n, las Entidades se denominan ",(0,r.kt)("inlineCode",{parentName:"em"},"proyectos"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Cuando el dinero pasa de una Comunidad a un trace o Campa\xf1a, Giveth conecta a la Comunidad con esa Campa\xf1a o trace. Esto significa que ver\xe1 esa campa\xf1a o trace representado en la p\xe1gina de la comunidad.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Si se cancela un trace/Campa\xf1a/Comunidad, los fondos se devuelven al contribuyente de origen autom\xe1ticamente.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"La moneda que va a una comunidad es un compromiso flexible: en cualquier momento hasta el momento en que los fondos se bloquean en una campa\xf1a/hito, el giver puede decidir retirarlos (reembolsarlos).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"La moneda que se destin\xf3 a una campa\xf1a/trace est\xe1 totalmente comprometida, porque los administradores del trace y el administrador de campa\xf1as toman medidas en funci\xf3n de estos fondos."))))}m.isMDXComponent=!0}}]);