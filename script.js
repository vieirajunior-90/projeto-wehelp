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

function initScrolAnimacao () {
    const $sections = document.querySelectorAll('.js-scroll');

    if ($sections.length) {
        window.addEventListener('scroll', scrollToSection);

        function scrollToSection(event) {
            $sections.forEach(section => {
                const $top60 = window.innerHeight * 0.6;
                const $sectionTop = section.getBoundingClientRect().top;
                const $isSectionVisible = ($sectionTop - $top60) < 0;
                if ($isSectionVisible) {
                    section.classList.add('ativo');
                }
            });
        }
    }
}

const $botaoMenu = document.querySelector('.botao-menu');

$botaoMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    const $menu = document.querySelector('nav');
    const $h1Title = document.querySelector('.sobre h1');
    $menu.classList.toggle('ativo');


    if ($menu.classList.contains('ativo')) {
        $h1Title.classList.add('ativo');
    } else{
        $h1Title.classList.remove('ativo');
    }
}


initLinksInternos();
initFaqPerguntas();
initScrolAnimacao();