import produto from "./produtos.js";

console.log("sistema gerenciador de brinquedos");
console.log("Lista geral de brinquedos:");
console.log(produto.todosProdutos());
console.log(`Brinquedos acima de 100R$: ${produto.valorProdutos()}`);
console.log(`Quantidade total de brinquedos: ${produto.totalProdutos()}`);
console.log(`produtos produzidos pela matel: ${produto.valorMatel()}`);
console.log(`valor total do estoque: R$ ${produto.valorTotalProdutos()}`);