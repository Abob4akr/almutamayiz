function toggleMenu() {
  const nav = document.getElementById('mobileNav');
  if (!nav) return;
  nav.classList.toggle('open');
}

function setLang(lang) {
  const html = document.documentElement;
  const btn = document.getElementById('langBtn');

  if (lang === 'en') {
    html.lang = 'en';
    html.dir = 'ltr';
    if (btn) btn.textContent = 'AR';
  } else {
    html.lang = 'ar';
    html.dir = 'rtl';
    if (btn) btn.textContent = 'EN';
  }

  // text
  document.querySelectorAll('[data-ar]').forEach(el => {
    const ar = el.getAttribute('data-ar');
    const en = el.getAttribute('data-en');
    el.textContent = (lang === 'en') ? (en ?? ar ?? '') : (ar ?? en ?? '');
  });

  // placeholders
  document.querySelectorAll('[data-ph-ar]').forEach(el => {
    const ar = el.getAttribute('data-ph-ar');
    const en = el.getAttribute('data-ph-en');
    el.setAttribute('placeholder', (lang === 'en') ? (en ?? ar ?? '') : (ar ?? en ?? ''));
  });

  // close mobile menu
  const nav = document.getElementById('mobileNav');
  if (nav) nav.classList.remove('open');

  // store
  try { localStorage.setItem('am_lang', lang); } catch(e){}
}

function toggleLang() {
  const current = (document.documentElement.lang || 'ar').toLowerCase();
  setLang(current === 'ar' ? 'en' : 'ar');
}

function setLangFromStorageOrDefault() {
  let lang = 'ar';
  try {
    const saved = localStorage.getItem('am_lang');
    if (saved === 'en' || saved === 'ar') lang = saved;
  } catch(e){}
  setLang(lang);
}
