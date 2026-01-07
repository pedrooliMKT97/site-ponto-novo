// --- TRAVA DE SEGURANÇA ---
// Garante que o site abra mesmo se a animação travar
setTimeout(() => {
    const loader = document.getElementById('intro-loader');
    if (loader && loader.style.display !== 'none') {
        loader.style.opacity = '0';
        setTimeout(() => { loader.style.display = 'none'; }, 500);
    }
}, 4500);

// --- ANIMAÇÃO DE ENTRADA (ZOOM INFINITO SAINDO DA TELA) ---
window.addEventListener("load", () => {
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline();

        // 1. Aparece o Logo (Fundo Branco)
        tl.to("#intro-logo", {
            duration: 1.2,
            opacity: 1,
            scale: 1,
            ease: "elastic.out(1, 0.5)"
        })
        
        // 2. ZOOM GIGANTE (Efeito: Atravessar o logo)
        .to("#intro-logo", {
            duration: 1.0,
            scale: 60,       // Aumenta 60x para "sair da tela"
            opacity: 0,      // Fica transparente no último instante
            ease: "power3.in",
            delay: 0.2
        })

        // 3. Remove a tela branca
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
        speed: 3000,        // Velocidade suave para letreiro
        autoplay: { 
            delay: 0, 
            disableOnInteraction: false 
        },
        allowTouchMove: false, // Impede arrastar
        slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 }, // Loop funciona bem pq repetimos as marcas no HTML
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