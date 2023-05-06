"use strict";(self.webpackChunknexopos_4x=self.webpackChunknexopos_4x||[]).push([[7299],{7299:(t,e,n)=>{n.r(e),n.d(e,{default:()=>c});var i=n(7757),o=n.n(i),r=n(3632),a=n(4679),u=n(2277),s=n(7700);function d(t,e,n,i,o,r,a){try{var u=t[r](a),s=u.value}catch(t){return void n(t)}u.done?e(s):Promise.resolve(s).then(i,o)}const l={name:"ns-pos-product",methods:{__:r.__,addProduct:function(){var t,e=this;return(t=o().mark((function t(){var n,i,a,u;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.validation.extractFields(e.fields),i=e.fields.filter((function(t){return void 0===t.show||"function"==typeof t.show&&t.show(n)})),e.validation.validateFields(i)){t.next=5;break}return t.abrupt("return",s.kX.error((0,r.__)("Unable to proceed. The form is not valid.")).subscribe());case 5:return(a=e.validation.extractFields(i)).$original=function(){return{stock_management:"disabled",category_id:0,tax_group:e.tax_groups.filter((function(t){return parseInt(t.id)===parseInt(a.tax_group_id)}))[0],tax_group_id:a.tax_group_id,tax_type:a.tax_type}},"product"===a.product_type?(a.unit_name=e.units.filter((function(t){return t.id===a.unit_id}))[0].name,a.quantity=parseFloat(a.quantity),a.unit_price=parseFloat(a.unit_price),a.mode="custom",a.price_with_tax=a.unit_price,a.price_without_tax=a.unit_price,a.tax_value=0,a.vendor_id=a.vendor_id):(a.unit_name=(0,r.__)("N/A"),a.unit_price=0,a.quantity=1),t.next=10,POS.defineQuantities(a,e.units);case 10:u=t.sent,a.$quantities=function(){return u},a=POS.computeProductTax(a),POS.addToCart(a),e.close();case 15:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(i,o){var r=t.apply(e,n);function a(t){d(r,i,o,a,u,"next",t)}function u(t){d(r,i,o,a,u,"throw",t)}a(void 0)}))})()},loadData:function(){var t=this;this.loaded=!1,(0,u.D)(nsHttpClient.get("/api/nexopos/v4/units"),nsHttpClient.get("/api/nexopos/v4/taxes/groups"),nsHttpClient.get("/api/nexopos/v4/smp/vendors")).subscribe({next:function(e){t.units=e[0],t.tax_groups=e[1],t.vendors=e[2],t.fields.filter((function(t){"tax_group_id"===t.name&&(t.options=e[1].map((function(t){return{label:t.name,value:t.id}}))),"unit_id"===t.name&&(t.options=e[0].map((function(t){return{label:t.name,value:t.id}}))),"vendor_id"===t.name&&(t.options=e[2].map((function(t){return{label:t.vendor_id,value:t.id}})))})),t.buildForm()},error:function(t){}})},buildForm:function(){this.fields=this.validation.createFields(this.fields),this.loaded=!0}},computed:{form:function(){return this.validation.extractFields(this.fields)}},data:function(){return{units:[],tax_groups:[],vendors:[],loaded:!1,validation:new a.Z,fields:[{label:(0,r.__)("Name"),name:"name",type:"text",description:(0,r.__)("Provide a unique name for the product."),validation:"required"},{label:(0,r.__)("Product Type"),name:"product_type",type:"select",description:(0,r.__)("Define the product type."),options:[{label:(0,r.__)("Normal"),value:"product"},{label:(0,r.__)("Dynamic"),value:"dynamic"}],value:"product",validation:"required"},{label:(0,r.__)("Rate"),name:"rate",type:"text",description:(0,r.__)("In case the product is computed based on a percentage, define the rate here."),validation:"required",show:function(t){return"dynamic"===t.product_type}},{label:(0,r.__)("Unit Price"),name:"unit_price",type:"text",description:(0,r.__)("Define what is the sale price of the item."),validation:"",show:function(t){return"product"===t.product_type}},{label:(0,r.__)("Quantity"),name:"quantity",type:"text",value:1,description:(0,r.__)("Set the quantity of the product."),validation:"",show:function(t){return"product"===t.product_type}},{label:(0,r.__)("Unit"),name:"unit_id",type:"select",options:[],description:(0,r.__)("Assign a unit to the product."),validation:"",show:function(t){return"product"===t.product_type}},{label:(0,r.__)("Tax Type"),name:"tax_type",type:"select",options:[{label:(0,r.__)("Disabled"),value:""},{label:(0,r.__)("Inclusive"),value:"inclusive"},{label:(0,r.__)("Exclusive"),value:"exclusive"}],description:(0,r.__)("Define what is tax type of the item."),show:function(t){return"product"===t.product_type}},{label:(0,r.__)("Tax Group"),name:"tax_group_id",type:"select",options:[],description:(0,r.__)("Choose the tax group that should apply to the item."),show:function(t){return"product"===t.product_type}},{label:(0,r.__)("Vendor Name"),name:"vendor_id",type:"select",options:[],description:(0,r.__)("Choose a vendor for the product."),show:function(t){return"product"===t.product_type}}]}},mounted:function(){this.loadData()}};const c=(0,n(1900).Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-95vw flex flex-col shadow-lg md:w-3/5-screen lg:w-2/5-screen md:h-3/5-screen ns-box"},[n("div",{staticClass:"header ns-box-header border-b flex justify-between p-2 items-center"},[n("h3",[t._v(t._s(t.__("Product / Service")))])]),t._v(" "),n("div",{staticClass:"ns-box-body p-2 flex-auto overflow-y-auto"},[t.loaded?t._e():n("div",{staticClass:"h-full w-full flex justify-center items-center"},[n("ns-spinner")],1),t._v(" "),t.loaded?[t._l(t.fields,(function(e,i){return[e.show&&e.show(t.form)||!e.show?n("ns-field",{key:i,attrs:{field:e}}):t._e()]}))]:t._e()],2),t._v(" "),n("div",{staticClass:"ns-box-footer border-t flex justify-between p-2"},[n("div"),t._v(" "),n("div",[n("ns-button",{attrs:{type:"info"},on:{click:function(e){return t.addProduct()}}},[t._v(t._s(t.__("Create")))])],1)])])}),[],!1,null,null,null).exports}}]);