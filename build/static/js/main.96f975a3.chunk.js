(this.webpackJsonpauctioneer=this.webpackJsonpauctioneer||[]).push([[0],{141:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(22),r=c(12),s=c(157),i=c(76),o=(c(88),c(145),c(146),i.a.initializeApp({apiKey:"AIzaSyB3s6QjYWR6EL45XSK7ANP-D_1I-DZ9eYg",authDomain:"taxis-e44d6.firebaseapp.com",projectId:"taxis-e44d6",storageBucket:"taxis-e44d6.appspot.com",messagingSenderId:"603667662446",appId:"1:603667662446:web:0014b763a2a4acca92487f"})),l=i.a.firestore.FieldValue.serverTimestamp,j=o.firestore(),d=o.storage(),u=o.auth(),b=c(2),O=Object(n.createContext)(),x=function(e){var t=e.children,c=Object(n.useState)(null),a=Object(r.a)(c,2),s=a[0],i=a[1],o=Object(n.useState)(!0),l=Object(r.a)(o,2),d=l[0],x=l[1],h=Object(n.useState)(""),m=Object(r.a)(h,2),f=m[0],p=m[1];return Object(n.useEffect)((function(){return u.onAuthStateChanged((function(e){i(e),x(!1)}))}),[]),Object(n.useEffect)((function(){var e=setTimeout((function(){return p("")}),5e3);return function(){return clearTimeout(e)}}),[f]),Object(b.jsx)(O.Provider,{value:{currentUser:s,register:function(e,t){return u.createUserWithEmailAndPassword(e,t)},login:function(e,t){return u.signInWithEmailAndPassword(e,t)},logout:function(){return u.signOut()},bidAuction:function(e){return j.collection("auctions").doc(e).update({completed:!0})},endAuction:function(e){return j.collection("auctions").doc(e).delete()},globalMsg:f},children:!d&&t})},h=c(153),m=c(43),f=function(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){var t=j.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id}))})),s(t)}));return function(){return t()}}),[e]),{docs:a}},p=function(e){var t,c,a=e.item,r=e.handleState,s=Object(n.useContext)(O).currentUser,i=f("auctions").docs,o=0;i.map((function(e){e.id===a.id&&(o=e.curPrice),e.id===a.id&&(t=e.duration),e.id===a.id&&(c=e.completed)}));var l=new Date(t).toLocaleTimeString("es-CL"),j=new Date(t).toLocaleDateString("es-CL",{weekday:"short",year:"numeric",month:"short",day:"numeric"});return Object(b.jsx)("div",{className:"col",children:Object(b.jsxs)("div",{className:"card shadow-sm",children:[Object(b.jsx)("div",{onClick:function(){return r(a)},style:{height:"180px",backgroundImage:"url(".concat(a.imgUrl,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:"w-100 mt-4"}),Object(b.jsxs)("div",{className:"card-body p-4",children:[Object(b.jsxs)("p",{className:"h5",children:[Object(b.jsx)("span",{className:"text-secondary",children:"taxi "})," ",a.title]}),Object(b.jsx)("div",{className:"d-flex jsutify-content-between align-item-center",children:Object(b.jsxs)("h5",{children:[Object(b.jsx)("span",{className:"text-secondary",children:"cliente"})," ",a.categorie]})}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:[j,", ",l.slice(0,-3)]})}),Object(b.jsxs)("p",{className:"card-text",children:[a.description.slice(0,20),"..."]}),Object(b.jsxs)("div",{className:"d-flex justify-content-between align-item-center",children:[s&&Object(b.jsx)(h.a,{className:c?"btn btn-primary":"btn btn-secondary",disabled:!0,children:c?"Completado":" Sin Completar"}),Object(b.jsxs)("p",{className:"display-6",children:["$",o]})]})]})]})})},v=c(154),g=c(31),y=c.n(g),N=c(36),w=function(e){var t=Object(n.useState)(0),c=Object(r.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(null),o=Object(r.a)(i,2),u=o[0],b=o[1];return Object(n.useState)((function(){var t=d.ref(e.itemImage.name),c=j.collection("auctions");t.put(e.itemImage).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;s(t)}),(function(e){console.log(e)}),Object(N.a)(y.a.mark((function n(){var a,r;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getDownloadURL();case 2:return a=n.sent,r=l(),delete e.itemImage,n.next=7,c.add(Object(m.a)(Object(m.a)({},e),{},{createdAt:r,imgUrl:a}));case 7:b(!0);case 8:case"end":return n.stop()}}),n)}))))}),[e]),{progress:a,isCompleted:u}},C=function(e){var t=e.auction,c=e.setAuction,a=w(t),r=a.progress,s=a.isCompleted;return Object(n.useEffect)((function(){s&&c(null)}),[s,c]),Object(b.jsx)(v.a.div,{style:{height:"5px",background:"black"},initial:{width:0},animate:{width:"".concat(r,"%")}})},S=c(27),k=Object(n.createContext)(),D=function(e){var t=e.children,c=f("auctions").docs,a=Object(S.a)(c),s=Object(n.useState)(a),i=Object(r.a)(s,2),o=i[0],l=i[1];return Object(b.jsx)(k.Provider,{value:{handleDB:function(e){l(e)},DB:o},children:t})},P=c(77),A=c.n(P),I=(c(93),function(e){var t,c=e.itemState,n=void 0===c?{title:"Inicia sesi\xf3n",imgUrl:"https://image.shutterstock.com/image-photo/indifferent-puzzled-female-shruggs-shoulders-600w-1164353026.jpg"}:c,a=f("auctions").docs,r=n.title,s=0,i="";a.map((function(e){e.id===n.id&&(s=e.curPrice),e.id===n.id&&(i=e.email),e.id===n.id&&(t=e.createdAt.seconds)}));var o=new Date(1e3*t).toLocaleTimeString("es-CL"),l=new Date(1e3*t).toLocaleDateString("es-CL",{weekday:"long",year:"numeric",month:"short",day:"numeric"});return Object(b.jsxs)("div",{className:"m-5",children:[Object(b.jsx)("div",{className:n.completed?"bg-primary text-white p-2 text-center":"bg-danger text-white p-2 text-center",children:n.completed?"COMPLETADO":"SIN COMPLETAR"}),Object(b.jsxs)("div",{className:"card pb-0",children:[Object(b.jsx)("div",{style:{height:"400px",backgroundImage:"url(".concat(n.imgUrl,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:"w-100 mb-4 mt-2"}),"Inicia sesi\xf3n"!==r&&Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("p",{className:"lead display-6 pl-2",children:[Object(b.jsx)("span",{className:"text-secondary",children:"Taxi: "})," ",n.title]}),Object(b.jsx)("div",{className:"d-flex jsutify-content-between align-item-center",children:Object(b.jsxs)("h5",{children:[Object(b.jsx)("span",{className:"text-secondary",children:"Correo: "})," ",i]})}),Object(b.jsxs)("h5",{children:[Object(b.jsx)("span",{className:"text-secondary",children:"Fecha: "})," ",l,", "," ",o]}),Object(b.jsxs)("h5",{className:"card-text",children:[Object(b.jsx)("span",{className:"text-secondary",children:"Comentarios: "})," ",n.description]}),Object(b.jsx)("div",{style:{float:"right"},children:Object(b.jsxs)("p",{className:"display-6 ",children:["$",s]})})]})]})]})}),L=function(){var e=f("auctions").docs,t=Object(S.a)(e),c=Object(n.useContext)(k).handleDB,a=Object(n.useState)([]),s=Object(r.a)(a,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){if("Price"!==i[0])if("PriceMaxToMin"!==i[0])if("DateMaxToMin"!==i[0])if("Date"!==i[0]);else{var e=t.sort((function(e,t){return e.createdAt-t.createdAt}));c(e)}else{var n=t.sort((function(e,t){return t.createdAt-e.createdAt}));c(n)}else{var a=t.sort((function(e,t){return t.curPrice-e.curPrice}));c(a)}else{var r=t.sort((function(e,t){return e.curPrice-t.curPrice}));c(r)}}),[i]),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"w-75",children:[Object(b.jsx)("h2",{children:"Filtros"}),Object(b.jsxs)("select",{className:"form-select w-100 ",onChange:function(e){var t=Array.from(e.target.selectedOptions,(function(e){return e.value}));o(t)},value:i,children:[Object(b.jsx)("option",{children:"Filtrar por"}),Object(b.jsx)("option",{value:"Price",children:"Precio"}),Object(b.jsx)("option",{value:"PriceMaxToMin",children:"Precio Max to Min"}),Object(b.jsx)("option",{value:"Date",children:"Fecha"}),Object(b.jsx)("option",{value:"DateMaxToMin",children:"Fecha Max to Min"})]})]})})},M=function(){var e=f("auctions").docs,t=Object(S.a)(e),c=Object(n.useContext)(k).handleDB,a=Object(n.useState)([]),s=Object(r.a)(a,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){if("all"!==i[0])if("done"!==i[0])if("fallen"!==i[0]);else{var e=t.filter((function(e){return!1===e.completed}));c(e)}else{var n=t.filter((function(e){return!0===e.completed}));c(n)}else{var a=t.filter((function(e){return e}));c(a)}}),[i]),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"w-75 mt-5",children:[Object(b.jsx)("h2",{children:"Resultados"}),Object(b.jsxs)("select",{className:"form-select w-100 ",onChange:function(e){var t=Array.from(e.target.selectedOptions,(function(e){return e.value}));o(t)},value:i,children:[Object(b.jsx)("option",{value:"all",children:"Todos"}),Object(b.jsx)("option",{value:"done",children:"Completados"}),Object(b.jsx)("option",{value:"fallen",children:"Sin Completar"})]})]})})},E=function(){var e=Object(n.useContext)(k).handleDB,t=f("auctions").docs,c=Object(S.a)(t),a=Object(n.useState)(!0),s=Object(r.a)(a,2),i=s[0],o=s[1],l=Object(n.useState)(!0),j=Object(r.a)(l,2),d=j[0],u=j[1],O=Object(n.useState)(!0),x=Object(r.a)(O,2),h=x[0],m=x[1],p=Object(n.useState)([]),v=Object(r.a)(p,2),g=v[0],y=v[1];function N(e,t){var c=e.indexOf(t);c>-1&&e.splice(c,1)}return Object(n.useEffect)((function(){for(var t=function(e){var t=c.filter((function(t){return t.categorie!==g[e]}));c=t},n=0;n<g.length;n++)t(n);e(c)}),[g,i,d,h]),Object(n.useEffect)((function(){setTimeout((function(){o(!i),o(!0)}),200)}),[t]),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"w-75 mt-5",children:[Object(b.jsx)("h2",{children:"Clientes"}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"checkbox",className:"m-1",value:"oxxo",onChange:function(e){return function(e){o(!i),i?y([].concat(Object(S.a)(g),[e.target.value])):N(g,e.target.value)}(e)},checked:i}),"oxxo"]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"checkbox",className:"m-1",value:"otro1",onChange:function(e){return function(e){u(!d),d?y([].concat(Object(S.a)(g),[e.target.value])):N(g,e.target.value)}(e)},checked:d}),"otro1"]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"checkbox",className:"m-1",value:"otro2",onChange:function(e){return function(e){m(!h),h?y([].concat(Object(S.a)(g),[e.target.value])):N(g,e.target.value)}(e)},checked:h}),"otro2"]})]})})},T=function(){return Object(b.jsxs)("div",{style:{paddingLeft:"16px"},className:"d-flex justify-content-between flex-column pb-5  ",children:[Object(b.jsx)(L,{}),Object(b.jsx)(M,{}),Object(b.jsx)(E,{})]})},R=(c(94),c(81));Object(P.registerLocale)("es",R.a);var F=function(){var e,t=Object(n.useState)(null),c=Object(r.a)(t,2),a=c[0],i=c[1],o=Object(n.useContext)(O),l=o.currentUser,j=o.globalMsg,d=Object(n.useContext)(k).DB,u=Object(n.useState)(),x=Object(r.a)(u,2),h=x[0],m=x[1],f=function(e){m(e)};e="superadmin@gmail.com"===(!!l&&l.email)?d:[];var v=Object(n.useState)(),g=Object(r.a)(v,2),y=g[0],N=g[1],w=Object(n.useState)([]),S=Object(r.a)(w,2),D=S[0],P=S[1];console.log(D);var L=D.filter((function(e){return e})).length,M=Object(n.useState)(),E=Object(r.a)(M,2),R=E[0],F=E[1];console.log(R);var B=Object(n.useState)([]),U=Object(r.a)(B,2),z=(U[0],U[1]),q=Object(n.useState)(),G=Object(r.a)(q,2),H=G[0],W=G[1];console.log(H);var J=Object(n.useState)(),K=Object(r.a)(J,2),Y=K[0],$=K[1];console.log(Y);var _=Object(n.useState)([]),Q=Object(r.a)(_,2),V=Q[0],X=Q[1];console.log(V);var Z=D;H?(Z=H.filter((function(e){return!1!==e})),V.length>0&&(Z=V)):D&&(Z=D);var ee=e;return D.length>0&&(ee=Z),Object(b.jsxs)("div",{className:"container-fluid",children:[a&&Object(b.jsx)(C,{auction:a,setAuction:i}),Object(b.jsx)("div",{style:{zIndex:"9999999"},className:"text-center w-50 position-fixed top-10 start-50 translate-middle",children:j&&Object(b.jsx)(s.a,{variant:"danger",children:j})}),Object(b.jsxs)("div",{className:"row bg-secondary pt-4 pb-3 style={{paddingLeft:'50px'}}",children:[Object(b.jsxs)("label",{className:"pl-5 ",children:[Object(b.jsxs)("span",{className:"text-white bg-primary p-1 ",children:[" ",L]})," ","","viajes el dia:"]}),Object(b.jsx)("div",{className:"col-1"}),Object(b.jsx)("div",{className:"col-3  text-center mb-4",children:Object(b.jsx)(A.a,{selected:y,onChange:function(e){N(e),console.log(e);var t=null===e||void 0===e?void 0:e.getTime(),c=t+864e5,n=d.map((function(e,n){if(e.duration>t&&e.duration<c)return e}));P(n)},onFocus:function(){P([])},locale:"es",className:"pickers mb-3 form-control mt-2 w-100 ",dateFormat:"dd 'de' MMMM 'de' yyyy"})}),Object(b.jsx)("div",{className:"col-1"}),Object(b.jsx)("div",{className:"col-3 text-center",children:Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),z(R);var t=D.filter((function(e){return void 0!==e})).map((function(e){return e.email===R+"@gmail.com"&&e}));W(t)},children:Object(b.jsx)("input",{type:"text",onChange:function(e){F(e.target.value),X([])},value:R,className:D.length>0?"w-100 form-control mt-2":"d-none",style:{width:"0"},placeholder:"filtrar por correo"})})}),Object(b.jsx)("div",{className:"col-1"}),Object(b.jsx)("div",{className:(null===D||void 0===D?void 0:D.length)>0?"col-3 mt-0 fr":"d-none",children:Object(b.jsxs)("div",{className:(null===H||void 0===H?void 0:H.length)>0?"w-50":"d-none",onChange:function(e){return function(e){$(e),X([]);var t=null===H||void 0===H?void 0:H.filter((function(e){return!1!==e})),c=t;"completados"===Y?(c=t.filter((function(e){return!0!==e.completed})),X(c)):(c=t.filter((function(e){return!1!==e.completed})),X(c))}(e.target.value)},children:[Object(b.jsx)("input",{type:"button",className:"btn text-white btn-secondary",name:"drone",value:"Todos",onClick:function(){return X([])}}),Object(b.jsxs)("label",{className:"btn text-white btn-secondary",children:[Object(b.jsx)("input",{type:"radio",value:"completados",name:"drone",className:"d-none"}),"Completados"]}),Object(b.jsxs)("label",{className:"btn text-white btn-secondary",children:[Object(b.jsx)("input",{type:"radio",value:"nocompletados",name:"drone",className:"d-none",for:"chackbox2"}),"No Completados"]})]})})]}),d&&Object(b.jsxs)("div",{className:"row row-cols-1 row-cols-md-3 row-cols-lg-4 p-5 g-3 border mt-1 ",children:[Object(b.jsx)("div",{className:D.length>0&&"d-none",children:Object(b.jsx)(T,{})}),ee.filter((function(e){return void 0!==e})).map((function(e){return Object(b.jsx)(p,{item:e,handleState:f},e.id)}))]}),Object(b.jsx)(I,{itemState:h})]})},B=c.p+"static/media/canal10.24a72002.png",U=c(155),z=c(156),q=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),o=Object(r.a)(i,2),l=o[0],j=o[1],d=Object(n.useRef)(),u=Object(n.useRef)(),x=Object(n.useContext)(O).login,m=function(){return a(!1)},f=function(){var e=Object(N.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),j(""),e.prev=2,e.next=5,x(d.current.value,u.current.value);case 5:m(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),j("Invalid login");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{onClick:function(){return a(!0)},className:"btn btn-outline-secondary mx-2",children:"Entrar"}),Object(b.jsx)(U.a,{centered:!0,show:c,onHide:m,children:Object(b.jsxs)("form",{onSubmit:f,children:[Object(b.jsx)(U.a.Header,{children:Object(b.jsx)(U.a.Title,{children:"Entrar"})}),Object(b.jsxs)(U.a.Body,{children:[l&&Object(b.jsx)(s.a,{variant:"danger",children:l}),Object(b.jsxs)(z.a.Group,{children:[Object(b.jsx)(z.a.Label,{children:"Email "}),Object(b.jsx)(z.a.Control,{type:"email",required:!0,ref:d})]}),Object(b.jsxs)(z.a.Group,{children:[Object(b.jsx)(z.a.Label,{children:"Password"}),Object(b.jsx)(z.a.Control,{type:"password",required:!0,ref:u})]})]}),Object(b.jsxs)(U.a.Footer,{children:[Object(b.jsx)(h.a,{variant:"secondary",onClick:m,children:"Cancelar"}),Object(b.jsx)(h.a,{variant:"primary",type:"submit",children:"Entrar"})]})]})})]})},G=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),o=Object(r.a)(i,2),l=o[0],j=o[1],d=Object(n.useRef)(),u=Object(n.useRef)(),x=Object(n.useRef)(),m=Object(n.useContext)(O).register,f=function(){return a(!1)},p=function(){var e=Object(N.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),j(""),u.current.value===x.current.value){e.next=4;break}return e.abrupt("return",j("Passwords does not match"));case 4:return e.prev=4,e.next=7,m(d.current.value,u.current.value);case 7:f(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),j(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(U.a,{centered:!0,show:c,onHide:f,children:Object(b.jsxs)("form",{onSubmit:p,children:[Object(b.jsx)(U.a.Header,{children:Object(b.jsx)(U.a.Title,{children:"Registro"})}),Object(b.jsxs)(U.a.Body,{children:[l&&Object(b.jsx)(s.a,{variant:"danger",children:l}),Object(b.jsxs)(z.a.Group,{children:[Object(b.jsx)(z.a.Label,{children:"Email"}),Object(b.jsx)(z.a.Control,{type:"email",required:!0,ref:d})]}),Object(b.jsxs)(z.a.Group,{children:[Object(b.jsx)(z.a.Label,{children:"Password"}),Object(b.jsx)(z.a.Control,{type:"password",required:!0,ref:u})]}),Object(b.jsxs)(z.a.Group,{children:[Object(b.jsx)(z.a.Label,{children:"Confirmar Password"}),Object(b.jsx)(z.a.Control,{type:"password",required:!0,ref:x})]})]}),Object(b.jsxs)(U.a.Footer,{children:[Object(b.jsx)(h.a,{variant:"secondary",onClick:f,children:"Cancelar"}),Object(b.jsx)(h.a,{variant:"primary",type:"submit",children:"Registrar"})]})]})})})},H=function(){var e=Object(n.useContext)(O),t=e.currentUser,c=e.logout;return Object(b.jsx)("nav",{className:"container-fluid navbar navbar-light border",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)("img",{src:B,alt:"logo",height:"50"})," ADMINISTRACI\xd3N"]}),Object(b.jsx)("div",{className:"d-flex",children:Object(b.jsx)("div",{className:"col",children:t?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"btn btn-success mx-2 disabled",children:t.email}),Object(b.jsx)("div",{onClick:function(){return c()},className:"btn btn-outline-secondary mx-2",children:"SALIR"})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(q,{}),Object(b.jsx)(G,{})]})})})]})})},W=function(){return Object(b.jsx)(x,{children:Object(b.jsxs)(D,{children:[Object(b.jsx)(H,{}),Object(b.jsx)(F,{})]})})};c(139);Object(a.render)(Object(b.jsx)(W,{}),document.getElementById("root"))},94:function(e,t,c){}},[[141,1,2]]]);
//# sourceMappingURL=main.96f975a3.chunk.js.map