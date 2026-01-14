// --- TRAVA DE SEGURANÇA ---
setTimeout(() => {
    const loader = document.getElementById('intro-loader');
    if (loader && loader.style.display !== 'none') {
        loader.style.opacity = '0';
        setTimeout(() => { loader.style.display = 'none'; }, 500);
    }
}, 4500);

// --- ANIMAÇÃO DE ENTRADA (ZOOM INFINITO) ---
window.addEventListener("load", () => {
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline();

        tl.to("#intro-logo", {
            duration: 1.2,
            opacity: 1,
            scale: 1,
            ease: "elastic.out(1, 0.5)"
        })
        .to("#intro-logo", {
            duration: 1.0,
            scale: 60,       
            opacity: 0,      
            ease: "power3.in",
            delay: 0.2
        })
        .to("#intro-loader", {
            duration: 0.4,
            opacity: 0,
            display: "none",
            ease: "power1.out"
        }, "-=0.4");
    }
});

// --- CARROSSEL HERO (SWIPER) ---
if (typeof Swiper !== 'undefined') {
    const swiperHero = new Swiper('.swiper-hero', {
        loop: true,
        speed: 800,
        effect: 'fade',
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
    });

    // --- CARROSSEL MARCAS (LOOP CONTINUO) ---
    const swiperBrands = new Swiper('.swiper-brands', {
        loop: true,
        speed: 3000,        
        autoplay: { delay: 0, disableOnInteraction: false },
        allowTouchMove: false,
        slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
        }
    });
}

// --- MENU MOBILE ---
const hamburger = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });
}

// --- WHATSAPP LOGICA (CORRIGIDA COM DOMContentLoaded) ---
document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtn = document.getElementById('whatsapp-toggle');
    const whatsappPopup = document.getElementById('whatsapp-popup');
    const closePopupBtn = document.getElementById('close-popup');

    if (whatsappBtn && whatsappPopup) {
        whatsappBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            whatsappPopup.classList.toggle('active');
        });

        if (closePopupBtn) {
            closePopupBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                whatsappPopup.classList.remove('active');
            });
        }

        document.addEventListener('click', (e) => {
            if (whatsappPopup.classList.contains('active')) {
                if (!whatsappPopup.contains(e.target) && !whatsappBtn.contains(e.target)) {
                    whatsappPopup.classList.remove('active');
                }
            }
        });
    }

    // --- AVISO DE COOKIES ---
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    if (cookieBanner && !localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 2000);
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            cookieBanner.classList.remove('show');
            localStorage.setItem('cookiesAccepted', 'true');
        });
    }
});
