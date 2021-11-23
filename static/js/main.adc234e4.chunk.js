(this["webpackJsonpra-quiz"]=this["webpackJsonpra-quiz"]||[]).push([[0],{28:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(20),r=n.n(s),i=(n(28),n(23)),o=n(8),l=n(10),u=n(11),j=n.n(u),d=n(21),b=n(3),h=n(22),O=n.n(h),m=n(0),x={general_knowledge:9,politics:24,history:23,animals:27,mythology:20,art:25},f=a.a.createContext(),p=function(e){var t=e.children,n=Object(c.useState)(!0),a=Object(b.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(!1),u=Object(b.a)(i,2),h=u[0],p=u[1],g=Object(c.useState)([]),v=Object(b.a)(g,2),y=v[0],N=v[1],w=Object(c.useState)(0),q=Object(b.a)(w,2),S=q[0],k=q[1],C=Object(c.useState)(0),M=Object(b.a)(C,2),_=M[0],z=M[1],A=Object(c.useState)(!1),F=Object(b.a)(A,2),H=F[0],I=F[1],P=Object(c.useState)(!1),Q=Object(b.a)(P,2),J=Q[0],L=Q[1],T=Object(c.useState)({amount:5,category:"general_knowledge",difficulty:"easy"}),B=Object(b.a)(T,2),D=B[0],E=B[1],G=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),r(!1),e.next=4,O()(t).catch((function(e){return console.log(e)}));case 4:(n=e.sent)?(c=n.data.results).length>0?(N(c),p(!1),r(!1),I(!1)):(r(!0),I(!0)):r(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){k((function(e){var t=e+1;return t>y.length-1?(Y(),0):t}))},Y=function(){L(!0)};return Object(m.jsx)(f.Provider,{value:{waiting:s,loading:h,questions:y,index:S,correct:_,error:H,isModalOpen:J,nextQuestion:K,checkAnswer:function(e){e&&z((function(e){return e+1})),K()},closeModal:function(){r(!0),z(0),L(!1)},quiz:D,handleChange:function(e){var t=e.target.name,n=e.target.value;E(Object(l.a)(Object(l.a)({},D),{},Object(o.a)({},t,n)))},handleSubmit:function(e){e.preventDefault();var t=D.amount,n=D.category,c=D.difficulty,a="".concat("https://opentdb.com/api.php?","amount=").concat(t,"&category=").concat(x[n],"&difficulty=").concat(c,"&type=multiple");G(a)}},children:t})},g=function(){return Object(c.useContext)(f)},v=function(){var e=g(),t=e.quiz,n=e.handleChange,c=e.handleSubmit,a=e.error;return Object(m.jsx)("main",{children:Object(m.jsxs)("section",{className:"quiz quiz-small",children:[Object(m.jsxs)("form",{className:"setup-form",children:[Object(m.jsx)("h2",{children:"Setup Quiz"}),Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsx)("label",{htmlFor:"amount",children:"number of questions"}),Object(m.jsxs)("select",{name:"amount",id:"amount",className:"form-input",value:t.amount,onChange:n,children:[Object(m.jsx)("option",{value:"5",children:"5"}),Object(m.jsx)("option",{value:"10",children:"10"}),Object(m.jsx)("option",{value:"15",children:"15"}),Object(m.jsx)("option",{value:"20",children:"20"})]})]}),Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsx)("label",{htmlFor:"category",children:"category"}),Object(m.jsxs)("select",{name:"category",id:"category",className:"form-input",value:t.category,onChange:n,children:[Object(m.jsx)("option",{value:"general_knowledge",children:"General Knowledge"}),Object(m.jsx)("option",{value:"politics",children:"Politics"}),Object(m.jsx)("option",{value:"history",children:"History"}),Object(m.jsx)("option",{value:"animals",children:"Animals"}),Object(m.jsx)("option",{value:"mythology",children:"Mythology"}),Object(m.jsx)("option",{value:"art",children:"Art"})]})]}),Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsx)("label",{htmlFor:"difficulty",children:"difficulty"}),Object(m.jsxs)("select",{name:"difficulty",id:"difficulty",className:"form-input",value:t.difficulty,onChange:n,children:[Object(m.jsx)("option",{value:"easy",children:"easy"}),Object(m.jsx)("option",{value:"medium",children:"medium"}),Object(m.jsx)("option",{value:"hard",children:"hard"})]})]}),a&&Object(m.jsx)("p",{className:"error",children:"can't generate questions, please try different options"})]}),Object(m.jsx)("button",{type:"submit",onClick:c,className:"submit-btn",children:"start"})]})})},y=function(){return Object(m.jsx)("main",{children:Object(m.jsx)("div",{className:"loading"})})},N=function(){var e=g(),t=e.isModalOpen,n=e.closeModal,c=(e.correct/e.questions.length*100).toFixed(0);return Object(m.jsx)("div",{className:"".concat(t?"modal-container isOpen":"modal-container"),children:Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsx)("h2",{children:"Congrats!"}),Object(m.jsxs)("p",{children:["You answered ",c,"% of questions correctly"]}),Object(m.jsx)("button",{className:"close-btn",onClick:n,children:"Play Again"})]})})};var w=function(){var e=g(),t=e.waiting,n=e.loading,c=e.questions,a=e.index,s=e.correct,r=e.nextQuestion,o=e.checkAnswer;if(t)return Object(m.jsx)(v,{});if(n)return Object(m.jsx)(y,{});var l=c[a],u=l.question,j=l.correct_answer,d=l.incorrect_answers,b=Object(i.a)(d),h=Math.floor(4*Math.random());return 3===h?b.push(j):(b.push(b[h]),b[h]=j),Object(m.jsxs)("main",{children:[Object(m.jsx)(N,{}),Object(m.jsxs)("section",{className:"quiz",children:[Object(m.jsxs)("p",{className:"correct-answers",children:["correct answers: ",s,"/",a]}),Object(m.jsxs)("article",{className:"container",children:[Object(m.jsx)("h2",{dangerouslySetInnerHTML:{__html:u}}),Object(m.jsx)("div",{className:"btn-container",children:b.map((function(e,t){return Object(m.jsx)("button",{className:"answer-btn",onClick:function(){o(j===e)},dangerouslySetInnerHTML:{__html:e}},t)}))})]}),Object(m.jsx)("button",{className:"next-question",onClick:r,children:"skip question"})]})]})};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(p,{children:Object(m.jsx)(w,{})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.adc234e4.chunk.js.map