(this["webpackJsonphandson-todo"]=this["webpackJsonphandson-todo"]||[]).push([[0],{21:function(e,t,a){e.exports=a(31)},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),c=a.n(r),o=(a(26),a(12)),s=a(13),l=a(5),u=a(19),m=a(18),d=a(32);var h=function(e){return i.a.createElement(d.a.Item,{style:{width:"50%",marginLeft:"10px"}},e.value)};var p=function(e){return i.a.createElement("div",null,i.a.createElement("h3",{style:{marginLeft:"10px",marginTop:"20px"}},"\u3010Todos\u3011"),i.a.createElement(d.a,null,e.arr.map((function(e){return i.a.createElement(h,{value:e})}))))},v=a(33),f=a(34),g=a(35),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={items:["\u8d77\u304d\u308b","\u9854\u6d17\u3046","\u6b6f\u3092\u78e8\u304f","\u9152\u98f2\u3080","\u5bdd\u308b"],inptxt:""},n.addClick=n.addClick.bind(Object(l.a)(n)),n.txtChange=n.txtChange.bind(Object(l.a)(n)),n}return Object(s.a)(a,[{key:"addClick",value:function(){var e=this.state.items.slice();e.push(this.state.inptxt),this.setState({items:e})}},{key:"txtChange",value:function(e){this.setState({inptxt:e.target.value})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(v.a,{className:"mb-3",style:{margin:"10px",width:"50%"}},i.a.createElement(f.a,{"aria-describedby":"basic-addon2",value:this.state.inptxt,onChange:this.txtChange}),i.a.createElement(v.a.Append,null,i.a.createElement(g.a,{variant:"success",onClick:this.addClick},"\u8ffd\u52a0"))),i.a.createElement(p,{arr:this.state.items}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.46356144.chunk.js.map