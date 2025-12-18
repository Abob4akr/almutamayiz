// Mobile menu toggle
function toggleMenu(){
  const mm = document.getElementById("mobileMenu");
  if(!mm) return;
  mm.classList.toggle("open");
}

// Language toggle (AR/EN)
let currentLang = "ar";
function setLang(lang){
  currentLang = lang;

  // Change direction
  if(lang === "en"){
    document.documentElement.lang = "en";
    document.documentElement.dir  = "ltr";
  }else{
    document.documentElement.lang = "ar";
    document.documentElement.dir  = "rtl";
  }

  // Replace all elements with data-ar / data-en
  document.querySelectorAll("[data-ar]").forEach(el=>{
    el.textContent = (lang==="en") ? (el.getAttribute("data-en") || el.textContent) : el.getAttribute("data-ar");
  });

  // Update lang button
  const btn = document.getElementById("langBtn");
  if(btn) btn.textContent = (lang==="en") ? "AR" : "EN";
}

function toggleLang(){
  setLang(currentLang === "ar" ? "en" : "ar");
}

// Contact form -> WhatsApp send
function sendQuoteToWhatsApp(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const note = document.getElementById("note").value.trim();

  const msg =
`طلب تسعيرة - شركة المتميز الحديث
Name: ${name}
Phone: ${phone}
Email: ${email}
Request: ${note}`;

  const url = "https://wa.me/218923167702?text=" + encodeURIComponent(msg);
  window.open(url, "_blank");
}
