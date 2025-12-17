(function () {
  // Mobile menu
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Language
  const langBtn = document.getElementById("langBtn");
  const html = document.documentElement;

  function setLang(mode) {
    const isEn = mode === "en";
    html.lang = isEn ? "en" : "ar";
    html.dir = isEn ? "ltr" : "rtl";

    document.querySelectorAll("[data-ar][data-en]").forEach(el => {
      el.textContent = isEn ? el.getAttribute("data-en") : el.getAttribute("data-ar");
    });

    // placeholders
    document.querySelectorAll("[data-ar-placeholder][data-en-placeholder]").forEach(el => {
      el.setAttribute("placeholder", isEn ? el.getAttribute("data-en-placeholder") : el.getAttribute("data-ar-placeholder"));
    });

    if (langBtn) langBtn.textContent = isEn ? "AR" : "EN";
    localStorage.setItem("siteLang", mode);
  }

  const saved = localStorage.getItem("siteLang") || "ar";
  setLang(saved);

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const current = localStorage.getItem("siteLang") || "ar";
      setLang(current === "ar" ? "en" : "ar");
    });
  }
})();
