"use strict";(self.webpackChunkNexoPOS_4x=self.webpackChunkNexoPOS_4x||[]).push([[7585],{7585:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var i=r(9671),s=r(6386),n=r(7266);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u={name:"ns-pos-shipping-popup",computed:{activeTabFields:function(){if(null!==this.tabs)for(var e in this.tabs)if(this.tabs[e].active)return this.tabs[e].fields;return[]},useBillingInfo:function(){return null!==this.tabs?this.tabs.billing.fields[0].value:new Object},useShippingInfo:function(){return null!==this.tabs?this.tabs.shipping.fields[0].value:new Object}},destroyed:function(){this.orderSubscription.unsubscribe()},mounted:function(){var e=this;this.$popup.event.subscribe((function(t){"click-overlay"===t.event&&e.resolveIfQueued(!1)})),this.orderSubscription=POS.order.subscribe((function(t){return e.order=t})),this.loadForm()},data:function(){return{tabs:null,orderSubscription:null,order:null,formValidation:new n.Z}},watch:{useBillingInfo:function(e){var t=this;1===e&&this.tabs.billing.fields.forEach((function(e){"_use_customer_billing"!==e.name&&(e.value=t.order.customer.billing?t.order.customer.billing[e.name]:e.value)}))},useShippingInfo:function(e){var t=this;1===e&&this.tabs.shipping.fields.forEach((function(e){"_use_customer_shipping"!==e.name&&(e.value=t.order.customer.shipping?t.order.customer.shipping[e.name]:e.value)}))}},methods:{__,resolveIfQueued:s.Z,submitInformations:function(){var e=this.formValidation.extractForm({tabs:this.tabs});for(var t in e.general)["shipping","shipping_rate"].includes(t)&&(e.general[t]=parseFloat(e.general[t]));this.order=a(a({},this.order),e.general),delete e.general,delete e.shipping._use_customer_shipping,delete e.billing._use_customer_billing,this.order.addresses=e,POS.order.next(this.order),POS.refreshCart(),this.resolveIfQueued(!0)},closePopup:function(){this.resolveIfQueued(!1)},toggle:function(e){for(var t in this.tabs)this.tabs[t].active=!1;this.tabs[e].active=!0},loadForm:function(){var e=this;i.ih.get("/api/nexopos/v4/forms/ns.pos-addresses").subscribe((function(t){var r=t.tabs,i=function(t){"general"===t?r[t].fields.forEach((function(t){t.value=e.order[t.name]||""})):r[t].fields.forEach((function(r){r.value=e.order.addresses[t]?e.order.addresses[t][r.name]:""}))};for(var s in r)i(s);e.tabs=e.formValidation.initializeTabs(r)}))}}};const c=(0,r(1900).Z)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-white w-6/7-screen md:w-4/5-screen lg:w-3/5-screen h-6/7-screen md:h-4/5-screen shadow-lg flex flex-col overflow-hidden"},[r("div",{staticClass:"p-2 border-b border-gray-200 flex justify-between items-center"},[r("h3",{staticClass:"font-bold text-gray-700"},[e._v(e._s(e.__("Shipping & Billing")))]),e._v(" "),r("div",{staticClass:"tools"},[r("button",{staticClass:"hover:bg-red-400 hover:text-white hover:border-red-600 rounded-full h-8 w-8 border items-center justify-center",on:{click:function(t){return e.closePopup()}}},[r("i",{staticClass:"las la-times"})])])]),e._v(" "),r("div",{staticClass:"flex-auto bg-gray-200 p-4 overflow-y-auto"},[r("div",{staticClass:"my-5",attrs:{id:"tabs-container"}},[r("div",{staticClass:"header flex",staticStyle:{"margin-bottom":"-1px"}},e._l(e.tabs,(function(t,i){return r("div",{key:i,staticClass:"tab rounded-tl rounded-tr border border-gray-400  px-3 py-2 text-gray-700 cursor-pointer",class:t.active?"border-b-0 bg-white":"border bg-gray-200",staticStyle:{"margin-right":"-1px"},on:{click:function(t){return e.toggle(i)}}},[e._v(e._s(t.label))])})),0),e._v(" "),r("div",{staticClass:"border border-gray-400 p-4 bg-white"},[r("div",{staticClass:"-mx-4 flex flex-wrap"},e._l(e.activeTabFields,(function(t,i){return r("div",{key:i,class:"px-4 w-full md:w-1/2 lg:w-1/3"},[r("ns-field",{attrs:{field:t},on:{blur:function(r){return e.formValidation.checkField(t)},change:function(r){return e.formValidation.checkField(t)}}})],1)})),0)])])]),e._v(" "),r("div",{staticClass:"p-2 flex justify-between border-t border-gray-300"},[r("div"),e._v(" "),r("div",[r("ns-button",{attrs:{type:"info"},on:{click:function(t){return e.submitInformations()}}},[e._v(e._s(e.__("Save")))])],1)])])}),[],!1,null,null,null).exports}}]);