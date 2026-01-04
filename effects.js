const w=document.getElementById("bg-waves");
const wc=w.getContext("2d");
function rs(){w.width=innerWidth;w.height=innerHeight}
rs();onresize=rs;
let t=0;
(function draw(){
 wc.clearRect(0,0,w.width,w.height);
 for(let i=0;i<6;i++){
  wc.beginPath();
  wc.strokeStyle="rgba(10,40,120,.6)";
  for(let x=0;x<w.width;x++){
    wc.lineTo(x,w.height/2+Math.sin(x*.01+t+i)*60+i*25);
  }
  wc.stroke();
 }
 t+=.01;
 requestAnimationFrame(draw);
})();

const p=document.getElementById("gold-particles");
const pc=p.getContext("2d");
p.width=innerWidth;p.height=innerHeight;
const pts=[...Array(60)].map(()=>({x:Math.random()*p.width,y:Math.random()*p.height,r:Math.random()*2+1,v:Math.random()+.2}));
(function part(){
 pc.clearRect(0,0,p.width,p.height);
 pts.forEach(o=>{
  pc.beginPath();
  pc.fillStyle="rgba(255,215,0,.8)";
  pc.arc(o.x,o.y,o.r,0,Math.PI*2);
  pc.fill();
  o.y-=o.v;if(o.y<0)o.y=p.height;
 });
 requestAnimationFrame(part);
})();
