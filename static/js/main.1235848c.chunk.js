(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={buttonList:"FeedbackOptions_buttonList__3mSnL",buttonItem:"FeedbackOptions_buttonItem__cG2az",button:"FeedbackOptions_button__3RGg5"}},,,function(t,e,n){t.exports={section:"Section_section__2987g",title:"Section_title__20lm2"}},,function(t,e,n){t.exports={container:"Container_container__395uQ"}},function(t,e,n){t.exports={message:"Notification_message__3O4w1"}},function(t,e,n){t.exports={statisticsItem:"Statistics_statisticsItem__3zT6X"}},,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),s=n.n(a),o=n(6),i=n.n(o),r=(n(15),n(16),n(3)),u=n(7),b=n.n(u),l=function(t){var e=t.children;return Object(c.jsx)("div",{className:b.a.container,children:e})},d=n(5),j=n.n(d),f=function(t){var e=t.title,n=t.children;return Object(c.jsxs)("section",{className:j.a.section,children:[Object(c.jsxs)("h2",{className:j.a.title,children:[" ",e]}),n]})},O=n(2),m=n.n(O),h=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(c.jsx)("ul",{className:m.a.buttonList,children:e.map((function(t){return Object(c.jsx)("li",{className:m.a.buttonItem,children:Object(c.jsx)("button",{className:m.a.button,type:"button",name:t,onClick:n,children:t})},t)}))})},g=n(8),_=n.n(g),p=function(t){var e=t.message;return Object(c.jsx)("p",{className:_.a.message,children:e})},x=n(9),k=n.n(x),v=function(t){var e=[{good:t.good},{neutral:t.neutral},{bad:t.bad},{total:t.total},{positivePercentage:t.positivePercentage}];return Object(c.jsx)("ul",{children:e.map((function(t){return Object(c.jsxs)("li",{className:k.a.statisticsItem,children:[Object.keys(t),": ",Object.values(t)]},Object.keys(t))}))})},N=function(){var t=Object(a.useState)(0),e=Object(r.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(0),i=Object(r.a)(o,2),u=i[0],b=i[1],d=Object(a.useState)(0),j=Object(r.a)(d,2),O=j[0],m=j[1],g=function(){return n+u+O};return Object(c.jsxs)(l,{children:[Object(c.jsx)(f,{title:"Please, leave your feedback",children:Object(c.jsx)(h,{options:["good","neutral","bad"],onLeaveFeedback:function(t){switch(t.target.name){case"good":s((function(t){return t+1}));break;case"neutral":b((function(t){return t+1}));break;case"bad":m((function(t){return t+1}));break;default:return}t.target.style.backgroundColor="#d3d1d1",setTimeout((function(){t.target.style.backgroundColor="#efefef"}),100)}})}),Object(c.jsx)(f,{title:"Statistics",children:g()?Object(c.jsx)(v,{good:n,neutral:u,bad:O,total:g(),positivePercentage:g()?"".concat(Math.round(n/g()*100),"%"):"".concat(g(),"%")}):Object(c.jsx)(p,{message:"No feedback given"})})]})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.1235848c.chunk.js.map