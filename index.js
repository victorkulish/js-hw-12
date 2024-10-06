import{a as w,i as d,S}from"./assets/vendor-D73Uttp0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();function h(s){return s.map(({webformatURL:e,largeImageURL:l,tags:i,likes:t,views:o,comments:a,downloads:v})=>`<li class="gallery-item">
          <a class="gallery-link" href="${l}">
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
              <p class="amount">${a}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${v}</p>
            </div>
          </div>
        </li>`).join("")}const P=40;async function f(s,e){const l="46359588-09116391d0d94e56de7df57e6";try{return s.includes(" ")&&s.replace(/\s+/g,"+"),await w.get("https://pixabay.com/api/",{params:{key:l,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:P}})}catch{d.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"}),console.error(error.message)}}function k(){document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".up-btn");s.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"}),document.body.classList.add("scrolling")}),window.addEventListener("scroll",function(){window.scrollY>200?s.classList.add("show"):s.classList.remove("show"),document.body.classList.contains("scrolling")&&window.scrollY===0&&document.body.classList.remove("scrolling")})})}const g=document.querySelector(".js-search"),m=document.querySelector(".gallery"),c=document.querySelector(".loader"),r=document.querySelector(".btn-load"),y=document.querySelector(".loader-more"),u=document.querySelector(".end-loader");let n=1;const b=40;let p="",L;c.style.display="none";y.style.display="none";r.style.display="none";u.style.display="none";g.addEventListener("submit",q);r.addEventListener("click",E);k();function q(s){if(s.preventDefault(),n=1,m.innerHTML="",c.style.display="block",r.style.display="none",u.style.display="none",p=s.target.elements.search.value.trim(),!p){d.warning({title:"Caution",message:"Sorry, but you did not fill out the field!"}),c.style.display="none";return}f(p,n).then(({data:e})=>{c.style.display="none";const l=Math.ceil(e.totalHits/b);if(n===l?(r.style.display="none",u.style.display="block"):r.style.display="block",!e.hits.length){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}m.insertAdjacentHTML("beforeend",h(e.hits)),d.success({title:"Wow",message:`We found ${e.totalHits} pictures!`}),L=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),g.reset()}).catch(e=>{c.style.display="none",console.log(e)})}function E(){n+=1,y.style.display="block",r.style.display="none",u.style.display="none";const s=()=>document.querySelector(".gallery-item").getBoundingClientRect();f(p,n).then(({data:e})=>{m.insertAdjacentHTML("beforeend",h(e.hits)),window.scrollBy({top:s().height*2,left:0,behavior:"smooth"}),L.refresh();const l=Math.ceil(e.totalHits/b);if(n===l){d.info({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),r.style.display="none",y.style.display="none",u.style.display="block";return}y.style.display="none",r.style.display="block"}).catch(e=>console.log(e))}
//# sourceMappingURL=index.js.map
