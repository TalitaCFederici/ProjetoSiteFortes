document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada com sucesso!');
  });

// Ação do clique no botão de upload
const uploadButton = document.querySelector('.upload');
const fileInput = document.querySelector('.file-input');

// Aciona o clique no input de arquivo quando o botão é clicado
uploadButton.addEventListener('click', function() {
    fileInput.click();
});

// Lida com a seleção de arquivos
fileInput.addEventListener('change', function() {
    const file = fileInput.files[0];
    if (file) {
        alert(`Arquivo selecionado: ${file.name}`);
    } else {
        alert('Nenhum arquivo selecionado.');
    }
});
