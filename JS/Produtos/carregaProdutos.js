async function carregarProdutos() {
  try {
    const response = await fetch('/JS/Produtos/produtos.json');
    if (!response.ok) throw new Error('Erro ao buscar o JSON: ' + response.status);

    const produtos = await response.json();

    const container = document.getElementById('produtos-container');
    container.innerHTML = '';

    produtos.forEach(({ imagem, alt, nome, preco, parcelamento, frete }) => {
      const div = document.createElement('div');
      div.classList.add('produto');

      div.innerHTML = `
        <img src="${imagem}" alt="${alt}">
        <h3>${nome}</h3>
        <p>Por: ${preco}</p>
        <p>${parcelamento}</p>
        <p>${frete}</p>
        <br>
        <button type="button" onclick="alert('Disponível em breve')">Comprar</button>
      `;

      container.appendChild(div);
    });
  } catch (error) {
    console.error('Erro ao carregar produtos:', error);
  }
}

window.addEventListener('DOMContentLoaded', carregarProdutos);
