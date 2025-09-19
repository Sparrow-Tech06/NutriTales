// small utilities used across pages
function qs(sel){return document.querySelector(sel)}
function qsa(sel){return document.querySelectorAll(sel)}

// simple fade-in for elements with class .fade-in
document.addEventListener('DOMContentLoaded', ()=>{
  qsa('.fade-in').forEach(el => { el.style.opacity=0; el.style.transform='translateY(8px)'; setTimeout(()=>{ el.style.transition='opacity .35s, transform .35s'; el.style.opacity=1; el.style.transform='translateY(0)'; }, 80); });
});

// load JSON helper (relative fetch)
async function loadJSON(url){
  try{
    const res = await fetch(url);
    if(!res.ok) throw new Error('Failed to fetch ' + url);
    return await res.json();
  }catch(e){console.error(e); return null}
}

// fallback image loader
function safeImg(imgEl, fallback='assets/img/placeholder.png'){
  imgEl.addEventListener('error', ()=>{ imgEl.src = fallback });
}
