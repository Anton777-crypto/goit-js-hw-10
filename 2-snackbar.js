import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import"./assets/vendor-CZ4EWmTT.js";const i=document.querySelector('input[name="delay"]'),o=document.querySelectorAll('input[name="state"]'),c=document.querySelector(".btn");function u(){var n;return(n=o.find(e=>e.checked))==null||n.value,new Promise((e,t)=>{i.value>0&&o.value("fulfilled")?setTimeout(()=>e(`✅ Fulfilled promise in ${i.value}ms`),i.value):setTimeout(()=>t(`❌ Rejected promise in ${i.value}ms`),i.value)})}c.addEventListener("click",n=>{n.preventDefault(),document.querySelector(".notification")||(document.body.innerHTML+='<div class="notification"></div>');const e=document.querySelector(".notification");u().then(t=>{e.innerHTML=`<div class="success">${t}</div>`}).catch(t=>{e.innerHTML=`<div class="error">${t}</div>`})});
//# sourceMappingURL=2-snackbar.js.map
