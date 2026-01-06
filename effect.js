// ABAS
const links = document.querySelectorAll(".menu a");
const tabs = document.querySelectorAll(".tab");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    tabs.forEach(t => t.classList.remove("active"));

    link.classList.add("active");
    document.getElementById(link.dataset.tab).classList.add("active");
  });
});

// PARTÍCULAS DOURADAS
const pCanvas = document.getElementById("particles");
const pCtx = pCanvas.getContext("2d");

pCanvas.width = innerWidth;
pCanvas.height = innerHeight;

let particles = Array.from({ length: 120 }, () => ({
  x: Math.random() * pCanvas.width,
  y: Math.random() * pCanvas.height,
  r: Math.random() * 2 + 1,
  vy: Math.random() * 0.6 + 0.2
}));

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

// ONDAS
const wCanvas = document.getElementById("waves");
const wCtx = wCanvas.getContext("2d");

wCanvas.width = innerWidth;
wCanvas.height = innerHeight;

let t = 0;

function drawWaves() {
  wCtx.clearRect(0,0,wCanvas.width,wCanvas.height);
  wCtx.strokeStyle = "rgba(0,120,255,0.4)";
  wCtx.lineWidth = 2;

  for(let i=0;i<5;i++){
    wCtx.beginPath();
    for(let x=0;x<wCanvas.width;x++){
      let y = Math.sin(x*0.01 + t + i)*30 + (i*120);
      wCtx.lineTo(x,y);
    }
    wCtx.stroke();
  }
  t += 0.01;
  requestAnimationFrame(drawWaves);
}
drawWaves();
