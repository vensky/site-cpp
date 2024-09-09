'use strict';

const initScrollProf = () => {
    const btn = document.querySelector('.hero__button');
    const link = document.querySelector('.nav__link--prof');
    const section = document.querySelector('#prof');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (section !== null) section.scrollIntoView({ behavior: "smooth" })
    });

    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (section !== null) section.scrollIntoView({ behavior: "smooth" })
    });
}

const initScrollFooter = () => {
    const btn = document.querySelector('.nav__link--footer');
    const section = document.querySelector('#footer');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (section !== null) section.scrollIntoView({ behavior: "smooth" })
    });
}

initScrollProf();
initScrollFooter();
