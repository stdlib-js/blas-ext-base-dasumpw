"use strict";var w=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=w(function(J,R){
var M=require('@stdlib/math-base-special-floor/dist'),v=require('@stdlib/math-base-special-abs/dist'),S=128;function j(e,r,u,L){var a,q,i,s,p,m,c,y,t,O,o,f,n;if(e<=0)return 0;if(a=L,u===0)return e*v(r[a]);if(e<8){for(o=0,n=0;n<e;n++)o+=v(r[a]),a+=u;return o}if(e<=S){for(q=v(r[a]),i=v(r[a+u]),s=v(r[a+2*u]),p=v(r[a+3*u]),m=v(r[a+4*u]),c=v(r[a+5*u]),y=v(r[a+6*u]),t=v(r[a+7*u]),a+=8*u,O=e%8,n=8;n<e-O;n+=8)q+=v(r[a]),i+=v(r[a+u]),s+=v(r[a+2*u]),p+=v(r[a+3*u]),m+=v(r[a+4*u]),c+=v(r[a+5*u]),y+=v(r[a+6*u]),t+=v(r[a+7*u]),a+=8*u;for(o=q+i+(s+p)+(m+c+(y+t)),n;n<e;n++)o+=v(r[a]),a+=u;return o}return f=M(e/2),f-=f%8,j(f,r,u,a)+j(e-f,r,u,a+f*u)}R.exports=j
});var b=w(function(P,_){
var Z=require('@stdlib/strided-base-stride2offset/dist'),g=l();function h(e,r,u){return g(e,r,u,Z(e,u))}_.exports=h
});var I=w(function(Q,C){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=b(),z=l();k(B,"ndarray",z);C.exports=B
});var A=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=I(),E,K=D(A(__dirname,"./native.js"));F(K)?E=G:E=K;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
