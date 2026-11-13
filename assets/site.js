/* Portfolio Mohammadhossein Bikineh - no framework, no tracking. */
(() => {
  'use strict';

  const I18N = JSON.parse(document.getElementById('i18n').textContent);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lang = document.documentElement.lang || 'de';

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } }
  };

  const t = (key) => (I18N[lang] && I18N[lang][key]) || (I18N.de && I18N.de[key]) || '';

  /* ---------- Language ---------- */
  function applyLang(next) {
    lang = next;
    document.documentElement.lang = next;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split(';').forEach(pair => {
        const [attr, key] = pair.split(':');
        if (attr && key) el.setAttribute(attr.trim(), t(key.trim()));
      });
    });
    document.querySelectorAll('.seg [data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === next)));
    document.title = t('meta-title');
    renderReadout(current);
    store.set('lang', next);
  }

  /* ---------- Signal path ---------- */
  const line = document.querySelector('.line');
  const nodes = line ? Array.from(line.querySelectorAll('.node')) : [];
  const packet = line ? line.querySelector('.packet') : null;
  const readValue = document.getElementById('readout-value');
  const readText = document.getElementById('readout-text');
  let current = 0;

  function renderReadout(i) {
    if (!readValue) return;
    readValue.textContent = t(`stage${i + 1}-value`);
    readText.textContent = t(`stage${i + 1}-text`);
  }

  function centerOf(i) {
    const lr = line.getBoundingClientRect();
    const dot = nodes[i].querySelector('.dot').getBoundingClientRect();
    return dot.left + dot.width / 2 - lr.left;
  }

  function travel(from, to, onStep) {
    if (!packet || reduceMotion || getComputedStyle(packet).display === 'none') {
      onStep && onStep(to);
      return Promise.resolve();
    }
    const steps = [];
    const dir = to >= from ? 1 : -1;
    for (let i = from; i !== to + dir; i += dir) steps.push(i);
    const frames = steps.map(i => ({ left: `${centerOf(i)}px`, opacity: 1 }));
    frames[0].opacity = 0.2;
    const duration = Math.max(450, steps.length * 420);
    const anim = packet.animate(frames.concat([{ left: `${centerOf(to)}px`, opacity: 0 }]), {
      duration: duration + 250, easing: 'cubic-bezier(.45,0,.2,1)', fill: 'forwards'
    });
    // light nodes as the packet passes them
    steps.forEach((i, k) => setTimeout(() => onStep && onStep(i), (duration * k) / Math.max(steps.length - 1, 1)));
    return anim.finished.catch(() => {});
  }

  function select(i, animate = true) {
    const from = current;
    current = i;
    nodes.forEach((n, k) => n.setAttribute('aria-pressed', String(k === i)));
    const lightUpTo = (k) => nodes[k].classList.add('lit');
    renderReadout(i); // answer the click at once; the packet only illustrates the path
    const done = () => nodes.forEach(n => n.classList.remove('lit'));
    if (animate && from !== i) travel(from, i, lightUpTo).then(done); else done();
  }

  if (line) {
    nodes.forEach((n, i) => n.addEventListener('click', () => select(i)));
    line.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft' && e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      const k = document.activeElement && nodes.indexOf(document.activeElement);
      if (k < 0) return;
      e.preventDefault();
      const next = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? Math.min(k + 1, nodes.length - 1) : Math.max(k - 1, 0);
      nodes[next].focus();
      select(next);
    });
  }

  /* ---------- Nav: mark the section in view ---------- */
  const navLinks = Array.from(document.querySelectorAll('.nav a'));
  if ('IntersectionObserver' in window && navLinks.length) {
    const byId = new Map(navLinks.map(a => [a.getAttribute('href').slice(1), a]));
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        navLinks.forEach(a => a.removeAttribute('aria-current'));
        const a = byId.get(en.target.id);
        if (a) a.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    byId.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
  }

  /* ---------- vCard ---------- */
  const vcardBtn = document.getElementById('vcard');
  if (vcardBtn) {
    vcardBtn.addEventListener('click', () => {
      const v = [
        'BEGIN:VCARD', 'VERSION:3.0',
        'N:Bikineh;Mohammadhossein;;;', 'FN:Mohammadhossein Bikineh',
        'TITLE:M.Sc. Technische Informatik',
        'EMAIL;TYPE=INTERNET:bikineh.work@gmail.com',
        'TEL;TYPE=CELL:+4915752457684',
        'ADR;TYPE=HOME:;;;Rostock;;;Germany',
        'URL:https://bikineh-projekts.github.io/about-me/',
        'END:VCARD'
      ].join('\r\n');
      const url = URL.createObjectURL(new Blob([v], { type: 'text/vcard' }));
      const a = document.createElement('a');
      a.href = url; a.download = 'Mohammadhossein_Bikineh.vcf';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
  }

  /* ---------- Start ---------- */
  document.querySelectorAll('.seg [data-lang]').forEach(b => b.addEventListener('click', () => {
    if (b.dataset.lang !== lang) applyLang(b.dataset.lang);
  }));

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.getElementById('menu');
  if (menuBtn && menu) {
    const setOpen = (open) => {
      menuBtn.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('open', open);
    };
    menuBtn.addEventListener('click', () => setOpen(menuBtn.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('open')) { setOpen(false); menuBtn.focus(); }
    });
    document.addEventListener('click', (e) => {
      if (menu.classList.contains('open') && !e.target.closest('.bar')) setOpen(false);
    });
    window.matchMedia('(min-width: 861px)').addEventListener('change', (m) => { if (m.matches) setOpen(false); });
  }

  const saved = store.get('lang');
  if (saved && saved !== lang && I18N[saved]) applyLang(saved);

  if (line) {
    // one orchestrated moment: a single packet runs the whole path once on load
    current = 0;
    nodes.forEach((n, k) => n.setAttribute('aria-pressed', String(k === 0)));
    renderReadout(0);
    if (!reduceMotion) {
      const run = () => travel(0, nodes.length - 1, k => nodes[k].classList.add('lit'))
        .then(() => setTimeout(() => nodes.forEach(n => n.classList.remove('lit')), 600));
      if (document.readyState === 'complete') setTimeout(run, 500);
      else window.addEventListener('load', () => setTimeout(run, 500), { once: true });
    }
  }
})();
