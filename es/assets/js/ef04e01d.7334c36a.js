"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[3047],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return t?n.createElement(h,i(i({ref:a},d),{},{components:t})):n.createElement(h,i({ref:a},d))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2207:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const r={id:"introDiscord",title:"Introducci\xf3n y tutorial de discord"},i=void 0,s={unversionedId:"introDiscord",id:"introDiscord",title:"Introducci\xf3n y tutorial de discord",description:"Antecedentes - Migraci\xf3n a Discord",source:"@site/i18n/es/docusaurus-plugin-content-docs-whatisgiveth/current/introDiscord.md",sourceDirName:".",slug:"/introDiscord",permalink:"/es/whatisgiveth/introDiscord",draft:!1,editUrl:"https://github.com/giveth/giveth-docs/edit/master/whatisgiveth/introDiscord.md",tags:[],version:"current",lastUpdatedBy:"mitch",lastUpdatedAt:1655345219,formattedLastUpdatedAt:"16 jun 2022",frontMatter:{id:"introDiscord",title:"Introducci\xf3n y tutorial de discord"},sidebar:"whatisgiveth",previous:{title:"Proceso de Asesoramiento",permalink:"/es/whatisgiveth/adviceProcess"},next:{title:"Directrices de Dise\xf1o y Marca",permalink:"/es/whatisgiveth/brandBook"}},l={},c=[{value:"Antecedentes - Migraci\xf3n a Discord",id:"antecedentes---migraci\xf3n-a-discord",level:2},{value:"Enlaces",id:"enlaces",level:2},{value:"C\xf3mo unirse al servidor Giveth Discord",id:"c\xf3mo-unirse-al-servidor-giveth-discord",level:2},{value:"Descripciones de canales",id:"descripciones-de-canales",level:2},{value:"Bienvenido (comienza aqu\xed)",id:"bienvenido-comienza-aqu\xed",level:3},{value:"Comunidad",id:"comunidad",level:2},{value:"Gobernanza",id:"gobernanza",level:2},{value:"Plataforma",id:"plataforma",level:2},{value:"Puentes",id:"puentes",level:2},{value:"Canales de voz",id:"canales-de-voz",level:2},{value:"Etiquetando",id:"etiquetando",level:2},{value:"Comandos de bots",id:"comandos-de-bots",level:2},{value:"Chip Bot",id:"chip-bot",level:3},{value:"Soporte",id:"soporte",level:2}],d={toc:c};function u(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"antecedentes---migraci\xf3n-a-discord"},"Antecedentes - Migraci\xf3n a Discord"),(0,o.kt)("p",null,"Hemos trasladado la mayor parte del chat de nuestra comunidad y la colaboraci\xf3n con nuestros colaboradores de ",(0,o.kt)("a",{parentName:"p",href:"http://riot.im/"},"Riot.im")," (ahora Element Chat) a un nuevo servidor en Discord."),(0,o.kt)("p",null,"Estamos utilizando un puente de transmisi\xf3n de mensajes entre Discord, Telegram y Element Chat que refleja los mensajes de algunos canales elegidos entre las tres aplicaciones. Si Discord no es para ti, \xa1no temas! Tambi\xe9n puede interactuar con nosotros usando Telegram o Element Chat."),(0,o.kt)("p",null,"El software de conexi\xf3n utilizado es matterbridge. - \xa1Grita a @geleeroyale para que la magia suceda!"),(0,o.kt)("h2",{id:"enlaces"},"Enlaces"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"incorporaci\xf3n")," sitio web - ",(0,o.kt)("a",{parentName:"p",href:"https://giveth.io/join"},"https://giveth.io/join")),(0,o.kt)("p",null,"Enlace correcto para unirse a la comunidad de Discord - ",(0,o.kt)("a",{parentName:"p",href:"https://discord.giveth.io/"},"https://discord.giveth.io/")),(0,o.kt)("p",null,"Enlace correcto para unirse a la comunidad de Telegram - ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/Givethio"},"https://t.me/Givethio")),(0,o.kt)("p",null,"Enlace directo para ver las antiguas salas de Riot: ",(0,o.kt)("a",{parentName:"p",href:"http://riot.giveth.io/"},"http://riot.giveth.io")),(0,o.kt)("h2",{id:"c\xf3mo-unirse-al-servidor-giveth-discord"},"C\xf3mo unirse al servidor Giveth Discord"),(0,o.kt)("p",null,"Inicie sesi\xf3n en Discord o cree un nuevo usuario - ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/"},"https://discord.com/")," o descargue la aplicaci\xf3n (",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/"},"iOS")," us/app/discord-talk-chat-hang-out/id985746746), ",(0,o.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.discord&hl=en_CA&gl=US"},"Android"),") ",(0,o.kt)("a",{parentName:"p",href:"https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord"},"C\xf3mo use Discord"),": Video (","[Principiante a avanzado]","(",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube"},"https://www.youtube")," .com/watch?v=tNUq5Aqv60s))"),(0,o.kt)("p",null,"\xdanase al servidor de la comunidad Giveth ",(0,o.kt)("a",{parentName:"p",href:"https://discord.giveth.io/"},"https://discord.giveth.io/")," Dentro de cada servidor, puede tener un apodo \xfanico, as\xed que si\xe9ntase libre de cambiar el suyo por el que desee. ser conocido como."),(0,o.kt)("p",null,"Una vez que haya accedido al servidor, un bot le enviar\xe1 un mensaje con un Captcha para resolver: no es un robot, \xbfverdad? Deber\xeda ser algo como esto:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/dutkvbe.png",alt:null})),(0,o.kt)("h2",{id:"descripciones-de-canales"},"Descripciones de canales"),(0,o.kt)("h3",{id:"bienvenido-comienza-aqu\xed"},"Bienvenido (comienza aqu\xed)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"#\ud83e\udd1dwelcome es nuestro canal de bienvenida. Aqu\xed tambi\xe9n es donde puedes definir tu rol: Donante y/o Hacedor."),(0,o.kt)("li",{parentName:"ul"},"#\ud83d\udea9mission es para comentarios, cr\xedticas, elogios y conversaciones sobre la visi\xf3n y la misi\xf3n de Giveth. Tambi\xe9n nos encantar\xeda saber acerca de su organizaci\xf3n aqu\xed si ve una buena combinaci\xf3n, h\xe1ganos saber por qu\xe9/c\xf3mo le gustar\xeda unir fuerzas."),(0,o.kt)("li",{parentName:"ul"},"#\ud83d\udd28contribute permite que las partes interesadas se alineen en oportunidades de colaboraci\xf3n."),(0,o.kt)("li",{parentName:"ul"},"#\u270bassign-roles le permite asignarse roles para ser etiquetado en roles relacionados con WG."),(0,o.kt)("li",{parentName:"ul"},"#\ud83d\udce2anuncios es donde encontrar\xe1s anuncios de la comunidad de Giveth."),(0,o.kt)("li",{parentName:"ul"},"#\ud83d\udcdaactualizaciones de socios es donde encontrar\xe1 anuncios de nuestros socios Galaxy.")),(0,o.kt)("h2",{id:"comunidad"},"Comunidad"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"#general es donde normalmente nos encontrar\xe1s hablando entre nosotros. \xa1\xdanetenos!"),(0,o.kt)("li",{parentName:"ul"},"#\ud83d\udcc5scheduling es el lugar para saber cu\xe1ndo y d\xf3nde se realizar\xe1n las reuniones y eventos."),(0,o.kt)("li",{parentName:"ul"},"#\ud83d\udcddmeetingnotes es para obtener informaci\xf3n sobre agendas y notas de nuestras reuniones."),(0,o.kt)("li",{parentName:"ul"},"#\ud83d\udca1ideas es un lugar para compartir inspiraci\xf3n y sugerencias creativas."),(0,o.kt)("li",{parentName:"ul"},"El canal #\ud83d\udcacsupport te ayuda a superar cualquier obst\xe1culo que puedas enfrentar en la comunidad o en las plataformas de donaci\xf3n."),(0,o.kt)("li",{parentName:"ul"},"#\ud83d\udce3communications es el centro del equipo de comunicaciones (@Comms Stars). Aqu\xed se habla de creaci\xf3n y edici\xf3n de contenidos, realizaci\xf3n de acciones de difusi\xf3n y todo lo relacionado con el c\xedrculo de la comunicaci\xf3n."),(0,o.kt)("li",{parentName:"ul"},"#\ud83d\udc26-tweeeeeter es donde est\xe1n todas las cosas relacionadas con Giveth en Twitter. Se puede usar para sugerir/elaborar tweets, comentarios de Twitter y compartir o promocionar tweets para obtener m\xe1s participaci\xf3n."),(0,o.kt)("li",{parentName:"ul"},"\xa1Los #\ud83d\udc38memes son poderosos! Organizamos fiestas de memes semanales donde escuchamos m\xfasica y lanzamos memes picantes. La hora se puede encontrar ",(0,o.kt)("a",{parentName:"li",href:"https://calendar.google.com/calendar/u/0/embed?src=givethdotio@gmail.com&ctz=America/Costa_Rica"},"en el calendario.")),(0,o.kt)("li",{parentName:"ul"},"#\u2728shtsnggls es pura diversi\xf3n."),(0,o.kt)("li",{parentName:"ul"},"\xa1#\u2764 praise es donde puedes llover elogios sobre tus compa\xf1eros de equipo! H\xe1gales saber que aprecia el valor que agregan a los proyectos y la comunidad de Giveth escribiendo !elogio @nombredeusuario por lo incre\xedble que hicieron."),(0,o.kt)("li",{parentName:"ul"},"#\ud83e\udd1dproject-onboarding es donde los posibles propietarios de proyectos pueden buscar sugerencias o consejos sobre el flujo de creaci\xf3n de proyectos y c\xf3mo crear proyectos cautivadores e impresionantes en el dapp."),(0,o.kt)("li",{parentName:"ul"},"#\ud83d\udcb8fundraising de fondos es discutir formas de expandir los l\xedmites de recaudaci\xf3n de fondos en apoyo de la misi\xf3n Giveth.")),(0,o.kt)("h2",{id:"gobernanza"},"Gobernanza"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"#\ud83d\udc4dgobernance es donde experimentamos con la gobernanza descentralizada y documentamos cualquier cosa que pueda ser \xfatil para futuras comunidades como la nuestra."),(0,o.kt)("li",{parentName:"ul"},"#\ud83c\udf10dao proporciona enlaces a las propuestas de DAO e informa a la comunidad cu\xe1ndo es el momento de votar. En este canal es posible discutir todo lo relacionado con las propuestas."),(0,o.kt)("li",{parentName:"ul"},"#giveth-trace-payments se utiliza para comunicar informaci\xf3n sobre las transacciones de pago que se realizan en el puente Giveth TRACE. puede encontrar M\xe1s informaci\xf3n sobre c\xf3mo funciona el puente ",(0,o.kt)("a",{parentName:"li",href:"/es/dapps/bridgeSecurity"},"aqu\xed"),".")),(0,o.kt)("h2",{id:"plataforma"},"Plataforma"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\udc4call-dev es el canal para debates generales de desarrollo que incluyen al equipo de desarrollo de Giveth en su conjunto."),(0,o.kt)("li",{parentName:"ul"},"#\u261dgivethtrace-dev es el centro de comunicaciones del equipo de desarrollo de Giveth TRACE DApp. Se utiliza para discutir informaci\xf3n relacionada con el proceso de creaci\xf3n de nuestro dapp insignia."),(0,o.kt)("li",{parentName:"ul"},"#\u270cgivethio-dev es el centro de comunicaciones del equipo de desarrollo de ","[Giveth.io]"," (",(0,o.kt)("a",{parentName:"li",href:"http://giveth.io/"},"http://giveth.io/"),"), que se utiliza para discutir informaci\xf3n relacionada con el proceso de creaci\xf3n de nuestra \xfaltima dapp."),(0,o.kt)("li",{parentName:"ul"},"#\ud83d\udcb9giv-economy es el lugar para compartir informaci\xf3n sobre la pr\xf3xima implementaci\xf3n de GIVbacks y la token\xf3mica subyacente."),(0,o.kt)("li",{parentName:"ul"},"#\ud83c\udf08design es para compartir ideas de dise\xf1o y actividad creativa sobre la apariencia y el lenguaje de cualquier actualizaci\xf3n de UI o UX en preparaci\xf3n para los productos de Giveth."),(0,o.kt)("li",{parentName:"ul"},"#\ud83d\udc07test-reports es para informes de prueba y comunicaci\xf3n de prueba para ambas DApps de Giveth."),(0,o.kt)("li",{parentName:"ul"},"El canal #\ud83d\udc31github es para solicitudes de notificaci\xf3n de referencias cruzadas y nuevas ediciones en Github para aumentar la transparencia y la participaci\xf3n en Github.")),(0,o.kt)("h2",{id:"puentes"},"Puentes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"#\ud83d\udc1d1hive sirve como canal puente para nuestras ocupadas abejas vecinas en ",(0,o.kt)("a",{parentName:"li",href:"https://about.1hive.org/"},"1Hive.")),(0,o.kt)("li",{parentName:"ul"},"#\ud83c\udf10te-commons vincula el servidor Giveth con la gran comunidad de ingenieros de tokens en ",(0,o.kt)("a",{parentName:"li",href:"https://tecommons.org/"},"TEC.")),(0,o.kt)("li",{parentName:"ul"},"#\ud83d\udc19metagame conecta con un canal en el servidor Discord de ",(0,o.kt)("a",{parentName:"li",href:"https://about.1hive.org/"},"Metagame.")),(0,o.kt)("li",{parentName:"ul"},"#\ud83c\udf31panvala permite que nuestro servidor se conecte con nuestros amigos en ",(0,o.kt)("a",{parentName:"li",href:"https://panvala.com/"},"Panvala.")),(0,o.kt)("li",{parentName:"ul"},"#gaia-gives nos conecta con el chat de Telegram de la comunidad ",(0,o.kt)("a",{parentName:"li",href:"https://www.gaia.gives/"},"Gaia Gives"),".")),(0,o.kt)("h2",{id:"canales-de-voz"},"Canales de voz"),(0,o.kt)("p",null,"Estos canales se utilizan para conversaciones de voz y/o video con miembros de la comunidad."),(0,o.kt)("p",null,"#groovy-playlist es un canal de texto que se usa para escribir comandos de Chip Bot. ",(0,o.kt)("a",{parentName:"p",href:"/es/whatisgiveth/introDiscord/#chip"},"(M\xe1s informaci\xf3n sobre los comandos de bot a continuaci\xf3n)"),"\n",(0,o.kt)("strong",{parentName:"p"},"Stage"),": este es el canal que se usa para organizar eventos y mostrar Giveth a la comunidad de Ethereum en general.\n",(0,o.kt)("strong",{parentName:"p"},"Community"),": se utiliza como punto de encuentro para los grupos de trabajo de Community Circle, as\xed como para las llamadas comunitarias semanales.\n",(0,o.kt)("strong",{parentName:"p"},"Platform"),": es un punto de encuentro para los grupos de trabajo de Platform Circle.\n",(0,o.kt)("strong",{parentName:"p"},"Governance"),": es el canal de voz para nuestras discusiones semanales de los grupos de trabajo de nGobernanza y DAO.\n",(0,o.kt)("strong",{parentName:"p"},"Communications"),": es donde el equipo de comunicaciones se re\xfane para las sesiones semanales de sincronizaci\xf3n y pirateo."),(0,o.kt)("p",null,"*Todos los horarios de las reuniones se pueden encontrar en el ",(0,o.kt)("a",{parentName:"p",href:"https://calendar.google.com/calendar/u/0/embed?src=givethdotio@gmail.com&ctz=America/Costa_Rica"},"Calendario de Giveth.")),(0,o.kt)("h2",{id:"etiquetando"},"Etiquetando"),(0,o.kt)("p",null,'Puede etiquetar ciertos t\xedtulos de trabajo usando "@" seguido del t\xedtulo del trabajo. Tambi\xe9n etiquete a una persona con "@" seguido del nick o apodo de la persona.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Posiciones:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"@Giver")," - Personas a las que les encanta financiar proyectos de calidad. Puedes asignar este rol en el canal de #\ud83e\udd1dbienvenida reaccionando al mensaje del bot con el emoji \ud83d\udc9d."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"@Maker"),": personas que trabajan duro para hacer del mundo un lugar mejor. Este rol tambi\xe9n se puede asignar a usted mismo en el canal de bienvenida #\ud83e\udd1d reaccionando al mensaje del bot con un emoji \ud83e\udd84."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"@Unicorn")," - Personas que asisten regularmente a llamadas y contribuyen muy activamente a Giveth."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"@DAO"),": poseedores de tokens rGIV. Puede obtener tokens rGIV contribuyendo constantemente a la comunidad."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"@Comms Stars"),": miembros del equipo de comunicaciones."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"@Community Support"),": miembros del grupo de trabajo Community Support."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"@Governance")," - Miembros del grupo de trabajo de Gobernanza."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"@Desarrollo")," - Miembros del grupo de trabajo de Desarrollo."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"@Design")," - Miembros del grupo de trabajo de Dise\xf1o.")),(0,o.kt)("h2",{id:"comandos-de-bots"},"Comandos de bots"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PraiseBot"),"\nEn Giveth, nos encanta reconocer el valor que cada miembro aporta a la comunidad y brindar reconocimiento por las maravillas que contribuyen. PraiseBot rastrea los elogios otorgados y los utiliza para calcular las recompensas para los contribuyentes activos."),(0,o.kt)("p",null,'Puede elogiar a un miembro de la comunidad en cualquier canal escribiendo !praise seguido de "@" y el nick del usuario. No olvides mencionar por qu\xe9 lo elogias.'),(0,o.kt)("p",null,"Por ejemplo: !praise a @WhyldWanderer por crear una Gu\xeda de Discord tan genial \ud83d\ude1b"),(0,o.kt)("p",null,"Una vez que hayas escrito tu cumplido, sabr\xe1s que el bot te ha localizado, porque aparecer\xe1 un emoji \u2705 como reacci\xf3n a tu mensaje."),(0,o.kt)("p",null,"Cuando reciba elogios, el bot le notificar\xe1 en sus mensajes directos con un enlace al mensaje en el que recibi\xf3 elogios."),(0,o.kt)("p",null,"Bot simple para votar"),(0,o.kt)("p",null,"Este bot se puede usar para crear una encuesta como esta:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/qDYlm1m.png",alt:null})),(0,o.kt)("p",null,'Para crear la encuesta que se muestra arriba, simplemente escriba el comando de la siguiente manera: /poll "\xbfCu\xe1l es el mejor bot para votar? "Encuesta simple" "R2D2"'),(0,o.kt)("p",null,'Al seguir esta plantilla, puede crear tantas respuestas como desee y los miembros de la comunidad pueden responder reaccionando con el emoji correspondiente. /poll "Pregunta" "Respuesta #1" "Respuesta #2" "Respuesta #3" ..etc.'),(0,o.kt)("h3",{id:"chip-bot"},"Chip Bot"),(0,o.kt)("p",null,"Se puede invitar a Chit Bot a cualquiera de los canales de voz del servidor. Una vez que se invita al bot al canal, cualquiera puede escribir comandos en el canal de texto #chip-playlist para comenzar a reproducir o arreglar m\xfasica. Aqu\xed hay una lista de comandos disponibles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ch!p 'enlace o consulta de b\xfasqueda': carga su entrada y la agrega a la cola; si no hay ninguna pista en reproducci\xf3n, comenzar\xe1 a reproducirse"),(0,o.kt)("li",{parentName:"ul"},"ch!queue - Muestra la cola de canciones actual"),(0,o.kt)("li",{parentName:"ul"},"ch!skip - Salta a la siguiente canci\xf3n"),(0,o.kt)("li",{parentName:"ul"},"ch!clear - Elimina todos los rastros de la cola"),(0,o.kt)("li",{parentName:"ul"},"ch!skipto 'posici\xf3n de pista o t\xedtulo' - Salta a la pista especificada"),(0,o.kt)("li",{parentName:"ul"},"ch!lyrics - Muestra la letra de la pista que se est\xe1 reproduciendo actualmente"),(0,o.kt)("li",{parentName:"ul"},"ch!pause - Reproducci\xf3n de pausas"),(0,o.kt)("li",{parentName:"ul"},"ch!resume - Reanudar la reproducci\xf3n"),(0,o.kt)("li",{parentName:"ul"},"ch!remove 'posici\xf3n de pista o t\xedtulo' - Elimina la pista especificada de la cola"),(0,o.kt)("li",{parentName:"ul"},"ch!stop: apaga el bot de su canal de voz y borra la cola"),(0,o.kt)("li",{parentName:"ul"},"ch!shuffle - Aleatoriza el orden actual de las pistas en la cola"),(0,o.kt)("li",{parentName:"ul"},"ch!nowplaying: muestra informaci\xf3n sobre la pista del juego actual.")),(0,o.kt)("p",null,"Chip Bot puede reproducir m\xfasica de varias fuentes, incluidas Spotify, YouTube, Soundcloud, etc. Para que el bot Chip pueda reproducir desde Spotify, simplemente haga clic en Compartir > Copiar enlace de lista de reproducci\xf3n > copie esto en su chat con la etiqueta ch!p y ya est\xe1 todo listo."),(0,o.kt)("h2",{id:"soporte"},"Soporte"),(0,o.kt)("p",null,"Si encuentra alg\xfan problema o tiene preguntas, etiquete a @admin o pregunte en el canal #\ud83d\udcac  support."))}u.isMDXComponent=!0}}]);