"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(t,e,n){n.r(e);var r=n(439),a=n(689),c=n(101),u=n(791),s=n(184);e.default=function(){var t=(0,u.useState)([]),e=(0,r.Z)(t,2),n=e[0],o=e[1],i=(0,a.UO)().movieId;return(0,u.useEffect)((function(){(0,c.M1)(i).then((function(t){return o(t.cast)}))}),[i]),(0,s.jsx)("div",{children:0!==n.length&&(0,s.jsx)("ul",{children:n.map((function(t){return(0,s.jsxs)("li",{children:[t.profile_path?(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(t.profile_path),alt:t.name,width:200}):(0,s.jsx)("img",{src:"http://tinleychamber.org/wp-content/uploads/2019/01/no-image-available.png",alt:t.name,width:200}),(0,s.jsx)("h4",{children:t.name}),(0,s.jsxs)("p",{children:["Character: ",t.character]})]},t.cast_id)}))})})}},101:function(t,e,n){n.d(e,{Ec:function(){return i},M1:function(){return l},TP:function(){return p},V0:function(){return h},tx:function(){return f}});var r=n(861),a=n(757),c=n.n(a),u=n(243),s="https://api.themoviedb.org/3/",o="d830553544ab88a00e6845a92b10c528",i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"trending/movie/week?api_key=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"movie/").concat(e,"?api_key=").concat(o));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(o));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(o));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.60e26e6d.chunk.js.map