(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[180],{6656:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chat",function(){return t(2474)}])},2474:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var r=t(4051),a=t.n(r),s=t(5893),o=t(9008),u=t(7294),i=t(1157).ZP.connect("https://damp-wildwood-91491.herokuapp.com/"),c=t(1163),l=t(4883),f=t.n(l);function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function h(e,n,t,r,a,s,o){try{var u=e[s](o),i=u.value}catch(c){return void t(c)}u.done?n(i):Promise.resolve(i).then(r,a)}function p(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=function(e){var n=e.lobby,t=e.username,r=(0,c.useRouter)(),a=(0,u.useRef)(),l=(0,u.useState)([]),m=l[0],h=l[1],d=(0,u.useState)(""),_=d[0],v=d[1],g=(0,u.useCallback)((function(){n&&n.trim()&&t&&t.trim()||r.push("/"),i.emit("userConnection",{username:t,lobby:n})}),[n,t,r]);(0,u.useEffect)((function(){i.on("connect",(function(){g(i),console.log("Socket Connected!")})),i.on("msg",(function(e){var n={idUser:e.idUser,username:e.username,message:e.message};h((function(e){return p(e).concat([n])}))}))}),[g]),(0,u.useEffect)((function(){a.current.scrollTo(0,a.current.scrollHeight)}),[m]);return(0,s.jsxs)("div",{className:f().wrapper,children:[(0,s.jsx)(o.default,{children:(0,s.jsx)("title",{children:"Realtime Chat"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:f().title,children:t}),n]}),(0,s.jsx)("div",{className:f().chat,ref:a,children:m.map((function(e){return e.username===t?(0,s.jsx)("div",{className:"".concat(f().message," ").concat(f().right),children:e.message}):(0,s.jsxs)("div",{className:f().message,children:[(0,s.jsx)("div",{className:f().sender,children:e.username}),e.message]})}))}),(0,s.jsxs)("form",{className:f().newMsgInput,children:[(0,s.jsx)("input",{type:"text",value:_,onChange:function(e){v(e.target.value)},placeholder:"Messaggio",autoComplete:"off",maxLength:"300"}),(0,s.jsx)("input",{type:"submit",onClick:function(e){e.preventDefault(),_.trim()&&(i.emit("chat",_),v(""))}})]})]})};d.getInitialProps=function(){var e,n=(e=a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query,e.abrupt("return",{lobby:t.lobby,username:t.username});case 2:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var s=e.apply(n,t);function o(e){h(s,r,a,o,u,"next",e)}function u(e){h(s,r,a,o,u,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}();var _=d},4883:function(e){e.exports={wrapper:"Chat_wrapper__f__dg",title:"Chat_title__cKWwJ",chat:"Chat_chat__0RQNQ",message:"Chat_message__Uw3ZJ",right:"Chat_right__rFmuT",sender:"Chat_sender__CeCcn",newMsgInput:"Chat_newMsgInput__qd_sx"}}},function(e){e.O(0,[860,774,888,179],(function(){return n=6656,e(e.s=n);var n}));var n=e.O();_N_E=n}]);