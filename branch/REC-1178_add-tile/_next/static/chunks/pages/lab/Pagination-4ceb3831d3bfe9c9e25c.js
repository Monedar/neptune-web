_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[91],{"0FSu":function(e,n,t){var r=t("IRf+"),a=t("g6a+"),i=t("N9G2"),o=t("tJVe"),c=t("aoZ+"),u=[].push,s=function(e){var n=1==e,t=2==e,s=3==e,l=4==e,f=6==e,p=5==e||f;return function(d,m,v,h){for(var g,T,x=i(d),y=a(x),b=r(m,v,3),O=o(y.length),w=0,E=h||c,P=n?E(d,O):t?E(d,0):void 0;O>w;w++)if((p||w in y)&&(T=b(g=y[w],w,x),e))if(n)P[w]=T;else if(T)switch(e){case 3:return!0;case 5:return g;case 6:return w;case 2:u.call(P,g)}else if(l)return!1;return f?-1:s||l?l:P}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},"2G9S":function(e,n,t){"use strict";var r=t("ax0f"),a=t("ct80"),i=t("xt6W"),o=t("dSaG"),c=t("N9G2"),u=t("tJVe"),s=t("2sZ7"),l=t("aoZ+"),f=t("GJtw"),p=t("fVMg"),d=t("T+0C"),m=p("isConcatSpreadable"),v=d>=51||!a((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),h=f("concat"),g=function(e){if(!o(e))return!1;var n=e[m];return void 0!==n?!!n:i(e)};r({target:"Array",proto:!0,forced:!v||!h},{concat:function(e){var n,t,r,a,i,o=c(this),f=l(o,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(g(i=-1===n?o:arguments[n])){if(p+(a=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(t=0;t<a;t++,p++)t in i&&s(f,p,i[t])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,p++,i)}return f.length=p,f}})},"2sZ7":function(e,n,t){"use strict";var r=t("CD8Q"),a=t("q9+l"),i=t("lhjL");e.exports=function(e,n,t){var o=r(n);o in e?a.f(e,o,i(0,t)):e[o]=t}},"3g/d":function(e,n,t){"use strict";t("2G9S");var r=t("ERkP"),a=t.n(r),i=t("O94r"),o=t.n(i),c=(t("j+zR"),t("/Vl7")),u=t("PFiD"),s=t("VehP"),l=t("eKd8"),f=function(e){var n=e.arrow,t=e.children,r=e.className,i=e.dismissible,l=e.onDismiss,f=e.size,d=e.type,m={"alert-success":d===u.a.SUCCESS,"alert-info":d===u.a.INFO,"alert-warning":d===u.a.WARNING,"alert-danger":d===u.a.ERROR,small:f===s.a.SMALL,"p-x-2":f===s.a.SMALL,"p-y-1":f===s.a.SMALL};return a.a.createElement("div",{role:"alert",className:o()("alert","alert-detach",m,p(n),r)},i&&a.a.createElement("button",{type:"button",className:"close m-l-2","data-dismiss":"alert",onClick:l,"aria-label":"Close"},a.a.createElement(c.h,null)),t)};function p(e){if(e){var n=["arrow"],t=f.ArrowPosition,r=t.BOTTOM,a=t.BOTTOM_LEFT,i=t.BOTTOM_RIGHT,o=t.TOP,c=t.TOP_RIGHT,u=t.TOP_LEFT;switch(e){case r:return n.concat("arrow-bottom","arrow-center");case a:return n.concat("arrow-bottom","arrow-left");case i:return n.concat("arrow-bottom","arrow-right");case o:return n.concat("arrow-center");case c:return n.concat("arrow-right");case u:default:return n}}return null}f.Size={SMALL:s.a.SMALL,LARGE:s.a.LARGE},f.Type=u.a,f.ArrowPosition=l.a,f.defaultProps={type:f.Type.INFO,size:f.Size.LARGE,dismissible:!1,arrow:null,className:""},n.a=f},"56Cj":function(e,n,t){var r=t("ct80");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},GJtw:function(e,n,t){var r=t("ct80"),a=t("fVMg"),i=t("T+0C"),o=a("species");e.exports=function(e){return i>=51||!r((function(){var n=[];return(n.constructor={})[o]=function(){return{foo:1}},1!==n[e](Boolean).foo}))}},H6sZ:function(e,n,t){},"IRf+":function(e,n,t){var r=t("hpdy");e.exports=function(e,n,t){if(r(e),void 0===n)return e;switch(t){case 0:return function(){return e.call(n)};case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,a){return e.call(n,t,r,a)}}return function(){return e.apply(n,arguments)}}},N9G2:function(e,n,t){var r=t("cww3");e.exports=function(e){return Object(r(e))}},O94r:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},PFiD:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={INFO:"info",WARNING:"warning",ERROR:"error",SUCCESS:"success"}},"T+0C":function(e,n,t){var r,a,i=t("9JhN"),o=t("ZORK"),c=i.process,u=c&&c.versions,s=u&&u.v8;s?a=(r=s.split("."))[0]+r[1]:o&&(!(r=o.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/))&&(a=r[1]),e.exports=a&&+a},TbR9:function(e,n,t){var r=t("56Cj");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},TryA:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return T})),t.d(n,"default",(function(){return y}));var r=t("cxan"),a=t("HbGN"),i=t("ERkP"),o=t.n(i),c=t("ZVZ0"),u=t("Qi1R"),s=(t("z84I"),t("O94r")),l=t.n(s),f=t("/Vl7"),p=function(e){var n=e.disabled,t=e.active,r=e.pageNumber,a=e.onClick,i=e.children,c=function(e){e.preventDefault(),n||t||a(r)},u=t?"Go to page ".concat(r):"Current page, page ".concat(r);return o.a.createElement("li",null,o.a.createElement("a",{href:"/",onClick:c,onKeyDown:function(e){"Enter"===e.key&&c(e)},"aria-label":u,"aria-current":t,className:l()({disabled:n,active:t})},i))};p.defaultProps={disabled:!1,active:!1};var d=p,m=(t("H6sZ"),{NUMBERS_ONLY:"numbersOnly",ARROWS_ONLY:"arrowsOnly",FULL:"full"}),v=function(e){var n=e.type,t=e.numberOfPages,r=e.currentPageIndex,a=e.onClick,i=e.canFetchMorePages,c=e.className,u=n!==m.NUMBERS_ONLY,s=[];if(n!==m.ARROWS_ONLY){switch(r){case 0:s.push({index:0,active:!0}),1<t&&s.push({index:1}),2<t&&s.push({index:2});break;case t-1:2<t&&s.push({index:t-3}),1<t&&s.push({index:t-2}),s.push({index:t-1,active:!0});break;default:s.push({index:r-1},{index:r,active:!0},{index:r+1})}var p=s[0].index;0<p&&(2<p?s.unshift({label:"...",index:p-1}):2===p&&s.unshift({index:1}),s.unshift({index:0}));var v=s[s.length-1].index;v<t-1&&(v<t-3?s.push({label:"...",index:v+1}):v===t-3&&s.push({index:t-2}),s.push({index:t-1})),i&&s.push({label:"...",index:t})}return o.a.createElement("nav",{role:"navigation","aria-label":"Pagination navigation"},o.a.createElement("ul",{className:l()("tw-pagination",c)},u&&o.a.createElement(d,{pageNumber:r-1,onClick:a,disabled:0===r},o.a.createElement(f.e,null)),s.map((function(e){var n=e.label||e.index+1;return o.a.createElement(d,{key:e.index,pageNumber:e.index,onClick:a,active:e.active},n)})),u&&o.a.createElement(d,{pageNumber:r+1,onClick:a,disabled:!i&&r===t-1},o.a.createElement(f.f,null))))};v.defaultProps={type:(v.Type=m).FULL,canFetchMorePages:!1,className:void 0};var h=v,g=t("3g/d"),T=(o.a.createElement,{name:"Pagination"}),x={meta:T};function y(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},x,t,{components:n,mdxType:"MDXLayout"}),Object(c.a)(g.a,{type:g.a.Type.WARNING,mdxType:"Alert"},"Please note that this component is still in a testing phase and we do not guarantee that the API will remain the same. Please feel free to test it and provide us a feedback to help improve it before the final release."),Object(c.a)(u.b,{code:"() => {\n  const [currentPageIndex, setCurrentPageIndex] = React.useState(4);\n  return (\n    <Pagination\n      canFetchMorePages={false}\n      type={Pagination.Type.FULL}\n      numberOfPages={9}\n      currentPageIndex={currentPageIndex}\n      onClick={setCurrentPageIndex}\n    />\n  );\n};\n",scope:{Pagination:h},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)(u.a,{componentName:"Pagination",mdxType:"GeneratePropsTable"}))}y.isMDXComponent=!0},VehP:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},"Xzk+":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lab/Pagination",function(){return t("TryA")}])},ZORK:function(e,n,t){var r=t("VCi3");e.exports=r("navigator","userAgent")||""},"aoZ+":function(e,n,t){var r=t("dSaG"),a=t("xt6W"),i=t("fVMg")("species");e.exports=function(e,n){var t;return a(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!a(t.prototype)?r(t)&&null===(t=t[i])&&(t=void 0):t=void 0),new(void 0===t?Array:t)(0===n?0:n)}},eKd8:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}));var r={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},a={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},fVMg:function(e,n,t){var r=t("9JhN"),a=t("TN3B"),i=t("8aeu"),o=t("HYrn"),c=t("56Cj"),u=t("TbR9"),s=a("wks"),l=r.Symbol,f=u?l:l&&l.withoutSetter||o;e.exports=function(e){return i(s,e)||(c&&i(l,e)?s[e]=l[e]:s[e]=f("Symbol."+e)),s[e]}},hpdy:function(e,n){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"j+zR":function(e,n){e.exports=function(e,n){return function(t,r,a){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+a+". Validation failed.");if("function"!==typeof n)return new Error("Invalid react-required-if condition supplied to "+a+". Validation failed.");var i=n(t)?e.isRequired:e;return i.apply(this,arguments)}}},xt6W:function(e,n,t){var r=t("amH4");e.exports=Array.isArray||function(e){return"Array"==r(e)}},z84I:function(e,n,t){"use strict";var r=t("ax0f"),a=t("0FSu").map,i=t("GJtw"),o=t("znGZ"),c=i("map"),u=o("map");r({target:"Array",proto:!0,forced:!c||!u},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},znGZ:function(e,n,t){var r=t("1Mu/"),a=t("ct80"),i=t("8aeu"),o=Object.defineProperty,c={},u=function(e){throw e};e.exports=function(e,n){if(i(c,e))return c[e];n||(n={});var t=[][e],s=!!i(n,"ACCESSORS")&&n.ACCESSORS,l=i(n,0)?n[0]:u,f=i(n,1)?n[1]:void 0;return c[e]=!!t&&!a((function(){if(s&&!r)return!0;var e={length:-1};s?o(e,1,{enumerable:!0,get:u}):e[1]=1,t.call(e,l,f)}))}}},[["Xzk+",0,1,2,5,3,4]]]);