(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e){e.exports={Blackish:"#00051f",DarkMain:"#000e4a",DarkOne:"#001b79",DarkTwo:"#002da4",Midpoint:"#0047c6",LightThree:"#2a7fde",LightTwo:"#65baee",LightOne:"#a5e6f9",LightMain:"#e5fdff"}},,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(4),s=n.n(i),r=n(5),u=n(6),l=n(8),c=n(7),d=n(9),h=n(1),m=(n(15),n(16),n(2)),p=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={query:"",mountSubheading:!0,mountCommandsList:!1},n.resetQuery=n.resetQuery.bind(Object(h.a)(Object(h.a)(n))),n.updateQuery=n.updateQuery.bind(Object(h.a)(Object(h.a)(n))),n.handleCommand=n.handleCommand.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"resetQuery",value:function(){document.getElementById("input").focus(),this.setState({query:""})}},{key:"updateQuery",value:function(e){this.setState({query:e.target.value,mountSubheading:!1})}},{key:"handleCommand",value:function(e){var t=e.key,n=this.state.query,a=this.resetQuery;"Escape"===t?a():"?"===n?this.setState({mountCommandsList:!0}):/hello/i.test(n)||/about/i.test(n)?this.setState({}):/skills/i.test(n)?this.setState({}):/experience/i.test(n)?this.setState({}):/projects/i.test(n)?this.setState({}):/classes/i.test(n)?this.setState({}):(/flip/i.test(n),this.setState({}))}},{key:"render",value:function(){var e=this.state,t=e.query,n=e.mountSubheading,i=(e.mountCommandsList,this.resetQuery),s=this.updateQuery,r=this.handleCommand;return document.getElementsByTagName("body")[0].bgColor=m.LightMain,o.a.createElement(a.Fragment,null,o.a.createElement("div",{id:"top-panel",style:n?{backgroundColor:m.DarkMain,height:"240px"}:{backgroundColor:m.DarkMain,height:"140px"}},o.a.createElement("p",{className:"heading",style:{color:m.LightMain},role:"button",tabIndex:"0",onClick:function(){return window.location.reload()}},"Michael M. Q. Nguyen"),n&&o.a.createElement("p",{className:"subheading",style:{color:m.LightMain}},"I code designs & design code.",o.a.createElement("br",null),"Your cursor is hot and ready to fire,",o.a.createElement("br",null),"just go ahead and type \u2018hello\u2019!"),o.a.createElement("div",{style:{margin:"-10px -10px",paddingTop:"15px"}},o.a.createElement("span",{className:"input-bracket pulse",role:"button",tabIndex:"0",onClick:i},"["),o.a.createElement("input",{id:"input",type:"text",value:t,onChange:s,onKeyUp:r,autoFocus:!0,style:{width:"".concat(53*t.length,"px"),fontFamily:"'Anonymous Pro', monospace",fontSize:"72pt",color:m.LightMain,caretColor:m.LightMain,backgroundColor:"rgba(0,0,0,0.0)",outline:"none",border:"none"}}),o.a.createElement("span",{className:"input-bracket pulse",role:"button",tabIndex:"0",onClick:i},"]"))),o.a.createElement("div",{style:{position:"fixed",bottom:"100px",left:"18vw"}},"This site is under some reconstruction at the moment. Hang tight; it'll look pretty cool when it's done!"))}}]),t}(a.Component);s.a.render(o.a.createElement(p,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.23a2f98d.chunk.js.map