import{f}from"./assets/vendor-EyZmBGcZ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();document.querySelector(".main");const c=document.querySelector("#datetime-picker"),l=document.querySelector(".button");c.addEventListener("change",()=>{new Date(c.value)<=new Date?l.disabled=!0:l.disabled=!1});f(c,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){console.log(o[0])}});function i(o){const t=Math.floor(o/864e5),n=Math.floor(o%864e5/36e5),a=Math.floor(o%864e5%36e5/6e4),d=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:n,minutes:a,seconds:d}}console.log(i(2e3));console.log(i(14e4));console.log(i(2414e4));
//# sourceMappingURL=1-timer.js.map
