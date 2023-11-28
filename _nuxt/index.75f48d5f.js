import{z as P,G as S,H as v,I as B,J as T,q as E,r as f,b as $,_ as y,o as l,K as I,c as _,d as s,t as g,u as j,k as x,E as A,B as L,C as N,p as V,A as z,g as k,w as D,v as M,F as w,f as C}from"./entry.5d77c3cf.js";import{_ as R}from"./nuxt-link.3d3bb842.js";const F=P({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:[String,Boolean],default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:o}){const e=H({duration:t.duration,throttle:t.throttle}),r=E(),n=S();return v.unshift(e.start),n.onError(()=>{e.finish()}),n.beforeResolve((a,u)=>{(a===u||a.matched.every((c,i)=>{var h,m,p;return c.components&&((h=c.components)==null?void 0:h.default)===((p=(m=u.matched[i])==null?void 0:m.components)==null?void 0:p.default)}))&&e.finish()}),n.afterEach((a,u,c)=>{c&&e.finish()}),r.hook("page:finish",e.finish),r.hook("vue:error",e.finish),B(()=>{const a=v.indexOf(e.start);a>=0&&v.splice(a,1),e.clear()}),()=>T("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:"auto",height:`${t.height}px`,opacity:e.isLoading.value?1:0,background:t.color||void 0,backgroundSize:`${100/e.progress.value*100}% auto`,transform:`scaleX(${e.progress.value}%)`,transformOrigin:"left",transition:"transform 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},o)}});function H(t){const o=f(0),e=f(!1),r=$(()=>1e4/t.duration);let n=null,a=null;function u(){i(),o.value=0,t.throttle?a=setTimeout(()=>{e.value=!0,p()},t.throttle):(e.value=!0,p())}function c(){o.value=100,m()}function i(){clearInterval(n),clearTimeout(a),n=null,a=null}function h(d){o.value=Math.min(100,o.value+d)}function m(){i(),setTimeout(()=>{e.value=!1,setTimeout(()=>{o.value=0},400)},500)}function p(){n=setInterval(()=>{h(r.value)},100)}return{progress:o,isLoading:e,start:u,finish:c,clear:i}}const O={};function Q(t,o){const e=F;return l(),I(e)}const U=y(O,[["render",Q],["__scopeId","data-v-2a1c52db"]]),q={__name:"CategoryList",props:["category"],setup(t){const{category:o}=t;o&&r();const e=f([]);async function r(){const a=await fetch("https://fakestoreapi.com/products/category/"+o);e.value=await a.json()}const n=()=>{};return(a,u)=>(l(),_("div",null,[s("h3",{class:"text-sm capitalize py-2",onClick:n},g(t.category)+" ("+g(j(e).length)+")",1)]))}},G=q;const J=t=>(L("data-v-e66324a3"),t=t(),N(),t),K={class:"card text-center"},W=["src"],X={class:"font-bold truncate text-gray-500 m-4"},Z={class:"font-bold text-black-500 m-4 text-sm"},Y=J(()=>s("p",{class:"btn my-4"},"View Details",-1)),ee={__name:"ProductCard",props:["product"],setup(t){return(o,e)=>{const r=R;return l(),_("div",K,[s("img",{src:t.product.image,alt:"No Product",class:"image"},null,8,W),s("p",X,g(t.product.title),1),s("p",Z,"$"+g(t.product.price),1),x(r,{to:`/products/${t.product.id}`},{default:A(()=>[Y]),_:1},8,["to"])])}}},te=y(ee,[["__scopeId","data-v-e66324a3"]]);const b=t=>(L("data-v-86c690fd"),t=t(),N(),t),oe={class:"flex justify-end"},se={class:"flex items-center"},ae=b(()=>s("label",{for:"simple-search",class:"sr-only"},"Search",-1)),ne={class:"relative",style:{width:"220px"}},re=b(()=>s("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[s("svg",{class:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[s("path",{stroke:"#a5a5a5","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1)),ce={class:"mt-5",style:{"min-height":"500px"}},ie={key:0,class:"flex gap-10"},le={class:"p-5 card",style:{"max-width":"200px","min-width":"200px"}},de=b(()=>s("h3",{class:"font-bold pb-2"},"All Categories",-1)),ue={class:"grid md:grid-cols-3 gap-5 sm:grid-cols-2"},_e={__name:"index",setup(t){const o=f(""),e=f([]),r=f([]),n=f(!0),a=$(()=>{if(o.value.length===0)return e.value;{const c=o.value.toLowerCase();return e.value.filter(i=>i.title.toLowerCase().includes(c))}});async function u(){try{const c=await fetch("https://fakestoreapi.com/products/");e.value=await c.json();const i=await fetch("https://fakestoreapi.com/products/categories");r.value=await i.json(),e.value&&r.value&&(n.value=!1)}catch(c){console.error("Error fetching products:",c),n.value=!1}}return u(),V(o,()=>{a.value=a}),z({title:"SC Ecommerce | Products"}),(c,i)=>{const h=U,m=G,p=te;return l(),_("div",null,[n.value?(l(),I(h,{key:0,loading:n.value},null,8,["loading"])):k("",!0),s("div",oe,[s("form",se,[ae,s("div",ne,[re,D(s("input",{type:"text",id:"search",class:"bg-gray-50 border border-[#e3e3e3] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-[#12b488] block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-[#12b488] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#12b488]",placeholder:"What are you looking for ?","onUpdate:modelValue":i[0]||(i[0]=d=>o.value=d)},null,512),[[M,o.value]])])])]),s("div",null,[s("div",ce,[r.value.length>0?(l(),_("div",ie,[s("div",le,[de,(l(!0),_(w,null,C(r.value,d=>(l(),_("div",{key:d.id},[x(m,{category:d},null,8,["category"])]))),128))]),s("div",null,[s("div",ue,[(l(!0),_(w,null,C(a.value,d=>(l(),_("div",{key:d.id},[x(p,{product:d},null,8,["product"])]))),128))])])])):k("",!0)])])])}}},he=y(_e,[["__scopeId","data-v-86c690fd"]]);export{he as default};
