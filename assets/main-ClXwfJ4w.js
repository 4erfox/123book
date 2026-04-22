import"./modulepreload-polyfill-B5Qt9EMX.js";function ye(){const e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches,r=e||(t?"dark":"light");document.documentElement.setAttribute("data-theme",r)}ye();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".sidebar"),t=document.querySelector(".sidebar-overlay"),r=document.querySelectorAll(".nav-btn")[0],p=document.getElementById("close-sidebar"),i=document.getElementById("contacts-btn"),m=document.querySelector(".contacts-menu"),g=document.getElementById("contacts-close-btn"),v=document.getElementById("sidebar-search");function w(l){return String(l??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function $(){const l=document.querySelector(".contacts-content");if(!l)return;const c=`
            <div class="contact-item">
                <label class="contact-label">Сайт</label>
                <a href="https://etiquettebook.com" target="_blank" class="contact-value">etiquettebook.com</a>
            </div>
            <div class="contact-item">
                <label class="contact-label">Email</label>
                <a href="mailto:etiquettebook2026@gmail.com" class="contact-value">etiquettebook2026@gmail.com</a>
            </div>
        `;try{const f=await fetch("/api/contacts");if(!f.ok)throw new Error("api error");const n=await f.json();let a=[];try{a=JSON.parse(n.content||"[]")}catch{a=[]}if(!a.length){l.innerHTML=c;return}l.innerHTML=a.map(h=>`
                <div class="contact-item">
                    <label class="contact-label">${w(h.title)}</label>
                    <a href="${w(h.href)}" class="contact-value" ${h.external?'target="_blank"':""}>
                        ${w(h.subtitle||h.href)}
                    </a>
                </div>
            `).join("")}catch{try{const f=await fetch("/data/contacts.json?t="+Date.now());if(!f.ok)throw new Error("file error");const n=await f.json();if(!n.length)throw new Error("empty");l.innerHTML=n.map(a=>`
                    <div class="contact-item">
                        <label class="contact-label">${w(a.title)}</label>
                        <a href="${w(a.href)}" class="contact-value" ${a.external?'target="_blank"':""}>
                            ${w(a.subtitle||a.href)}
                        </a>
                    </div>
                `).join("")}catch{l.innerHTML=c}}}async function y(){try{const l=localStorage.getItem("adm_jwt"),c=l?{Authorization:`Bearer ${l}`}:{},f=await fetch("/api/config",{headers:c});if(!f.ok)throw new Error(`HTTP ${f.status}`);const a=(await f.json()).config||{};localStorage.setItem("siteConfig",JSON.stringify(a)),u(a)}catch{const l=localStorage.getItem("siteConfig");if(l)try{u(JSON.parse(l))}catch{}}}function u(l){const c=document.querySelector(".hero h1");c&&l.siteTitle&&(c.textContent=l.siteTitle,document.title=l.siteTitle);const f=document.querySelector(".subtitle");f&&l.siteDescription&&(f.textContent=l.siteDescription),document.documentElement.classList.add("config-loaded")}async function o(){try{const l=await fetch("/data/nav.json?t="+Date.now());if(!l.ok)return;const c=await l.json(),f=document.querySelector(".sidebar-content");if(!f)return;f.innerHTML=c.map(n=>`
                <div class="menu-section" data-section="${n.id}">
                    <div class="menu-section-title">
                        <div class="menu-section-title-content">
                            <span class="menu-section-title-text">${n.title}</span>
                            <div class="menu-section-controls">
                                <span class="menu-section-counter">${n.pages.length}</span>
                                <div class="menu-section-arrow">
                                    <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-items">
                        ${n.pages.map(a=>`
                            <a href="${a.href}" class="menu-item" style="text-decoration:none;color:inherit;display:block">${a.title}</a>
                        `).join("")}
                    </div>
                </div>
            `).join(""),f.querySelectorAll(".menu-section-title").forEach(n=>{n.addEventListener("click",()=>{n.closest(".menu-section")?.classList.toggle("open")})})}catch(l){console.log("nav.json не найден:",l)}}$(),y(),o();function d(){e?.classList.add("open"),t?.classList.add("open"),document.body.style.overflow="hidden"}function s(){e?.classList.remove("open"),t?.classList.remove("open"),m?.classList.remove("open"),document.body.style.overflow=""}r?.addEventListener("click",d),p?.addEventListener("click",s),t?.addEventListener("click",s),i?.addEventListener("click",()=>m?.classList.add("open")),g?.addEventListener("click",()=>m?.classList.remove("open")),document.addEventListener("keydown",l=>{l.key==="Escape"&&s()}),v?.addEventListener("input",function(){const l=this.value.trim().toLowerCase();document.querySelectorAll(".menu-item").forEach(c=>{c.style.display=c.textContent.toLowerCase().includes(l)?"block":"none"}),document.querySelectorAll(".menu-section").forEach(c=>{const f=Array.from(c.querySelectorAll(".menu-item")).some(n=>n.style.display==="block");c.style.display=f?"block":"none",l&&f&&c.classList.add("open")})}),document.querySelectorAll(".menu-section-title").forEach(l=>{l.addEventListener("click",()=>l.closest(".menu-section")?.classList.toggle("open"))}),window.addEventListener("load",()=>{const l=location.hash.slice(1);if(l){e?.classList.add("open"),t?.classList.add("open");const c=document.querySelector(`.menu-section[data-section="${l}"]`);c&&(c.classList.add("open"),c.scrollIntoView({behavior:"smooth",block:"center"}))}})});const he="http://127.0.0.1:7778",N="adm_jwt";let A=localStorage.getItem(N)||null,Z=!1,K=new Set,ee="connected",J=new Set;function O(e){Z=e,K.forEach(t=>t(e))}function q(e){ee=e,J.forEach(t=>t(e))}async function S(e,t,r){const p={"Content-Type":"application/json"};A&&(p.Authorization=`Bearer ${A}`);try{q("connecting");const i=await fetch(`${he}${t}`,{method:e,headers:p,body:r!==void 0?JSON.stringify(r):void 0}),m=await i.json().catch(()=>({ok:!1,error:"PARSE_ERROR",message:"Ответ сервера не является JSON"}));if(!i.ok){i.status===401&&(localStorage.removeItem(N),A=null,O(!1));const g=Object.assign(new Error(m.message||`HTTP ${i.status}`),{code:m.error,status:i.status});throw q("error"),g}return q("connected"),m}catch(i){throw i.message==="Failed to fetch"||i.code==="FETCH_ERROR"?q("disconnected"):i.status!==401&&q("error"),i}}(async()=>{if(A)try{await S("POST","/api/auth/verify",{token:A}),O(!0),q("connected")}catch{localStorage.removeItem(N),A=null,O(!1),q("disconnected")}})();function be(e){return K.add(e),e(Z),()=>K.delete(e)}function ve(e){return J.add(e),e(ee),()=>J.delete(e)}const te=()=>Z,we=()=>ee;async function $e(e,t){const r=await S("POST","/api/auth/login",{username:e,password:t});return r.token&&(A=r.token,localStorage.setItem(N,A),O(!0),q("connected")),r}function ke(){A=null,localStorage.removeItem(N),O(!1),q("connected")}const z={listDocs:()=>S("GET","/api/docs"),readDoc:e=>S("GET",`/api/docs/${encodeURIComponent(e)}`),writeDoc:(e,t)=>S("POST",`/api/docs/${encodeURIComponent(e)}`,{content:t}),createDoc:(e,t,r)=>S("POST","/api/docs",{slug:e,content:t,title:r}),deleteDoc:e=>S("DELETE",`/api/docs/${encodeURIComponent(e)}`),listNav:()=>S("GET","/api/nav"),saveNav:e=>S("POST","/api/nav",{nav:e}),readFile:e=>S("GET",`/api/files?path=${encodeURIComponent(e)}`),writeFile:(e,t)=>S("POST","/api/files",{filePath:e,content:t}),deleteFile:e=>S("DELETE","/api/files",{filePath:e}),readContacts:()=>S("GET","/api/contacts"),writeContacts:e=>S("POST","/api/contacts",{content:e}),listAssets:()=>S("GET","/api/assets"),uploadAsset:(e,t,r)=>S("POST","/api/assets",{filename:e,base64:t,mimeType:r}),uploadFavicon:(e,t)=>S("POST","/api/assets/favicon",{base64:e,mimeType:t}),readSiteConfig:()=>S("GET","/api/config"),writeSiteConfig:e=>S("POST","/api/config",{config:e})};let j=[];const se=new Set;function le(){se.forEach(e=>e([...j]))}function R(e,t){const r=crypto.randomUUID();j=[...j,{id:r,type:e,message:t}],le(),setTimeout(()=>de(r),3500)}function de(e){j=j.filter(t=>t.id!==e),le()}const H={success:e=>R("success",e),error:e=>R("error",e),info:e=>R("info",e),warning:e=>R("warning",e)},Ee={success:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',error:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',info:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',warning:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'},Se={success:{color:"#22c55e",bg:"rgba(34,197,94,0.08)",border:"rgba(34,197,94,0.25)"},error:{color:"#ef4444",bg:"rgba(239,68,68,0.08)",border:"rgba(239,68,68,0.25)"},info:{color:"#7c5cfc",bg:"rgba(124,92,252,0.08)",border:"rgba(124,92,252,0.25)"},warning:{color:"#f59e0b",bg:"rgba(245,158,11,0.08)",border:"rgba(245,158,11,0.25)"}};function Le(){let e=document.getElementById("adm-toasts");e||(e=document.createElement("div"),e.id="adm-toasts",Object.assign(e.style,{position:"fixed",bottom:"24px",right:"24px",zIndex:"100010",display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-end",pointerEvents:"none"}),document.body.appendChild(e)),se.add(t=>{e.innerHTML="",t.forEach(r=>{const p=Se[r.type],i=document.createElement("div");i.style.cssText=`
        display:flex; align-items:flex-start; gap:9px; padding:9px 12px;
        background:${p.bg}; border:1px solid ${p.border}; border-radius:8px;
        box-shadow:0 4px 20px rgba(0,0,0,0.5);
        font-family:ui-monospace,"Cascadia Code","Fira Code",monospace;
        min-width:220px; max-width:320px; pointer-events:auto;
        transform:translateX(0); opacity:1;
        transition:transform 0.22s cubic-bezier(0.4,0,0.2,1), opacity 0.22s ease;
      `,i.innerHTML=`
        <span style="color:${p.color};flex-shrink:0;margin-top:1px">${Ee[r.type]}</span>
        <span style="flex:1;font-size:12px;color:rgba(255,255,255,0.9);line-height:1.4">${r.message}</span>
        <button data-id="${r.id}" style="background:none;border:none;cursor:pointer;color:rgba(255,255,255,0.22);padding:0;display:flex;flex-shrink:0">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      `,i.querySelector("button").addEventListener("click",()=>de(r.id)),e.appendChild(i)})})}function ce(e){return e?{bg:"#111112",surface:"#18181a",surfaceHov:"#1f1f22",border:"rgba(255,255,255,0.09)",borderStrong:"rgba(255,255,255,0.18)",fg:"#e8e8e8",fgMuted:"rgba(255,255,255,0.4)",fgSub:"rgba(255,255,255,0.2)",accentSoft:"rgba(255,255,255,0.06)",success:"#22c55e",danger:"#ef4444",warning:"#f59e0b",mono:'ui-monospace,"Cascadia Code","Fira Code",monospace',shadow:"0 8px 40px rgba(0,0,0,0.7)",inpBg:"#1e1e20",inpBorder:"rgba(255,255,255,0.12)"}:{bg:"#f0efeb",surface:"#e5e4e0",surfaceHov:"#dddcd8",border:"rgba(0,0,0,0.1)",borderStrong:"rgba(0,0,0,0.2)",fg:"#111111",fgMuted:"rgba(0,0,0,0.45)",fgSub:"rgba(0,0,0,0.25)",accentSoft:"rgba(0,0,0,0.06)",success:"#16a34a",danger:"#dc2626",warning:"#d97706",mono:'ui-monospace,"Cascadia Code","Fira Code",monospace',shadow:"0 8px 32px rgba(0,0,0,0.18)",inpBg:"#e8e7e3",inpBorder:"rgba(0,0,0,0.12)"}}let W=ce(!0);const Ce=new Set;function k(){return W}function oe(e){W=ce(e),Ce.forEach(t=>t(W))}function ze(){const e=localStorage.getItem("theme");if(e)return e!=="light";const t=document.documentElement.getAttribute("data-theme");return t?t!=="light":!0}const B={file:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',folder:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',edit:'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',link:'<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',reload:'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>',chevD:'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>',back:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',save:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',bold:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>',italic:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>',grip:'<svg width="10" height="14" viewBox="0 0 10 14" fill="currentColor"><circle cx="3" cy="3" r="1.2"/><circle cx="7" cy="3" r="1.2"/><circle cx="3" cy="7" r="1.2"/><circle cx="7" cy="7" r="1.2"/><circle cx="3" cy="11" r="1.2"/><circle cx="7" cy="11" r="1.2"/></svg>'};function P(e){return String(e??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}let M=null;function Te(e,t,r,p){const i=k(),m=document.createElement("div");m.style.cssText=`position:absolute;inset:0;z-index:30;background:${i.bg};display:flex;flex-direction:column;overflow:hidden`,m.innerHTML=`
    <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;border-bottom:1px solid ${i.border};background:${i.surface};flex-shrink:0">
      <button id="me-back" style="display:flex;align-items:center;gap:5px;padding:5px 9px;border-radius:6px;border:1px solid ${i.border};background:transparent;color:${i.fgMuted};cursor:pointer;font-size:11px;font-family:${i.mono}">${B.back} Назад</button>
      <span style="flex:1;font-size:11px;font-weight:600;color:${i.fg};font-family:${i.mono};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${P(r)}</span>
      <span id="me-dirty" style="display:none;font-size:10px;color:${i.warning};font-family:${i.mono}">● не сохранено</span>
      <button id="me-save" style="display:flex;align-items:center;gap:5px;padding:5px 12px;border-radius:6px;border:1px solid ${i.borderStrong};background:${i.surfaceHov};color:${i.fg};cursor:pointer;font-size:11px;font-family:${i.mono};font-weight:600">${B.save} Сохранить <span style="font-size:9px;color:${i.fgSub};background:${i.inpBg};border:1px solid ${i.border};border-radius:3px;padding:1px 4px">Ctrl+S</span></button>
    </div>
    <div style="display:flex;align-items:center;gap:3px;padding:4px 10px;border-bottom:1px solid ${i.border};background:${i.surface};flex-shrink:0;flex-wrap:wrap">
      <button class="me-tool" data-wrap="**" data-wrap2="**" title="Жирный" style="padding:3px 7px;border-radius:4px;border:1px solid ${i.border};background:transparent;color:${i.fgMuted};cursor:pointer;font-size:11px;font-family:${i.mono}">${B.bold}</button>
      <button class="me-tool" data-wrap="*" data-wrap2="*" title="Курсив" style="padding:3px 7px;border-radius:4px;border:1px solid ${i.border};background:transparent;color:${i.fgMuted};cursor:pointer;font-size:11px;font-family:${i.mono}">${B.italic}</button>
      <button class="me-tool" data-insert="\`\`" title="Код" style="padding:3px 7px;border-radius:4px;border:1px solid ${i.border};background:transparent;color:${i.fgMuted};cursor:pointer;font-size:11px;font-family:${i.mono}">\`code\`</button>
      <div style="width:1px;height:14px;background:${i.border};margin:0 2px"></div>
      <button class="me-tool" data-line="## " title="Заголовок H2" style="padding:3px 7px;border-radius:4px;border:1px solid ${i.border};background:transparent;color:${i.fgMuted};cursor:pointer;font-size:11px;font-family:${i.mono}">H2</button>
      <button class="me-tool" data-line="### " title="Заголовок H3" style="padding:3px 7px;border-radius:4px;border:1px solid ${i.border};background:transparent;color:${i.fgMuted};cursor:pointer;font-size:11px;font-family:${i.mono}">H3</button>
      <button class="me-tool" data-line="- " title="Список" style="padding:3px 7px;border-radius:4px;border:1px solid ${i.border};background:transparent;color:${i.fgMuted};cursor:pointer;font-size:11px;font-family:${i.mono}">— список</button>
      <div style="width:1px;height:14px;background:${i.border};margin:0 2px"></div>
      <button class="me-tool" data-snippet="> **Заголовок блока**
> Текст подсказки." title="Info-блок" style="padding:3px 7px;border-radius:4px;border:1px solid ${i.border};background:transparent;color:${i.fgMuted};cursor:pointer;font-size:11px;font-family:${i.mono}">💡 блок</button>
      <button class="me-tool" data-snippet="> *Текст цитаты.*" title="Цитата" style="padding:3px 7px;border-radius:4px;border:1px solid ${i.border};background:transparent;color:${i.fgMuted};cursor:pointer;font-size:11px;font-family:${i.mono}">" цитата</button>
    </div>
    <div style="flex:1;display:flex;overflow:hidden">
      <textarea id="me-editor"
        spellcheck="false"
        placeholder="Загрузка..."
        style="flex:1;padding:14px 16px;border:none;background:${i.bg};color:${i.fg};font-size:13px;font-family:ui-monospace,'Cascadia Code','Fira Code',monospace;line-height:1.75;resize:none;outline:none;tab-size:2"
      ></textarea>
    </div>
    <div style="padding:3px 12px;border-top:1px solid ${i.border};background:${i.surface};font-size:9px;color:${i.fgSub};font-family:${i.mono};flex-shrink:0;display:flex;gap:12px">
      <span id="me-words">0 слов</span>
      <span>Markdown · ## H2 · ### H3 · **жирный** · *курсив* · - список · > блок</span>
    </div>
  `,e.style.position="relative",e.appendChild(m);const g=m.querySelector("#me-editor"),v=m.querySelector("#me-dirty"),w=m.querySelector("#me-save"),$=m.querySelector("#me-words");let y=!1;function u(){y=!0,v.style.display="inline"}function o(){const s=g.value.trim().split(/\s+/).filter(Boolean).length;$.textContent=`${s} слов`}z.readDoc(t).then(({content:s})=>{g.value=s,g.placeholder="Введите Markdown...",o()}).catch(s=>{H.error("Ошибка загрузки: "+s.message),m.remove()});async function d(){try{await z.writeDoc(t,g.value),y=!1,v.style.display="none",w.innerHTML="✓ Сохранено",w.style.color=i.success,setTimeout(()=>{w.innerHTML=B.save+" Сохранить",w.style.color=i.fg},2e3),H.success("Сохранено: docs/"+t+".md")}catch(s){H.error("Ошибка: "+s.message)}}m.querySelectorAll(".me-tool").forEach(s=>{s.addEventListener("click",()=>{g.focus();const l=g.selectionStart,c=g.selectionEnd,f=g.value.slice(l,c),n=g.scrollTop;let a,h,x;if(s.dataset.wrap){const b=s.dataset.wrap,E=s.dataset.wrap2||b;a=g.value.slice(0,l)+b+f+E+g.value.slice(c),h=l+b.length,x=h+f.length}else if(s.dataset.line){const b=s.dataset.line,E=g.value.lastIndexOf(`
`,l-1)+1;a=g.value.slice(0,E)+b+g.value.slice(E),h=x=l+b.length}else if(s.dataset.snippet){const b=`
`+s.dataset.snippet+`
`;a=g.value.slice(0,l)+b+g.value.slice(c),h=x=l+b.length}a!==void 0&&(g.value=a,requestAnimationFrame(()=>{g.scrollTop=n,g.selectionStart=h,g.selectionEnd=x}),u(),o())})}),g.addEventListener("keydown",s=>{if(s.key==="Tab"){s.preventDefault();const l=g.selectionStart;g.value=g.value.slice(0,l)+"  "+g.value.slice(g.selectionEnd),g.selectionStart=g.selectionEnd=l+2}}),g.addEventListener("input",()=>{u(),o()}),m.addEventListener("keydown",s=>{(s.ctrlKey||s.metaKey)&&s.key==="s"&&(s.preventDefault(),d())}),m.querySelector("#me-back").addEventListener("click",()=>{y&&!confirm("Есть несохранённые изменения. Выйти?")||m.remove()}),w.addEventListener("click",d)}function Me(e){let t=[],r={};async function p(){g();try{t=(await z.listNav()).nav,t.forEach(d=>{r[d.id]===void 0&&(r[d.id]=!0)}),w()}catch(o){v(o.message)}}async function i(){try{await z.saveNav(t),H.success("Порядок сохранён")}catch(o){H.error(o.message)}}function m(o,d,s,l=null){const c=t.find(a=>a.id===d),f=t.find(a=>a.id===s);if(!c||!f)return;const n=c.pages.find(a=>a.href===o);if(n){if(c.pages=c.pages.filter(a=>a.href!==o),l){const a=f.pages.findIndex(h=>h.href===l);a!==-1?f.pages.splice(a,0,n):f.pages.push(n)}else f.pages.push(n);w(),i()}}function g(){const o=k();e.innerHTML=`<div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px;color:${o.fgMuted}"><svg class="adm-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg><span style="font-size:12px;font-family:${o.mono}">Загрузка...</span></div>`}function v(o){const d=k();e.innerHTML=`<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:24px;color:${d.danger};text-align:center"><div style="font-size:11px;font-family:${d.mono}">${P(o)}</div><button id="adm-err-reload" style="padding:6px 14px;border-radius:6px;border:1px solid ${d.border};background:${d.surfaceHov};color:${d.fg};cursor:pointer;font-size:11px;font-family:${d.mono}">Попробовать снова</button></div>`,e.querySelector("#adm-err-reload")?.addEventListener("click",p)}function w(){const o=k(),d=t.reduce((s,l)=>s+(l.pages?.length??0),0);e.innerHTML=`
      <div style="display:flex;align-items:center;gap:8px;padding:7px 10px;border-bottom:1px solid ${o.border};background:${o.surface};flex-shrink:0">
        <span style="font-size:10px;color:${o.fgSub};font-family:${o.mono}">${d} страниц · MD формат</span>
        <div style="flex:1"></div>
        <button id="adm-reload" style="display:flex;align-items:center;gap:4px;padding:6px 10px;border-radius:6px;border:1px solid ${o.border};background:transparent;color:${o.fgMuted};cursor:pointer;font-size:11px;font-family:${o.mono}">${B.reload} Обновить</button>
      </div>
      <div style="padding:3px 10px;font-size:9px;color:${o.fgSub};background:${o.surface};border-bottom:1px solid ${o.border};font-family:${o.mono}">
        Наведи на страницу → Редактировать (Markdown) / Открыть · Перетащи для сортировки
      </div>
      <div id="adm-sections" style="flex:1;overflow-y:auto;padding:6px;position:relative" class="adm-scroll"></div>
    `,e.querySelector("#adm-reload").addEventListener("click",p),$()}function $(){const o=e.querySelector("#adm-sections");if(!o)return;const d=k();if(o.innerHTML="",!t.length){o.innerHTML=`<div style="padding:32px;text-align:center;color:${d.fgMuted};font-size:12px;font-family:${d.mono}">Нет разделов</div>`;return}t.forEach(s=>o.appendChild(y(s))),setTimeout(()=>{const s=o.querySelectorAll(".menu-section > div:last-child");t.forEach((l,c)=>{s[c]&&(s[c].style.display=r[l.id]!==!1?"block":"none")})},10)}function y(o){const d=k(),s=r[o.id]!==!1,l=document.createElement("div");l.style.cssText=`margin-bottom:4px;border-radius:8px;border:1px solid ${d.border};overflow:hidden`;const c=document.createElement("div");c.style.cssText=`display:flex;align-items:center;gap:8px;padding:8px 10px;background:${d.surface};cursor:pointer;user-select:none`,c.innerHTML=`
      <span style="color:${d.fgSub};flex-shrink:0;transition:transform 0.2s;transform:rotate(${s?0:-90}deg)">${B.chevD}</span>
      <span style="color:${d.fgMuted};flex-shrink:0">${B.folder}</span>
      <span style="flex:1;font-size:12px;font-weight:600;color:${d.fg};font-family:${d.mono}">${P(o.title)}</span>
      <span style="font-size:10px;color:${d.fgSub};background:${d.surfaceHov};border-radius:10px;padding:1px 7px;font-family:${d.mono}">${o.pages?.length??0}</span>
    `;const f=document.createElement("div");f.style.cssText=`display:${s?"block":"none"};border-top:1px solid ${d.border}`;const n=document.createElement("div");n.style.cssText="min-height:4px;transition:all 0.15s";let a=null;const h=x=>{n.style.cssText=`min-height:${x?"32px":"4px"};background:${x?"rgba(124,92,252,0.08)":"transparent"};border-radius:6px;transition:all 0.15s;display:flex;align-items:center;justify-content:center`,x&&!a?(a=document.createElement("div"),a.style.cssText=`font-size:10px;color:rgba(124,92,252,0.7);font-family:${d.mono};pointer-events:none`,a.textContent=`↓ В «${o.title}»`,n.appendChild(a)):!x&&a&&(a.remove(),a=null)};if(n.addEventListener("dragover",x=>{M&&(x.preventDefault(),h(!0))}),n.addEventListener("dragleave",()=>h(!1)),n.addEventListener("drop",x=>{x.preventDefault(),h(!1),M&&(m(M.pageHref,M.fromSectionId,o.id),M=null)}),(o.pages||[]).forEach(x=>f.appendChild(u(x,o.id))),!o.pages?.length){const x=document.createElement("div");x.style.cssText=`padding:10px 14px;font-size:11px;color:${d.fgSub};font-family:${d.mono}`,x.textContent="Перетащи сюда страницу",f.appendChild(x)}return f.appendChild(n),c.addEventListener("click",x=>{x.stopPropagation();const b=!r[o.id];r[o.id]=b;const E=c.querySelector("span:first-child");E&&(E.style.transform=b?"rotate(0deg)":"rotate(-90deg)"),f.style.display=b?"block":"none"}),l.appendChild(c),l.appendChild(f),l}function u(o,d){const s=k(),l=o.href.replace(/^.*\//,"").replace(/\.html$/,""),c=document.createElement("div");return c.draggable=!0,c.style.cssText=`display:flex;align-items:center;gap:8px;padding:7px 10px 7px 14px;border-bottom:1px solid ${s.border};background:${s.bg};transition:background 0.1s`,c.innerHTML=`
      <span style="color:${s.fgSub};flex-shrink:0;cursor:grab">${B.grip}</span>
      <span style="color:${s.fgSub};flex-shrink:0">${B.file}</span>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:${s.fg};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:${s.mono}">${P(o.title)}</div>
        <div style="font-size:10px;color:${s.fgSub};font-family:${s.mono}">docs/${l}.md</div>
      </div>
      <div class="adm-acts" style="display:none;gap:3px;align-items:center">
        <button class="adm-edit-btn" style="display:flex;align-items:center;gap:3px;padding:4px 8px;border-radius:5px;border:1px solid ${s.borderStrong};background:${s.surfaceHov};color:${s.fg};cursor:pointer;font-size:10px;font-family:${s.mono};font-weight:600">${B.edit} Редактировать</button>
        <a href="${P(o.href)}" target="_blank" style="display:flex;align-items:center;padding:4px 6px;border-radius:5px;border:1px solid ${s.border};background:transparent;color:${s.fgMuted};text-decoration:none">${B.link}</a>
      </div>
    `,c.addEventListener("mouseenter",()=>{c.style.background=s.surfaceHov,c.querySelector(".adm-acts").style.display="flex"}),c.addEventListener("mouseleave",()=>{c.style.background=s.bg,c.querySelector(".adm-acts").style.display="none"}),c.querySelector(".adm-edit-btn").addEventListener("click",f=>{f.stopPropagation();const n=e.querySelector("#adm-sections");Te(n,l,o.title)}),c.addEventListener("dragstart",f=>{M={pageHref:o.href,fromSectionId:d},f.dataTransfer.effectAllowed="move",f.stopPropagation(),setTimeout(()=>{c.style.opacity="0.4"},0)}),c.addEventListener("dragend",()=>{c.style.opacity="1",M=null,e.querySelectorAll(".adm-drop-indicator").forEach(f=>f.remove())}),c.addEventListener("dragover",f=>{if(!M)return;f.preventDefault(),f.stopPropagation(),e.querySelectorAll(".adm-drop-indicator").forEach(a=>a.remove());const n=document.createElement("div");n.className="adm-drop-indicator",n.style.cssText="height:2px;background:rgba(124,92,252,0.8);margin:0 8px;border-radius:2px",c.parentNode.insertBefore(n,c)}),c.addEventListener("dragleave",f=>{c.contains(f.relatedTarget)||e.querySelectorAll(".adm-drop-indicator").forEach(n=>n.remove())}),c.addEventListener("drop",f=>{f.preventDefault(),f.stopPropagation(),e.querySelectorAll(".adm-drop-indicator").forEach(n=>n.remove()),M&&(m(M.pageHref,M.fromSectionId,d,o.href),M=null)}),c}p()}function _(e){return String(e??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Be(e){try{return JSON.parse(e)}catch{return[]}}function He(e){return JSON.stringify(e,null,2)}function qe(e){const t=k();let r=[],p=!1;async function i(){try{const{content:u}=await z.readContacts();r=Be(u),y()}catch{r=[],y()}}async function m(){try{await z.writeContacts(He(r)),p=!1,H.success("Контакты сохранены"),$()}catch(u){H.error(u.message)}}function g(){r.push({href:"",title:"",subtitle:"",external:!0}),p=!0,y()}function v(u){r.splice(u,1),p=!0,y()}function w(u,o,d){r[u][o]=d,p=!0,$()}function $(){const u=e.querySelector("#adm-contacts-footer");u&&(u.innerHTML=`
      <button id="adm-contacts-reload" style="display:flex;align-items:center;gap:5px;padding:6px 11px;border-radius:7px;border:1px solid ${t.border};background:transparent;color:${t.fgMuted};cursor:pointer;font-size:11px;font-family:${t.mono}">Обновить</button>
      <button id="adm-contacts-save" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:6px 12px;border-radius:7px;border:1px solid ${p?t.borderStrong:t.border};background:${p?t.surfaceHov:"transparent"};color:${p?t.fg:t.fgMuted};cursor:pointer;font-size:11px;font-weight:${p?500:400};font-family:${t.mono}">
        Сохранить${p?" ●":""}
      </button>
    `,u.querySelector("#adm-contacts-reload").onclick=i,u.querySelector("#adm-contacts-save").onclick=m)}function y(){const u=k();e.innerHTML=`
      <div style="flex:1;overflow-y:auto;padding:10px 12px" class="adm-scroll" id="adm-contacts-list"></div>
      <div id="adm-contacts-footer" style="padding:8px 12px;border-top:1px solid ${u.border};background:${u.surface};flex-shrink:0;display:flex;gap:8px"></div>
    `;const o=e.querySelector("#adm-contacts-list");r.forEach((s,l)=>{const c=document.createElement("div");c.style.cssText=`border:1px solid ${u.border};border-radius:8px;margin-bottom:8px;overflow:hidden`,c.innerHTML=`
        <div style="display:flex;align-items:center;gap:6px;padding:6px 10px;background:${u.surface};border-bottom:1px solid ${u.border}">
          <span style="font-size:10px;color:${u.fgSub};font-family:${u.mono}">#${l+1}</span>
          <span style="flex:1;font-size:11px;color:${u.fg};font-weight:500">${_(s.title)||"Без названия"}</span>
          <span style="font-size:9px;padding:1px 5px;border-radius:3px;background:${u.surfaceHov};color:${u.fgMuted}">${s.href?.startsWith("mailto:")?"email":"external"}</span>
          <button class="adm-del-contact" data-i="${l}" style="display:flex;padding:3px;border-radius:4px;border:none;background:transparent;color:${u.fgSub};cursor:pointer">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
          </button>
        </div>
        <div style="padding:8px 10px;display:flex;flex-direction:column;gap:5px">
          <div style="display:flex;gap:6px">
            <input class="adm-ct-field" data-i="${l}" data-field="title" placeholder="Название (GitHub, Telegram...)" value="${_(s.title)}"
              style="flex:1;padding:5px 8px;border-radius:5px;border:1px solid ${u.border};background:${u.inpBg};color:${u.fg};font-size:11px;outline:none;font-family:${u.mono};min-width:0">
            <input class="adm-ct-field" data-i="${l}" data-field="subtitle" placeholder="Подпись" value="${_(s.subtitle)}"
              style="flex:1;padding:5px 8px;border-radius:5px;border:1px solid ${u.border};background:${u.inpBg};color:${u.fg};font-size:11px;outline:none;font-family:${u.mono};min-width:0">
          </div>
          <input class="adm-ct-field" data-i="${l}" data-field="href" placeholder="https://... или mailto:..." value="${_(s.href)}"
            style="width:100%;padding:5px 8px;border-radius:5px;border:1px solid ${u.border};background:${u.inpBg};color:${u.fg};font-size:11px;outline:none;font-family:${u.mono};box-sizing:border-box">
        </div>
      `,o.appendChild(c)});const d=document.createElement("button");d.style.cssText=`width:100%;display:flex;align-items:center;justify-content:center;gap:6px;padding:9px;border-radius:7px;border:1px dashed ${u.border};background:transparent;color:${u.fgMuted};font-size:11px;cursor:pointer;font-family:${u.mono}`,d.innerHTML='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Добавить контакт',d.onclick=g,o.appendChild(d),o.addEventListener("click",s=>{const l=s.target.closest(".adm-del-contact");l&&v(parseInt(l.dataset.i))}),o.addEventListener("input",s=>{const l=s.target.closest(".adm-ct-field");l&&w(parseInt(l.dataset.i),l.dataset.field,l.value)}),$()}i()}function L(e,t="info"){const r=document.createElement("div");r.textContent=e,r.style.cssText=`
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${t==="error"?"#ef4444":t==="success"?"#22c55e":"#3b82f6"};
        color: white;
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 12px;
        font-family: monospace;
        z-index: 100000;
    `,document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",setTimeout(()=>r.remove(),300)},3e3)}function Ae(e){return e<1024?e+" B":e<1024*1024?(e/1024).toFixed(1)+" KB":(e/(1024*1024)).toFixed(1)+" MB"}function Ie(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function De(e){const t=k();let r=[];async function p(){try{r=(await z.listAssets()).assets||[],i()}catch(o){console.error("Ошибка загрузки ассетов:",o),L("Не удалось загрузить список изображений","error")}}function i(){const o=e.querySelector("#assets-list");if(o){if(r.length===0){o.innerHTML=`
            <div style="text-align: center; padding: 2rem; color: ${t.fgSub}; font-family: ${t.mono}; font-size: 10px;">
                Нет загруженных изображений
            </div>
        `;return}o.innerHTML=r.map(d=>`
        <div style="display: flex; align-items: center; gap: 12px; padding: 10px; border-bottom: 0.5px solid ${t.border};">
            <div style="width: 44px; height: 44px; background: ${t.surface}; border-radius: 6px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                <img src="${d.path}" style="max-width: 100%; max-height: 100%; object-fit: cover;" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'44\\' height=\\'44\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'%23999\\' stroke-width=\\'1.5\\'%3E%3Crect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/%3E%3C/svg%3E'">
            </div>
            <div style="flex: 1; min-width: 0;">
                <div style="font-size: 10px; font-weight: 500; margin-bottom: 3px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: ${t.fg};">
                    ${Ie(d.name)}
                </div>
                <div style="font-size: 8px; color: ${t.fgSub};">
                    ${Ae(d.size)}
                </div>
                <div style="font-size: 7px; color: ${t.fgMuted}; margin-top: 3px; font-family: monospace;">
                    ${d.path}
                </div>
            </div>
            <div style="display: flex; gap: 5px;">
                <button class="copy-markdown-btn" data-path="${d.path}" data-name="${d.name}" style="padding: 4px 8px; background: ${t.surface}; border: 0.5px solid ${t.border}; border-radius: 5px; cursor: pointer; font-size: 9px; color: ${t.fg}; font-family: ${t.mono};">
                    MD
                </button>
                <button class="copy-url-btn" data-path="${d.path}" style="padding: 4px 8px; background: ${t.surface}; border: 0.5px solid ${t.border}; border-radius: 5px; cursor: pointer; font-size: 9px; color: ${t.fg}; font-family: ${t.mono};">
                    URL
                </button>
                <button class="set-favicon-btn" data-path="${d.path}" style="padding: 4px 8px; background: rgba(34, 197, 94, 0.1); border: 0.5px solid rgba(34, 197, 94, 0.3); border-radius: 5px; cursor: pointer; color: #22c55e; font-size: 9px; font-family: ${t.mono};">
                    Favicon
                </button>
                <button class="delete-asset-btn" data-name="${d.name}" style="padding: 4px 8px; background: rgba(239, 68, 68, 0.1); border: 0.5px solid rgba(239, 68, 68, 0.3); border-radius: 5px; cursor: pointer; color: #ef4444; font-size: 9px; font-family: ${t.mono};">
                    Удалить
                </button>
            </div>
        </div>
    `).join(""),document.querySelectorAll(".set-favicon-btn").forEach(d=>{d.addEventListener("click",async()=>{const s=d.dataset.path;try{const c=await(await fetch(s)).blob(),f=new FileReader;f.onload=async n=>{const a=n.target.result.split(",")[1];await z.uploadFavicon(a,c.type),L("Favicon установлен","success"),g()},f.readAsDataURL(c)}catch{L("Ошибка установки favicon","error")}})}),document.querySelectorAll(".copy-url-btn").forEach(d=>{d.addEventListener("click",async()=>{const s=d.dataset.path,l=`${window.location.origin}${s}`;try{await navigator.clipboard.writeText(l),L("URL скопирован","success"),d.textContent="✓",setTimeout(()=>{d.textContent="URL"},1500)}catch{L("Не удалось скопировать","error")}})}),document.querySelectorAll(".copy-markdown-btn").forEach(d=>{d.addEventListener("click",async()=>{const s=d.dataset.path,f=`![${d.dataset.name.replace(/\.[^/.]+$/,"")}](${s})`;try{await navigator.clipboard.writeText(f),L("Markdown скопирован","success"),d.textContent="✓",setTimeout(()=>{d.textContent="MD"},1500)}catch{L("Не удалось скопировать","error")}})}),document.querySelectorAll(".delete-asset-btn").forEach(d=>{d.addEventListener("click",async()=>{const s=d.dataset.name;if(confirm(`Удалить ${s}?`))try{await z.deleteFile(`public/assets/${s}`),L(`Удалено: ${s}`,"success"),await p()}catch{L("Ошибка удаления","error")}})})}}async function m(o){if(!o.type.startsWith("image/")){L("Загрузите изображение (PNG, JPG, SVG)","error");return}const d=new FileReader;d.onload=async s=>{const l=s.target.result.split(",")[1];try{await z.uploadFavicon(l,o.type),L("Favicon обновлён","success"),g()}catch{L("Ошибка загрузки favicon","error")}},d.readAsDataURL(o)}function g(){const o=document.querySelector("link[rel*='icon']")||document.createElement("link");o.type="image/png",o.rel="shortcut icon",o.href="/favicon.png?"+Date.now(),document.head.appendChild(o);const d=e.querySelector("#favicon-preview-img");d&&(d.src="/favicon.png?"+Date.now())}async function v(o){if(!o.type.startsWith("image/")){L("Загрузите изображение","error");return}L(`Загрузка ${o.name}...`,"info");const d=new FileReader;d.onload=async s=>{const l=s.target.result.split(",")[1],c=o.name.replace(/[^a-zA-Z0-9.-]/g,"_"),f=`${Date.now()}-${c}`;try{await z.uploadAsset(f,l,o.type),L(`Загружено: ${f}`,"success"),await p()}catch{L("Ошибка загрузки","error")}},d.readAsDataURL(o)}function w(o,d){o.addEventListener("dragover",s=>{s.preventDefault(),o.style.background="rgba(124, 92, 252, 0.08)",o.style.borderColor="#7c5cfc"}),o.addEventListener("dragleave",()=>{o.style.background="",o.style.borderColor=""}),o.addEventListener("drop",s=>{s.preventDefault(),o.style.background="",o.style.borderColor="";const l=s.dataTransfer.files[0];l&&d(l)}),o.addEventListener("click",()=>{const s=document.createElement("input");s.type="file",s.accept="image/*",s.onchange=l=>{l.target.files[0]&&d(l.target.files[0])},s.click()})}e.innerHTML=`
        <div style="display:flex;align-items:center;gap:8px;padding:7px 10px;border-bottom:1px solid ${t.border};background:${t.surface};flex-shrink:0">
            <span style="flex:1;font-size:9px;color:${t.fgSub};font-family:${t.mono}">
                Управление файлами
            </span>
        </div>

        <div style="flex:1;overflow-y:auto;padding:12px;" class="adm-scroll">
            <div style="margin-bottom:20px;">
                <div style="display:flex;align-items:center;gap:7px;padding:8px 0;font-size:9px;font-weight:700;color:${t.fgMuted};font-family:${t.mono};text-transform:uppercase;letter-spacing:0.08em;border-bottom:1px solid ${t.border}">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                    </svg>
                    FAVICON / ЛОГОТИП
                </div>
                <div id="favicon-dropzone" style="border:1px dashed ${t.border};border-radius:10px;padding:16px;text-align:center;cursor:pointer;transition:all 0.2s ease;margin-top:10px;">
                    <div style="font-size:9px;color:${t.fgSub};font-family:${t.mono}">Перетащи или кликни</div>
                    <div style="font-size:7px;color:${t.fgMuted};margin-top:5px;font-family:${t.mono}">PNG, JPG, SVG → public/favicon.png</div>
                </div>
                <div id="favicon-preview" style="margin-top:10px;display:flex;align-items:center;gap:10px;padding:8px;background:${t.surface};border-radius:6px;border:0.5px solid ${t.border}">
                    <img id="favicon-preview-img" src="/favicon.png?${Date.now()}" style="width:32px;height:32px;border-radius:5px;object-fit:cover;" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'32\\' height=\\'32\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'%23999\\' stroke-width=\\'1.5\\'%3E%3Crect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/%3E%3C/svg%3E'">
                    <div style="flex:1;">
                        <div style="font-size:9px;font-weight:500;color:${t.fg}">Текущий favicon</div>
                        <div style="font-size:7px;color:${t.fgMuted};font-family:${t.mono}">public/favicon.png</div>
                    </div>
                    <button id="refresh-favicon" style="padding:4px 8px;background:${t.surface};border:0.5px solid ${t.border};border-radius:5px;cursor:pointer;font-size:8px;color:${t.fg};font-family:${t.mono}">
                        Обновить
                    </button>
                </div>
            </div>

            <div style="margin-bottom:16px;">
                <div style="display:flex;align-items:center;gap:7px;padding:8px 0;font-size:9px;font-weight:700;color:${t.fgMuted};font-family:${t.mono};text-transform:uppercase;letter-spacing:0.08em;border-bottom:1px solid ${t.border}">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="2" y="2" width="20" height="20" rx="2.18"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                    </svg>
                    ИЗОБРАЖЕНИЯ (PUBLIC/ASSETS/)
                </div>
                <div id="assets-dropzone" style="border:1px dashed ${t.border};border-radius:10px;padding:16px;text-align:center;cursor:pointer;transition:all 0.2s ease;margin-top:10px;margin-bottom:16px;">
                    <div style="font-size:9px;color:${t.fgSub};font-family:${t.mono}">Перетащи или кликни</div>
                    <div style="font-size:7px;color:${t.fgMuted};margin-top:5px;font-family:${t.mono}">PNG, JPG, GIF, SVG, WEBP</div>
                </div>

                <div style="font-size:8px;font-weight:500;margin-bottom:8px;color:${t.fgSub};font-family:${t.mono};text-transform:uppercase;letter-spacing:0.08em">
                    ЗАГРУЖЕННЫЕ ФАЙЛЫ
                </div>
                <div id="assets-list" style="max-height:320px;overflow-y:auto;border:0.5px solid ${t.border};border-radius:6px;">
                    <div style="text-align:center;padding:2rem;color:${t.fgSub};font-family:${t.mono};font-size:9px;">Загрузка...</div>
                </div>
            </div>
        </div>
    `;const $=e.querySelector("#favicon-dropzone");$&&w($,m);const y=e.querySelector("#assets-dropzone");y&&w(y,v);const u=e.querySelector("#refresh-favicon");u&&u.addEventListener("click",()=>{g(),L("Favicon обновлён","info")}),await p()}const V={siteTitle:"Деловой этикет в Казахстане",siteDescription:"Введение в профессиональную культуру и деловые отношения."};function Pe(e){const t=k();let r={...V},p=!1,i=!1;async function m(){try{const y=await z.readSiteConfig();r={...V,...y.config},p=!1,$()}catch{r={...V},$()}}async function g(){try{await z.writeSiteConfig(r),p=!1,i=!0,H.success("Настройки успешно сохранены"),v(),await m(),setTimeout(()=>{i=!1,v()},2500)}catch(y){H.error("❌ Ошибка: "+y.message)}}function v(){const y=e.querySelector("#adm-site-save");y&&(y.textContent=i?"✓ Сохранено":"Сохранить",y.style.borderColor=i?"#22c55e":p?t.borderStrong:t.border,y.style.background=i?"rgba(34,197,94,0.1)":p?t.surfaceHov:"transparent",y.style.color=i?"#22c55e":p?t.fg:t.fgMuted)}function w(y){return String(y??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function $(){e.innerHTML=`
      <div style="display:flex;align-items:center;gap:8px;padding:7px 10px;border-bottom:1px solid ${t.border};background:${t.surface};flex-shrink:0">
        <span style="flex:1;font-size:10px;color:${t.fgSub};font-family:${t.mono}">
          ${p?'<span style="color:#f59e0b">● </span>':""}Настройки сайта
        </span>
        <button id="adm-site-reload" style="display:flex;align-items:center;gap:4px;padding:5px 9px;border-radius:6px;border:1px solid ${t.border};background:transparent;color:${t.fgMuted};cursor:pointer;font-size:11px;font-family:${t.mono}">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          Обновить
        </button>
        <button id="adm-site-save" style="display:flex;align-items:center;gap:5px;padding:5px 12px;border-radius:6px;border:1px solid ${t.border};background:transparent;color:${t.fgMuted};cursor:pointer;font-size:11px;font-family:${t.mono}">
          Сохранить
          <span style="font-size:9px;color:${t.fgSub};background:${t.inpBg};border:1px solid ${t.border};border-radius:3px;padding:1px 4px">Ctrl+S</span>
        </button>
      </div>

      <div style="flex:1;overflow-y:auto;padding:12px;" class="adm-scroll">
        <div style="padding-top:4px;display:grid;grid-template-columns:1fr;gap:12px">
          <div>
            <label for="adm-site-siteTitle" style="display:block;font-size:9px;color:${t.fgSub};text-transform:uppercase;letter-spacing:0.07em;margin-bottom:4px;font-family:${t.mono}">Название сайта</label>
            <input id="adm-site-siteTitle" type="text" placeholder="Название сайта" value="${w(r.siteTitle)}"
              style="width:100%;padding:6px 8px;border-radius:6px;border:1px solid ${t.border};background:${t.inpBg};color:${t.fg};font-size:11px;outline:none;font-family:${t.mono};box-sizing:border-box">
          </div>
          <div>
            <label for="adm-site-siteDescription" style="display:block;font-size:9px;color:${t.fgSub};text-transform:uppercase;letter-spacing:0.07em;margin-bottom:4px;font-family:${t.mono}">Описание сайта</label>
            <textarea id="adm-site-siteDescription" placeholder="Описание сайта" rows="4"
              style="width:100%;padding:6px 8px;border-radius:6px;border:1px solid ${t.border};background:${t.inpBg};color:${t.fg};font-size:11px;outline:none;font-family:${t.mono};box-sizing:border-box;resize:vertical">${w(r.siteDescription)}</textarea>
          </div>
        </div>
      </div>
    `;const y=e.querySelector("#adm-site-reload"),u=e.querySelector("#adm-site-save"),o=e.querySelector("#adm-site-siteTitle"),d=e.querySelector("#adm-site-siteDescription");y&&y.addEventListener("click",m),u&&u.addEventListener("click",g);const s=()=>{r.siteTitle=o?.value||"",r.siteDescription=d?.value||"",p=!0,v()};o?.addEventListener("input",s),o?.addEventListener("change",s),d?.addEventListener("input",s),d?.addEventListener("change",s);const l=c=>{(c.ctrlKey||c.metaKey)&&c.key==="s"&&(c.preventDefault(),c.stopPropagation(),p?g():H.info("Нет изменений для сохранения"))};e._keydownHandler&&e.removeEventListener("keydown",e._keydownHandler),e._keydownHandler=l,e.addEventListener("keydown",l),e.setAttribute("tabindex","-1")}m()}const Fe=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";async function Oe(){try{return(await fetch("/api/health")).ok}catch{return!1}}(async()=>{const e=await Oe();Fe&&e&&je()})();function je(){oe(ze()),new MutationObserver(()=>oe(document.documentElement.getAttribute("data-theme")!=="light")).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});let e=!1,t="pages",r=null,p=16,i=40,m=520,g=600;const v={admin:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',pages:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',contacts:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',assets:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',site:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',close:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',logout:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',lock:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',spin:'<svg class="adm-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>'},w=[{id:"pages",label:"Страницы",icon:v.pages},{id:"contacts",label:"Контакты",icon:v.contacts},{id:"assets",label:"Ассеты",icon:v.assets},{id:"site",label:"Сайт",icon:v.site}];function $(){if(document.getElementById("adm-styles"))return;const n=document.createElement("style");n.id="adm-styles",n.textContent=`
      @keyframes adm-spin  { to{transform:rotate(360deg)} }
      @keyframes adm-pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
      .adm-spin  { animation:adm-spin 1s linear infinite; display:inline-flex }
      .adm-pulse { animation:adm-pulse 1s ease-in-out infinite }
      .adm-scroll::-webkit-scrollbar{width:4px;height:4px}
      .adm-scroll::-webkit-scrollbar-track{background:transparent}
      .adm-scroll::-webkit-scrollbar-thumb{background:rgba(128,128,128,.2);border-radius:4px}
      #adm-panel *{box-sizing:border-box}
      #adm-panel input,#adm-panel textarea,#adm-panel select{font-family:inherit}
    `,document.head.appendChild(n)}function y(){const n=k(),a=document.createElement("button");return a.id="adm-trigger",a.title="Админ Панель (Ctrl+Shift+A)",Object.assign(a.style,{position:"fixed",left:"8px",bottom:"70px",zIndex:"99997",width:"44px",height:"44px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"2px",borderRadius:"10px",border:`1px solid ${n.border}`,background:n.surface,color:n.fgMuted,cursor:"pointer",boxShadow:n.shadow,fontFamily:n.mono}),a.innerHTML=`${v.admin}<span style="font-size:7px;font-weight:700;letter-spacing:.05em">ADMIN</span>`,a.addEventListener("click",()=>e?f():c()),a.addEventListener("mouseenter",()=>{a.style.background=k().surfaceHov,a.style.color=k().fg}),a.addEventListener("mouseleave",()=>{a.style.background=k().surface,a.style.color=k().fgMuted}),document.body.appendChild(a),a}function u(n){const a=k();n.innerHTML=`
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 24px;gap:14px">
        <div style="color:${a.fgMuted};margin-bottom:4px">${v.lock}</div>
        <div style="font-size:13px;font-weight:700;color:${a.fg};letter-spacing:.04em">ВХОД В ПАНЕЛЬ</div>
        <div style="font-size:11px;color:${a.fgSub}">Введите учётные данные администратора</div>
        <div style="width:100%;display:flex;flex-direction:column;gap:10px;margin-top:8px">
          <input id="adm-u" type="text"     autocomplete="username"         placeholder="Логин"
            style="width:100%;padding:9px 12px;border-radius:8px;border:1px solid ${a.border};background:${a.inpBg};color:${a.fg};font-size:12px;outline:none;font-family:${a.mono}">
          <input id="adm-p" type="password" autocomplete="current-password" placeholder="Пароль"
            style="width:100%;padding:9px 12px;border-radius:8px;border:1px solid ${a.border};background:${a.inpBg};color:${a.fg};font-size:12px;outline:none;font-family:${a.mono}">
          <div id="adm-lerr" style="font-size:11px;color:#ef4444;text-align:center;min-height:16px"></div>
          <button id="adm-lbtn" style="width:100%;padding:9px;border-radius:8px;border:none;background:rgba(124,92,252,.85);color:#fff;font-size:12px;font-weight:600;cursor:pointer;font-family:${a.mono}">Войти</button>
        </div>
        <div style="font-size:10px;color:${a.fgSub};text-align:center;margin-top:4px;font-family:${a.mono}">
          Настройки в <code style="background:${a.surface};padding:1px 4px;border-radius:3px">admin.env</code>
        </div>
      </div>
    `;const h=n.querySelector("#adm-u"),x=n.querySelector("#adm-p"),b=n.querySelector("#adm-lerr"),E=n.querySelector("#adm-lbtn");setTimeout(()=>h.focus(),60);async function C(){const T=h.value.trim(),I=x.value;if(!T||!I){b.textContent="Заполните все поля";return}E.disabled=!0,E.innerHTML=v.spin+" Вход...",b.textContent="";try{await $e(T,I)}catch(me){b.textContent=me.message||"Ошибка входа",E.disabled=!1,E.textContent="Войти",x.value="",x.focus()}}E.addEventListener("click",C),[h,x].forEach(T=>T.addEventListener("keydown",I=>{I.key==="Enter"&&C()}))}function o(){if(!r)return;const n=r.querySelector("#adm-tabs"),a=te();if(n.style.display=a?"flex":"none",!a)return;const h=k();n.innerHTML=w.map(x=>`
      <button class="adm-tab" data-tab="${x.id}" style="
        display:flex;align-items:center;gap:5px;padding:9px 12px;border:none;
        border-bottom:2px solid ${x.id===t?h.fg:"transparent"};
        background:transparent;color:${x.id===t?h.fg:h.fgMuted};
        font-size:11px;font-weight:${x.id===t?600:400};
        cursor:pointer;font-family:${h.mono};flex-shrink:0;outline:none;
      ">${x.icon}${x.label}</button>
    `).join(""),n.querySelectorAll(".adm-tab").forEach(x=>{x.addEventListener("mousedown",b=>{b.preventDefault(),t=x.dataset.tab,o(),d()})})}function d(){if(!r)return;const n=r.querySelector("#adm-panel-content"),a=r.querySelector("#adm-logout-btn");if(n.innerHTML="",!te()){a&&(a.style.display="none"),u(n);return}a&&(a.style.display="flex"),t==="pages"&&Me(n),t==="contacts"&&qe(n),t==="assets"&&De(n),t==="site"&&Pe(n)}function s(n){if(!r)return;const a=k(),h=r.querySelector("#adm-status-dot"),x=r.querySelector("#adm-status-text"),b=r.querySelector("#adm-offline"),E={connected:"#22c55e",connecting:"#f59e0b",disconnected:"#ef4444",error:"#ef4444"},C={connected:"Подключено",connecting:"Подключение...",disconnected:"API не отвечает",error:"Ошибка API"};h&&(h.style.background=E[n]||a.fgSub,h.className=n==="connecting"?"adm-pulse":""),x&&(x.textContent=C[n]||n,x.style.color=n==="connected"?"#22c55e":a.fgSub),b&&(b.style.display="none")}function l(){const n=k(),a=document.createElement("div");a.id="adm-panel",Object.assign(a.style,{position:"fixed",right:p+"px",top:i+"px",width:m+"px",height:g+"px",zIndex:"99999",background:n.bg,border:`1px solid ${n.borderStrong}`,borderRadius:"12px",boxShadow:n.shadow,display:"flex",flexDirection:"column",overflow:"hidden",fontFamily:n.mono}),a.innerHTML=`
      <header id="adm-header" style="position:relative;display:flex;align-items:center;gap:10px;padding:10px 12px 9px;background:${n.surface};border-bottom:1px solid ${n.border};flex-shrink:0;user-select:none">
        <button id="adm-drag" aria-label="move" style="position:absolute;inset:0;background:transparent;border:none;cursor:move;z-index:0"></button>
        <div style="position:relative;z-index:1;width:28px;height:28px;border-radius:7px;flex-shrink:0;background:${n.accentSoft};border:1px solid ${n.border};display:flex;align-items:center;justify-content:center">${v.admin}</div>
        <div style="position:relative;z-index:1;flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:8px">
            <span style="font-size:11px;font-weight:800;color:${n.fg};letter-spacing:.06em">АДМИН ПАНЕЛЬ</span>
            <span style="font-size:8px;color:${n.fgMuted};background:${n.accentSoft};border:1px solid ${n.border};border-radius:3px;padding:1px 5px">LOCAL</span>
          </div>
          <div style="display:flex;align-items:center;gap:4px;margin-top:2px">
            <div id="adm-status-dot" style="width:5px;height:5px;border-radius:50%;background:${n.warning}" class="adm-pulse"></div>
            <span id="adm-status-text" style="font-size:9px;color:${n.fgSub}">Подключение...</span>
          </div>
        </div>
        <button id="adm-logout-btn" style="display:none;position:relative;z-index:1;align-items:center;gap:4px;padding:4px 8px;border-radius:6px;border:1px solid ${n.border};background:transparent;color:${n.fgMuted};cursor:pointer;font-size:10px;font-family:${n.mono}">${v.logout} Выйти</button>
        <button id="adm-close-btn" style="position:relative;z-index:1;width:26px;height:26px;border-radius:6px;flex-shrink:0;display:flex;align-items:center;justify-content:center;border:1px solid ${n.border};background:transparent;color:${n.fgMuted};cursor:pointer">${v.close}</button>
      </header>
      <div id="adm-tabs" style="display:none;background:${n.surface};border-bottom:1px solid ${n.border};flex-shrink:0;padding:0 4px"></div>
      <div style="flex:1;overflow:hidden;display:flex;flex-direction:column;position:relative">
        <div id="adm-offline" style="display:none;position:absolute;inset:0;z-index:10;background:rgba(17,17,18,.93);flex-direction:column;align-items:center;justify-content:center;gap:10px">
          <div id="adm-offline-icon">${v.spin}</div>
          <div id="adm-offline-text" style="font-size:12px;color:rgba(255,255,255,.4)">Подключение...</div>
          <button id="adm-offline-reload" style="display:none;padding:6px 14px;border-radius:7px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.06);color:rgba(255,255,255,.7);cursor:pointer;font-size:11px;font-family:${n.mono}">Обновить</button>
        </div>
        <div id="adm-panel-content" style="flex:1;display:flex;flex-direction:column;overflow:hidden"></div>
      </div>
      <button aria-label="resize-r"  id="adm-r-r"  style="position:absolute;right:0;top:40px;bottom:8px;width:6px;cursor:col-resize;background:transparent;border:none;padding:0"></button>
      <button aria-label="resize-b"  id="adm-r-b"  style="position:absolute;bottom:0;left:8px;right:8px;height:6px;cursor:row-resize;background:transparent;border:none;padding:0"></button>
      <button aria-label="resize-rb" id="adm-r-rb" style="position:absolute;bottom:0;right:0;width:14px;height:14px;cursor:nwse-resize;background:transparent;border:none;padding:0;z-index:11"></button>
    `,a.querySelector("#adm-close-btn").addEventListener("click",f),a.querySelector("#adm-offline-reload").addEventListener("click",()=>location.reload()),a.querySelector("#adm-logout-btn").addEventListener("click",()=>{ke(),H.info("Вы вышли"),o(),d()});let h=!1,x=null,b={};a.querySelector("#adm-drag").addEventListener("mousedown",C=>{C.preventDefault(),h=!0,b={mx:C.clientX,my:C.clientY,right:p,top:i},document.body.style.userSelect="none"});const E=C=>T=>{T.preventDefault(),T.stopPropagation(),x=C,b={mx:T.clientX,my:T.clientY,right:p,top:i,w:m,h:g},document.body.style.userSelect="none"};return a.querySelector("#adm-r-r").addEventListener("mousedown",E("r")),a.querySelector("#adm-r-b").addEventListener("mousedown",E("b")),a.querySelector("#adm-r-rb").addEventListener("mousedown",E("rb")),document.addEventListener("mousemove",C=>{if(!h&&!x)return;const T=C.clientX-b.mx,I=C.clientY-b.my;h?(p=Math.max(0,Math.min(window.innerWidth-m,b.right-T)),i=Math.max(0,Math.min(window.innerHeight-60,b.top+I)),a.style.right=p+"px",a.style.top=i+"px"):((x==="r"||x==="rb")&&(m=Math.max(380,Math.min(window.innerWidth-32,b.w-T)),a.style.width=m+"px"),(x==="b"||x==="rb")&&(g=Math.max(300,Math.min(window.innerHeight-40,b.h+I)),a.style.height=g+"px"))}),document.addEventListener("mouseup",()=>{h=!1,x=null,document.body.style.userSelect=""}),a}function c(){m=Math.min(520,window.innerWidth-32),g=Math.min(820,window.innerHeight-56),p=16,i=40,r||(r=l(),document.body.appendChild(r)),r.style.display="flex",Object.assign(r.style,{right:p+"px",top:i+"px",width:m+"px",height:g+"px"}),s(we()),o(),d(),e=!0}function f(){r&&(r.style.display="none"),e=!1}$(),Le(),y(),ve(n=>s(n)),be(()=>{r&&(o(),d())}),document.addEventListener("keydown",n=>{n.ctrlKey&&n.shiftKey&&n.key==="A"&&(n.preventDefault(),e?f():c()),e&&n.key==="Escape"&&f()})}let Y=[];async function Ne(){try{const r=(await(await fetch("/data/nav.json")).json()).flatMap(p=>p.pages.map(i=>({title:i.title,href:i.href,section:p.title,slug:i.href.replace(/^.*\/([^/]+)\.html$/,"$1"),text:""})));await Promise.allSettled(r.map(async p=>{try{const i=await fetch(`/docs/${p.slug}.md`);if(!i.ok)return;const m=await i.text();p.text=m.replace(/^---[\s\S]*?---\n/m,"").replace(/#{1,6}\s+/g," ").replace(/[*_`~>]/g,"").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/\s+/g," ").trim()}catch{}})),Y=r}catch{Y=[]}}const pe="search_history",ne=5;function fe(){try{return JSON.parse(localStorage.getItem(pe))||[]}catch{return[]}}function Re(e){let t=fe().filter(r=>r.href!==e.href);t.unshift(e),t.length>ne&&(t=t.slice(0,ne)),localStorage.setItem(pe,JSON.stringify(t))}function G(e){return e.toLowerCase().replace(/ё/g,"е")}function _e(e){const t=G(e.trim());if(!t)return[];const r=t.split(/\s+/).filter(p=>p.length>1);return r.length?Y.map(p=>{const i=G(p.title),m=G(p.section||""),g=G(p.text||""),v=r.filter(o=>i.includes(o)).length,w=r.filter(o=>m.includes(o)).length,$=r.filter(o=>g.includes(o)).length;if(!v&&!w&&!$)return null;const y=v*10+w*5+$;let u="";if($&&!v){const o=r.find(n=>g.includes(n)),d=g.indexOf(o),s=Math.max(0,d-30),l=Math.min(g.length,d+o.length+70),c=(p.text||"").slice(s,l),f=new RegExp(o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"gi");u=(s>0?"…":"")+c.replace(f,"<mark>$&</mark>")+(l<(p.text||"").length?"…":""),u=u.charAt(0).toUpperCase()+u.slice(1)}return{...p,score:y,snippet:u}}).filter(Boolean).sort((p,i)=>i.score-p.score).slice(0,8):[]}function Ge(){const e=document.createElement("div");return e.id="search-modal",e.innerHTML=`
    <div class="search-backdrop"></div>
    <div class="search-dialog" role="dialog" aria-modal="true" aria-label="Поиск">
      <div class="search-input-wrap">
        <svg class="srch-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input id="search-input" type="text" placeholder="Поиск по страницам и содержимому..." autocomplete="off" spellcheck="false"/>
        <kbd class="srch-esc">Esc</kbd>
      </div>
      <div id="search-results" class="srch-results"></div>
      <div class="srch-footer">
        <span><kbd>↑↓</kbd> навигация</span>
        <span><kbd>↵</kbd> открыть</span>
        <span><kbd>Esc</kbd> закрыть</span>
      </div>
    </div>
  `,document.body.appendChild(e),e.querySelector(".search-backdrop").addEventListener("click",Q),e.querySelector("#search-results").addEventListener("click",t=>{const r=t.target.closest(".srch-item");r&&(t.preventDefault(),Re({title:r.dataset.title,href:r.dataset.href,section:r.dataset.section}),Q(),window.location.href=r.dataset.href)}),e}function Ue(e,t){if(!t||!e)return e;const r=new RegExp(`(${t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi");return e.replace(r,"<mark>$1</mark>")}function re(e,t,r){return e.length?`<div class="srch-label">${r}</div>`+e.map((p,i)=>`
      <a href="${p.href}" class="srch-item" data-idx="${i}" data-href="${p.href}" data-title="${p.title}" data-section="${p.section||""}">
        <span class="srch-item-body">
          <span class="srch-item-title">${Ue(p.title,t)}</span>
          ${p.section?`<span class="srch-item-section">${p.section}</span>`:""}
          ${p.snippet?`<span class="srch-snippet">${p.snippet}</span>`:""}
        </span>
        <svg class="srch-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </a>`).join(""):""}function ue(e){const t=document.getElementById("search-results");if(!t)return;let r="";if(e.trim()){const p=_e(e);r=p.length?re(p,e,`Результаты (${p.length})`):`<p class="srch-empty">Ничего не найдено по запросу «${e}»</p>`}else{const p=fe();r=p.length?re(p,"","Недавно открытые"):'<p class="srch-empty">Начните вводить запрос — ищем по заголовкам и тексту страниц</p>'}t.innerHTML=r,D=-1}let D=-1;function X(){return Array.from(document.querySelectorAll("#search-results .srch-item"))}function ie(e){const t=X();t.forEach(r=>r.classList.remove("active")),e>=0&&e<t.length?(t[e].classList.add("active"),t[e].scrollIntoView({block:"nearest"}),D=e):D=-1}let F=null,U=!1;function ge(){F||(F=Ge()),F.classList.add("open"),U=!0,document.body.style.overflow="hidden";const e=document.getElementById("search-input");e&&(e.value="",e.focus()),ue("")}function Q(){F&&(F.classList.remove("open"),U=!1,document.body.style.overflow="")}document.addEventListener("keydown",e=>{if(e.key==="k"&&(e.metaKey||e.ctrlKey)||e.key==="/"&&!U&&document.activeElement.tagName!=="INPUT"){e.preventDefault(),ge();return}if(U){if(e.key==="Escape"){Q();return}if(e.key==="ArrowDown"&&(e.preventDefault(),ie(Math.min(D+1,X().length-1))),e.key==="ArrowUp"&&(e.preventDefault(),ie(Math.max(D-1,0))),e.key==="Enter"){e.preventDefault();const t=X(),r=D>=0?t[D]:t[0];r&&r.click()}}});document.addEventListener("input",e=>{e.target.id==="search-input"&&ue(e.target.value)});function ae(){const e=document.getElementById("search-btn");e&&e.addEventListener("click",t=>{t.stopPropagation(),ge()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ae):ae();Ne();const xe=document.createElement("style");xe.textContent=`
#search-modal {
  display: none; position: fixed; inset: 0; z-index: 9999;
  align-items: flex-start; justify-content: center;
  padding-top: 80px; padding-left: 1rem; padding-right: 1rem;
}
#search-modal.open { display: flex; }

.search-backdrop {
  position: absolute; inset: 0;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(4px);
}

.search-dialog {
  position: relative; width: 100%; max-width: 600px;
  background: #fff; border-radius: 12px; border: 1px solid #E5E5E5;
  overflow: hidden; max-height: calc(100vh - 120px);
  display: flex; flex-direction: column;
}

.search-input-wrap {
  display: flex; align-items: center; gap: 10px;
  padding: 14px 16px; border-bottom: 1px solid #E5E5E5; flex-shrink: 0;
}
.srch-icon { width: 18px; height: 18px; color: #6B6B6B; flex-shrink: 0; }

#search-input {
  flex: 1; border: none; outline: none;
  font-size: 15px; font-family: 'Inter', sans-serif;
  color: #1A1A1A; background: transparent; line-height: 1.5;
}
#search-input::placeholder { color: #6B6B6B; }

.srch-esc {
  font-size: 11px; color: #6B6B6B; background: #F5F5F4;
  border: 1px solid #E5E5E5; border-radius: 4px; padding: 2px 6px;
  font-family: 'Inter', sans-serif;
}

.srch-results { overflow-y: auto; padding: 8px 8px 4px; flex: 1; }

.srch-label {
  font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.08em;
  color: #6B6B6B; padding: 4px 8px 6px;
}

.srch-item {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 12px; border-radius: 8px;
  text-decoration: none; cursor: pointer;
  transition: background 0.15s;
}
.srch-item:hover, .srch-item.active { background: #FFF5F2; }

.srch-item-body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px; }

.srch-item-title {
  font-size: 14px; font-weight: 500;
  font-family: 'Inter', sans-serif; color: #1A1A1A;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.srch-item-title mark {
  background: rgba(193,80,46,0.15); color: #C1502E;
  border-radius: 2px; padding: 0 1px;
}

.srch-item-section {
  font-size: 11px; font-family: 'Inter', sans-serif;
  color: #C1502E; font-weight: 500;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

.srch-snippet {
  font-size: 12px; font-family: 'Inter', sans-serif; color: #6B6B6B;
  font-style: italic; line-height: 1.4;
  overflow: hidden; text-overflow: ellipsis;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
}
.srch-snippet mark {
  background: rgba(193,80,46,0.15); color: #C1502E;
  border-radius: 2px; padding: 0 1px; font-style: normal;
}

.srch-chevron { width: 14px; height: 14px; color: #C0C0C0; flex-shrink: 0; }

.srch-empty {
  font-family: 'Inter', sans-serif; font-size: 14px;
  color: #6B6B6B; text-align: center; padding: 2rem 1rem;
}

.srch-footer {
  display: flex; align-items: center; gap: 16px;
  padding: 8px 16px; border-top: 1px solid #E5E5E5; flex-shrink: 0;
}
.srch-footer span {
  font-size: 12px; font-family: 'Inter', sans-serif; color: #6B6B6B;
  display: flex; align-items: center; gap: 4px;
}
.srch-footer kbd {
  background: #F5F5F4; border: 1px solid #E5E5E5; border-radius: 4px;
  padding: 1px 5px; font-size: 11px; font-family: 'Inter', sans-serif;
}

@media (max-width: 600px) {
  #search-modal { padding-top: 20px; }
  .srch-footer { display: none; }
}
`;document.head.appendChild(xe);
