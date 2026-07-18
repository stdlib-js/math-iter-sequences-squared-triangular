"use strict";var o=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var l=o(function(S,f){
var b=require('@stdlib/assert-is-plain-object/dist'),y=require('@stdlib/assert-has-own-property/dist'),O=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,s=require('@stdlib/error-tools-fmtprodmsg/dist');function h(t,r){return b(r)?y(r,"iter")&&(t.iter=r.iter,!O(r.iter))?new TypeError(s('0al2t',"iter",r.iter)):null:new TypeError(s('0al2V',r));}f.exports=h
});var m=o(function(j,g){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=require('@stdlib/symbol-iterator/dist'),w=l(),T=11585;function d(t){var r,e,v,a,i;if(r={iter:T},arguments.length&&(a=w(r,t),a))throw a;return i=-1,e={},u(e,"next",q),u(e,"return",p),c&&u(e,c,x),e;function q(){var n;return i+=1,v||i>=r.iter?{done:!0}:(n=i/2*(i+1),{value:n*n,done:!1})}function p(n){return v=!0,arguments.length?{value:n,done:!0}:{done:!0}}function x(){return d(r)}}g.exports=d
});var E=m();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
