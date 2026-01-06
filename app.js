const tabs = document.querySelectorAll(".menu a");
const sections = document.querySelectorAll(".tab");
const menu = document.querySelector(".menu");
const toggle = document.querySelector(".menu-toggle");

toggle.onclick = () => menu.classList.toggle("show");

tabs.forEach(tab => {
  tab.onclick = () => {
    tabs.forEach(t => t.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");

    menu.classList.remove("show");
  };
});
