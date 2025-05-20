document.addEventListener('DOMContentLoaded', function () {
    let parallaxSections = document.querySelectorAll('.parallax');

    window.addEventListener('scroll', function () {
        parallaxSections.forEach(function (section) {
            let yScrollPosition = window.pageYOffset;
            section.style.backgroundPositionY = -yScrollPosition * 0.2 + 'px'; // Ajuste o fator conforme necessário
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let parallaxSections = document.querySelectorAll('.projects-paralax');

    window.addEventListener('scroll', function () {
        parallaxSections.forEach(function (section) {
            let yScrollPosition = window.pageYOffset;
            section.style.backgroundPositionY = -yScrollPosition * 0.02 + 'px'; // Ajuste o fator conforme necessário
        });
    });
});
