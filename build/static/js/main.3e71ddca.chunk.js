(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{11:function(e,t,n){e.exports={container:"Loader_container__1DmtC"}},19:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(11),i=n.n(c),l=n(23),o=n.n(l);t.a=function(){return r.a.createElement("div",{className:i.a.container},r.a.createElement(o.a,{className:i.a.loader,type:"Rings",color:"#00BFFF",height:200,width:200,timeout:5e3}),"Loading...")}},26:function(e,t,n){e.exports=n(58)},56:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),i=n.n(c),l=n(8),o=n(14),s=n(15),u=n(17),m=n(16),h=n(18),v=n(6),d=n(19),f=n(9),p=n.n(f),E=function(e){e.films;return r.a.createElement("div",{className:p.a.container},r.a.createElement(l.c,{exact:!0,to:"/",className:p.a.link,activeClassName:p.a.activeLink},"Home"),r.a.createElement(l.c,{to:"/movies",className:p.a.link,activeClassName:p.a.activeLink},"Movies"))},b=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,103))})),g=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,104))})),y=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,105))})),k=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",currentQury:""},n.hendleChange=function(e){n.setState({query:e.target.value})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.query;return r.a.createElement(a.Fragment,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(d.a,null)},r.a.createElement(E,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",component:b}),r.a.createElement(v.a,{path:"/movies/:id",component:y}),r.a.createElement(v.a,{path:"/movies",render:function(n){return r.a.createElement(g,Object.assign({},n,{query:t,hendleChange:e.hendleChange}))}}),r.a.createElement(v.a,{component:b}))))}}]),t}(a.Component);n(55),n(56),n(57);i.a.render(r.a.createElement(l.a,null,r.a.createElement(k,null)),document.querySelector("#root"))},9:function(e,t,n){e.exports={container:"Header_container__tgic5",link:"Header_link__2rU-H",activeLink:"Header_activeLink__3Rfz6"}}},[[26,2,3]]]);
//# sourceMappingURL=main.3e71ddca.chunk.js.map