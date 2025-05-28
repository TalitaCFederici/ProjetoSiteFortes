
    // Validação de Formulário
    const offerBtn = document.querySelector('.offer-btn');
    offerBtn.addEventListener('click', function (event) {
        const timeSelect = document.getElementById('project-select');
        const projectSelect = document.getElementById('project-select-2');
        
        // Verifica se o tempo de vigência e o projeto foram selecionados
        if (!timeSelect.value || !projectSelect.value) {
            alert('Por favor, preencha todos os campos obrigatórios!');
            event.preventDefault();  // Impede o envio se a validação falhar
        } else {
            alert('Formulário enviado com sucesso!');
        }
    });

    // Função para mostrar o nome do arquivo quando o usuário fizer o upload
    const fileInput = document.querySelector('.drag-drop-area');
    fileInput.addEventListener('click', function () {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.pdf'; // Aceitar somente arquivos PDF
        fileInput.style.display = 'none';
        
        fileInput.addEventListener('change', function () {
            const fileName = fileInput.files[0].name;
            const fileLabel = document.createElement('p');
            fileLabel.textContent = `Arquivo selecionado: ${fileName}`;
            fileInput.parentElement.appendChild(fileLabel);
        });
        
        fileInput.click();
    });

    // Alterando o comportamento do select
    const timeSelect = document.getElementById('project-select');
    const projectSelect = document.getElementById('project-select-2');

    // Atualizando a descrição com base na seleção do tempo de vigência
    timeSelect.addEventListener('change', function () {
        const selectedTime = timeSelect.options[timeSelect.selectedIndex].text;
        const messageBox = document.querySelector('.message-box p');
        messageBox.textContent = `Você selecionou o tempo de vigência: ${selectedTime}`;
    });

    // Atualizando o projeto selecionado
    projectSelect.addEventListener('change', function () {
        const selectedProject = projectSelect.options[projectSelect.selectedIndex].text;
        const messageBox = document.querySelector('.message-box p');
        messageBox.textContent = `Você selecionou o projeto: ${selectedProject}`;
    });

