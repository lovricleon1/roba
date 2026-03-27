@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Poppins:wght@200;300;400;600&display=swap');

:root {
    --gold: #c6a066;
}

body {
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
}

.serif { font-family: 'Playfair Display', serif; }
.text-gold { color: var(--gold); }

/* GOLD TEXT SHIMMER (Za Logo) */
.gold-text-shimmer {
    background: linear-gradient(to right, #c6a066 20%, #ffffff 40%, #ffffff 60%, #c6a066 80%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 3s linear infinite;
}

@keyframes shine {
    to { background-position: 200% center; }
}

/* GUMB */
.gold-btn {
    background: linear-gradient(135deg, #c6a066 0%, #b38c52 100%);
    color: white !important;
    padding: 18px 45px;
    border-radius: 50px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-size: 14px;
    transition: all 0.4s ease;
    display: inline-block;
}

.gold-btn:hover {
    transform: translateY(-3px);
    filter: brightness(1.1);
    box-shadow: 0 15px 30px rgba(198, 160, 102, 0.4);
}

/* PARALLAX ZA DUBROVNIK */
.dubrovnik-parallax {
    background-image: url('https://images.unsplash.com/photo-1559416523-140ddc3d238c?q=80&w=2500');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

/* NAV LINKOVI */
/* Navigacijski linkovi na crnoj pozadini */
.nav-link {
    color: #ffffff; /* Čista bijela */
    transition: 0.3s;
    font-weight: 500;
    opacity: 0.8;
}

.nav-link:hover {
    color: var(--gold);
    opacity: 1;
    letter-spacing: 0.1em;
}

/* Prilagodba scrollovanja (kad kreneš dolje) */
.nav-scrolled {
    background: rgba(0, 0, 0, 0.95) !important; /* Duboka crna s malo prozirnosti */
    padding: 12px 60px !important;
    backdrop-filter: blur(15px);
    border-bottom: 1px solid rgba(255, 215, 0, 0.2); /* Tanki zlatni rub na dnu */
}

/* Language tipke na crnom */
.lang-btn {
    opacity: 0.5;
    color: white;
    font-weight: bold;
}
.lang-btn.active {
    opacity: 1;
    color: var(--gold);
}

/* LANG BTN */
.lang-btn { opacity: 0.4; font-weight: bold; transition: 0.3s; }
.lang-btn.active { opacity: 1; color: var(--gold); }

/* RESPONSIVE PARALLAX */
@media (max-width: 768px) {
    .dubrovnik-parallax { background-attachment: scroll; }
}

/* Pojačavamo sjenu na karticama flote za dubinu */
#fleet .relative {
    box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.9);
}

/* Shimmer efekt na podnaslovima */
.shimmer-gold {
    background: linear-gradient(135deg, #c6a066 0%, #ffffff 50%, #c6a066 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 5s linear infinite;
}

/* --- MOBILE OPTIMIZACIJA --- */

@media (max-width: 768px) {
    /* 1. Smanjujemo ogromne naslove da stanu na ekran mobitela */
    h1 {
        font-size: 55px !important; /* Hero naslov na mobitelu */
        line-height: 1.1 !important;
    }
    
    h2 {
        font-size: 42px !important; /* Naslovi sekcija */
        line-height: 1.2 !important;
    }

    h3 {
        letter-spacing: 0.2em !important;
    }

    /* 2. Smanjujemo razmake između sekcija da ne skrolaš vječno */
    section {
        padding-top: 80px !important;
        padding-bottom: 80px !important;
    }

    /* 3. Tekst o nama - smanjujemo font da bude čitljiv ali ne prevelik */
    #about p, #fleet p {
        font-size: 18px !important;
        line-height: 1.6 !important;
    }

    /* 4. Navigacija na mobitelu (da logo ne bude prevelik) */
    nav {
        padding: 15px 20px !important;
    }
    
    .logo-container span:first-child {
        font-size: 24px !important;
    }

    /* 5. Flota - osiguravamo da slike budu jedna ispod druge i pune širine */
    .grid {
        gap: 40px !important;
    }

    img, video {
        border-radius: 12px !important; /* Zaobljeni rubovi za moderniji izgled na mobu */
    }

    /* 6. Parallax efekt na mobitelu zna "štekati", pa ga fiksiramo */
    .dubrovnik-parallax {
        background-attachment: scroll !important;
        padding: 120px 20px !important;
    }

    /* 7. WhatsApp gumb - malo ga smanjujemo da ne smeta prstima */
    footer a[href*="wa.me"] {
        width: 65px !important;
        height: 65px !important;
        bottom: 20px !important;
        right: 20px !important;
        font-size: 35px !important;
    }

    /* 8. Hero gumbi - jedan ispod drugog na malim ekranima */
    #home .flex {
        flex-direction: column !important;
        gap: 15px !important;
    }
    
    .gold-btn {
        width: 100% !important;
        padding: 15px 0 !important;
        text-align: center;
    }
}

/* Mobile Menu Animation */
#mobile-menu.active {
    transform: translateX(0);
}

.mobile-nav-link {
    transition: 0.3s;
    letter-spacing: 0.1em;
}

.mobile-nav-link:hover {
    color: var(--gold);
}

/* Osiguraj da se body ne skrola kad je meni otvoren */
.no-scroll {
    overflow: hidden;
}
