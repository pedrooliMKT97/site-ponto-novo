setTimeout(() => {
    const loader = document.getElementById('intro-loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => { loader.style.display = 'none'; }, 500);
    }
}, 4500);

window.addEventListener("load", () => {
    // GSAP Intro
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline();
        tl.to("#intro-logo", { duration: 1, opacity: 1, scale: 1, ease: "elastic.out(1, 0.5)" })
          .to("#intro-logo", { duration: 0.8, scale: 50, opacity: 0, ease: "power3.in", delay: 0.3 })
          .to("#intro-loader", { duration: 0.5, opacity: 0, display: "none", ease: "power1.out" }, "-=0.4");
    }

    // ScrollReveal
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom', distance: '30px', duration: 1000, delay: 200, reset: false 
        });
        sr.reveal('.hero-section', { delay: 400 });
        sr.reveal('.promo-layout', { delay: 200 });
        sr.reveal('.section-header', { delay: 100 });
        sr.reveal('.brands-section', { delay: 200 });
        sr.reveal('.locations-list', { delay: 100 });
    }
});

if (typeof Swiper !== 'undefined') {
    new Swiper('.swiper-hero', {
        loop: true, speed: 1000, effect: 'fade',
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
    });

    new Swiper('.swiper-brands', {
        loop: true, speed: 3000,
        autoplay: { delay: 0, disableOnInteraction: false },
        allowTouchMove: false, slidesPerView: 2, spaceBetween: 30,
        breakpoints: {
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
        }
    });
}

const hamburger = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');
if(hamburger && navLinks){
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const spans = hamburger.querySelectorAll('span');
        if(navLinks.classList.contains('active')){
            spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
            spans[1].style.opacity = "0";
            spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
        } else {
            spans[0].style.transform = "none";
            spans[1].style.opacity = "1";
            spans[2].style.transform = "none";
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtn = document.getElementById('whatsapp-toggle');
    const whatsappPopup = document.getElementById('whatsapp-popup');
    const closePopup = document.getElementById('close-popup');
    
    if(whatsappBtn && whatsappPopup) {
        whatsappBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            whatsappPopup.classList.toggle('active');
        });
        if(closePopup) closePopup.addEventListener('click', (e) => {
            e.stopPropagation();
            whatsappPopup.classList.remove('active');
        });
        document.addEventListener('click', (e) => {
            if(whatsappPopup.classList.contains('active') && !whatsappPopup.contains(e.target) && !whatsappBtn.contains(e.target)) {
                whatsappPopup.classList.remove('active');
            }
        });
    }

    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    if(cookieBanner && !localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => cookieBanner.classList.add('show'), 2500);
    }
    if(acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            cookieBanner.classList.remove('show');
            localStorage.setItem('cookiesAccepted', 'true');
        });
    }
});
