(this.webpackJsonpauctioneer=this.webpackJsonpauctioneer||[]).push([[0],{141:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(23),r=n(14),s=n(9),i=n(157),o=n(76),l=(n(88),n(145),n(146),o.a.initializeApp({apiKey:"AIzaSyBpVbOQfUp2eia-8rokbNCu7tsm11cuEpI",authDomain:"daring-tracer-333307.firebaseapp.com",projectId:"daring-tracer-333307",storageBucket:"daring-tracer-333307.appspot.com",messagingSenderId:"478802051249",appId:"1:478802051249:web:40e0003d08645cba016290"})),d=o.a.firestore.FieldValue.serverTimestamp,u=l.firestore(),j=l.storage(),b=l.auth(),m=n(2),O=Object(c.createContext)(),x=function(e){var t=e.children,n=Object(c.useState)(null),a=Object(s.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(!0),l=Object(s.a)(o,2),d=l[0],j=l[1],x=Object(c.useState)(""),h=Object(s.a)(x,2),f=h[0],v=h[1];return Object(c.useEffect)((function(){return b.onAuthStateChanged((function(e){i(e),j(!1)}))}),[]),Object(c.useEffect)((function(){var e=setTimeout((function(){return v("")}),5e3);return function(){return clearTimeout(e)}}),[f]),Object(m.jsx)(O.Provider,{value:{currentUser:r,register:function(e,t){return b.createUserWithEmailAndPassword(e,t)},login:function(e,t){return b.signInWithEmailAndPassword(e,t)},logout:function(){return b.signOut()},bidAuction:function(e){return u.collection("auctions").doc(e).update({acuerdo:!0})},noteContext:function(e,t){return u.collection("auctions").doc(e).update({note:t})},endAuction:function(e){return u.collection("auctions").doc(e).delete()},globalMsg:f},children:!d&&t})},h=n(153),f=n(43),v=function(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){var t=u.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(f.a)(Object(f.a)({},e.data()),{},{id:e.id}))})),r(t)}));return function(){return t()}}),[e]),{docs:a}},p=function(e){var t,n,a,r,s,i=e.item,o=e.handleState,l=Object(c.useContext)(O),d=l.currentUser,u=l.bidAuction;v("auctions").docs.map((function(e){e.id===i.id&&(a=e.duration),e.id===i.id&&(r=e.completed),e.id===i.id&&(s=e.acuerdo)}));var j=new Date(a).toLocaleTimeString("es-CL"),b=new Date(a).toLocaleDateString("es-CL",{weekday:"short",year:"numeric",month:"short",day:"numeric"});return Object(m.jsx)("div",{className:"col",children:d&&Object(m.jsxs)("div",{className:"card shadow-sm",children:[Object(m.jsx)("div",{onClick:function(){o(i),window.scrollTo(0,document.body.scrollHeight,{behavior:"smooth"})},style:{height:"140px",backgroundImage:"url(".concat(i.imgUrl,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:"w-100 mt-4"}),Object(m.jsxs)("div",{className:"card-body p-4",children:[Object(m.jsxs)("p",{className:"h5",children:[Object(m.jsx)("span",{className:"text-secondary",children:"KL "})," ",null===(t=i.email)||void 0===t?void 0:t.slice(0,-10)," ","no-gps"!==i.latitude?Object(m.jsx)("a",{style:{textDecoration:"none"},href:"https://www.google.com/maps/@".concat(i.latitude,",").concat(i.longitude,",20z"),target:"_blank",children:"Ubicacion GPS"}):""]}),Object(m.jsx)("div",{className:"d-flex jsutify-content-between align-item-center",children:Object(m.jsxs)("h5",{children:[Object(m.jsx)("span",{className:"text-secondary",children:"Cliente"})," ",i.categorie]})}),Object(m.jsx)("div",{className:"d-flex jsutify-content-between align-item-center",children:Object(m.jsxs)("h5",{children:[Object(m.jsx)("span",{className:"text-secondary",children:"Tienda:"})," ",i.tiendaOxxo]})}),Object(m.jsx)("div",{children:Object(m.jsxs)("p",{children:[b,", ",j.slice(0,-3)]})}),Object(m.jsxs)("p",{className:"card-text",children:[null===i||void 0===i||null===(n=i.description)||void 0===n?void 0:n.slice(0,20),"..."]}),Object(m.jsx)("div",{className:"d-flex justify-content-between align-item-center",children:Object(m.jsx)(h.a,{className:r?"btn btn-primary w-100":s?"btn btn-success w-100":"btn btn-danger w-100",onClick:function(){u(i.id),o(i)},children:r?"Completado":s?"Sin Completar \u2713":"Sin Completar \u2718"})})]})]})})},g=n(154),N=n(31),y=n.n(N),w=n(36),C=function(e){var t=Object(c.useState)(0),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(null),o=Object(s.a)(i,2),l=o[0],b=o[1];return Object(c.useState)((function(){var t=j.ref(e.itemImage.name),n=u.collection("auctions");t.put(e.itemImage).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t)}),(function(e){console.log(e)}),Object(w.a)(y.a.mark((function c(){var a,r;return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t.getDownloadURL();case 2:return a=c.sent,r=d(),delete e.itemImage,c.next=7,n.add(Object(f.a)(Object(f.a)({},e),{},{createdAt:r,imgUrl:a}));case 7:b(!0);case 8:case"end":return c.stop()}}),c)}))))}),[e]),{progress:a,isCompleted:l}},S=function(e){var t=e.auction,n=e.setAuction,a=C(t),r=a.progress,s=a.isCompleted;return Object(c.useEffect)((function(){s&&n(null)}),[s,n]),Object(m.jsx)(g.a.div,{style:{height:"5px",background:"black"},initial:{width:0},animate:{width:"".concat(r,"%")}})},k=Object(c.createContext)(),D=function(e){var t=e.children,n=v("auctions").docs,a=Object(r.a)(n),i=Object(c.useState)(a),o=Object(s.a)(i,2),l=o[0],d=o[1];return Object(m.jsx)(k.Provider,{value:{handleDB:function(e){d(e)},DB:l},children:t})},E=n(77),L=n.n(E),M=(n(93),function(e){var t,n=e.itemState,a=void 0===n?{title:"Inicia sesi\xf3n",imgUrl:"https://image.shutterstock.com/image-photo/indifferent-puzzled-female-shruggs-shoulders-600w-1164353026.jpg"}:n,r=v("auctions").docs,i=Object(c.useContext)(O).noteContext,o=a.title,l="";r.map((function(e){e.id===a.id&&(l=e.email),e.id===a.id&&(t=e.duration)}));var d=new Date(t).toLocaleTimeString("es-CL"),u=new Date(t).toLocaleDateString("es-CL",{weekday:"long",year:"numeric",month:"short",day:"numeric"}),j=Object(c.useState)(),b=Object(s.a)(j,2),x=b[0],h=b[1];return Object(m.jsxs)("div",{className:"m-5",children:[Object(m.jsx)("div",{className:"bg-secondary text-white p-2 text-center",children:a.completed?"COMPLETADO":"SIN COMPLETAR"}),Object(m.jsxs)("div",{className:"card pb-0",style:{backgroundColor:"rgb(230,230,230)"},children:[Object(m.jsx)("div",{style:{height:"240px",backgroundImage:"url(".concat(a.imgUrl,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:"w-100 mb-4 mt-2"}),"Inicia sesi\xf3n"!==o&&Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsxs)("h5",{children:[Object(m.jsx)("span",{className:"text-secondary",children:"KL: "})," ",l.slice(0,-10)]}),Object(m.jsxs)("h5",{children:[Object(m.jsx)("span",{className:"text-secondary",children:"Unidad: "})," ",a.title]}),Object(m.jsxs)("h5",{children:[Object(m.jsx)("span",{className:"text-secondary",children:"Cliente: "})," ",a.categorie]}),Object(m.jsxs)("h5",{children:[Object(m.jsx)("span",{className:"text-secondary",children:"Fecha: "})," ",u,", ",d]}),Object(m.jsxs)("h5",{children:[Object(m.jsx)("span",{className:"text-secondary",children:"Tienda Oxxo: "})," ",a.tiendaOxxo]}),Object(m.jsxs)("h5",{className:"card-text",children:[Object(m.jsx)("span",{className:"text-secondary",children:"Comentarios: "})," ",a.description]}),Object(m.jsxs)("h5",{className:void 0!==a.note?"card-text":"d-none",children:[Object(m.jsx)("span",{className:"text-secondary",children:"Nota: "})," ",a.note]})]}),"Inicia sesi\xf3n"!==o&&Object(m.jsx)("div",{className:a.completed?"d-none":"p-3",children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(a.id,x),a.note=x,h("")},className:"d-flex",children:[Object(m.jsx)("input",{type:"text",className:"form-control me-2",onChange:function(e){h(e.target.value)},placeholder:"Nota:",value:x}),Object(m.jsx)("input",{type:"button",className:void 0!==a.note?"btn btn-info me-1 text-white":"d-none",value:"Editar",onClick:function(){h(a.note)}}),Object(m.jsx)("input",{type:"submit",value:void 0!==a.note?"Guardar":"Escribir Nota",className:"btn btn-info text-white",disabled:!((null===x||void 0===x?void 0:x.length)>1)})]})})]})]})}),T=function(){var e=v("auctions").docs,t=Object(r.a)(e),n=Object(c.useContext)(k).handleDB,a=Object(c.useState)([]),i=Object(s.a)(a,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){if("DateMaxToMin"!==o[0])if("Date"!==o[0]);else{var e=t.sort((function(e,t){return e.createdAt-t.createdAt}));n(e)}else{var c=t.sort((function(e,t){return t.createdAt-e.createdAt}));n(c)}}),[o]),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"w-75",children:[Object(m.jsx)("h2",{children:"Filtros"}),Object(m.jsxs)("select",{className:"form-select w-100 ",onChange:function(e){var t=Array.from(e.target.selectedOptions,(function(e){return e.value}));l(t)},value:o,children:[Object(m.jsx)("option",{children:"Filtrar por"}),Object(m.jsx)("option",{value:"Date",children:"Fecha MIN to MAX"}),Object(m.jsx)("option",{value:"DateMaxToMin",children:"Fecha Max to Min"})]})]})})},A=function(){var e=v("auctions").docs,t=Object(r.a)(e),n=Object(c.useContext)(k).handleDB,a=Object(c.useState)([]),i=Object(s.a)(a,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){if("all"!==o[0])if("done"!==o[0])if("fallen"!==o[0]);else{var e=t.filter((function(e){return!1===e.completed}));n(e)}else{var c=t.filter((function(e){return!0===e.completed}));n(c)}else{var a=t.filter((function(e){return e}));n(a)}}),[o]),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"w-75 mt-5",children:[Object(m.jsx)("h2",{children:"Resultados"}),Object(m.jsxs)("select",{className:"form-select w-100 ",onChange:function(e){var t=Array.from(e.target.selectedOptions,(function(e){return e.value}));l(t)},value:o,children:[Object(m.jsx)("option",{value:"all",children:"Todos"}),Object(m.jsx)("option",{value:"done",children:"Completados"}),Object(m.jsx)("option",{value:"fallen",children:"Sin Completar"})]})]})})},I=function(){var e=Object(c.useContext)(k).handleDB,t=v("auctions").docs,n=Object(r.a)(t),a=Object(c.useState)(!0),i=Object(s.a)(a,2),o=i[0],l=i[1],d=Object(c.useState)(!0),u=Object(s.a)(d,2),j=u[0],b=u[1],O=Object(c.useState)(!0),x=Object(s.a)(O,2),h=x[0],f=x[1],p=Object(c.useState)([]),g=Object(s.a)(p,2),N=g[0],y=g[1];function w(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}return Object(c.useEffect)((function(){for(var t=function(e){var t=n.filter((function(t){return t.categorie!==N[e]}));n=t},c=0;c<N.length;c++)t(c);e(n)}),[N,o,j,h]),Object(c.useEffect)((function(){setTimeout((function(){l(!o),l(!0)}),200)}),[t]),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"w-75 mt-5",children:[Object(m.jsx)("h2",{children:"Clientes"}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1",value:"oxxo",onChange:function(e){return function(e){l(!o),o?y([].concat(Object(r.a)(N),[e.target.value])):w(N,e.target.value)}(e)},checked:o}),"oxxo"]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1",value:"otro",onChange:function(e){return function(e){b(!j),j?y([].concat(Object(r.a)(N),[e.target.value])):w(N,e.target.value)}(e)},checked:j}),"otro"]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1",value:"pago en efectivo",onChange:function(e){return function(e){f(!h),h?y([].concat(Object(r.a)(N),[e.target.value])):w(N,e.target.value)}(e)},checked:h}),"Pago en Efectivo"]})]})})},U=function(){return Object(m.jsxs)("div",{style:{paddingLeft:"16px"},className:"d-flex justify-content-between flex-column pb-5  ",children:[Object(m.jsx)(T,{}),Object(m.jsx)(A,{}),Object(m.jsx)(I,{})]})},P=(n(94),n(81));Object(E.registerLocale)("es",P.a);var F=function(){var e,t=Object(c.useState)(null),n=Object(s.a)(t,2),a=n[0],o=n[1],l=Object(c.useContext)(O),d=l.currentUser,u=l.globalMsg,j=Object(c.useContext)(k).DB,b=Object(c.useState)(),x=Object(s.a)(b,2),h=x[0],f=x[1],v=function(e){f(e)},g=!!d&&d.email;e="superadmin@gmail.com"===g||"superadmin2@gmail.com"===g||"superadmin3@gmail.com"===g?j.sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1})):[];var N=Object(c.useState)(),y=Object(s.a)(N,2),w=y[0],C=y[1],D=Object(c.useState)(),E=Object(s.a)(D,2),T=E[0],A=E[1],I=Object(c.useState)([]),P=Object(s.a)(I,2),F=P[0],B=P[1],R=F.filter((function(e){return e})).length,H=Object(c.useState)(),z=Object(s.a)(H,2),G=z[0],V=z[1],q=Object(c.useState)([]),K=Object(s.a)(q,2),X=(K[0],K[1]),J=Object(c.useState)(),W=Object(s.a)(J,2),_=W[0],Q=W[1],Y=Object(c.useState)(),Z=Object(s.a)(Y,2),$=Z[0],ee=Z[1],te=Object(c.useState)([]),ne=Object(s.a)(te,2),ce=ne[0],ae=ne[1],re=null===_||void 0===_?void 0:_.sort((function(e,t){return e.duration-t.duration})).sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1})),se=Object(c.useState)(!0),ie=Object(s.a)(se,2),oe=ie[0],le=ie[1],de=Object(c.useState)(!0),ue=Object(s.a)(de,2),je=ue[0],be=ue[1],me=Object(c.useState)(!0),Oe=Object(s.a)(me,2),xe=Oe[0],he=Oe[1],fe=Object(c.useState)(!0),ve=Object(s.a)(fe,2),pe=ve[0],ge=ve[1],Ne=Object(c.useState)([]),ye=Object(s.a)(Ne,2),we=ye[0],Ce=ye[1];function Se(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}Object(c.useEffect)((function(){for(var e=function(e){var t=re.filter((function(t){return t.categorie!==we[e]}));re=t},t=0;t<we.length;t++)e(t);ae(re)}),[we,oe,je,xe,pe]);var ke=Date.now()-864e5,De=Date.now()-36e5,Ee=Date.now()-6e4,Le=Object(c.useState)(),Me=Object(s.a)(Le,2),Te=Me[0],Ae=Me[1],Ie=Object(c.useState)(1),Ue=Object(s.a)(Ie,2),Pe=Ue[0],Fe=Ue[1],Be=6e4*Pe,Re=e.filter((function(e){return void 0!==e})).filter((function(e){return!1===e.completed}));Object(c.useEffect)((function(){var e=Re.filter((function(e){return e.duration>Ee-Be})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());Ae(n)}),[Pe]);var He=Object(c.useState)(),ze=Object(s.a)(He,2),Ge=ze[0],Ve=ze[1],qe=Object(c.useState)(),Ke=Object(s.a)(qe,2),Xe=Ke[0],Je=Ke[1],We=Object(c.useState)(1),_e=Object(s.a)(We,2),Qe=_e[0],Ye=_e[1],Ze=36e5*Qe;Object(c.useEffect)((function(){var e=Re.filter((function(e){return e.duration>De-Ze})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());Je(n)}),[Qe]);var $e=F;_?($e=_.filter((function(e){return!1!==e})),ce.length>0&&($e=ce.filter((function(e){return!1!==e})))):F&&($e=F.sort((function(e,t){return e.duration-t.duration})).sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1})));var et=[];return F.length>0&&(et=$e),Object(m.jsxs)("div",{className:"container-fluid",children:[a&&Object(m.jsx)(S,{auction:a,setAuction:o}),Object(m.jsx)("div",{style:{zIndex:"9999999"},className:"text-center w-50 position-fixed top-10 start-50 translate-middle",children:u&&Object(m.jsx)(i.a,{variant:"danger",children:u})}),g&&Object(m.jsxs)("div",{className:"row bg-secondary pt-4 pb-3",children:[Object(m.jsxs)("div",{className:"text-white bg-primary mb-3 p-1 blue",children:[Object(m.jsxs)("span",{style:{marginLeft:"20px"},children:[Object(m.jsx)("span",{className:"p-1",children:R})," Viajes el Dia: ",w]}),Object(m.jsxs)("span",{className:(null===_||void 0===_?void 0:_.length)>0?"mx-5":"d-none",children:[Object(m.jsx)("span",{className:"bg-danger p-1",children:null===_||void 0===_?void 0:_.filter((function(e){return!1===e.completed})).length})," ","Viajes Sin Completar de KL ",G]})]}),Object(m.jsx)("div",{className:"col-1"}),Object(m.jsx)("div",{className:(null===_||void 0===_?void 0:_.length)>0?"d-none":"col-md-3 text-center mb-4 me-5",children:Object(m.jsx)(L.a,{selected:T,onChange:function(e){A(e);var t=null===e||void 0===e?void 0:e.getTime(),n=t+864e5,c=new Date(t).toLocaleDateString("es-CL",{weekday:"long",year:"numeric",month:"short",day:"numeric"});C(c);var a=j.map((function(e,c){if(e.duration>t&&e.duration<n)return e}));B(a)},onFocus:function(){B([])},locale:"es",className:"pickers mb-3 form-control mt-2 w-100 bg-secondary",dateFormat:"dd 'de' MMMM 'de' yyyy"})}),Object(m.jsx)("div",{className:(null===F||void 0===F?void 0:F.length)>0?"col-md-1 fs-2 row-back":"d-none",onClick:function(){return location.reload()},children:"\ud83d\udd19"}),Object(m.jsx)("div",{className:"col-md-3 text-center",children:Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),X(G);var t=F.filter((function(e){return void 0!==e})).map((function(e){return e.email===G+"@gmail.com"&&e}));Q(t)},children:Object(m.jsx)("input",{type:"text",onChange:function(e){V(e.target.value),ae([])},value:G,className:F.length>0?"w-100 form-control mt-2":"d-none",style:{width:"0"},placeholder:"Buscar por KL"})})}),Object(m.jsx)("div",{className:"col-1"}),Object(m.jsx)("div",{className:(null===F||void 0===F?void 0:F.length)>0?"col-md-3 mt-2":"d-none",children:Object(m.jsxs)("div",{className:(null===_||void 0===_?void 0:_.length)>0?"w-75 fr":"d-none",onChange:function(e){return function(e){ee(e),ae([]);var t=null===_||void 0===_?void 0:_.filter((function(e){return!1!==e})),n=t;"completados"===$?(n=t.filter((function(e){return!0!==e.completed})),ae(n)):(n=t.filter((function(e){return!1!==e.completed})),ae(n))}(e.target.value)},children:[Object(m.jsx)("input",{type:"button",className:"btn text-white btn-outline-dark",name:"drone",value:"Todos",onClick:function(){return ae([])}}),Object(m.jsxs)("label",{className:"btn text-white btn-outline-dark my-2",children:[Object(m.jsx)("input",{type:"radio",value:"completados",name:"drone",className:"d-none"}),"Completados"]}),Object(m.jsxs)("label",{className:"btn text-white btn-outline-dark",children:[Object(m.jsx)("input",{type:"radio",value:"nocompletados",name:"drone",className:"d-none"}),"Incompletos"]})]})}),Object(m.jsx)("div",{className:(null===_||void 0===_?void 0:_.length)>0?"col-md-3 mt-2":"d-none",children:Object(m.jsxs)("div",{className:"w-75 mt-0 ",style:{marginLeft:"12.5%"},children:[Object(m.jsxs)("label",{className:"text-white mb-2 mt-1",children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1",value:"oxxo",onChange:function(e){return function(e){le(!oe),oe?Ce([].concat(Object(r.a)(we),[e.target.value])):Se(we,e.target.value)}(e)},checked:oe}),"OXXO"]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"text-white mb-2",children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1",value:"otro",onChange:function(e){return function(e){be(!je),je?Ce([].concat(Object(r.a)(we),[e.target.value])):Se(we,e.target.value)}(e)},checked:je}),"Otro"]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"text-white",children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1 mb-3",value:"pago en efectivo",onChange:function(e){return function(e){he(!xe),xe?Ce([].concat(Object(r.a)(we),[e.target.value])):Se(we,e.target.value)}(e)},checked:xe}),"Pagos en Efectivo"]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"text-white",children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1 mb-4",value:"taller",onChange:function(e){return function(e){ge(!pe),pe?Ce([].concat(Object(r.a)(we),[e.target.value])):Se(we,e.target.value)}(e)},checked:pe}),"Taller"]})]})})]}),d&&Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"d-flex flex-row justify-content-evenly p-4",children:[Object(m.jsx)("input",{type:"button",className:(null===F||void 0===F?void 0:F.length)>0?"d-none":"btn btn-primary",value:"Ultimo Minuto",onClick:function(){var e=Re.filter((function(e){return e.duration>Ee-Be})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());Ae(n),Ve([]),Je([])}}),Object(m.jsx)("input",{type:"button",className:(null===F||void 0===F?void 0:F.length)>0?"d-none":"btn btn-primary mx-1",value:"Ultima Hora",onClick:function(){var e=Re.filter((function(e){return e.duration>De})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());Je(n),Ae([]),Ve([])}}),Object(m.jsx)("input",{type:"button",className:(null===F||void 0===F?void 0:F.length)>0?"d-none":"btn btn-primary",value:"Ultimas 24 Hrs",onClick:function(){var e=Re.filter((function(e){return e.duration>ke})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());Ve(n),Ae([]),Je([])}})]}),Object(m.jsxs)("div",{className:(null===F||void 0===F?void 0:F.length)>0?"d-none":(null===Te||void 0===Te?void 0:Te.length)>0?"p-1 mb-3":"d-none",children:[Object(m.jsxs)("h4",{className:"p-1 bg-secondary text-white",children:["Taxistas con Viajes sin Completar desde el Ultimo Minuto +",Object(m.jsx)("input",{type:"number",className:"mx-5",onChange:function(e){Fe(e.target.value)},value:Pe})]}),Object(m.jsx)("div",{className:"p-3 text-center mb-3",children:null===Te||void 0===Te?void 0:Te.map((function(e){return Object(m.jsx)("span",{className:"border border-danger mx-2 p-2 bg-white",children:e.email.slice(0,-10)})}))})]}),Object(m.jsxs)("div",{className:(null===F||void 0===F?void 0:F.length)>0?"d-none":(null===Xe||void 0===Xe?void 0:Xe.length)>0?"p-1 mb-3":"d-none",children:[Object(m.jsxs)("h4",{className:"p-1 bg-secondary text-white",children:["Taxistas con Viajes sin Completar de la Ultima Hora +",Object(m.jsx)("input",{type:"number",className:"mx-5",onChange:function(e){Ye(e.target.value)},value:Qe})]}),Object(m.jsx)("div",{className:"p-3 text-center mb-3",children:null===Xe||void 0===Xe?void 0:Xe.map((function(e){return Object(m.jsx)("span",{className:"border border-danger mx-2 p-2 bg-white",children:e.email.slice(0,-10)})}))})]}),Object(m.jsxs)("div",{className:(null===F||void 0===F?void 0:F.length)>0?"d-none":(null===Ge||void 0===Ge?void 0:Ge.length)>0?"p-1 mb-3":"d-none",children:[Object(m.jsx)("h4",{className:"p-2 bg-secondary text-white",children:"Taxistas con viajes sin Completar de las Ultimas 24 Horas"}),Object(m.jsx)("div",{className:"p-3 text-center mb-3",children:null===Ge||void 0===Ge?void 0:Ge.map((function(e){return Object(m.jsx)("span",{className:"border border-danger mx-2 p-2 bg-white",children:e.email.slice(0,-10)})}))})]})]}),j&&Object(m.jsxs)("div",{className:"row row-cols-1 row-cols-md-3 row-cols-lg-4 py-4 px-5 g-3 border mt-1 ",children:[d&&Object(m.jsx)("div",{className:(F.length,"d-none"),children:Object(m.jsx)(U,{})}),et.filter((function(e){return void 0!==e})).map((function(e){return Object(m.jsx)(p,{item:e,handleState:v},e.id)}))]}),Object(m.jsx)(M,{itemState:h})]})},B=n.p+"static/media/canal10.24a72002.png",R=n(155),H=n(156),z=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),l=o[0],d=o[1],u=Object(c.useRef)(),j=Object(c.useRef)(),b=Object(c.useContext)(O).login,x=function(){return a(!1)},f=function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),d(""),e.prev=2,e.next=5,b(u.current.value,j.current.value);case 5:x(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),d("Invalid login");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{onClick:function(){return a(!0)},className:"btn btn-outline-secondary mx-2",children:"Entrar"}),Object(m.jsx)(R.a,{centered:!0,show:n,onHide:x,children:Object(m.jsxs)("form",{onSubmit:f,children:[Object(m.jsx)(R.a.Header,{children:Object(m.jsx)(R.a.Title,{children:"Entrar"})}),Object(m.jsxs)(R.a.Body,{children:[l&&Object(m.jsx)(i.a,{variant:"danger",children:l}),Object(m.jsxs)(H.a.Group,{children:[Object(m.jsx)(H.a.Label,{children:"Email "}),Object(m.jsx)(H.a.Control,{type:"email",required:!0,ref:u})]}),Object(m.jsxs)(H.a.Group,{children:[Object(m.jsx)(H.a.Label,{children:"Password"}),Object(m.jsx)(H.a.Control,{type:"password",required:!0,ref:j})]})]}),Object(m.jsxs)(R.a.Footer,{children:[Object(m.jsx)(h.a,{variant:"secondary",onClick:x,children:"Cancelar"}),Object(m.jsx)(h.a,{variant:"primary",type:"submit",children:"Entrar"})]})]})})]})},G=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),l=o[0],d=o[1],u=Object(c.useRef)(),j=Object(c.useRef)(),b=Object(c.useRef)(),x=Object(c.useContext)(O).register,f=function(){return a(!1)},v=function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),d(""),j.current.value===b.current.value){e.next=4;break}return e.abrupt("return",d("Passwords does not match"));case 4:return e.prev=4,e.next=7,x(u.current.value,j.current.value);case 7:f(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),d(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(R.a,{centered:!0,show:n,onHide:f,children:Object(m.jsxs)("form",{onSubmit:v,children:[Object(m.jsx)(R.a.Header,{children:Object(m.jsx)(R.a.Title,{children:"Registro"})}),Object(m.jsxs)(R.a.Body,{children:[l&&Object(m.jsx)(i.a,{variant:"danger",children:l}),Object(m.jsxs)(H.a.Group,{children:[Object(m.jsx)(H.a.Label,{children:"Email"}),Object(m.jsx)(H.a.Control,{type:"email",required:!0,ref:u})]}),Object(m.jsxs)(H.a.Group,{children:[Object(m.jsx)(H.a.Label,{children:"Password"}),Object(m.jsx)(H.a.Control,{type:"password",required:!0,ref:j})]}),Object(m.jsxs)(H.a.Group,{children:[Object(m.jsx)(H.a.Label,{children:"Confirmar Password"}),Object(m.jsx)(H.a.Control,{type:"password",required:!0,ref:b})]})]}),Object(m.jsxs)(R.a.Footer,{children:[Object(m.jsx)(h.a,{variant:"secondary",onClick:f,children:"Cancelar"}),Object(m.jsx)(h.a,{variant:"primary",type:"submit",children:"Registrar"})]})]})})})},V=function(){var e=Object(c.useContext)(O),t=e.currentUser,n=e.logout;return Object(m.jsx)("nav",{className:"container-fluid navbar navbar-light border",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsxs)("div",{className:"navbar-brand",children:[Object(m.jsx)("img",{src:B,alt:"logo",height:"50"})," ADMIN"]}),Object(m.jsx)("div",{className:"d-flex",children:Object(m.jsx)("div",{className:"col",children:t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"btn btn-success mx-2 disabled",children:t.email}),Object(m.jsx)("div",{onClick:function(){return n()},className:"btn btn-outline-secondary mx-2",children:"SALIR"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(z,{}),Object(m.jsx)(G,{})]})})})]})})},q=function(){return Object(m.jsx)(x,{children:Object(m.jsxs)(D,{children:[Object(m.jsx)(V,{}),Object(m.jsx)(F,{})]})})};n(139);Object(a.render)(Object(m.jsx)(q,{}),document.getElementById("root"))},94:function(e,t,n){}},[[141,1,2]]]);
//# sourceMappingURL=main.2d1384e0.chunk.js.map