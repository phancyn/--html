var e;e={},e="._infoBannerTetraf_btn{z-index:999999;cursor:pointer;color:#37404d;background:#f0f0f066;border:none;border-radius:50%;width:24px;height:24px;margin:auto;padding:0;font-size:18px;position:absolute;bottom:4px;right:4px;overflow:hidden}#_infoBannerTetraf_.overlay{z-index:999999;background-color:#000000b3;font-family:Arial,Helvetica,sans-serif;position:fixed;inset:0}#_infoBannerTetraf_ .container{color:#222;z-index:999;background:#fff;border-radius:12px 12px 0 0;padding:14px 16px 20px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:140%;position:absolute;bottom:0;left:0;right:0;overflow:auto}#_infoBannerTetraf_ .adData p{margin:7px 0}#_infoBannerTetraf_ ._infoBannerTetraf_btn.close{background-color:#0000;position:absolute;inset:4px 4px auto auto}#_infoBannerTetraf_ .adText{color:#828282}@media (height<=100px){#_infoBannerTetraf_ .container{border-radius:12px 0 0 12px;min-width:500px;padding:12px 20px 12px 12px;top:0;left:auto}#_infoBannerTetraf_ .adData p{margin:0}}@media (width<=500px){#_infoBannerTetraf_ .container{min-width:auto}}@media (height<=89px){#_infoBannerTetraf_ .container{border-radius:12px 0 0 12px;min-width:auto;padding:4px 12px 4px 6px;font-size:10px;top:0;left:10%}#_infoBannerTetraf_ .adData p{margin:0}#_infoBannerTetraf_ ._infoBannerTetraf_btn.close{top:0;right:0}}",window.renderEridOverlay=function({mainContainer:n,erid:t,inn:i,name:a}){let o=document.createElement("style");o.innerText=e,n.appendChild(o);let r=document.createElement("button");function d(e){n.removeChild(e),r.hidden=!1}r.classList.add("_infoBannerTetraf_btn"),r.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_1005_570)">\n<path d="M7 12V12" stroke="#222222" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M12 12V12" stroke="#222222" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M17 12V12" stroke="#222222" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n</g>\n<defs>\n<clipPath id="clip0_1005_570">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>\n</svg>',r.addEventListener("click",function(e){e.stopPropagation(),this.hidden=!0;let o=document.createElement("div");o.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),d(o)}),o.classList.add("overlay"),o.id="_infoBannerTetraf_";let r=document.createElement("div");r.classList.add("container"),r.addEventListener("click",e=>{e.stopPropagation()}),o.appendChild(r),function(e){let n=e.inn?"ИНН: "+e.inn:"",t=document.createElement("div");t.classList.add("adData");let i=document.createElement("p");i.textContent="Реклама",i.classList.add("adText");let a=document.createElement("p");a.textContent=(e.name||"")+",";let o=document.createElement("p");o.textContent=n;let r=document.createElement("p");r.textContent="Erid:"+e.erid,t.appendChild(i),e.name&&t.appendChild(a),e.inn&&t.appendChild(o),t.appendChild(r),e.container.appendChild(t)}({name:a,inn:i,erid:t,container:r});let p=document.createElement("button");p.classList.add("_infoBannerTetraf_btn"),p.classList.add("close"),p.innerHTML="&#215;",p.onclick=e=>{e.stopPropagation(),d(o)},r.appendChild(p),n.appendChild(o)}),n.appendChild(r)};