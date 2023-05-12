(function(e){function t(t){for(var o,i,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,i=1;i<r.length;i++){var u=r[i];0!==n[u]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var o={},n={app:0},a=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-1335a3e6":"b0f8da6c"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var c=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,r[1](c)}n[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(r,o,function(t){return e[t]}.bind(null,o));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/magpie3-simon-task/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1:function(e,t){},2:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);var o=r("2b0e"),n=r("7591"),a=r.n(n),i=r("3665"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Experiment",[r("InstructionScreen",[r("p",[e._v("Thank you for participating in this experiment!")])]),r("InstructionScreen",[r("p",[e._v(" In this experiment you will be shown two types of geometric figures: a square and a circle. On each trial, you will first see a fixation cross in the middle of the screen, which prompts you that the next trial is about to start. Please center your gaze at the fixation cross at the start of each trial. When the fixation cross disappears, exactly one of the shapes (square or circle) will be displayed, either on the left or right part of your screen. ")]),r("p",[e._v(" Whenever you see a circle, please press the 'p' key on your keyboard, whenever you see a square, please press the 'q' key - regardless of the position of the shape. ")]),r("p",[e._v(" Please try to press the key as soon as possible while also trying to make as few errors as you can. ")]),r("p",[e._v(" Before the actual experiment starts, a practice session will give you the possibility to familiarize yourself with the task. ")])]),e._l(e.trials,(function(t,o){return[r("KeypressScreen",{key:o,attrs:{keys:{q:"square",p:"circle"},"fixation-time":Math.floor(1500*Math.random()+1200)},scopedSlots:e._u([{key:"stimulus",fn:function(){return[r("CanvasStage",{attrs:{config:{width:800,height:400}}},[r("CanvasLayer",["circle"===t.target_object?r("CanvasCircle",{attrs:{config:{fill:"lightblue",radius:50,x:"left"===t.target_position?50:700,y:200}}}):e._e(),"square"===t.target_object?r("CanvasRect",{attrs:{config:{fill:"lightblue",width:100,height:100,x:"left"===t.target_position?50:700,y:150}}}):e._e()],1)],1)]},proxy:!0}],null,!0)})]})),r("PostTestScreen"),r("DebugResultsScreen")],2)},u=[],c=r("2ef0"),l=r.n(c),p={name:"App",data(){const e=l.a.map(l.a.range(20),()=>l.a.sample(f));return{trials:e}}};const f=[{target_object:"circle",target_position:"left"},{target_object:"circle",target_position:"right"},{target_object:"square",target_position:"right"},{target_object:"square",target_position:"left"}];var h=p,d=r("2877"),g=Object(d["a"])(h,s,u,!1,null,null,null),y=g.exports,m={experimentId:"171",serverUrl:"https://magpie-demo.herokuapp.com/",socketUrl:"wss://magpie-demo.herokuapp.com/socket",completionUrl:"https://...",contactEmail:"test@random.com",mode:"debug"};o["default"].config.productionTip=!1,o["default"].use(a.a,{prefix:"Canvas"}),o["default"].use(i["a"],m),new o["default"]({render:e=>e(y)}).$mount("#app")}});
//# sourceMappingURL=app.5e39a5f9.js.map