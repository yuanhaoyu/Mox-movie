webpackJsonp([0],[,,,,,function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return r});var i="GET_HOME_MSG",o="GET_DATE_INFO",r="TO_LOGIN"},,,,,,function(t,e,n){"use strict";var i=n(2),o=n(1),r=n(104),a=(n.n(r),n(38)),s=n(39),u=n(37),c=n(40);i.a.use(o.a),e.a=new o.a.Store({modules:{gobal:a.a,home:s.a,calendar:u.a,user:c.a},strict:!1,plugins:[]})},,,,,,,,,,function(t,e,n){"use strict";var i=n(2),o=n(102),r=n(85),a=n.n(r),s=n(87),u=n.n(s),c=n(86),l=n.n(c),d=n(83),p=n.n(d),f=n(89),m=n.n(f);n(11);i.a.use(o.a),e.a=new o.a({routes:[{path:"/",name:"home",component:a.a},{path:"/home",name:"home2",component:a.a},{path:"/mine/:id",name:"mine2",component:u.a},{path:"/mine",name:"mine",component:u.a},{path:"/login",name:"login",component:l.a},{path:"/calendar",name:"calendar",component:p.a},{path:"/recommend",name:"recommend",component:m.a}]})},function(t,e,n){function i(t){n(75)}var o=n(0)(n(25),n(95),i,null,null);t.exports=o.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=n(20),n(70)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&i){delete t.options.notNextTick;var e=!1;for(var n in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(n)&&t.options[n]&&(e=!0,t.defaultSwiperClasses[n]=t.options[n]);var o=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(o):o()}};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(71),o=(n.n(i),n(90)),r=n.n(o),a=n(88),s=n.n(a);e.default={name:"app",components:{Topbar:r.a,MyNav:s.a},created:function(){this.$router.push("/home")}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),o=n.n(i),r=n(1);e.default={name:"Calendar",computed:o()({},n.i(r.b)({listss:function(t){return t.calendar.dateInfo}})),methods:o()({},n.i(r.c)(["getDateInfo"])),created:function(){this.getDateInfo(),document.getElementById("app").scrollTop=0}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),o=n.n(i),r=n(1);e.default={name:"Content",computed:o()({},n.i(r.b)({lists:function(t){return t.home.homeMsg.body},test:function(t){return t.gobal}})),methods:o()({},n.i(r.c)(["getHomeMsg"])),created:function(){this.getHomeMsg()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(84),o=n.n(i);e.default={name:"Home",components:{Content:o.a},created:function(){document.getElementById("app").scrollTop=0,console.log(1)},mounted:function(){document.getElementById("app").scrollTop=0,console.log(2)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),o=n.n(i),r=n(1);e.default={name:"Login",data:function(){return{name:"",pwd:""}},computed:o()({},n.i(r.b)({flag:function(t){return t.user.userMsg.loginFlag}})),methods:o()({},n.i(r.c)(["toLogin"]),{login:function(){this.toLogin({name:this.name,pwd:this.pwd})}}),watch:{flag:function(t){t&&this.$router.push("/mine")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),o=n.n(i),r=n(1);e.default={name:"Mine",computed:o()({},n.i(r.b)({flag:function(t){return t.user.userMsg.loginFlag}})),created:function(){this.flag||this.$router.push("/login")}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MyNav"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(12);n.n(i);e.default={name:"Recommend",components:{swiper:i.swiper,swiperSlide:i.swiperSlide},data:function(){var t=this;return{items:[1,2,3,4,5],lists:["1.牛逼红灌灌灌灌","2.阿西吧撸啊撸","3.丢丢丢","4.此次次次灌灌灌","5.牛逼红灌灌灌灌"],swiperOption:{notNextTick:!0,slidesPerView:"auto",paginationClickable:!0,spaceBetween:30,onSlideChangeEnd:function(e){t.page=e.realIndex+1,t.index=e.realIndex}}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},mounted:function(){this.swiper.slideTo(0,0,!1)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Topbar",data:function(){return{name:"首页"}},watch:{$route:function(t,e){switch(t.name){case"calendar":this.name="日历";break;case"home2":case"home":this.name="首页";break;case"mine":this.name="我的";break;case"recommend":this.name="推荐";break;case"login":this.name="登录"}}}}},function(t,e,n){"use strict";var i=n(2),o=n(13);i.a.use(o.a),e.a={getHomeMsg:function(){return i.a.http.jsonp("https://api.douban.com/v2/movie/in_theaters")}}},function(t,e,n){"use strict";function i(t){var e=new Date;return e.setDate(t),e.getDay()}function o(t,e){for(var n=[];t<=e;)n.push(t),t++;return n}e.a=i,e.b=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o=n(22),r=n.n(o),a=n(21),s=n(11),u=n(13),c=n(12),l=n.n(c);i.a.config.productionTip=!1,i.a.use(a.a),i.a.use(u.a),i.a.use(l.a),new i.a({el:"#app",router:a.a,store:s.a,template:"<App/>",components:{App:r.a}}).$mount("#app")},function(t,e,n){"use strict";var i=n(6),o=n.n(i),r=n(35),a=n(5),s={dateInfo:[]},u={getDateInfo:function(t){var e=t.commit,i=n.i(r.a)(1);0==i&&(i=7);var o=new Array(i).concat(n.i(r.b)(1,31));e(a.b,{body:o})}},c=o()({},a.b,function(t,e){for(var n=[];e.body.length>0;)n.push(e.body.slice(0,7)),e.body.splice(0,7);t.dateInfo=n});e.a={state:s,actions:u,mutations:c}},function(t,e,n){"use strict";var i={isLogin:!1};e.a={state:i}},function(t,e,n){"use strict";var i=n(6),o=n.n(i),r=n(5),a=n(34),s={homeMsg:[]},u={getHomeMsg:function(t){var e=t.commit;a.a.getHomeMsg().then(function(t){t.ok&&e(r.c,{body:{title:t.body.title,body:t.body.subjects}})})}},c=o()({},r.c,function(t,e){t.homeMsg=e.body});e.a={state:s,actions:u,mutations:c}},function(t,e,n){"use strict";var i=n(6),o=n.n(i),r=n(5),a={userMsg:{loginFlag:!1}},s={toLogin:function(t,e){var n=t.commit;"test"===e.name&&"test"===e.pwd?n(r.a,{body:{loginFlag:!0}}):n(r.a,{body:{loginFlag:!1}})}},u=o()({},r.a,function(t,e){t.userMsg=e.body});e.a={state:a,actions:s,mutations:u}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var i=n(0)(n(23),n(97),null,null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(24),n(92),null,null,null);t.exports=i.exports},function(t,e,n){function i(t){n(77)}var o=n(0)(n(26),n(98),i,"data-v-66b8d478",null);t.exports=o.exports},function(t,e,n){function i(t){n(73)}var o=n(0)(n(27),n(93),i,"data-v-1e47d0af",null);t.exports=o.exports},function(t,e,n){function i(t){n(78)}var o=n(0)(n(28),n(99),i,null,null);t.exports=o.exports},function(t,e,n){function i(t){n(80)}var o=n(0)(n(29),n(101),i,null,null);t.exports=o.exports},function(t,e,n){function i(t){n(74)}var o=n(0)(n(30),n(94),i,null,null);t.exports=o.exports},function(t,e,n){function i(t){n(72)}var o=n(0)(n(31),n(91),i,"data-v-0c56e08d",null);t.exports=o.exports},function(t,e,n){function i(t){n(79)}var o=n(0)(n(32),n(100),i,null,null);t.exports=o.exports},function(t,e,n){function i(t){n(76)}var o=n(0)(n(33),n(96),i,"data-v-4270e858",null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("ul",[n("li",[n("router-link",{attrs:{to:"/home"}},[t._v("首页")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/calendar"}},[t._v("日历")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/recommend"}},[t._v("推荐")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/mine"}},[t._v("我的")])],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"content"}},[n("ul",t._l(t.lists,function(t){return n("li",[n("div",{staticClass:"img",style:{backgroundImage:"url("+t.images.large+")"}})])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mine"}},[n("div",[n("p",[t._v("Hello")])]),t._v(" "),n("div",[n("ul",[n("li",[t._v("1")]),t._v(" "),n("li",[t._v("2")]),t._v(" "),n("li",[t._v("3")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Topbar",{attrs:{name:"首页"}}),t._v(" "),n("transition",{attrs:{name:"slide",mode:"out-in"}},[n("router-view")],1),t._v(" "),n("keep-alive",[n("MyNav")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"topbar"}},[t._v(t._s(t.name))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Calendar"}},[n("table",[t._m(0),t._v(" "),t._l(t.listss,function(e){return n("tr",t._l(e,function(e){return n("td",[t._v(t._s(e))])}))})],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("星期日")]),t._v(" "),n("td",[t._v("星期一")]),t._v(" "),n("td",[t._v("星期二")]),t._v(" "),n("td",[t._v("星期三")]),t._v(" "),n("td",[t._v("星期四")]),t._v(" "),n("td",[t._v("星期五")]),t._v(" "),n("td",[t._v("星期六")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("Content")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"recommend"}},[n("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.items,function(e){return n("swiper-slide",[n("div",{staticClass:"t"},[n("p",[t._v(t._s(e))])])])}),t._v(" "),n("div",{staticClass:"swiper-pagination",slot:"pagination"})],2),t._v(" "),n("div",{staticClass:"recommendContent"},[n("ul",t._l(t.lists,function(e){return n("li",[t._v(t._s(e))])}))])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"login"}},[n("form",{attrs:{action:""}},[n("p",[t._v("请输入用户名")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("p",[t._v("请输入密码")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],attrs:{type:"password"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("input",{staticClass:"loginAction",attrs:{type:"button",value:"确定"},on:{click:t.login}})])])},staticRenderFns:[]}},,,,,function(t,e){}],[36]);
//# sourceMappingURL=app.0a2ce38d806e0ec6b474.js.map