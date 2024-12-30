// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";var n=128;function i(r,e,d,o){var a,m,f,l,p,j,u,h,v,b,c,x,g;if(r<=0)return 0;if(a=o,0===d)return r*s(e[a]);if(r<8){for(c=0,g=0;g<r;g++)c+=s(e[a]),a+=d;return c}if(r<=n){for(m=s(e[a]),f=s(e[a+d]),l=s(e[a+2*d]),p=s(e[a+3*d]),j=s(e[a+4*d]),u=s(e[a+5*d]),h=s(e[a+6*d]),v=s(e[a+7*d]),a+=8*d,b=r%8,g=8;g<r-b;g+=8)m+=s(e[a]),f+=s(e[a+d]),l+=s(e[a+2*d]),p+=s(e[a+3*d]),j+=s(e[a+4*d]),u+=s(e[a+5*d]),h+=s(e[a+6*d]),v+=s(e[a+7*d]),a+=8*d;for(c=m+f+(l+p)+(j+u+(h+v));g<r;g++)c+=s(e[a]),a+=d;return c}return x=t(r/2),i(x-=x%8,e,d,a)+i(r-x,e,d,a+x*d)}function d(r,t,s){return i(r,t,s,e(r,s))}r(d,"ndarray",i);export{d as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
