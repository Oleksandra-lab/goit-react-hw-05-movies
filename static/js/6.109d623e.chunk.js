"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6],{6:function(e,r,t){t.r(r);var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(791),i=t(663),o=t(854),p=t(287),f=t(87),l=t(184);r.default=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),t=r[0],u=r[1],d=(0,s.useState)(!1),v=(0,a.Z)(d,2),h=v[0],x=v[1],m=(0,s.useState)(null),w=(0,a.Z)(m,2),b=w[0],Z=w[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,i.PX)();case 4:r=e.sent,u(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Z(e.t0.message);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsxs)("div",{children:[h&&(0,l.jsx)(o.Z,{}),b&&(0,l.jsx)(p.Z,{message:b}),(0,l.jsx)("h1",{children:"Trending today"}),null!==t&&t.map((function(e){return(0,l.jsx)(f.rU,{to:"/movies/".concat(e.id),children:(0,l.jsx)("li",{children:e.title})},e.id)}))]})}},663:function(e,r,t){t.d(r,{PX:function(){return i},TP:function(){return p},rw:function(){return o}});var n=t(861),a=t(757),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="74e3875ddbdb3d01b8afddc4b578738c",i=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return r=e.sent,t=r.data,console.log(t.results),e.abrupt("return",t.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie/?api_key=".concat(s,"&query=").concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"?api_key=").concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},287:function(e,r,t){t(791);var n=t(184);r.Z=function(e){var r=e.message;return(0,n.jsx)("p",{className:"error",children:r})}},854:function(e,r,t){t(791);var n=t(881),a=t(184);r.Z=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(n.VL,{visible:!0,height:"80",width:"80",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})})}}}]);
//# sourceMappingURL=6.109d623e.chunk.js.map