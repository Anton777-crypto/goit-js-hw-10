import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import"./assets/vendor-CZ4EWmTT.js";const n=document.querySelector("number"),o=document.querySelector("radio"),i=n.value,c=document.querySelector("submit");function r(){return new Promise((t,e)=>{n.value>0&&o.value("fulfilled")?setTimeout(()=>t(`✅ Fulfilled promise in ${i}ms`),i):setTimeout(()=>e(`❌ Rejected promise in ${i}ms`),i)})}c.addEventListener("click",t=>{t.preventDefault(),r().then(e=>{notification.innerHTML=`<div class="success">${e}</div>`}).catch(e=>{notification.innerHTML=`<div class="error">${e}</div>`})});
//# sourceMappingURL=2-snackbar.js.map
