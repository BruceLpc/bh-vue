!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BhStepWizard=t():e.BhStepWizard=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}({0:function(e,t,i){e.exports=i(199)},199:function(e,t,i){var n,o,r={};n=i(200),o=i(201),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports.default);var c="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(c.template=o),c.computed||(c.computed={}),Object.keys(r).forEach(function(e){var t=r[e];c.computed[e]=function(){return t}})},200:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e,t){t&&e&&$.inArray(e,t)===-1&&t.push(e)};t.default={props:{items:Array,current:String,container:Object,finished:{type:Array,default:function(){return[]}},clickable:{type:Boolean,default:!0}},methods:{prev:function(){$(this.$el).bhStepWizard("activePrevItem")},next:function(){$(this.$el).bhStepWizard("activeNextItem")},activate:function(e){$(this.$el).bhStepWizard("changeToActive",e)},finish:function(e){$(this.$el).bhStepWizard("changeToFinished",e),i(e,this.finished)},isLast:function(){return $(this.$el).bhStepWizard("isLastStep")}},ready:function(){var e=this,t=$(this.$el);t.bhStepWizard({items:e.items,active:e.current,container:e.container,finished:e.finished,isAddClickEvent:e.clickable,change:function(t){e.current=t.stepId,e.$dispatch("change",t)}})}}},201:function(e,t){e.exports=" <div></div> "}})});