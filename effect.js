/* ONDAS */
const w = document.getElementById("waves");
const wctx = w.getContext("2d");

function resize() {
  w.width = innerWidth;
  w.height = innerHeight;
}
resize();
addEventListener("resize", resize);

let t = 0;
function waves() {
  wctx.clearRect(0,0,w.width,w.height);
  wctx.strokeStyle = "#0a3a7a";
  wctx.lineWidth = 1;

  for(let i=0;i<12;i++){
    wctx.beginPath();
    for(let x=0;x<w.width;x++){
      let y = Math.sin(x*0.01 + t + i)*20 + i*80;
      wctx.lineTo(x,y);
    }
    wctx.stroke();
  }

  t += 0.02;
  requestAnimationFrame(waves);
}
waves();

/* PARTÍCULAS */
const p = document.getElementById("particles");
const pctx = p.getContext("2d");
p.width = innerWidth;
p.height = innerHeight;

const dots = Array.from({length:120}, () => ({
  x: Math.random()*p.width,
  y: Math.random()*p.height,
  r: Math.random()*2+1,
  v: Math.random()*0.4+0.2
}));

function particles(){
  pctx.clearRect(0,0,p.width,p.height);
  pctx.fillStyle = "gold";

  dots.forEach(d=>{
    d.y -= d.v;
    if(d.y<0) d.y=p.height;
    pctx.beginPath();
    pctx.arc(d.x,d.y,d.r,0,Math.PI*2);
    pctx.fill();
  });

  requestAnimationFrame(particles);
}
particles();
