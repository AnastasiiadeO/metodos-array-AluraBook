let livros = [];
//pegamos dados do API experno
const endPointDaAti = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI ();


async function getBuscarLivrosDaAPI () {
    const res = await fetch(endPointDaAti);
    //utilizamos para conseguirmos manipular as funções e essas requisições com HTTP esses APIs do fetch
    livros = await res.json();
    //a resposta dessa requisição queremos que seja transformada em json()
    //console.table(livros); //mostra tabela de dados
    let livrosComDecronto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDecronto);
}



