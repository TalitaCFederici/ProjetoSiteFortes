
const notificationIcon = document.getElementById('notification-icon');
const acceptButton = document.getElementById('accept-btn');
const declineButton = document.getElementById('decline-btn');
const projectMessage = document.getElementById('project-message');

a
notificationIcon.addEventListener('click', () => {
    alert('Você não tem novas notificações no momento.');
});


acceptButton.addEventListener('click', () => {
    projectMessage.textContent = 'Obrigado por aceitar nossa proposta! Continuaremos a parceria com sucesso!';
    projectMessage.style.color = 'green';
});


declineButton.addEventListener('click', () => {
    projectMessage.textContent = 'Você recusou a proposta. Esperamos trabalhar juntos no futuro!';
    projectMessage.style.color = 'red';
});


const buttons = document.querySelectorAll('.offer-btn');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.2s';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});
