import{_ as v}from"./currency-Dtag6qPd.js";import{F as T}from"./bootstrap-Dea9XoG9.js";import{g as A}from"./components-CxIJxoVN.js";import{s as y,r as p,o as r,c as l,a as d,F as f,b as h,n as B,t as m,e as u,f as _,w as g,i as k,g as S,j as w,A as H}from"./runtime-core.esm-bundler-VrNrzzXC.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./chart-Ozef1QaY.js";import"./ns-prompt-popup-7xlV5yZV.js";import"./ns-avatar-image-Pigdi04i.js";const O={name:"ns-settings",props:["url"],components:{nsField:A},data(){return{validation:new T,form:{},isSubmitting:!1,test:""}},computed:{component(){return this},formDefined(){return Object.values(this.form).length>0},activeTab(){for(let t in this.form.tabs)if(this.form.tabs[t].active===!0)return this.form.tabs[t]},activeTabIdentifier(){const t=Object.values(this.form.tabs);return Object.keys(this.form.tabs)[t.indexOf(this.activeTab)]}},mounted(){const t=window.location.href,i=new URL(t);this.loadSettingsForm(i.searchParams.get("tab")||null)},methods:{__:v,async handleSaved(t,i){i.options.push({value:t.data.entry[i.props.optionAttributes.value],label:t.data.entry[i.props.optionAttributes.label]}),i.value=t.data.entry[i.props.optionAttributes.value]},loadComponent(t){if(nsExtraComponents[t])return y(nsExtraComponents[t]);if(nsComponents[t])return y(nsComponents[t]);throw`Component ${t} not found.`},async submitForm(){if(this.validation.validateForm(this.form).length>0)return nsSnackBar.error(v("Unable to proceed the form is not valid.")).subscribe();this.validation.disableForm(this.form);const t=this.validation.extractForm(this.form),i=nsHooks.applyFilters("ns-before-saved",()=>new Promise((a,s)=>(this.isSubmitting=!0,nsHttpClient.post(this.url,t).subscribe({next:c=>{this.isSubmitting=!1,a(c)},error:c=>{this.isSubmitting=!1,s(c)}}))));try{const a=await i(t);this.validation.enableForm(this.form);const s=Object.values(this.form.tabs),c=Object.keys(this.form.tabs)[s.indexOf(this.activeTab)];this.loadSettingsForm(c),a.data&&a.data.results&&a.data.results.forEach(e=>{e.status==="error"?nsSnackBar.error(e.message).subscribe():nsSnackBar.success(e.message).subscribe()}),nsHooks.doAction("ns-settings-saved",{result:a,instance:this}),nsSnackBar.success(a.message).subscribe()}catch(a){this.validation.enableForm(this.form),this.validation.triggerFieldsErrors(this.form,a),nsHooks.doAction("ns-settings-failed",{error:a,instance:this}),a.message&&nsSnackBar.error(a.message||v("Unable to proceed the form is not valid.")).subscribe()}},setActive(t,i){for(let a in this.form.tabs)this.form.tabs[a].active=!1;t.active=!0,nsHooks.doAction("ns-settings-change-tab",{tab:t,instance:this,identifier:i})},loadSettingsForm(t=null){return new Promise((i,a)=>{nsHttpClient.get(this.url).subscribe({next:s=>{i(s);let c=0,e=null;this.form={},t=s.tabs[t]!==void 0?t:null;for(let o in s.tabs)this.formDefined?s.tabs[o].active=this.form.tabs[o].active:(s.tabs[o].active=!1,(t===null&&c===0||t!==null&&o===t)&&(s.tabs[o].active=!0,e=o)),c++,s.tabs[o].fields===void 0&&(s.tabs[o].fields=[]);this.form=this.validation.createForm(s),nsHooks.doAction("ns-settings-loaded",this),nsHooks.doAction("ns-settings-change-tab",{tab:this.activeTab,instance:this,identifier:e})},error:s=>{nsSnackBar.error(s.message).subscribe(),a(s)}})})}}},D={key:0,id:"tabbed-card",class:"ns-tab"},E={id:"card-header",class:"flex flex-wrap ml-4"},I=["onClick"],V={key:0,class:"ml-2 rounded-full ns-inset-button error active text-sm h-6 w-6 flex items-center justify-center"},P={class:"card-body ns-tab-item"},U={class:"shadow rounded"},L={key:0,class:"px-2 pt-1"},R={class:"my-2"},z={class:"-mx-4 flex flex-wrap p-2"},q={class:"flex flex-col my-2"},G={key:1,class:"w-full px-4"},J={key:1,class:"ns-tab-item-footer border-t p-2 flex justify-between"};function K(t,i,a,s,c,e){const o=p("ns-notice"),C=p("ns-field"),F=p("ns-button");return e.formDefined?(r(),l("div",D,[d("div",E,[(r(!0),l(f,null,h(c.form.tabs,(n,b)=>(r(),l("div",{class:B([n.active?"active":"inactive","tab cursor-pointer flex items-center px-4 py-2 rounded-tl-lg rounded-tr-lg"]),onClick:x=>e.setActive(n,b),key:b},[d("span",null,m(n.label),1),n.errors&&n.errors.length>0?(r(),l("span",V,m(n.errors.length),1)):u("",!0)],10,I))),128))]),d("div",P,[d("div",U,[e.activeTab.notices?(r(),l("div",L,[(r(!0),l(f,null,h(e.activeTab.notices,n=>(r(),l("div",R,[_(o,{color:n.color||"info"},{title:g(()=>[k(m(n.title),1)]),description:g(()=>[k(m(n.description),1)]),_:2},1032,["color"])]))),256))])):u("",!0),d("div",z,[e.activeTab.fields?(r(!0),l(f,{key:0},h(e.activeTab.fields,(n,b)=>(r(),l("div",{class:"w-full px-4 md:w-1/2 lg:w-1/3",key:b},[d("div",q,[_(C,{onSaved:x=>e.handleSaved(x,n),field:n},null,8,["onSaved","field"])])]))),128)):u("",!0),e.activeTab.component?(r(),l("div",G,[(r(),S(w(e.loadComponent(e.activeTab.component).value)))])):u("",!0)]),e.activeTab.fields&&e.activeTab.fields.length>0?(r(),l("div",J,[d("div",null,[e.activeTab.footer&&e.activeTab.footer.extraComponents?(r(!0),l(f,{key:0},h(e.activeTab.footer.extraComponents,(n,b)=>(r(),S(w(e.loadComponent(n).value),{key:b,parent:n},null,8,["parent"]))),128)):u("",!0)]),d("div",null,[_(F,{disabled:c.isSubmitting,onClick:i[0]||(i[0]=n=>e.submitForm()),type:"info"},{default:g(()=>[H(t.$slots,"submit-button",{},()=>[k(m(e.__("Save Settings")),1)])]),_:3},8,["disabled"])])])):u("",!0)])])])):u("",!0)}const tt=j(O,[["render",K]]);export{tt as default};
