(this.webpackJsonpsuperheros=this.webpackJsonpsuperheros||[]).push([[0],{26:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var r=c(4),a=c(0),n=c.n(a),s=c(9),o=c.n(s),i=(c(26),c(17)),l=c.n(i),j=c(18),u=c(7),h=(c(14),c(34)),b=c(38),d=c(39),O=c(35);var f=function(e){var t=e.error,c=e.isloading,n=e.seterror,s=e.getcharacter,o=Object(a.useState)(""),i=Object(u.a)(o,2),l=i[0],j=i[1];return Object(r.jsx)(h.a,{className:"justify-content-md-center",children:Object(r.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),s(l),j("")},children:[Object(r.jsxs)(b.a.Group,{controlId:"formBasicEmail",children:[Object(r.jsx)(b.a.Label,{children:"Search for a superhero or super villian"}),Object(r.jsx)(b.a.Control,{placeholder:"e.g. SuperMan",valur:l,onChange:function(e){n(null),j(e.target.value)}}),t?Object(r.jsx)(b.a.Text,{className:"text-muted",children:t}):null]}),c?Object(r.jsxs)(d.a,{type:"submit",children:[Object(r.jsx)(O.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),Object(r.jsx)("span",{className:"sr-only",children:"Loading..."})]}):Object(r.jsx)(d.a,{type:"submit",children:"Get Character"})]})})},p=(c(31),c(19)),x=c(40);var m=function(e){console.log(e);var t=Object.keys(e.characterInfo.powerstats);return Object.values(e.characterInfo.powerstats),Object(r.jsxs)(h.a,{className:"justify-content-md-center",children:[Object(r.jsxs)(p.a,{className:"abc",children:[Object(r.jsx)("h1",{children:"Character"}),Object(r.jsx)("img",{src:e.characterInfo.image.url,alt:"profile"})]}),Object(r.jsxs)(p.a,{children:[Object(r.jsxs)("h1",{children:["Name: ",e.characterInfo.biography["full-name"]]}),Object(r.jsxs)("h1",{children:["WORK: ",e.characterInfo.work.occupation]}),t.map((function(t){return Object(r.jsxs)("div",{style:{padding:10},children:[Object(r.jsx)("h3",{children:t}),Object(r.jsx)(x.a,{now:e.characterInfo.powerstats[t],label:"".concat(e.characterInfo.powerstats[t])})]})}))]})]})},v=c(37),g=function(e){var t=e.show,c=e.setshow,n=e.setcharacterInfo,s=e.characterList,o=Object(a.useState)(),i=Object(u.a)(o,2),l=i[0],j=i[1],h=function(e){j(e.target.value)};return Object(r.jsxs)(v.a,{className:"my-moodal",show:t,children:[Object(r.jsx)(v.a.Header,{children:Object(r.jsx)(v.a.Title,{children:"Which one?"})}),Object(r.jsx)(v.a.Body,{children:Object(r.jsxs)(b.a,{className:"myForm",onSubmit:function(e){e.preventDefault();var t=s.find((function(e){return e.id===l}));n(t),c(!1)},children:[s?s.map((function(e){return Object(r.jsx)(b.a.Check,{type:"radio",value:e.id,checked:l===e.id,label:"".concat(e.biography["full-name"]),onChange:h},e.id)})):null,Object(r.jsx)(d.a,{type:"submit",children:"Submit"})]})})]})},w=c(36);var y=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),o=Object(u.a)(s,2),i=o[0],b=o[1],d=Object(a.useState)(!1),O=Object(u.a)(d,2),p=O[0],x=O[1],v=Object(a.useState)(!1),y=Object(u.a)(v,2),S=y[0],I=y[1],k=Object(a.useState)(null),C=Object(u.a)(k,2),N=C[0],L=C[1],F=function(){var e=Object(j.a)(l.a.mark((function e(t){var c,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,fetch("https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/1560787344116671/search/".concat(t));case 4:return c=e.sent,e.next=7,c.json();case 7:if(r=e.sent,c.ok&&"error"!==r.response){e.next=10;break}throw Error('"'.concat(t,'" not found'));case 10:a=r.results.filter((function(e){return t.toLowerCase()===e.name.toLowerCase()})),L(a),1===a.length?n(a[0]):I(!0),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(1),b(e.t0.message),n(null);case 19:x(!1);case 20:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(w.a,{children:[Object(r.jsx)(h.a,{className:"justify-content-md-center",children:Object(r.jsx)("h1",{children:"SuperHeros VS Villians"})}),Object(r.jsx)(f,{isloading:p,error:i,seterror:b,getcharacter:F}),Object(r.jsx)(g,{show:S,setshow:I,characterList:N,setcharacterInfo:n}),c&&!i?Object(r.jsx)(m,{characterInfo:c}):null]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),r(e),a(e),n(e),s(e)}))};o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)("div",{children:Object(r.jsx)(y,{})})}),document.getElementById("root")),S()}},[[32,1,2]]]);
//# sourceMappingURL=main.b2e1917a.chunk.js.map