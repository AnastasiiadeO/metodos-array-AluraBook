//exebindo livros na tela

const elementoParaInserirLivro = document.getElementById('livros');
const elementoCOmValorTotalDeLivrosDesponiveis = document.getElementById ('valor_total_livros_disponiveis');

function exibirOsLivrosNaTela(listadelivros) {
    elementoCOmValorTotalDeLivrosDesponiveis.innerHTML = "";
    elementoParaInserirLivro.innerHTML = ""; // Limpa o conteúdo anterior
    listadelivros.forEach(livro => {
        // let disponibilidade = verDisponibilidadeLivro(livro); jeito classico

        let disponibilidade = livro.quantidade > 0 ? 'livros__imagens' : 'livros__imagens indisponivel'; //jeito mais facil
        elementoParaInserirLivro.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })
}

    // function verDisponibilidadeLivro(livro) {  jeito classico
    //     if (livro.quantidade > 0){
    //         return 'livros__imagens'
    //     }else{
    //         return 'livros__imagens indisponivel'
    //     }
    // }