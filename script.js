window.onload = function () {
    var div = document.getElementById('preload');
    preload(div, 50);
};

function preload(el, interval) {
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            el.style.display = 'none';
            el.className = '';
        }
        el.style.opacity = op;
        op -= op * 0.1;
    }, interval);
}

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

window.addEventListener('scroll', function () {
    animeScroll();
})