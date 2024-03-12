//aplicando desconto em cada um preco

function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDecronto = livros.map (livro => {
        return {...livro, preco: livro.preco-(livro.preco*desconto)} //Vamos utilizar um operador especial do JavaScript que é ...livro. Quando colocamos as reticências ... e escrevoemos livro, ele vai fazer uma cópia de todo o nosso array, ou do nosso objeto existente, para outro objeto, com esse spread operator, operator com JavaScript e eu vou alterar o preço dele.
    })
    return(livrosComDecronto);
}