(function(t){function e(e){for(var r,o,c=e[0],i=e[1],l=e[2],d=0,s=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&s.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(s.length)s.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a={app:0},u=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0d338e":"0712e50f","chunk-2d0d36f3":"65173b9f","chunk-2d0e95df":"7ab51c1a","chunk-2d2086b7":"5263458a","chunk-2d212f65":"286d2569","chunk-2d22d746":"54bf5436","chunk-6675fe5a":"03c366e4"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-6675fe5a":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0d338e":"31d6cfe0","chunk-2d0d36f3":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-2d212f65":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-6675fe5a":"eb70d017"}[t]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===a))return e()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){l=s[c],d=l.getAttribute("data-href");if(d===r||d===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[t],f.parentNode.removeChild(f),n(u)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=u);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(t);var s=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var f=d;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"1a12":function(t,e,n){},"365c":function(t,e,n){"use strict";n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return f}));var r=n("bc3a"),o=n.n(r),a=n("e26c"),u="http://localhost:3000",c=401,i=function(){a["a"].push("/login")},l=function(t,e,n){return o()({method:t,url:u+e,data:n}).then((function(t){return t.data})).catch((function(t){console.log("catch : "+t);var e=t.response.status;if(e===c)return i();throw Error(t)}))},d=function(t){o.a.defaults.headers.common["Authorization"]=t?"Bearer ".concat(t):null},s={fetch:function(){return l("get","/boards")},create:function(t){return l("post","/boards",{title:t})}},f={login:function(t,e){return l("post","/login",{email:t,password:e})}}},4360:function(t,e,n){"use strict";var r=n("2b0e"),o=n("2f62"),a={isAddBoard:!1,boards:[],token:null},u=a,c={isAuth:function(t){return!!t.token}},i=c,l=n("365c"),d={SET_IS_ADD_BOARD:function(t,e){t.isAddBoard=e},SET_BOARDS:function(t,e){t.boards=e},LOGIN:function(t,e){e&&(t.token=e,localStorage.setItem("token",e),Object(l["c"])(e))},LOGOUT:function(t){t.token=null,delete localStorage.token,Object(l["c"])(null)}},s=d,f={ADD_BOARD:function(t,e){var n=e.title;return l["b"].create(n)},FETCH_BOARDS:function(t){var e=t.commit;return l["b"].fetch().then((function(t){e("SET_BOARDS",t.list)}))},LOGIN:function(t,e){var n=t.commit,r=e.email,o=e.password;return l["a"].login(r,o).then((function(t){var e=t.accessToken;n("LOGIN",e)}))}},h=f;r["a"].use(o["a"]);var p=new o["a"].Store({state:u,getters:i,mutations:s,actions:h}),m=localStorage,b=m.token;p.commit("LOGIN",b);e["a"]=p},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n(t.layout,{tag:"component"},[n("router-view")],1)],1)},a=[],u="default",c={name:"app",computed:{layout:function(){return(this.$route.meta.layout||u)+"-layout"}}},i=c,l=(n("034f"),n("2877")),d=Object(l["a"])(i,o,a,!1,null,null,null),s=d.exports,f=n("e26c"),h=n("bc3a"),p=n.n(h),m=n("0628"),b=n.n(m),v=n("4360"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrap"}},[n("Navbar"),n("div",{attrs:{id:"container"}},[t._t("default")],2)],1)},k=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("nav",{staticClass:"nav"},[n("div",{staticClass:"inner"},[n("h1",[n("router-link",{attrs:{to:"/"}},[t._v("AppName")])],1),n("ul",{staticClass:"gnb"},[n("li",[n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("li",[n("router-link",{attrs:{to:"/b/1"}},[t._v("Board")])],1),n("li",[n("router-link",{attrs:{to:"/signup"}},[t._v("Signup")])],1),n("li",[t.isAuth?n("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Logout")]):n("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1)])])])])},y=[],_=n("5530"),w=n("2f62"),j={data:function(){return{test:""}},computed:Object(_["a"])({},Object(w["c"])(["isAuth"])),methods:Object(_["a"])(Object(_["a"])({},Object(w["d"])(["LOGOUT"])),{},{logout:function(){this.LOGOUT(),this.$router.push("/login")}})},A=j,S=(n("5dfc"),Object(l["a"])(A,O,y,!1,null,null,null)),E=S.exports,T={components:{Navbar:E}},L=T,D=Object(l["a"])(L,g,k,!1,null,null,null),B=D.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default")],2)},x=[],N={},P=N,$=Object(l["a"])(P,C,x,!1,null,null,null),I=$.exports;r["a"].component("default-layout",B),r["a"].component("blank-layout",I);var U={persist:!0};r["a"].use(b.a,U),r["a"].config.productionTip=!1,r["a"].prototype.$http=p.a,new r["a"]({router:f["a"],store:v["a"],render:function(t){return t(s)}}).$mount("#app")},"5dfc":function(t,e,n){"use strict";var r=n("1a12"),o=n.n(r);o.a},"85ec":function(t,e,n){},e26c:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));n("d3b7");var r=n("2b0e"),o=n("8c4f"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("div",[t._v("loading card...")]):n("div",[t._v("Card id : "+t._s(this.cid))])])},u=[],c={data:function(){return{cid:0,loading:!1}},watch:{$route:{handler:"fetchData",immediate:!0}},methods:{fetchData:function(){var t=this;this.loading=!0,setTimeout((function(){t.cid=t.$route.params.cid,t.loading=!1}),500)}}},i=c,l=n("2877"),d=Object(l["a"])(i,a,u,!1,null,null,null),s=d.exports,f=n("4360");r["a"].use(o["a"]);var h=function(t,e,n){var r="/login?rPath=".concat(encodeURIComponent(t.path));f["a"].getters.isAuth?n():n(r)},p=[{path:"/",name:"home",component:function(){return n.e("chunk-6675fe5a").then(n.bind(null,"bb51"))},beforeEnter:h},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/signUp",name:"SignUp",component:function(){return n.e("chunk-2d0d338e").then(n.bind(null,"5c9c"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"/userlist",name:"UserList",component:function(){return n.e("chunk-2d212f65").then(n.bind(null,"ab3a"))}},{path:"/b/:bid",name:"Board",beforeEnter:h,component:function(){return n.e("chunk-2d0d36f3").then(n.bind(null,"5d6d"))},children:[{path:"c/:cid",component:s}]},{path:"*",name:"notfound",meta:{layout:"blank"},component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}}],m=new o["a"]({mode:"history",base:"/",routes:p})}});
//# sourceMappingURL=app.829453fe.js.map