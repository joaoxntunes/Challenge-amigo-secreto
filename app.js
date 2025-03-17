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
  limparLista.innerHTML = "";  // Corrigido: usar a variável correta
}

function resetarSorteio() {
  let resultado = document.getElementById("resultado");
  resultado.textContent = "";
  amigos = [];
  atualizarlista();  // Corrigido: chamada da função correta
  alert("Novo sorteio!");
}

// Adiciona evento ao botão resetar
document.getElementById("botaoResetar").addEventListener("click", resetarSorteio);
