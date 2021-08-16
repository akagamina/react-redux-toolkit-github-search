(this["webpackJsonpreact-github-search-ui"]=this["webpackJsonpreact-github-search-ui"]||[]).push([[0],{155:function(e,t,n){},200:function(e,t,n){},202:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(14),o=n.n(i),s=(n(155),n(83)),c=n(17),u=n(6),l=n(122),d=n(64),p=n(123),v=n(111),h=n(11),f=Object(v.a)((function(e){return{size:{height:400,width:"100%"},root:{backgroundColor:"#fff",boxShadow:"rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"}}}));function b(e){var t=e.rows,n=e.columns,r=e.pageSize,a=e.handleModelChange,i=f();return Object(h.jsx)("div",{className:i.size,children:Object(h.jsx)(p.a,{className:i.root,rows:t,columns:n,pageSize:r,onSortModelChange:a,sortingOrder:["asc","desc"],sortingMode:"server",disableColumnSelector:!0,disableColumnMenu:!0})})}var j=n(252),g=n(253),m=n(209),O=n(70);function x(e){var t=e.list,n=e.value,r=e.title,a=e.handleChange;return Object(h.jsx)(O.a,{component:"fieldset",children:Object(h.jsx)(g.a,{row:!0,"aria-label":r,value:n,onChange:a,"data-testid":"the-radio-button",children:t.map((function(e){return Object(h.jsx)(m.a,{value:e.value,control:Object(h.jsx)(j.a,{}),label:e.value},e.id)}))})})}var w=n(101),y=Object(v.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"},backgroundColor:"#fff",marginTop:8,marginBottom:16,borderRadius:8,padding:4}}}));function k(e){var t=y();return Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(h.jsx)("form",{className:t.root,noValidate:!0,autoComplete:"off",children:Object(h.jsx)(w.a,{inputProps:{"data-testid":"content-input"},"data-testid":"the-input",label:"Search repo",variant:"outlined",onChange:e.handleChange})})})}var C=n(251),I=[{id:1,value:"Javascript"},{id:2,value:"Python"},{id:3,value:"Scala"}],L=[{field:"repositoryId",headerName:"Repository ID",width:180,sortable:!1},{field:"userName",headerName:"Username",width:150,sortable:!1},{field:"repoDescription",headerName:"Repo Description",width:210,sortable:!1},{field:"stars",headerName:"Stars",width:150},{field:"forks_count",headerName:"Forks",width:150},{field:"updated_at",headerName:"Last Update Date",width:200}],q=n(42),S=n.n(q),M=n(63),N=n(65),R=n(50),_=n(51),Y=n(125),z=n.n(Y),D=function(){function e(t){Object(R.a)(this,e),this.requestInterceptor=null,this.responseInterceptor=null,this.axiosObject=t}return Object(_.a)(e,[{key:"setRequestInterceptor",value:function(){this.requestInterceptor=this.axiosObject.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)}))}},{key:"setResponseInterceptor",value:function(){this.responseInterceptor=this.axiosObject.interceptors.response.use((function(e){return e}),(function(e){var t=e.response;return Promise.reject(t)}))}},{key:"removeRequestInterceptor",value:function(){this.axiosObject.interceptors.request.eject(this.requestInterceptor)}},{key:"removeResponseInterceptor",value:function(){this.axiosObject.interceptors.response.eject(this.responseInterceptor)}}]),e}(),H=new(function(){function e(t){Object(R.a)(this,e),this.instance=z.a.create(t),this.interceptor=new D(this.instance),this.interceptor.setRequestInterceptor(),this.interceptor.setResponseInterceptor()}return Object(_.a)(e,[{key:"get",value:function(){var e=Object(M.a)(S.a.mark((function e(t,n){var r,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.instance.get(t,n);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(M.a)(S.a.mark((function e(t,n,r){var a,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.instance.post(t,n,r);case 2:return a=e.sent,i=a.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()}]),e}())({baseURL:"https://api.github.com/"}),P=n(92),W=n.n(P),B=Object(N.b)("repository/query",function(){var e=Object(M.a)(S.a.mark((function e(t){var n,r,a,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!0,e.prev=1,e.next=4,H.get("search/repositories?q=".concat(t.query,"+language:").concat(t.language));case 4:return r=e.sent,a=r.items,i=a.map((function(e){var t,n,r,a,i;return{id:null===e||void 0===e?void 0:e.id,repositoryId:null!==(t=null===e||void 0===e?void 0:e.id)&&void 0!==t?t:"-",userName:null!==(n=null===e||void 0===e||null===(r=e.owner)||void 0===r?void 0:r.login)&&void 0!==n?n:"-",repoDescription:null!==(a=null===e||void 0===e?void 0:e.description)&&void 0!==a?a:"-",stars:null!==(i=null===e||void 0===e?void 0:e.stargazers_count)&&void 0!==i?i:"-",forks_count:null===e||void 0===e?void 0:e.forks_count,updated_at:W()(null===e||void 0===e?void 0:e.updated_at).format("MMM/YYYY-HH:mm")}})),n=!1,e.abrupt("return",{filterList:i,isLoading:n});case 11:e.prev=11,e.t0=e.catch(1),n=!1;case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()),J=Object(N.b)("repository/sort",function(){var e=Object(M.a)(S.a.mark((function e(t){var n,r,a,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!0,e.prev=1,e.next=4,H.get("search/repositories?q=".concat(t.query,"+language:").concat(t.language,"&sort=").concat(t.sort,"&order=").concat(t.order));case 4:return r=e.sent,a=r.items,i=a.map((function(e){var t,n,r,a,i;return{id:null===e||void 0===e?void 0:e.id,repositoryId:null!==(t=null===e||void 0===e?void 0:e.id)&&void 0!==t?t:"-",userName:null!==(n=null===e||void 0===e||null===(r=e.owner)||void 0===r?void 0:r.login)&&void 0!==n?n:"-",repoDescription:null!==(a=null===e||void 0===e?void 0:e.description)&&void 0!==a?a:"-",stars:null!==(i=null===e||void 0===e?void 0:e.stargazers_count)&&void 0!==i?i:"-",forks_count:null===e||void 0===e?void 0:e.forks_count,updated_at:W()(null===e||void 0===e?void 0:e.updated_at).format("MMM/YYYY-HH:mm")}})),n=!1,e.abrupt("return",{filterList:i,isLoading:n});case 11:e.prev=11,e.t0=e.catch(1),n=!1;case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()),U=Object(N.c)({name:"repository",initialState:{list:[],isLoading:!1},reducers:{},extraReducers:function(e){e.addCase(J.pending,(function(e,t){e.isLoading=!0})),e.addCase(J.fulfilled,(function(e,t){var n,r;e.list=null!==(n=null===(r=t.payload)||void 0===r?void 0:r.filterList)&&void 0!==n?n:[],e.isLoading=!1})),e.addCase(B.pending,(function(e,t){e.isLoading=!0})),e.addCase(B.fulfilled,(function(e,t){var n,r;e.list=null!==(n=null===(r=t.payload)||void 0===r?void 0:r.filterList)&&void 0!==n?n:[],e.isLoading=!1}))}}),E=function(e){return null===e||void 0===e?void 0:e.repoList.list},F=function(e){return e.repoList.isLoading},T=U.reducer;function V(){var e=Object(d.c)(E),t=Object(d.c)(F),n=Object(r.useState)(I[0].value),a=Object(u.a)(n,2),i=a[0],o=a[1],s=Object(r.useState)(""),c=Object(u.a)(s,2),l=c[0],p=c[1],v=Object(d.b)(),f=Object(C.a)((function(e){var t=e.target.value;v(B({query:t,language:i})),p(t)}),300,{maxWait:2e3}),j=Object(r.useCallback)((function(e){if(0!==e.length){var t=e[0],n=t.field,r=t.sort;v(J({query:l,language:i,order:r,sort:n}))}}),[i,l,v]);return Object(r.useEffect)((function(){v(B({query:"",language:"javascript"}))}),[v]),Object(h.jsxs)("div",{children:[Object(h.jsx)(k,{handleChange:f}),Object(h.jsx)(x,{list:I,value:i,handleChange:function(e){o(e.target.value)}}),Object(h.jsx)(b,{isLoading:t,handleModelChange:j,columns:L,rows:e,pageSize:5})]})}var $=n(126),A=n.n($),G=[{name:"Repositories",to:Object(h.jsx)(V,{}),path:"/",icon:Object(h.jsx)(A.a,{})}];n(200);function K(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(h.jsx)(l.elastic,{isOpen:n,onStateChange:function(e){return a(e.isOpen)},pageWrapId:"page-wrap",children:null===G||void 0===G?void 0:G.map((function(e,t){return Object(h.jsxs)("div",{children:[e.icon,Object(h.jsx)(s.b,{to:{pathname:e.path},onClick:function(){return a(!1)},children:e.name},t)]},t)}))})}var Q=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(s.a,{children:[Object(h.jsx)(K,{}),Object(h.jsx)("main",{id:"page-wrap",children:Object(h.jsx)(c.c,{children:Object(h.jsx)(c.a,{path:"/",component:V})})})]})})},X=Object(N.a)({reducer:{repoList:T}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(d.a,{store:X,children:Object(h.jsx)(Q,{})})}),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[202,1,2]]]);
//# sourceMappingURL=main.bcfd9fe3.chunk.js.map