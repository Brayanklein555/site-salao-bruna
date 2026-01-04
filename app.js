function mostrarAba(id){
  document.querySelectorAll('.aba').forEach(a=>a.classList.remove('ativa'));
  document.getElementById(id).classList.add('ativa');
}

const servicos=[
 {n:"Manicure",p:35},
 {n:"Pedicure",p:35},
 {n:"Manicure + Pedicure",p:70},
 {n:"Alongamento Gel",p:140},
 {n:"Fibra",p:170},
 {n:"Express",p:100},
 {n:"Banho em Gel",p:100},
 {n:"Manutenção",p:90},
 {n:"Esmaltação Gel",p:60}
];

const select=document.getElementById("servico");
const lista=document.getElementById("lista-servicos");

servicos.forEach(s=>{
 select.innerHTML+=`<option>${s.n}</option>`;
 lista.innerHTML+=`<p>${s.n} — R$ ${s.p}</p>`;
});

function agendar(){
 const nome=nome.value;
 if(!nome||!data.value||!hora.value){
   msg.innerText="Preencha todos os campos";
   return;
 }
 db.collection("agendamentos").add({
   nome,data:data.value,hora:hora.value,servico:servico.value,
   criado:new Date()
 });
 msg.innerText="Agendamento confirmado!";
}

function login(){
 auth.signInWithEmailAndPassword(email.value,senha.value)
  .then(()=>alert("Login realizado"))
  .catch(e=>alert(e.message));
}
