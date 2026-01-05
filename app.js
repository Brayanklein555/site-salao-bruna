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
const p = document.getElementById("particles");
const pctx = p.getContext("2d");
p.width = innerWidth;
p.height = innerHeight;

let golds = Array.from({length: 90}, () => ({
  x: Math.random() * p.width,
  y: Math.random() * p.height,
  r: Math.random() * 2 + 1,
  v: Math.random() * 0.6 + 0.2
}));

function particles() {
  pctx.clearRect(0,0,p.width,p.height);
  golds.forEach(g => {
    g.y -= g.v;
    if (g.y < 0) g.y = p.height;
    pctx.fillStyle = "rgba(255,215,0,0.8)";
    pctx.beginPath();
    pctx.arc(g.x, g.y, g.r, 0, Math.PI*2);
    pctx.fill();
  });
  requestAnimationFrame(particles);
}
particles();

/* ONDAS AZUIS MÚLTIPLAS */
const w = document.getElementById("waves");
const wctx = w.getContext("2d");
w.width = innerWidth;
w.height = innerHeight;

let t = 0;
function waves() {
  wctx.clearRect(0,0,w.width,w.height);

  for (let i = 0; i < 4; i++) {
    wctx.beginPath();
    wctx.strokeStyle = `rgba(120,200,255,${0.15 + i*0.05})`;
    wctx.lineWidth = 2;

    for (let x = 0; x < w.width; x += 15) {
      let y = Math.sin(x * 0.01 + t + i) * 20 + (w.height / 2) + i * 40;
      wctx.lineTo(x, y);
    }
    wctx.stroke();
  }

  t += 0.02;
  requestAnimationFrame(waves);
}
waves();
