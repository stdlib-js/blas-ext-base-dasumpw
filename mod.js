// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function i(r){return"number"==typeof r}function t(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function a(r,e,i){var a=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=i?r+t(n):t(n)+r,a&&(r="-"+r)),r}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(r){var e,t,s;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===r.specifier||10!==e)&&(s=4294967295+s+1),s<0?(t=(-s).toString(e),r.precision&&(t=a(t,r.precision,r.padRight)),t="-"+t):(t=s.toString(e),s||r.precision?r.precision&&(t=a(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):n.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function y(r){var e,t,a=parseFloat(r.arg);if(!isFinite(a)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);a=r.arg}switch(r.specifier){case"e":case"E":t=a.toExponential(r.precision);break;case"f":case"F":t=a.toFixed(r.precision);break;case"g":case"G":c(a)<1e-4?((e=r.precision)>0&&(e-=1),t=a.toExponential(e)):t=a.toPrecision(r.precision),r.alternate||(t=u.call(t,v,"$1e"),t=u.call(t,b,"e"),t=u.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=u.call(t,f,"e+0$1"),t=u.call(t,g,"e-0$1"),r.alternate&&(t=u.call(t,d,"$1."),t=u.call(t,h,"$1.e")),a>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):p.call(t)}function m(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}var _=String.fromCharCode,k=Array.isArray;function x(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,i,t,n,o,c,p,l,u,f,g,d,h;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",p=1,l=0;l<r.length;l++)if(t=r[l],"string"==typeof t)c+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(p=t.mapping),i=t.flags,u=0;u<i.length;u++)switch(n=i.charAt(u)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[p],10),p+=1,x(t.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[p],10),p+=1,x(t.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[p],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!x(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=x(o)?String(t.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=y(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(f=t.arg,g=t.width,d=t.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+m(h):m(h)+f)),c+=t.arg||"",p+=1}return c}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $(r){var e,i,t,a;for(i=[],a=0,t=V.exec(r);t;)(e=r.slice(a,V.lastIndex-t[0].length)).length&&i.push(e),i.push(j(t)),a=V.lastIndex,t=V.exec(r);return(e=r.slice(a)).length&&i.push(e),i}function F(r){var e,i;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[$(r)],i=1;i<arguments.length;i++)e.push(arguments[i]);return S.apply(null,e)}var I,T=Object.prototype,A=T.toString,C=T.__defineGetter__,R=T.__defineSetter__,O=T.__lookupGetter__,P=T.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,i){var t,a,n,o;if("object"!=typeof r||null===r||"[object Array]"===A.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof i||null===i||"[object Array]"===A.call(i))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(O.call(r,e)||P.call(r,e)?(t=r.__proto__,r.__proto__=T,delete r[e],r[e]=i.value,r.__proto__=t):r[e]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&C&&C.call(r,e,i.get),o&&R&&R.call(r,e,i.set),r};var Z=I;function G(r){return Math.abs(r)}var W=Math.floor,L=128;function M(r,e,i,t){var a,n,o,s,c,p,l,u,f,g,d,h,w;if(r<=0)return 0;if(1===r||0===i)return G(e[t]);if(a=t,r<8){for(d=0,w=0;w<r;w++)d+=G(e[a]),a+=i;return d}if(r<=L){for(n=G(e[a]),o=G(e[a+i]),s=G(e[a+2*i]),c=G(e[a+3*i]),p=G(e[a+4*i]),l=G(e[a+5*i]),u=G(e[a+6*i]),f=G(e[a+7*i]),a+=8*i,g=r%8,w=8;w<r-g;w+=8)n+=G(e[a]),o+=G(e[a+i]),s+=G(e[a+2*i]),c+=G(e[a+3*i]),p+=G(e[a+4*i]),l+=G(e[a+5*i]),u+=G(e[a+6*i]),f+=G(e[a+7*i]),a+=8*i;for(d=n+o+(s+c)+(p+l+(u+f));w<r;w++)d+=G(e[a]),a+=i;return d}return h=W(r/2),M(h-=h%8,e,i,a)+M(r-h,e,i,a+h*i)}function U(r,e,i){var t,a,n;if(r<=0)return 0;if(1===r||0===i)return G(e[0]);if(t=i<0?(1-r)*i:0,r<8){for(a=0,n=0;n<r;n++)a+=G(e[t]),t+=i;return a}return M(r,e,i,t)}Z(U,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:M});export{U as default,M as ndarray};
//# sourceMappingURL=mod.js.map
