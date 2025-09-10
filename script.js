// Hash routing
    const pages = { '#skills': document.getElementById('skills-page'), '#about': document.getElementById('about-page'), '#jogo': document.getElementById('game-page') };
    function showPage(hash){ if(!pages[hash]) hash = '#skills'; Object.values(pages).forEach(p=>p.classList.remove('active')); pages[hash].classList.add('active'); document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active', a.getAttribute('href')===hash)); }
    window.addEventListener('hashchange', ()=> showPage(location.hash)); if(!location.hash) location.hash = '#skills'; showPage(location.hash);

    // animate skill bars when visible
    const bars = document.querySelectorAll('.bar > i');
    const io = new IntersectionObserver(entries=>{ for(const e of entries){ if(e.isIntersecting){ const el = e.target; const w = el.getAttribute('data-width') || '70%'; requestAnimationFrame(()=> el.style.width = w); io.unobserve(el); } } }, {threshold:0.25});
    bars.forEach(b=>io.observe(b));

    // fade-in observer (for experiences and timeline items)
    const fades = document.querySelectorAll('.fade-in');
    const io2 = new IntersectionObserver(entries=>{ entries.forEach(ent=>{ if(ent.isIntersecting){ ent.target.classList.add('visible'); io2.unobserve(ent.target); } });}, {threshold:0.18});
    fades.forEach(f=>io2.observe(f));

    // typewriter
    (function(){ const el = document.getElementById('typewriterName'); const txt = el.textContent; el.textContent = ''; let i=0; function run(){ if(i<=txt.length){ el.textContent = txt.slice(0,i); i++; setTimeout(run,28);} } run(); })();

