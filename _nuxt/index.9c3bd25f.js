import{r as w,h as k,j as x,o,c as r,d as e,F as d,f as p,n as h,u as f,k as y}from"./entry.5d77c3cf.js";const j={id:"indicators-carousel",class:"relative w-full","data-carousel":"static"},I={class:"relative h-56 overflow-hidden rounded-lg md:h-96"},C=["src"],B={class:"absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex"},$=["onClick"],z=e("span",{class:"inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"},[e("svg",{class:"w-4 h-4 text-white dark:text-gray-800","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 1 1 5l4 4"})]),e("span",{class:"sr-only"},"Previous")],-1),N=[z],P=e("span",{class:"inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"},[e("svg",{class:"w-4 h-4 text-white dark:text-gray-800","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 9 4-4-4-4"})]),e("span",{class:"sr-only"},"Next")],-1),A=[P],F={__name:"Carousel",props:["banners"],setup(u){const{banners:l}=u,n=l,t=w(0);let a;function i(){t.value=(t.value+1)%n.length}function m(){t.value=(t.value-1+n.length)%n.length}function _(c){t.value=c}function v(){a=setInterval(()=>{i()},5e3)}function b(){clearInterval(a)}return k(()=>{v()}),x(()=>{b()}),(c,S)=>(o(),r("div",j,[e("div",I,[(o(!0),r(d,null,p(f(n),(g,s)=>(o(),r("div",{key:s,class:h(["duration-100","ease-in-out",{hidden:t.value!==s},{active:t.value===s}]),"data-carousel-item":""},[e("img",{src:g.image,class:"absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",alt:"Slider Image"},null,8,C)],2))),128)),e("div",B,[(o(!0),r(d,null,p(f(n),(g,s)=>(o(),r("span",{key:s,class:h(["block w-2 h-2 mx-1 rounded-full cursor-pointer",{"bg-orange-500":t.value===s,"bg-gray-400":t.value!==s}]),onClick:T=>_(s)},null,10,$))),128))])]),e("button",{type:"button",class:"absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none","data-carousel-prev":"",onClick:m},N),e("button",{type:"button",class:"absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none","data-carousel-next":"",onClick:i},A)]))}},M=F,V=e("br",null,null,-1),E=e("br",null,null,-1),L=e("br",null,null,-1),q={__name:"index",setup(u){const l=[{image:"/assets/images/banner-1.jpg"},{image:"/assets/images/banner-2.jpg"},{image:"https://mdbcdn.b-cdn.net/img/new/slides/041.webp"},{image:"/assets/images/banner-3.jpg"},{image:"/assets/images/banner-2.jpg"}];return(n,t)=>{const a=M;return o(),r("div",null,[y(a,{banners:l}),V,E,L])}}};export{q as default};