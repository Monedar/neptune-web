_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[66],{"5s8o":function(e,n,a){},"6gor":function(e,n,a){"use strict";n.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},O94r:function(e,n,a){var t;!function(){"use strict";var a={}.hasOwnProperty;function c(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var l=typeof t;if("string"===l||"number"===l)e.push(t);else if(Array.isArray(t)&&t.length){var r=c.apply(null,t);r&&e.push(r)}else if("object"===l)for(var i in t)a.call(t,i)&&t[i]&&e.push(i)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(t=function(){return c}.apply(n,[]))||(e.exports=t)}()},cGSD:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/Switch",function(){return a("cjIA")}])},cjIA:function(e,n,a){"use strict";a.r(n),a.d(n,"meta",(function(){return w})),a.d(n,"default",(function(){return f}));var t=a("cxan"),c=a("HbGN"),l=a("ERkP"),r=a.n(l),i=a("ZVZ0"),o=a("Qi1R"),s=a("O94r"),u=a.n(s),d=a("/Vl7"),p=(a("5s8o"),a("6gor")),h=function(e){var n=e.checked,a=e.className,t=e.id,c=e.onClick,l=e["aria-label"],i=l?null:e["aria-labelledby"];return l||i||console.warn("Switch now expects either `aria-label` or `aria-labelledby`, and will soon make these props required. Please update your usage to provide one or the other."),r.a.createElement("span",{className:u()("np-switch",{"np-switch--unchecked":!n,"np-switch--checked":n},a),onClick:c,onKeyDown:function(e){(32===e.code||e.keyCode===p.a.SPACE)&&(e.preventDefault(),c())},tabIndex:0,role:"switch","aria-checked":n,"aria-label":l,"aria-labelledby":i,id:t},r.a.createElement("span",{className:"np-switch--thumb"},n?r.a.createElement(d.d,{filled:!0,size:24}):r.a.createElement(d.i,{filled:!0,size:24})),r.a.createElement("input",{type:"checkbox",checked:n,readOnly:!0}))};h.defaultProps={"aria-label":null,"aria-labelledby":null,checked:!1,className:null,id:null};var b=h,w=(r.a.createElement,{name:"Switch"}),m={meta:w};function f(e){var n=e.components,a=Object(c.a)(e,["components"]);return Object(i.a)("wrapper",Object(t.a)({},m,a,{components:n,mdxType:"MDXLayout"}),Object(i.a)(o.b,{code:'() => {\n  const [checked, setCheck] = React.useState(false);\n\n  return (\n    <>\n      <label id="labelID" htmlFor="switchId">\n        A switch with a label\n      </label>\n      <Switch\n        checked={checked}\n        className="a-class-name"\n        onClick={() => setCheck(!checked)}\n        aria-labelledby="labelID"\n        id="switchId"\n      />\n    </>\n  );\n};\n',scope:{Switch:b},mdxType:"LiveEditorBlock"}),Object(i.a)(o.a,{componentName:"Switch",mdxType:"GeneratePropsTable"}))}f.isMDXComponent=!0}},[["cGSD",0,1,2,6,3,4]]]);