<<<<<<< HEAD:public/build/assets/ns-pos-grid-718516bd.js
import{p as P,a as T,b as v,d as b,v as k,w as I}from"./bootstrap-ad7399a1.js";import{s as j}from"./pos-section-switch-0869c4e1.js";import{_ as p,n as V}from"./currency-feccde3d.js";import{n as O}from"./ns-prompt-popup-a9fa2e64.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{r as x,o as l,c as n,a as s,t as a,f as y,B as S,F as _,b as g,e as d,n as w,i as m,w as L}from"./runtime-core.esm-bundler-414a078a.js";import"./chart-2ccf8ff7.js";const H={name:"ns-pos-search-product",props:["popup"],data(){return{searchValue:"",products:[],isLoading:!1,debounce:null}},watch:{searchValue(){clearTimeout(this.debounce),this.debounce=setTimeout(()=>{this.search()},500)}},mounted(){this.$refs.searchField.focus(),this.$refs.searchField.addEventListener("keydown",t=>{t.keyCode===27&&this.popupResolver(!1)}),this.popupCloser()},methods:{__:p,popupCloser:P,popupResolver:T,addToCart(t){if(this.popup.close(),parseInt(t.accurate_tracking)===1)return Popup.show(O,{title:p("Unable to add the product"),message:p(`The product "{product}" can't be added from a search field, as "Accurate Tracking" is enabled. Would you like to learn more ?`).replace("{product}",t.name),onAction:e=>{e&&window.open("https://my.nexopos.com/en/documentation/troubleshooting/accurate-tracking","_blank")}});POS.addToCart(t)},search(){this.isLoading=!0,v.post("/api/products/search",{search:this.searchValue}).subscribe({next:t=>{if(this.isLoading=!1,this.products=t,this.products.length===1&&this.addToCart(this.products[0]),this.products.length===0)return b.info(p("No result to result match the search value provided.")).subscribe()},error:t=>{this.isLoading=!1,b.error(t.message).subscribe()}})}}},W={id:"product-search",class:"ns-box shadow-lg w-95vw h-95vh md:h-3/5-screen md:w-2/4-screen flex flex-col overflow-hidden"},B={class:"p-2 border-b ns-box-header flex justify-between items-center"},F={class:"text-primary"},N={class:"flex-auto overflow-hidden flex flex-col"},U={class:"p-2 border-b ns-box-body"},q={class:"flex input-group info border-2 rounded overflow-hidden"},A={class:"overflow-y-auto ns-scrollbar flex-auto relative"},z={class:"ns-vertical-menu"},E=["onClick"],D={class:""},M={class:"text-primary"},G={class:"text-soft-secondary text-xs"},K=s("div",null,null,-1),R={key:0},J={class:"text-primary text-center p-2"},Q={key:1,class:"absolute h-full w-full flex items-center justify-center z-10 top-0",style:{background:"rgb(187 203 214 / 29%)"}};function X(t,e,u,h,o,i){const f=x("ns-close-button"),r=x("ns-spinner");return l(),n("div",W,[s("div",B,[s("h3",F,a(i.__("Search Product")),1),s("div",null,[y(f,{onClick:e[0]||(e[0]=c=>u.popup.close())})])]),s("div",N,[s("div",U,[s("div",q,[S(s("input",{onKeyup:e[1]||(e[1]=I(c=>i.search(),["enter"])),"onUpdate:modelValue":e[2]||(e[2]=c=>o.searchValue=c),ref:"searchField",type:"text",class:"p-2 outline-none flex-auto text-primary"},null,544),[[k,o.searchValue]]),s("button",{onClick:e[3]||(e[3]=c=>i.search()),class:"px-2"},a(i.__("Search")),1)])]),s("div",A,[s("ul",z,[(l(!0),n(_,null,g(o.products,c=>(l(),n("li",{key:c.id,onClick:Je=>i.addToCart(c),class:"cursor-pointer p-2 flex justify-between border-b"},[s("div",D,[s("h2",M,a(c.name),1),s("small",G,a(c.category.name),1)]),K],8,E))),128))]),o.products.length===0?(l(),n("ul",R,[s("li",J,a(i.__("There is nothing to display. Have you started the search ?")),1)])):d("",!0),o.isLoading?(l(),n("div",Q,[y(r)])):d("",!0)])])])}const Y=C(H,[["render",X]]),Z={name:"ns-pos-grid",data(){return{items:Array.from({length:1e3},(t,e)=>({data:"#"+e})),products:[],categories:[],breadcrumbs:[],barcode:"",previousCategory:null,order:null,visibleSection:null,breadcrumbsSubsribe:null,orderSubscription:null,visibleSectionSubscriber:null,currentCategory:null,settings:{},settingsSubscriber:null,options:!1,optionsSubscriber:null,interval:null,searchTimeout:null,gridItemsWidth:0,gridItemsHeight:0,isLoading:!1}},computed:{hasCategories(){return this.categories.length>0},hasProducts(){return this.products.length>0},createCategoryUrl(){return POS.settings.getValue().urls.categories_url}},watch:{options:{handler(){this.options.ns_pos_force_autofocus&&(clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.submitSearch(this.barcode)},200))},deep:!0},barcode(){this.options.ns_pos_force_autofocus&&(clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.submitSearch(this.barcode)},200))}},mounted(){this.loadCategories(),this.settingsSubscriber=POS.settings.subscribe(t=>{this.settings=t,this.$forceUpdate()}),this.optionsSubscriber=POS.options.subscribe(t=>{this.options=t,this.$forceUpdate()}),this.breadcrumbsSubsribe=POS.breadcrumbs.subscribe(t=>{this.breadcrumbs=t,this.$forceUpdate()}),this.visibleSectionSubscriber=POS.visibleSection.subscribe(t=>{this.visibleSection=t,this.$forceUpdate()}),this.orderSubscription=POS.order.subscribe(t=>this.order=t),this.interval=setInterval(()=>this.checkFocus(),500);for(let t in nsShortcuts)["ns_pos_keyboard_quick_search"].includes(t)&&nsHotPress.create("search-popup").whenNotVisible([".is-popup","#product-search"]).whenPressed(nsShortcuts[t]!==null?nsShortcuts[t].join("+"):null,e=>{e.preventDefault(),this.openSearchPopup()}),["ns_pos_keyboard_toggle_merge"].includes(t)&&nsHotPress.create("toggle-merge").whenNotVisible([".is-popup"]).whenPressed(nsShortcuts[t]!==null?nsShortcuts[t].join("+"):null,e=>{e.preventDefault(),this.posToggleMerge()})},unmounted(){this.orderSubscription.unsubscribe(),this.breadcrumbsSubsribe.unsubscribe(),this.visibleSectionSubscriber.unsubscribe(),this.settingsSubscriber.unsubscribe(),this.optionsSubscriber.unsubscribe(),clearInterval(this.interval),nsHotPress.destroy("search-popup"),nsHotPress.destroy("toggle-merge")},methods:{__:p,nsCurrency:V,switchTo:j,posToggleMerge(){POS.set("ns_pos_items_merge",!this.settings.ns_pos_items_merge)},computeGridWidth(){document.getElementById("grid-items")!==null&&(this.gridItemsWidth=document.getElementById("grid-items").offsetWidth,this.gridItemsHeight=document.getElementById("grid-items").offsetHeight)},cellSizeAndPositionGetter(t,e){const u={xs:{width:this.gridItemsWidth/2,items:2,height:200},sm:{width:this.gridItemsWidth/2,items:2,height:200},md:{width:this.gridItemsWidth/3,items:3,height:150},lg:{width:this.gridItemsWidth/4,items:4,height:150},xl:{width:this.gridItemsWidth/6,items:6,height:150}},h=u[POS.responsive.screenIs].width,o=u[POS.responsive.screenIs].height,i=0;return{width:h-i,height:o,x:e%u[POS.responsive.screenIs].items*h-i,y:parseInt(e/u[POS.responsive.screenIs].items)*o}},openSearchPopup(){Popup.show(Y)},hasNoFeatured(t){return t.galleries&&t.galleries.length>0&&t.galleries.filter(e=>e.featured).length===0},submitSearch(t){t.length>0&&v.get(`/api/products/search/using-barcode/${t}`).subscribe({next:e=>{this.barcode="",POS.addToCart(e.product)},error:e=>{this.barcode="",b.error(e.message).subscribe()}})},checkFocus(){this.options.ns_pos_force_autofocus&&document.querySelectorAll(".is-popup").length===0&&this.$refs.search.focus()},loadCategories(t){this.isLoading=!0,v.get(`/api/categories/pos/${t?t.id:""}`).subscribe({next:e=>{this.categories=e.categories,this.products=e.products,this.previousCategory=e.previousCategory,this.currentCategory=e.currentCategory,this.updateBreadCrumb(this.currentCategory),this.isLoading=!1},error:e=>(this.isLoading=!1,b.error(p("An unexpected error occurred.")).subscribe())})},updateBreadCrumb(t){if(t){const e=this.breadcrumb.filter(u=>u.id===t.id);if(e.length>0){let u=!0;const h=this.breadcrumb.filter(o=>o.id===e[0].id&&u?(u=!1,!0):u);this.breadcrumb=h}else this.breadcrumb.push(t)}else this.breadcrumb=[];POS.breadcrumbs.next(this.breadcrumb)},addToTheCart(t){POS.addToCart(t)}}},$={id:"pos-grid",class:"flex-auto flex flex-col"},ee={key:0,id:"tools",class:"flex pl-2"},se={key:0,class:"products-count flex items-center justify-center text-sm rounded-full h-6 w-6 ml-1"},te={id:"grid-container",class:"rounded shadow overflow-hidden flex-auto flex flex-col"},re={id:"grid-header",class:"p-2 border-b"},ie={class:"border rounded flex overflow-hidden"},oe=["title"],le=s("i",{class:"las la-search"},null,-1),ne=[le],ce=["title"],ae=s("i",{class:"las la-compress-arrows-alt"},null,-1),de=[ae],ue=["title"],he=s("i",{class:"las la-barcode"},null,-1),_e=[he],pe={style:{height:"0px"}},ge={key:0,class:"fade-in-entrance ns-loader"},be=s("div",{class:"bar"},null,-1),fe=[be],me={id:"grid-breadscrumb",class:"p-2"},ve={class:"flex"},xe=s("i",{class:"las la-angle-right"},null,-1),ye=["onClick"],we=s("i",{class:"las la-angle-right"},null,-1),ke={id:"grid-items",class:"overflow-y-auto h-full flex-col flex"},Ce={key:0,class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"},Se=["onClick"],Pe={class:"h-full w-full flex items-center justify-center"},Te=["src","alt"],Ie={key:1,class:"las la-image text-6xl"},je={class:"w-full absolute z-10 -bottom-10"},Ve={class:"cell-item-label relative w-full flex items-center justify-center -top-10 h-20 py-2"},Oe={class:"text-sm font-bold py-2 text-center"},Le={key:1,class:"h-full w-full flex flex-col items-center justify-center"},He=s("i",{class:"las la-frown-open text-8xl text-primary"},null,-1),We={class:"w-1/2 md:w-2/3 text-center text-primary"},Be=s("br",null,null,-1),Fe={key:2,class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"},Ne=["onClick"],Ue={class:"h-full w-full flex items-center justify-center overflow-hidden"},qe=["src","alt"],Ae=["src","alt"],ze={key:2,class:"las la-image text-6xl"},Ee={class:"w-full absolute z-10 -bottom-10"},De={class:"cell-item-label relative w-full flex flex-col items-center justify-center -top-10 h-20 p-2"},Me={class:"text-sm text-center w-full"},Ge={key:0,class:"text-sm"},Ke={key:0,class:"text-sm"};function Re(t,e,u,h,o,i){const f=x("ns-link");return l(),n("div",$,[o.visibleSection==="grid"?(l(),n("div",ee,[s("div",{onClick:e[0]||(e[0]=r=>i.switchTo("cart")),class:"switch-cart flex cursor-pointer rounded-tl-lg rounded-tr-lg px-3 py-2 border-t border-r border-l"},[s("span",null,a(i.__("Cart")),1),o.order?(l(),n("span",se,a(o.order.products.length),1)):d("",!0)]),s("div",{onClick:e[1]||(e[1]=r=>i.switchTo("grid")),class:"switch-grid cursor-pointer rounded-tl-lg rounded-tr-lg px-3 py-2 font-semibold"},a(i.__("Products")),1)])):d("",!0),s("div",te,[s("div",re,[s("div",ie,[s("button",{title:i.__("Search for products."),onClick:e[2]||(e[2]=r=>i.openSearchPopup()),class:"w-10 h-10 border-r outline-none"},ne,8,oe),s("button",{title:i.__("Toggle merging similar products."),onClick:e[3]||(e[3]=r=>i.posToggleMerge()),class:w([o.settings.ns_pos_items_merge?"pos-button-clicked":"","outline-none w-10 h-10 border-r"])},de,10,ce),s("button",{title:i.__("Toggle auto focus."),onClick:e[4]||(e[4]=r=>o.options.ns_pos_force_autofocus=!o.options.ns_pos_force_autofocus),class:w([o.options.ns_pos_force_autofocus?"pos-button-clicked":"","outline-none w-10 h-10 border-r"])},_e,10,ue),S(s("input",{ref:"search","onUpdate:modelValue":e[5]||(e[5]=r=>o.barcode=r),type:"text",class:"flex-auto outline-none px-2"},null,512),[[k,o.barcode]])])]),s("div",pe,[o.isLoading?(l(),n("div",ge,fe)):d("",!0)]),s("div",me,[s("ul",ve,[s("li",null,[s("a",{onClick:e[6]||(e[6]=r=>i.loadCategories()),href:"javascript:void(0)",class:"px-3"},a(i.__("Home")),1),m(),xe]),s("li",null,[(l(!0),n(_,null,g(o.breadcrumbs,r=>(l(),n("a",{onClick:c=>i.loadCategories(r),key:r.id,href:"javascript:void(0)",class:"px-3"},[m(a(r.name)+" ",1),we],8,ye))),128))])])]),s("div",ke,[i.hasCategories?(l(),n("div",Ce,[(l(!0),n(_,null,g(o.categories,r=>(l(),n("div",{onClick:c=>i.loadCategories(r),key:r.id,class:"cell-item w-full h-36 cursor-pointer border flex flex-col items-center justify-center overflow-hidden relative"},[s("div",Pe,[r.preview_url?(l(),n("img",{key:0,src:r.preview_url,class:"object-cover h-full",alt:r.name},null,8,Te)):d("",!0),r.preview_url?d("",!0):(l(),n("i",Ie))]),s("div",je,[s("div",Ve,[s("h3",Oe,a(r.name),1)])])],8,Se))),128))])):d("",!0),!i.hasCategories&&!i.hasProducts&&!o.isLoading?(l(),n("div",Le,[He,s("p",We,a(i.__("Looks like there is either no products and no categories. How about creating those first to get started ?")),1),Be,y(f,{target:"blank",type:"info",href:i.createCategoryUrl},{default:L(()=>[m(a(i.__("Create Categories")),1)]),_:1},8,["href"])])):d("",!0),i.hasCategories?d("",!0):(l(),n("div",Fe,[(l(!0),n(_,null,g(o.products,r=>(l(),n("div",{onClick:c=>i.addToTheCart(r),key:r.id,class:"cell-item w-full h-36 cursor-pointer border flex flex-col items-center justify-center overflow-hidden relative"},[s("div",Ue,[r.galleries&&r.galleries.filter(c=>c.featured).length>0?(l(),n("img",{key:0,src:r.galleries.filter(c=>c.featured)[0].url,class:"object-cover h-full",alt:r.name},null,8,qe)):i.hasNoFeatured(r)?(l(),n("img",{key:1,src:r.galleries[0].url,class:"object-cover h-full",alt:r.name},null,8,Ae)):(l(),n("i",ze))]),s("div",Ee,[s("div",De,[s("h3",Me,a(r.name),1),o.options.ns_pos_gross_price_used==="yes"?(l(),n(_,{key:0},[r.unit_quantities&&r.unit_quantities.length===1?(l(),n("span",Ge,a(i.nsCurrency(r.unit_quantities[0].sale_price_without_tax)),1)):d("",!0)],64)):d("",!0),o.options.ns_pos_gross_price_used==="no"?(l(),n(_,{key:1},[r.unit_quantities&&r.unit_quantities.length===1?(l(),n("span",Ke,a(i.nsCurrency(r.unit_quantities[0].sale_price_with_tax)),1)):d("",!0)],64)):d("",!0)])])],8,Ne))),128))]))])])])}const ts=C(Z,[["render",Re]]);export{ts as default};
=======
import{p as P,a as T,b as v,d as b,v as k,w as I}from"./bootstrap-ffaf6d09.js";import{s as j}from"./pos-section-switch-0869c4e1.js";import{_ as p,n as V}from"./currency-feccde3d.js";import{n as O}from"./ns-prompt-popup-24cc8d6f.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{r as x,o as l,c as n,a as s,t as a,f as y,B as S,F as _,b as g,e as d,n as w,i as m,w as L}from"./runtime-core.esm-bundler-414a078a.js";import"./chart-2ccf8ff7.js";const H={name:"ns-pos-search-product",props:["popup"],data(){return{searchValue:"",products:[],isLoading:!1,debounce:null}},watch:{searchValue(){clearTimeout(this.debounce),this.debounce=setTimeout(()=>{this.search()},500)}},mounted(){this.$refs.searchField.focus(),this.$refs.searchField.addEventListener("keydown",t=>{t.keyCode===27&&this.popupResolver(!1)}),this.popupCloser()},methods:{__:p,popupCloser:P,popupResolver:T,addToCart(t){if(this.popup.close(),parseInt(t.accurate_tracking)===1)return Popup.show(O,{title:p("Unable to add the product"),message:p(`The product "{product}" can't be added from a search field, as "Accurate Tracking" is enabled. Would you like to learn more ?`).replace("{product}",t.name),onAction:e=>{e&&window.open("https://my.nexopos.com/en/documentation/troubleshooting/accurate-tracking","_blank")}});POS.addToCart(t)},search(){this.isLoading=!0,v.post("/api/products/search",{search:this.searchValue}).subscribe({next:t=>{if(this.isLoading=!1,this.products=t,this.products.length===1&&this.addToCart(this.products[0]),this.products.length===0)return b.info(p("No result to result match the search value provided.")).subscribe()},error:t=>{this.isLoading=!1,b.error(t.message).subscribe()}})}}},W={id:"product-search",class:"ns-box shadow-lg w-95vw h-95vh md:h-3/5-screen md:w-2/4-screen flex flex-col overflow-hidden"},B={class:"p-2 border-b ns-box-header flex justify-between items-center"},F={class:"text-primary"},N={class:"flex-auto overflow-hidden flex flex-col"},U={class:"p-2 border-b ns-box-body"},q={class:"flex input-group info border-2 rounded overflow-hidden"},A={class:"overflow-y-auto ns-scrollbar flex-auto relative"},z={class:"ns-vertical-menu"},E=["onClick"],D={class:""},M={class:"text-primary"},G={class:"text-soft-secondary text-xs"},K=s("div",null,null,-1),R={key:0},J={class:"text-primary text-center p-2"},Q={key:1,class:"absolute h-full w-full flex items-center justify-center z-10 top-0",style:{background:"rgb(187 203 214 / 29%)"}};function X(t,e,u,h,o,i){const f=x("ns-close-button"),r=x("ns-spinner");return l(),n("div",W,[s("div",B,[s("h3",F,a(i.__("Search Product")),1),s("div",null,[y(f,{onClick:e[0]||(e[0]=c=>u.popup.close())})])]),s("div",N,[s("div",U,[s("div",q,[S(s("input",{onKeyup:e[1]||(e[1]=I(c=>i.search(),["enter"])),"onUpdate:modelValue":e[2]||(e[2]=c=>o.searchValue=c),ref:"searchField",type:"text",class:"p-2 outline-none flex-auto text-primary"},null,544),[[k,o.searchValue]]),s("button",{onClick:e[3]||(e[3]=c=>i.search()),class:"px-2"},a(i.__("Search")),1)])]),s("div",A,[s("ul",z,[(l(!0),n(_,null,g(o.products,c=>(l(),n("li",{key:c.id,onClick:Je=>i.addToCart(c),class:"cursor-pointer p-2 flex justify-between border-b"},[s("div",D,[s("h2",M,a(c.name),1),s("small",G,a(c.category.name),1)]),K],8,E))),128))]),o.products.length===0?(l(),n("ul",R,[s("li",J,a(i.__("There is nothing to display. Have you started the search ?")),1)])):d("",!0),o.isLoading?(l(),n("div",Q,[y(r)])):d("",!0)])])])}const Y=C(H,[["render",X]]),Z={name:"ns-pos-grid",data(){return{items:Array.from({length:1e3},(t,e)=>({data:"#"+e})),products:[],categories:[],breadcrumbs:[],barcode:"",previousCategory:null,order:null,visibleSection:null,breadcrumbsSubsribe:null,orderSubscription:null,visibleSectionSubscriber:null,currentCategory:null,settings:{},settingsSubscriber:null,options:!1,optionsSubscriber:null,interval:null,searchTimeout:null,gridItemsWidth:0,gridItemsHeight:0,isLoading:!1}},computed:{hasCategories(){return this.categories.length>0},hasProducts(){return this.products.length>0},createCategoryUrl(){return POS.settings.getValue().urls.categories_url}},watch:{options:{handler(){this.options.ns_pos_force_autofocus&&(clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.submitSearch(this.barcode)},200))},deep:!0},barcode(){this.options.ns_pos_force_autofocus&&(clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.submitSearch(this.barcode)},200))}},mounted(){this.loadCategories(),this.settingsSubscriber=POS.settings.subscribe(t=>{this.settings=t,this.$forceUpdate()}),this.optionsSubscriber=POS.options.subscribe(t=>{this.options=t,this.$forceUpdate()}),this.breadcrumbsSubsribe=POS.breadcrumbs.subscribe(t=>{this.breadcrumbs=t,this.$forceUpdate()}),this.visibleSectionSubscriber=POS.visibleSection.subscribe(t=>{this.visibleSection=t,this.$forceUpdate()}),this.orderSubscription=POS.order.subscribe(t=>this.order=t),this.interval=setInterval(()=>this.checkFocus(),500);for(let t in nsShortcuts)["ns_pos_keyboard_quick_search"].includes(t)&&nsHotPress.create("search-popup").whenNotVisible([".is-popup","#product-search"]).whenPressed(nsShortcuts[t]!==null?nsShortcuts[t].join("+"):null,e=>{e.preventDefault(),this.openSearchPopup()}),["ns_pos_keyboard_toggle_merge"].includes(t)&&nsHotPress.create("toggle-merge").whenNotVisible([".is-popup"]).whenPressed(nsShortcuts[t]!==null?nsShortcuts[t].join("+"):null,e=>{e.preventDefault(),this.posToggleMerge()})},unmounted(){this.orderSubscription.unsubscribe(),this.breadcrumbsSubsribe.unsubscribe(),this.visibleSectionSubscriber.unsubscribe(),this.settingsSubscriber.unsubscribe(),this.optionsSubscriber.unsubscribe(),clearInterval(this.interval),nsHotPress.destroy("search-popup"),nsHotPress.destroy("toggle-merge")},methods:{__:p,nsCurrency:V,switchTo:j,posToggleMerge(){POS.set("ns_pos_items_merge",!this.settings.ns_pos_items_merge)},computeGridWidth(){document.getElementById("grid-items")!==null&&(this.gridItemsWidth=document.getElementById("grid-items").offsetWidth,this.gridItemsHeight=document.getElementById("grid-items").offsetHeight)},cellSizeAndPositionGetter(t,e){const u={xs:{width:this.gridItemsWidth/2,items:2,height:200},sm:{width:this.gridItemsWidth/2,items:2,height:200},md:{width:this.gridItemsWidth/3,items:3,height:150},lg:{width:this.gridItemsWidth/4,items:4,height:150},xl:{width:this.gridItemsWidth/6,items:6,height:150}},h=u[POS.responsive.screenIs].width,o=u[POS.responsive.screenIs].height,i=0;return{width:h-i,height:o,x:e%u[POS.responsive.screenIs].items*h-i,y:parseInt(e/u[POS.responsive.screenIs].items)*o}},openSearchPopup(){Popup.show(Y)},hasNoFeatured(t){return t.galleries&&t.galleries.length>0&&t.galleries.filter(e=>e.featured).length===0},submitSearch(t){t.length>0&&v.get(`/api/products/search/using-barcode/${t}`).subscribe({next:e=>{this.barcode="",POS.addToCart(e.product)},error:e=>{this.barcode="",b.error(e.message).subscribe()}})},checkFocus(){this.options.ns_pos_force_autofocus&&document.querySelectorAll(".is-popup").length===0&&this.$refs.search.focus()},loadCategories(t){this.isLoading=!0,v.get(`/api/categories/pos/${t?t.id:""}`).subscribe({next:e=>{this.categories=e.categories,this.products=e.products,this.previousCategory=e.previousCategory,this.currentCategory=e.currentCategory,this.updateBreadCrumb(this.currentCategory),this.isLoading=!1},error:e=>(this.isLoading=!1,b.error(p("An unexpected error occurred.")).subscribe())})},updateBreadCrumb(t){if(t){const e=this.breadcrumb.filter(u=>u.id===t.id);if(e.length>0){let u=!0;const h=this.breadcrumb.filter(o=>o.id===e[0].id&&u?(u=!1,!0):u);this.breadcrumb=h}else this.breadcrumb.push(t)}else this.breadcrumb=[];POS.breadcrumbs.next(this.breadcrumb)},addToTheCart(t){POS.addToCart(t)}}},$={id:"pos-grid",class:"flex-auto flex flex-col"},ee={key:0,id:"tools",class:"flex pl-2"},se={key:0,class:"products-count flex items-center justify-center text-sm rounded-full h-6 w-6 ml-1"},te={id:"grid-container",class:"rounded shadow overflow-hidden flex-auto flex flex-col"},re={id:"grid-header",class:"p-2 border-b"},ie={class:"border rounded flex overflow-hidden"},oe=["title"],le=s("i",{class:"las la-search"},null,-1),ne=[le],ce=["title"],ae=s("i",{class:"las la-compress-arrows-alt"},null,-1),de=[ae],ue=["title"],he=s("i",{class:"las la-barcode"},null,-1),_e=[he],pe={style:{height:"0px"}},ge={key:0,class:"fade-in-entrance ns-loader"},be=s("div",{class:"bar"},null,-1),fe=[be],me={id:"grid-breadscrumb",class:"p-2"},ve={class:"flex"},xe=s("i",{class:"las la-angle-right"},null,-1),ye=["onClick"],we=s("i",{class:"las la-angle-right"},null,-1),ke={id:"grid-items",class:"overflow-y-auto h-full flex-col flex"},Ce={key:0,class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"},Se=["onClick"],Pe={class:"h-full w-full flex items-center justify-center"},Te=["src","alt"],Ie={key:1,class:"las la-image text-6xl"},je={class:"w-full absolute z-10 -bottom-10"},Ve={class:"cell-item-label relative w-full flex items-center justify-center -top-10 h-20 py-2"},Oe={class:"text-sm font-bold py-2 text-center"},Le={key:1,class:"h-full w-full flex flex-col items-center justify-center"},He=s("i",{class:"las la-frown-open text-8xl text-primary"},null,-1),We={class:"w-1/2 md:w-2/3 text-center text-primary"},Be=s("br",null,null,-1),Fe={key:2,class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"},Ne=["onClick"],Ue={class:"h-full w-full flex items-center justify-center overflow-hidden"},qe=["src","alt"],Ae=["src","alt"],ze={key:2,class:"las la-image text-6xl"},Ee={class:"w-full absolute z-10 -bottom-10"},De={class:"cell-item-label relative w-full flex flex-col items-center justify-center -top-10 h-20 p-2"},Me={class:"text-sm text-center w-full"},Ge={key:0,class:"text-sm"},Ke={key:0,class:"text-sm"};function Re(t,e,u,h,o,i){const f=x("ns-link");return l(),n("div",$,[o.visibleSection==="grid"?(l(),n("div",ee,[s("div",{onClick:e[0]||(e[0]=r=>i.switchTo("cart")),class:"switch-cart flex cursor-pointer rounded-tl-lg rounded-tr-lg px-3 py-2 border-t border-r border-l"},[s("span",null,a(i.__("Cart")),1),o.order?(l(),n("span",se,a(o.order.products.length),1)):d("",!0)]),s("div",{onClick:e[1]||(e[1]=r=>i.switchTo("grid")),class:"switch-grid cursor-pointer rounded-tl-lg rounded-tr-lg px-3 py-2 font-semibold"},a(i.__("Products")),1)])):d("",!0),s("div",te,[s("div",re,[s("div",ie,[s("button",{title:i.__("Search for products."),onClick:e[2]||(e[2]=r=>i.openSearchPopup()),class:"w-10 h-10 border-r outline-none"},ne,8,oe),s("button",{title:i.__("Toggle merging similar products."),onClick:e[3]||(e[3]=r=>i.posToggleMerge()),class:w([o.settings.ns_pos_items_merge?"pos-button-clicked":"","outline-none w-10 h-10 border-r"])},de,10,ce),s("button",{title:i.__("Toggle auto focus."),onClick:e[4]||(e[4]=r=>o.options.ns_pos_force_autofocus=!o.options.ns_pos_force_autofocus),class:w([o.options.ns_pos_force_autofocus?"pos-button-clicked":"","outline-none w-10 h-10 border-r"])},_e,10,ue),S(s("input",{ref:"search","onUpdate:modelValue":e[5]||(e[5]=r=>o.barcode=r),type:"text",class:"flex-auto outline-none px-2"},null,512),[[k,o.barcode]])])]),s("div",pe,[o.isLoading?(l(),n("div",ge,fe)):d("",!0)]),s("div",me,[s("ul",ve,[s("li",null,[s("a",{onClick:e[6]||(e[6]=r=>i.loadCategories()),href:"javascript:void(0)",class:"px-3"},a(i.__("Home")),1),m(),xe]),s("li",null,[(l(!0),n(_,null,g(o.breadcrumbs,r=>(l(),n("a",{onClick:c=>i.loadCategories(r),key:r.id,href:"javascript:void(0)",class:"px-3"},[m(a(r.name)+" ",1),we],8,ye))),128))])])]),s("div",ke,[i.hasCategories?(l(),n("div",Ce,[(l(!0),n(_,null,g(o.categories,r=>(l(),n("div",{onClick:c=>i.loadCategories(r),key:r.id,class:"cell-item w-full h-36 cursor-pointer border flex flex-col items-center justify-center overflow-hidden relative"},[s("div",Pe,[r.preview_url?(l(),n("img",{key:0,src:r.preview_url,class:"object-cover h-full",alt:r.name},null,8,Te)):d("",!0),r.preview_url?d("",!0):(l(),n("i",Ie))]),s("div",je,[s("div",Ve,[s("h3",Oe,a(r.name),1)])])],8,Se))),128))])):d("",!0),!i.hasCategories&&!i.hasProducts&&!o.isLoading?(l(),n("div",Le,[He,s("p",We,a(i.__("Looks like there is either no products and no categories. How about creating those first to get started ?")),1),Be,y(f,{target:"blank",type:"info",href:i.createCategoryUrl},{default:L(()=>[m(a(i.__("Create Categories")),1)]),_:1},8,["href"])])):d("",!0),i.hasCategories?d("",!0):(l(),n("div",Fe,[(l(!0),n(_,null,g(o.products,r=>(l(),n("div",{onClick:c=>i.addToTheCart(r),key:r.id,class:"cell-item w-full h-36 cursor-pointer border flex flex-col items-center justify-center overflow-hidden relative"},[s("div",Ue,[r.galleries&&r.galleries.filter(c=>c.featured).length>0?(l(),n("img",{key:0,src:r.galleries.filter(c=>c.featured)[0].url,class:"object-cover h-full",alt:r.name},null,8,qe)):i.hasNoFeatured(r)?(l(),n("img",{key:1,src:r.galleries[0].url,class:"object-cover h-full",alt:r.name},null,8,Ae)):(l(),n("i",ze))]),s("div",Ee,[s("div",De,[s("h3",Me,a(r.name),1),o.options.ns_pos_gross_price_used==="yes"?(l(),n(_,{key:0},[r.unit_quantities&&r.unit_quantities.length===1?(l(),n("span",Ge,a(i.nsCurrency(r.unit_quantities[0].sale_price_without_tax)),1)):d("",!0)],64)):d("",!0),o.options.ns_pos_gross_price_used==="no"?(l(),n(_,{key:1},[r.unit_quantities&&r.unit_quantities.length===1?(l(),n("span",Ke,a(i.nsCurrency(r.unit_quantities[0].sale_price_with_tax)),1)):d("",!0)],64)):d("",!0)])])],8,Ne))),128))]))])])])}const ts=C(Z,[["render",Re]]);export{ts as default};
>>>>>>> v5.0.x:public/build/assets/ns-pos-grid-32143241.js
