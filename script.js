/* ===== ABAS ===== */
const links = document.querySelectorAll(".menu a");
const tabs = document.querySelectorAll(".tab");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    links.forEach(l => l.classList.remove("active"));
    tabs.forEach(t => t.classList.remove("active"));

    link.classList.add("active");
    document.getElementById(link.dataset.tab).classList.add("active");
  });
});

/* ===== PARTÍCULAS DOURADAS ===== */
const p = document.getElementById("particles");
const ctxP = p.getContext("2d");

function resize() {
  p.width = innerWidth;
  p.height = innerHeight;
}
resize();
addEventListener("resize", resize);

let particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * p.width,
  y: Math.random() * p.height,
  r: Math.random() * 2 + 1,
  v: Math.random() * 0.5 + 0.2
}));

function drawParticles() {
  ctxP.clearRect(0,0,p.width,p.height);
  ctxP.fillStyle = "gold";
  particles.forEach(pt => {
    ctxP.beginPath();
    ctxP.arc(pt.x, pt.y, pt.r, 0, Math.PI*2);
    ctxP.fill();
    pt.y -= pt.v;
    if (pt.y < 0) pt.y = p.height;
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();

/* ===== ONDAS AZUIS ===== */
const w = document.getElementById("waves");
const ctxW = w.getContext("2d");

function drawWave(t) {
  w.width = innerWidth;
  w.height = innerHeight;
  ctxW.clearRect(0,0,w.width,w.height);
  ctxW.strokeStyle = "rgba(0,150,255,0.25)";
  ctxW.lineWidth = 2;
  ctxW.beginPath();
  for (let x = 0; x < w.width; x++) {
    let y = Math.sin(x * 0.01 + t * 0.002) * 20 + w.height / 2;
    ctxW.lineTo(x, y);
  }
  ctxW.stroke();
  requestAnimationFrame(() => drawWave(t+1));
}
drawWave(0);
