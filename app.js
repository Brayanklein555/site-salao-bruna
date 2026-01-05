/* ABAS */
document.querySelectorAll(".menu a").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".menu a").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

/* PARTÍCULAS DOURADAS */
const pCanvas = document.getElementById("particles");
const pCtx = pCanvas.getContext("2d");
pCanvas.width = innerWidth;
pCanvas.height = innerHeight;

let particles = Array.from({ length: 60 }, () => ({
  x: Math.random() * pCanvas.width,
  y: Math.random() * pCanvas.height,
  r: Math.random() * 2 + 1,
  v: Math.random() * 0.5 + 0.2
}));

function particlesAnim() {
  pCtx.clearRect(0,0,pCanvas.width,pCanvas.height);
  particles.forEach(p => {
    p.y -= p.v;
    if (p.y < 0) p.y = pCanvas.height;
    pCtx.fillStyle = "rgba(255,215,0,0.7)";
    pCtx.beginPath();
    pCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    pCtx.fill();
  });
  requestAnimationFrame(particlesAnim);
}
particlesAnim();

/* ONDAS AZUIS */
const wCanvas = document.getElementById("waves");
const wCtx = wCanvas.getContext("2d");
wCanvas.width = innerWidth;
wCanvas.height = innerHeight;

let t = 0;
function waves() {
  wCtx.clearRect(0,0,wCanvas.width,wCanvas.height);
  wCtx.strokeStyle = "rgba(100,180,255,0.3)";
  wCtx.lineWidth = 2;
  wCtx.beginPath();

  for (let x = 0; x < wCanvas.width; x += 20) {
    let y = Math.sin(x * 0.01 + t) * 20 + wCanvas.height / 2;
    wCtx.lineTo(x, y);
  }

  wCtx.stroke();
  t += 0.02;
  requestAnimationFrame(waves);
}
waves();
