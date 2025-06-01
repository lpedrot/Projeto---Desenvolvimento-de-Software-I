function filtrarProdutos() {
  const input = document.getElementById('pesquisa').value.toLowerCase();
  const produtos = document.querySelectorAll('.produto');

  produtos.forEach(produto => {
    const nome = produto.querySelector('h3').textContent.toLowerCase();
    produto.style.display = nome.includes(input) ? 'block' : 'none';
  });
}