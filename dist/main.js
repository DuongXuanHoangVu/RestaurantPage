(()=>{const e=document.querySelector.bind(document),n=document.querySelectorAll.bind(document),t=e("#content");function c(){const e=document.createElement("div");e.className="tab-content",e.innerHTML="Home page";const n=document.createElement("h1");n.innerHTML="Home page Heading",e.appendChild(n),t.appendChild(e)}n(".menu-item").forEach((n=>{n.onclick=function(){e(".menu-item.active").classList.remove("active"),n.classList.add("active"),"home"===n.id?(t.removeChild(t.lastElementChild),c()):"contact"===n.id?(t.removeChild(t.lastElementChild),function(){const e=document.createElement("div");e.className="tab-content",e.innerHTML="Contact page",t.appendChild(e)}()):"menu"===n.id&&(t.removeChild(t.lastElementChild),function(){const e=document.createElement("div");e.className="tab-content",e.innerHTML="Menu page",t.appendChild(e)}())}})),c()})();