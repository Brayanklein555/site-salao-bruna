/* =========================
   CANVAS ONDAS
========================= */
const waveCanvas = document.getElementById("waves");
const wctx = waveCanvas.getContext("2d");

function resizeWave() {
  waveCanvas.width = window.innerWidth;
  waveCanvas.height = window.innerHeight;
}
resizeWave();
window.addEventListener("resize", resizeWave);

let waveTime = 0;

function drawWaves() {
  wctx.clearRect(0, 0, waveCanvas.width, waveCanvas.height);

  for (let i = 0; i < 7; i++) {
    wctx.beginPath();
    for (let x = 0; x <= waveCanvas.width; x += 10) {
      let y =
        waveCanvas.height / 2 +
        Math.sin((x * 0.01) + waveTime + i) * (30 + i * 8) +
        (i - 3) * 70;

      wctx.lineTo(x, y);
    }

    wctx.strokeStyle = "rgba(40,120,255,0.25)";
    wctx.lineWidth = 1.5;
    wctx.stroke();
  }

  waveTime += 0.01;
  requestAnimationFrame(drawWaves);
}

drawWaves();

/* =========================
   PARTÍCULAS DOURADAS
========================= */
const particleCanvas = document.getElementById("particles");
const pctx = particleCanvas.getContext("2d");

function resizeParticles() {
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;
}
resizeParticles();
window.addEventListener("resize", resizeParticles);

const particles = [];
const TOTAL = 140;

for (let i = 0; i < TOTAL; i++) {
  particles.push({
    x: Math.random() * particleCanvas.width,
    y: Math.random() * particleCanvas.height,
    size: Math.random() * 2 + 1,
    speedY: Math.random() * 0.4 + 0.2,
    alpha: Math.random()
  });
}

function drawParticles() {
  pctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

  particles.forEach(p => {
    pctx.beginPath();
    pctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    pctx.fillStyle = `rgba(255,215,100,${p.alpha})`;
    pctx.fill();

    p.y -= p.speedY;
    if (p.y < 0) {
      p.y = particleCanvas.height;
      p.x = Math.random() * particleCanvas.width;
    }
  });

  requestAnimationFrame(drawParticles);
}

drawParticles();
