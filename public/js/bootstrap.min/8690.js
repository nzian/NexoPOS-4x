"use strict";(self.webpackChunknexopos_4x=self.webpackChunknexopos_4x||[]).push([[8690],{8690:(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var i=t(2277),n=t(3658),r=t(1487),o=t(8094);const a={name:"ns-login",props:["showRecoveryLink","showRegisterButton"],data:function(){return{fields:[],xXsrfToken:null,validation:new n.Z,isSubitting:!1}},mounted:function(){var e=this;(0,i.D)([r.ih.get("/api/nexopos/v4/fields/ns.login"),r.ih.get("/sanctum/csrf-cookie")]).subscribe({next:function(s){e.fields=e.validation.createFields(s[0]),e.xXsrfToken=r.ih.response.config.headers["X-XSRF-TOKEN"],setTimeout((function(){return r.kq.doAction("ns-login-mounted",e)}),100)},error:function(e){r.kX.error(e.message||(0,o.__)("An unexpected error occurred."),(0,o.__)("OK"),{duration:0}).subscribe()}})},methods:{__:o.__,signIn:function(){var e=this;if(!this.validation.validateFields(this.fields))return r.kX.error((0,o.__)("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(this.fields),r.kq.applyFilters("ns-login-submit",!0)&&(this.isSubitting=!0,r.ih.post("/auth/sign-in",this.validation.getValue(this.fields),{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe({next:function(e){document.location=e.data.redirectTo},error:function(s){e.isSubitting=!1,e.validation.enableFields(e.fields),s.data&&e.validation.triggerFieldsErrors(e.fields,s.data),r.kX.error(s.message).subscribe()}}))}}};const l=(0,t(1900).Z)(a,(function(){var e=this,s=e._self._c;return s("div",{staticClass:"ns-box rounded shadow overflow-hidden transition-all duration-100"},[s("div",{staticClass:"ns-box-body"},[s("div",{staticClass:"p-3 -my-2"},[e.fields.length>0?s("div",{staticClass:"py-2 fade-in-entrance anim-duration-300",on:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.signIn()}}},e._l(e.fields,(function(e,t){return s("ns-field",{key:t,attrs:{field:e}})})),1):e._e()]),e._v(" "),0===e.fields.length?s("div",{staticClass:"flex items-center justify-center py-10"},[s("ns-spinner",{attrs:{border:"4",size:"16"}})],1):e._e(),e._v(" "),e.showRecoveryLink?s("div",{staticClass:"flex w-full items-center justify-center py-4"},[s("a",{staticClass:"hover:underline text-blue-600 text-sm",attrs:{href:"/password-lost"}},[e._v(e._s(e.__("Password Forgotten ?")))])]):e._e()]),e._v(" "),s("div",{staticClass:"flex justify-between items-center border-t ns-box-footer p-3"},[s("div",[s("ns-button",{staticClass:"justify-between",attrs:{type:"info"},on:{click:function(s){return e.signIn()}}},[e.isSubitting?s("ns-spinner",{staticClass:"mr-2",attrs:{size:"6",border:"2"}}):e._e(),e._v(" "),[e._v(e._s(e.__("Sign In")))]],2)],1),e._v(" "),e.showRegisterButton?s("div",[s("ns-button",{attrs:{link:!0,href:"/sign-up",type:"success"}},[e._v(e._s(e.__("Register")))])],1):e._e()])])}),[],!1,null,null,null).exports}}]);