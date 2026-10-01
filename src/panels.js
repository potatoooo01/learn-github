
(function(){const $=s=>document.querySelector(s),en=()=>{const b=$('[data-lang].active');return !!b&&b.dataset.lang==='en'};
const close=()=>{const o=$('#v23o');o&&o.remove()};
function open(h){close();const o=document.createElement('div');o.id='v23o';o.innerHTML='<div class="v23p">'+h+'</div>';o.onclick=e=>{if(e.target===o)close()};document.body.append(o);return o}
document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
const go=v=>{const a=$('#nav-menu a[data-view="'+v+'"]');close();a&&a.click()};
window.BRset=()=>{const E=(a,b)=>en()?b:a,{S,ap}=window.BRS,ch=(k,v,l)=>`<span class="choice-chip ${S[k]==v?'active':''}" data-k="${k}" data-v="${v}">${l}</span>`;
const draw=()=>{const o=open(`<h3>⚙ ${E('การตั้งค่า','Settings')}</h3><p class="muted">${E('โหมดสี','Theme')}</p><div class="choice-group">${ch('theme','dark',E('มืด','Dark'))}${ch('theme','light',E('สว่าง','Light'))}${ch('theme','two',E('ทูโทน (แถบบนมืด / เนื้อหาสว่าง)','Two-tone (dark bar / light content)'))}</div>
<p class="muted">${E('ฟอนต์','Font')}</p><div class="choice-group">${ch('font','sys',E('ระบบ (ค่าเริ่มต้น)','System'))}${ch('font','sarabun','Sarabun')}${ch('font','prompt','Prompt')}${ch('font','noto','Noto Sans Thai')}</div>
<p class="muted">${E('ขนาดตัวอักษร','Font size')}</p><div class="choice-group">${[.9,1,1.15,1.3].map(v=>ch('size',v,Math.round(v*100)+'%')).join('')}</div>
<button class="secondary" id="v23r" style="margin-top:18px">${E('คืนค่าเริ่มต้น','Reset')}</button>`);
o.querySelectorAll('[data-k]').forEach(c=>c.onclick=()=>{const v=c.dataset.v;S[c.dataset.k]=isNaN(+v)?v:+v;ap();draw()});
$('#v23r').onclick=()=>{Object.assign(S,window.BRS.D);ap();draw()}};draw()};
window.BRmenu=out=>{const E=(a,b)=>en()?b:a,M=[['dashboard','🏠',E('หน้าแรก','Home'),['progress','mriviewer']],['mriviewer','🧠',E('ภาคตัดขวาง (Section Anatomy)','Section Anatomy'),['flashcards','quiz']],['flashcards','🃏','Flashcard',['mriviewer','quiz']],['quiz','❓','Quiz Mode',['flashcards','labexam']],['labexam','🧪','Lab Practice',['quiz','progress']],['progress','📈',E('ความก้าวหน้า (Progress)','Progress'),['quiz','labexam']],['contact','✉',E('ติดต่อ','Contact'),['dashboard']]],N=Object.fromEntries(M.map(m=>[m[0],m[1]+' '+m[2]]));
const o=open(`<h3>☰ ${E('เมนู','Menu')}</h3>`+M.map(m=>`<div class="v23i"><button class="v23m" data-v="${m[0]}">${m[1]} ${m[2]}</button><div class="v23rel"><small>${E('ที่เกี่ยวข้อง','Related')}:</small>${m[3].map(r=>`<a data-v="${r}">${N[r]}</a>`).join('')}</div></div>`).join('')+`<button class="secondary" id="v23lo" style="margin-top:16px;width:100%">${E('ออกจากระบบ','Log out')}</button>`);
o.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>go(b.dataset.v));$('#v23lo').onclick=()=>{close();out()}};
})();
