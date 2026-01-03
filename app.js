
const servicos = {
 "Manicure tradicional":35,
 "Pedicure":35,
 "Manicure + Pedicure":70,
 "Alongamento em gel":140,
 "Alongamento em fibra":170,
 "Alongamento express":100,
 "Banho em gel":100,
 "Manutenção":90,
 "Esmaltação em gel":60
};

const servicoSelect = document.getElementById('servico');
Object.keys(servicos).forEach(s=>{
 let o=document.createElement('option');
 o.value=s;o.textContent=s;
 servicoSelect.appendChild(o);
});

function openTab(id){
 document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
 document.getElementById(id).classList.add('active');
}

async function pagarEAgrendar(){
 const nome=document.getElementById('nome').value;
 const servico=servicoSelect.value;
 const data=document.getElementById('data').value;
 const valor=servicos[servico];

 const doc=await db.collection('agendamentos').add({
  nome,servico,data,valor,status:'aguardando pagamento',
  criadoEm:firebase.firestore.FieldValue.serverTimestamp()
 });

 const res=await fetch('/criarPagamento',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({agendamentoId:doc.id,valor,servico})
 });
 const session=await res.json();
 stripe.redirectToCheckout({sessionId:session.id});
}

function login(){
 const email=document.getElementById('email').value;
 const senha=document.getElementById('senha').value;
 auth.signInWithEmailAndPassword(email,senha)
 .then(()=>alert('Acesso autorizado'))
 .catch(()=>alert('Acesso negado'));
}

function recuperar(){
 const email=document.getElementById('email').value;
 auth.sendPasswordResetEmail(email);
 alert('Email enviado');
}
