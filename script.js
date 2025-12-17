(function () {
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const langBtn = document.getElementById("langBtn");

  // Mobile menu toggle
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("show");
    });

    // Close menu when clicking a link
    mobileNav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => mobileNav.classList.remove("show"));
    });
  }

  // Language toggle (AR/EN)
  let lang = localStorage.getItem("lang") || "ar";
  applyLang(lang);

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      lang = (lang === "ar") ? "en" : "ar";
      localStorage.setItem("lang", lang);
      applyLang(lang);
    });
  }

  function applyLang(current) {
    const html = document.documentElement;

    if (current === "en") {
      html.setAttribute("lang", "en");
      html.setAttribute("dir", "ltr");
      if (langBtn) langBtn.textContent = "AR";
    } else {
      html.setAttribute("lang", "ar");
      html.setAttribute("dir", "rtl");
      if (langBtn) langBtn.textContent = "EN";
    }

    document.querySelectorAll(".t").forEach(el => {
      const ar = el.getAttribute("data-ar");
      const en = el.getAttribute("data-en");
      if (current === "en" && en) el.textContent = en;
      if (current === "ar" && ar) el.textContent = ar;
    });
  }
})();
