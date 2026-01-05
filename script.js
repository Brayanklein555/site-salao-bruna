document.addEventListener("DOMContentLoaded", () => {

  /* ===== MENU EM ABAS ===== */
  const links = document.querySelectorAll(".menu a");
  const tabs = document.querySelectorAll(".tab");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      links.forEach(l => l.classList.remove("active"));
      tabs.forEach(t => t.classList.remove("active"));

      link.classList.add("active");

      const alvo = document.getElementById(link.dataset.tab);
      if (alvo) alvo.classList.add("active");
    });
  });

  /* ===== PARTÍCULAS DOURADAS ===== */
  const p = document.getElementById("particles");
  const ctxP = p.getContext("2d");

  function resizeParticles() {
    p.width = window.innerWidth;
    p.height = window.innerHeight;
  }

  resizeParticles();
  window.addEventListener("resize", resizeParticles);

  const particles = Array.from({ length: 90 }, () => ({
    x: Math.random() * p.width,
    y: Math.random() * p.height,
    r: Math.random() * 2 + 1,
    v: Math.random() * 0.6 + 0.2
  }));

  function drawParticles() {
    ctxP.clearRect(0, 0, p.width, p.height);
    ctxP.fillStyle = "rgba(255,215,0,0.9)";

    particles.forEach(pt => {
      ctxP.beginPath();
      ctxP.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
      ctxP.fill();

      pt.y -= pt.v;
      if (pt.y < 0) {
        pt.y = p.height;
        pt.x = Math.random() * p.width;
      }
    });

    requestAnimationFrame(drawParticles);
  }

  drawParticles();

  /* ===== ONDAS AZUIS ===== */
  const w = document.getElementById("waves");
  const ctxW = w.getContext("2d");

  function resizeWaves() {
    w.width = window.innerWidth;
    w.height = window.innerHeight;
  }

  resizeWaves();
  window.addEventListener("resize", resizeWaves);

  let t = 0;

  function drawWaves() {
    ctxW.clearRect(0, 0, w.width, w.height);
    ctxW.strokeStyle = "rgba(0,150,255,0.35)";
    ctxW.lineWidth = 2;

    ctxW.beginPath();
    for (let x = 0; x < w.width; x++) {
      const y =
        Math.sin(x * 0.01 + t) * 25 +
        Math.sin(x * 0.02 + t * 1.5) * 10 +
        w.height / 2;

      ctxW.lineTo(x, y);
    }
    ctxW.stroke();

    t += 0.02;
    requestAnimationFrame(drawWaves);
  }

  drawWaves();
});
