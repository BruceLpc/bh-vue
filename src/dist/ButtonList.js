!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ButtonList=e():t.ButtonList=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}({0:function(t,e,n){t.exports=n(242)},4:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},5:function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=c[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],e))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(u(r.parts[i],e));c[r.id]={id:r.id,refs:1,parts:s}}}}function o(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],s=o[1],a=o[2],u=o[3],f={css:s,media:a,sourceMap:u};n[i]?n[i].parts.push(f):e.push(n[i]={id:i,parts:[f]})}return e}function i(t,e){var n=h(),r=b[b.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function u(t,e){var n,r,o;if(e.singleton){var i=m++;n=v||(v=a(e)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=a(e),r=p.bind(null,n),o=function(){s(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function f(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function p(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c={},l=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},d=l(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=l(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,m=0,b=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=d()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=o(t);return r(n,e),function(t){for(var i=[],s=0;s<n.length;s++){var a=n[s],u=c[a.id];u.refs--,i.push(u)}if(t){var f=o(t);r(f,e)}for(var s=0;s<i.length;s++){var u=i[s];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete c[u.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},242:function(t,e,n){var r,o,i={};n(243),r=n(245),o=n(246),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(s.template=o),s.computed||(s.computed={}),Object.keys(i).forEach(function(t){var e=i[t];s.computed[t]=function(){return e}})},243:function(t,e,n){var r=n(244);"string"==typeof r&&(r=[[t.id,r,""]]);n(5)(r,{});r.locals&&(t.exports=r.locals)},244:function(t,e,n){e=t.exports=n(4)(),e.push([t.id,".opt-buttons[_v-5e09e4f9]{margin-left:-4px;clear:both}",""])},245:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["name","buttonList"],data:function(){return{}},created:function(){this.buttonList||(this.buttonList=this.$parent.pageopt[this.name?this.name:"buttonList"])},methods:{click:function(t){this.$dispatch(t)}}}},246:function(t,e){t.exports=' <div class="opt-buttons bh-mv-16" _v-5e09e4f9=""> <a href=javascript:void(0); class="bh-btn bh-btn-{{item.primary?\'primary\':\'default\'}} waves-effect" @click=click(item.clickEvent) v-for="item in buttonList" _v-5e09e4f9=""> <i class="iconfont icon-{{item.icon}}" v-if=item.icon _v-5e09e4f9=""></i> {{item.text}} </a> </div> '}})});