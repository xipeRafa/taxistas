(this.webpackJsonpauctioneer=this.webpackJsonpauctioneer||[]).push([[0],{62:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(25),a=c(9),s=c(73),i=c(45),o=(c(53),c(63),c(64),i.a.initializeApp({apiKey:"AIzaSyB3s6QjYWR6EL45XSK7ANP-D_1I-DZ9eYg",authDomain:"taxis-e44d6.firebaseapp.com",projectId:"taxis-e44d6",storageBucket:"taxis-e44d6.appspot.com",messagingSenderId:"603667662446",appId:"1:603667662446:web:0014b763a2a4acca92487f"})),l=i.a.firestore.FieldValue.serverTimestamp,j=o.firestore(),u=o.storage(),d=o.auth(),b=c(2),O=Object(n.createContext)(),x=function(e){var t=e.children,c=Object(n.useState)(null),r=Object(a.a)(c,2),s=r[0],i=r[1],o=Object(n.useState)(!0),l=Object(a.a)(o,2),u=l[0],x=l[1],h=Object(n.useState)(""),f=Object(a.a)(h,2),m=f[0],p=f[1];return Object(n.useEffect)((function(){return d.onAuthStateChanged((function(e){i(e),x(!1)}))}),[]),Object(n.useEffect)((function(){var e=setTimeout((function(){return p("")}),5e3);return function(){return clearTimeout(e)}}),[m]),Object(b.jsx)(O.Provider,{value:{currentUser:s,register:function(e,t){return d.createUserWithEmailAndPassword(e,t)},login:function(e,t){return d.signInWithEmailAndPassword(e,t)},logout:function(){return d.signOut()},bidAuction:function(e){return j.collection("auctions").doc(e).update({completed:!0})},endAuction:function(e){return j.collection("auctions").doc(e).delete()},globalMsg:m},children:!u&&t})},h=c(16),f=c.n(h),m=c(23),p=c(71),v=c(68),g=c(48),y=c(72),C=c(69),w=function(e){var t=e.setAuction,c=Object(n.useState)(!1),r=Object(a.a)(c,2),i=r[0],o=r[1],l=Object(n.useState)(""),j=Object(a.a)(l,2),u=j[0],d=j[1],x=Object(n.useRef)(),h=Object(n.useRef)(),w=Object(n.useRef)(),N=Object(n.useRef)(),S=Object(n.useRef)(),k=Object(n.useContext)(O).currentUser,P=function(){return o(!1)},A=["image/png","image/jpeg","image/jpg"],D=function(){var e=Object(m.a)(f.a.mark((function e(c){var n,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),d(""),A.includes(N.current.files[0].type)){e.next=4;break}return e.abrupt("return",d("Please use a valid image"));case 4:n=new Date,r=n.setHours(n.getHours()),a={email:k.email,title:x.current.value,description:h.current.value,curPrice:w.current.value,duration:r,itemImage:N.current.files[0],categorie:S.current.value,completed:!1},t(a),P();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"col d-flex justify-content-center my-3",children:Object(b.jsx)("div",{onClick:function(){return o(!0)},className:"btn btn-success mx-2",children:"+ viaje"})}),Object(b.jsx)(p.a,{centered:!0,show:i,onHide:P,children:Object(b.jsxs)("form",{onSubmit:D,children:[Object(b.jsx)(p.a.Header,{children:Object(b.jsx)(p.a.Title,{children:"Guardar Viaje"})}),Object(b.jsxs)(p.a.Body,{children:[u&&Object(b.jsx)(s.a,{variant:"danger",children:u}),Object(b.jsx)(v.a,{children:Object(b.jsx)(g.a,{children:Object(b.jsxs)(y.a.Group,{children:[Object(b.jsx)(y.a.Label,{children:"Taxista"}),Object(b.jsx)(y.a.Control,{type:"text",value:k.email,readOnly:!0})]})})}),Object(b.jsxs)(v.a,{children:[Object(b.jsx)(g.a,{children:Object(b.jsxs)(y.a.Group,{children:[Object(b.jsx)(y.a.Label,{children:"Numero de Taxi"}),Object(b.jsx)(y.a.Control,{type:"text",required:!0,ref:x})]})}),Object(b.jsxs)(g.a,{children:[Object(b.jsx)(y.a.Label,{children:"Cliente"}),Object(b.jsxs)(y.a.Control,{as:"Select",multiple:!1,ref:S,children:[Object(b.jsx)("option",{children:"Selecciona un Cliente"}),Object(b.jsx)("option",{value:"oxxo",children:"OXXO"}),Object(b.jsx)("option",{value:"otro1",children:"otro 1"}),Object(b.jsx)("option",{value:"otro2",children:"otro2"})]})]})]}),Object(b.jsx)(v.a,{children:Object(b.jsx)(g.a,{children:Object(b.jsxs)(y.a.Group,{children:[Object(b.jsx)(y.a.Label,{children:"Precio"}),Object(b.jsx)(y.a.Control,{type:"number",required:!0,ref:w})]})})}),Object(b.jsx)(v.a,{children:Object(b.jsx)(g.a,{children:Object(b.jsxs)(y.a.Group,{children:[Object(b.jsx)(y.a.Label,{children:"Comentarios"}),Object(b.jsx)(y.a.Control,{type:"text",required:!0,ref:h})]})})}),Object(b.jsx)(v.a,{children:Object(b.jsxs)(g.a,{children:[Object(b.jsx)(y.a.Label,{}),Object(b.jsx)(y.a.Group,{children:Object(b.jsx)(y.a.File,{label:"Cargar Foto",custom:!0,required:!0,ref:N})})]})})]}),Object(b.jsxs)(p.a.Footer,{children:[Object(b.jsx)(C.a,{variant:"secondary",onClick:P,children:"Cancel"}),Object(b.jsx)(C.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})]})},N=c(29),S=function(e){var t=Object(n.useState)([]),c=Object(a.a)(t,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){var t=j.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(N.a)(Object(N.a)({},e.data()),{},{id:e.id}))})),s(t)}));return function(){return t()}}),[e]),{docs:r}},k=function(e){var t,c=e.item,r=e.handleState,a=Object(n.useContext)(O),s=a.currentUser,i=a.bidAuction,o=S("auctions").docs,l=0;return o.map((function(e){e.id===c.id&&(l=e.curPrice),e.id===c.id&&(t=e.completed)})),Object(b.jsx)("div",{className:"col",children:Object(b.jsxs)("div",{className:"card shadow-sm",children:[Object(b.jsx)("div",{onClick:function(){return r(c)},style:{height:"240px",backgroundImage:"url(".concat(c.imgUrl,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:"w-100"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("p",{className:"h4",children:["taxi: ",c.title]}),Object(b.jsx)("div",{className:"d-flex jsutify-content-between align-item-center",children:Object(b.jsxs)("h5",{children:["Cliente: ",c.categorie]})}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{})}),Object(b.jsx)("p",{className:"card-text",children:c.description}),Object(b.jsxs)("div",{className:"d-flex justify-content-between align-item-center",children:[s&&Object(b.jsx)("button",{onClick:function(){return i(c.id)},className:t?"btn btn-primary":"btn btn-secondary",children:t?"Completado":" Sin Completar"}),Object(b.jsxs)("p",{className:"display-6",children:["$",l]})]})]})]})})},P=c(70),A=function(e){var t=Object(n.useState)(0),c=Object(a.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(null),o=Object(a.a)(i,2),d=o[0],b=o[1];return Object(n.useState)((function(){var t=u.ref(e.itemImage.name),c=j.collection("auctions");t.put(e.itemImage).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;s(t)}),(function(e){console.log(e)}),Object(m.a)(f.a.mark((function n(){var r,a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getDownloadURL();case 2:return r=n.sent,a=l(),delete e.itemImage,n.next=7,c.add(Object(N.a)(Object(N.a)({},e),{},{createdAt:a,imgUrl:r}));case 7:b(!0);case 8:case"end":return n.stop()}}),n)}))))}),[e]),{progress:r,isCompleted:d}},D=function(e){var t=e.auction,c=e.setAuction,r=A(t),a=r.progress,s=r.isCompleted;return Object(n.useEffect)((function(){s&&c(null)}),[s,c]),Object(b.jsx)(P.a.div,{style:{height:"5px",background:"black"},initial:{width:0},animate:{width:"".concat(a,"%")}})},R=c(21),E=Object(n.createContext)(),I=function(e){var t=e.children,c=S("auctions").docs,r=Object(R.a)(c),s=Object(n.useState)(r),i=Object(a.a)(s,2),o=i[0],l=i[1];return console.log("DB:",o),Object(b.jsx)(E.Provider,{value:{handleDB:function(e){l(e)},DB:o},children:t})},F=function(e){var t,c=e.itemState,r=void 0===c?{title:"choose an item",imgUrl:"https://image.shutterstock.com/image-photo/indifferent-puzzled-female-shruggs-shoulders-600w-1164353026.jpg"}:c,a=Object(n.useContext)(O),s=(a.currentUser,a.bidAuction,a.endAuction,S("auctions").docs),i=r.title,o=0,l="";s.map((function(e){e.id===r.id&&(o=e.curPrice),e.id===r.id&&(l=e.email),e.id===r.id&&(t=e.createdAt.seconds)}));var j=new Date(1e3*t);return Object(b.jsx)("div",{className:"m-5",children:Object(b.jsxs)("div",{className:"card shadow-sm p-5",children:[Object(b.jsx)("div",{style:{height:"420px",backgroundImage:"url(".concat(r.imgUrl,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:"w-100"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("p",{className:"lead display-6",children:["taxi: ",r.title]}),Object(b.jsx)("div",{className:"d-flex jsutify-content-between align-item-center",children:Object(b.jsxs)("h5",{children:["correo: ",l]})}),Object(b.jsxs)("div",{children:["fecha: ",j.toString()]}),Object(b.jsxs)("p",{className:"card-text",children:["comentarios: ",r.description]}),Object(b.jsx)("div",{className:"d-flex justify-content-between align-item-center ",children:"choose an item"!==i&&Object(b.jsxs)("p",{className:"display-6",children:["$",o]})})]})]})})},L=function(){var e=S("auctions").docs,t=Object(R.a)(e),c=Object(n.useContext)(E).handleDB,r=Object(n.useState)([]),s=Object(a.a)(r,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){if("Price"!==i[0])if("PriceMaxToMin"!==i[0])if("DateMaxToMin"!==i[0])if("Date"!==i[0]);else{var e=t.sort((function(e,t){return e.createdAt-t.createdAt}));c(e)}else{var n=t.sort((function(e,t){return t.createdAt-e.createdAt}));c(n)}else{var r=t.sort((function(e,t){return t.curPrice-e.curPrice}));c(r)}else{var a=t.sort((function(e,t){return e.curPrice-t.curPrice}));c(a)}}),[i]),console.log("selectState:",i),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"w-75",children:[Object(b.jsx)("h2",{children:"Filtros"}),Object(b.jsxs)("select",{className:"form-select w-100 ",onChange:function(e){var t=Array.from(e.target.selectedOptions,(function(e){return e.value}));o(t)},value:i,children:[Object(b.jsx)("option",{children:"Filtrar por"}),Object(b.jsx)("option",{value:"Price",children:"Precio"}),Object(b.jsx)("option",{value:"PriceMaxToMin",children:"Precio Max to Min"}),Object(b.jsx)("option",{value:"Date",children:"Fecha"}),Object(b.jsx)("option",{value:"DateMaxToMin",children:"Fecha Max to Min"})]})]})})},T=function(){var e=S("auctions").docs,t=Object(R.a)(e),c=Object(n.useContext)(E).handleDB,r=Object(n.useState)([]),s=Object(a.a)(r,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){if("all"!==i[0])if("done"!==i[0])if("fallen"!==i[0]);else{var e=t.filter((function(e){return!1===e.completed}));c(e)}else{var n=t.filter((function(e){return!0===e.completed}));c(n)}else{var r=t.filter((function(e){return e}));c(r)}}),[i]),console.log("selectState:",i),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"w-75",children:[Object(b.jsx)("h2",{children:"Resultados"}),Object(b.jsxs)("select",{className:"form-select w-100 ",onChange:function(e){var t=Array.from(e.target.selectedOptions,(function(e){return e.value}));o(t)},value:i,children:[Object(b.jsx)("option",{value:"all",children:"Todos"}),Object(b.jsx)("option",{value:"done",children:"Completados"}),Object(b.jsx)("option",{value:"fallen",children:"Incompletados"})]})]})})},B=function(){var e=Object(n.useContext)(E).handleDB,t=S("auctions").docs,c=Object(R.a)(t),r=Object(n.useState)(!0),s=Object(a.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(!0),j=Object(a.a)(l,2),u=j[0],d=j[1],O=Object(n.useState)(!0),x=Object(a.a)(O,2),h=x[0],f=x[1],m=Object(n.useState)([]),p=Object(a.a)(m,2),v=p[0],g=p[1];function y(e,t){var c=e.indexOf(t);c>-1&&e.splice(c,1)}return console.log("Array-false:",v),Object(n.useEffect)((function(){for(var t=function(e){var t=c.filter((function(t){return t.categorie!==v[e]}));c=t,console.log("for:",c)},n=0;n<v.length;n++)t(n);e(c)}),[v,i,u,h]),Object(n.useEffect)((function(){setTimeout((function(){o(!i),o(!0)}),200)}),[t]),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"w-75",children:[Object(b.jsx)("p",{children:"Clientes:"}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"checkbox",className:"m-1",value:"oxxo",onChange:function(e){return function(e){o(!i),i?g([].concat(Object(R.a)(v),[e.target.value])):y(v,e.target.value)}(e)},checked:i}),"oxxo"]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"checkbox",className:"m-1",value:"otro1",onChange:function(e){return function(e){d(!u),u?g([].concat(Object(R.a)(v),[e.target.value])):y(v,e.target.value)}(e)},checked:u}),"otro1"]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"checkbox",className:"m-1",value:"otro2",onChange:function(e){return function(e){f(!h),h?g([].concat(Object(R.a)(v),[e.target.value])):y(v,e.target.value)}(e)},checked:h}),"otro2"]})]})})},M=function(){return Object(b.jsxs)("div",{style:{paddingLeft:"16px"},className:"d-flex justify-content-between flex-column pb-5  ",children:[Object(b.jsx)(L,{}),Object(b.jsx)(T,{}),Object(b.jsx)(B,{})]})},U=function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],r=t[1],i=Object(n.useContext)(O),o=i.currentUser,l=i.globalMsg,j=Object(n.useContext)(E).DB,u=Object(n.useState)(),d=Object(a.a)(u,2),x=d[0],h=d[1],f=function(e){h(e)};return Object(b.jsxs)("div",{className:"",children:[c&&Object(b.jsx)(D,{auction:c,setAuction:r}),Object(b.jsx)("div",{style:{zIndex:"9999999"},className:"text-center w-50 position-fixed top-10 start-50 translate-middle",children:l&&Object(b.jsx)(s.a,{variant:"danger",children:l})}),o&&Object(b.jsx)(w,{setAuction:r}),j&&Object(b.jsxs)("div",{className:"row row-cols-1 row-cols-md-3 row-cols-lg-4 p-5 g-3 border mt-1 ",children:[Object(b.jsx)(M,{}),j.map((function(e){return Object(b.jsx)(k,{item:e,handleState:f},e.id)}))]}),0===j.length?"":Object(b.jsx)(F,{itemState:x})]})},G=c.p+"static/media/canal10.24a72002.png",q=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(""),o=Object(a.a)(i,2),l=o[0],j=o[1],u=Object(n.useRef)(),d=Object(n.useRef)(),x=Object(n.useContext)(O).login,h=function(){return r(!1)},v=function(){var e=Object(m.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),j(""),e.prev=2,e.next=5,x(u.current.value,d.current.value);case 5:h(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),j("Invalid login");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{onClick:function(){return r(!0)},className:"btn btn-outline-secondary mx-2",children:"Entrar"}),Object(b.jsx)(p.a,{centered:!0,show:c,onHide:h,children:Object(b.jsxs)("form",{onSubmit:v,children:[Object(b.jsx)(p.a.Header,{children:Object(b.jsx)(p.a.Title,{children:"Entrar"})}),Object(b.jsxs)(p.a.Body,{children:[l&&Object(b.jsx)(s.a,{variant:"danger",children:l}),Object(b.jsxs)(y.a.Group,{children:[Object(b.jsx)(y.a.Label,{children:"Email "}),Object(b.jsx)(y.a.Control,{type:"email",required:!0,ref:u})]}),Object(b.jsxs)(y.a.Group,{children:[Object(b.jsx)(y.a.Label,{children:"Password"}),Object(b.jsx)(y.a.Control,{type:"password",required:!0,ref:d})]})]}),Object(b.jsxs)(p.a.Footer,{children:[Object(b.jsx)(C.a,{variant:"secondary",onClick:h,children:"Cancelar"}),Object(b.jsx)(C.a,{variant:"primary",type:"submit",children:"Entrar"})]})]})})]})},H=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(""),o=Object(a.a)(i,2),l=o[0],j=o[1],u=Object(n.useRef)(),d=Object(n.useRef)(),x=Object(n.useRef)(),h=Object(n.useContext)(O).register,v=function(){return r(!1)},g=function(){var e=Object(m.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),j(""),d.current.value===x.current.value){e.next=4;break}return e.abrupt("return",j("Passwords does not match"));case 4:return e.prev=4,e.next=7,h(u.current.value,d.current.value);case 7:v(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),j(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{onClick:function(){return r(!0)},className:"btn btn-outline-secondary mx-2",children:"Registro"}),Object(b.jsx)(p.a,{centered:!0,show:c,onHide:v,children:Object(b.jsxs)("form",{onSubmit:g,children:[Object(b.jsx)(p.a.Header,{children:Object(b.jsx)(p.a.Title,{children:"Registro"})}),Object(b.jsxs)(p.a.Body,{children:[l&&Object(b.jsx)(s.a,{variant:"danger",children:l}),Object(b.jsxs)(y.a.Group,{children:[Object(b.jsx)(y.a.Label,{children:"Email"}),Object(b.jsx)(y.a.Control,{type:"email",required:!0,ref:u})]}),Object(b.jsxs)(y.a.Group,{children:[Object(b.jsx)(y.a.Label,{children:"Password"}),Object(b.jsx)(y.a.Control,{type:"password",required:!0,ref:d})]}),Object(b.jsxs)(y.a.Group,{children:[Object(b.jsx)(y.a.Label,{children:"Confirmar Password"}),Object(b.jsx)(y.a.Control,{type:"password",required:!0,ref:x})]})]}),Object(b.jsxs)(p.a.Footer,{children:[Object(b.jsx)(C.a,{variant:"secondary",onClick:v,children:"Cancelar"}),Object(b.jsx)(C.a,{variant:"primary",type:"submit",children:"Registro"})]})]})})]})},z=function(){var e=Object(n.useContext)(O),t=e.currentUser,c=e.logout;return Object(b.jsx)("nav",{className:"container navbar navbar-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("div",{className:"navbar-brand",children:Object(b.jsx)("img",{src:G,alt:"logo",height:"50"})}),Object(b.jsx)("div",{className:"d-flex",children:Object(b.jsx)("div",{className:"col",children:t?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"btn btn-outline-secondary mx-2 disabled",children:t.email}),Object(b.jsx)("div",{onClick:function(){return c()},className:"btn btn-outline-secondary mx-2",children:"SALIR"})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(q,{}),Object(b.jsx)(H,{})]})})})]})})},W=function(){return Object(b.jsx)(x,{children:Object(b.jsxs)(I,{children:[Object(b.jsx)(z,{}),Object(b.jsx)(U,{})]})})};c(61);Object(r.render)(Object(b.jsx)(W,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.2e6ca409.chunk.js.map