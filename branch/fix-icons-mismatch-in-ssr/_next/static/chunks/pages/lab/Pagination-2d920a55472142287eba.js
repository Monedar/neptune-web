_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[90],{"0FSu":function(e,t,n){var r=n("IRf+"),a=n("g6a+"),i=n("N9G2"),o=n("tJVe"),c=n("aoZ+"),u=[].push,s=function(e){var t=1==e,n=2==e,s=3==e,l=4==e,f=6==e,p=5==e||f;return function(d,m,v,h){for(var g,T,x=i(d),y=a(x),b=r(m,v,3),O=o(y.length),w=0,E=h||c,P=t?E(d,O):n?E(d,0):void 0;O>w;w++)if((p||w in y)&&(T=b(g=y[w],w,x),e))if(t)P[w]=T;else if(T)switch(e){case 3:return!0;case 5:return g;case 6:return w;case 2:u.call(P,g)}else if(l)return!1;return f?-1:s||l?l:P}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},"2G9S":function(e,t,n){"use strict";var r=n("ax0f"),a=n("ct80"),i=n("xt6W"),o=n("dSaG"),c=n("N9G2"),u=n("tJVe"),s=n("2sZ7"),l=n("aoZ+"),f=n("GJtw"),p=n("fVMg"),d=n("T+0C"),m=p("isConcatSpreadable"),v=d>=51||!a((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),h=f("concat"),g=function(e){if(!o(e))return!1;var t=e[m];return void 0!==t?!!t:i(e)};r({target:"Array",proto:!0,forced:!v||!h},{concat:function(e){var t,n,r,a,i,o=c(this),f=l(o,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(g(i=-1===t?o:arguments[t])){if(p+(a=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<a;n++,p++)n in i&&s(f,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,p++,i)}return f.length=p,f}})},"2sZ7":function(e,t,n){"use strict";var r=n("CD8Q"),a=n("q9+l"),i=n("lhjL");e.exports=function(e,t,n){var o=r(t);o in e?a.f(e,o,i(0,n)):e[o]=n}},"3g/d":function(e,t,n){"use strict";n("2G9S");var r=n("ERkP"),a=n.n(r),i=n("O94r"),o=n.n(i),c=(n("j+zR"),n("za2A")),u=n("PFiD"),s=n("VehP"),l=n("eKd8"),f=function(e){var t=e.arrow,n=e.children,r=e.className,i=e.dismissible,l=e.onDismiss,f=e.size,d=e.type,m={"alert-success":d===u.a.SUCCESS,"alert-info":d===u.a.INFO,"alert-warning":d===u.a.WARNING,"alert-danger":d===u.a.ERROR,small:f===s.a.SMALL,"p-x-2":f===s.a.SMALL,"p-y-1":f===s.a.SMALL};return a.a.createElement("div",{role:"alert",className:o()("alert","alert-detach",m,p(t),r)},i&&a.a.createElement("button",{type:"button",className:"close m-l-2","data-dismiss":"alert",onClick:l,"aria-label":"Close"},a.a.createElement(c.g,null)),n)};function p(e){if(e){var t=["arrow"],n=f.ArrowPosition,r=n.BOTTOM,a=n.BOTTOM_LEFT,i=n.BOTTOM_RIGHT,o=n.TOP,c=n.TOP_RIGHT,u=n.TOP_LEFT;switch(e){case r:return t.concat("arrow-bottom","arrow-center");case a:return t.concat("arrow-bottom","arrow-left");case i:return t.concat("arrow-bottom","arrow-right");case o:return t.concat("arrow-center");case c:return t.concat("arrow-right");case u:default:return t}}return null}f.Size={SMALL:s.a.SMALL,LARGE:s.a.LARGE},f.Type=u.a,f.ArrowPosition=l.a,f.defaultProps={type:f.Type.INFO,size:f.Size.LARGE,dismissible:!1,arrow:null,className:""},t.a=f},"56Cj":function(e,t,n){var r=n("ct80");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},GJtw:function(e,t,n){var r=n("ct80"),a=n("fVMg"),i=n("T+0C"),o=a("species");e.exports=function(e){return i>=51||!r((function(){var t=[];return(t.constructor={})[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"IRf+":function(e,t,n){var r=n("hpdy");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,a){return e.call(t,n,r,a)}}return function(){return e.apply(t,arguments)}}},N9G2:function(e,t,n){var r=n("cww3");e.exports=function(e){return Object(r(e))}},O94r:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},PFiD:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={INFO:"info",WARNING:"warning",ERROR:"error",SUCCESS:"success"}},"T+0C":function(e,t,n){var r,a,i=n("9JhN"),o=n("ZORK"),c=i.process,u=c&&c.versions,s=u&&u.v8;s?a=(r=s.split("."))[0]+r[1]:o&&(!(r=o.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/))&&(a=r[1]),e.exports=a&&+a},TbR9:function(e,t,n){var r=n("56Cj");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},TryA:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return T})),n.d(t,"default",(function(){return y}));var r=n("cxan"),a=n("HbGN"),i=n("ERkP"),o=n.n(i),c=n("ZVZ0"),u=n("Qi1R"),s=(n("z84I"),n("O94r")),l=n.n(s),f=n("za2A"),p=function(e){var t=e.disabled,n=e.active,r=e.pageNumber,a=e.onClick,i=e.children,c=function(e){e.preventDefault(),t||n||a(r)},u=n?"Go to page ".concat(r):"Current page, page ".concat(r);return o.a.createElement("li",null,o.a.createElement("a",{href:"/",onClick:c,onKeyDown:function(e){"Enter"===e.key&&c(e)},"aria-label":u,"aria-current":n,className:l()({disabled:t,active:n})},i))};p.defaultProps={disabled:!1,active:!1};var d=p,m=(n("H6sZ"),{NUMBERS_ONLY:"numbersOnly",ARROWS_ONLY:"arrowsOnly",FULL:"full"}),v=function(e){var t=e.type,n=e.numberOfPages,r=e.currentPageIndex,a=e.onClick,i=e.canFetchMorePages,c=e.className,u=t!==m.NUMBERS_ONLY,s=[];if(t!==m.ARROWS_ONLY){switch(r){case 0:s.push({index:0,active:!0}),1<n&&s.push({index:1}),2<n&&s.push({index:2});break;case n-1:2<n&&s.push({index:n-3}),1<n&&s.push({index:n-2}),s.push({index:n-1,active:!0});break;default:s.push({index:r-1},{index:r,active:!0},{index:r+1})}var p=s[0].index;0<p&&(2<p?s.unshift({label:"...",index:p-1}):2===p&&s.unshift({index:1}),s.unshift({index:0}));var v=s[s.length-1].index;v<n-1&&(v<n-3?s.push({label:"...",index:v+1}):v===n-3&&s.push({index:n-2}),s.push({index:n-1})),i&&s.push({label:"...",index:n})}return o.a.createElement("nav",{role:"navigation","aria-label":"Pagination navigation"},o.a.createElement("ul",{className:l()("tw-pagination",c)},u&&o.a.createElement(d,{pageNumber:r-1,onClick:a,disabled:0===r},o.a.createElement(f.d,null)),s.map((function(e){var t=e.label||e.index+1;return o.a.createElement(d,{key:e.index,pageNumber:e.index,onClick:a,active:e.active},t)})),u&&o.a.createElement(d,{pageNumber:r+1,onClick:a,disabled:!i&&r===n-1},o.a.createElement(f.e,null))))};v.defaultProps={type:(v.Type=m).FULL,canFetchMorePages:!1,className:void 0};var h=v,g=n("3g/d"),T=(o.a.createElement,{name:"Pagination"}),x={meta:T};function y(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},x,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)(g.a,{type:g.a.Type.WARNING,mdxType:"Alert"},"Please note that this component is still in a testing phase and we do not guarantee that the API will remain the same. Please feel free to test it and provide us a feedback to help improve it before the final release."),Object(c.a)(u.b,{code:"() => {\n  const [currentPageIndex, setCurrentPageIndex] = React.useState(4);\n  return (\n    <Pagination\n      canFetchMorePages={false}\n      type={Pagination.Type.FULL}\n      numberOfPages={9}\n      currentPageIndex={currentPageIndex}\n      onClick={setCurrentPageIndex}\n    />\n  );\n};\n",scope:{Pagination:h},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)(u.a,{componentName:"Pagination",mdxType:"GeneratePropsTable"}))}y.isMDXComponent=!0},VehP:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},"Xzk+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lab/Pagination",function(){return n("TryA")}])},ZORK:function(e,t,n){var r=n("VCi3");e.exports=r("navigator","userAgent")||""},"aoZ+":function(e,t,n){var r=n("dSaG"),a=n("xt6W"),i=n("fVMg")("species");e.exports=function(e,t){var n;return a(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!a(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},eKd8:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},a={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},fVMg:function(e,t,n){var r=n("9JhN"),a=n("TN3B"),i=n("8aeu"),o=n("HYrn"),c=n("56Cj"),u=n("TbR9"),s=a("wks"),l=r.Symbol,f=u?l:l&&l.withoutSetter||o;e.exports=function(e){return i(s,e)||(c&&i(l,e)?s[e]=l[e]:s[e]=f("Symbol."+e)),s[e]}},hpdy:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"j+zR":function(e,t){e.exports=function(e,t){return function(n,r,a){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+a+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+a+". Validation failed.");var i=t(n)?e.isRequired:e;return i.apply(this,arguments)}}},xt6W:function(e,t,n){var r=n("amH4");e.exports=Array.isArray||function(e){return"Array"==r(e)}},z84I:function(e,t,n){"use strict";var r=n("ax0f"),a=n("0FSu").map,i=n("GJtw"),o=n("znGZ"),c=i("map"),u=o("map");r({target:"Array",proto:!0,forced:!c||!u},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},znGZ:function(e,t,n){var r=n("1Mu/"),a=n("ct80"),i=n("8aeu"),o=Object.defineProperty,c={},u=function(e){throw e};e.exports=function(e,t){if(i(c,e))return c[e];t||(t={});var n=[][e],s=!!i(t,"ACCESSORS")&&t.ACCESSORS,l=i(t,0)?t[0]:u,f=i(t,1)?t[1]:void 0;return c[e]=!!n&&!a((function(){if(s&&!r)return!0;var e={length:-1};s?o(e,1,{enumerable:!0,get:u}):e[1]=1,n.call(e,l,f)}))}}},[["Xzk+",0,1,2,6,3,5,4]]]);