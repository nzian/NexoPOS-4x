"use strict";(self.webpackChunknexopos_4x=self.webpackChunknexopos_4x||[]).push([[7901],{7901:(s,t,e)=>{e.r(t),e.d(t,{default:()=>i});e(7700);const a={name:"ns-orders-summary",data:function(){return{orders:[],subscription:null,hasLoaded:!1}},mounted:function(){var s=this;this.hasLoaded=!1,this.subscription=Dashboard.recentOrders.subscribe((function(t){s.hasLoaded=!0,s.orders=t}))},methods:{__:e(3632).__},destroyed:function(){this.subscription.unsubscribe()}};const i=(0,e(1900).Z)(a,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"flex flex-auto flex-col shadow rounded-lg overflow-hidden",attrs:{id:"ns-orders-summary"}},[e("div",{staticClass:"p-2 flex title justify-between border-b"},[e("h3",{staticClass:"font-semibold"},[s._v(s._s(s.__("Recent Orders")))]),s._v(" "),e("div",{})]),s._v(" "),e("div",{staticClass:"head flex-auto flex-col flex h-56 overflow-y-auto ns-scrollbar"},[s.hasLoaded?s._e():e("div",{staticClass:"h-full flex items-center justify-center"},[e("ns-spinner",{attrs:{size:"8",border:"4"}})],1),s._v(" "),s.hasLoaded&&0===s.orders.length?e("div",{staticClass:"h-full flex items-center justify-center flex-col"},[e("i",{staticClass:"las la-grin-beam-sweat text-6xl"}),s._v(" "),e("p",{staticClass:"text-sm"},[s._v(s._s(s.__("Well.. nothing to show for the meantime.")))])]):s._e(),s._v(" "),s._l(s.orders,(function(t){return e("div",{key:t.id,staticClass:"border-b single-order p-2 flex justify-between",class:"paid"===t.payment_status?"paid-order":"other-order"},[e("div",[e("h3",{staticClass:"text-lg font-semibold"},[s._v(s._s(s.__("Order"))+" : "+s._s(t.code))]),s._v(" "),e("div",{staticClass:"flex -mx-2"},[e("div",{staticClass:"px-1"},[e("h4",{staticClass:"text-semibold text-xs"},[e("i",{staticClass:"lar la-user-circle"}),s._v(" "),e("span",[s._v(s._s(t.user.username))])])]),s._v(" "),e("div",{staticClass:"divide-y-4"}),s._v(" "),e("div",{staticClass:"px-1"},[e("h4",{staticClass:"text-semibold text-xs"},[e("i",{staticClass:"las la-clock"}),s._v(" "),e("span",[s._v(s._s(t.created_at))])])])])]),s._v(" "),e("div",[e("h2",{staticClass:"text-xl font-bold",class:"paid"===t.payment_status?"paid-currency":"unpaid-currency"},[s._v(s._s(s._f("currency")(t.total)))])])])}))],2)])}),[],!1,null,null,null).exports}}]);