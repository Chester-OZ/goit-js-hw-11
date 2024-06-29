import{i as u,S as m}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function f(t){const s="https://pixabay.com/api/",l=new URLSearchParams({key:"44613226-2c9c9ee480393e9e269050800",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21}),o=`${s}?${l}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>{if(e.hits.length===0)g();else return e.hits}).catch(e=>console.log(e))}const d={icon:"",backgroundColor:"#CB1E1E",position:"topRight",messageColor:"white",close:!1,closeOnEscape:!0,closeOnClick:!0,displayMode:"replace"},g=()=>u.error({message:"Sorry, there are no images matching your search query. Please, try again!",...d}),n=t=>u.error({message:"Please! Type something.",...d});let i;function p(t){const s=document.querySelector(".gallery");s.innerHTML=t.map(l=>h(l)).join(""),i?i.refresh():i=new m(".gallery a",{captionsData:"alt",captionDelay:250,showCounter:!1,fadeSpeed:250})}function h(t){return`<li class="gallery-item">
          <div class="gallery-item-image">
          <a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" /></a>
          </div>
          <ul class="image-details">
            <li class="image-details-item">
              <h2 class="image-details-title">Likes</h2>
              <p class="image-details-value">${t.likes}</p>
            </li>
            <li class="image-details-item">
              <h2 class="image-details-title">Views</h2>
              <p class="image-details-value">${t.views}</p>
            </li>
            <li class="image-details-item">
              <h2 class="image-details-title">Comments</h2>
              <p class="image-details-value">${t.comments}</p>
            </li>
            <li class="image-details-item">
              <h2 class="image-details-title">Downloads</h2>
              <p class="image-details-value">${t.downloads}</p>
            </li>
          </ul>
        </li>`}function y(){const t=document.querySelector(".loader");t.style.display="block"}function L(){const t=document.querySelector(".loader");t.style.display="none"}function w(){const t=document.querySelector(".gallery");t.innerHTML=""}const v=document.querySelector(".form"),c=document.querySelector(".input");v.addEventListener("submit",t=>{t.preventDefault(),w();const s=c.value.trim();if(!s){n();return}y(),c.value="",f(s).then(l=>{p(l)}).catch(l=>{n(message)}).finally(()=>{L()})});
//# sourceMappingURL=commonHelpers.js.map
