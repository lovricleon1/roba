// Inicijalizacija animacija
AOS.init();

// PRELOADER LOGIKA
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000);
    }, 1500); 
});

// PROMJENA JEZIKA
function changeLang(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent.toLowerCase() === lang) btn.classList.add('active');
    });
}

// NAV SCROLL EFEKT
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('py-4', 'shadow-lg');
        nav.classList.remove('py-6');
    } else {
        nav.classList.add('py-6');
        nav.classList.remove('py-4', 'shadow-lg');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('heroVideo');
    if (video) {
        video.play().catch(function(error) {
            console.log("Video autoplay was prevented. User interaction might be needed.");
        });
    }
});

const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

// Otvori meni
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.classList.add('no-scroll');
});

// Zatvori meni na X
menuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

// Zatvori meni kad klikneš na neki link (npr. Fleet)
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});
