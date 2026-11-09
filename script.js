const carrinho =[];
function comprar(nome, preco) {
    carrinho.push({ nome, preco });
    atualizaCarrinho();
}
function atualizaCarrinho() {
    // Implementation for updating the shopping cart display
    const lista = document.getElementById('carrinho');
    lista.innerHTML = '';
    carrinho.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        lista.appendChild(itemElement);
    });
}