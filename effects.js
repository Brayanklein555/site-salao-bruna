/* ===== Ondas azul escuro ===== */
const canvas = document.getElementById("waves");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let t = 0;

function drawWaves() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#0a1a3a";
  ctx.lineWidth = 2;

  ctx.beginPath();
  for (let x = 0; x < canvas.width; x++) {
    let y = Math.sin(x * 0.01 + t) * 20 + canvas.height / 2;
    ctx.lineTo(x, y);
  }
  ctx.stroke();

  t += 0.02;
  requestAnimationFrame(drawWaves);
}

drawWaves();

/* ===== Partículas douradas ===== */
const pCanvas = document.getElementById("particles");
const pCtx = pCanvas.getContext("2d");

pCanvas.width = window.innerWidth;
pCanvas.height = window.innerHeight;

const particles = [];

for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * pCanvas.width,
    y: Math.random() * pCanvas.height,
    r: Math.random() * 2 + 1,
    vy: Math.random() * 0.5 + 0.2
  });
}

function drawParticles() {
  pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);

  pCtx.fillStyle = "gold";

  particles.forEach(p => {
    p.y -= p.vy;
    if (p.y < 0) p.y = pCanvas.height;

    pCtx.beginPath();
    pCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    pCtx.fill();
  });

  requestAnimationFrame(drawParticles);
}

drawParticles();

/* Responsivo */
window.addEventListener("resize", () => {
  canvas.width = pCanvas.width = window.innerWidth;
  canvas.height = pCanvas.height = window.innerHeight;
});
