(()=>{"use strict";var e={309:(e,n,r)=>{r.d(n,{Z:()=>u});var t=r(81),a=r.n(t),o=r(645),i=r.n(o),d=r(667),s=r.n(d),c=new URL(r(547),r.b),p=i()(a()),l=s()(c);p.push([e.id,"@font-face {\r\n    font-family: 'CrabSalad';\r\n    src: url("+l+") format('woff');\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    min-height: 100vh;\r\n}\r\n\r\n.header-container {\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    height: 790px;\r\n    position: relative;\r\n}\r\n\r\n.header-bar {\r\n    display: grid;\r\n    grid-template-columns: repeat(5,1fr) 300px;\r\n\r\n    padding: 30px 40px 30px 60px;\r\n    height: 130px;\r\n    align-items: center;\r\n    justify-items: center;\r\n}\r\n\r\n.logo,\r\n.tab-buttons {\r\n    color: rgb(7, 7, 7);\r\n}\r\n\r\n.logo {\r\n    font-family: 'CrabSalad';\r\n    font-size: 60px;\r\n    flex-wrap: wrap;\r\n    margin: -3px;\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n\r\n.order-button {\r\n    grid-area: 1/6;\r\n    background-color: rgb(209, 3, 3);\r\n    height: 70px;\r\n    width: 190px;\r\n    padding: 10px;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    justify-content: center;\r\n    justify-items: center;\r\n    align-items: center;\r\n    align-self: center;\r\n\r\n    border-radius: 30px;\r\n    border-style: none;\r\n    font-weight: bold;\r\n    color: whitesmoke;\r\n}\r\n\r\n.header-page-tabs {\r\n    display: flex;\r\n    gap: 20px;\r\n}\r\n\r\n.tab-buttons {\r\n    font-family: 'CrabSalad';\r\n    background-color: transparent;\r\n    height: 90px;\r\n    font-size: 35px;\r\n    border-style: none;\r\n    font-weight: bold;\r\n    margin-top: 40px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.main-content-wrapper {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.main-image {\r\n    width: 80vw;\r\n    height: 700px;\r\n}\r\n\r\n.main-image-credit {\r\n    position: absolute;\r\n    bottom: 5px;\r\n    left: 40px;\r\n    color: black;\r\n}\r\n\r\n.message-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    align-items: center;\r\n    width: 500px;\r\n    gap: 20px;\r\n    margin-top: 150px;\r\n    margin-left: 200px;\r\n}\r\n\r\n.message {\r\n    font-size: 50px;\r\n    width: 500px;\r\n    cursor: default;\r\n}\r\n\r\n.search-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n.searchbar {\r\n    text-align: center;\r\n    font-size: 20px;\r\n    height: 50px;\r\n    width: 30rem;\r\n    border-radius: 15px;\r\n    border-style: none;\r\n    box-shadow: 2px 2px 1px grey inset;\r\n}\r\n\r\n.search-button {\r\n    padding: 10px;\r\n    width: 200px;\r\n    font-size: 20px;\r\n    border-radius: 15px;\r\n    border-style: none;\r\n    background-color: rgb(204, 46, 46);\r\n    color: whitesmoke;\r\n}\r\n\r\n/*Sub content*/\r\n\r\n.sub-content-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr minmax(700px,1fr);\r\n    justify-items: center;\r\n    align-items: center;\r\n    column-gap: 5px;\r\n    padding: 40px;\r\n    height: 650px;\r\n    box-shadow: 0px 5px 5px grey inset;\r\n}\r\n\r\n.sub-wrapper {\r\n    grid-area: 1/2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    text-align: center;\r\n    margin-right: 160px;\r\n    margin-top: -150px;\r\n    padding: 50px;\r\n    border-radius: 15px;\r\n    min-width: 500px;\r\n    max-width: 750px;\r\n}\r\n\r\n.sub-header {\r\n    font-family: 'CrabSalad';\r\n    font-size: 60px;\r\n}\r\n\r\n.sub {\r\n    font-size: 2em;\r\n}\r\n\r\n.salad-wrapper {\r\n    grid-area: 1/1;\r\n    display: grid;\r\n    grid-template: repeat(2,1fr)/repeat(2,1fr);\r\n    padding: 50px;\r\n    width: 700px;\r\n    height: 670px;\r\n    border-radius: 30px;\r\n    margin-top: -40px;\r\n}\r\n\r\n.salad,\r\n.salad-2,\r\n.items-wrapper > div > img {\r\n    height: 400px;\r\n    width: 400px;\r\n    border-radius: 30px;\r\n    border: 5px solid black;\r\n}\r\n\r\n.salad {\r\n    grid-area: 2/2;\r\n    margin-top: -190px;\r\n    margin-left: -50px;\r\n    box-shadow: 5px 5px 5px 2px grey;\r\n}\r\n\r\n.salad-2 {\r\n    grid-area: 1;\r\n    margin-right: -90px;\r\n    box-shadow: -5px 5px 5px 2px grey;\r\n}\r\n\r\n/*Sub Content 2*/\r\n\r\n.sub-content-container2 {\r\n    display: flex;\r\n    justify-content: center;\r\n    height: 740px;\r\n    padding: 30px;\r\n    box-shadow: 0px -5px 5px grey;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.favorites-wrapper {    \r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    gap: 10px;\r\n    cursor: default;\r\n}\r\n\r\n.favorites-header {\r\n    font-family: 'CrabSalad';\r\n    font-size: 50px;\r\n}\r\n\r\n.items-wrapper {\r\n    display: flex;\r\n    gap: 35px;\r\n    height: 300px;\r\n}\r\n\r\n\r\n.items-wrapper > div > p {\r\n    font-family: 'CrabSalad';\r\n    font-size: 37px;\r\n}\r\n\r\n.footer-container {\r\n    height: 90px;\r\n    background-color: rgb(187, 2, 2);\r\n    font-size: 24px;\r\n    color: whitesmoke;\r\n    padding: 50px;\r\n    align-items: center;\r\n}\r\n\r\n.footer-wrapper {\r\n    display: grid;\r\n    grid-template-columns: repeat(3,1fr);\r\n    align-items: center;\r\n}\r\n\r\n.footer-left {\r\n    grid-area: 1;\r\n    width: 120px;\r\n    align-self: flex-start;\r\n}\r\n\r\n.footer-right {\r\n    grid-area: 1/3;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    width: 200px;\r\n    text-align: right;\r\n    align-items: flex-end;\r\n    justify-self: right;\r\n}\r\n\r\n.footer-left > p {\r\n    cursor: default;\r\n    margin: 0;\r\n}\r\n\r\n.footer-logo {\r\n    font-family: 'CrabSalad';\r\n    font-size: 38px;\r\n    flex-wrap: wrap;\r\n    width: 150px;\r\n    cursor: pointer;\r\n    color: whitesmoke;\r\n    justify-self: right;\r\n}\r\n\r\n.footer-copyright {\r\n    font-size: 20px;\r\n}\r\n\r\n/*Pseudo-classes*/\r\n\r\n.searchbar:focus {\r\n    outline: 1px solid black;\r\n}\r\n\r\n.search-button:hover {\r\n    background-color: rgb(139, 34, 34);\r\n}\r\n\r\n.tab-buttons:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.footer-left > p:hover {\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\n\r\n",""]);const u=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);t&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var o={},i=[],d=0;d<e.length;d++){var s=e[d],c=t.base?s[0]+t.base:s[0],p=o[c]||0,l="".concat(c," ").concat(p);o[c]=p+1;var u=r(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=a(m,t);t.byIndex=d,n.splice(d,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,a){var o=t(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var d=r(o[i]);n[d].references--}for(var s=t(e,a),c=0;c<o.length;c++){var p=r(o[c]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}o=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},547:(e,n,r)=>{e.exports=r.p+"200e89a852a211584b9c.woff"}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var o=n[t]={id:t,exports:{}};return e[t](o,o.exports,r),o.exports}r.m=e,r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{var e=r(379),n=r.n(e),t=r(795),a=r.n(t),o=r(569),i=r.n(o),d=r(565),s=r.n(d),c=r(216),p=r.n(c),l=r(589),u=r.n(l),m=r(309),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=r.p+"3bd449e872696cffe774.jpg",g=r.p+"68bea3d8522549eba5a9.jpg",x=r.p+"f8ab673d476a2e173452.jpg",b=r.p+"b0955f6f1a9576047105.jpg",v=r.p+"c36a63cce452d7ee7363.jpg",y=r.p+"4c46064b4cc194b4a045.jpg",C=r.p+"778a35cdbfbf8bee4c4b.jpg";(()=>{const e=document.createElement("div"),n=document.createElement("div"),r=document.createElement("h1"),t=document.createElement("div"),a=document.createElement("a"),o=document.createElement("a"),i=document.createElement("a"),d=document.createElement("a"),s=document.createElement("button");e.classList.add("header-container"),n.classList.add("header-bar"),r.classList.add("logo"),t.classList.add("header-page-tabs"),s.classList.add("order-button"),a.classList.add("tab-buttons"),o.classList.add("tab-buttons"),i.classList.add("tab-buttons"),d.classList.add("tab-buttons"),e.style.backgroundImage=`url(${f})`,d.id="contact-button",r.textContent="Salad Bowl",s.textContent="Order Now!",a.textContent="Menu",o.textContent="Location",i.textContent="About",d.textContent="Contact",a.href="./menu.js",e.appendChild(n),n.appendChild(r),n.appendChild(t),n.appendChild(s),t.appendChild(a),t.appendChild(o),t.appendChild(i),t.appendChild(d),document.body.appendChild(e)})(),(()=>{const e=document.querySelector(".header-container"),n=document.createElement("div"),r=document.createElement("div"),t=document.createElement("div"),a=document.createElement("input"),o=document.createElement("button"),i=document.createElement("a"),d=document.createTextNode("Photo by Louis Hansel on Unsplash");n.classList.add("message-wrapper"),r.classList.add("message"),t.classList.add("search-wrapper"),a.classList.add("searchbar"),o.classList.add("search-button"),i.classList.add("main-image-credit"),r.textContent="Experience the freshness of life!",a.placeholder="Search for a store near you!",o.textContent="Search",i.title="my text",i.href="https://unsplash.com/s/photos/salad?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",n.appendChild(r),t.appendChild(a),t.appendChild(o),n.appendChild(t),i.appendChild(d),n.appendChild(i),e.appendChild(n)})(),(()=>{const e=document.createElement("div"),n=document.createElement("div"),r=document.createElement("h2"),t=document.createElement("div"),a=document.createElement("div"),o=document.createElement("img"),i=document.createElement("img");r.textContent="Looking to refresh yourself?",t.textContent="Here at Salad Bowl it is our belief that fresh and healthy are the best ingredients to a green and peaceful lifestyle! Sourced from local ingredients, our bowls are guaranteed to reflect nature around us. Which means, other than our regular menu, each location may have their very own specialties!",e.classList.add("sub-content-container"),n.classList.add("sub-wrapper"),r.classList.add("sub-header"),t.classList.add("sub"),a.classList.add("salad-wrapper"),o.classList.add("salad-2"),i.classList.add("salad"),i.src=g,o.src=x,n.appendChild(r),n.appendChild(t),a.appendChild(o),a.appendChild(i),e.appendChild(n),e.appendChild(a),document.body.appendChild(e)})(),(()=>{const e=document.createElement("div"),n=document.createElement("div"),r=document.createElement("h2"),t=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),d=document.createElement("img"),s=document.createElement("p"),c=document.createElement("img"),p=document.createElement("p"),l=document.createElement("img"),u=document.createElement("p"),m=[a,o,i];r.textContent="Menu Favorites",s.textContent="Farmers' Feast",p.textContent="Honey Lemon",u.textContent="Strawberry Explosion",e.classList.add("sub-content-container2"),n.classList.add("favorites-wrapper"),r.classList.add("favorites-header"),t.classList.add("items-wrapper"),e.style.backgroundImage=`url(${b})`,d.src=v,c.src=y,l.src=C,m.forEach((e=>{t.appendChild(e)})),a.appendChild(d),a.appendChild(s),o.appendChild(c),o.appendChild(p),i.appendChild(l),i.appendChild(u),n.appendChild(r),n.appendChild(t),e.appendChild(n),document.body.appendChild(e)})(),(()=>{const e=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),t=document.createElement("div"),a=document.createElement("p"),o=document.createElement("p"),i=document.createElement("p"),d=document.createElement("p"),s=document.createElement("div"),c=document.createElement("div"),p=[a,o,i,d];e.classList.add("footer-container"),n.classList.add("footer-wrapper"),r.classList.add("footer-left"),t.classList.add("footer-right"),c.classList.add("footer-logo"),s.classList.add("footer-copyright"),s.textContent="© 2022 Salad Bowl",c.textContent="Salad Bowl",a.textContent="Menu",o.textContent="Location",i.textContent="Hiring",d.textContent="Contact Us",p.forEach((e=>{r.appendChild(e)})),n.appendChild(r),n.appendChild(t),t.appendChild(c),t.appendChild(s),e.appendChild(n),document.body.appendChild(e)})()})()})();