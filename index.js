import{a as S,i as r,S as P}from"./assets/vendor-D73Uttp0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function h(s){return s.map(({webformatURL:e,largeImageURL:n,tags:i,likes:t,views:o,comments:c,downloads:v})=>`<li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${e}"
              alt="${i}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${o}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${c}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${v}</p>
            </div>
          </div>
        </li>`).join("")}const k=15;async function f(s,e){const n="46359588-09116391d0d94e56de7df57e6";try{return s.includes(" ")&&s.replace(/\s+/g,"+"),await S.get("https://pixabay.com/api/",{params:{key:n,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:k}})}catch{r.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"}),console.error(error.message)}}function E(){document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".up-btn");s.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"}),document.body.classList.add("scrolling")}),window.addEventListener("scroll",function(){window.scrollY>200?s.classList.add("show"):s.classList.remove("show"),document.body.classList.contains("scrolling")&&window.scrollY===0&&document.body.classList.remove("scrolling")})})}const b=document.querySelector(".js-search"),m=document.querySelector(".gallery"),d=document.querySelector(".loader"),l=document.querySelector(".btn-load"),y=document.querySelector(".loader-more"),u=document.querySelector(".end-loader");let a=1;const L=40;let p="",w,g=0;d.style.display="none";y.style.display="none";l.style.display="none";u.style.display="none";b.addEventListener("submit",q);l.addEventListener("click",$);E();async function q(s){if(s.preventDefault(),a=1,m.innerHTML="",d.style.display="block",l.style.display="none",u.style.display="none",p=s.target.elements.search.value.trim(),!p){r.warning({title:"Caution",message:"Sorry, but you did not fill out the field!"}),d.style.display="none";return}try{const{data:e}=await f(p,a);if(g=e.totalHits,d.style.display="none",!e.hits.length){r.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}m.insertAdjacentHTML("beforeend",h(e.hits)),r.success({title:"Wow",message:`We found ${e.totalHits} pictures!`}),w=new P(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),g<=L*a?u.style.display="block":l.style.display="block",b.reset()}catch(e){d.style.display="none",r.error({title:"Error",message:"Something went wrong. Please try again later."}),console.log(e)}}async function $(){a+=1,y.style.display="block",l.style.display="none",u.style.display="none";const s=()=>document.querySelector(".gallery-item").getBoundingClientRect();try{const{data:e}=await f(p,a);m.insertAdjacentHTML("beforeend",h(e.hits)),window.scrollBy({top:s().height*2,left:0,behavior:"smooth"}),w.refresh(),L*a>=g?(r.info({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),u.style.display="block",l.style.display="none"):l.style.display="block",y.style.display="none"}catch(e){y.style.display="none",r.error({title:"Error",message:"Something went wrong. Please try again later."}),console.log(e)}}
//# sourceMappingURL=index.js.map
