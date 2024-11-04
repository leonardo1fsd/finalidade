function adicionarAoCarrinho(nome, preco) {
    const produtosCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtoExistente = produtosCarrinho.find(p => p.nome === nome);

    if (produtoExistente) {
        produtoExistente.quantidade += 1;
    } else {
        produtosCarrinho.push({ nome, preco, quantidade: 1 });
    }

    localStorage.setItem('carrinho', JSON.stringify(produtosCarrinho));
    alert(`${nome} adicionado ao carrinho!`);
}
