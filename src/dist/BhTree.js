!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BhTree=t():e.BhTree=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){e.exports=n(225)},4:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},5:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(c(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],c=o[3],u={css:a,media:s,sourceMap:c};n[i]?n[i].parts.push(u):t.push(n[i]={id:i,parts:[u]})}return t}function i(e,t){var n=h(),r=x[x.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var i=v++;n=m||(m=s(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=s(t),r=l.bind(null,n),o=function(){a(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=$(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function l(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=f(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=d[s.id];c.refs--,i.push(c)}if(e){var u=o(e);r(u,t)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete d[c.id]}}}};var $=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},225:function(e,t,n){var r,o,i={};n(226),r=n(228),o=n(229),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(a.template=o),a.computed||(a.computed={}),Object.keys(i).forEach(function(e){var t=i[e];a.computed[e]=function(){return t}})},226:function(e,t,n){var r=n(227);"string"==typeof r&&(r=[[e.id,r,""]]);n(5)(r,{});r.locals&&(e.exports=r.locals)},227:function(e,t,n){t=e.exports=n(4)(),t.push([e.id,".jqx-tree.has-opt .jqx-tree-item-li .opt-panel{padding:3px}.jqx-tree.has-opt .jqx-tree-item-li .opt-panel .opt-btn{cursor:pointer}",""])},228:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e.jqxTree("getItems")},r=function(e){return e.jqxTree("getSelectedItem")},o=function(e){return e.jqxTree("getCheckedItems")},i=function(e,t){return e.jqxTree("getItem",t)},a=function(e,t){return e.jqxTree("selectItem",t)},s=function(e){return e.jqxTree("checkAll")},c=function(e){return e.jqxTree("uncheckAll")},u=function(e,t,n){return t?($.isArray(t)||(t=[t]),$.each(t,function(t,r){e.jqxTree("addTo",r,n,!1)}),e.jqxTree("render"),!0):(console.log("add child failed, invalid inupt"),!1)},l=function(e,t){return t?($.isArray(t)||(t=[t]),$.each(t,function(t,n){e.jqxTree("removeItem",n)}),void e.jqxTree("render")):(console.log("remove item failed, invalid inupt"),!1)},d=function(e){var t=e,n=$(t.$el);n.on("select",function(e){var r=e.args,o=i(n,r.element);t.selectedItem=o,n.find("li").removeClass("edit-tree-li-select"),$(o.element).addClass("edit-tree-li-select"),t.$dispatch("select",o)}),n.on("checkChange",function(e){var r=e.args;t.checkedItems=o(n);var a=i(n,r.element);a&&t.$dispatch("check-change",{item:a,checked:r.checked})})},f=function(e){var t=e,r=$(e.$els.treeroot);e.defaultSelect&&e.$nextTick(function(){var o=n(r);if(!(!o.length>0)){var i=o[0];e.defaultSelectLeaf===!0&&e.source.forEach(function(e){e.selected===!0&&(i=e)}),a(r,i),t.selectedItem=i,t.$dispatch("select",i),t.$dispatch("initialized")}})},p=function(e){var t=e.operations;if(t){var n=$(e.$el);n.addClass("has-opt").on("mouseenter",".jqx-tree-item",function(e){n.find(".opt-panel").remove();var r=$(e.target),o=r.parent();o.addClass("edit-tree-item-hover");var a=i(n,o[0]),s=null;s="function"==typeof t?t(a)||[]:t;var c=n.offset(),u=r.offset(),l=$("<div>").addClass("opt-panel").css({top:u.top-c.top,right:0,position:"absolute"});s.forEach(function(e){$("<a>").text(e.title).data("action",e.name).data("item",a).addClass("opt-btn bh-mh-4").appendTo(l)}),o.append(l);var d=n.find(".opt-panel").parent().find(".jqx-tree-item"),f=$(".opt-panel").width(),p=(d.width(),d.text());d.css("padding-right",f+"px").addClass("bh-str-cut").attr("title",p)}).on("mouseleave",".jqx-tree-item-li",function(e){n.find(".opt-panel").parent().find(".jqx-tree-item").css("padding-right","").removeClass("bh-str-cut"),n.find(".opt-panel").remove()}).on("click",".opt-btn",function(t){var n=$(t.target);e.$dispatch(n.data("action"),n.data("item"))})}},h=function(e){var t=$(e.$els.treeroot);t.off("mouseenter").off("mouseleave").off("click"),t.find(".opt-panel").remove()},m=function(e,t){h(e);var n=$(e.$els.treeroot);return e.jqxObj=n.jqxTree(t),f(e),e.selectedItem=r(n),e.checkedItems=o(n),p(e),e.jqxObj},v=function(e){var t=e.fields;if($.isEmptyObject(t))return e.source;var n=$.extend({},e.defaultFields,t),r=[],o=[];$.each(t,function(e,t){$.isArray(t)?(r.push({name:t[0],map:e}),o.push({name:t[0],type:t[1]})):($.inArray(t,["expanded","selected"])>-1?o.push({name:t,type:"bool"}):o.push({name:t}),r.push({name:t,map:e}))});var i={datatype:"array",id:n.id,datafields:o,localdata:e.source},a=new $.jqx.dataAdapter(i);a.dataBind();var s=a.getRecordsHierarchy(n.id,n.pid,"items",r);return r=null,i=null,s||[]};t.default={data:function(){return{jqxObj:null,defaultOpts:{hasThreeStates:!1,checkboxes:!1},defaultFields:{id:"id",pid:"parentid",label:"label"}}},props:{options:Object,selectedItem:Object,checkedItems:Array,fields:Object,operations:[Array,Function],source:{type:Array,default:function(){return[]}},defaultSelect:{type:Boolean,default:!1},defaultSelectLeaf:{type:Boolean,default:!1}},methods:{getAll:function(){return n($(this.$el))},checkAll:function(){return s($(this.$el))},uncheckAll:function(){return c($(this.$el))},addChild:function(e,t){return u($(this.$el),e,t)},addBefore:function(e,t){return $(this.$el).jqxTree("addBefore",e,t)},addTo:function(e,t){return $(this.$el).jqxTree("addTo",e,t,!1)},addAfter:function(e,t){return $(this.$el).jqxTree("addAfter",e,t)},remove:function(e){return l($(this.$el),e)},collapseItem:function(e){return $(this.$el).jqxTree("collapseItem",e)},expandItem:function(e){return $(this.$el).jqxTree("expandItem",e)},selectItem:function(e){return $(this.$el).jqxTree("selectItem",e)},getSelectedItem:function(){return r($(this.$el))},updateItem:function(e,t){return $(this.$el).jqxTree("updateItem",e,t)}},ready:function(){var e=this,t=e.options=$.extend(e.defaultOpts,e.options);t.source=v(e),m(e,t),d(this),e.$watch("source",function(t){m(e,{source:v(e)})})},beforeDestroy:function(){h(this);var e=$(this.$el);e.off("checkChange"),e.off("select"),e.off("itemClick"),e.jqxTree("destroy")}}},229:function(e,t){e.exports=" <div v-el:treeroot></div> "}})});