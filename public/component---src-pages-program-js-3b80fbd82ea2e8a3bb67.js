(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4NVi":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("iGL9"),i=a("E+mX");t.a=function(){return r.a.createElement("header",{style:{backgroundColor:"var(--black)",boxSizing:"border-box"}},r.a.createElement("div",{id:"coming-soon-overlay",style:{position:"fixed",backgroundColor:"var(--black)",width:"100%",height:"100%",left:"0",top:"0",zIndex:"1100",opacity:"0.9"}}),r.a.createElement("iframe",{width:"150%",height:"100%",className:"position-fixed",id:"coming-soon-video",src:"https://www.youtube.com/embed/EWZ5HRa2qf8?controls=0&loop=1&autoplay=1&mute=1&start=11&end=209&showinfo=0&playlist=EWZ5HRa2qf8",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",title:"UXPH teaser video",style:{left:"-390px",filter:"grayscale(100%)",zIndex:"1000"}}),r.a.createElement("div",{id:"coming-soon-content",className:"margin-y-128 mx-auto",style:{position:"relative",zIndex:"1300",width:"700px",boxSizing:"border-box"}},r.a.createElement("img",{src:"/images/logos/uxph_conf_logo.svg",alt:"UXPH Conference 2020",className:"width-128 d-block mx-auto margin-bottom-32"}),r.a.createElement("h1",{className:"text-center text-white margin-bottom-48 font-size-48"},"Coming in October 2020"),r.a.createElement("p",{className:"text-center text-white margin-bottom-32 font-size-24 font-weight-bold"},"UXPH CONF 2020: Designers as Navigators of Change"),r.a.createElement("p",{className:"text-white text-center margin-bottom-48"},r.a.createElement("strong",null,"The UXPH CONF "),", now in its 5th year, will be an online event filled with talks and workshops for Experience Designers, enthusiasts, and creative problem-solvers."),r.a.createElement("p",{className:"text-white text-center margin-bottom-48"},"This year, we look back at how designers adapted and thrived when the way we work and enjoy our social freedoms was transformed. Looking to the future, what can we learn from their experience? How can we help our teams navigate the constant change in the world as we design products and services that have lasting impact?"),r.a.createElement("p",{className:"text-white text-center margin-bottom-48"},"Join us in learning from leaders of the local and international UX community, as we cover research methodologies, design management and methods, and many other topics to further your design career."),r.a.createElement("div",{className:"text-center"},r.a.createElement(o.a,{variant:"outline",bgColor:"#182335",className:"margin-left-8 margin-right-8 margin-bottom-16",href:"/call-for-speakers",target:"blank"},"Speaker inquiries"),r.a.createElement(o.a,{variant:"outline",bgColor:"#182335",className:"margin-left-8 margin-right-8 margin-bottom-16"},"Sponsor Inquiries")),r.a.createElement("div",{className:"d-flex justify-content-center margin-top-64"},r.a.createElement("a",{href:i.twitter,target:"blank"},r.a.createElement("img",{src:"/images/icons/twitter.svg",alt:"UXPH Twitter Page",className:"margin-right-24"})),r.a.createElement("a",{href:i.instagram,target:"blank"},r.a.createElement("img",{src:"/images/icons/ig-square.svg",alt:"UXPH Instagram Page",className:"margin-right-24"})),r.a.createElement("a",{href:i.facebook_page,target:"blank"},r.a.createElement("img",{src:"/images/icons/facebook-square.svg",alt:"UXPH Facebook Page",className:"margin-right-24"})),r.a.createElement("a",{href:i.linkedin,target:"blank"},r.a.createElement("img",{src:"/images/icons/linkedin.svg",alt:"UXPH LinkedIn Page"})))))}},Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=function(e){var t=e.isHomePage?"home-nav":"";return r.a.createElement("nav",{className:t},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("img",{src:"/images/logos/uxph_logo.svg",className:"width-128",alt:"UXPH navigation logo"}),r.a.createElement("ul",null,r.a.createElement("li",null,"Home"),r.a.createElement("li",null,"Program Flow"),r.a.createElement("li",null,"About Us"),r.a.createElement("li",null,"Sponsors"),r.a.createElement("li",null,"Terms & Conditions"),r.a.createElement("li",null,"FAQ")))))},i=a("W/9C");a("kpl1"),a("q4sD"),t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{isHomePage:e.isHomePage}),r.a.createElement("main",null,e.children),r.a.createElement(i.a,null))}},iGL9:function(e,t,a){"use strict";a("91GP");var n=a("q1tI"),r=a.n(n);t.a=function(e){var t=e.children,a=e.href,n=void 0===a?"/":a,o=e.variant,i=void 0===o?"":o,l=e.className,s=void 0===l?"":l,c=e.bgColor,m=void 0===c?"white":c,g=e.style,d=void 0===g?"":g,u=e.target,h=void 0===u?"self":u;return r.a.createElement("div",{className:"button-outer-layer "+s},r.a.createElement("a",{className:"button "+i,href:n,style:Object.assign({backgroundColor:m},d),target:h},r.a.createElement("span",null,t)))}},q4sD:function(e,t,a){},rX0H:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("Bl7J"),i=a("vrFN"),l=(a("2Spj"),a("wx14")),s=a("zLVn");var c=a("TSYQ"),m=a.n(c),g=a("33Jr"),d=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},o.render=function(){var e=this.props,t=e.active,a=e["aria-label"],n=e.block,o=e.className,i=e.close,c=e.cssModule,d=e.color,u=e.outline,h=e.size,p=e.tag,b=e.innerRef,f=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);i&&void 0===f.children&&(f.children=r.a.createElement("span",{"aria-hidden":!0},"×"));var v="btn"+(u?"-outline":"")+"-"+d,E=Object(g.b)(m()(o,{close:i},i||"btn",i||v,!!h&&"btn-"+h,!!n&&"btn-block",{active:t,disabled:this.props.disabled}),c);f.href&&"button"===p&&(p="a");var w=i?"Close":null;return r.a.createElement(p,Object(l.a)({type:"button"===p&&f.onClick?"button":void 0},f,{className:E,ref:b,onClick:this.onClick,"aria-label":a||w}))},n}(r.a.Component);d.defaultProps={color:"secondary",tag:"button"};var u=d,h=a("4NVi"),p=a("E+mX");t.default=function(){return p.coming_soon?r.a.createElement(h.a,null):r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Programmer"}),r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Program"),r.a.createElement(u,{color:"danger"},"Click this button"))))}}}]);
//# sourceMappingURL=component---src-pages-program-js-3b80fbd82ea2e8a3bb67.js.map