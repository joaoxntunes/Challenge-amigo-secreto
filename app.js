let amigos = [];

function adicionarAmigo() {
  let inputAmigo = document.getElementById("amigo");
  let nomeAmigo = inputAmigo.value.trim();

  if (!nomeAmigo) {
    alert("Digite o nome do amigo");
    return;
  }

  amigos.push(nomeAmigo);
  inputAmigo.value = "";
  inputAmigo.focus();
  atualizarlista();
}

function atualizarlista() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    listaAmigos.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Nenhum amigo adicionado");
    return;
  }

  let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`;

  let limparLista = document.getElementById("listaAmigos");
  limparLista.innerHTML = "";
}

// Para resetar o sorteio

function resetarSorteio() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    alert("Resetado!");
}