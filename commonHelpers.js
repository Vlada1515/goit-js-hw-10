import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as y}from"./assets/vendor-2b44ac2e.js";const m=document.getElementById("datetime-picker"),n=document.querySelector("[data-start]"),e=document.querySelectorAll(".timer .value");let r=null,f=null;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r=t[0],C()}};y(m,D);function C(){!r||r<=new Date?(iziToast.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),n.disabled=!0):(n.disabled=!1,iziToast.success({title:"Success",message:"Correct date",position:"topRight"}))}function o(t){return t<10?"0"+t:t}function l(){const s=r-new Date;if(s<=0){clearInterval(f),e.forEach(a=>a.textContent="00");return}const{days:c,hours:d,minutes:u,seconds:i}=b(s);e[0].textContent=o(c),e[1].textContent=o(d),e[2].textContent=o(u),e[3].textContent=o(i)}n.addEventListener("click",t=>{n.disabled=!0,m.disabled=!0,l(),f=setInterval(l,1e3)});document.addEventListener("DOMContentLoaded",function(){n.disabled=!0});function b(t){const i=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:a,minutes:h,seconds:p}}
//# sourceMappingURL=commonHelpers.js.map
