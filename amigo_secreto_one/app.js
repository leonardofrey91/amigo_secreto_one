let amigos = [];
let sorteados = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "" || !isNaN(nome)) {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = ""; // Limpar o campo após adicionar
}

function atualizarLista() {
    const lista = document.getElementById("ListaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo + (index < amigos.length - 1 ? "," : "");
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de participantes está vazia.");
        return;
    }

    if (amigos.length <= 2) {
        alert("Para realizar o sorteio, é preciso ter três amigos ou mais.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    sorteados.push(amigoSorteado);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "O amigo secreto é: " + amigoSorteado;

    sorteados = [];
}
