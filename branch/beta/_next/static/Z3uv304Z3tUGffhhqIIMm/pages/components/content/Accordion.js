(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"65gV":function(n,t,e){var r=e("tsxu"),o=e("dsLa");n.exports=function(n,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(n):t}},CrPR:function(n,t,e){var r=e("e1rg");n.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},DZbC:function(n,t,e){var r=e("QKKh"),o=e("QOpd"),i=e("R/wC")("species");n.exports=function(n,t){var e;return o(n)&&("function"!=typeof(e=n.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===t?0:t)}},Hi8P:function(n,t,e){"use strict";var r,o=e("gC0r"),i=e.n(o),c=(e("J/fC"),e("ERkP")),a=e.n(c),u=e("O94r"),s=e.n(u),f=e("/Vl7"),p=e("VehP"),l=e("eKd8"),d=(r={},i()(r,p.a.SMALL,16),i()(r,p.a.MEDIUM,24),r),m=function(n){var t=n.orientation,e=n.size,r=n.disabled,o=n.className,i={className:s()("tw-chevron",{"chevron-color":!r},"".concat([t]).toLowerCase(),o),size:d[e]};return a.a.createElement(f.g,i)};m.Orientation=l.b,m.Size=p.a,m.defaultProps={orientation:m.Orientation.BOTTOM,size:m.Size.SMALL,disabled:!1,className:null},t.a=m},"J/fC":function(n,t,e){},JbFr:function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(String(n)+" is not a function");return n}},O94r:function(n,t,e){var r;!function(){"use strict";var e={}.hasOwnProperty;function o(){for(var n=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)n.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&n.push(c)}else if("object"===i)for(var a in r)e.call(r,a)&&r[a]&&n.push(a)}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(n.exports=r)}()},PjUs:function(n,t,e){var r=e("fyTV"),o=e("xFK5"),i=e("k8sU"),c=e("QI0Q"),a=e("DZbC"),u=[].push,s=function(n){var t=1==n,e=2==n,s=3==n,f=4==n,p=6==n,l=5==n||p;return function(d,m,y,b){for(var O,v,x=i(d),h=o(x),T=r(m,y,3),w=c(h.length),g=0,P=b||a,E=t?P(d,w):e?P(d,0):void 0;w>g;g++)if((l||g in h)&&(v=T(O=h[g],g,x),n))if(t)E[g]=v;else if(v)switch(n){case 3:return!0;case 5:return O;case 6:return g;case 2:u.call(E,O)}else if(f)return!1;return p?-1:s||f?f:E}};n.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},PqPt:function(n,t){function e(t,r){return n.exports=e=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},e(t,r)}n.exports=e},QOpd:function(n,t,e){var r=e("l9lp");n.exports=Array.isArray||function(n){return"Array"==r(n)}},"R/wC":function(n,t,e){var r=e("4im6"),o=e("lEPA"),i=e("d3yh"),c=e("rdnw"),a=e("e1rg"),u=e("CrPR"),s=o("wks"),f=r.Symbol,p=u?f:f&&f.withoutSetter||c;n.exports=function(n){return i(s,n)||(a&&i(f,n)?s[n]=f[n]:s[n]=p("Symbol."+n)),s[n]}},VehP:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},VrRy:function(n,t,e){"use strict";e.r(t),e.d(t,"meta",(function(){return k})),e.d(t,"default",(function(){return N}));var r=e("cxan"),o=e("HbGN"),i=e("ERkP"),c=e.n(i),a=e("ZVZ0"),u=e("Qi1R"),s=(e("sL/y"),e("eS6V")),f=e.n(s),p=e("nvWY"),l=e.n(p),d=e("oobO"),m=e.n(d),y=e("65gV"),b=e.n(y),O=e("cVsr"),v=e.n(O),x=e("dsLa"),h=e.n(x),T=e("brTf"),w=e.n(T),g=e("gC0r"),P=e.n(g),E=e("O94r"),S=e.n(E),A=e("v1+v"),C=e("Hi8P"),L=function(n){var t=n.id,e=n.title,r=n.content,o=n.onClick,i=n.isOpen,a=n.index;return c.a.createElement("div",{id:t,className:S()("tw-accordion-item decision p-a-0",{closed:!i})},c.a.createElement("button",{type:"button","aria-expanded":i,onClick:function(){return o(a)},className:"tw-accordion-item btn btn-link p-l-0 text-no-decoration"},c.a.createElement("div",{className:"media p-y-2"},c.a.createElement("div",{className:"media-body text-xs-left"},Object(A.h)(e)?c.a.createElement("span",{className:"h5"},e):e),c.a.createElement("div",{className:"media-right media-middle"},c.a.createElement(C.a,{orientation:i?C.a.Orientation.TOP:C.a.Orientation.BOTTOM})))),c.a.createElement("div",{className:"p-b-3 accordion-content"},r))};L.defaultProps={id:null};var j=L,_=(e("cnZ1"),function(n){function t(n){var e;return l()(this,t),e=b()(this,v()(t).call(this,n)),P()(h()(e),"handleOnClick",(function(n){e.setState((function(t){return{indexOpen:t.indexOpen===n?-1:n}})),e.props.onClick&&e.props.onClick(n)})),e.state={indexOpen:n.indexOpen},e}return w()(t,n),m()(t,[{key:"componentDidUpdate",value:function(n){n.indexOpen!==this.props.indexOpen&&this.setState({indexOpen:this.props.indexOpen})}},{key:"render",value:function(){var n=this;return c.a.createElement(c.a.Fragment,null,this.props.items.map((function(t,e){return c.a.createElement(j,f()({id:t.id,key:t.id||e,index:e,isOpen:e===n.state.indexOpen,onClick:n.handleOnClick},t))})))}}]),t}(i.PureComponent));_.defaultProps={onClick:null,indexOpen:-1};var R=_,M="<Accordion\n  indexOpen={1}\n  items={[\n    {\n      title: 'Item 1',\n      content: 'I can be text',\n    },\n    {\n      title: 'Item 2',\n      content: <span>I can be a node</span>,\n    },\n    {\n      title: 'Item 3',\n      content: 'I can be text',\n    },\n  ]}\n/>;\n",k=(c.a.createElement,{name:"Accordion"}),I={meta:k},V="wrapper";function N(n){var t=n.components,e=Object(o.a)(n,["components"]);return Object(a.a)(V,Object(r.a)({},I,e,{components:t,mdxType:"MDXLayout"}),Object(a.a)(u.b,{code:M,scope:{Accordion:R},mdxType:"LiveEditorBlock"}),Object(a.a)(u.a,{componentName:"Accordion",mdxType:"GeneratePropsTable"}))}N.isMDXComponent=!0},YyzA:function(n,t,e){var r=e("AoMu"),o=e("R/wC"),i=e("zLxc"),c=o("species");n.exports=function(n){return i>=51||!r((function(){var t=[];return(t.constructor={})[c]=function(){return{foo:1}},1!==t[n](Boolean).foo}))}},brTf:function(n,t,e){var r=e("PqPt");n.exports=function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&r(n,t)}},cVsr:function(n,t){function e(t){return n.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},e(t)}n.exports=e},cnZ1:function(n,t,e){},dsLa:function(n,t){n.exports=function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}},e1rg:function(n,t,e){var r=e("AoMu");n.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},eKd8:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"a",(function(){return o}));var r={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},o={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},eS6V:function(n,t){function e(){return n.exports=e=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},e.apply(this,arguments)}n.exports=e},ellU:function(n,t,e){var r=e("OzhJ");n.exports=r("navigator","userAgent")||""},fyTV:function(n,t,e){var r=e("JbFr");n.exports=function(n,t,e){if(r(n),void 0===t)return n;switch(e){case 0:return function(){return n.call(t)};case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,o){return n.call(t,e,r,o)}}return function(){return n.apply(t,arguments)}}},gC0r:function(n,t){n.exports=function(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}},jw1G:function(n,t,e){var r=e("MlVR"),o=e("AoMu"),i=e("d3yh"),c=Object.defineProperty,a={},u=function(n){throw n};n.exports=function(n,t){if(i(a,n))return a[n];t||(t={});var e=[][n],s=!!i(t,"ACCESSORS")&&t.ACCESSORS,f=i(t,0)?t[0]:u,p=i(t,1)?t[1]:void 0;return a[n]=!!e&&!o((function(){if(s&&!r)return!0;var n={length:-1};s?c(n,1,{enumerable:!0,get:u}):n[1]=1,e.call(n,f,p)}))}},nvWY:function(n,t){n.exports=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}},oobO:function(n,t){function e(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}n.exports=function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}},"sL/y":function(n,t,e){"use strict";var r=e("EtS/"),o=e("PjUs").map,i=e("YyzA"),c=e("jw1G"),a=i("map"),u=c("map");r({target:"Array",proto:!0,forced:!a||!u},{map:function(n){return o(this,n,arguments.length>1?arguments[1]:void 0)}})},t1Iz:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Accordion",function(){return e("VrRy")}])},tsxu:function(n,t){function e(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?n.exports=e=function(n){return typeof n}:n.exports=e=function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(t)}n.exports=e},zLxc:function(n,t,e){var r,o,i=e("4im6"),c=e("ellU"),a=i.process,u=a&&a.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),n.exports=o&&+o}},[["t1Iz",0,1,2,3,7,4,6,11,5]]]);