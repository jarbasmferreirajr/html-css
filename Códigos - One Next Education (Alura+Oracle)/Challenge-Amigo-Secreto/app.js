//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar nomes à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const lista = document.getElementById("listaAmigos");
    const nome = input.value.trim();

    if (nome !== "") {
        amigos.push(nome);

        // Atualiza a lista visível
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);

        // Limpa o campo de entrada
        input.value = "";
    } else {
        alert("Por favor, insira um nome válido!");
    }
}

// Função para sortear apenas um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione pelo menos um nome.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa o resultado anterior

    // Exibe o nome sorteado
    const item = document.createElement("li");
    item.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(item);
}