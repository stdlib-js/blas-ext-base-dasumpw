"use strict";var j=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=j(function(J,_){
var M=require('@stdlib/math-base-special-floor/dist'),v=require('@stdlib/math-base-special-abs/dist'),S=128;function l(e,r,a,O){var u,f,i,p,s,m,c,y,w,R,o,q,n;if(e<=0)return 0;if(e===1||a===0)return v(r[O]);if(u=O,e<8){for(o=0,n=0;n<e;n++)o+=v(r[u]),u+=a;return o}if(e<=S){for(f=v(r[u]),i=v(r[u+a]),p=v(r[u+2*a]),s=v(r[u+3*a]),m=v(r[u+4*a]),c=v(r[u+5*a]),y=v(r[u+6*a]),w=v(r[u+7*a]),u+=8*a,R=e%8,n=8;n<e-R;n+=8)f+=v(r[u]),i+=v(r[u+a]),p+=v(r[u+2*a]),s+=v(r[u+3*a]),m+=v(r[u+4*a]),c+=v(r[u+5*a]),y+=v(r[u+6*a]),w+=v(r[u+7*a]),u+=8*a;for(o=f+i+(p+s)+(m+c+(y+w)),n;n<e;n++)o+=v(r[u]),u+=a;return o}return q=M(e/2),q-=q%8,l(q,r,a,u)+l(e-q,r,a,u+q*a)}_.exports=l
});var B=j(function(P,b){
var Z=require('@stdlib/strided-base-stride2offset/dist'),g=t();function h(e,r,a){return g(e,r,a,Z(e,a))}b.exports=h
});var K=j(function(Q,I){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),z=t();k(C,"ndarray",z);I.exports=C
});var A=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=K(),E,L=D(A(__dirname,"./native.js"));F(L)?E=G:E=L;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
