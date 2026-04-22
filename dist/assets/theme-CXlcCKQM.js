document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelectorAll(".toc-link"),c=document.querySelectorAll(".content-section");i.length>0&&(i.forEach(o=>{o.addEventListener("click",r=>{r.preventDefault();const d=o.getAttribute("href").substring(1),l=document.getElementById(d);l&&l.scrollIntoView({behavior:"smooth"})})}),window.addEventListener("scroll",()=>{let o="";c.forEach(r=>{window.scrollY>=r.offsetTop-200&&(o=r.getAttribute("id"))}),i.forEach(r=>{r.classList.toggle("active",r.getAttribute("href")===`#${o}`)})}));const a={threshold:.1,rootMargin:"0px 0px -50px 0px"},e=new IntersectionObserver(o=>{o.forEach(r=>{r.isIntersecting&&(r.target.style.opacity="1",r.target.style.transform="translateY(0)",e.unobserve(r.target))})},a);document.querySelectorAll(".fade-in, .content-section, .section-divider").forEach(o=>{o.style.opacity="0",o.style.transform="translateY(20px)",o.style.transition="all 0.6s ease-out",e.observe(o)})});(async function(){let c=new URLSearchParams(location.search).get("p")||window.__PAGE_SLUG__;if(!c){const t=location.pathname.match(/\/pages\/([^/]+)\.html$/);t&&(c=t[1])}if(!c){f("Страница не найдена. Укажите параметр ?p=название");return}let a;try{const t=await fetch(`/docs/${c}.md?t=${Date.now()}`);if(!t.ok)throw new Error(`${t.status} ${t.statusText}`);a=await t.text()}catch(t){f(`Не удалось загрузить /docs/${c}.md — ${t.message}`);return}const e=b(a),n=e.body;if(document.title=`${e.title} — ${document._siteTitle||"Деловой этикет в Казахстане"}`,e.description){let t=document.querySelector('meta[name="description"]');t||(t=document.createElement("meta"),t.name="description",document.head.appendChild(t)),t.content=e.description}const o=document.getElementById("toc-list");if(o&&e.toc&&e.toc.length>0)o.innerHTML=e.toc.map((t,p)=>`<li><a href="#${t.id}" class="toc-link ${p===0?"active":""}">${t.label}</a></li>`).join("");else if(o){const t=k(n);o.innerHTML=t.map((p,g)=>`<li><a href="#${p.id}" class="toc-link ${g===0?"active":""}">${p.text}</a></li>`).join("")}const r=document.getElementById("main-content");if(!r)return;const l={intro:"Введение",basics:"Основы делового этикета",meetings:"Деловые встречи",culture:"Деловая культура Казахстана",online:"Онлайн-коммуникация",conflicts:"Конфликты и сложные ситуации"}[e.section]||e.section||"",s=e.section||"";let h=n;const u=e.toc&&e.toc.length>0?e.toc[0].id:null;u&&!n.trimStart().startsWith("## ")&&(h=`<!-- intro-section:${u} -->
`+n),r.innerHTML=`
    <div class="page-header">
      <div class="breadcrumb">
        <a href="/">Главная</a>${l?` / <a href="/#${s}">${l}</a>`:""} / ${e.title}
      </div>
      <h1 class="page-title">${e.title}</h1>
      <div class="page-meta">
        <span>Время чтения: ${e.read_time||"10 минут"}</span>
        <span>•</span>
        <span>${e.chapter||""}</span>
      </div>
    </div>
    <div id="md-content">${x(h,e.toc.map(t=>t.id))}</div>
  `,E(),w(c,e.section)})();function b(i){const c={title:"",description:"",section:"",read_time:"",chapter:"",toc:[],body:i};if(!i.startsWith("---"))return c;const a=i.indexOf(`
---`,3);if(a===-1)return c;const e=i.slice(3,a).trim();c.body=i.slice(a+4).trim();const n=e.split(`
`);let o=0;for(;o<n.length;){const r=n[o],d=r.indexOf(":");if(d<0){o++;continue}const l=r.slice(0,d).trim(),s=r.slice(d+1).trim().replace(/^["']|["']$/g,"");if(l==="toc"){for(o++;o<n.length&&n[o].match(/^\s+-?\s*(id:|label:)/);){const h=n[o].match(/id:\s*(.+)/),u=n[o+1]?.match(/label:\s*["']?(.+?)["']?$/);h&&u?(c.toc.push({id:h[1].trim(),label:u[1].trim()}),o+=2):o++}continue}l in c&&(c[l]=s),o++}return c}function x(i,c){const a=i.split(`
`),e=[];let n=0,o=0,r=!1,d=!1;function l(){r&&(e.push("</section>"),r=!1)}for(;n<a.length;){const s=a[n];if(s.startsWith("<!-- intro-section:")){l();const t=s.match(/<!-- intro-section:([^>]+) -->/)?.[1]||"introduction";e.push(`<section id="${t}" class="content-section">`),r=!0,d=!0,o++,n++;continue}if(s.startsWith("## ")){l();const t=s.slice(3).trim(),p=c&&c[o]?c[o]:v(t);o++,e.push(`<section id="${p}" class="content-section">`),e.push(`<h2 class="section-title">${m(t)}</h2>`),r=!0,d=!0,n++;continue}if(s.startsWith("### ")){e.push(`<h3 class="subsection-title">${m(s.slice(4).trim())}</h3>`),n++;continue}if(s.startsWith("#### ")){e.push(`<h4 class="subsection-title">${m(s.slice(5).trim())}</h4>`),n++;continue}if(s.startsWith("> ")){const t=[];for(;n<a.length&&a[n].startsWith("> ");)t.push(a[n].slice(2)),n++;e.push(y(t));continue}if(s.match(/^[-–—*] .+/)){const t=[];for(;n<a.length&&a[n].match(/^[-–—*] .+/);)t.push(a[n].slice(2).trim()),n++;e.push('<ul class="content-list">'),t.forEach(p=>e.push(`<li>${m(p)}</li>`)),e.push("</ul>");continue}if(s.match(/^\d+\. .+/)){const t=[];for(;n<a.length&&a[n].match(/^\d+\. .+/);)t.push(a[n].replace(/^\d+\. /,"").trim()),n++;e.push('<ol class="content-list">'),t.forEach(p=>e.push(`<li>${m(p)}</li>`)),e.push("</ol>");continue}if(s.match(/^!\[/)){const t=s.match(/^!\[([^\]]*)\]\(([^)]+)\)/);t&&e.push(`<figure class="content-figure"><img src="${t[2]}" alt="${t[1]}"><figcaption>${t[1]}</figcaption></figure>`),n++;continue}if(s.trim()==="---"){e.push("<hr>"),n++;continue}if(s.trim()===""){n++;continue}const h=[];for(;n<a.length&&a[n].trim()!==""&&!a[n].match(/^#{1,4} /)&&!a[n].startsWith("> ")&&!a[n].match(/^[-–—*] /)&&!a[n].match(/^\d+\. /);)h.push(a[n]),n++;const u=h.join(" ").trim();if(u){const t=d?"section-text dropcap":"section-text";d=!1,e.push(`<p class="${t}">${m(u)}</p>`)}}return l(),e.join(`
`)}function y(i){if((i[0]||"").startsWith("**")||i.some(e=>e.match(/^[-–—*] /))){const e=['<div class="info-box">'];let n=!1;const o=[];return i.forEach(r=>{if(r.startsWith("**")&&!n){const d=r.replace(/\*\*/g,"").trim().replace(/:$/,"");e.push(`<h3 class="info-box-title">${d}</h3>`),n=!0}else r.match(/^[-–—*] /)?o.push(r.slice(2).trim()):r.trim()&&e.push(`<p class="section-text">${m(r)}</p>`)}),o.length>0&&(e.push('<ul class="info-list">'),o.forEach(r=>e.push(`<li>${m(r)}</li>`)),e.push("</ul>")),e.push("</div>"),e.join(`
`)}else{const e=i.map(n=>n.replace(/^\*(.+)\*$/,"$1")).join(" ");return`<div class="quote-block"><p>${m(e)}</p></div>`}}function m(i){return i.replace(/\*\*\*(.+?)\*\*\*/g,"<strong><em>$1</em></strong>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2">$1</a>')}function v(i){return i.toLowerCase().replace(/\s+/g,"-").replace(/[^a-zа-яё0-9-]/gi,"").replace(/-+/g,"-")}function k(i){const c=[];return i.split(`
`).forEach(a=>{const e=a.match(/^## (.+)/);e&&c.push({id:v(e[1].trim()),text:e[1].trim()})}),c}function E(){requestAnimationFrame(()=>{const i=document.querySelectorAll(".toc-link"),c=document.querySelectorAll(".content-section");if(!i.length||!c.length)return;i.forEach(e=>{e.addEventListener("click",n=>{n.preventDefault();const o=e.getAttribute("href").slice(1),r=document.getElementById(o);r&&window.scrollTo({top:r.offsetTop-100,behavior:"smooth"})})});function a(){const e=window.scrollY;let n="";c.forEach(o=>{e>=o.offsetTop-150&&(n=o.id)}),i.forEach(o=>{const r=o.getAttribute("href")==="#"+n;o.classList.toggle("active",r)})}window.addEventListener("scroll",a,{passive:!0}),a()})}async function w(i,c){try{let h=function(t,p){const g=p==="prev";return`
        <a href="${t.href}" class="page-nav-card page-nav-${p}">
          <span class="page-nav-label">
            ${g?'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>':""}
            ${g?"Предыдущая":"Следующая"}
            ${g?"":'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>'}
          </span>
          <span class="page-nav-title">${t.title}</span>
          <span class="page-nav-section">${t.section}</span>
        </a>`};var a=h;const o=(await(await fetch("/data/nav.json")).json()).flatMap(t=>t.pages.map(p=>({title:p.title,href:p.href,slug:p.href.replace(/^\/pages\//,"").replace(/\.html$/,""),section:t.title}))),r=o.findIndex(t=>t.slug===i);if(r===-1)return;const d=r>0?o[r-1]:null,l=r<o.length-1?o[r+1]:null;if(!d&&!l)return;const s=document.getElementById("main-content");if(!s)return;const u=`
      <nav class="page-nav">
        <div class="page-nav-grid">
          ${d?h(d,"prev"):"<div></div>"}
          ${l?h(l,"next"):"<div></div>"}
        </div>
      </nav>`;if(s.insertAdjacentHTML("beforeend",u),!document.getElementById("page-nav-styles")){const t=document.createElement("style");t.id="page-nav-styles",t.textContent=`
        .page-nav {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color, #E5E5E5);
        }
        .page-nav-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .page-nav-card {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 1rem 1.25rem;
          border-radius: 10px;
          border: 1px solid var(--border-color, #E5E5E5);
          background: var(--bg-secondary, #fff);
          text-decoration: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .page-nav-card:hover {
          border-color: #C1502E;
          box-shadow: 0 2px 8px rgba(193,80,46,0.08);
        }
        .page-nav-next {
          text-align: right;
        }
        .page-nav-label {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          font-family: 'Inter', sans-serif;
          color: var(--text-tertiary, #6B6B6B);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .page-nav-next .page-nav-label {
          justify-content: flex-end;
        }
        .page-nav-title {
          font-size: 14px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          color: #C1502E;
          line-height: 1.3;
        }
        .page-nav-section {
          font-size: 12px;
          font-family: 'Inter', sans-serif;
          color: var(--text-tertiary, #6B6B6B);
        }
        @media (max-width: 600px) {
          .page-nav-grid { grid-template-columns: 1fr; }
          .page-nav-next { text-align: left; }
          .page-nav-next .page-nav-label { justify-content: flex-start; }
        }
      `,document.head.appendChild(t)}}catch(e){console.warn("Page nav error:",e)}}function f(i){const c=document.getElementById("main-content");c&&(c.innerHTML=`<div style="padding:3rem;color:#c0392b;font-family:sans-serif"><h2>Ошибка</h2><p>${i}</p><a href="/">← На главную</a></div>`),document.title="Ошибка — Деловой этикет"}(function(){const i=document.createElement("div");i.style.cssText="position:fixed;top:0;left:0;height:3px;width:0%;background:#C1502E;z-index:9999;transition:width 0.1s linear;pointer-events:none;",document.body.appendChild(i),window.addEventListener("scroll",()=>{const c=document.documentElement.scrollHeight-window.innerHeight;i.style.width=(c>0?window.scrollY/c*100:0)+"%"},{passive:!0})})();(function(){const i="site_theme",c=document.documentElement;function a(l){c.setAttribute("data-theme",l),localStorage.setItem(i,l);const s=document.getElementById("theme-toggle");if(!s)return;const h=s.querySelector(".theme-icon");l==="dark"?(h.innerHTML=n,s.setAttribute("title","Светлая тема")):(h.innerHTML=e,s.setAttribute("title","Тёмная тема"))}const e=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>`,n=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>`;function o(){const l=document.querySelector(".header-container");if(!l||document.getElementById("theme-toggle"))return;const s=document.createElement("button");s.id="theme-toggle",s.className="theme-toggle-btn",s.innerHTML='<span class="theme-icon"></span>',s.addEventListener("click",()=>{const u=c.getAttribute("data-theme")||"light";a(u==="dark"?"light":"dark")});const h=l.querySelector(".back-btn");h?l.insertBefore(s,h):l.appendChild(s)}function r(){if(document.getElementById("theme-styles"))return;const l=document.createElement("style");l.id="theme-styles",l.textContent=`
      /* ── Переход между темами ── */
      *, *::before, *::after {
        transition:
          background-color 0.3s ease,
          color 0.3s ease,
          border-color 0.3s ease;
      }

      /* ── Тёмная тема ── */
      [data-theme="dark"] {
        --bg-primary:    #0F0F0F;
        --bg-secondary:  #1A1A1A;
        --text-primary:  #F0EDE8;
        --text-secondary:#B8B4AE;
        --text-tertiary: #7A7672;
        --accent-color:  #E06040;
        --accent-hover:  #C84E2E;
        --border-color:  #2A2A2A;
        --sidebar-bg:    #161616;
      }

      [data-theme="dark"] body {
        background-color: var(--bg-primary);
        color: var(--text-primary);
      }

      [data-theme="dark"] .header {
        background: rgba(15, 15, 15, 0.98);
        border-bottom-color: var(--border-color);
      }

      [data-theme="dark"] .toc-sidebar {
        background: var(--sidebar-bg);
        border-color: var(--border-color);
      }

      [data-theme="dark"] .info-box {
        background: var(--sidebar-bg);
        border-color: var(--border-color);
      }

      [data-theme="dark"] .quote-block {
        border-left-color: var(--accent-color);
      }

      [data-theme="dark"] .content-figure {
        background: var(--bg-secondary);
        border-color: var(--border-color);
      }

      [data-theme="dark"] .back-btn {
        border-color: var(--border-color);
        color: var(--text-secondary);
      }

      [data-theme="dark"] .back-btn:hover {
        border-color: var(--accent-color);
        color: var(--accent-color);
        background: rgba(224, 96, 64, 0.08);
      }

      [data-theme="dark"] .page-nav-card {
        background: var(--bg-secondary);
        border-color: var(--border-color);
      }

      [data-theme="dark"] .page-nav-card:hover {
        border-color: var(--accent-color);
      }

      [data-theme="dark"] .section-text.dropcap::first-letter {
        color: var(--accent-color);
      }

      [data-theme="dark"] mark {
        background: rgba(224, 96, 64, 0.2);
        color: var(--accent-color);
      }

      /* ── Кнопка переключения темы ── */
      .theme-toggle-btn {
        width: 36px;
        height: 36px;
        border-radius: 8px;
        border: 1px solid var(--border-color, #E5E5E5);
        background: transparent;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-secondary, #4A4A4A);
        transition: all 0.2s ease;
        flex-shrink: 0;
      }

      .theme-toggle-btn:hover {
        border-color: var(--accent-color, #C1502E);
        color: var(--accent-color, #C1502E);
        background: rgba(193, 80, 46, 0.06);
      }

      .theme-icon svg {
        width: 16px;
        height: 16px;
        display: block;
      }
    `,document.head.appendChild(l)}function d(){r(),o();const l=localStorage.getItem(i),s=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";a(l||s)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",l=>{localStorage.getItem(i)||a(l.matches?"dark":"light")})})();
