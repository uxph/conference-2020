(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1Yj4":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("q1tI"),i=n.n(o),c=n("TSYQ"),s=n.n(c),u=n("33Jr"),l=function(e){var t=e.className,n=e.cssModule,o=e.fluid,c=e.tag,l=Object(a.a)(e,["className","cssModule","fluid","tag"]),f="container";!0===o?f="container-fluid":o&&(f="container-"+o);var p=Object(u.b)(s()(t,f),n);return i.a.createElement(c,Object(r.a)({},l,{className:p}))};l.defaultProps={tag:"div"},t.a=l},"33Jr":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));n("pIFo"),n("a1Th"),n("h7Nl"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("KKXr"),n("bWfx");var r,a=n("17x9"),o=n.n(a);function i(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}var c="object"==typeof window&&window.Element||function(){};o.a.oneOfType([o.a.string,o.a.func,function(e,t,n){if(!(e[t]instanceof c))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]),o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),"undefined"==typeof window||!window.document||window.document.createElement;function s(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},"51K9":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"UX Philippines Conference 2020","description":"UXPH (User Experience Philippines) is a non-profit organization that hosts the Philippines\' largest community of individuals passionate about the realm of User Experience, and all things related.","author":"@uxphofficial"}}}}')},"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},"E+mX":function(e){e.exports=JSON.parse('{"site_name":"UX Philippines Conference 2020","organization":"User Experience Philippines","facebook_page":"https://www.facebook.com/uxphofficial/","facebook_group":"https://www.facebook.com/groups/uxphofficial/","instagram":"https://instagram.com/uxphofficial/","twitter":"https://twitter.com/uxphofficial/","linkedin":"https://www.linkedin.com/company/uxph/","theme_name":"Designing Across Borders","theme_blurb":"#","date":"October x - x, 2020","about_us":["UXPH (User Experience Philippines) is a Filipino non-profit organization that hosts the largest network of design professionals, enthusiasts, and students in the Philippines. Since 2012, we have been building towards a more mature, collaborative, and design-driven country through hosting online and offline community initiatives, conferences, and programs within local design and technology communities.","UXPH has become the country’s hub for sharing information, resources, and building networks in the design community. As of 2020, the UXPH community has over 4,000 local and international members from a wide range of industries related to technology and even traditional businesses."],"uxph_website_url":"https://uxph.org/","merch_store_url":"#","video_teaser_url":"#","coming_soon":true}')},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,i=n("kJMx").f,c=n("quPj"),s=n("C/va"),u=r.RegExp,l=u,f=u.prototype,p=/a/g,d=/a/g,h=new u(p)!==p;if(n("nh4g")&&(!h||n("eeVq")((function(){return d[n("K0xU")("match")]=!1,u(p)!=p||u(d)==d||"/a/i"!=u(p,"i")})))){u=function(e,t){var n=this instanceof u,r=c(e),o=void 0===t;return!n&&r&&e.constructor===u&&o?e:a(h?new l(r&&!o?e.source:e,t):l((r=e instanceof u)?e.source:e,r&&o?s.call(e):t),n?this:f,u)};for(var m=function(e){e in u||o(u,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},g=i(l),y=0;g.length>y;)m(g[y++]);f.constructor=u,u.prototype=f,n("KroJ")(r,"RegExp",u)}n("elZq")("RegExp")},TSYQ:function(e,t,n){var r;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},"W/9C":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("1Yj4"),i=n("E+mX");t.a=function(){return a.a.createElement("footer",{className:"padding-y-96 padding-bottom-48"},a.a.createElement(o.a,null,a.a.createElement("img",{src:"/images/logos/uxph_conf_logo.png",className:"width-128 d-block mx-auto margin-top-96 margin-bottom-24",alt:"UXPH Conference 2020"}),a.a.createElement("div",{className:"margin-bottom-24 d-flex justify-content-center"},a.a.createElement("a",{href:i.twitter,target:"blank"},a.a.createElement("img",{src:"/images/icons/twitter.svg",alt:"UXPH Twitter Page",className:"margin-right-24"})),a.a.createElement("a",{href:i.instagram,target:"blank"},a.a.createElement("img",{src:"/images/icons/ig-square.svg",alt:"UXPH Instagram Page",className:"margin-right-24"})),a.a.createElement("a",{href:i.facebook_page,target:"blank"},a.a.createElement("img",{src:"/images/icons/facebook-square.svg",alt:"UXPH Facebook Page",className:"margin-right-24"})),a.a.createElement("a",{href:i.linkedin,target:"blank"},a.a.createElement("img",{src:"/images/icons/linkedin.svg",alt:"UXPH LinkedIn Page"}))),a.a.createElement("div",{className:"margin-bottom-24 d-flex justify-content-center"},a.a.createElement("ul",{className:"footer-nav d-inline-block"},a.a.createElement("li",null,a.a.createElement("a",{href:"/"},"FAQ")),a.a.createElement("li",{className:"delimiter"},a.a.createElement("span",null,"●")),a.a.createElement("li",null,a.a.createElement("a",{href:"/"},"Terms & Conditions")),a.a.createElement("li",{className:"delimiter"},a.a.createElement("span",null,"●")),a.a.createElement("li",null,a.a.createElement("a",{href:"/"},"Code of Conduct")),a.a.createElement("li",{className:"delimiter"},a.a.createElement("span",null,"●")),a.a.createElement("li",null,a.a.createElement("a",{href:"/"},"Contact")))),a.a.createElement("p",{className:"gray text-center"},"© 2020 UX Philippines")))}},ZhWT:function(e,t,n){n("SRfc"),n("RW0V"),n("a1Th"),n("h7Nl"),n("OEbY"),n("Oyvg"),n("LK8F"),n("T39b"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var r="undefined"!=typeof Element,a="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var c,s,u,l;if(Array.isArray(t)){if((c=t.length)!=n.length)return!1;for(s=c;0!=s--;)if(!e(t[s],n[s]))return!1;return!0}if(a&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!n.has(s.value[0]))return!1;for(l=t.entries();!(s=l.next()).done;)if(!e(s.value[1],n.get(s.value[0])))return!1;return!0}if(o&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!n.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((c=t.length)!=n.length)return!1;for(s=c;0!=s--;)if(t[s]!==n[s])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(n,u[s]))return!1;if(r&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!t.$$typeof)&&!e(t[u[s]],n[u[s]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},"dZ+Y":function(e,t,n){"use strict";var r=n("XKFU"),a=n("CkkT")(3);r(r.P+r.F*!n("LyE8")([].some,!0),"Array",{some:function(e){return a(this,e,arguments[1])}})},h7Nl:function(e,t,n){var r=Date.prototype,a=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=o.call(this);return e==e?a.call(this):"Invalid Date"}))},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return me}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,a,o,i,c=n("17x9"),s=n.n(c),u=n("8+s/"),l=n.n(u),f=n("ZhWT"),p=n.n(f),d=n("q1tI"),h=n.n(d),m=n("MgzW"),g=n.n(m),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",O="href",A="http-equiv",C="innerHTML",S="itemprop",x="name",P="property",j="rel",k="src",N="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",M="defer",_="encodeSpecialCharacters",U="onChangeClientState",R="titleTemplate",q=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),F=[w.NOSCRIPT,w.SCRIPT,w.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},X=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},B=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=G(e,w.TITLE),n=G(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=G(e,L);return t||r||void 0},J=function(e){return G(e,U)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return D({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||n===j&&"canonical"===e[n].toLowerCase()||s===j&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==C&&c!==E&&c!==S||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],s=g()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},G=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;se(w.BODY,r),se(w.HTML,a),ce(f,p);var d={baseTag:ue(w.BASE,n),linkTags:ue(w.LINK,o),metaTags:ue(w.META,i),noscriptTags:ue(w.NOSCRIPT,c),scriptTags:ue(w.SCRIPT,u),styleTags:ue(w.STYLE,l)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),s(e,h,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(w.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var l=o.indexOf(s);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[h.a.createElement(w.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+z(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===C||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),h.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+z(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(w.BASE,t,r),bodyAttributes:pe(y,n,r),htmlAttributes:pe(b,a,r),link:pe(w.LINK,o,r),meta:pe(w.META,i,r),noscript:pe(w.NOSCRIPT,c,r),script:pe(w.SCRIPT,s,r),style:pe(w.STYLE,u,r),title:pe(w.TITLE,{title:f,titleAttributes:p},r)}},he=l()((function(e){return{baseTag:Z([O,N],e),bodyAttributes:W(y,e),defer:G(e,M),encode:G(e,_),htmlAttributes:W(b,e),linkTags:$(w.LINK,[j,O],e),metaTags:$(w.META,[x,T,A,P,S],e),noscriptTags:$(w.NOSCRIPT,[C],e),onChangeClientState:J(e),scriptTags:$(w.SCRIPT,[k,C],e),styleTags:$(w.STYLE,[E],e),title:V(e),titleAttributes:W(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),me=(a=he,i=o=function(e){function t(){return K(this,t),B(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return D({},r,((t={})[n.type]=[].concat(r[n.type]||[],[D({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case w.TITLE:return D({},a,((t={})[r.type]=i,t.titleAttributes=D({},o),t));case w.BODY:return D({},a,{bodyAttributes:D({},o)});case w.HTML:return D({},a,{htmlAttributes:D({},o)})}return D({},a,((n={})[r.type]=D({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=D({},t);return Object.keys(e).forEach((function(t){var r;n=D({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=D({},n);return t&&(r=this.mapChildrenToProps(t,r)),h.a.createElement(a,r)},X(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(h.a.Component),o.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("51K9"),a=n("q1tI"),o=n.n(a),i=n("qhky");function c(e){var t=e.description,n=e.lang,a=e.meta,c=e.title,s=r.data.site,u=t||s.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{charset:"UTF-8"},{name:"viewport",content:"width=device-width, initial-scale=1.0"},{name:"fb:page_id",content:"314394185432326"},{name:"description",content:u},{property:"og:title",content:c},{property:"og:site_name",content:s.siteMetadata.title},{property:"og:url",content:"https://uxph.org/"},{property:"og:image",content:"https://uxph.org/assets/images/og-cover.png"},{property:"og:image:secure_url",content:"https://uxph.org/assets/images/og-cover.png"},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"https://uxph.org/assets/images/og-cover.png"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:site",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u},{developer:"Mike Jaren Yap",site:"https://mjarenyap.github.io"},{developer:"Tyrone Justin Sta. Maria",site:"https://tyronegithub.github.io"},{developer:"Gavin Raine Dizon",site:"https://gavindizon.github.io"}].concat(a)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=commons-2aa968af271e6ca23d5c.js.map