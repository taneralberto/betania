(()=>{var e={859:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"*{margin:0;padding:0;box-sizing:border-box}.site-main{background:#251a37;padding:1rem}.wrapper{display:flex;flex-direction:column;row-gap:1rem}.label{color:#fff;font-weight:bold}.calc__dollar{display:flex}.calc__sync-dollar-value{width:60px}.calc__product{display:flex;flex-direction:column;align-items:center;row-gap:1rem}.calc__dollar-value{width:100%;padding:.8rem;margin-right:.5rem;font-size:1.2rem}.calc__dollar-price{width:100%;padding:.8rem;margin-top:1rem;font-size:1.2rem}.calc__bolivar-price{font-size:1.5rem;border:3px solid rgba(255,255,255,.3);padding:.5rem}.bolivars__values{display:flex;flex-direction:column;row-gap:.5rem;color:#fff;font-size:1.2rem}.bolivars__field{border-bottom:1px solid rgba(255,255,255,.3);padding-top:.5rem;padding-bottom:.5rem}.bolivars__result{font-size:1.5rem;margin-top:.5rem}.dollars__values{display:flex;flex-direction:column;row-gap:.5rem;color:#fff;font-size:1.2rem}.dollars__field{border-bottom:1px solid rgba(255,255,255,.3);padding-top:.5rem;padding-bottom:.5rem}.dollars__result{font-size:1.5rem;margin-top:.5rem}.add-button,.new-button{font-size:2rem;color:#251a37;border:2px solid rgba(255,255,255,.3);border-radius:100px;padding-top:.5rem;padding-bottom:.5rem}.add-button:hover,.new-button:hover{color:#fff}",""]);const a=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var i=0;i<e.length;i++){var d=[].concat(e[i]);n&&o[d[0]]||(r&&(d[2]?d[2]="".concat(r," and ").concat(d[2]):d[2]=r),t.push(d))}},t}},379:(e,t,r)=>{"use strict";var n,o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),a=[];function l(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function i(e,t){for(var r={},n=[],o=0;o<e.length;o++){var i=e[o],d=t.base?i[0]+t.base:i[0],c=r[d]||0,s="".concat(d," ").concat(c);r[d]=c+1;var u=l(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:s,updater:v(p,t),references:1}),n.push(s)}return n}function d(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var a=r.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var l=o(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var c,s=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var a=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(a,l[t]):e.appendChild(a)}}function p(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var f=null,m=0;function v(e,t){var r,n,o;if(t.singleton){var a=m++;r=f||(f=d(t)),n=u.bind(null,r,a,!1),o=u.bind(null,r,a,!0)}else r=d(t),n=p.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=i(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=l(r[n]);a[o].references--}for(var d=i(e,t),c=0;c<r.length;c++){var s=l(r[c]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}r=d}}}},895:()=>{const e=e=>e.replace(/[^0-9]/g,""),t=(e,t="$")=>{const r=(+e.replace(/(\d{2})$/,".$1")).toFixed(2).split(".");return`${r[0].replace(/(?=(\d{3})+(?!\d))/g,".").replace(/^\./g,"")}.${r[1]}`},r=r=>{const n=r.dataset,o=n.currency||"$",a=`${o} 0.00`,l=(+r.getAttribute("max-length")||9)+"00".length;n.currency=o,r.setAttribute("inputmode","numeric"),r.setAttribute("max-length",l),r.setAttribute("placeholder",a),n.currentValue=a,r.addEventListener("input",(r=>{const{data:n,target:l}=r,i=l.dataset,d=i.currentValue,c=e(d),s=l.value,u=l.getAttribute("max-length");let p;n?(/^[0-9]$/.test(n)&&(p=s.length>1?`${c}${n}`:`00${n}`,p=t(p,o)),p=p&&e(p).length<=u?p:d):p=0===s.length?a:t(c.slice(0,-1),o),l.value=i.currentValue=p}),!1)},n=document.querySelectorAll(".input-money");for(input of n)r(input)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(379),t=r.n(e),n=r(859);t()(n.Z,{insert:"head",singleton:!1}),n.Z.locals;let o={sync:document.querySelector(".calc__sync-dollar-value"),add:document.querySelector(".add-button"),new:document.querySelector(".new-button")},a={dollar:document.querySelector(".calc__dollar-value"),product:document.querySelector(".calc__dollar-price")},l={productPrice:document.querySelector(".calc__bolivar-price"),bolivarsTotal:document.querySelector(".bolivars__total"),dollarsTotal:document.querySelector(".dollars__total")},i=(new Intl.NumberFormat).format;const d={price:{dollar:a.product.value,bolivar:parseFloat(l.productPrice.innerHTML),update:function(e){console.log(this.dollar);let t=(e*this.dollar).toFixed(2);return this.bolivar=parseFloat(t),this.bolivar},display:function(e){e.innerHTML=i(this.bolivar)},reset:function(){this.dollar=0,this.bolivar=0,l.productPrice.innerHTML=0,a.product.value=""}}},c={value:a.dollar.value,updateWithDolarToday:async function(){let e=0,t=await fetch("https://s3.amazonaws.com/dolartoday/data.json");return e=(await t.json()).USD.promedio,e},reset:function(){this.value=0}};class s{constructor(){this.prices=[]}getPrices(){return this.prices}addNewField(e){this.prices.push(e);let t=(new Intl.NumberFormat).format(e),r=document.querySelector(".bolivars__values"),n=document.createElement("div");n.classList.add("bolivars__field");let o=document.createElement("label");o.classList.add("bolivars__value"),o.innerHTML=t,n.appendChild(o),r.appendChild(n)}getTotal(){let e=0;return this.prices.map((t=>{e+=parseFloat(t)})),e.toFixed(2)}reset(){this.prices=[],document.querySelector(".bolivars__values").innerHTML=""}}class u{constructor(){this.prices=[]}getPrices(){return this.prices}addNewField(e){this.prices.push(e);let t=document.querySelector(".dollars__values"),r=document.createElement("div");r.classList.add("dollars__field");let n=document.createElement("label");n.classList.add("dollars__value"),n.innerHTML=e,r.appendChild(n),t.appendChild(r)}getTotal(){let e=0;return this.prices.map((t=>{e+=parseFloat(t)})),e.toFixed(2)}reset(){this.prices=[],document.querySelector(".dollars__values").innerHTML=""}}r(895),document.addEventListener("DOMContentLoaded",(()=>{!function(){function e(){d.price.update(c.value),d.price.display(l.productPrice)}e(),o.sync.addEventListener("click",(async()=>{c.value=await c.updateWithDolarToday(),a.dollar.value=c.value,e()})),a.product.addEventListener("input",(t=>{d.price.dollar=t.target.value,e()})),a.dollar.addEventListener("input",(t=>{c.value=t.target.value,e()}));let t=new s,r=new u;o.add.addEventListener("click",(()=>{t.addNewField(d.price.bolivar),l.bolivarsTotal.innerHTML=i(t.getTotal()),r.addNewField(d.price.dollar),l.dollarsTotal.innerHTML=i(r.getTotal())})),o.new.addEventListener("click",(()=>{d.price.reset(),t.reset(),r.reset(),l.bolivarsTotal.innerHTML=0,l.dollarsTotal.innerHTML=0}))}()}))})()})();