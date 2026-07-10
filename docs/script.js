const translations = {
  "en": {
    nav_plans: "Plans",
    nav_discover: "Discover",
    nav_faq: "FAQ",
    hero_title: "Enjoy the best stories for everyone",
    hero_sub: "Subscribe from US$4.99 / month",
    cta_subscribe: "SUBSCRIBE NOW",
    cta_discover: "DISCOVER",
    plans_title: "Choose your plan",
    plans_sub: "Simple plans for every device",
    plan_mobile: "Mobile",
    plan_multi: "Multiscreen",
    mobile_f1: "Watch on smartphones and tablets",
    mobile_f2: "1 screen at a time",
    mobile_f3: "Adaptive resolution",
    mobile_f4: "Download for offline",
    multi_f1: "Watch on all your devices",
    multi_f2: "Up to 3 screens simultaneously",
    multi_f3: "HD and 4K available",
    multi_f4: "Create up to 5 profiles",
    choose_mobile: "CHOOSE MOBILE",
    choose_multi: "CHOOSE MULTISCREEN",
    discover_title: "Discover new universes",
    discover_sub: "Explore categories and collections",
    cat_hbo: "HBO",
    cat_max: "Max Originals",
    cat_dc: "DC",
    cat_wb: "Warner Bros",
    cat_cn: "Cartoon Network",
    cat_cl: "Champions League",
    faq_title: "Frequently Asked Questions",
    faq_q1: "What devices are supported?",
    faq_a1: "Smartphones, tablets, smart TVs and web browsers.",
    faq_q2: "Can I cancel anytime?",
    faq_a2: "Yes — cancel anytime from your account settings.",
    footer_copy: "© 2026 HBO Max Demo — Educational project",
    footer_terms: "Terms",
    footer_privacy: "Privacy"
  },
  "pt-BR": {
    nav_plans: "Planos",
    nav_discover: "Descubra",
    nav_faq: "FAQ",
    hero_title: "Curta as melhores histórias para todo mundo",
    hero_sub: "Assine a partir de R$14,15 / mês",
    cta_subscribe: "ASSINE AGORA",
    cta_discover: "DESCUBRA",
    plans_title: "Escolha seu plano",
    plans_sub: "Planos simples para todo dispositivo",
    plan_mobile: "Mobile",
    plan_multi: "Multitelas",
    mobile_f1: "Assista em smartphones e tablets",
    mobile_f2: "1 tela por vez",
    mobile_f3: "Resolução adaptada",
    mobile_f4: "Baixe para assistir offline",
    multi_f1: "Assista em todos os seus dispositivos",
    multi_f2: "Até 3 telas simultâneas",
    multi_f3: "HD e 4K disponíveis",
    multi_f4: "Crie até 5 perfis",
    choose_mobile: "ESCOLHER O PLANO MOBILE",
    choose_multi: "ESCOLHER O PLANO MULTITELAS",
    discover_title: "Descubra novos universos",
    discover_sub: "Explore categorias e coleções",
    cat_hbo: "HBO",
    cat_max: "Max Originals",
    cat_dc: "DC",
    cat_wb: "Warner Bros",
    cat_cn: "Cartoon Network",
    cat_cl: "Champions League",
    faq_title: "Perguntas Frequentes",
    faq_q1: "Quais dispositivos são compatíveis?",
    faq_a1: "Smartphones, tablets, smart TVs e navegadores web.",
    faq_q2: "Posso cancelar a qualquer momento?",
    faq_a2: "Sim — cancele a qualquer momento nas configurações da conta.",
    footer_copy: "© 2026 HBO Max Demo — Projeto educacional",
    footer_terms: "Termos",
    footer_privacy: "Privacidade"
  },
  "es": {
    nav_plans: "Planes",
    nav_discover: "Descubrir",
    nav_faq: "FAQ",
    hero_title: "Disfruta las mejores historias para todos",
    hero_sub: "Suscríbete desde US$4.99 / mes",
    cta_subscribe: "SUSCRÍBETE",
    cta_discover: "DESCUBRE",
    plans_title: "Elige tu plan",
    plans_sub: "Planes simples para cada dispositivo",
    plan_mobile: "Móvil",
    plan_multi: "Multipantalla",
    mobile_f1: "Ver en smartphones y tablets",
    mobile_f2: "1 pantalla a la vez",
    mobile_f3: "Resolución adaptativa",
    mobile_f4: "Descarga para ver sin conexión",
    multi_f1: "Ver en todos tus dispositivos",
    multi_f2: "Hasta 3 pantallas simultáneas",
    multi_f3: "HD y 4K disponibles",
    multi_f4: "Crea hasta 5 perfiles",
    choose_mobile: "ELEGIR PLAN MÓVIL",
    choose_multi: "ELEGIR MULTIPANTALLA",
    discover_title: "Descubre nuevos universos",
    discover_sub: "Explora categorías y colecciones",
    cat_hbo: "HBO",
    cat_max: "Max Originals",
    cat_dc: "DC",
    cat_wb: "Warner Bros",
    cat_cn: "Cartoon Network",
    cat_cl: "Champions League",
    faq_title: "Preguntas Frecuentes",
    faq_q1: "¿Qué dispositivos son compatibles?",
    faq_a1: "Smartphones, tablets, smart TVs y navegadores web.",
    faq_q2: "¿Puedo cancelar en cualquier momento?",
    faq_a2: "Sí — cancela en cualquier momento desde la configuración de tu cuenta.",
    footer_copy: "© 2026 HBO Max Demo — Proyecto educativo",
    footer_terms: "Términos",
    footer_privacy: "Privacidad"
  }
};

const defaultLang = "en";
const langSelect = document.getElementById('lang');
const announcer = document.getElementById('a11y-announcer');
const themeToggle = document.getElementById('themeToggle');

function applyTranslations(lang){
  const dict = translations[lang] || translations[defaultLang];
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(dict[key]) el.textContent = dict[key];
  });
  // update lang attribute on html
  document.documentElement.lang = lang;
  announcer.textContent = dict.hero_title || "Language changed";
  // persist
  localStorage.setItem('demo_lang', lang);
}

function initLanguage(){
  const saved = localStorage.getItem('demo_lang') || navigator.language || defaultLang;
  const lang = saved.startsWith('pt') ? 'pt-BR' : (saved.startsWith('es') ? 'es' : 'en');
  langSelect.value = lang;
  applyTranslations(lang);
  // announce for screen readers
  setTimeout(()=>announcer.textContent = (translations[lang].hero_title || ''), 300);
}

function toggleTheme(force){
  const root = document.documentElement;
  const isLight = root.classList.contains('light');
  const newLight = typeof force === 'boolean' ? force : !isLight;
  if(newLight){
    root.classList.add('light');
    themeToggle.setAttribute('aria-pressed','true');
    themeToggle.title = "Light mode";
  } else {
    root.classList.remove('light');
    themeToggle.setAttribute('aria-pressed','false');
    themeToggle.title = "Dark mode";
  }
  localStorage.setItem('demo_theme', newLight ? 'light' : 'dark');
  announcer.textContent = newLight ? "Light mode enabled" : "Dark mode enabled";
}

// Event listeners
langSelect.addEventListener('change', (e)=>{
  applyTranslations(e.target.value);
});

themeToggle.addEventListener('click', ()=>{
  toggleTheme();
});

// keyboard accessible quick toggles
document.addEventListener('keydown', (e)=>{
  if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k'){
    // quick theme toggle
    e.preventDefault();
    toggleTheme();
  }
});

// init from storage
(function init(){
  // theme
  const savedTheme = localStorage.getItem('demo_theme') || 'dark';
  toggleTheme(savedTheme === 'light');

  // language
  initLanguage();

  // small enhancement: announce focusable cards when focused
  document.querySelectorAll('.plan-card, .category').forEach(el=>{
    el.addEventListener('focus', ()=> {
      const label = el.querySelector('h3')?.textContent || el.getAttribute('aria-label') || 'item';
      announcer.textContent = `${label} focused`;
    });
  });

  // Respect reduced motion preference
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.documentElement.classList.add('reduced-motion');
  }
})();
