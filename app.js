function mostrarAba(id) {
  document.querySelectorAll('.aba').forEach(a => a.classList.remove('ativa'));
  document.getElementById(id).classList.add('ativa');
}

/* SERVIÇOS */
const servicos = [
  { nome: "Manicure", preco: 35 },
  { nome: "Pedicure", preco: 35 },
  { nome: "Manicure + Pedicure", preco: 70 },
  { nome: "Alongamento em Gel", preco: 140 },
  { nome: "Alongamento em Fibra", preco: 170 },
  { nome: "Alongamento Express", preco: 100 },
  { nome: "Banho em Gel", preco: 100 },
  { nome: "Manutenção", preco: 90 },
  { nome: "Esmaltação em Gel", preco: 60 }
];

const select = document.getElementById("servico");
const lista = document.getElementById("lista-servicos");

servicos.forEach(s => {
  select.innerHTML += `<option>${s.nome}</option>`;
  lista.innerHTML += `<p>${s.nome} — R$ ${s.preco}</p>`;
});

/* AGENDAMENTO */
function agendar() {
  const nome = document.getElementById("nome").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  const servico = document.getElementById("servico").value;

  if (!nome || !data || !hora) {
    msg.innerText = "Preencha todos os campos";
    return;
  }

  db.collection("agendamentos").add({
    nome,
    data,
    hora,
    servico,
    criadoEm: new Date()
  });

  msg.innerText = "Agendamento confirmado!";
}

/* LOGIN ADM */
function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  auth.signInWithEmailAndPassword(email, senha)
    .then(() => alert("Login realizado"))
    .catch(err => alert(err.message));
}
