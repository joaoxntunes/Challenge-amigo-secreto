let amigos = [];

function adicionarAmigo() { // ajuste 1
  let inputAmigo = document.getElementById("amigo");
  let nomeAmigo = inputAmigo.value;

  if (!nomeAmigo) {
    alert("Digite o nome do amigo");
    return;
  }
  amigos.push(nomeAmigo);
  inputAmigo.value = "";
  inputAmigo.focus(); // ajuste 2
  atualizarlista();
}

function atualizarlista() {
  let listaAmigos = document.getElementById("listaAmigos"); //ajuste 3
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    listaAmigos.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("nenhum amigo adicionado");
    return;
  }
  let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`; //ajuste 4

  let limparLista = document.getElementById("listaAmigos");  //ajuste 5
  limparlista.innerHTML = "";
}