import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as o}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector(".form");r.addEventListener("submit",s=>{s.preventDefault();const t=Number(s.target.delay.value),i=s.target.state.value;new Promise((e,l)=>{i==="fulfilled"?e(`✅ Fulfilled promise in ${t}ms`):l(`❌ Rejected promise in ${t}ms`)},t).then(e=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"center",color:"yelow"})}).capth(e=>{o.error({title:"error",message:`✅ Fulfilled promise in ${e}ms`,position:"center",color:"blue"})}),r.reset()});
//# sourceMappingURL=2-snackbar.js.map
