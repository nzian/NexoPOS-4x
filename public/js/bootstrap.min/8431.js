/*! For license information please see 8431.js.LICENSE.txt */
"use strict";(self.webpackChunknexopos_4x=self.webpackChunknexopos_4x||[]).push([[8431],{8431:(t,e,r)=>{r.r(e),r.d(e,{default:()=>v});var n=r(8094),o=r(3658),i=r(2277),a=r(1487);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function d(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),u=new k(o||[]);return n(a,"_invoke",{value:S(t,r,u)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var p={};function h(){}function v(){}function _(){}var y={};l(y,i,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(C([])));b&&b!==e&&r.call(b,i)&&(y=b);var g=_.prototype=h.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,i,a,c){var s=f(t[n],t,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==u(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(s.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=L(a,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function C(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return v.prototype=_,n(g,"constructor",{value:_,configurable:!0}),n(_,"constructor",{value:v,configurable:!0}),v.displayName=l(_,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,l(t,s,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},x(w.prototype),l(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(d(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(g),l(g,s,"Generator"),l(g,i,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=C,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function s(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}var l,d,f;const p=(l={name:"ns-pos-product",methods:{__:n.__,addQuickProduct:function(){var t,e=this;return(t=c().mark((function t(){var r,o,i,u;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.validation.extractFields(e.fields),o=e.fields.filter((function(t){return void 0===t.show||"function"==typeof t.show&&t.show(r)})),e.validation.validateFields(o)){t.next=5;break}return t.abrupt("return",a.kX.error((0,n.__)("Unable to proceed. The form is not valid.")).subscribe());case 5:return(i=e.validation.extractFields(o)).$original=function(){return{stock_management:"disabled",category_id:0,tax_group:e.tax_groups.filter((function(t){return parseInt(t.id)===parseInt(i.tax_group_id)}))[0],tax_group_id:i.tax_group_id,tax_type:i.tax_type}},"product"===i.product_type?(i.unit_name=e.units.filter((function(t){return t.id===i.unit_id}))[0].name,i.quantity=parseFloat(i.quantity),i.unit_price=parseFloat(i.unit_price),i.mode="custom",i.price_with_tax=i.unit_price,i.price_without_tax=i.unit_price,i.tax_value=0,i.vendor_id=i.vendor_id):(i.unit_name=(0,n.__)("N/A"),i.unit_price=0,i.quantity=1),t.next=10,POS.defineQuantities(i,e.units);case 10:u=t.sent,i.$quantities=function(){return u},i=POS.computeProductTax(i),POS.addToCart(i),e.resetForm(),e.buildForm();case 16:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){s(i,n,o,a,u,"next",t)}function u(t){s(i,n,o,a,u,"throw",t)}a(void 0)}))})()},loadData:function(){var t=this;this.loaded=!1,(0,i.D)(nsHttpClient.get("/api/nexopos/v4/units"),nsHttpClient.get("/api/nexopos/v4/taxes/groups"),nsHttpClient.get("/api/nexopos/v4/smp/vendors")).subscribe({next:function(e){t.units=e[0],t.tax_groups=e[1],t.vendors=e[2],t.fields.filter((function(t){"tax_group_id"===t.name&&(t.options=e[1].map((function(t){return{label:t.name,value:t.id}}))),"unit_id"===t.name&&(t.options=e[0].map((function(t){return{label:t.name,value:t.id}}))),"vendor_id"===t.name&&(t.options=e[2].map((function(t){return{label:t.vendor_id,value:t.id}})))})),t.buildForm()},error:function(t){}})},resetForm:function(){this.fields.forEach((function(t){"name"==t.name&&(t.value=void 0),"unit_price"==t.name&&(t.value=void 0)}))},buildForm:function(){this.fields=this.validation.createFields(this.fields),this.loaded=!0}},computed:{form:function(){return this.validation.extractFields(this.fields)},isVisible:function(){return"product"===this.visibleSection}},mounted:function(){var t=this;this.visibleSectionSubscriber=POS.visibleSection.subscribe((function(e){t.visibleSection=e}))},destroyed:function(){this.visibleSectionSubscriber.unsubscribe()},data:function(){return{units:[],tax_groups:[],vendors:[],visibleSection:null,visibleSectionSubscriber:null,loaded:!1,validation:new o.Z,fields:[{label:(0,n.__)("Vendor"),name:"vendor_id",type:"select",options:[],description:(0,n.__)("Choose a vendor for the product."),show:function(t){return"product"===t.product_type}},{label:(0,n.__)("Description"),name:"name",type:"text",description:(0,n.__)("Provide a unique description for the product."),validation:"required"},{label:(0,n.__)("Rate"),name:"rate",type:"text",description:(0,n.__)("In case the product is computed based on a percentage, define the rate here."),validation:"required",show:function(t){return"dynamic"===t.product_type}},{label:(0,n.__)("Price"),name:"unit_price",type:"text",description:(0,n.__)("Define what is the sale price of the item."),validation:"",show:function(t){return"product"===t.product_type}},{label:(0,n.__)("Quantity"),name:"quantity",type:"text",value:1,description:(0,n.__)("Set the quantity of the product."),validation:"",show:function(t){return"product"===t.product_type}},{label:(0,n.__)("Unit"),name:"unit_id",type:"select",options:[],description:(0,n.__)("Assign a unit to the product."),validation:"required",value:3,hidden:!0,show:function(t){return"product"===t.product_type}},{label:(0,n.__)("Tax Type"),name:"tax_type",type:"select",options:[{label:(0,n.__)("Disabled"),value:""},{label:(0,n.__)("Inclusive"),value:"inclusive"},{label:(0,n.__)("Exclusive"),value:"exclusive"}],value:"inclusive",hidden:!0,description:(0,n.__)("Define what is tax type of the item."),show:function(t){return"product"===t.product_type}},{label:(0,n.__)("Tax Group"),name:"tax_group_id",type:"select",options:[],description:(0,n.__)("Choose the tax group that should apply to the item."),show:function(t){return!1}},{label:(0,n.__)("Product Type"),name:"product_type",type:"select",hidden:!0,description:(0,n.__)("Define the product type."),options:[{label:(0,n.__)("Normal"),value:"product"},{label:(0,n.__)("Dynamic"),value:"dynamic"}],value:"product"}]}}},f=function(){this.loadData()},(d=function(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===u(e)?e:String(e)}(d="mounted"))in l?Object.defineProperty(l,d,{value:f,enumerable:!0,configurable:!0,writable:!0}):l[d]=f,l);var h=(0,r(1900).Z)(p,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-auto flex flex-col",attrs:{id:"pos-product"}},["product"===t.visibleSection?e("div",{staticClass:"flex pl-2",attrs:{id:"tools"}},[e("div",{staticClass:"switch-cart flex cursor-pointer rounded-tl-lg rounded-tr-lg px-3 py-2 border-t border-r border-l",on:{click:function(e){return t.switchTo("cart")}}},[e("span",[t._v(t._s(t.__("Cart")))]),t._v(" "),t.order?e("span",{staticClass:"products-count flex items-center justify-center text-sm rounded-full h-6 w-6 ml-1"},[t._v(t._s(t.order.products.length))]):t._e()]),t._v(" "),e("div",{staticClass:"switch-grid cursor-pointer rounded-tl-lg rounded-tr-lg px-3 py-2 font-semibold",on:{click:function(e){return t.switchTo("product")}}},[t._v("\n      "+t._s(t.__("Products"))+"\n    ")])]):t._e(),t._v(" "),e("div",{staticClass:"rounded shadow ns-tab-item flex-auto flex overflow-hidden"},[e("div",{staticClass:"cart-table flex flex-auto flex-col overflow-hidden"},[e("div",{staticClass:"header ns-box-header border-b flex justify-between p-2 items-center"},[e("h3",[t._v(t._s(t.__("Product / Service")))])]),t._v(" "),e("div",{staticClass:"ns-box-body p-2 flex-auto overflow-y-auto"},[t.loaded?t._e():e("div",{staticClass:"h-full w-full flex justify-center items-center"},[e("ns-spinner")],1),t._v(" "),t.loaded?[t._l(t.fields,(function(r,n){return[r.show&&r.show(t.form)||!r.show?e("ns-field",{key:n,attrs:{field:r}}):t._e()]}))]:t._e()],2),t._v(" "),e("div",{staticClass:"ns-box-footer border-t flex justify-between p-2"},[e("div"),t._v(" "),e("div",[e("ns-button",{attrs:{type:"info"},on:{click:function(e){return t.addQuickProduct()}}},[t._v(t._s(t.__("Create")))])],1)])])])])}),[],!1,null,null,null);const v=h.exports}}]);