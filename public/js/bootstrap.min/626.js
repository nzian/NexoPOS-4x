"use strict";(self.webpackChunknexopos_4x=self.webpackChunknexopos_4x||[]).push([[626],{2418:(s,e,t)=>{t.r(e),t.d(e,{default:()=>l});var i=t(9165),n=t(2277),r=t(40),a=t(277);const o={name:"ns-login",data:function(){return{fields:[],xXsrfToken:null,validation:new r.Z,isSubitting:!1}},mounted:function(){var s=this;(0,n.D)([a.ih.get("/api/nexopos/v4/fields/ns.password-lost"),a.ih.get("/sanctum/csrf-cookie")]).subscribe((function(e){s.fields=s.validation.createFields(e[0]),s.xXsrfToken=a.ih.response.config.headers["X-XSRF-TOKEN"],setTimeout((function(){return a.kq.doAction("ns-login-mounted",s)}),100)}),(function(s){a.kX.error(s.message||(0,i.__)("An unexpected error occured."),(0,i.__)("OK"),{duration:0}).subscribe()}))},methods:{__:i.__,requestRecovery:function(){var s=this;if(!this.validation.validateFields(this.fields))return a.kX.error((0,i.__)("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(this.fields),a.kq.applyFilters("ns-password-lost-submit",!0)&&(this.isSubitting=!0,a.ih.post("/auth/password-lost",this.validation.getValue(this.fields),{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe((function(s){a.kX.success(s.message).subscribe(),setTimeout((function(){document.location=s.data.redirectTo}),500)}),(function(e){s.isSubitting=!1,s.validation.enableFields(s.fields),e.data&&s.validation.triggerFieldsErrors(s.fields,e.data),a.kX.error(e.message).subscribe()})))}}};const l=(0,t(1900).Z)(o,(function(){var s=this,e=s._self._c;return e("div",{staticClass:"bg-white rounded shadow overflow-hidden transition-all duration-100"},[e("div",{staticClass:"p-3 -my-2"},[s.fields.length>0?e("div",{staticClass:"py-2 fade-in-entrance anim-duration-300"},s._l(s.fields,(function(s,t){return e("ns-field",{key:t,attrs:{field:s}})})),1):s._e()]),s._v(" "),0===s.fields.length?e("div",{staticClass:"flex items-center justify-center py-10"},[e("ns-spinner",{attrs:{border:"4",size:"16"}})],1):s._e(),s._v(" "),e("div",{staticClass:"flex w-full items-center justify-center py-4"},[e("a",{staticClass:"hover:underline text-blue-600 text-sm",attrs:{href:"/sign-in"}},[s._v(s._s(s.__("Remember Your Password ?")))])]),s._v(" "),e("div",{staticClass:"flex justify-between items-center bg-gray-200 p-3"},[e("div",[e("ns-button",{staticClass:"justify-between",attrs:{type:"info"},on:{click:function(e){return s.requestRecovery()}}},[s.isSubitting?e("ns-spinner",{staticClass:"mr-2",attrs:{size:"6",border:"2"}}):s._e(),s._v(" "),e("span",[s._v(s._s(s.__("Submit")))])],1)],1),s._v(" "),e("div",[e("ns-link",{attrs:{href:"/sign-up",type:"success"}},[s._v(s._s(s.__("Register")))])],1)])])}),[],!1,null,null,null).exports}}]);