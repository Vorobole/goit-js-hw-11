import{S as g,i as m}from"./assets/vendor-7659544d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const c=document.querySelector(".gallery"),l=document.querySelector(".search-form"),u=document.querySelector(".loader"),p=new g(".gallery-link");l.addEventListener("submit",function(t){t.preventDefault();const s=t.target.elements.query.value.trim();s!==""&&(c.innerHTML="",u.style.display="block",h(s).then(function({hits:o,totalHits:a}){if(Array.isArray(o)&&o.length>0){const e=o.map(F).join("");c.innerHTML=e,d(`Was found: ${a} images`),p.refresh()}else n("Sorry, there are no images matching your search query. Please try again!")}).catch(function(o){n(`Error fetching images: ${o}`)}).finally(function(){l.reset(),u.style.display="none"}))});const f={titleColor:"#FFFFFF",messageColor:"#FFFFFF",messageSize:"16px",position:"topRight",displayMode:"replace",closeOnEscape:!0,pauseOnHover:!1,maxWidth:432,messageSize:"16px",messageLineHeight:"24px"};function n(t){m.show({message:t,backgroundColor:"#EF4040",progressBarColor:"#FFE0AC",icon:"icon-close",...f})}function d(t){m.show({message:t,backgroundColor:"#59A10D",progressBarColor:"#B5EA7C",icon:"icon-chek",...f})}const y="https://pixabay.com/api/";function h(t){const o=`?${new URLSearchParams({key:"42198701-b9a5fa575f7b9ea832aebf9b8",q:t,image_type:"photo",orientation:"horizontal",safeSearch:!0})}`,a=y+o;return fetch(a).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>{throw n(`Error fetching images: ${e}`),e})}function F({largeImageURL:t,tags:s,webformatURL:o,likes:a,views:e,comments:r,downloads:i}){return`
  <a href="${t}" class="gallery-link">
     <figure>
      <img src="${o}" alt="${s}" class="gallery-image">
      <figcaption class="gallery__figcaption">
        <div class="image-item">Likes <span class="image-elem">${a}</span></div>
        <div class="image-item">Views <span class="image-elem">${e}</span></div>
        <div class="image-item">Comments <span class="image-elem">${r}</span></div>
        <div class="image-item">Downloads <span class="image-elem">${i}</span></div>
  </figcaption>
  </figure>
</a>
`}
//# sourceMappingURL=commonHelpers.js.map