(()=>{"use strict";var e,t={4639:function(e,t,n){var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},r=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var a=i(n(5311)),s=n(1460);window.addMessage=function(e,t){(0,a.default)(".messages").addClass("new").empty().append('<ul><li class="'+e+'">'+t+"</li></ul>");var n=setTimeout((function(){(0,a.default)(".messages").addClass("appear"),clearTimeout(n)}),100)},window.escapeHtml=function(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return e.replace(/[&<>"']/g,(function(e){return t[e]}))},window.initTagField=function(e,t,n){var r=o({autocomplete:{source:t},preprocessTag:function(e){return e&&'"'!==e[0]&&e.indexOf(" ")>-1?'"'+e+'"':e}},n);(0,a.default)("#"+e).tagit(r)},window.enableDirtyFormCheck=function(e,t){var n=(0,a.default)(e),o=t.confirmationMessage||" ",i=t.alwaysDirty||!1,s=t.commentApp||null,l=t.callback||null,c=null,u=!1,d=function(e,t){l&&l(e,t)};n.on("submit",(function(){u=!0}));var f=i,p=!1,h=-1;s&&(p=s.selectors.selectIsDirty(s.store.getState()),s.store.subscribe((function(){clearTimeout(h),h=setTimeout((function(){var e=s.selectors.selectIsDirty(s.store.getState());e!==p&&d(f,p=e)}),p?3e3:300)}))),d(f,p);var v=-1,w=function(){f!==(f=function(){if(i)return!0;if(!c)return!1;var e=new FormData(n[0]),t=Array.from(e.keys()).filter((function(e){return!e.startsWith("comments-")}));return t.length!==c.size||t.some((function(t){var n=e.getAll(t),o=c.get(t);return n!==o&&!(!Array.isArray(n)||!Array.isArray(o))&&(n.length!==o.length||n.some((function(e,t){return e!==o[t]})))}))}())&&d(f,p)};i||setTimeout((function(){var e=new FormData(n[0]);c=new Map,Array.from(e.keys()).filter((function(e){return!e.startsWith("comments-")})).forEach((function(t){return c.set(t,e.getAll(t))}));var t=function(){clearTimeout(v),v=setTimeout(w,f?3e3:300)};n.on("change keyup",t).trigger("change");var o=function(e){var t,n;try{for(var o=r(e),i=o.next();!i.done;i=o.next()){var a=i.value;if(a.nodeType===a.ELEMENT_NODE&&["INPUT","TEXTAREA","SELECT"].includes(a.tagName))return!0}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return!1};new MutationObserver((function(e){var n,i;try{for(var a=r(e),s=a.next();!s.done;s=a.next()){var l=s.value;if(o(l.addedNodes)||o(l.removedNodes))return void t()}}catch(e){n={error:e}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}})).observe(n[0],{childList:!0,attributes:!1,subtree:!0})}),1e4),window.addEventListener("beforeunload",(function(e){if(clearTimeout(v),w(),!u&&(f||p))return e.returnValue=o,o}))},(0,a.default)((function(){function e(){(0,a.default)("textarea[data-autosize-on]").each((function(){autosize.update((0,a.default)(this).get())}))}if((0,a.default)("body").addClass("ready"),(0,a.default)(document).ready(e),document.addEventListener("wagtail:tab-changed",e),(0,a.default)(".dropdown").each((function(){var e=(0,a.default)(this);(0,a.default)(".dropdown-toggle",e).on("click",(function(t){t.stopPropagation(),e.toggleClass("open"),e.hasClass("open")?(0,a.default)(document).on("click.dropdown.cancel",(function(t){var n=t.relatedTarget||t.toElement;(0,a.default)(n).parents().is(e)||(e.removeClass("open"),(0,a.default)(document).off("click.dropdown.cancel"))})):(0,a.default)(document).off("click.dropdown.cancel")}))})),(0,a.default)(".drop-zone").on("dragover",(function(){(0,a.default)(this).addClass("hovered")})).on("dragleave dragend drop",(function(){(0,a.default)(this).removeClass("hovered")})),window.headerSearch){var t=0,n=0,o=(0,a.default)(window.headerSearch.termInput),r=o.parent().find("use"),i=r.attr("href");o.on("keyup cut paste change",(function(){clearTimeout(o.data("timer")),o.data("timer",setTimeout(l,200))})),o.trigger("focus");var l=function(){var e=o.val();if(c("q").trim()!==e.trim()){r.attr("href","#icon-spinner");var l=++n,u=new URLSearchParams(window.location.search);u.set("q",e),u.delete("p");var d=u.toString();a.default.ajax({url:window.headerSearch.url,data:d,success:function(e){l>t&&(t=l,(0,a.default)(window.headerSearch.targetOutput).html(e).slideDown(800),window.history.replaceState(null,null,"?"+d),o[0].dispatchEvent(new Event("search-success")))},complete:function(){window.wagtail.ui.initDropDowns(),(0,s.initTooltips)(),r.attr("href",i)}})}},c=function(e){var t=new RegExp("[\\?&]"+e+"=([^]*)").exec(window.location.search);return t?t[1]:""}}(0,a.default)(document).on("click","button.button-longrunning",(function(){var e=(0,a.default)(this),t=(0,a.default)("em",e),n="disabledtimeout";window.cancelSpinner=function(){e.prop("disabled","").removeData(n).removeClass("button-longrunning-active"),e.data("clicked-text")&&t.text(e.data("original-text"))};var o=e.closest("form").get(0);if(!o||!o.checkValidity||o.noValidate||o.checkValidity())var r=setTimeout((function(){e.data(n)||(e.data(n,setTimeout((function(){clearTimeout(e.data(n)),cancelSpinner()}),3e4)),e.data("clicked-text")&&t.length&&(e.data("original-text",t.text()),t.text(e.data("clicked-text"))),e.addClass("button-longrunning-active").prop("disabled","true")),clearTimeout(r)}),10)}))}));var l=window.wagtail||{};l.ui||(l.ui={});var c="listing__item--active",u="icon-arrow-down",d="icon-arrow-up",f="is-open",p="click",h="[data-dropdown-toggle]",v="aria-hidden",w=13,g=32,m={dropDowns:[],closeAllExcept:function(e){var t=this.dropDowns.indexOf(e);this.dropDowns.forEach((function(e,n){n!==t&&e.state.isOpen&&e.closeDropDown()}))},add:function(e){this.dropDowns.push(e)},get:function(){return this.dropDowns},getByIndex:function(e){return this.dropDowns[e]},getOpenDropDown:function(){var e=null;return this.dropDowns.forEach((function(t){t.state.isOpen&&(e=t)})),e}};function y(e,t){e&&t||!("error"in console)?(this.el=e,this.$parent=(0,a.default)(e).parents("[data-listing-page-title]"),this.state={isOpen:!1},this.registry=t,this.clickOutsideDropDown=this.clickOutsideDropDown.bind(this),this.closeDropDown=this.closeDropDown.bind(this),this.openDropDown=this.openDropDown.bind(this),this.handleClick=this.handleClick.bind(this),this.handleKeyEvent=this.handleKeyEvent.bind(this),e.addEventListener(p,this.handleClick),e.addEventListener("keydown",this.handleKeyEvent),this.$parent.data("close",this.closeDropDown)):console.error("A dropdown was created without an element or the DropDownController.\nMake sure to pass both to your component.")}function D(){var e=new y(this,m);m.add(e)}function b(e){if(27===e.which){var t=m.getOpenDropDown();t&&t.closeDropDown()}}function k(){(0,a.default)("[data-dropdown]").each(D),(0,a.default)(document).on("keydown",b)}y.prototype={handleKeyEvent:function(e){[g,w].indexOf(e.which)>-1&&(e.preventDefault(),this.handleClick(e))},handleClick:function(e){this.state.isOpen?this.closeDropDown(e):this.openDropDown(e)},openDropDown:function(e){e.stopPropagation(),e.preventDefault();var t=this.el,n=this.$parent,o=t.querySelector(h);this.state.isOpen=!0,this.registry.closeAllExcept(this),t.classList.add(f),t.setAttribute(v,!1),o.classList.remove(u),o.classList.add(d),document.addEventListener(p,this.clickOutsideDropDown,!1),n.addClass(c)},closeDropDown:function(){this.state.isOpen=!1;var e=this.el,t=this.$parent,n=e.querySelector(h);document.removeEventListener(p,this.clickOutsideDropDown,!1),e.classList.remove(f),n.classList.add(u),n.classList.remove(d),e.setAttribute(v,!0),t.removeClass(c)},clickOutsideDropDown:function(e){var t=this.el,n=e.relatedTarget||e.toElement;(0,a.default)(n).parents().is(t)||this.closeDropDown()}},(0,a.default)(document).ready(k),l.ui.initDropDowns=k,l.ui.DropDownController=m,(0,a.default)(document).ready((function(){document.querySelectorAll(".button-select").forEach((function(e){var t=e.querySelector('input[type="hidden"]');e.querySelectorAll(".button-select__option").forEach((function(n){n.addEventListener("click",(function(o){o.preventDefault(),t.value=n.value,e.querySelectorAll(".button-select__option--selected").forEach((function(e){e.classList.remove("button-select__option--selected")})),n.classList.add("button-select__option--selected")}))}))}))})),window.wagtail=l},5311:e=>{e.exports=jQuery}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,n,r,i)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,r,i]=e[u],s=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j=321,(()=>{var e={321:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[a,s,l]=n,c=0;if(a.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var u=l(o)}for(t&&t(n);c<a.length;c++)i=a[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},n=globalThis.webpackChunkwagtail=globalThis.webpackChunkwagtail||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[751],(()=>o(4639)));r=o.O(r)})();