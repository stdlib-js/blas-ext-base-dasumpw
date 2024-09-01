// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";var n=128;function s(r,i,a,f){var o,d,m,u,l,p,j,v,h,b,c,x,y;if(r<=0)return 0;if(1===r||0===a)return e(i[f]);if(o=f,r<8){for(c=0,y=0;y<r;y++)c+=e(i[o]),o+=a;return c}if(r<=n){for(d=e(i[o]),m=e(i[o+a]),u=e(i[o+2*a]),l=e(i[o+3*a]),p=e(i[o+4*a]),j=e(i[o+5*a]),v=e(i[o+6*a]),h=e(i[o+7*a]),o+=8*a,b=r%8,y=8;y<r-b;y+=8)d+=e(i[o]),m+=e(i[o+a]),u+=e(i[o+2*a]),l+=e(i[o+3*a]),p+=e(i[o+4*a]),j+=e(i[o+5*a]),v+=e(i[o+6*a]),h+=e(i[o+7*a]),o+=8*a;for(c=d+m+(u+l)+(p+j+(v+h));y<r;y++)c+=e(i[o]),o+=a;return c}return x=t(r/2),s(x-=x%8,i,a,o)+s(r-x,i,a,o+x*a)}function i(r,t,n){var i,a,f;if(r<=0)return 0;if(1===r||0===n)return e(t[0]);if(i=n<0?(1-r)*n:0,r<8){for(a=0,f=0;f<r;f++)a+=e(t[i]),i+=n;return a}return s(r,t,n,i)}r(i,"ndarray",s);export{i as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
