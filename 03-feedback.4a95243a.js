function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function g(e,t,n){var r,o,i,a,u,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,u=setTimeout(w,t),l?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function w(){var e=m();if(j(e))return O(e);u=setTimeout(w,function(e){var n=t-(e-f);return s?v(n,i-(e-c)):n}(e))}function O(e){return u=void 0,g&&r?b(e):(r=o=void 0,a)}function S(){var e=m(),n=j(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(w,t),b(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=y(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},S.flush=function(){return void 0===u?a:O(m())},S}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),{email:h,message:j}=b.elements;b.addEventListener("input",e(t)((function(e){const t={email:h.value,message:j.value};!function(e,t){try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}}("feedback-form-state",t)}),500)),b.addEventListener("submit",(function(e){if(e.preventDefault(),""===h.value||""===j.value)return alert("Please fill in all the fields!");console.log(`email: ${h.value}, message: ${j.value}`),function(e){try{localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}}("feedback-form-state"),e.target.reset()})),function(){const e=function(e){try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}("feedback-form-state");if(void 0===e)return;h.value=e.email,j.value=e.message}();
//# sourceMappingURL=03-feedback.4a95243a.js.map