(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h=r=>r<="Z"&&r>="A";function C(r,n){const a=[..."abcdefghijklmnopqrstuvwxyz"],l=[..."defghijklmnopqrstuvwxyzabc"];let e="";for(let t=0;t<r.length;t++){const s=r[t],f=h(s);if(n){const c=l.indexOf(s.toLowerCase()),i=c===-1?s:f?a[c].toUpperCase():a[c];e+=i}else{const c=a.indexOf(s.toLowerCase()),i=c===-1?s:f?l[c].toUpperCase():l[c];e+=i}}return e}const o=document.querySelector("#sentence"),p=document.querySelector("#action"),u=document.querySelector(".messageContainer"),y=document.querySelector(".messageContainer span"),m=document.querySelector(".display");let d="encrypt";const g=(r,n="encrypt")=>{u&&(r.length===0?u.style.display="none":u.style.display="block",m&&(console.log(r,n==="decrypt"),m.textContent=C(r,n==="decrypt")))},v=()=>{o&&g(o==null?void 0:o.value)},L=r=>{const n=r.target;(n.value==="encrypt"||n.value==="decrypt")&&(d=n.value,y&&(y.textContent="Résultat du cryptage"),o&&g(o==null?void 0:o.value,d))};o&&o.addEventListener("input",v);p&&p.addEventListener("change",r=>L(r));
