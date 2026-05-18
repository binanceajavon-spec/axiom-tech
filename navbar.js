// ========== NAVBAR AXIOM — FIDÈLE À L'IMAGE ==========

function injectNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    if (!navbarContainer) return;

    navbarContainer.innerHTML = `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link href="https://fonts.googleapis.com/css2?family=Jura:wght@400;500;600;700&display=swap" rel="stylesheet">

        <style>
            :root {
                --nav-h: 72px;
                --black: #000000;
                --black-rgb: 0, 0, 0;
                --drop-bg: #000000;
                --icon-bg: #1e1028;
                --icon-border: rgba(160,60,220,0.3);
                --accent: #b44de0;
                --accent-pink: #e040c8;
                --muted: #7a7a9a;
                --light: #c8c8dc;
                --white: #ffffff;
                --sep: rgba(255,255,255,0.08);
            }

            .axiom-navbar *, .axiom-navbar *::before, .axiom-navbar *::after {
                box-sizing: border-box;
                margin: 0; padding: 0;
            }

            /* ====== BARRE NAV ====== */
            .axiom-navbar {
                position: fixed;
                top: 0; left: 0; right: 0;
                height: var(--nav-h);
                background: #000000;
                border-bottom: 1px solid rgba(20,20,20,0.9); /* Ensure dark gray remains consistent */
                z-index: 1000;
                transition: background 0.4s ease, backdrop-filter 0.4s ease, border-bottom-color 0.4s ease;
            }

            .axiom-navbar.scrolled {
                background: #000000;
                border-bottom: 1px solid rgba(20,20,20,0.9); /* Ensure dark gray remains consistent */
                -webkit-backdrop-filter: blur(65px);
                backdrop-filter: blur(65px);
                opacity: 1.2;
            }

            .navbar-inner {
                max-width: 1440px;
                margin: 0 auto;
                padding: 0 40px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            /* ====== LOGO ====== */
            .navbar-logo {
                display: flex;
                align-items: center;
                text-decoration: none;
                flex-shrink: 0;
            }
            .navbar-logo img {
                height: 38px;
                width: auto;
                display: block;
            }

            /* ====== LIENS NAV ====== */
            .nav-links {
                display: flex;
                align-items: center;
                gap: 0;
                list-style: none;
            }

            .nav-links > li > a {
                display: flex;
                align-items: center;
                gap: 5px;
                padding: 8px 18px;
                font-family: 'Jura', sans-serif;
                font-size: 0.84rem;
                font-weight: 600;
                letter-spacing: 0.01em;
                color: var(--light);
                text-decoration: none;
                border-radius: 6px;
                transition: color 0.2s, background 0.2s;
            }

            .nav-links > li > a:hover { color: var(--white); background: rgba(180,77,224,0.07); }

            .chevron {
                width: 9px; height: 9px;
                stroke: currentColor; fill: none; stroke-width: 2.5;
                transition: transform 0.28s ease;
                opacity: 0.7;
            }
            .has-dropdown.open .chevron { transform: rotate(180deg); opacity: 1; }

            /* ====== BOUTON CONTACT — PILL ROSE/VIOLET ====== */
            .btn-contact {
                padding: 9px 26px;
                background: linear-gradient(135deg, #f070e8 0%, #c040b8 100%);
                color: #fff;
                border: none;
                border-radius: 6px;
                font-family: 'Jura', sans-serif;
                font-size: 0.82rem;
                font-weight: 700;
                letter-spacing: 0.04em;
                cursor: pointer;
                box-shadow: 0 2px 16px rgba(200,64,184,0.3);
                transition: transform 0.2s, box-shadow 0.2s;
                white-space: nowrap;
            }
            .btn-contact:hover {
                transform: translateY(-1px);
                box-shadow: 0 4px 24px rgba(200,64,184,0.5);
            }

            /* ====== HAMBURGER ====== */
            .hamburger {
                display: none;
                flex-direction: column;
                justify-content: space-between;
                width: 24px; height: 16px;
                background: none; border: none;
                cursor: pointer; padding: 0; z-index: 1010;
            }
            .hamburger span {
                width: 100%; height: 2px;
                background: var(--light); border-radius: 2px;
                transition: all 0.27s ease;
            }
            .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
            .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
            .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

            /* ====== DROPDOWN — FOND NOIR AVEC TRANSITION SMOOTH ====== */
            .dropdown-wrapper {
                position: absolute;
                top: var(--nav-h);
                left: 0; right: 0;
                background: #000000;
                border-top: 1px solid rgba(180,77,224,0.12);
                border-bottom: 1px solid rgba(160,60,220,0.15);
                max-height: 0;
                opacity: 0;
                overflow: hidden;
                pointer-events: none;
                transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
                z-index: 999;
            }

            .dropdown-wrapper.open {
                max-height: 520px;
                opacity: 1;
                pointer-events: all;
            }

            /* Panel intérieur : même structure que l'image */
            .dropdown-panel {
                max-width: 1100px;
                margin: 0 auto;
                padding: 40px 48px 44px;
                display: flex;
                align-items: stretch;
                gap: 0;
            }

            /* ---- COLONNE EXPERTISE (gauche) ---- */
            .col-expertise {
                width: 200px;
                flex-shrink: 0;
                padding-right: 40px;
                margin-right: 40px;
                border-right: 1px solid var(--sep);
            }

            .expertise-title {
                font-family: 'Jura', sans-serif;
                font-size: 1.05rem;
                font-weight: 700;
                color: var(--white);
                margin-bottom: 20px;
                letter-spacing: 0.01em;
            }

            .expertise-list {
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 0;
            }

            .expertise-list li {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 7px 8px;
                border-radius: 5px;
                cursor: pointer;
                transition: background 0.18s;
            }
            .expertise-list li:hover { background: rgba(180,77,224,0.08); }
            .expertise-list li:hover .exp-label { color: var(--white); }

            .expertise-list li a {
                display: flex;
                align-items: center;
                gap: 10px;
                text-decoration: none;
                color: inherit;
                width: 100%;
            }

            .exp-dot {
                width: 7px; height: 7px;
                border-radius: 50%;
                background: var(--accent-pink);
                flex-shrink: 0;
                opacity: 0.85;
            }

            .exp-label {
                font-family: 'Jura', sans-serif;
                font-size: 0.85rem;
                font-weight: 500;
                color: var(--muted);
                transition: color 0.18s;
            }

            .expertise-list li.sub { padding-left: 24px; }

            /* ---- GRILLE SERVICES (droite) ---- */
            .col-services {
                flex: 1;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 28px 32px;
                align-content: center;
            }

            .svc-item {
                display: flex;
                align-items: center;
                gap: 18px;
                text-decoration: none;
                padding: 10px;
                border-radius: 8px;
                transition: background 0.2s;
                cursor: pointer;
            }

            .svc-item:hover { background: rgba(180,77,224,0.06); }
            .svc-item:hover .svc-label { color: var(--white); }
            .svc-item:hover .svc-icon { border-color: rgba(180,77,224,0.55); background: #2a1040; }

            .svc-icon {
                width: 56px; height: 56px;
                min-width: 56px;
                background: var(--icon-bg);
                border: 1px solid var(--icon-border);
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                transition: background 0.2s, border-color 0.2s;
            }

            .svc-icon svg {
                width: 26px; height: 26px;
                fill: none;
                stroke: var(--accent);
                stroke-width: 1.5;
                stroke-linecap: round;
                stroke-linejoin: round;
            }

            .svc-label {
                font-family: 'Jura', sans-serif;
                font-size: 0.9rem;
                font-weight: 600;
                color: var(--light);
                line-height: 1.35;
                transition: color 0.2s;
            }

            /* ====== MENU MOBILE ====== */
            .mobile-menu-wrapper {
                position: fixed;
                top: var(--nav-h);
                left: 0; right: 0; bottom: 0;
                background: #000000;
                z-index: 998;
                max-height: 0;
                overflow-y: auto;
                transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                border-top: 1px solid rgba(180,77,224,0.15);
            }
            .mobile-menu-wrapper.open { max-height: calc(100vh - var(--nav-h)); }

            .mobile-menu-container { padding: 16px 24px 52px; }
            .mobile-main-menu { list-style: none; }
            .mobile-menu-item { border-bottom: 1px solid rgba(255,255,255,0.05); }

            .mobile-menu-item a,
            .mobile-menu-link {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 17px 0;
                color: var(--light);
                text-decoration: none;
                font-family: 'Jura', sans-serif;
                font-size: 0.95rem;
                font-weight: 600;
                cursor: pointer;
                transition: color 0.2s;
            }
            .mobile-menu-item a:hover,
            .mobile-menu-link:hover { color: var(--white); }

            .acc-chevron {
                width: 10px; height: 10px;
                stroke: var(--muted);
                fill: none; stroke-width: 2.5;
                transition: transform 0.28s, stroke 0.2s;
                flex-shrink: 0;
            }
            .mobile-menu-item.open .acc-chevron { transform: rotate(180deg); stroke: var(--accent); }

            .mobile-submenu {
                list-style: none;
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .mobile-submenu.open { max-height: 400px; }

            .mobile-submenu li a {
                display: block;
                padding: 12px 0 12px 18px;
                color: var(--muted);
                font-family: 'Jura', sans-serif;
                font-size: 0.87rem;
                font-weight: 500;
                text-decoration: none;
                border-left: 2px solid rgba(180,77,224,0.18);
                margin-left: 4px;
                transition: all 0.18s;
            }
            .mobile-submenu li a:hover { color: var(--accent); border-left-color: var(--accent); padding-left: 24px; }

            .mobile-cta {
                width: 100%; margin-top: 32px; padding: 14px;
                background: linear-gradient(135deg, #f070e8 0%, #c040b8 100%);
                color: #fff; border: none; border-radius: 6px;
                font-family: 'Jura', sans-serif;
                font-size: 0.88rem; font-weight: 700; letter-spacing: 0.04em;
                cursor: pointer;
                box-shadow: 0 4px 20px rgba(200,64,184,0.28);
                transition: opacity 0.2s, transform 0.2s;
            }
            .mobile-cta:active { opacity: 0.85; transform: scale(0.98); }

            @media (max-width: 767px) {
                .hamburger { display: flex; }
                .nav-links, .btn-contact, .dropdown-wrapper { display: none; }
            }
            @media (min-width: 768px) {
                .mobile-menu-wrapper { display: none; }
            }
        </style>

        <!-- ===== NAVBAR ===== -->
        <header class="axiom-navbar" id="axiomNavbar">
            <div class="navbar-inner">

                <!-- Logo -->
                <a href="index.html" class="navbar-logo">
                    <img src="images/logo.png" alt="Axiom">
                </a>

                <!-- Liens desktop -->
                <ul class="nav-links">
                    <li class="has-dropdown" id="servicesNav">
                        <a href="#" id="servicesToggle">
                            Services
                            <svg class="chevron" viewBox="0 0 10 10"><polyline points="2,3 5,7 8,3"/></svg>
                        </a>
                    </li>
                    <li><a href="business.html">Business</a></li>
                    <li><a href="about.html">À propos</a></li>
                    <li><a href="media.html">Media</a></li>
                </ul>

                <!-- CTA -->
                <button class="btn-contact" onclick="window.location.href='contact.html'">Contact</button>

                <!-- Hamburger -->
                <button class="hamburger" id="hamburgerBtn" aria-label="Menu">
                    <span></span><span></span><span></span>
                </button>
            </div>

            <!-- ===== DROPDOWN ===== -->
            <div class="dropdown-wrapper" id="dropdown">
                <div class="dropdown-panel">

                    <!-- Expertise (gauche) - LIENS ACTIFS VERS LES PAGES -->
                    <div class="col-expertise">
                        <div class="expertise-title">Expertise</div>
                        <ul class="expertise-list">
                            <li><a href="expertise-ecommerce.html"><span class="exp-dot"></span><span class="exp-label">E-commerce</span></a></li>
                            <li><a href="expertise-immobilier.html"><span class="exp-dot"></span><span class="exp-label">Immobilier</span></a></li>
                            <li><a href="expertise-education.html"><span class="exp-dot"></span><span class="exp-label">Education</span></a></li>
                            <li><a href="expertise-hoteliere.html"><span class="exp-dot"></span><span class="exp-label">Hotelerie</span></a></li>
                            <li class="sub"><a href="expertise-pme.html"><span class="exp-dot"></span><span class="exp-label">PME</span></a></li>
                        </ul>
                    </div>

                    <!-- Services (droite) -->
                    <div class="col-services">

                        <a href="it.html" class="svc-item">
                            <div class="svc-icon">
                                <svg viewBox="0 0 24 24">
                                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                                </svg>
                            </div>
                            <span class="svc-label">IT Consulting</span>
                        </a>

                        <a href="marketing.html" class="svc-item">
                            <div class="svc-icon">
                                <svg viewBox="0 0 24 24">
                                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                                    <line x1="8" y1="21" x2="16" y2="21"/>
                                    <line x1="12" y1="17" x2="12" y2="21"/>
                                </svg>
                            </div>
                            <span class="svc-label">Marketing et Stratégie</span>
                        </a>

                        <a href="ingenierie.html" class="svc-item">
                            <div class="svc-icon">
                                <svg viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                    <path d="M2 17l10 5 10-5"/>
                                    <path d="M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <span class="svc-label">Ingénierie Logiciel</span>
                        </a>

                        <a href="solution.html" class="svc-item">
                            <div class="svc-icon">
                                <svg viewBox="0 0 24 24">
                                    <rect x="9" y="3" width="6" height="4" rx="1"/>
                                    <rect x="2" y="17" width="6" height="4" rx="1"/>
                                    <rect x="16" y="17" width="6" height="4" rx="1"/>
                                    <line x1="12" y1="7" x2="12" y2="12"/>
                                    <line x1="12" y1="12" x2="5" y2="17"/>
                                    <line x1="12" y1="12" x2="19" y2="17"/>
                                </svg>
                            </div>
                            <span class="svc-label">Solution Entreprise</span>
                        </a>

                        <a href="ia.html" class="svc-item">
                            <div class="svc-icon">
                                <svg viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="3"/>
                                    <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
                                    <path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07"/>
                                </svg>
                            </div>
                            <span class="svc-label">Cloud et IA</span>
                        </a>

                        <a href="data.html" class="svc-item">
                            <div class="svc-icon">
                                <svg viewBox="0 0 24 24">
                                    <line x1="18" y1="20" x2="18" y2="10"/>
                                    <line x1="12" y1="20" x2="12" y2="4"/>
                                    <line x1="6" y1="20" x2="6" y2="14"/>
                                    <line x1="2" y1="20" x2="22" y2="20"/>
                                </svg>
                            </div>
                            <span class="svc-label">Data Analyse</span>
                        </a>

                    </div>
                </div>
            </div>
        </header>

        <!-- ===== MENU MOBILE ===== -->
        <div class="mobile-menu-wrapper" id="mobileMenuWrapper">
            <div class="mobile-menu-container">
                <ul class="mobile-main-menu">
                    <li class="mobile-menu-item" id="mobileServicesItem">
                        <div class="mobile-menu-link">
                            <span>Services</span>
                            <svg class="acc-chevron" viewBox="0 0 10 10"><polyline points="2,3 5,7 8,3"/></svg>
                        </div>
                        <ul class="mobile-submenu" id="mobileServicesSubmenu">
                            <li><a href="it.html">IT Consulting</a></li>
                            <li><a href="marketing.html">Marketing et Stratégie</a></li>
                            <li><a href="ingenierie.html">Ingénierie Logiciel</a></li>
                            <li><a href="solution.html">Solution Entreprise</a></li>
                            <li><a href="ia.html">Cloud et IA</a></li>
                            <li><a href="data.html">Data Analyse</a></li>
                        </ul>
                    </li>
                    <li class="mobile-menu-item"><a href="business.html">Business</a></li>
                    <li class="mobile-menu-item"><a href="about.html">À propos</a></li>
                    <li class="mobile-menu-item"><a href="media.html">Media</a></li>
                    <li class="mobile-menu-item" id="mobileExpertiseItem">
                        <div class="mobile-menu-link">
                            <span>Expertise</span>
                            <svg class="acc-chevron" viewBox="0 0 10 10"><polyline points="2,3 5,7 8,3"/></svg>
                        </div>
                        <ul class="mobile-submenu" id="mobileExpertiseSubmenu">
                            <li><a href="expertise-ecommerce.html">E-commerce</a></li>
                            <li><a href="expertise-immobilier.html">Immobilier</a></li>
                            <li><a href="expertise-education.html">Education</a></li>
                            <li><a href="expertise-hoteliere.html">Hotelerie</a></li>
                            <li><a href="expertise-pme.html">PME</a></li>
                        </ul>
                    </li>
                </ul>
                <button class="mobile-cta" onclick="window.location.href='contact.html'">Contact</button>
            </div>
        </div>
    `;

    initNavbarScripts();
}

function initNavbarScripts() {
    const servicesNav   = document.getElementById('servicesNav');
    const servicesToggle = document.getElementById('servicesToggle');
    const dropdown      = document.getElementById('dropdown');
    const hamburgerBtn  = document.getElementById('hamburgerBtn');
    const mobileMenu    = document.getElementById('mobileMenuWrapper');
    let dropOpen = false, mobOpen = false;

    // Dropdown desktop avec animations smooth
    if (servicesToggle && dropdown) {
        servicesToggle.addEventListener('click', function(e) {
            e.preventDefault(); e.stopPropagation();
            
            if (dropOpen) {
                dropdown.classList.remove('open');
                servicesNav.classList.remove('open');
                dropOpen = false;
            } else {
                dropdown.classList.add('open');
                servicesNav.classList.add('open');
                dropOpen = true;
            }
        });
        
        document.addEventListener('click', function(e) {
            if (dropOpen && !dropdown.contains(e.target) && !servicesNav.contains(e.target)) {
                dropdown.classList.remove('open');
                servicesNav.classList.remove('open');
                dropOpen = false;
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (dropOpen && e.key === 'Escape') {
                dropdown.classList.remove('open');
                servicesNav.classList.remove('open');
                dropOpen = false;
            }
        });
    }

    // Menu mobile
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            mobOpen = !mobOpen;
            mobileMenu.classList.toggle('open', mobOpen);
            hamburgerBtn.classList.toggle('open', mobOpen);
            document.body.style.overflow = mobOpen ? 'hidden' : '';
        });
    }

    // Accordéon Services mobile
    const mSvcItem = document.getElementById('mobileServicesItem');
    const mSvcSub  = document.getElementById('mobileServicesSubmenu');
    if (mSvcItem && mSvcSub) {
        mSvcItem.querySelector('.mobile-menu-link').addEventListener('click', function(e) {
            e.preventDefault(); e.stopPropagation();
            mSvcItem.classList.toggle('open');
            mSvcSub.classList.toggle('open');
        });
    }

    // Accordéon Expertise mobile
    const mExpItem = document.getElementById('mobileExpertiseItem');
    const mExpSub  = document.getElementById('mobileExpertiseSubmenu');
    if (mExpItem && mExpSub) {
        mExpItem.querySelector('.mobile-menu-link').addEventListener('click', function(e) {
            e.preventDefault(); e.stopPropagation();
            mExpItem.classList.toggle('open');
            mExpSub.classList.toggle('open');
        });
    }

    // Fermer mobile au clic lien
    document.querySelectorAll('.mobile-submenu li a, .mobile-menu-item > a, .mobile-cta').forEach(el => {
        el.addEventListener('click', function() {
            if (!mobOpen) return;
            mobOpen = false;
            mobileMenu.classList.remove('open');
            hamburgerBtn.classList.remove('open');
            document.body.style.overflow = '';
            if (mSvcItem) { mSvcItem.classList.remove('open'); mSvcSub.classList.remove('open'); }
            if (mExpItem) { mExpItem.classList.remove('open'); mExpSub.classList.remove('open'); }
        });
    });

    // Effet scroll - flou sans transparence totale
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('axiomNavbar');
        if (nav) {
            if (window.scrollY > 40) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
    }, { passive: true });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNavbar);
} else {
    injectNavbar();
}
