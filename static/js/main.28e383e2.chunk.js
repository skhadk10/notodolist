(this["webpackJsonpnot-to-do-list"]=this["webpackJsonpnot-to-do-list"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(8),i=c.n(a),o=(c(29),c(9)),s=c(7),j=(c.p,c(41)),l=c(38),d=c(21),h=c(42),u=c(39),O=(c(30),c(13)),b=c(19),x=c(43),f=c(1),p={title:"",hr:0},v=function(e){var t=e.handleOnAddTask,c=Object(n.useState)(p),r=Object(s.a)(c,2),a=r[0],i=r[1],o=function(e){var t=e.target,c=t.name,n=t.value;i(Object(b.a)(Object(b.a)({},a),{},Object(O.a)({},c,"hr"===c?+n:n)))};return Object(f.jsx)(x.a,{onSubmit:function(e){e.preventDefault(),t(a)},children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(d.a,{children:Object(f.jsx)(x.a.Control,{"data-toggle":"tooltip","data-placement":"top",title:"AddTask Please",placeholder:"Task Name",onChange:o,value:a.title,name:"title",required:!0})}),Object(f.jsx)(d.a,{children:Object(f.jsx)(x.a.Control,{"data-toggle":"tooltip","data-placement":"top",title:"Add HOur Only",placeholder:"Number of hours",value:a.hr,required:!0,onChange:o,name:"hr"})}),Object(f.jsxs)(d.a,{children:["  ",Object(f.jsx)(u.a,{variant:"primary",type:"submit",children:"Add Task"})]})]})})},g=c(40),m=function(e){var t=e.taskLists,c=e.handOnMarkAsNotToDo,n=e.handleonChange1;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("h2",{children:["Task Lists ",Object(f.jsx)("i",{class:"fas fa-info-circle"})]}),Object(f.jsxs)(g.a,{striped:!0,bordered:!0,hover:!0,size:"lg",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"check"}),Object(f.jsx)("th",{children:"Task"}),Object(f.jsx)("th",{children:"Hours"}),Object(f.jsx)("th",{children:"Action"})]})}),Object(f.jsx)("tbody",{children:t.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsxs)("td",{children:[Object(f.jsx)("input",{type:"checkbox",defaultValue:t,onChange:n}),""]}),Object(f.jsx)("td",{children:null===e||void 0===e?void 0:e.title}),Object(f.jsx)("td",{children:null===e||void 0===e?void 0:e.hr}),Object(f.jsx)("td",{children:Object(f.jsx)("button",{"data-toggle":"tooltip","data-placement":"top",title:"it move to Not TO DO List",onClick:function(){return c(t)},children:"Mark as not to"})})]},t)}))})]})]})},k=function(e){var t=e.noToDoList,c=e.markAsToDo,n=e.handleonChange1NOtToDO,r=t.reduce((function(e,t){return e+ +t.hr}),0);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("h2",{children:["Not To Do list ",Object(f.jsx)("i",{style:{backgroundColor:"yellow",borderRadius:"5px"},class:"fas fa-info-circle","data-toggle":"tooltip","data-placement":"top",title:"it move to TO DO List"})]}),Object(f.jsxs)(g.a,{striped:!0,bordered:!0,hover:!0,size:"lg",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Task"}),Object(f.jsx)("th",{children:"Hours"}),Object(f.jsx)("th",{children:"Action"})]})}),Object(f.jsx)("tbody",{children:t.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsxs)("td",{children:[Object(f.jsx)("input",{type:"checkbox",defaultValue:t,onChange:n}),""]}),Object(f.jsx)("label",{children:null===e||void 0===e?void 0:e.title}),Object(f.jsx)("td",{children:null===e||void 0===e?void 0:e.hr}),Object(f.jsxs)("td",{children:[Object(f.jsx)("button",{"data-toggle":"tooltip","data-placement":"top",title:"it move to TO DO List",onClick:function(){return c(t)},children:"Mark As TO DO"}),"   "]})]},t)}))})]}),Object(f.jsxs)(h.a,{variant:"success",children:[Object(f.jsx)(h.a.Heading,{children:"Hey, nice to see you"}),Object(f.jsxs)("p",{children:["your saved= ",r," hours"]}),Object(f.jsx)("hr",{})]})]})},T=(c(35),[]),y=function(){var e=Object(n.useState)(T),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),i=Object(s.a)(a,2),O=i[0],b=i[1],x=Object(n.useState)([]),p=Object(s.a)(x,2),g=p[0],y=p[1],D=Object(n.useState)([]),C=Object(s.a)(D,2),A=C[0],L=C[1],N=c.reduce((function(e,t){return e+t.hr}),0)+O.reduce((function(e,t){return e+t.hr}),0);return Object(f.jsxs)("div",{className:"main",children:[Object(f.jsxs)(j.a,{variant:"primary",children:[Object(f.jsx)(l.a,{children:Object(f.jsx)(d.a,{children:Object(f.jsx)("div",{className:"text-center pt-5",children:Object(f.jsx)("h1",{children:"Not To Do List"})})})}),Object(f.jsx)("hr",{}),Object(f.jsx)(v,{handleOnAddTask:function(e){if(console.log("Data type check>>",typeof e.hr),N+ +e.hr>168)return alert("you have exceed the total allocated time for the week");r([].concat(Object(o.a)(c),[e])),console.log(r)}}),Object(f.jsx)("hr",{}),Object(f.jsxs)(l.a,{children:[Object(f.jsx)(d.a,{children:Object(f.jsx)(m,{taskLists:c,handOnMarkAsNotToDo:function(e){var t=c.splice(e,1);b([].concat(Object(o.a)(O),[t[0]]))},handleonChange1:function(e){var t=e.target,c=t.checked,n=t.value;if(c)return y([].concat(Object(o.a)(g),[+n]));var r=g.filter((function(e){return e!=n}));y(r)}})}),Object(f.jsx)(d.a,{children:Object(f.jsx)(k,{noToDoList:O,handleonChange1NOtToDO:function(e){var t=e.target,c=t.checked,n=t.value;if(c)return y([].concat(Object(o.a)(A),[+n]));var r=A.filter((function(e){return e!=n}));L(r)},markAsToDo:function(e){var t=O[e],n=O.filter((function(t,c){return c!==e}));b(n),r([].concat(Object(o.a)(c),[t]))}})})]}),Object(f.jsxs)(l.a,{children:[" ",Object(f.jsxs)(h.a,{variant:"primary",children:[Object(f.jsx)(h.a.Heading,{children:"Hey, nice to see you"}),Object(f.jsxs)("p",{children:["your allocated  Time=",N,"/168 hours"]}),Object(f.jsx)("hr",{})]})]})]}),Object(f.jsx)(u.a,{onClick:function(){window.confirm("are you sure you want to delete the selected items?"),function(){var e=O.filter((function(e,t){return!A.includes(t)}));r(e)}(),function(){var e=c.filter((function(e,t){return!g.includes(t)}));b(e)}()},variant:"primary",children:"Delete"})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root")),D()}},[[36,1,2]]]);
//# sourceMappingURL=main.28e383e2.chunk.js.map