!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BhTabs=t():e.BhTabs=t()}(this,function(){return function(e){function t(s){if(o[s])return o[s].exports;var n=o[s]={exports:{},id:s,loaded:!1};return e[s].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}({0:function(e,t,o){e.exports=o(205)},205:function(e,t,o){var s,n,i={};s=o(206),n=o(207),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports.default);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(e){var t=i[e];r.computed[e]=function(){return t}})},206:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{width:{default:"100%"},height:{default:"auto"},position:{default:"top"}},methods:{select:function(e){$(this.$el).jqxTabs("select",e)},add:function(e,t,o){$(this.$el).jqxTabs("addAt",e,t,o)},remove:function(e){$(this.$el).jqxTabs("removeAt",e)}},ready:function(){var e=this,t=$(e.$el);t.jqxTabs({width:e.width,height:e.height,position:e.position}),t.on("selected",function(t){var o=t.args.item;e.$dispatch("selected",o)}),t.on("unselected",function(t){var o=t.args.item;e.$dispatch("unselected",o)})},beforeDestroy:function(){var e=$(this.$el);e.off("unselected"),e.off("selected"),e.jqxTabs("destroy")}}},207:function(e,t){e.exports=" <div class=bh-tabs> <slot></slot> </div> "}})});