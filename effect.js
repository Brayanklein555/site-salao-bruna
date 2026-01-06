// ONDAS AZUIS
const wave = document.getElementById("waves");
const wctx = wave.getContext("2d");

function resize() {
  wave.width = innerWidth;
  wave.height = innerHeight;
}
resize();
addEventListener("resize", resize);

let t = 0;
function drawWaves() {
  wctx.clearRect(0,0,wave.width,wave.height);
  wctx.strokeStyle = "rgba(0,120,255,0.25)";
  wctx.lineWidth = 2;

  for(let y=0;y<wave.height;y+=60){
    wctx.beginPath();
    for(let x=0;x<wave.width;x+=10){
      const dy = Math.sin(x*0.01 + t + y)*10;
      wctx.lineTo(x,y+dy);
    }
    wctx.stroke();
  }
  t+=0.01;
  requestAnimationFrame(drawWaves);
}
drawWaves();

// PARTÍCULAS DOURADAS
const part = document.getElementById("particles");
const pctx = part.getContext("2d");
resize();

let particles = Array.from({length:70},()=>({
  x:Math.random()*part.width,
  y:Math.random()*part.height,
  r:Math.random()*2+1,
  s:Math.random()*0.5+0.2
}));

function drawParticles(){
  pctx.clearRect(0,0,part.width,part.height);
  pctx.fillStyle="rgba(255,215,0,.7)";
  particles.forEach(p=>{
    p.y -= p.s;
    if(p.y<0) p.y=part.height;
    pctx.beginPath();
    pctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    pctx.fill();
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();
