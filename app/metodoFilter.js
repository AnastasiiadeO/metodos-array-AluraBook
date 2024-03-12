const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id); //para pegar id do botao que clicamos
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirOsLivrosNaTela(livrosFiltrados); // Exibe os novos livros filtrados
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveis(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveis(valorTotal) {
    elementoCOmValorTotalDeLivrosDesponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}


// const listaAluno = [
//     { nome: "João", nota: 8 },
//     { nome: "Maria", nota: 9 },
//     { nome: "Pedro", nota: 7 },
//     { nome: "Ana", nota: 9 },
//     { nome: "Lucas", nota: 8 },
//   ];
  
//   listaAluno.sort((a, b) => {
//     if (b.nota === a.nota) {
//       return a.nome.localeCompare(b.nome);
//     }
//     return b.nota - a.nota;
//   });
  
//   console.log(listaAluno);