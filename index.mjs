// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function o(e,t){return r(t)?n(t,"iter")&&(e.iter=t.iter,!s(t.iter))?new TypeError(i("0II35","iter",t.iter)):null:new TypeError(i("0II2h",t))}function d(r){var n,s,i,m,l;if(n={iter:11585},arguments.length&&(m=o(n,r)))throw m;return l=-1,e(s={},"next",p),e(s,"return",j),t&&e(s,t,h),s;function p(){var e;return l+=1,i||l>=n.iter?{done:!0}:{value:(e=l/2*(l+1))*e,done:!1}}function j(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function h(){return d(n)}}export{d as default};
//# sourceMappingURL=index.mjs.map
