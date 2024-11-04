document.addEventListener('DOMContentLoaded', function () {
    const carrinhoContainer = document.getElementById('carrinho');
    const valorTotal = document.getElementById('valor-total');

    const produtosCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let total = 0;

    produtosCarrinho.forEach(produto => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <h4>${produto.nome} (x${produto.quantidade})</h4>
            <span class="preco">R$ ${(produto.preco * produto.quantidade).toFixed(2)}</span>
            <button onclick="removerItem('${produto.nome}')">Remover</button>
        `;
        carrinhoContainer.appendChild(itemDiv);
        total += produto.preco * produto.quantidade;
    });

    valorTotal.innerText = `R$ ${total.toFixed(2)}`;
});

function removerItem(nome) {
    const produtosCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtosAtualizados = produtosCarrinho.filter(produto => produto.nome !== nome);
    localStorage.setItem('carrinho', JSON.stringify(produtosAtualizados));
    window.location.reload();
}


