(this["webpackJsonpredux-async-sandbox"]=this["webpackJsonpredux-async-sandbox"]||[]).push([[0],{16:function(e,t,n){e.exports={container:"Filter_container__oVDC4",input:"Filter_input__l2tjN"}},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a,c=n(1),r=n.n(c),s=n(11),i=n.n(s),o=n(4),l=n(14),b=n(5),u=n(15),j=n(3),d=n(42),m=Object(b.b)("contacts/addContact",(function(e,t){return{payload:{id:Object(d.a)(),name:e,number:t}}})),O=Object(b.b)("contacts/delete"),p=Object(b.b)("contacts/filtered"),x=Object(b.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(a={},Object(u.a)(a,m,(function(e,t){var n=t.payload;return e.find((function(e){return e.name===n.name}))?(alert("".concat(n.name+" is already in contacts")),e):[].concat(Object(l.a)(e),[n])})),Object(u.a)(a,O,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),_=Object(b.c)("",Object(u.a)({},p,(function(e,t){return t.payload}))),h=Object(j.b)({contacts:x,filtered:_}),f=n(7),C=n(21),N=n.n(C),v=n(22),g=n.n(v),A=[].concat(Object(l.a)(Object(b.d)({serializableCheck:{ignoredActions:[f.a,f.f,f.b,f.c,f.d,f.e]}})),[g.a]),y={key:"contacts",storage:N.a,blacklist:["filtered"]},k=Object(b.a)({reducer:{phonebook:Object(f.g)(y,h)},middleware:A,devTools:!1}),F=Object(f.h)(k),L=n(23),Z=(n(39),n(9)),z=n.n(Z),D=n(26),I=n(13),w=n(20),S=n(8),T=n.n(S),B=n(2),J=function(){var e=Object(c.useState)(""),t=Object(w.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(w.a)(r,2),i=s[0],l=s[1],b=Object(o.b)(),u=Object(d.a)(),j=Object(d.a)(),O=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":a(c);break;case"number":l(c);break;default:return}},p=function(){a(""),l("")};return Object(B.jsx)("div",{className:T.a.container,children:Object(B.jsxs)("form",{className:T.a.form,onSubmit:function(e){e.preventDefault(),b(m(n,i)),p()},children:[Object(B.jsxs)("label",{className:T.a.label,htmlFor:u,children:["Name",Object(B.jsx)("input",{type:"text",placeholder:"Mark Zuckerberg",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:O,className:T.a.input,id:u})]}),Object(B.jsxs)("label",{className:T.a.label,htmlFor:j,children:["Number",Object(B.jsx)("input",{type:"tel",placeholder:"xxx-xx-xx",name:"number",value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:O,className:T.a.input,id:j})]}),Object(B.jsx)("button",{type:"submit",className:T.a.btn,children:"Add contact"})]})})},P=n(16),q=n.n(P),M=function(e){return e.phonebook.contacts},V=function(e){return e.phonebook.filtered},E=function(){var e=Object(o.c)(V),t=Object(o.b)();return Object(B.jsxs)("div",{className:q.a.container,children:[Object(B.jsx)("h2",{className:q.a.title,children:"Search by name"}),Object(B.jsx)("input",{type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,onChange:function(e){return t(p(e.currentTarget.value))},className:q.a.input})]})},G=n(6),K=n.n(G),Q=n(25),R=n(24),Y=function(e){var t=e.id,n=e.name,a=e.number,c=e.onDeleteBtnPush;return Object(B.jsxs)("li",{className:K.a.listItem,children:[Object(B.jsxs)("p",{className:K.a.name,children:[Object(B.jsx)(I.a,{className:K.a.contactIcon}),n,":"]}),Object(B.jsxs)("p",{className:K.a.number,children:[Object(B.jsx)(R.a,{className:K.a.contactIcon}),a]}),Object(B.jsx)("button",{type:"button",className:K.a.btnDelete,onClick:function(){return c(t)},children:Object(B.jsx)(Q.a,{})})]},t)},$=function(){var e=Object(o.c)(M),t=Object(o.c)(V),n=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})),a=Object(o.b)();return Object(B.jsx)("div",{className:K.a.container,children:Object(B.jsx)("ul",{className:K.a.contactsList,children:n.map((function(e){var t=e.id,n=e.name,c=e.number;return Object(B.jsx)(Y,{id:t,name:n,number:c,onDeleteBtnPush:function(){return a(O(t))}},t)}))})})},H=function(){return Object(B.jsxs)("div",{className:z.a.container,children:[Object(B.jsxs)("h1",{className:z.a.title,children:["Phonebook ",Object(B.jsx)(D.a,{className:z.a.icon})]}),Object(B.jsx)(J,{}),Object(B.jsx)(E,{}),Object(B.jsxs)("h2",{className:z.a.title,children:["Contacts",Object(B.jsx)(I.b,{className:z.a.icon})]}),Object(B.jsx)($,{})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(o.a,{store:k,children:Object(B.jsx)(L.a,{loading:null,persistor:F,children:Object(B.jsx)(H,{})})})}),document.getElementById("root")),X()},6:function(e,t,n){e.exports={container:"ContactList_container__15e9l",contactsList:"ContactList_contactsList__3kpYZ",listItem:"ContactList_listItem__2DwLK",contactIcon:"ContactList_contactIcon__3TZkT",number:"ContactList_number__mARQG",btnDelete:"ContactList_btnDelete__3qJry"}},8:function(e,t,n){e.exports={container:"ContactForm_container__2Vz90",form:"ContactForm_form__d4VqF",label:"ContactForm_label__3Yj4x",input:"ContactForm_input__AbQJN",btn:"ContactForm_btn__2rZP5"}},9:function(e,t,n){e.exports={container:"App_container__2ZXvj",title:"App_title__35b3G",icon:"App_icon__10-my"}}},[[41,1,2]]]);
//# sourceMappingURL=main.a660729c.chunk.js.map