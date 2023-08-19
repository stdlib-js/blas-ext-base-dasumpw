"use strict";var j=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var E=j(function(J,_){
var S=require('@stdlib/math-base-special-floor/dist'),e=require('@stdlib/math-base-special-abs/dist'),Z=128;function b(v,r,u,f){var a,o,p,m,s,c,l,w,y,R,i,q,n;if(v<=0)return 0;if(v===1||u===0)return e(r[f]);if(a=f,v<8){for(i=0,n=0;n<v;n++)i+=e(r[a]),a+=u;return i}if(v<=Z){for(o=e(r[a]),p=e(r[a+u]),m=e(r[a+2*u]),s=e(r[a+3*u]),c=e(r[a+4*u]),l=e(r[a+5*u]),w=e(r[a+6*u]),y=e(r[a+7*u]),a+=8*u,R=v%8,n=8;n<v-R;n+=8)o+=e(r[a]),p+=e(r[a+u]),m+=e(r[a+2*u]),s+=e(r[a+3*u]),c+=e(r[a+4*u]),l+=e(r[a+5*u]),w+=e(r[a+6*u]),y+=e(r[a+7*u]),a+=8*u;for(i=o+p+(m+s)+(c+l+(w+y)),n;n<v;n++)i+=e(r[a]),a+=u;return i}return q=S(v/2),q-=q%8,b(q,r,u,a)+b(v-q,r,u,a+q*u)}_.exports=b
});var C=j(function(P,B){
var t=require('@stdlib/math-base-special-abs/dist'),g=E();function h(v,r,u){var f,a,o;if(v<=0)return 0;if(v===1||u===0)return t(r[0]);if(u<0?f=(1-v)*u:f=0,v<8){for(a=0,o=0;o<v;o++)a+=t(r[f]),f+=u;return a}return g(v,r,u,f)}B.exports=h
});var L=j(function(Q,K){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=C(),z=E();k(I,"ndarray",z);K.exports=I
});var A=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=L(),O,M=D(A(__dirname,"./native.js"));F(M)?O=G:O=M;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
