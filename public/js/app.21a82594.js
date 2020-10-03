(function(t){function e(e){for(var n,a,i=e[0],u=e[1],l=e[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,i=1;i<s.length;i++){var u=s[i];0!==r[u]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},r={app:0},o=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=u;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("85ec"),r=s.n(n);r.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-link",{attrs:{to:"/movies"}},[t._v("movies")]),s("router-link",{attrs:{to:"/signup"}},[t._v("Signup")]),s("router-view")],1)},o=[],a=(s("034f"),s("2877")),i={},u=Object(a["a"])(i,r,o,!1,null,null,null),l=u.exports,c=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("h1",[t._v("5월 마지막주 영화 예매 순위")]),s("ul",{staticClass:"movies"},t._l(t.movies,(function(e,n){return s("li",{key:n,staticClass:"item"},[s("span",{staticClass:"rank"},[t._v(t._s(e.id))]),s("router-link",{attrs:{to:"/"+e.id}},[s("img",{staticClass:"poster",attrs:{src:e.poster}})]),s("div",{staticClass:"detail"},[s("strong",{staticClass:"tit"},[t._v(t._s(e.name))]),s("span",{staticClass:"rate"},[t._v("예매율 "),s("span",{staticClass:"num"},[t._v(t._s(e.rate))])]),s("router-link",{staticClass:"link",attrs:{to:"/"+e.id}},[t._v("자세히보기")])],1)],1)})),0)])},d=[],v={created:function(){var t=this;this.$http.get("/api/movies").then((function(e){t.movies=e.data}))},data:function(){return{movies:[]}}},m=v,f=Object(a["a"])(m,p,d,!1,null,null,null),h=f.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail"},[s("h1",[t._v(t._s(t.movie.name))]),s("img",{staticClass:"poster",attrs:{src:t.movie.poster}}),s("section",[s("h2",[t._v("영화정보")]),s("dl",{staticClass:"info"},[s("dt",[t._v("감독")]),s("dd",[t._v(t._s(t.movie.director))]),s("dt",[t._v("출연")]),s("dd",[t._v(t._s(t.movie.actors))]),s("dt",[t._v("러닝타임")]),s("dd",[t._v(t._s(t.movie.time))])])]),s("section",[s("h2",[t._v("줄거리")]),s("p",{staticClass:"synopsis",domProps:{innerHTML:t._s(t.movie.synopsis)}})]),s("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("돌아가기")])],1)},g=[],b={created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/movies/".concat(e)).then((function(e){t.movie=e.data[0],console.log(e)})).catch((function(t){console.log("비동기 통신 중 error : "+t)}))},data:function(){return{movie:{}}}},w=b,y=Object(a["a"])(w,_,g,!1,null,null,null),x=y.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.signUp(e)}}},[s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"id"}},[t._v("아이디")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.userid,expression:"user.userid"}],attrs:{type:"text",id:"id"},domProps:{value:t.user.userid},on:{input:function(e){e.target.composing||t.$set(t.user,"userid",e.target.value)}}})]),s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"name"}},[t._v("이름")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],attrs:{type:"text",id:"name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),s("div",{staticClass:"input_row"},[s("label",{attrs:{for:"password"}},[t._v("비밀번호")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",name:"pasword",id:"pasword"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),s("button",{attrs:{type:"submit"}},[t._v("회원가입")])])])},O=[],j={data:function(){return{user:{userid:"",name:"",password:""}}},methods:{signUp:function(){console.log("signUp method 실행됨"),this.$http.post("/users/signup",{user:this.user}).then((function(t){console.log("axios 성공"),t.data.success,alert(t.data.msg)})).catch((function(t){console.log("axios실행 중 에러"),alert(t.stack)}))}}},k=j,P=Object(a["a"])(k,C,O,!1,null,null,null),$=P.exports;n["a"].use(c["a"]);var S=[{path:"/movies",name:"MovieIndexPage",component:h},{path:"/movies:id",name:"MovieShowPage",component:x},{path:"/signUp",name:"SignUp",component:$}],M=new c["a"]({mode:"history",base:"/",routes:S}),U=s("bc3a"),E=s.n(U);n["a"].config.productionTip=!1,n["a"].prototype.$http=E.a,new n["a"]({router:M,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,s){}});
//# sourceMappingURL=app.21a82594.js.map