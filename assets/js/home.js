var e=document.querySelectorAll(`.hero-slide`),t=document.querySelectorAll(`.hero-indicator`),n=0,timer=null;
function r(r){e.length&&(e[n].classList.remove(`active`),t[n]?.classList.remove(`active`),n=r,e[n].classList.add(`active`),t[n]?.classList.add(`active`))}
t.forEach((e,t)=>{e.addEventListener(`click`,()=>r(t))});
function startSlider(){e.length>1&&!timer&&(timer=setInterval(()=>r((n+1)%e.length),5e3));}
function stopSlider(){timer&&(clearInterval(timer),timer=null);}
startSlider();
document.addEventListener("visibilitychange",()=>{document.hidden?stopSlider():startSlider();});
