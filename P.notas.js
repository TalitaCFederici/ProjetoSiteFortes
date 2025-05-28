// Simula a funcionalidade de download
document.querySelectorAll('.btn-download').forEach(button => {
    button.addEventListener('click', () => {
        alert('Download iniciado!');
    });
});

// Formulário de envio de notas
document.querySelector('.envios form').addEventListener('submit', event => {
    event.preventDefault();
    alert('Nota enviada com sucesso!');
});

// Referência ao campo de pesquisa e à lista de notas
const searchBar = document.getElementById('search-bar');
const listaNotas = document.getElementById('lista-notas');

// Evento de input para filtrar os projetos
searchBar.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase(); // Termo de pesquisa em letras minúsculas
    const projetos = listaNotas.querySelectorAll('.nota'); // Seleciona todos os projetos

    projetos.forEach(projeto => {
        const nomeProjeto = projeto.querySelector('.nome-projeto').textContent.toLowerCase(); // Nome do projeto em letras minúsculas
        // Exibe ou oculta o projeto com base no termo de pesquisa
        if (nomeProjeto.includes(searchTerm)) {
            projeto.style.display = 'flex'; // Exibe o projeto
        } else {
            projeto.style.display = 'none'; // Oculta o projeto
        }
    });
});

