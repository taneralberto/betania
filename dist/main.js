(()=>{"use strict";var e={859:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(645),a=r.n(o)()((function(e){return e[1]}));a.push([e.id,"*{margin:0;padding:0;box-sizing:border-box}.site-main{background:#251a37;padding:1rem}.wrapper{display:flex;flex-direction:column;row-gap:1rem}.label{color:#fff;font-weight:bold}.calc__dollar{display:flex}.calc__product{display:flex;flex-direction:column;align-items:center;row-gap:1rem}.calc__dollar-value{width:100%;padding:.8rem;margin-right:.5rem;font-size:1.2rem}.calc__dollar-price{width:100%;padding:.8rem;margin-top:1rem;font-size:1.2rem}.calc__bolivar-price{font-size:1.5rem;border:3px solid rgba(255,255,255,.3);padding:.5rem}.bolivars__values{display:flex;flex-direction:column;row-gap:.5rem;color:#fff;font-size:1.2rem}.bolivars__field{border-bottom:1px solid rgba(255,255,255,.3);padding-top:.5rem;padding-bottom:.5rem}.bolivars__result{font-size:1.5rem;margin-top:.5rem}.dollars__values{display:flex;flex-direction:column;row-gap:.5rem;color:#fff;font-size:1.2rem}.dollars__field{border-bottom:1px solid rgba(255,255,255,.3);padding-top:.5rem;padding-bottom:.5rem}.dollars__result{font-size:1.5rem;margin-top:.5rem}.add-button,.new-button{font-size:2rem;color:#251a37;border:2px solid rgba(255,255,255,.3);border-radius:100px;padding-top:.5rem;padding-bottom:.5rem}.add-button:hover,.new-button:hover{color:#fff}",""]);const n=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,o){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(o)for(var n=0;n<this.length;n++){var i=this[n][0];null!=i&&(a[i]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&a[d[0]]||(r&&(d[2]?d[2]="".concat(r," and ").concat(d[2]):d[2]=r),t.push(d))}},t}},379:(e,t,r)=>{var o,a=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),n=[];function i(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function l(e,t){for(var r={},o=[],a=0;a<e.length;a++){var l=e[a],d=t.base?l[0]+t.base:l[0],c=r[d]||0,s="".concat(d," ").concat(c);r[d]=c+1;var u=i(s),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(n[u].references++,n[u].updater(p)):n.push({identifier:s,updater:v(p,t),references:1}),o.push(s)}return o}function d(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var n=r.nc;n&&(o.nonce=n)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,s=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,r,o){var a=r?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(t,a);else{var n=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(n,i[t]):e.appendChild(n)}}function p(e,t,r){var o=r.css,a=r.media,n=r.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,m=0;function v(e,t){var r,o,a;if(t.singleton){var n=m++;r=f||(f=d(t)),o=u.bind(null,r,n,!1),a=u.bind(null,r,n,!0)}else r=d(t),o=p.bind(null,r,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var r=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<r.length;o++){var a=i(r[o]);n[a].references--}for(var d=l(e,t),c=0;c<r.length;c++){var s=i(r[c]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}r=d}}}}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={id:o,exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=r(379),t=r.n(e),o=r(859);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;let a={sync:document.querySelector(".calc__sync-dollar-value"),add:document.querySelector(".add-button"),new:document.querySelector(".new-button")},n={dollar:document.querySelector(".calc__dollar-value"),product:document.querySelector(".calc__dollar-price")},i={productPrice:document.querySelector(".calc__bolivar-price"),bolivarsTotal:document.querySelector(".bolivars__total"),dollarsTotal:document.querySelector(".dollars__total")},l=(new Intl.NumberFormat).format;const d={price:{dollar:n.product.value,bolivar:parseFloat(i.productPrice.innerHTML),update:function(e){let t=(e*this.dollar).toFixed(2);return this.bolivar=parseFloat(t),this.bolivar},display:function(e){e.innerHTML=l(this.bolivar)}}},c={value:n.dollar.value,updateWithDolarToday:async function(){let e=0,t=await fetch("https://s3.amazonaws.com/dolartoday/data.json");return e=(await t.json()).USD.promedio,e}};class s{constructor(){this.prices=[]}getPrices(){return this.prices}addNewField(e){this.prices.push(e);let t=(new Intl.NumberFormat).format(e),r=document.querySelector(".bolivars__values"),o=document.createElement("div");o.classList.add("bolivars__field");let a=document.createElement("label");a.classList.add("bolivars__value"),a.innerHTML=t,o.appendChild(a),r.appendChild(o)}getTotal(){let e=0;return this.prices.map((t=>{e+=parseFloat(t)})),e.toFixed(2)}}class u{constructor(){this.prices=[]}getPrices(){return this.prices}addNewField(e){this.prices.push(e);let t=document.querySelector(".dollars__values"),r=document.createElement("div");r.classList.add("dollars__field");let o=document.createElement("label");o.classList.add("dollars__value"),o.innerHTML=e,r.appendChild(o),t.appendChild(r)}getTotal(){let e=0;return this.prices.map((t=>{e+=parseFloat(t)})),e.toFixed(2)}}document.addEventListener("DOMContentLoaded",(()=>{!function(){function e(){d.price.update(c.value),d.price.display(i.productPrice)}e(),a.sync.addEventListener("click",(async()=>{c.value=await c.updateWithDolarToday(),n.dollar.value=c.value,e()})),n.product.addEventListener("input",(t=>{d.price.dollar=t.target.value,e()})),n.dollar.addEventListener("input",(t=>{c.value=t.target.value,e()}));let t=new s,r=new u;a.add.addEventListener("click",(()=>{t.addNewField(d.price.bolivar),i.bolivarsTotal.innerHTML=l(t.getTotal()),r.addNewField(d.price.dollar),i.dollarsTotal.innerHTML=l(r.getTotal())}))}()}))})()})();