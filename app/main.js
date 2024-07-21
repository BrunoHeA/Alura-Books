let livros = []
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const elementoParaInserirLivros = document.getElementById('livros')

getBuscarLivrosDaApi()

async function getBuscarLivrosDaApi() {
    const res = await fetch(endpointDaApi)
    livros = await res.json()
    console.table(livros)
    exibirLivros(livros)
}

function exibirLivros(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
            <div class="livro">
                <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
                <h2 class="livro__titulo">
                    ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
            </div>
        `
    });
}