document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links na barra de navegação
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Previne o comportamento padrão (pular imediatamente)
            e.preventDefault();

            // Pega o ID da seção do atributo href (ex: #about)
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Rola suavemente até a seção
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
