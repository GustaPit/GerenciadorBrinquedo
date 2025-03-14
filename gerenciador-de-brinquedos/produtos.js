const produtos = [

    {"código": 1, "nome": "Detetive","preco": 299.99,"estoque": 25, "fornecedor": "Estrela"},
    {"código": 2, "nome": "uno", "preco": 9.99, "estoque": 70, "fornecedor": "Uno"},
    {"código": 4, "nome": "Maxstell","preco": 200.00,"estoque": 40, "fornecedor": "Matel"},
    {"código": 5, "nome": "Barbie","preco": 190.00,"estoque": 30, "fornecedor": "Matel"},
    {"código": 6, "nome": "Pokemonbox","preco": 50.00,"estoque": 90, "fornecedor": "BandaiNanco"},
    {"código": 7, "nome": "Playmobil","preco": 100.99,"estoque": 10, "fornecedor": "Matel"},
    {"código": 8, "nome": "Nerf Twopistol","preco": 89.98,"estoque": 75, "fornecedor": "Nerf"},
    {"código": 9, "nome": "Lego batman","preco": 60.50,"estoque": 50, "fornecedor": "Lego"},
    {"código": 10, "nome": "Four cars run","preco": 19.99,"estoque": 80, "fornecedor": "Hotwells"},
    
];

function todosProdutos() {
    return produtos;
}
function valorProdutos() {
    return produtos.filter(produto => produto.preco >= 100.00).map(produto => produto.nome);
}

function valorMatel() {
    const produtosMatel = (produtos.filter(produto => produto.fornecedor === "Matel"))
    return produtosMatel.length
}

function totalProdutos() {
    return produtos.reduce((total, produto) => total + produto.estoque, 0)
}

function valorTotalProdutos() {
    return (produtos.reduce((total, produto) => total + (produto.estoque * produto.preco), 0)).toFixed(2)
}

export default {
    todosProdutos,
    valorProdutos,
    totalProdutos,
    valorMatel,
    valorTotalProdutos,
    produtos
};

