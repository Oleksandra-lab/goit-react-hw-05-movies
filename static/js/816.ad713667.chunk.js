"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[816],{90:function(e,r,n){n.r(r),n.d(r,{default:function(){return w}});var t,a=n(861),s=n(439),c=n(757),i=n.n(c),u=n(791),o=n(689),l=n(87),d=n(663),p=n(854),h=n(287),f=n(168),v=n(867).ZP.div(t||(t=(0,f.Z)(["\ndisplay: flex;\n.movieImg {\n    margin-right: 30px\n}\n"]))),x=n(184),m=(0,u.lazy)((function(){return n.e(758).then(n.bind(n,758))})),j=(0,u.lazy)((function(){return n.e(866).then(n.t.bind(n,866,23))})),w=function(){var e,r,n=(0,o.UO)().movieId,t=(0,o.TH)(),c=(0,u.useRef)(null!==(e=null===(r=t.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/"),f=(0,u.useState)(null),w=(0,s.Z)(f,2),g=w[0],b=w[1],Z=(0,u.useState)(!1),k=(0,s.Z)(Z,2),y=k[0],_=k[1],L=(0,u.useState)(null),S=(0,s.Z)(L,2),C=S[0],O=S[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,(0,d.TP)(n);case 4:r=e.sent,b(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),O(e.t0.message);case 11:return e.prev=11,_(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(l.rU,{to:c.current,children:(0,x.jsx)("button",{type:"button",children:"Go back"})}),y&&(0,x.jsx)(p.Z,{}),";",C&&(0,x.jsx)(h.Z,{message:C}),null!==g&&(0,x.jsxs)(v,{children:[(0,x.jsx)("img",{className:"movieImg",src:"".concat("https://image.tmdb.org/t/p/w400","/").concat(g.poster_path),alt:g.title}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h1",{children:g.title}),(0,x.jsxs)("p",{children:["User score: ",Math.round(10*g.vote_average),"%"]}),(0,x.jsx)("h2",{children:"Overview"}),(0,x.jsx)("p",{children:g.overview}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("ul",{children:g.genres.map((function(e){return(0,x.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,x.jsx)("h2",{children:"Additional information"}),(0,x.jsx)("div",{children:(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(l.OL,{to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(l.OL,{to:"reviews",children:"Reviews"})})]})}),(0,x.jsx)(u.Suspense,{fallback:(0,x.jsx)(p.Z,{}),children:(0,x.jsxs)(o.Z5,{children:[(0,x.jsx)(o.AW,{path:"cast",element:(0,x.jsx)(m,{})}),(0,x.jsx)(o.AW,{path:"reviews",element:(0,x.jsx)(j,{})})]})})]})}},663:function(e,r,n){n.d(r,{M1:function(){return d},PX:function(){return u},TP:function(){return l},rw:function(){return o}});var t=n(861),a=n(757),s=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="74e3875ddbdb3d01b8afddc4b578738c",u=function(){var e=(0,t.Z)(s().mark((function e(){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return r=e.sent,n=r.data,console.log(n.results),e.abrupt("return",n.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie/?api_key=".concat(i,"&query=").concat(r));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"?api_key=").concat(i));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"/credits?api_key=").concat(i));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},287:function(e,r,n){n(791);var t=n(184);r.Z=function(e){var r=e.message;return(0,t.jsx)("p",{className:"error",children:r})}},854:function(e,r,n){n(791);var t=n(881),a=n(184);r.Z=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(t.VL,{visible:!0,height:"80",width:"80",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})})}}}]);
//# sourceMappingURL=816.ad713667.chunk.js.map