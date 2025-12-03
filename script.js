document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Lógica do Efeito de Digitação ---
    const textElement = document.querySelector('.typing-text');
    const textToType = "studying...";
    let index = 0;
    let isDeleting = false;
    let speed = 150;

    function typeWriter() {
        let currentText = textToType.substring(0, index);
        textElement.textContent = currentText;

        if (!isDeleting) {
            // Modo de Digitação
            index++;
            if (index > textToType.length) {
                isDeleting = true;
                speed = 1000; // Pausa após digitar
            }
        } else {
            // Modo de Apagamento
            index--;
            speed = 70; // Velocidade de apagamento

            if (index === 0) {
                isDeleting = false;
                speed = 500; // Pausa após apagar
            }
        }

        setTimeout(typeWriter, speed);
    }

    // Inicia o efeito
    typeWriter();


    // --- 2. Lógica da Rolagem Suave (Mantida) ---
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
