// ============================
// Mobile menu
// ============================
function openMenu() {
  document.getElementById("mobileNav").style.display = "block";
}
function closeMenu() {
  document.getElementById("mobileNav").style.display = "none";
}

// close menu when clicking outside panel
document.addEventListener("click", (e) => {
  const nav = document.getElementById("mobileNav");
  if (!nav || nav.style.display !== "block") return;
  if (e.target.id === "mobileNav") closeMenu();
});

// ============================
// Language toggle (AR / EN)
// ============================
let currentLang = localStorage.getItem("lang") || "ar";

const dict = {
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    cats: "الأقسام",
    contact: "اتصل بنا",
    price: "اطلب تسعيرة",
    backHome: "رجوع للرئيسية",
    featured: "أبرز المنتجات",
    note: "بدّل الأسماء والصور حسب المتوفر عندك.",
  },
  en: {
    home: "Home",
    about: "About",
    cats: "Categories",
    contact: "Contact",
    price: "Request Quote",
    backHome: "Back to Home",
    featured: "Featured Products",
    note: "Replace names & images based on what you have.",
  }
};

function applyLang(lang){
  currentLang = lang;
  localStorage.setItem("lang", lang);

  // direction
  document.documentElement.lang = (lang === "ar") ? "ar" : "en";
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  // translate any element with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if (dict[lang] && dict[lang][key]) el.textContent = dict[lang][key];
  });

  // update lang button text
  const btn = document.getElementById("langBtn");
  if (btn) btn.textContent = (lang === "ar") ? "EN" : "AR";
}

function toggleLang(){
  applyLang(currentLang === "ar" ? "en" : "ar");
}

document.addEventListener("DOMContentLoaded", ()=>{
  applyLang(currentLang);
});
