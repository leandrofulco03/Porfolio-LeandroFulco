// SCROLL REVEAL
window.sr = ScrollReveal();

sr.reveal('.banner', {
    duration: 3000,
    origin: 'top'
});
sr.reveal('.about', {
    duration: 3000,
    origin: 'top'
});
sr.reveal('.skills', {
    duration: 3000,
    origin: 'top'
})
sr.reveal('.projects', {
    duration: 3000,
    origin: 'top'
})
sr.reveal('.contact', {
    duration: 3000,
    origin: 'top'
})


// Dark Mode
const toggleBtn = document.getElementById('bdark');
const body = document.querySelector('body');
const article = document.querySelectorAll('.article_light');
const navToggle = document.querySelector('.toggles');
const toggleOn = document.getElementById('toggleOn');
const langBtn = document.querySelector('.lang_btn')

function darkmode() {
    body.classList.toggle('dark_mode');
    for (const elem of article) {
        elem.classList.toggle('article_dark');
        elem.classList.remove('article_light');
    }
}

toggleBtn.addEventListener('click', e => {
    toggleBtn.classList.toggle('fa-toggle-on');
    let val = body.classList.toggle('dark_mode');
    localStorage.setItem('bdark', val)
});

let valor = localStorage.getItem('bdark');

if (valor == 'true') {
    body.classList.add('dark_mode');
    toggleBtn.classList.toggle('fa-toggle-on');
} else {
    body.classList.remove('dark_mode');
}
