import{a as w,i as d,S}from"./assets/vendor-D73Uttp0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function h(s){return s.map(({webformatURL:e,largeImageURL:r,tags:a,likes:t,views:o,comments:i,downloads:v})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${e}"
              alt="${a}"
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
              <p class="amount">${i}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${v}</p>
            </div>
          </div>
        </li>`).join("")}const P=15;async function f(s,e){const r="46359588-09116391d0d94e56de7df57e6";try{return s.includes(" ")&&s.replace(/\s+/g,"+"),await w.get("https://pixabay.com/api/",{params:{key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:P}})}catch{d.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"}),console.error(error.message)}}function k(){document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".up-btn");s.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"}),document.body.classList.add("scrolling")}),window.addEventListener("scroll",function(){window.scrollY>200?s.classList.add("show"):s.classList.remove("show"),document.body.classList.contains("scrolling")&&window.scrollY===0&&document.body.classList.remove("scrolling")})})}const g=document.querySelector(".js-search"),m=document.querySelector(".gallery"),c=document.querySelector(".loader"),l=document.querySelector(".btn-load"),y=document.querySelector(".loader-more"),u=document.querySelector(".end-loader");let n=1;const b=40;let p="",L;c.style.display="none";y.style.display="none";l.style.display="none";u.style.display="none";g.addEventListener("submit",q);l.addEventListener("click",E);k();async function q(s){if(s.preventDefault(),n=1,m.innerHTML="",c.style.display="block",l.style.display="none",u.style.display="none",p=s.target.elements.search.value.trim(),!p){d.warning({title:"Caution",message:"Sorry, but you did not fill out the field!"}),c.style.display="none";return}try{const{data:e}=await f(p,n);if(c.style.display="none",!e.hits.length){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}m.insertAdjacentHTML("beforeend",h(e.hits)),d.success({title:"Wow",message:`We found ${e.totalHits} pictures!`}),L=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh();const r=Math.ceil(e.totalHits/b);n===r?(l.style.display="none",u.style.display="block"):l.style.display="block",g.reset()}catch(e){c.style.display="none",console.log(e)}}async function E(){n+=1,y.style.display="block",l.style.display="none",u.style.display="none";const s=()=>document.querySelector(".gallery-item").getBoundingClientRect();try{const{data:e}=await f(p,n);m.insertAdjacentHTML("beforeend",h(e.hits)),window.scrollBy({top:s().height*2,left:0,behavior:"smooth"}),L.refresh();const r=Math.ceil(e.totalHits/b);if(n===r){d.info({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),l.style.display="none",y.style.display="none",u.style.display="block";return}y.style.display="none",l.style.display="block"}catch(e){console.log(e)}}
//# sourceMappingURL=index.js.map
