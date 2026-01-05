/* ===== MENU MOBILE ===== */
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});

/* ===== MENU SCROLL ===== */
window.addEventListener("scroll", () => {
  document
    .querySelector(".header")
    .classList.toggle("scrolled", window.scrollY > 50);
});

/* ===== LINK ATIVO ===== */
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    const top = sec.offsetTop - 150;
    if (scrollY >= top) current = sec.id;
  });

  links.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});

/* ===== BOTÃO WHATSAPP ===== */
const wa = document.createElement("a");
wa.href = "https://wa.me/5511912889819";
wa.target = "_blank";
wa.className = "whatsapp-float";
wa.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/733/733585.png">`;
document.body.appendChild(wa);
