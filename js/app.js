// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionar() {
    // Obter o elemento de entrada do nome do amigo
    let amigoInput = document.getElementById('nome-amigo');
    // Converter o nome do amigo para letras minúsculas
    let nomeAmigo = amigoInput.value.toLowerCase();

    // Verificar se o campo de entrada do nome está vazio
    if (nomeAmigo === '') {
        alert('Informe o nome do amigo!');
        return;
    }

    // Verificar se o nome já foi adicionado à lista
    if (amigos.includes(nomeAmigo)) {
        alert('Nome já adicionado!');
        return;
    }

    // Adicionar o nome do amigo ao array
    amigos.push(nomeAmigo);

    // Atualizar a lista de amigos exibida na tela
    atualizarListaAmigos(nomeAmigo);

    // Limpar o campo de entrada do nome do amigo
    amigoInput.value = '';
}

// Função para atualizar a lista de amigos exibida na tela
function atualizarListaAmigos(nomeAmigo) {
    let listaAmigos = document.getElementById('lista-amigos');
    let listaConteudo = listaAmigos.textContent;

    // Adicionar o nome do amigo à lista exibida na tela
    if (listaConteudo === '') {
        listaAmigos.textContent = nomeAmigo;
    } else {
        listaAmigos.textContent = listaConteudo + ', ' + nomeAmigo;
    }
}

// Função para sortear os amigos
function sortear() {
    // Verificar se há pelo menos 4 participantes na lista de amigos
    if (amigos.length < 4){
        alert('Adicione ao menos 4 participantes!');
        return;
    }

    // Embaralhar a lista de amigos
    embaralha(amigos);

    // Exibir o resultado do sorteio
    exibirResultadoSorteio();
}

// Função para exibir o resultado do sorteio
function exibirResultadoSorteio() {
    let sorteio = document.getElementById('lista-sorteio');

    // Iterar sobre os amigos para mostrar os resultados do sorteio
    for (let i = 0; i < amigos.length; i++) {
        let amigoAtual = amigos[i];
        let amigoSorteado;

        // Se for o último amigo, sortear com o primeiro amigo da lista
        if (i === amigos.length - 1) {
            amigoSorteado = amigos[0];
        } else {    
            // Senão, sortear com o próximo amigo na lista
            amigoSorteado = amigos[i + 1];
        }

        // Exibir o resultado do sorteio
        sorteio.innerHTML += `${amigoAtual} --> ${amigoSorteado}<br>`;
    }
}

// Função para embaralhar a lista de amigos
function embaralha(amigos) {
    // Iterar sobre a lista de amigos (do último ao primeiro)
    for (let indice = amigos.length - 1; indice > 0; indice--) {
        // Gerar um índice aleatório dentro do intervalo válido
        const indiceAleatorio = Math.floor(Math.random() * (indice + 1));

        // Trocar os elementos de posição na lista
        [amigos[indice], amigos[indiceAleatorio]] = [amigos[indiceAleatorio], amigos[indice]];
    }
}

// Função para reiniciar o sorteio
function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
