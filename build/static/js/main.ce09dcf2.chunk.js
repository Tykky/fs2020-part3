(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{23:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n(1),c=n.n(i),r=n(17),s=n.n(r),a=(n(23),n(3)),u=n(4),f=n.n(u),l=n(8),d="http://localhost:3001/api/persons",j=function(e){return e.data},b=function(e){return f.a.post(d,e).then(j)},h=function(e,t){return f.a.put("".concat(d,"/").concat(e),t).then(j)},m=function(e){return f.a.delete("".concat(d,"/").concat(e))},O=function(e){return null===e.message?null:Object(o.jsx)("div",{class:e.class,children:e.message})},p=function(e){return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={name:e.newName,number:e.newNumber},o=Object(l.a)(e.persons);if(o.some((function(t){return t.name===e.newName}))){if(window.confirm("".concat(e.newName," is already added to phonebook, replace the old number with a new one?"))){var i=e.persons.filter((function(e){return e.name===n.name}))[0].id,c=e.persons.findIndex((function(e){return e.id===i}));h(i,n).then((function(t){o[c]=n,n.id=i,e.setPersons(o)})).catch((function(t){console.log(t.response.data),e.setNotification(t.response.data.error),e.setNotificationClass("error"),setTimeout((function(){return e.setNotification(null)}),5e3)}))}}else b(n).then((function(){o.push(n),e.setPersons(o),e.triggerUpdate(),e.setNotification("Added ".concat(n.name)),e.setNotificationClass("success"),setTimeout((function(){return e.setNotification(null)}),2e3)})).catch((function(t){console.log(t.response.data),e.setNotification(t.response.data.error),e.setNotificationClass("error"),setTimeout((function(){return e.setNotification(null)}),5e3)}))},children:[Object(o.jsxs)("div",{children:["name: ",Object(o.jsx)("input",{onChange:e.nameHandler})]}),Object(o.jsxs)("div",{children:["number: ",Object(o.jsx)("input",{onChange:e.numberHandler})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{children:"add"})})]})},g=function(e){return Object(o.jsxs)("div",{children:["filter shown with: ",Object(o.jsx)("input",{onChange:e.onChange})]})},x=function(e){var t=Object(l.a)(e.persons);return t.filter((function(t){return t.name.toLowerCase().includes(e.filter.toLowerCase())})).map((function(n){return Object(o.jsxs)("p",{children:[n.name," ",n.number," ",Object(o.jsx)("button",{onClick:function(){window.confirm("Delete ".concat(n.name))&&(t=t.filter((function(e){return e.id!==n.id})),m(n.id).then(e.setPersons(t)).catch((function(t){e.setNotification("Information of ".concat(n.name," has already been removed from server")),e.setNotificationClass("error"),setTimeout((function(){return e.setNotification(null)}),5e3)})),e.triggerUpdate())},children:"delete"})," "]})}))},N=(n(42),function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(""),s=Object(a.a)(r,2),u=s[0],l=s[1],d=Object(i.useState)(""),j=Object(a.a)(d,2),b=j[0],h=j[1],m=Object(i.useState)(""),N=Object(a.a)(m,2),w=N[0],v=N[1],C=Object(i.useState)(null),S=Object(a.a)(C,2),P=S[0],k=S[1],T=Object(i.useState)(""),F=Object(a.a)(T,2),H=F[0],I=F[1],L=Object(i.useState)(!0),U=Object(a.a)(L,2),y=U[0],D=U[1],A=function(){return D(!y)};return Object(i.useEffect)((function(){f.a.get("http://localhost:3001/api/persons").then((function(e){c(e.data)}))}),[y]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(O,{message:P,class:H}),Object(o.jsx)(g,{onChange:function(e){return v(e.target.value)}}),Object(o.jsx)("h3",{children:"Add a new"}),Object(o.jsx)(p,{nameHandler:function(e){return l(e.target.value)},numberHandler:function(e){return h(e.target.value)},persons:n,newName:u,newNumber:b,setPersons:c,setNotification:k,setNotificationClass:I,triggerUpdate:A}),Object(o.jsx)("h3",{children:"Numbers"}),Object(o.jsx)(x,{persons:n,setPersons:c,filter:w,setNotification:k,setNotificationClass:I,triggerUpdate:A})]})}),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),o(e),i(e),c(e),r(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),w()}},[[43,1,2]]]);
//# sourceMappingURL=main.ce09dcf2.chunk.js.map