(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{32:function(e,t,r){},42:function(e,t,r){},44:function(e,t,r){},45:function(e,t,r){},46:function(e,t,r){},47:function(e,t,r){},48:function(e,t,r){},49:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),c=r(24),a=r.n(c),o=r(11),i=r(14),h=r(18),l=r(6),d=r(7),j=r(9),b=r(8),u=r(2),O=(r(32),r(0)),p=function(){return Object(O.jsxs)("header",{children:[Object(O.jsx)("h1",{children:"REST"}),Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(o.b,{to:"/resty",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(o.b,{to:"/resty/history",children:"History"})}),Object(O.jsx)("li",{children:Object(O.jsx)(o.b,{to:"/resty/about-us",children:"Help"})})]})})]})},x=(r(42),function(){return Object(O.jsx)("footer",{children:Object(O.jsxs)("h4",{children:["\xa9 ",Object(O.jsx)("a",{href:"https://github.com/Musab-Al-omari",children:"Musab al omari "}),"website 6/13/2021"]})})}),y=r(23),m=r.n(y),f=r(26),v=r(27),g=(r(44),function(e){Object(j.a)(r,e);var t=Object(b.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).handleURLChange=function(e){var t=e.target.value;n.props.changeUrl(t),console.log(t),console.log("sad")},n.handlerBody=function(e){var t=e.target.value,r=Object(i.a)(Object(i.a)({},n.state),{},{body:t});console.log(r),n.setState(r)},n.handleBtnClick=function(e){var t=e.target.innerText;n.props.methodHandler(t)},n.goHandler=function(){var e=Object(v.a)(m.a.mark((function e(t){var r,s,c,a,o,i,l,d,j,b;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n.props.loadingHandler(!0),e.prev=2,""===n.props.method&&(n.props.method="GET"),r={method:"".concat(n.props.method)},"POST"!==n.props.method&&"PUT"!==n.props.method||(s=n.state.body,r={method:n.props.method,mode:"cors",headers:{"Content-Type":"application/json"},body:s}),e.next=8,fetch(n.props.url,r);case 8:return c=e.sent,e.next=11,c.json();case 11:a=e.sent,o=a.count,i={},l=Object(f.a)(c.headers);try{for(l.s();!(d=l.n()).done;)j=d.value,console.log("hhhhhh",j[0],j[1]),i[j[0]]=j[1]}catch(u){l.e(u)}finally{l.f()}500!==c.status&&404!==c.status&&((b=JSON.parse(localStorage.getItem("myHeader")))?localStorage.setItem("myHeader",JSON.stringify([].concat(Object(h.a)(b),[{method:n.props.method,urlField:n.props.url,headersObj:i,body:a}]))):localStorage.setItem("myHeader",JSON.stringify([{method:n.props.method,urlField:n.props.url,headersObj:i,body:a}]))),n.props.loadingHandler(!1),n.props.handler(a,o,i,c.status),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(2),console.error(e.t0);case 25:case"end":return e.stop()}}),e,null,[[2,22]])})));return function(t){return e.apply(this,arguments)}}(),n.state={body:""},n}return Object(d.a)(r,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("form",{children:[Object(O.jsx)("label",{htmlFor:"theUrl",children:"The URL:"}),Object(O.jsx)("input",{value:this.props.url,onChange:this.handleURLChange}),Object(O.jsx)("textarea",{onChange:this.handlerBody,type:"text"}),Object(O.jsx)("button",{onClick:this.goHandler,children:"GO!"})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{id:"buttons",children:[Object(O.jsx)("button",{className:"bot",onClick:this.handleBtnClick,children:"GET"}),Object(O.jsx)("button",{className:"bot",onClick:this.handleBtnClick,children:"POST"}),Object(O.jsx)("button",{className:"bot",onClick:this.handleBtnClick,children:"PUT"}),Object(O.jsx)("button",{className:"bot",onClick:this.handleBtnClick,children:"DELETE"})]})]})}}]),r}(s.a.Component)),k=r(13),C=r.n(k),H=function(e){Object(j.a)(r,e);var t=Object(b.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){var e=this.props.body,t=this.props.header;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{id:"outerDiv",children:Object(O.jsxs)("div",{id:"outPut",children:[Object(O.jsx)(C.a,{name:"header",src:t}),Object(O.jsx)(C.a,{name:"response",src:e})]})})})}}]),r}(s.a.Component),S=(r(45),function(e){Object(j.a)(r,e);var t=Object(b.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).handlerClick=function(t,r){e.props.fillForm(t,r)},e.renderHistory=function(t){if(t)return t.map((function(t,r){return console.log("saddddddddsa",t,r),Object(O.jsxs)("p",{className:"clickOn",onClick:function(){return e.handlerClick(t.method,t.urlField)},children:[t.method," : ",t.urlField]},r)}))},e}return Object(d.a)(r,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"historyContainer",children:[Object(O.jsx)("p",{className:"historyLabel",children:"History"}),this.renderHistory(this.props.history)]})}}]),r}(s.a.Component)),N=(r(46),function(e){Object(j.a)(r,e);var t=Object(b.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return this.props.loading?Object(O.jsx)("div",{className:"loader"}):null}}]),r}(s.a.Component)),F=function(e){Object(j.a)(r,e);var t=Object(b.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).renderHistory=function(e){if(e)return e.map((function(e,t){return Object(O.jsxs)("p",{className:"clickOn",onClick:function(){return n.handlerClick(e.headerObj,e.body,t)},children:[e.method," : ",e.urlField]},t)}))},n.handlerClick=function(e,t){n.setState({header:e,body:t})},n.state={selected:0,header:{},body:{}},n}return Object(d.a)(r,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"historyContainer",children:[Object(O.jsx)("p",{className:"historyLabel",children:"History"}),this.renderHistory(this.props.history)]})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Results"}),Object(O.jsx)("div",{id:"outerDiv",children:Object(O.jsxs)("div",{id:"outPut",children:[Object(O.jsx)(C.a,{name:"header",src:this.state.header}),Object(O.jsx)(C.a,{name:"response",src:this.state.body})]})})]})]})}}]),r}(n.Component),T=(r(47),function(){return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{children:"This is how you can our website  "}),Object(O.jsx)("h3",{children:" we have 3 routes  each one will do something "}),Object(O.jsxs)("h3",{children:["the first ",Object(O.jsx)("strong",{children:"/resty"})," this is for main screen "]}),Object(O.jsxs)("h3",{children:["the second one  ",Object(O.jsx)("strong",{children:"/resty/history"})," this is for the history page "]}),Object(O.jsxs)("h3",{children:["the third one  ",Object(O.jsx)("strong",{children:"/resty/about-us"})," this is for helping you  "]}),Object(O.jsx)("p",{children:"this is app for testing your api requested and response  and to see the what any api wil gave you "}),Object(O.jsx)("h3",{children:"the creator is Musab al omari  "})]})}),w=(r(48),function(e){Object(j.a)(r,e);var t=Object(b.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).handlerApi=function(e,t,r,s){s<299&&n.state.history?n.setState({body:e,count:t,headersObj:r,history:[].concat(Object(h.a)(n.state.history),[{method:n.state.method,urlField:n.state.url,body:e,headersObj:r}])}):s<299&&!n.state.history?n.setState({body:e,count:t,headersObj:r,history:[{method:n.state.method,urlField:n.state.url,body:e,headersObj:r}]}):n.setState({body:e,count:t,headersObj:r})},n.fillForm=function(e,t){n.setState({method:e,url:t})},n.changeUrl=function(e){n.setState({url:e})},n.methodHandler=function(e){n.setState({method:e})},n.loadingHandler=function(e){n.setState(Object(i.a)(Object(i.a)({},n.state),{},{loading:e}))},n.state={body:{},headersObj:{},count:0,history:JSON.parse(localStorage.getItem("myHeader")),method:"GET",url:"https://api-server-0.herokuapp.com/food/",loading:!1},n}return Object(d.a)(r,[{key:"render",value:function(){return Object(O.jsx)(o.a,{children:Object(O.jsxs)(u.c,{children:[Object(O.jsxs)(u.a,{exact:!0,path:"/resty",children:[Object(O.jsx)(p,{}),Object(O.jsx)(g,{handler:this.handlerApi,method:this.state.method,url:this.state.url,changeUrl:this.changeUrl,methodHandler:this.methodHandler,loadingHandler:this.loadingHandler}),Object(O.jsx)(H,{body:this.state.body,header:this.state.headersObj}),Object(O.jsx)(S,{history:this.state.history,fillForm:this.fillForm}),Object(O.jsx)(N,{loading:this.state.loading}),Object(O.jsx)(x,{})]}),Object(O.jsxs)(u.a,{exact:!0,path:"/resty/history",children:[Object(O.jsx)(p,{}),Object(O.jsx)(F,{history:this.state.history}),Object(O.jsx)(x,{})]}),Object(O.jsxs)(u.a,{exact:!0,path:"/resty/about-us",children:[Object(O.jsx)(p,{}),Object(O.jsx)(T,{}),Object(O.jsx)(x,{})]}),Object(O.jsx)(u.a,{path:"*",children:"404"})]})})}}]),r}(s.a.Component));a.a.render(Object(O.jsx)(o.a,{children:Object(O.jsx)(w,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.10e2c96d.chunk.js.map