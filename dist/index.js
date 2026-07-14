"use strict";var w=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var l=w(function(J,R){
var M=require('@stdlib/math-base-special-floor/dist'),v=require('@stdlib/math-base-special-abs/dist'),S=128;function j(e,r,a,L){var u,q,i,s,p,m,c,y,t,O,o,f,n;if(e<=0)return 0;if(u=L,a===0)return e*v(r[u]);if(e<8){for(o=0,n=0;n<e;n++)o+=v(r[u]),u+=a;return o}if(e<=S){for(q=v(r[u]),i=v(r[u+a]),s=v(r[u+2*a]),p=v(r[u+3*a]),m=v(r[u+4*a]),c=v(r[u+5*a]),y=v(r[u+6*a]),t=v(r[u+7*a]),u+=8*a,O=e%8,n=8;n<e-O;n+=8)q+=v(r[u]),i+=v(r[u+a]),s+=v(r[u+2*a]),p+=v(r[u+3*a]),m+=v(r[u+4*a]),c+=v(r[u+5*a]),y+=v(r[u+6*a]),t+=v(r[u+7*a]),u+=8*a;for(o=q+i+(s+p)+(m+c+(y+t)),n;n<e;n++)o+=v(r[u]),u+=a;return o}return f=M(e/2),f-=f%8,j(f,r,a,u)+j(e-f,r,a,u+f*a)}R.exports=j
});var b=w(function(P,_){
var Z=require('@stdlib/strided-base-stride2offset/dist'),g=l();function h(e,r,a){return g(e,r,a,Z(e,a))}_.exports=h
});var I=w(function(Q,C){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=b(),z=l();k(B,"ndarray",z);C.exports=B
});var A=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=I(),E,K=D(A(__dirname,"./native.js"));F(K)?E=G:E=K;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
