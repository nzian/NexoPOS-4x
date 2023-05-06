"use strict";(self.webpackChunknexopos_4x=self.webpackChunknexopos_4x||[]).push([[2753],{2753:(t,s,e)=>{e.r(s),e.d(s,{default:()=>d});var l=e(1487);const a={name:"ns-dashboard-cards",data:function(){return{report:{}}},mounted:function(){this.loadReport()},methods:{__:e(8094).__,loadReport:function(){var t=this;l.ih.get("/api/nexopos/v4/dashboard/day").subscribe((function(s){t.report=s}))}}};const d=(0,e(1900).Z)(a,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"-m-4 flex flex-wrap",attrs:{id:"dashboard-cards"}},[s("div",{staticClass:"p-4 w-full md:w-1/2 lg:w-1/4"},[s("div",{staticClass:"flex flex-auto flex-col rounded-lg shadow-lg bg-gradient-to-br from-info-secondary to-info-tertiary px-3 py-5"},[s("div",{staticClass:"flex flex-row md:flex-col flex-auto"},[s("div",{staticClass:"w-1/2 md:w-full flex md:flex-col md:items-start items-center justify-center"},[s("h6",{staticClass:"font-bold hidden text-right md:inline-block"},[t._v(t._s(t.__("Total Sales")))]),t._v(" "),s("h3",{staticClass:"text-2xl font-black"},[t._v("\n                        "+t._s(t._f("currency")(t.report.total_paid_orders||0,"abbreviate"))+"\n                    ")])]),t._v(" "),s("div",{staticClass:"w-1/2 md:w-full flex flex-col px-2 justify-end items-end"},[s("h6",{staticClass:"font-bold inline-block text-right md:hidden"},[t._v(t._s(t.__("Total Sales")))]),t._v(" "),s("h4",{staticClass:"text-xs text-right"},[t._v("+"+t._s(t._f("currency")(t.report.day_paid_orders||0))+" "+t._s(t.__("Today")))])])])])]),t._v(" "),s("div",{staticClass:"p-4 w-full md:w-1/2 lg:w-1/4"},[s("div",{staticClass:"flex flex-auto flex-col rounded-lg shadow-lg bg-gradient-to-br from-green-400 to-green-600 px-3 py-5"},[s("div",{staticClass:"flex flex-row md:flex-col flex-auto"},[s("div",{staticClass:"w-1/2 md:w-full flex md:flex-col md:items-start items-center justify-center"},[s("h6",{staticClass:"font-bold hidden text-right md:inline-block"},[t._v(t._s(t.__("Incomplete Orders")))]),t._v(" "),s("h3",{staticClass:"text-2xl font-black"},[t._v("\n                        "+t._s(t._f("currency")(t.report.total_partially_paid_orders+t.report.total_unpaid_orders||0,"abbreviate"))+"\n                    ")])]),t._v(" "),s("div",{staticClass:"w-1/2 md:w-full flex flex-col px-2 justify-end items-end"},[s("h6",{staticClass:"font-bold inline-block text-right md:hidden"},[t._v(t._s(t.__("Incomplete Orders")))]),t._v(" "),s("h4",{staticClass:"text-xs text-right"},[t._v("+"+t._s(t._f("currency")(t.report.day_unpaid_orders+t.report.day_partially_paid_orders||0))+" "+t._s(t.__("Today")))])])])])]),t._v(" "),s("div",{staticClass:"p-4 w-full md:w-1/2 lg:w-1/4"},[s("div",{staticClass:"flex flex-auto flex-col rounded-lg shadow-lg bg-gradient-to-br from-red-300 via-red-400 to-red-500 px-3 py-5"},[s("div",{staticClass:"flex flex-row md:flex-col flex-auto"},[s("div",{staticClass:"w-1/2 md:w-full flex md:flex-col md:items-start items-center justify-center"},[s("h6",{staticClass:"font-bold hidden text-right md:inline-block"},[t._v(t._s(t.__("Wasted Goods")))]),t._v(" "),s("h3",{staticClass:"text-2xl font-black"},[t._v("\n                        "+t._s(t._f("currency")(t.report.total_wasted_goods||0,"abbreviate"))+"\n                    ")])]),t._v(" "),s("div",{staticClass:"w-1/2 md:w-full flex flex-col px-2 justify-end items-end"},[s("h6",{staticClass:"font-bold inline-block text-right md:hidden"},[t._v(t._s(t.__("Wasted Goods")))]),t._v(" "),s("h4",{staticClass:"text-xs text-right"},[t._v("+"+t._s(t._f("currency")(t.report.day_wasted_goods||0))+" "+t._s(t.__("Today")))])])])])]),t._v(" "),s("div",{staticClass:"p-4 w-full md:w-1/2 lg:w-1/4"},[s("div",{staticClass:"flex flex-auto flex-col rounded-lg shadow-lg bg-gradient-to-br from-indigo-400 to-indigo-600 px-3 py-5"},[s("div",{staticClass:"flex flex-row md:flex-col flex-auto"},[s("div",{staticClass:"w-1/2 md:w-full flex md:flex-col md:items-start items-center justify-center"},[s("h6",{staticClass:"font-bold hidden text-right md:inline-block"},[t._v(t._s(t.__("Expenses")))]),t._v(" "),s("h3",{staticClass:"text-2xl font-black"},[t._v("\n                        "+t._s(t._f("currency")(t.report.total_expenses||0,"abbreviate"))+"\n                    ")])]),t._v(" "),s("div",{staticClass:"w-1/2 md:w-full flex flex-col px-2 justify-end items-end"},[s("h6",{staticClass:"font-bold inline-block text-right md:hidden"},[t._v(t._s(t.__("Expenses")))]),t._v(" "),s("h4",{staticClass:"text-xs text-right"},[t._v("+"+t._s(t._f("currency")(t.report.day_expenses||0))+" "+t._s(t.__("Today")))])])])])])])}),[],!1,null,null,null).exports}}]);