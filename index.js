import{a as v,i as l,S}from"./assets/vendor-D73Uttp0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function g(s){return s.map(({webformatURL:e,largeImageURL:r,tags:i,likes:t,views:o,comments:c,downloads:L})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
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
              <p class="amount">${L}</p>
            </div>
          </div>
        </li>`).join("")}const P=15;async function h(s,e){const r="46359588-09116391d0d94e56de7df57e6";try{return s.includes(" ")&&s.replace(/\s+/g,"+"),await v.get("https://pixabay.com/api/",{params:{key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:P}})}catch{l.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"}),console.error(error.message)}}function k(){document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".up-btn");s.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"}),document.body.classList.add("scrolling")}),window.addEventListener("scroll",function(){window.scrollY>200?s.classList.add("show"):s.classList.remove("show"),document.body.classList.contains("scrolling")&&window.scrollY===0&&document.body.classList.remove("scrolling")})})}const f=document.querySelector(".js-search"),m=document.querySelector(".gallery"),d=document.querySelector(".loader"),a=document.querySelector(".btn-load"),y=document.querySelector(".loader-more"),u=document.querySelector(".end-loader");let n=1;const b=40;let p="",w;d.style.display="none";y.style.display="none";a.style.display="none";u.style.display="none";f.addEventListener("submit",E);a.addEventListener("click",q);k();async function E(s){if(s.preventDefault(),n=1,m.innerHTML="",d.style.display="block",a.style.display="none",u.style.display="none",p=s.target.elements.search.value.trim(),!p){l.warning({title:"Caution",message:"Sorry, but you did not fill out the field!"}),d.style.display="none";return}try{const{data:e}=await h(p,n);if(d.style.display="none",!e.hits.length){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}m.insertAdjacentHTML("beforeend",g(e.hits)),l.success({title:"Wow",message:`We found ${e.totalHits} pictures!`}),w=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh();const r=Math.ceil(e.totalHits/b);n<r?a.style.display="block":u.style.display="block",f.reset()}catch(e){d.style.display="none",l.error({title:"Error",message:"Something went wrong. Please try again later."}),console.log(e)}}async function q(){n+=1,y.style.display="block",a.style.display="none",u.style.display="none";const s=()=>document.querySelector(".gallery-item").getBoundingClientRect();try{const{data:e}=await h(p,n);m.insertAdjacentHTML("beforeend",g(e.hits)),window.scrollBy({top:s().height*2,left:0,behavior:"smooth"}),w.refresh();const r=Math.ceil(e.totalHits/b);n<r?a.style.display="block":(l.info({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),u.style.display="block"),y.style.display="none"}catch(e){y.style.display="none",l.error({title:"Error",message:"Something went wrong. Please try again later."}),console.log(e)}}
//# sourceMappingURL=index.js.map
