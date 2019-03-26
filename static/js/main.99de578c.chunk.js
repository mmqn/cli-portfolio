(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,o){e.exports=o(16)},15:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(4),l=o.n(r),s=o(5),i=o(6),c=o(8),u=o(7),m=o(9),d=o(1),p=(o(3),o(15),function(e){var t=e.text,o=e.coordinates,n=e.colors;return a.a.createElement("div",{id:"tooltip",style:{left:"".concat(o[0],"px"),top:"".concat(o[1],"px"),width:"".concat(9*t.length+6,"px"),backgroundColor:n[0],color:n[1]}},t)}),C=p;p.defaultProps={text:"",coordinates:[0,0],colors:["#e5fdff","#00051f"]};var h=function(e){var t=e.result,o=e.contentColor;return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{key:"title",className:"Heading Underlined",style:{marginTop:"40px",color:o}},t.Title),t.Content.map(function(e,t){return a.a.createElement("p",{key:"result-".concat(t),className:"Output",style:{color:o}},e)}))},f=h;h.defaultProps={result:{Title:"Oh dear, looks like something went wrong \ud83d\ude26",Content:[""]},contentColor:"#e5fdff"};var g={commandsList:{Title:"List of Commands",Content:["hello | about","skills","experience","projects","classes","articles","flip \ud83d\udca1"]},about:{Title:"About Me",Content:["B.S. Computer Information Systems","Applications Development Concentration","Minor in Marketing","---","While those stats above may give you a general idea of my areas of interest, my actual list of interests is somewhat extensive. Keeping up with technology both in terms of technical knowledge and culture has always been a staple of my life.","---","However, through the years, I've gained more interest in other fields the more I've learned about them. As a former architecture major, I've always been interested in the interrelationship between design and function. Through my college years, I've gained leadership experience in marketing roles and have come to be facinated by the state of modern marketing and how closely it weaves with emergent technologies. Then I began to learn more about data analytics after some interesting classes and began experimenting with collecting and processsing data on whatever I can, from measuring the performance/efficieny of my development projects to the marketing campaigns I ran for my student organization.","---","Development, design, marketing, data analytics: These all seem like some disparate disciplines, but I think if you look closely, they are all the same. If used morally, they are all modern methods that allow us to make sense of the world and contribute to it in a creative way."]},skills:{Title:"Skills",Content:["HTML, CSS, & JavaScript","React.js","Java & PHP","SQL & Database Design","Adobe Illustrator, Photoshop, & After Effects","Adobe XD","Scrum Methodology","WordPress & Squarespace CMS","Instagram & Facebook Ads"]},experience:{Title:"Experience",Content:["Front-End Developer, Inland Engineering Services","Tech Lead, 2TAC Corporation","Vice President of Marketing, Alpha Kappa Psi","Overwatch Parties, Full-Stack Website Development","Movement, Web App for LA Hacks","Barista, The Coffee Bean & Tea Leaf"]},projects:{Title:"Projects",Content:["_"]},classes:{Title:"Classes",Content:["Object-Oriented Java","Secure Web Development","Back-End Web Development","Business Telecommunications","Database Design & Development","User Experience Design","Foundations in Digital Design","Consumer Behavior","Digital Analytics","Business Intelligence"]},articles:{Title:"Articles",Content:["_"]}},b=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={query:"",result:{Title:"",Content:[""]},uiColors:{BaseColor:"#00051f",AlternateBaseColor:"#000e4a",ContentColor:"#e5fdff",AlternateContentColor:"#a5e6f9"},columnColors:["#001b79","#002da4","#0047c6","#2a7fde"],mountCommandsList:!1,mountFlipPrompt:!1,mountTooltip:!1,tooltipCoordinates:[0,0],tooltipText:""},o.resetQuery=o.resetQuery.bind(Object(d.a)(Object(d.a)(o))),o.setQuery=o.setQuery.bind(Object(d.a)(Object(d.a)(o))),o.handleCommand=o.handleCommand.bind(Object(d.a)(Object(d.a)(o))),o.flipUI=o.flipUI.bind(Object(d.a)(Object(d.a)(o))),o.handleTooltip=o.handleTooltip.bind(Object(d.a)(Object(d.a)(o))),o}return Object(m.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.query!==this.state.query||e.uiColors.BaseColor!==this.state.uiColors.BaseColor||e.mountCommandsList!==this.state.mountCommandsList||e.mountFlipPrompt!==this.state.mountFlipPrompt||e.mountTooltip!==this.state.mountTooltip}},{key:"resetQuery",value:function(){document.getElementById("input").focus(),this.setState({query:"",mountFlipPrompt:!1,mountTooltip:!1})}},{key:"setQuery",value:function(e){var t=e.target;this.setState({query:t.value})}},{key:"handleCommand",value:function(e){var t=e.key,o=this.state.query,n=this.resetQuery;"Escape"===t?n():"?"===o?this.setState({mountCommandsList:!0}):/hello/i.test(o)||/about/i.test(o)?this.setState({result:g.about}):/skills/i.test(o)?this.setState({result:g.skills}):/experience/i.test(o)?this.setState({result:g.experience}):/projects/i.test(o)?this.setState({result:g.projects}):/classes/i.test(o)?this.setState({result:g.classes}):/flip/i.test(o)?this.setState({mountFlipPrompt:!0}):this.setState({result:{Title:"",Content:[""]}})}},{key:"flipUI",value:function(){var e=this.state.uiColors,t=this.resetQuery;"#00051f"===e.BaseColor?this.setState({uiColors:{BaseColor:"#e5fdff",AlternateBaseColor:"#a5e6f9",ContentColor:"#00051f",AlternateContentColor:"#000e4a"},columnColors:["#65baee","#2a7fde","#0047c6","#002da4"],mountTooltip:!1}):"#e5fdff"===e.BaseColor&&this.setState({uiColors:{BaseColor:"#00051f",AlternateBaseColor:"#000e4a",ContentColor:"#e5fdff",AlternateContentColor:"#a5e6f9"},columnColors:["#001b79","#002da4","#0047c6","#2a7fde"],mountTooltip:!1}),t()}},{key:"handleTooltip",value:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"bottom",a=[];if(t){var r=t.target.getBoundingClientRect(),l=r.left,s=r.bottom+8;if("top"===n){var i=2.2*r.height;s=r.bottom-i}a.push(l),a.push(s)}this.setState({mountTooltip:e,tooltipCoordinates:a,tooltipText:o})}},{key:"render",value:function(){var e=this,t=this.state,o=t.uiColors,r=t.columnColors,l=t.query,s=t.result,i=t.mountCommandsList,c=t.mountFlipPrompt,u=t.mountTooltip,m=t.tooltipCoordinates,d=t.tooltipText,p=this.resetQuery,h=this.setQuery,b=this.handleCommand,y=this.flipUI,v=this.handleTooltip,E=a.a.createElement(n.Fragment,null,a.a.createElement("div",{className:"ColumnDiv",style:{backgroundColor:r[0]}}),a.a.createElement("div",{className:"ColumnDiv",style:{backgroundColor:r[1]}}),a.a.createElement("div",{className:"ColumnDiv",style:{backgroundColor:r[2]}}),a.a.createElement("div",{className:"ColumnDiv",style:{backgroundColor:r[3]}})),k=a.a.createElement("div",{id:"logo",role:"button",tabIndex:"0",onClick:function(){return window.location.reload()}},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 800 800"},a.a.createElement("path",{fill:o.ContentColor,d:"M171.485,591.0658l-43.511,7.6722V297.1933L163.3,290.9644l99.51,128.9187,99.51-164.0113,34.4641-6.0769V551.3395l-43.0786,7.5959V346.5627l-78.8339,131.072-24.5554,4.33L171.485,378.6931V591.0658Z"}),a.a.createElement("path",{fill:o.ContentColor,d:"M448.4479,542.23V240.2528l33.5965-5.4916,146.9,186.47V208.8586l43.0816-7.5964V502.8068l-34.4641,6.0769L491.953,323.9094V534.5586Z"}),a.a.createElement("path",{fill:o.ContentColor,d:"M39.3923,134.1157C17.7265,137.9359,0,159.0616,0,181.0616V760c0,22,17.7265,36.8743,39.3923,33.0541l721.2156-127.17C782.2737,662.0641,800,640.9385,800,618.9385V40c0-22-17.7265-36.8743-39.3923-33.0541Zm713.86,453.8052c0,22-17.7265,43.1257-39.3923,46.9459L86.1406,745.55c-21.6658,3.82-39.3923-11.0541-39.3923-33.0541V214.8108c0-22,17.7265-43.1257,39.3923-46.9459L713.86,57.181c21.6658-3.82,39.3923,11.0541,39.3923,33.0541V587.9208Z"}))),T=a.a.createElement("div",{id:"commands-list"},a.a.createElement("p",{key:"title",className:"Heading Underlined",style:{marginTop:"40px",color:o.ContentColor},role:"button",tabIndex:"0",onClick:function(){return e.setState({mountCommandsList:!1,mountTooltip:!1})},onMouseEnter:function(e){return v(!0,e,"click to hide list","top")},onMouseLeave:function(){return v(!1)}},g.commandsList.Title),g.commandsList.Content.map(function(e,t){return a.a.createElement("p",{key:"cmdls-".concat(t),className:"Output",style:{color:o.ContentColor}},e.Content)})),w="#00051f"===o.BaseColor?"LightLink":"DarkLink",x=a.a.createElement("div",{id:"credits",style:{color:o.ContentColor}},"Find me on\xa0[",a.a.createElement("a",{className:w,href:"https://github.com/mmqn",target:"_blank",rel:"noopener noreferrer",onMouseEnter:function(e){return v(!0,e,"opens new tab","top")},onMouseLeave:function(){return v(!1)}},"GitHub"),",\xa0",a.a.createElement("a",{className:w,href:"https://www.linkedin.com/in/michaelmqn/",target:"_blank",rel:"noopener noreferrer",onMouseEnter:function(e){return v(!0,e,"opens new tab","top")},onMouseLeave:function(){return v(!1)}},"LinkedIn"),",\xa0",a.a.createElement("a",{className:w,href:"https://twitter.com/m_queue_n",target:"_blank",rel:"noopener noreferrer",onMouseEnter:function(e){return v(!0,e,"\ud83c\udf26","top")},onMouseLeave:function(){return v(!1)}},"Twitter"),",\xa0",a.a.createElement("a",{className:w,href:"mailto:michaelmqn@gmail.com",target:"_blank",rel:"noopener noreferrer",onMouseEnter:function(e){return v(!0,e,"opens your email client","top")},onMouseLeave:function(){return v(!1)}},"Email"),"]\xa0// Built using\xa0[",a.a.createElement("a",{className:w,href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer",onMouseEnter:function(e){return v(!0,e,"opens new tab","top")},onMouseLeave:function(){return v(!1)}},"React.js"),",\xa0",a.a.createElement("a",{className:w,href:"http://www.colorbox.io/#steps=9#hue_start=230#hue_end=185#hue_curve=easeInQuad#sat_start=100#sat_end=5#sat_curve=linear#sat_rate=200#lum_start=12#lum_end=100#lum_curve=easeInQuad#lock_hex=",target:"_blank",rel:"noopener noreferrer",onMouseEnter:function(e){return v(!0,e,"opens new tab","top")},onMouseLeave:function(){return v(!1)}},"ColorBox"),",\xa0",a.a.createElement("a",{className:w,href:"https://www.youtube.com/watch?v=HEXWRTEbj1I",target:"_blank",rel:"noopener noreferrer",onMouseEnter:function(e){return v(!0,e,"what is this?","top")},onMouseLeave:function(){return v(!1)}},a.a.createElement("span",{role:"img","aria-label":"heart"},"\u2764\ufe0f")),"]");return document.getElementsByTagName("body")[0].bgColor=o.BaseColor,a.a.createElement("div",null,u&&a.a.createElement(C,{text:d,coordinates:m,colors:[o.AlternateContentColor,o.BaseColor]}),a.a.createElement("div",{id:"left-panel"},a.a.createElement("div",null,a.a.createElement("p",{className:"Heading Underlined NoSelect",style:{marginTop:"40px",color:o.ContentColor,textDecorationColor:o.ContentColor},role:"button",tabIndex:"0",onClick:function(){return window.location.reload()},onMouseEnter:function(e){return v(!0,e,"reload page")},onMouseLeave:function(){return v(!1)}},"Michael M. Q. Nguyen")),a.a.createElement("div",null,a.a.createElement("p",{className:"Tagline",style:{color:o.ContentColor}},"I code designs & design code."),a.a.createElement("p",{className:"Tagline",style:{color:o.ContentColor}},"Your cursor is hot and ready to fire,"),a.a.createElement("p",{className:"Tagline",style:{color:o.ContentColor}},"just go ahead and type 'hello'!")),a.a.createElement("div",{style:{paddingTop:"20px",paddingBottom:"20px"}},a.a.createElement("span",{className:"CmdLine Pulse",style:{marginLeft:"-20px",color:o.ContentColor},role:"button",tabIndex:"0",onClick:p},"["),a.a.createElement("input",{id:"input",type:"text",value:l,onChange:h,onKeyUp:b,autoFocus:!0,style:{width:"".concat(68*l.length,"px"),fontFamily:"'Anonymous Pro', monospace",fontSize:"92pt",color:o.ContentColor,caretColor:o.ContentColor,backgroundColor:"rgba(0,0,0,0.0)",outline:"none",border:"none"}}),a.a.createElement("span",{className:"CmdLine Pulse",style:{color:o.ContentColor},role:"button",tabIndex:"0",onClick:p},"]")),c&&a.a.createElement("div",{id:"flip-UI-prompt"},a.a.createElement("p",{className:"GuideText",style:{color:o.ContentColor,paddingBottom:"6px"}},"Flip UI Mode?"),a.a.createElement("p",{className:"Tagline Underlined NoSelect HoverPulse",style:{color:o.ContentColor,marginTop:"5px"},role:"button",tabIndex:"0",onClick:y,onMouseEnter:function(e){return v(!0,e,"#00051f"===o.BaseColor?"let there be light \u2600\ufe0f":"join the dark side \ud83c\udf12")},onMouseLeave:function(){return v(!1)}},"Sure"),a.a.createElement("p",{className:"Tagline Underlined NoSelect HoverPulse",style:{color:o.ContentColor,marginTop:"10px"},role:"button",tabIndex:"0",onClick:p,onMouseEnter:function(e){return v(!0,e,"it's okay to be indecisive")},onMouseLeave:function(){return v(!1)}},"Nevermind")),i||a.a.createElement("div",{style:{marginTop:"30px"}},a.a.createElement("p",{className:"GuideText",style:{color:o.ContentColor}},"type '?' for full list of commands"),a.a.createElement("p",{className:"GuideText",style:{color:o.ContentColor}},"press 'esc' to quickly reset query")),i&&T),x,a.a.createElement("div",{id:"right-panel",style:{backgroundColor:o.AlternateBaseColor}},a.a.createElement(f,{result:s,contentColor:o.ContentColor})),E,k)}}]),t}(n.Component);l.a.render(a.a.createElement(b,null),document.getElementById("root"))},3:function(e,t,o){}},[[10,1,2]]]);
//# sourceMappingURL=main.99de578c.chunk.js.map