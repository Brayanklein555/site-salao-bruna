window.onload = () => {

  // ABAS
  const buttons = document.querySelectorAll(".menu button");
  const tabs = document.querySelectorAll(".tab");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      tabs.forEach(t => t.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  // PARTÍCULAS
  const p = document.getElementById("particles");
  const pctx = p.getContext("2d");

  function resize() {
    p.width = innerWidth;
    p.height = innerHeight;
  }
  resize();
  window.onresize = resize;

  const particles = Array.from({ length: 150 }, () => ({
    x: Math.random() * p.width,
    y: Math.random() * p.height,
    r: Math.random() * 2 + 1,
    v: Math.random() * 0.5 + 0.2
  }));

  function drawParticles() {
    pctx.clearRect(0,0,p.width,p.height);
    pctx.fillStyle = "gold";

    particles.forEach(pt => {
      pt.y -= pt.v;
      if (pt.y < 0) pt.y = p.height;
      pctx.beginPath();
      pctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
      pctx.fill();
    });

    requestAnimationFrame(drawParticles);
  }
  drawParticles();

  // ONDAS
  const w = document.getElementById("waves");
  const wctx = w.getContext("2d");

  w.width = innerWidth;
  w.height = innerHeight;

  let t = 0;

  function waves() {
    wctx.clearRect(0,0,w.width,w.height);
    wctx.strokeStyle = "rgba(0,100,255,0.4)";
    wctx.lineWidth = 2;

    for (let i = 0; i < 5; i++) {
      wctx.beginPath();
      for (let x = 0; x < w.width; x++) {
        let y = Math.sin(x * 0.01 + t + i) * 30 + i * 120;
        wctx.lineTo(x, y);
      }
      wctx.stroke();
    }

    t += 0.01;
    requestAnimationFrame(waves);
  }
  waves();
};
