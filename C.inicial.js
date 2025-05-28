document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar ul li a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            // Remove a classe 'active' de todos os links
            navLinks.forEach((link) => link.classList.remove("active"));

            // Adiciona a classe 'active' ao link clicado
            event.target.classList.add("active");

            // Redireciona para a página do link clicado
            const targetPage = event.target.getAttribute("href"); // Obtém o valor do atributo href
            if (targetPage) {
                window.location.href = targetPage; // Redireciona para o link
            }
        });
    });
});


