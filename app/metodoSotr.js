let btnOrdinarPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdinarPreco.addEventListener('click', ordenarLivrosPreco);

function ordenarLivrosPreco() {
    let livrosOrdenados = livros.sort((a,b) => a.preco -b.preco); //fincao para sort ordinar pelos numeros e nao pelo psicao de unicod
    exibirOsLivrosNaTela(livrosOrdenados);
}