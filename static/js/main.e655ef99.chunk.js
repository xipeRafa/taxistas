(this.webpackJsonpauctioneer=this.webpackJsonpauctioneer||[]).push([[0],{141:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(23),r=n(14),s=n(10),i=n(157),o=n(76),l=(n(88),n(145),n(146),o.a.initializeApp({apiKey:"AIzaSyB3s6QjYWR6EL45XSK7ANP-D_1I-DZ9eYg",authDomain:"taxis-e44d6.firebaseapp.com",projectId:"taxis-e44d6",storageBucket:"taxis-e44d6.appspot.com",messagingSenderId:"603667662446",appId:"1:603667662446:web:0014b763a2a4acca92487f"})),d=o.a.firestore.FieldValue.serverTimestamp,u=l.firestore(),j=l.storage(),b=l.auth(),m=n(2),O=Object(c.createContext)(),x=function(e){var t=e.children,n=Object(c.useState)(null),a=Object(s.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(!0),l=Object(s.a)(o,2),d=l[0],j=l[1],x=Object(c.useState)(""),h=Object(s.a)(x,2),p=h[0],v=h[1];return Object(c.useEffect)((function(){return b.onAuthStateChanged((function(e){i(e),j(!1)}))}),[]),Object(c.useEffect)((function(){var e=setTimeout((function(){return v("")}),5e3);return function(){return clearTimeout(e)}}),[p]),Object(m.jsx)(O.Provider,{value:{currentUser:r,register:function(e,t){return b.createUserWithEmailAndPassword(e,t)},login:function(e,t){return b.signInWithEmailAndPassword(e,t)},logout:function(){return b.signOut()},bidAuction:function(e){return u.collection("auctions").doc(e).update({acuerdo:!0})},noteContext:function(e,t){return u.collection("auctions").doc(e).update({note:t})},endAuction:function(e){return u.collection("auctions").doc(e).delete()},globalMsg:p},children:!d&&t})},h=n(153),p=n(43),v=function(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){var t=u.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(p.a)(Object(p.a)({},e.data()),{},{id:e.id}))})),r(t)}));return function(){return t()}}),[e]),{docs:a}},f=function(e){var t,n,a,r,s,i=e.item,o=e.handleState,l=Object(c.useContext)(O),d=l.currentUser,u=l.bidAuction;v("auctions").docs.map((function(e){e.id===i.id&&(a=e.duration),e.id===i.id&&(r=e.completed),e.id===i.id&&(s=e.acuerdo)}));var j=new Date(a).toLocaleTimeString("es-CL"),b=new Date(a).toLocaleDateString("es-CL",{weekday:"short",year:"numeric",month:"short",day:"numeric"});return Object(m.jsx)("div",{className:"col",children:d&&Object(m.jsxs)("div",{className:"card shadow-sm",children:[Object(m.jsx)("div",{onClick:function(){o(i),window.scrollTo(0,document.body.scrollHeight,{behavior:"smooth"})},style:{height:"140px",backgroundImage:"url(".concat(i.imgUrl,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:"w-100 mt-4"}),Object(m.jsxs)("div",{className:"card-body p-4",children:[Object(m.jsxs)("p",{className:"h5",children:[Object(m.jsx)("span",{className:"text-secondary",children:"KL "})," ",null===(t=i.email)||void 0===t?void 0:t.slice(0,-10)]}),Object(m.jsx)("div",{className:"d-flex jsutify-content-between align-item-center",children:Object(m.jsxs)("h5",{children:[Object(m.jsx)("span",{className:"text-secondary",children:"Cliente"})," ",i.categorie]})}),Object(m.jsx)("div",{children:Object(m.jsxs)("p",{children:[b,", ",j.slice(0,-3)]})}),Object(m.jsxs)("p",{className:"card-text",children:[null===i||void 0===i||null===(n=i.description)||void 0===n?void 0:n.slice(0,20),"..."]}),Object(m.jsx)("div",{className:"d-flex justify-content-between align-item-center",children:Object(m.jsx)(h.a,{className:r?"btn btn-primary w-100":s?"btn btn-success w-100":"btn btn-danger w-100",onClick:function(){u(i.id),o(i)},children:r?"Completado":s?"Sin Completar \u2713":"Sin Completar \u2718"})})]})]})})},g=n(154),N=n(31),y=n.n(N),w=n(36),C=function(e){var t=Object(c.useState)(0),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(null),o=Object(s.a)(i,2),l=o[0],b=o[1];return Object(c.useState)((function(){var t=j.ref(e.itemImage.name),n=u.collection("auctions");t.put(e.itemImage).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t)}),(function(e){console.log(e)}),Object(w.a)(y.a.mark((function c(){var a,r;return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t.getDownloadURL();case 2:return a=c.sent,r=d(),delete e.itemImage,c.next=7,n.add(Object(p.a)(Object(p.a)({},e),{},{createdAt:r,imgUrl:a}));case 7:b(!0);case 8:case"end":return c.stop()}}),c)}))))}),[e]),{progress:a,isCompleted:l}},S=function(e){var t=e.auction,n=e.setAuction,a=C(t),r=a.progress,s=a.isCompleted;return Object(c.useEffect)((function(){s&&n(null)}),[s,n]),Object(m.jsx)(g.a.div,{style:{height:"5px",background:"black"},initial:{width:0},animate:{width:"".concat(r,"%")}})},k=Object(c.createContext)(),D=function(e){var t=e.children,n=v("auctions").docs,a=Object(r.a)(n),i=Object(c.useState)(a),o=Object(s.a)(i,2),l=o[0],d=o[1];return Object(m.jsx)(k.Provider,{value:{handleDB:function(e){d(e)},DB:l},children:t})},L=n(77),E=n.n(L),M=(n(93),function(e){var t,n=e.itemState,a=void 0===n?{title:"Inicia sesi\xf3n",imgUrl:"https://image.shutterstock.com/image-photo/indifferent-puzzled-female-shruggs-shoulders-600w-1164353026.jpg"}:n,r=v("auctions").docs,i=Object(c.useContext)(O).noteContext,o=a.title,l="";r.map((function(e){e.id===a.id&&(l=e.email),e.id===a.id&&(t=e.duration)}));var d=new Date(t).toLocaleTimeString("es-CL"),u=new Date(t).toLocaleDateString("es-CL",{weekday:"long",year:"numeric",month:"short",day:"numeric"}),j=Object(c.useState)(),b=Object(s.a)(j,2),x=b[0],h=b[1];return Object(m.jsxs)("div",{className:"m-5 ",children:[Object(m.jsx)("div",{className:a.completed?"bg-primary text-white p-2 text-center":"bg-danger text-white p-2 text-center",children:a.completed?"COMPLETADO":"SIN COMPLETAR"}),Object(m.jsxs)("div",{className:"card pb-0",style:{backgroundColor:"rgb(230,230,230)"},children:[Object(m.jsx)("div",{style:{height:"240px",backgroundImage:"url(".concat(a.imgUrl,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:"w-100 mb-4 mt-2"}),"Inicia sesi\xf3n"!==o&&Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsxs)("h5",{children:[Object(m.jsx)("span",{className:"text-secondary",children:"KL: "})," ",l.slice(0,-10)]}),Object(m.jsxs)("h5",{children:[Object(m.jsx)("span",{className:"text-secondary",children:"Unidad: "})," ",a.title]}),Object(m.jsxs)("h5",{children:[Object(m.jsx)("span",{className:"text-secondary",children:"Cliente: "})," ",a.categorie]}),Object(m.jsxs)("h5",{children:[Object(m.jsx)("span",{className:"text-secondary",children:"Fecha: "})," ",u,", ",d]}),Object(m.jsxs)("h5",{className:"card-text",children:[Object(m.jsx)("span",{className:"text-secondary",children:"Comentarios: "})," ",a.description]}),Object(m.jsxs)("h5",{className:void 0!==a.note?"card-text":"d-none",children:[Object(m.jsx)("span",{className:"text-secondary",children:"Nota: "})," ",a.note]})]}),"Inicia sesi\xf3n"!==o&&Object(m.jsx)("div",{className:a.completed?"d-none":"p-3",children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(a.id,x),a.note=x,h("")},className:"d-flex",children:[Object(m.jsx)("input",{type:"text",className:"form-control me-2",onChange:function(e){h(e.target.value)},placeholder:"Nota:",value:x}),Object(m.jsx)("input",{type:"button",className:(null===x||void 0===x?void 0:x.length)<1?"btn btn-info text-white":"d-none",value:void 0!==a.note?"Editar":"Crear Nota",onClick:function(){h(a.note)}}),Object(m.jsx)("input",{type:"submit",value:void 0!==a.note?"Guardar":"Crear Nota",className:(null===x||void 0===x?void 0:x.length)>1?"btn btn-info text-white":"d-none"})]})})]}),Object(m.jsx)("div",{className:a.completed?"bg-primary text-white p-2 text-center":"bg-danger text-white p-2 text-center",children:a.completed?"COMPLETADO":"SIN COMPLETAR"})]})}),A=function(){var e=v("auctions").docs,t=Object(r.a)(e),n=Object(c.useContext)(k).handleDB,a=Object(c.useState)([]),i=Object(s.a)(a,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){if("DateMaxToMin"!==o[0])if("Date"!==o[0]);else{var e=t.sort((function(e,t){return e.createdAt-t.createdAt}));n(e)}else{var c=t.sort((function(e,t){return t.createdAt-e.createdAt}));n(c)}}),[o]),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"w-75",children:[Object(m.jsx)("h2",{children:"Filtros"}),Object(m.jsxs)("select",{className:"form-select w-100 ",onChange:function(e){var t=Array.from(e.target.selectedOptions,(function(e){return e.value}));l(t)},value:o,children:[Object(m.jsx)("option",{children:"Filtrar por"}),Object(m.jsx)("option",{value:"Date",children:"Fecha MIN to MAX"}),Object(m.jsx)("option",{value:"DateMaxToMin",children:"Fecha Max to Min"})]})]})})},T=function(){var e=v("auctions").docs,t=Object(r.a)(e),n=Object(c.useContext)(k).handleDB,a=Object(c.useState)([]),i=Object(s.a)(a,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){if("all"!==o[0])if("done"!==o[0])if("fallen"!==o[0]);else{var e=t.filter((function(e){return!1===e.completed}));n(e)}else{var c=t.filter((function(e){return!0===e.completed}));n(c)}else{var a=t.filter((function(e){return e}));n(a)}}),[o]),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"w-75 mt-5",children:[Object(m.jsx)("h2",{children:"Resultados"}),Object(m.jsxs)("select",{className:"form-select w-100 ",onChange:function(e){var t=Array.from(e.target.selectedOptions,(function(e){return e.value}));l(t)},value:o,children:[Object(m.jsx)("option",{value:"all",children:"Todos"}),Object(m.jsx)("option",{value:"done",children:"Completados"}),Object(m.jsx)("option",{value:"fallen",children:"Sin Completar"})]})]})})},I=function(){var e=Object(c.useContext)(k).handleDB,t=v("auctions").docs,n=Object(r.a)(t),a=Object(c.useState)(!0),i=Object(s.a)(a,2),o=i[0],l=i[1],d=Object(c.useState)(!0),u=Object(s.a)(d,2),j=u[0],b=u[1],O=Object(c.useState)(!0),x=Object(s.a)(O,2),h=x[0],p=x[1],f=Object(c.useState)([]),g=Object(s.a)(f,2),N=g[0],y=g[1];function w(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}return Object(c.useEffect)((function(){for(var t=function(e){var t=n.filter((function(t){return t.categorie!==N[e]}));n=t},c=0;c<N.length;c++)t(c);e(n)}),[N,o,j,h]),Object(c.useEffect)((function(){setTimeout((function(){l(!o),l(!0)}),200)}),[t]),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"w-75 mt-5",children:[Object(m.jsx)("h2",{children:"Clientes"}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1",value:"oxxo",onChange:function(e){return function(e){l(!o),o?y([].concat(Object(r.a)(N),[e.target.value])):w(N,e.target.value)}(e)},checked:o}),"oxxo"]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1",value:"otro",onChange:function(e){return function(e){b(!j),j?y([].concat(Object(r.a)(N),[e.target.value])):w(N,e.target.value)}(e)},checked:j}),"otro"]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1",value:"pago en efectivo",onChange:function(e){return function(e){p(!h),h?y([].concat(Object(r.a)(N),[e.target.value])):w(N,e.target.value)}(e)},checked:h}),"Pago en Efectivo"]})]})})},P=function(){return Object(m.jsxs)("div",{style:{paddingLeft:"16px"},className:"d-flex justify-content-between flex-column pb-5  ",children:[Object(m.jsx)(A,{}),Object(m.jsx)(T,{}),Object(m.jsx)(I,{})]})},U=function(){var e,t=v("oxxoLider").docs;t.map((function(t){e=t.duration}));var n=new Date(e).toLocaleTimeString("es-CL"),c=new Date(e).toLocaleDateString("es-CL",{weekday:"short",year:"numeric",month:"short",day:"numeric"});return Object(m.jsx)("div",{className:"col border mb-5 p-3",style:{height:"700px",overflow:"hidden",overflowY:"scroll"},children:t.map((function(e){return Object(m.jsx)("div",{className:"card shadow-sm mb-2",children:Object(m.jsxs)("div",{className:"card-body px-4 pb-2 ",children:[Object(m.jsxs)("div",{className:"border row border-secondary",children:[Object(m.jsx)("span",{className:"bg-secondary p-1 col-md-3",children:Object(m.jsxs)("div",{className:"text-white px-2",children:[" Tienda ",e.tienda," "]})}),Object(m.jsxs)("span",{className:"p-1 col-md-3",children:[Object(m.jsx)("span",{className:"text-secondary px-2",children:"Horario "})," ",e.hora]}),Object(m.jsxs)("span",{className:"p-1 col-md-3",children:[Object(m.jsx)("span",{className:"text-secondary px-2",children:"Destino "})," ",e.destino]}),Object(m.jsx)("span",{className:"p-1 col-md-3 ",children:Object(m.jsxs)("span",{className:"px-2",children:[c,", ",n.slice(0,-3)]})})]}),Object(m.jsxs)("div",{className:"mt-1",children:[Object(m.jsx)("span",{className:"text-secondary",children:"Pasajeros: "})," ",e.pasajeros]}),Object(m.jsxs)("div",{className:"mt-1",children:[Object(m.jsx)("span",{className:"text-secondary",children:"Comentarios: "})," ",null===e||void 0===e?void 0:e.description]})]})},e.id)}))})},R=(n(94),n(81));Object(L.registerLocale)("es",R.a);var F=function(){var e,t=Object(c.useState)(null),n=Object(s.a)(t,2),a=n[0],o=n[1],l=Object(c.useContext)(O),d=l.currentUser,u=l.globalMsg,j=Object(c.useContext)(k).DB,b=Object(c.useState)(),x=Object(s.a)(b,2),h=x[0],p=x[1],v=function(e){p(e)},g=!!d&&d.email;e="superadmin@gmail.com"===g||"superadmin2@gmail.com"===g||"superadmin3@gmail.com"===g?j.sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1})):[];var N=Object(c.useState)(),y=Object(s.a)(N,2),w=y[0],C=y[1],D=Object(c.useState)(),L=Object(s.a)(D,2),A=L[0],T=L[1],I=Object(c.useState)([]),R=Object(s.a)(I,2),F=R[0],B=R[1],H=F.filter((function(e){return e})).length,z=Object(c.useState)(),G=Object(s.a)(z,2),K=G[0],q=G[1],V=Object(c.useState)([]),X=Object(s.a)(V,2),W=(X[0],X[1]),Y=Object(c.useState)(),J=Object(s.a)(Y,2),_=J[0],Q=J[1],Z=Object(c.useState)(),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ne=Object(c.useState)([]),ce=Object(s.a)(ne,2),ae=ce[0],re=ce[1],se=null===_||void 0===_?void 0:_.sort((function(e,t){return e.duration-t.duration})).sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1})),ie=Object(c.useState)(!0),oe=Object(s.a)(ie,2),le=oe[0],de=oe[1],ue=Object(c.useState)(!0),je=Object(s.a)(ue,2),be=je[0],me=je[1],Oe=Object(c.useState)(!0),xe=Object(s.a)(Oe,2),he=xe[0],pe=xe[1],ve=Object(c.useState)([]),fe=Object(s.a)(ve,2),ge=fe[0],Ne=fe[1];function ye(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}Object(c.useEffect)((function(){for(var e=function(e){var t=se.filter((function(t){return t.categorie!==ge[e]}));se=t},t=0;t<ge.length;t++)e(t);re(se)}),[ge,le,be,he]);var we=Date.now()-864e5,Ce=Date.now()-36e5,Se=Date.now()-6e4,ke=Object(c.useState)(),De=Object(s.a)(ke,2),Le=De[0],Ee=De[1],Me=Object(c.useState)(1),Ae=Object(s.a)(Me,2),Te=Ae[0],Ie=Ae[1],Pe=6e4*Te,Ue=e.filter((function(e){return void 0!==e})).filter((function(e){return!1===e.completed}));Object(c.useEffect)((function(){var e=Ue.filter((function(e){return e.duration>Se-Pe})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());Ee(n)}),[Te]);var Re=Object(c.useState)(),Fe=Object(s.a)(Re,2),Be=Fe[0],He=Fe[1],ze=Object(c.useState)(),Ge=Object(s.a)(ze,2),Ke=Ge[0],qe=Ge[1],Ve=Object(c.useState)(1),Xe=Object(s.a)(Ve,2),We=Xe[0],Ye=Xe[1],Je=36e5*We;Object(c.useEffect)((function(){var e=Ue.filter((function(e){return e.duration>Ce-Je})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());qe(n)}),[We]);var _e=F;_?(_e=_.filter((function(e){return!1!==e})),ae.length>0&&(_e=ae.filter((function(e){return!1!==e})))):F&&(_e=F.sort((function(e,t){return e.duration-t.duration})).sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1})));var Qe=[];return F.length>0&&(Qe=_e),Object(m.jsxs)("div",{className:"container-fluid",children:[a&&Object(m.jsx)(S,{auction:a,setAuction:o}),Object(m.jsx)("div",{style:{zIndex:"9999999"},className:"text-center w-50 position-fixed top-10 start-50 translate-middle",children:u&&Object(m.jsx)(i.a,{variant:"danger",children:u})}),g&&Object(m.jsxs)("div",{className:"row bg-secondary pt-4 pb-3",children:[Object(m.jsxs)("div",{className:"text-white bg-primary mb-3 p-1 blue",children:[Object(m.jsxs)("span",{style:{marginLeft:"20px"},children:[Object(m.jsx)("span",{className:"p-1",children:H})," Viajes el Dia: ",w]}),Object(m.jsxs)("span",{className:(null===_||void 0===_?void 0:_.length)>0?"mx-5":"d-none",children:[Object(m.jsx)("span",{className:"bg-danger p-1",children:null===_||void 0===_?void 0:_.filter((function(e){return!1===e.completed})).length})," ","Viajes Sin Completar de KL ",K]})]}),Object(m.jsx)("div",{className:"col-1"}),Object(m.jsx)("div",{className:(null===_||void 0===_?void 0:_.length)>0?"d-none":"col-sm-3 text-center mb-4 me-5",children:Object(m.jsx)(E.a,{selected:A,onChange:function(e){T(e);var t=null===e||void 0===e?void 0:e.getTime(),n=t+864e5,c=new Date(t).toLocaleDateString("es-CL",{weekday:"long",year:"numeric",month:"short",day:"numeric"});C(c);var a=j.map((function(e,c){if(e.duration>t&&e.duration<n)return e}));B(a)},onFocus:function(){B([])},locale:"es",className:"pickers mb-3 form-control mt-2 w-100 bg-secondary",dateFormat:"dd 'de' MMMM 'de' yyyy"})}),Object(m.jsx)("div",{className:(null===F||void 0===F?void 0:F.length)>0?"col-md-1 fs-2 row-back":"d-none",onClick:function(){return location.reload()},children:"\ud83d\udd19"}),Object(m.jsx)("div",{className:"col-md-3 text-center",children:Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),W(K);var t=F.filter((function(e){return void 0!==e})).map((function(e){return e.email===K+"@gmail.com"&&e}));Q(t)},children:Object(m.jsx)("input",{type:"text",onChange:function(e){q(e.target.value),re([])},value:K,className:F.length>0?"w-100 form-control mt-2":"d-none",style:{width:"0"},placeholder:"Buscar por KL"})})}),Object(m.jsx)("div",{className:"col-1"}),Object(m.jsx)("div",{className:(null===F||void 0===F?void 0:F.length)>0?"col-md-3 mt-2":"d-none",children:Object(m.jsxs)("div",{className:(null===_||void 0===_?void 0:_.length)>0?"w-75 fr":"d-none",onChange:function(e){return function(e){te(e),re([]);var t=null===_||void 0===_?void 0:_.filter((function(e){return!1!==e})),n=t;"completados"===ee?(n=t.filter((function(e){return!0!==e.completed})),re(n)):(n=t.filter((function(e){return!1!==e.completed})),re(n))}(e.target.value)},children:[Object(m.jsx)("input",{type:"button",className:"btn text-white btn-outline-dark",name:"drone",value:"Todos",onClick:function(){return re([])}}),Object(m.jsxs)("label",{className:"btn text-white btn-outline-dark my-2",children:[Object(m.jsx)("input",{type:"radio",value:"completados",name:"drone",className:"d-none"}),"Completados"]}),Object(m.jsxs)("label",{className:"btn text-white btn-outline-dark",children:[Object(m.jsx)("input",{type:"radio",value:"nocompletados",name:"drone",className:"d-none"}),"Incompletos"]})]})}),Object(m.jsx)("div",{className:(null===_||void 0===_?void 0:_.length)>0?"col-md-3 mt-2":"d-none",children:Object(m.jsxs)("div",{className:"w-75 mt-0 ",style:{marginLeft:"12.5%"},children:[Object(m.jsxs)("label",{className:"text-white mb-4 mt-1",children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1",value:"oxxo",onChange:function(e){return function(e){de(!le),le?Ne([].concat(Object(r.a)(ge),[e.target.value])):ye(ge,e.target.value)}(e)},checked:le}),"OXXO"]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"text-white mb-4",children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1",value:"otro",onChange:function(e){return function(e){me(!be),be?Ne([].concat(Object(r.a)(ge),[e.target.value])):ye(ge,e.target.value)}(e)},checked:be}),"Otro"]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"text-white",children:[Object(m.jsx)("input",{type:"checkbox",className:"m-1 mb-4",value:"pago en efectivo",onChange:function(e){return function(e){pe(!he),he?Ne([].concat(Object(r.a)(ge),[e.target.value])):ye(ge,e.target.value)}(e)},checked:he}),"Pagos en Efectivo"]})]})})]}),d&&Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"d-flex flex-row justify-content-evenly p-4",children:[Object(m.jsx)("input",{type:"button",className:(null===F||void 0===F?void 0:F.length)>0?"d-none":"btn btn-primary",value:"Ultimo Minuto",onClick:function(){var e=Ue.filter((function(e){return e.duration>Se-Pe})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());Ee(n),He([]),qe([])}}),Object(m.jsx)("input",{type:"button",className:(null===F||void 0===F?void 0:F.length)>0?"d-none":"btn btn-primary mx-1",value:"Ultima Hora",onClick:function(){var e=Ue.filter((function(e){return e.duration>Ce})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());qe(n),Ee([]),He([])}}),Object(m.jsx)("input",{type:"button",className:(null===F||void 0===F?void 0:F.length)>0?"d-none":"btn btn-primary",value:"Ultimas 24 Hrs",onClick:function(){var e=Ue.filter((function(e){return e.duration>we})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());He(n),Ee([]),qe([])}})]}),Object(m.jsxs)("div",{className:(null===F||void 0===F?void 0:F.length)>0?"d-none":(null===Le||void 0===Le?void 0:Le.length)>0?"p-1 mb-3":"d-none",children:[Object(m.jsxs)("h4",{className:"p-1 bg-secondary text-white",children:["Taxistas con Viajes sin Completar desde el Ultimo Minuto +",Object(m.jsx)("input",{type:"number",className:"mx-5",onChange:function(e){Ie(e.target.value)},value:Te})]}),Object(m.jsx)("div",{className:"p-3 text-center mb-3",children:null===Le||void 0===Le?void 0:Le.map((function(e){return Object(m.jsx)("span",{className:"border border-danger mx-2 p-2 bg-white",children:e.email.slice(0,-10)})}))})]}),Object(m.jsxs)("div",{className:(null===F||void 0===F?void 0:F.length)>0?"d-none":(null===Ke||void 0===Ke?void 0:Ke.length)>0?"p-1 mb-3":"d-none",children:[Object(m.jsxs)("h4",{className:"p-1 bg-secondary text-white",children:["Taxistas con Viajes sin Completar de la Ultima Hora +",Object(m.jsx)("input",{type:"number",className:"mx-5",onChange:function(e){Ye(e.target.value)},value:We})]}),Object(m.jsx)("div",{className:"p-3 text-center mb-3",children:null===Ke||void 0===Ke?void 0:Ke.map((function(e){return Object(m.jsx)("span",{className:"border border-danger mx-2 p-2 bg-white",children:e.email.slice(0,-10)})}))})]}),Object(m.jsxs)("div",{className:(null===F||void 0===F?void 0:F.length)>0?"d-none":(null===Be||void 0===Be?void 0:Be.length)>0?"p-1 mb-3":"d-none",children:[Object(m.jsx)("h4",{className:"p-2 bg-secondary text-white",children:"Taxistas con viajes sin Completar de las Ultimas 24 Horas"}),Object(m.jsx)("div",{className:"p-3 text-center mb-3",children:null===Be||void 0===Be?void 0:Be.map((function(e){return Object(m.jsx)("span",{className:"border border-danger mx-2 p-2 bg-white",children:e.email.slice(0,-10)})}))})]})]}),j&&Object(m.jsxs)("div",{className:"row row-cols-1 row-cols-md-3 row-cols-lg-4 py-4 px-5 g-3 border mt-1 ",children:[d&&Object(m.jsx)("div",{className:(F.length,"d-none"),children:Object(m.jsx)(P,{})}),Qe.filter((function(e){return void 0!==e})).map((function(e){return Object(m.jsx)(f,{item:e,handleState:v},e.id)}))]}),Object(m.jsx)("h2",{className:"mt-2 px-3 mx-1",children:"Pedidos de oxxo"}),Object(m.jsx)(U,{}),Object(m.jsx)(M,{itemState:h})]})},B=n.p+"static/media/canal10.24a72002.png",H=n(155),z=n(156),G=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),l=o[0],d=o[1],u=Object(c.useRef)(),j=Object(c.useRef)(),b=Object(c.useContext)(O).login,x=function(){return a(!1)},p=function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),d(""),e.prev=2,e.next=5,b(u.current.value,j.current.value);case 5:x(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),d("Invalid login");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{onClick:function(){return a(!0)},className:"btn btn-outline-secondary mx-2",children:"Entrar"}),Object(m.jsx)(H.a,{centered:!0,show:n,onHide:x,children:Object(m.jsxs)("form",{onSubmit:p,children:[Object(m.jsx)(H.a.Header,{children:Object(m.jsx)(H.a.Title,{children:"Entrar"})}),Object(m.jsxs)(H.a.Body,{children:[l&&Object(m.jsx)(i.a,{variant:"danger",children:l}),Object(m.jsxs)(z.a.Group,{children:[Object(m.jsx)(z.a.Label,{children:"Email "}),Object(m.jsx)(z.a.Control,{type:"email",required:!0,ref:u})]}),Object(m.jsxs)(z.a.Group,{children:[Object(m.jsx)(z.a.Label,{children:"Password"}),Object(m.jsx)(z.a.Control,{type:"password",required:!0,ref:j})]})]}),Object(m.jsxs)(H.a.Footer,{children:[Object(m.jsx)(h.a,{variant:"secondary",onClick:x,children:"Cancelar"}),Object(m.jsx)(h.a,{variant:"primary",type:"submit",children:"Entrar"})]})]})})]})},K=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),l=o[0],d=o[1],u=Object(c.useRef)(),j=Object(c.useRef)(),b=Object(c.useRef)(),x=Object(c.useContext)(O).register,p=function(){return a(!1)},v=function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),d(""),j.current.value===b.current.value){e.next=4;break}return e.abrupt("return",d("Passwords does not match"));case 4:return e.prev=4,e.next=7,x(u.current.value,j.current.value);case 7:p(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),d(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(H.a,{centered:!0,show:n,onHide:p,children:Object(m.jsxs)("form",{onSubmit:v,children:[Object(m.jsx)(H.a.Header,{children:Object(m.jsx)(H.a.Title,{children:"Registro"})}),Object(m.jsxs)(H.a.Body,{children:[l&&Object(m.jsx)(i.a,{variant:"danger",children:l}),Object(m.jsxs)(z.a.Group,{children:[Object(m.jsx)(z.a.Label,{children:"Email"}),Object(m.jsx)(z.a.Control,{type:"email",required:!0,ref:u})]}),Object(m.jsxs)(z.a.Group,{children:[Object(m.jsx)(z.a.Label,{children:"Password"}),Object(m.jsx)(z.a.Control,{type:"password",required:!0,ref:j})]}),Object(m.jsxs)(z.a.Group,{children:[Object(m.jsx)(z.a.Label,{children:"Confirmar Password"}),Object(m.jsx)(z.a.Control,{type:"password",required:!0,ref:b})]})]}),Object(m.jsxs)(H.a.Footer,{children:[Object(m.jsx)(h.a,{variant:"secondary",onClick:p,children:"Cancelar"}),Object(m.jsx)(h.a,{variant:"primary",type:"submit",children:"Registrar"})]})]})})})},q=function(){var e=Object(c.useContext)(O),t=e.currentUser,n=e.logout;return Object(m.jsx)("nav",{className:"container-fluid navbar navbar-light border",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsxs)("div",{className:"navbar-brand",children:[Object(m.jsx)("img",{src:B,alt:"logo",height:"50"})," ADMIN"]}),Object(m.jsx)("div",{className:"d-flex",children:Object(m.jsx)("div",{className:"col",children:t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"btn btn-success mx-2 disabled",children:t.email}),Object(m.jsx)("div",{onClick:function(){return n()},className:"btn btn-outline-secondary mx-2",children:"SALIR"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(G,{}),Object(m.jsx)(K,{})]})})})]})})},V=function(){return Object(m.jsx)(x,{children:Object(m.jsxs)(D,{children:[Object(m.jsx)(q,{}),Object(m.jsx)(F,{})]})})};n(139);Object(a.render)(Object(m.jsx)(V,{}),document.getElementById("root"))},94:function(e,t,n){}},[[141,1,2]]]);
//# sourceMappingURL=main.e655ef99.chunk.js.map