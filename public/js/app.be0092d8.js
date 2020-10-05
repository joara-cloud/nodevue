(function(t){function e(e){for(var s,i,a=e[0],u=e[1],l=e[2],d=0,p=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},r={app:0},o=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0e36":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return r}));var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home ")]),n("router-link",{attrs:{to:"/signup"}},[t._v("Signup ")]),n("router-link",{attrs:{to:"/login"}},[t._v("Login ")]),n("router-link",{attrs:{to:"/userlist"}},[t._v("Userlist ")]),n("router-view")],1)},r=[]},"199c":function(t,e){},"23be":function(t,e,n){"use strict";var s=n("199c"),r=n.n(s);e["default"]=r.a},"3dfd":function(t,e,n){"use strict";var s=n("0e36"),r=n("23be"),o=n("2877"),i=Object(o["a"])(r["default"],s["a"],s["b"],!1,null,null,null);e["default"]=i.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=n("3dfd"),o=n("8c4f"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("h1",[t._v("5월 마지막주 영화 예매 순위")]),n("ul",{staticClass:"movies"},t._l(t.movies,(function(e,s){return n("li",{key:s,staticClass:"item"},[n("span",{staticClass:"rank"},[t._v(t._s(e.id))]),n("router-link",{attrs:{to:"/"+e.id}},[n("img",{staticClass:"poster",attrs:{src:e.poster}})]),n("div",{staticClass:"detail"},[n("strong",{staticClass:"tit"},[t._v(t._s(e.name))]),n("span",{staticClass:"rate"},[t._v("예매율 "),n("span",{staticClass:"num"},[t._v(t._s(e.rate))])]),n("router-link",{staticClass:"link",attrs:{to:"/"+e.id}},[t._v("자세히보기")])],1)],1)})),0)])},a=[],u={created:function(){var t=this;this.$http.get("/api/movies").then((function(e){t.movies=e.data}))},data:function(){return{movies:[]}}},l=u,c=n("2877"),d=Object(c["a"])(l,i,a,!1,null,null,null),p=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail"},[n("h1",[t._v(t._s(t.movie.name))]),n("img",{staticClass:"poster",attrs:{src:t.movie.poster}}),n("section",[n("h2",[t._v("영화정보")]),n("dl",{staticClass:"info"},[n("dt",[t._v("감독")]),n("dd",[t._v(t._s(t.movie.director))]),n("dt",[t._v("출연")]),n("dd",[t._v(t._s(t.movie.actors))]),n("dt",[t._v("러닝타임")]),n("dd",[t._v(t._s(t.movie.time))])])]),n("section",[n("h2",[t._v("줄거리")]),n("p",{staticClass:"synopsis",domProps:{innerHTML:t._s(t.movie.synopsis)}})]),n("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("돌아가기")])],1)},m=[],f={created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/movies/".concat(e)).then((function(e){t.movie=e.data[0],console.log(e)})).catch((function(t){console.log("비동기 통신 중 error : "+t)}))},data:function(){return{movie:{}}}},h=f,_=Object(c["a"])(h,v,m,!1,null,null,null),g=_.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.signUp(e)}}},[n("div",{staticClass:"input_row"},[n("label",{attrs:{for:"id"}},[t._v("아이디")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.userid,expression:"user.userid"}],attrs:{type:"text",id:"id"},domProps:{value:t.user.userid},on:{input:function(e){e.target.composing||t.$set(t.user,"userid",e.target.value)}}})]),n("div",{staticClass:"input_row"},[n("label",{attrs:{for:"name"}},[t._v("이름")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],attrs:{type:"text",id:"name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),n("div",{staticClass:"input_row"},[n("label",{attrs:{for:"password"}},[t._v("비밀번호")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",name:"pasword",id:"pasword"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),n("button",{attrs:{type:"submit"}},[t._v("회원가입")])])])},w=[],y={data:function(){return{user:{userid:"",name:"",password:""}}},methods:{signUp:function(){console.log("signUp method 실행됨"),this.$http.post("/users/signup",{user:this.user}).then((function(t){console.log("axios 성공"),t.data.success,alert(t.data.msg)})).catch((function(t){console.log("axios실행 중 에러"),alert(t.stack)}))}}},x=y,$=Object(c["a"])(x,b,w,!1,null,null,null),C=$.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("div",{staticClass:"input_row"},[n("label",{attrs:{for:""}},[t._v("아이디")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.id,expression:"user.id"}],attrs:{type:"text",id:"id"},domProps:{value:t.user.id},on:{input:function(e){e.target.composing||t.$set(t.user,"id",e.target.value)}}})]),n("div",{staticClass:"input_row"},[n("label",{attrs:{for:""}},[t._v("비밀번호")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",id:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),n("button",{attrs:{type:"submit"}},[t._v("로그인")])])])},j=[],k={data:function(){return{user:{id:"",password:""}}},methods:{login:function(){this.$http.post("/users/login",{user:this.user}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}}},P=k,E=Object(c["a"])(P,O,j,!1,null,null,null),S=E.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("user id : "+t._s(this.user.id))]),n("div",[t._v("user name : "+t._s(this.user.name))])])},U=[],N={data:function(){return{user:{id:"",name:""}}},created:function(){this.$http("/users/users").then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}},L=N,T=Object(c["a"])(L,M,U,!1,null,null,null),D=T.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("bid : "+t._s(this.bid))]),n("router-link",{attrs:{to:"/b/"+t.bid+"/c/1"}},[t._v("Card 1")]),n("router-link",{attrs:{to:"/b/"+t.bid+"/c/2"}},[t._v("Card 2")]),n("hr"),n("router-view")],1)},J=[],B={data:function(){return{bid:0}},created:function(){this.bid=this.$route.params.bid}},I=B,q=Object(c["a"])(I,H,J,!1,null,null,null),z=q.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Card id : "+t._s(this.cid)+" ")])},F=[],G={data:function(){return{cid:0}},watch:{$route:function(){this.cid=this.$route.params.cid}},created:function(){this.cid=this.$route.params.cid}},K=G,Q=Object(c["a"])(K,A,F,!1,null,null,null),R=Q.exports;s["a"].use(o["a"]);var V=[{path:"/movies",name:"MovieIndexPage",component:p},{path:"/movies:id",name:"MovieShowPage",component:g},{path:"/signUp",name:"SignUp",component:C},{path:"/login",name:"Login",component:S},{path:"/userlist",name:"UserList",component:D},{path:"/b/:bid",name:"Board",component:z,children:[{path:"c/:cid",component:R}]}],W=new o["a"]({mode:"history",base:"/",routes:V}),X=n("bc3a"),Y=n.n(X);s["a"].config.productionTip=!1,s["a"].prototype.$http=Y.a,new s["a"]({router:W,render:function(t){return t(r["default"])}}).$mount("#app")}});
//# sourceMappingURL=app.be0092d8.js.map