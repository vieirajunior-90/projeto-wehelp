function initFaqPerguntas() {
    const $perguntas = document.querySelectorAll('dt');

    $perguntas.forEach(pergunta => {
        pergunta.addEventListener('click', mostrarResposta);
    });

    function mostrarResposta(event) {
        const $resposta = this.nextElementSibling;
        this.classList.toggle('ativo');
        $resposta.classList.toggle('ativo');
    }
}

function initLinksInternos () {
    const $linksInternos = document.querySelectorAll('a[href^="#"]');

    $linksInternos.forEach(link => {
        link.addEventListener('click', scrollParaLink);
    });

    function scrollParaLink(event) {
        event.preventDefault();
        const link = this.getAttribute('href');
        
        window.scrollTo({
            top: document.querySelector(link).offsetTop,
            behavior: 'smooth'
        });
    }
}

initLinksInternos();
initFaqPerguntas();