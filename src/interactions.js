export function setupInteractions() {
 const controller = new AbortController();
 const on = (node, event, handler) => node.addEventListener(event, handler, { signal: controller.signal });
 const message = 'Olá, Ingrid! Conheci seu trabalho pelo site e gostaria de saber mais sobre o atendimento fisioterapêutico e a disponibilidade para agendamento.';
 document.querySelectorAll('a.wa').forEach(a => { a.href='https://wa.me/5548996544245?text='+encodeURIComponent(message); a.target='_blank'; a.rel='noopener noreferrer'; });
 const toggle=document.querySelector('.menu'), nav=document.querySelector('nav');
 function closeMenu(){ nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Abrir menu'); }
 on(toggle,'click',()=>{ const open=nav.classList.toggle('open'); toggle.setAttribute('aria-expanded',String(open)); toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu'); });
 nav.querySelectorAll('a').forEach(a=>on(a,'click',closeMenu));
 on(document,'keydown',e=>{ if(e.key==='Escape')closeMenu(); });
 const lightbox=document.querySelector('#lightbox');
 document.querySelectorAll('[data-photo]').forEach(button=>on(button,'click',()=>{ const source=button.querySelector('img'); lightbox.querySelector('img').src=source.src; lightbox.querySelector('img').alt=source.alt; lightbox.querySelector('p').textContent=source.alt; lightbox.showModal(); }));
 on(lightbox.querySelector('.close'),'click',()=>lightbox.close());
 on(lightbox,'click',e=>{ if(e.target===lightbox){ const r=lightbox.getBoundingClientRect(); if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)lightbox.close(); } });
 return ()=>controller.abort();
}
