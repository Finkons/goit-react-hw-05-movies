"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[508],{6405:function(n,e,t){t.d(e,{Hg:function(){return l},IQ:function(){return d},Jh:function(){return f},s_:function(){return p},z1:function(){return u}});var r=t(5861),a=t(4687),i=t.n(a),o=t(4569),c=t.n(o);c().defaults.baseURL="https://api.themoviedb.org/3";var s="250f014fd6a936550e378176122f5d39",u=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/search/movie?api_key=".concat(s,"&language=en-US&page=").concat(t,"&query=").concat(e,"&include_adult=true"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/trending/all/week?api_key=".concat(s,"&page=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},1508:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,i,o,c,s,u=t(885),l=t(2791),p=t(6871),d=t(6405),f=t(2881),g=t(168),h=t(2879),x=t(501),m=h.Z.div(r||(r=(0,g.Z)(["\n  display: flex;\n  align-items: flex-start;\n  width: 1200px;\n  margin: 0 auto;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n"]))),v=h.Z.img(a||(a=(0,g.Z)(["\n  display: flex;\n  align-items: flex-start;\n  margin: 0 auto;\n  padding-bottom: 50px;\n}\n"]))),b=h.Z.div(i||(i=(0,g.Z)(["\n  margin-left: 100px;\n  h2{\n    color: green;\n    margin-bottom: 10px;\n  }\n  h3{\n    padding-bottom: 10px ;\n  }\n  p{\n    margin-bottom: 20px;\n  }\n}\n"]))),w=h.Z.div(o||(o=(0,g.Z)(["\n  background-color: rgb(58, 57, 56);\n  display: flex;\n  padding-top: 25px;\n  padding-bottom: 25px;\n  justify-content: center;\n}\n"]))),j=(0,h.Z)(x.OL)(c||(c=(0,g.Z)(["\n  margin-left: 10px;\n  font-size: 18px;\n  font-weight: 700;\n  color: coral;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 250ms linear;\n}\n"]))),k=h.Z.button(s||(s=(0,g.Z)(["\n  display: block;\n  width: 220px;\n  height: 50px;\n  margin-top: 20px;\n  margin-left: 60px;\n  color: coral;\n  font-size: 18px;\n  font-weight: 700;\n  border: none;\n  border-radius: 5px;\n  background-color: rgb(58, 57, 56);\n  outline: none;\n  cursor: pointer;\n  transition: all 250ms linear;\n  &:hover{\n  color: yellow;\n  transition: all 250ms linear;\n  }\n"]))),Z=t(184),y=function(n){var e=n.movie,t=e.original_title,r=e.genres,a=e.overview,i=e.poster_path,o=e.release_date,c=e.vote_average,s=r.map((function(n){return n.name})).join(", "),u=(0,p.TH)();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(m,{children:[(0,Z.jsx)(v,{src:i?"https://image.tmdb.org/t/p/w300/".concat(i):"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png",alt:t}),(0,Z.jsxs)(b,{children:[(0,Z.jsx)("h1",{children:t}),(0,Z.jsxs)("h2",{children:[" (",o,")"]}),(0,Z.jsxs)("p",{children:["User Score: ",c]}),(0,Z.jsx)("h3",{children:"Overview"}),(0,Z.jsx)("p",{children:a}),(0,Z.jsx)("h3",{children:"Genres"}),(0,Z.jsx)("p",{children:s})]})]}),(0,Z.jsxs)(w,{children:[(0,Z.jsx)(j,{to:"cast",state:u.state,children:"Cast"}),(0,Z.jsx)(j,{to:"reviews",state:u.state,children:"Reviews"})]})]})},_=(0,l.lazy)((function(){return t.e(733).then(t.bind(t,733))})),S=(0,l.lazy)((function(){return t.e(902).then(t.bind(t,4902))})),U=function(){var n=(0,p.UO)().movieId,e=(0,l.useState)(null),t=(0,u.Z)(e,2),r=t[0],a=t[1],i=(0,l.useState)(""),o=(0,u.Z)(i,2),c=o[0],s=o[1],g=(0,l.useState)(!1),h=(0,u.Z)(g,2),x=h[0],m=h[1],v=(0,p.s0)(),b=(0,p.TH)();return(0,l.useEffect)((function(){m(!0),(0,d.s_)(n).then((function(n){return a(n)})).catch((function(n){return s(n.message)})).finally((function(){return m(!1)}))}),[n]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(k,{type:"button",onClick:function(){var n,e;v(null!==(n=null===b||void 0===b||null===(e=b.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},children:"Go back"}),x&&(0,Z.jsx)(f.Z,{}),r&&(0,Z.jsx)(y,{movie:r}),c&&(0,Z.jsx)("p",{children:"Something went wrong, please try again later!"}),(0,Z.jsxs)(p.Z5,{children:[(0,Z.jsx)(p.AW,{path:"cast",element:(0,Z.jsx)(_,{})}),(0,Z.jsx)(p.AW,{path:"reviews",element:(0,Z.jsx)(S,{})})]})]})}},2881:function(n,e,t){t.d(e,{Z:function(){return r.Z}});var r=t(4436)}}]);
//# sourceMappingURL=508.62447bfc.chunk.js.map