import"./modulepreload-polyfill-B5Qt9EMX.js";document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelectorAll(".toc-link"),c=document.querySelectorAll(".content-section");a.length>0&&(a.forEach(n=>{n.addEventListener("click",r=>{r.preventDefault();const h=n.getAttribute("href").substring(1),l=document.getElementById(h);l&&l.scrollIntoView({behavior:"smooth"})})}),window.addEventListener("scroll",()=>{let n="";c.forEach(r=>{window.scrollY>=r.offsetTop-200&&(n=r.getAttribute("id"))}),a.forEach(r=>{r.classList.toggle("active",r.getAttribute("href")===`#${n}`)})}));const i={threshold:.1,rootMargin:"0px 0px -50px 0px"},e=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&(r.target.style.opacity="1",r.target.style.transform="translateY(0)",e.unobserve(r.target))})},i);document.querySelectorAll(".fade-in, .content-section, .section-divider").forEach(n=>{n.style.opacity="0",n.style.transform="translateY(20px)",n.style.transition="all 0.6s ease-out",e.observe(n)})});(async function(){let c=new URLSearchParams(location.search).get("p")||window.__PAGE_SLUG__;if(!c){const o=location.pathname.match(/\/pages\/([^/]+)\.html$/);o&&(c=o[1])}if(!c){g("Страница не найдена. Укажите параметр ?p=название");return}let i;try{const o=await fetch(`/docs/${c}.md?t=${Date.now()}`);if(!o.ok)throw new Error(`${o.status} ${o.statusText}`);i=await o.text()}catch(o){g(`Не удалось загрузить /docs/${c}.md — ${o.message}`);return}const e=b(i),t=e.body;if(document.title=`${e.title} — ${document._siteTitle||"Деловой этикет в Казахстане"}`,e.description){let o=document.querySelector('meta[name="description"]');o||(o=document.createElement("meta"),o.name="description",document.head.appendChild(o)),o.content=e.description}const n=document.getElementById("toc-list");if(n&&e.toc&&e.toc.length>0)n.innerHTML=e.toc.map((o,u)=>`<li><a href="#${o.id}" class="toc-link ${u===0?"active":""}">${o.label}</a></li>`).join("");else if(n){const o=k(t);n.innerHTML=o.map((u,v)=>`<li><a href="#${u.id}" class="toc-link ${v===0?"active":""}">${u.text}</a></li>`).join("")}const r=document.getElementById("main-content");if(!r)return;const l={intro:"Введение",basics:"Основы делового этикета",meetings:"Деловые встречи",culture:"Деловая культура Казахстана",online:"Онлайн-коммуникация",conflicts:"Конфликты и сложные ситуации"}[e.section]||e.section||"",s=e.section||"";let p=t;const d=e.toc&&e.toc.length>0?e.toc[0].id:null;d&&!t.trimStart().startsWith("## ")&&(p=`<!-- intro-section:${d} -->
`+t),r.innerHTML=`
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
    <div id="md-content">${x(p,e.toc.map(o=>o.id))}</div>
  `,E(),w(c,e.section)})();function b(a){const c={title:"",description:"",section:"",read_time:"",chapter:"",toc:[],body:a};if(!a.startsWith("---"))return c;const i=a.indexOf(`
---`,3);if(i===-1)return c;const e=a.slice(3,i).trim();c.body=a.slice(i+4).trim();const t=e.split(`
`);let n=0;for(;n<t.length;){const r=t[n],h=r.indexOf(":");if(h<0){n++;continue}const l=r.slice(0,h).trim(),s=r.slice(h+1).trim().replace(/^["']|["']$/g,"");if(l==="toc"){for(n++;n<t.length&&t[n].match(/^\s+-?\s*(id:|label:)/);){const p=t[n].match(/id:\s*(.+)/),d=t[n+1]?.match(/label:\s*["']?(.+?)["']?$/);p&&d?(c.toc.push({id:p[1].trim(),label:d[1].trim()}),n+=2):n++}continue}l in c&&(c[l]=s),n++}return c}function x(a,c){const i=a.split(`
`),e=[];let t=0,n=0,r=!1,h=!1;function l(){r&&(e.push("</section>"),r=!1)}for(;t<i.length;){const s=i[t];if(s.startsWith("<!-- intro-section:")){l();const o=s.match(/<!-- intro-section:([^>]+) -->/)?.[1]||"introduction";e.push(`<section id="${o}" class="content-section">`),r=!0,h=!0,n++,t++;continue}if(s.startsWith("## ")){l();const o=s.slice(3).trim(),u=c&&c[n]?c[n]:f(o);n++,e.push(`<section id="${u}" class="content-section">`),e.push(`<h2 class="section-title">${m(o)}</h2>`),r=!0,h=!0,t++;continue}if(s.startsWith("### ")){e.push(`<h3 class="subsection-title">${m(s.slice(4).trim())}</h3>`),t++;continue}if(s.startsWith("#### ")){e.push(`<h4 class="subsection-title">${m(s.slice(5).trim())}</h4>`),t++;continue}if(s.startsWith("> ")){const o=[];for(;t<i.length&&i[t].startsWith("> ");)o.push(i[t].slice(2)),t++;e.push(y(o));continue}if(s.match(/^[-–—*] .+/)){const o=[];for(;t<i.length&&i[t].match(/^[-–—*] .+/);)o.push(i[t].slice(2).trim()),t++;e.push('<ul class="content-list">'),o.forEach(u=>e.push(`<li>${m(u)}</li>`)),e.push("</ul>");continue}if(s.match(/^\d+\. .+/)){const o=[];for(;t<i.length&&i[t].match(/^\d+\. .+/);)o.push(i[t].replace(/^\d+\. /,"").trim()),t++;e.push('<ol class="content-list">'),o.forEach(u=>e.push(`<li>${m(u)}</li>`)),e.push("</ol>");continue}if(s.match(/^!\[/)){const o=s.match(/^!\[([^\]]*)\]\(([^)]+)\)/);o&&e.push(`<figure class="content-figure"><img src="${o[2]}" alt="${o[1]}"><figcaption>${o[1]}</figcaption></figure>`),t++;continue}if(s.trim()==="---"){e.push("<hr>"),t++;continue}if(s.trim()===""){t++;continue}const p=[];for(;t<i.length&&i[t].trim()!==""&&!i[t].match(/^#{1,4} /)&&!i[t].startsWith("> ")&&!i[t].match(/^[-–—*] /)&&!i[t].match(/^\d+\. /);)p.push(i[t]),t++;const d=p.join(" ").trim();if(d){const o=h?"section-text dropcap":"section-text";h=!1,e.push(`<p class="${o}">${m(d)}</p>`)}}return l(),e.join(`
`)}function y(a){if((a[0]||"").startsWith("**")||a.some(e=>e.match(/^[-–—*] /))){const e=['<div class="info-box">'];let t=!1;const n=[];return a.forEach(r=>{if(r.startsWith("**")&&!t){const h=r.replace(/\*\*/g,"").trim().replace(/:$/,"");e.push(`<h3 class="info-box-title">${h}</h3>`),t=!0}else r.match(/^[-–—*] /)?n.push(r.slice(2).trim()):r.trim()&&e.push(`<p class="section-text">${m(r)}</p>`)}),n.length>0&&(e.push('<ul class="info-list">'),n.forEach(r=>e.push(`<li>${m(r)}</li>`)),e.push("</ul>")),e.push("</div>"),e.join(`
`)}else{const e=a.map(t=>t.replace(/^\*(.+)\*$/,"$1")).join(" ");return`<div class="quote-block"><p>${m(e)}</p></div>`}}function m(a){return a.replace(/\*\*\*(.+?)\*\*\*/g,"<strong><em>$1</em></strong>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2">$1</a>')}function f(a){return a.toLowerCase().replace(/\s+/g,"-").replace(/[^a-zа-яё0-9-]/gi,"").replace(/-+/g,"-")}function k(a){const c=[];return a.split(`
`).forEach(i=>{const e=i.match(/^## (.+)/);e&&c.push({id:f(e[1].trim()),text:e[1].trim()})}),c}function E(){requestAnimationFrame(()=>{const a=document.querySelectorAll(".toc-link"),c=document.querySelectorAll(".content-section");if(!a.length||!c.length)return;a.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.getAttribute("href").slice(1),r=document.getElementById(n);r&&window.scrollTo({top:r.offsetTop-100,behavior:"smooth"})})});function i(){const e=window.scrollY;let t="";c.forEach(n=>{e>=n.offsetTop-150&&(t=n.id)}),a.forEach(n=>{const r=n.getAttribute("href")==="#"+t;n.classList.toggle("active",r)})}window.addEventListener("scroll",i,{passive:!0}),i()})}async function w(a,c){try{let s=function(d,o){const u=o==="prev";return`
        <a href="${d.href}" class="page-nav-card page-nav-${o}">
          <span class="page-nav-label">
            ${u?'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>':""}
            ${u?"Предыдущая":"Следующая"}
            ${u?"":'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>'}
          </span>
          <span class="page-nav-title">${d.title}</span>
          <span class="page-nav-section">${d.section}</span>
        </a>`};const t=(await(await fetch("/data/nav.json")).json()).flatMap(d=>d.pages.map(o=>({title:o.title,href:o.href,slug:o.href.replace(/^\/pages\//,"").replace(/\.html$/,""),section:d.title}))),n=t.findIndex(d=>d.slug===a);if(n===-1)return;const r=n>0?t[n-1]:null,h=n<t.length-1?t[n+1]:null;if(!r&&!h)return;const l=document.getElementById("main-content");if(!l)return;const p=`
      <nav class="page-nav">
        <div class="page-nav-grid">
          ${r?s(r,"prev"):"<div></div>"}
          ${h?s(h,"next"):"<div></div>"}
        </div>
      </nav>`;if(l.insertAdjacentHTML("beforeend",p),!document.getElementById("page-nav-styles")){const d=document.createElement("style");d.id="page-nav-styles",d.textContent=`
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
      `,document.head.appendChild(d)}}catch(i){console.warn("Page nav error:",i)}}function g(a){const c=document.getElementById("main-content");c&&(c.innerHTML=`<div style="padding:3rem;color:#c0392b;font-family:sans-serif"><h2>Ошибка</h2><p>${a}</p><a href="/">← На главную</a></div>`),document.title="Ошибка — Деловой этикет"}(function(){const a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;height:3px;width:0%;background:#C1502E;z-index:9999;transition:width 0.1s linear;pointer-events:none;",document.body.appendChild(a),window.addEventListener("scroll",()=>{const c=document.documentElement.scrollHeight-window.innerHeight;a.style.width=(c>0?window.scrollY/c*100:0)+"%"},{passive:!0})})();(function(){const a="site_theme",c=document.documentElement;function i(l){c.setAttribute("data-theme",l),localStorage.setItem(a,l);const s=document.getElementById("theme-toggle");if(!s)return;const p=s.querySelector(".theme-icon");l==="dark"?(p.innerHTML=t,s.setAttribute("title","Светлая тема")):(p.innerHTML=e,s.setAttribute("title","Тёмная тема"))}const e=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>`,t=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>`;function n(){const l=document.querySelector(".header-container");if(!l||document.getElementById("theme-toggle"))return;const s=document.createElement("button");s.id="theme-toggle",s.className="theme-toggle-btn",s.innerHTML='<span class="theme-icon"></span>',s.addEventListener("click",()=>{const d=c.getAttribute("data-theme")||"light";i(d==="dark"?"light":"dark")});const p=l.querySelector(".back-btn");p?l.insertBefore(s,p):l.appendChild(s)}function r(){if(document.getElementById("theme-styles"))return;const l=document.createElement("style");l.id="theme-styles",l.textContent=`
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
    `,document.head.appendChild(l)}function h(){r(),n();const l=localStorage.getItem(a),s=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";i(l||s)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h):h(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",l=>{localStorage.getItem(a)||i(l.matches?"dark":"light")})})();
