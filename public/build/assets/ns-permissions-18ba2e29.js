<<<<<<< HEAD:public/build/assets/ns-permissions-4fe731c3.js
import{D as y,d as g,b as m,E as v,v as k}from"./bootstrap-ad7399a1.js";import{_ as f}from"./currency-feccde3d.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{r as P,o,c as l,a as i,B as j,t as p,e as u,F as h,b,n as C,f as x}from"./runtime-core.esm-bundler-414a078a.js";import"./chart-2ccf8ff7.js";const T={name:"ns-permissions",filters:[y],data(){return{permissions:[],toggled:!1,roles:[],searchText:""}},computed:{filteredPermissions(){return this.searchText.length!==0?this.permissions.filter(e=>{const s=new RegExp(this.searchText,"i");return s.test(e.name)||s.test(e.namespace)}):this.permissions}},mounted(){this.loadPermissionsAndRoles(),nsHotPress.create("ns-permissions").whenPressed("shift+/",e=>{this.searchText="",setTimeout(()=>{this.$refs.search.focus()},5)}).whenPressed("/",e=>{this.searchText="",setTimeout(()=>{this.$refs.search.focus()},5)})},methods:{__:f,copyPermisson(e){navigator.clipboard.writeText(e).then(function(){g.success(f("Copied to clipboard"),null,{duration:3e3}).subscribe()},function(s){console.error("Could not copy text: ",s)})},async selectAllPermissions(e){const s=new Object;s[e.namespace]=new Object;let r=!1;if(e.locked&&(r=await new Promise((a,t)=>{Popup.show(nsConfirmPopup,{title:f("Confirm Your Action"),message:f("Would you like to bulk edit a system role ?"),onAction:c=>a(!!c)})})),!e.locked||e.locked&&r){const a=this.filterObjectByKeys(e.fields,this.filteredPermissions.map(t=>t.namespace));for(let t in a)e.fields[t].value=e.field.value,s[e.namespace][t]=e.field.value;this.arrayToObject(this.filteredPermissions,"namespace",t=>s[e.namespace][t.namespace]),m.put("/api/users/roles",s).subscribe(t=>{g.success(t.message,null,{duration:3e3}).subscribe()})}else e.field.value=!e.field.value},filterObjectByKeys(e,s){return Object.fromEntries(Object.entries(e).filter(([r])=>s.includes(r)))},arrayToObject(e,s,r){return Object.assign({},...e.map(a=>({[a[s]]:r(a)})))},submitPermissions(e,s){const r=new Object;r[e.namespace]=new Object,r[e.namespace][s.name]=s.value,m.put("/api/users/roles",r).subscribe(a=>{g.success(a.message,null,{duration:3e3}).subscribe()})},loadPermissionsAndRoles(){return v([m.get("/api/users/roles"),m.get("/api/users/permissions")]).subscribe(e=>{this.permissions=e[1],this.roles=e[0].map(s=>(s.fields={},s.field={type:"checkbox",name:s.namespace,value:!1},this.permissions.forEach(r=>{s.fields[r.namespace]={type:"checkbox",value:s.permissions.filter(a=>a.namespace===r.namespace).length>0,name:r.namespace,label:null}}),s))})}}},O={id:"permission-wrapper"},B={class:"my-2"},A=["placeholder"],E={class:"rounded shadow ns-box flex"},R={id:"permissions",class:"w- bg-gray-800 flex-shrink-0"},V={class:"h-24 py-4 px-2 border-b border-gray-700 text-gray-100 flex justify-between items-center"},D={key:0},N=i("i",{class:"las la-expand"},null,-1),F=[N],H=i("i",{class:"las la-compress"},null,-1),K=[H],S=["onClick","title"],z={key:0},J={key:1},L={class:"flex flex-auto overflow-hidden"},M={class:"overflow-y-auto"},U={class:"text-gray-700 flex"},W={class:"mx-1"},Y={class:"mx-1"};function q(e,s,r,a,t,c){const _=P("ns-checkbox");return o(),l("div",O,[i("div",B,[j(i("input",{ref:"search","onUpdate:modelValue":s[0]||(s[0]=n=>t.searchText=n),type:"text",placeholder:c.__('Press "/" to search permissions'),class:"border-2 p-2 w-full outline-none bg-input-background border-input-edge text-primary"},null,8,A),[[k,t.searchText]])]),i("div",E,[i("div",R,[i("div",V,[t.toggled?u("",!0):(o(),l("span",D,p(c.__("Permissions")),1)),i("div",null,[t.toggled?u("",!0):(o(),l("button",{key:0,onClick:s[1]||(s[1]=n=>t.toggled=!t.toggled),class:"rounded-full bg-white text-gray-700 h-6 w-6 flex items-center justify-center"},F)),t.toggled?(o(),l("button",{key:1,onClick:s[2]||(s[2]=n=>t.toggled=!t.toggled),class:"rounded-full bg-white text-gray-700 h-6 w-6 flex items-center justify-center"},K)):u("",!0)])]),(o(!0),l(h,null,b(c.filteredPermissions,n=>(o(),l("div",{key:n.id,class:C([t.toggled?"w-24":"w-54","p-2 border-b border-gray-700 text-gray-100"])},[i("a",{onClick:d=>c.copyPermisson(n.namespace),href:"javascript:void(0)",title:n.namespace},[t.toggled?u("",!0):(o(),l("span",z,p(n.name),1)),t.toggled?(o(),l("span",J,p(n.name),1)):u("",!0)],8,S)],2))),128))]),i("div",L,[i("div",M,[i("div",U,[(o(!0),l(h,null,b(t.roles,n=>(o(),l("div",{key:n.id,class:"h-24 py-4 px-2 w-56 items-center border-b justify-center flex role flex-shrink-0 border-r border-table-th-edge"},[i("p",W,[i("span",null,p(n.name),1)]),i("span",Y,[x(_,{onChange:d=>c.selectAllPermissions(n),field:n.field},null,8,["onChange","field"])])]))),128))]),(o(!0),l(h,null,b(c.filteredPermissions,n=>(o(),l("div",{key:n.id,class:"permission flex"},[(o(!0),l(h,null,b(t.roles,d=>(o(),l("div",{key:d.id,class:"border-b border-table-th-edge w-56 flex-shrink-0 p-2 flex items-center justify-center border-r"},[x(_,{onChange:G=>c.submitPermissions(d,d.fields[n.namespace]),field:d.fields[n.namespace]},null,8,["onChange","field"])]))),128))]))),128))])])])])}const ee=w(T,[["render",q]]);export{ee as default};
=======
import{E as y,d as g,b as m,G as v,v as k}from"./bootstrap-ffaf6d09.js";import{_ as f}from"./currency-feccde3d.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{r as P,o,c as l,a as i,B as j,t as p,e as u,F as h,b,n as C,f as x}from"./runtime-core.esm-bundler-414a078a.js";import"./chart-2ccf8ff7.js";const T={name:"ns-permissions",filters:[y],data(){return{permissions:[],toggled:!1,roles:[],searchText:""}},computed:{filteredPermissions(){return this.searchText.length!==0?this.permissions.filter(e=>{const s=new RegExp(this.searchText,"i");return s.test(e.name)||s.test(e.namespace)}):this.permissions}},mounted(){this.loadPermissionsAndRoles(),nsHotPress.create("ns-permissions").whenPressed("shift+/",e=>{this.searchText="",setTimeout(()=>{this.$refs.search.focus()},5)}).whenPressed("/",e=>{this.searchText="",setTimeout(()=>{this.$refs.search.focus()},5)})},methods:{__:f,copyPermisson(e){navigator.clipboard.writeText(e).then(function(){g.success(f("Copied to clipboard"),null,{duration:3e3}).subscribe()},function(s){console.error("Could not copy text: ",s)})},async selectAllPermissions(e){const s=new Object;s[e.namespace]=new Object;let r=!1;if(e.locked&&(r=await new Promise((a,t)=>{Popup.show(nsConfirmPopup,{title:f("Confirm Your Action"),message:f("Would you like to bulk edit a system role ?"),onAction:c=>a(!!c)})})),!e.locked||e.locked&&r){const a=this.filterObjectByKeys(e.fields,this.filteredPermissions.map(t=>t.namespace));for(let t in a)e.fields[t].value=e.field.value,s[e.namespace][t]=e.field.value;this.arrayToObject(this.filteredPermissions,"namespace",t=>s[e.namespace][t.namespace]),m.put("/api/users/roles",s).subscribe(t=>{g.success(t.message,null,{duration:3e3}).subscribe()})}else e.field.value=!e.field.value},filterObjectByKeys(e,s){return Object.fromEntries(Object.entries(e).filter(([r])=>s.includes(r)))},arrayToObject(e,s,r){return Object.assign({},...e.map(a=>({[a[s]]:r(a)})))},submitPermissions(e,s){const r=new Object;r[e.namespace]=new Object,r[e.namespace][s.name]=s.value,m.put("/api/users/roles",r).subscribe(a=>{g.success(a.message,null,{duration:3e3}).subscribe()})},loadPermissionsAndRoles(){return v([m.get("/api/users/roles"),m.get("/api/users/permissions")]).subscribe(e=>{this.permissions=e[1],this.roles=e[0].map(s=>(s.fields={},s.field={type:"checkbox",name:s.namespace,value:!1},this.permissions.forEach(r=>{s.fields[r.namespace]={type:"checkbox",value:s.permissions.filter(a=>a.namespace===r.namespace).length>0,name:r.namespace,label:null}}),s))})}}},O={id:"permission-wrapper"},B={class:"my-2"},A=["placeholder"],E={class:"rounded shadow ns-box flex"},R={id:"permissions",class:"w- bg-gray-800 flex-shrink-0"},V={class:"h-24 py-4 px-2 border-b border-gray-700 text-gray-100 flex justify-between items-center"},N={key:0},D=i("i",{class:"las la-expand"},null,-1),F=[D],H=i("i",{class:"las la-compress"},null,-1),K=[H],S=["onClick","title"],z={key:0},G={key:1},J={class:"flex flex-auto overflow-hidden"},L={class:"overflow-y-auto"},M={class:"text-gray-700 flex"},U={class:"mx-1"},W={class:"mx-1"};function Y(e,s,r,a,t,c){const _=P("ns-checkbox");return o(),l("div",O,[i("div",B,[j(i("input",{ref:"search","onUpdate:modelValue":s[0]||(s[0]=n=>t.searchText=n),type:"text",placeholder:c.__('Press "/" to search permissions'),class:"border-2 p-2 w-full outline-none bg-input-background border-input-edge text-primary"},null,8,A),[[k,t.searchText]])]),i("div",E,[i("div",R,[i("div",V,[t.toggled?u("",!0):(o(),l("span",N,p(c.__("Permissions")),1)),i("div",null,[t.toggled?u("",!0):(o(),l("button",{key:0,onClick:s[1]||(s[1]=n=>t.toggled=!t.toggled),class:"rounded-full bg-white text-gray-700 h-6 w-6 flex items-center justify-center"},F)),t.toggled?(o(),l("button",{key:1,onClick:s[2]||(s[2]=n=>t.toggled=!t.toggled),class:"rounded-full bg-white text-gray-700 h-6 w-6 flex items-center justify-center"},K)):u("",!0)])]),(o(!0),l(h,null,b(c.filteredPermissions,n=>(o(),l("div",{key:n.id,class:C([t.toggled?"w-24":"w-54","p-2 border-b border-gray-700 text-gray-100"])},[i("a",{onClick:d=>c.copyPermisson(n.namespace),href:"javascript:void(0)",title:n.namespace},[t.toggled?u("",!0):(o(),l("span",z,p(n.name),1)),t.toggled?(o(),l("span",G,p(n.name),1)):u("",!0)],8,S)],2))),128))]),i("div",J,[i("div",L,[i("div",M,[(o(!0),l(h,null,b(t.roles,n=>(o(),l("div",{key:n.id,class:"h-24 py-4 px-2 w-56 items-center border-b justify-center flex role flex-shrink-0 border-r border-table-th-edge"},[i("p",U,[i("span",null,p(n.name),1)]),i("span",W,[x(_,{onChange:d=>c.selectAllPermissions(n),field:n.field},null,8,["onChange","field"])])]))),128))]),(o(!0),l(h,null,b(c.filteredPermissions,n=>(o(),l("div",{key:n.id,class:"permission flex"},[(o(!0),l(h,null,b(t.roles,d=>(o(),l("div",{key:d.id,class:"border-b border-table-th-edge w-56 flex-shrink-0 p-2 flex items-center justify-center border-r"},[x(_,{onChange:q=>c.submitPermissions(d,d.fields[n.namespace]),field:d.fields[n.namespace]},null,8,["onChange","field"])]))),128))]))),128))])])])])}const ee=w(T,[["render",Y]]);export{ee as default};
>>>>>>> v5.0.x:public/build/assets/ns-permissions-18ba2e29.js
