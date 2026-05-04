// ============================================================
//  AXIOM — Assistant Virtuel Premium v2.0
//  Design cohérent avec la charte graphique AXIOM (dark + violet)
// ============================================================

// ─── 1. BASE DE CONNAISSANCES ENRICHIE ───────────────────────

const knowledgeBase = [

  // ── Accueil / présentation générale ──
  {
    keywords: ["bonjour", "salut", "hello", "bonsoir", "coucou", "hey"],
    response: "Bonjour ! Ravi de vous accueillir chez AXIOM. Je suis votre assistant virtuel et je suis là pour répondre à toutes vos questions — services, tarifs, contact ou processus de collaboration. Par où souhaitez-vous commencer ?"
  },
  {
    keywords: ["qui êtes-vous", "qui es-tu", "c'est quoi axiom", "qu'est-ce qu'axiom", "présente-toi", "parle-moi d'axiom", "axiom c'est quoi", "axiom est"],
    response: "AXIOM est une entreprise spécialisée dans la transformation digitale des organisations. Nous intervenons sur 6 pôles d'expertise : IT Consulting, Marketing & Stratégie, Ingénierie Logicielle, Solution Entreprise, IA & Technologie, et Data Analyse. Notre mission : réinventer votre entreprise grâce à des solutions technologiques sur mesure, innovantes et durables."
  },

  // ── Services / Expertises ──
  {
    keywords: ["service", "expertise", "proposez", "offrez", "que faites-vous", "que fait axiom", "domaines", "activités", "prestations", "liste des services"],
    response: "AXIOM vous propose 6 expertises complémentaires pour accélérer votre transformation digitale :\n\n 01 — IT Consulting\n 02 — Marketing et Stratégie\n 03 — Ingénierie Logicielle\n 04 — Solution Entreprise\n 05 — IA et Technologie (Cloud & IA)\n 06 — Data Analyse\n\nChaque expertise est pensée pour s'adapter précisément à vos enjeux. Laquelle vous intéresse ?"
  },

  // ── IT Consulting ──
  {
    keywords: ["it consulting", "informatique", "infrastructure", "conseil it", "conseil informatique", "système", "réseau", "technologique", "transformation it"],
    response: "Notre pôle IT Consulting accompagne les entreprises dans la définition et la mise en œuvre de stratégies informatiques innovantes. Cela inclut l'audit de votre infrastructure existante, l'optimisation de vos processus technologiques, la migration vers des architectures modernes et le pilotage de vos projets IT de bout en bout. L'objectif : une infrastructure performante, sécurisée et alignée sur vos objectifs métier."
  },

  // ── Marketing et Stratégie ──
  {
    keywords: ["marketing", "stratégie", "strategie", "campagne", "attirer", "convertir", "branding", "communication", "visibilité", "leads", "acquisition", "digital marketing", "pub", "publicité"],
    response: "Notre équipe Marketing & Stratégie conçoit des campagnes intégrées et data-driven adaptées à votre secteur. Nous intervenons sur la stratégie de marque, l'acquisition de leads, les campagnes digitales (SEO, SEA, réseaux sociaux), le contenu et la fidélisation client. L'idée : attirer les bons prospects, les engager avec les bons messages, et les convertir en clients durables."
  },

  // ── Ingénierie Logicielle ──
  {
    keywords: ["logiciel", "ingénierie", "ingenierie", "développement", "developpement", "application", "web", "mobile", "code", "plateforme", "api", "architecture logicielle", "scalable", "robuste", "dev"],
    response: "Notre pôle Ingénierie Logicielle conçoit des solutions techniques robustes et scalables, des architectures complexes aux applications web et mobiles haute performance. Nous intervenons sur l'ensemble du cycle de développement : conception, développement, tests, déploiement et maintenance. Chaque solution est construite pour évoluer avec votre entreprise."
  },

  // ── Solution Entreprise ──
  {
    keywords: ["erp", "solution entreprise", "organisation", "digitaliser", "digitalisation", "entreprise", "métier", "gestion", "workflow", "processus métier", "sur mesure", "crm", "intégration"],
    response: "Notre expertise Solution Entreprise couvre la conception et le déploiement de systèmes ERP, CRM et solutions métier sur mesure. Nous aidons les organisations à digitaliser leurs processus internes, automatiser les workflows et moderniser leur pilotage opérationnel. Chaque solution est adaptée à votre secteur et à vos contraintes spécifiques."
  },

  // ── IA et Technologie / Cloud ──
  {
    keywords: ["ia", "intelligence artificielle", "machine learning", "automatiser", "automatisation", "cloud", "cloud et ia", "ml", "modèle", "algorithme", "chatbot", "nlp", "deep learning", "prédiction", "ia et technologie"],
    response: "Notre pôle IA & Technologie (Cloud et IA) vous aide à exploiter le plein potentiel de l'intelligence artificielle et du cloud. Nous concevons des modèles de machine learning, des automatisations intelligentes, des assistants conversationnels et des architectures cloud scalables. L'objectif : enrichir vos processus métier et vous donner un avantage compétitif concret grâce à la technologie."
  },

  // ── Data Analyse ──
  {
    keywords: ["data", "analyse", "données", "décision", "analytique", "analytics", "tableau de bord", "dashboard", "reporting", "kpi", "bi", "business intelligence", "visualisation", "dataset", "datawarehouse"],
    response: "Notre pôle Data Analyse vous accompagne dans la collecte, la structuration et la valorisation de vos données. Nous créons des tableaux de bord personnalisés, des pipelines de données fiables et des modèles analytiques avancés pour vous permettre de prendre des décisions stratégiques basées sur des faits — et non sur des intuitions."
  },

  // ── Expertise sectorielle ──
  {
    keywords: ["secteur", "secteurs", "ecommerce", "e-commerce", "immobilier", "education", "hôtellerie", "hotellerie", "pme", "industrie", "domaine d'expertise", "spécialité"],
    response: "AXIOM dispose d'une expertise sectorielle forte dans plusieurs domaines : E-commerce, Immobilier, Éducation, Hôtellerie et PME. Cette connaissance des secteurs nous permet de proposer des solutions réellement adaptées à vos réalités métier, pas des approches génériques. Vous travaillez dans l'un de ces secteurs ?"
  },

  // ── Fonctionnement / Processus ──
  {
    keywords: ["comment ça marche", "comment fonctionne", "processus", "étapes", "méthode", "démarche", "comment travailler avec vous", "comment collaborer", "comment vous contacter"],
    response: "Collaborer avec AXIOM se déroule en 3 étapes simples :\n\n 1. Audit & Cadrage — Nous analysons vos besoins, vos enjeux et définissons ensemble la solution la plus adaptée.\n 2. Déploiement — Nos équipes conçoivent et déploient la solution de façon agile, en vous tenant informé à chaque étape.\n 3. Formation & Suivi — Nous formons vos équipes et assurons un suivi post-déploiement pour garantir la réussite du projet.\n\nLe tout en approche 100% sur mesure, sans jargon inutile."
  },

  // ── Sécurité / Confiance ──
  {
    keywords: ["sécurité", "securite", "données sécurisées", "confidentialité", "rgpd", "protection", "confiance", "chiffrement", "aes", "hébergement", "france"],
    response: "La sécurité est une priorité absolue chez AXIOM. Nos solutions respectent les standards les plus exigeants : chiffrement AES-256, hébergement en France, conformité RGPD et protocoles de sécurité régulièrement audités. Vos données et celles de vos clients sont protégées à chaque niveau."
  },

  // ── Valeurs ──
  {
    keywords: ["valeur", "valeurs", "innovation", "intégrité", "performance", "écosystème", "vision", "mission", "philosophie", "culture", "adn"],
    response: "AXIOM est guidé par 4 valeurs fondamentales :\n\n Innovation Continue — Toujours une longueur d'avance technologique.\n Intégrité Radicale — Transparence et honnêteté dans chaque engagement.\n Performance Pure — Des résultats mesurables, pas des promesses.\n Écosystème Ouvert — Collaboration, partage et croissance collective.\n\nCes valeurs se reflètent dans chaque projet que nous menons."
  },

  // ── Contact / Coordonnées ──
  {
    keywords: ["coordonnée", "coordonnées", "contact", "email", "mail", "téléphone", "telephone", "appeler", "joindre", "nous contacter", "adresse", "écrire"],
    response: "Vous pouvez joindre l'équipe AXIOM par les moyens suivants :\n\n Email — axiomtechnologie@business.com\n Téléphone — 07 48 34 59 39\n\nN'hésitez pas à nous envoyer votre cahier des charges ou à nous appeler directement pour un premier échange sans engagement."
  },

  // ── Horaires / Disponibilité ──
  {
    keywords: ["horaire", "horaires", "ouverture", "disponible", "disponibilité", "quand", "support", "heures", "planning", "permanence"],
    response: "Nos équipes sont disponibles du lundi au vendredi, de 9h à 18h pour vous accompagner en direct. Notre support email est quant à lui actif 24h/24 et 7j/7, avec un engagement de réponse sous 2 heures ouvrées. Votre projet ne prend pas de vacances — nous non plus."
  },

  // ── Devis / Tarif / Prix ──
  {
    keywords: ["devis", "tarif", "tarifs", "prix", "coût", "cout", "combien", "budget", "estimation", "offre commerciale", "proposition", "facturation"],
    response: "Chaque projet AXIOM étant unique, nous ne proposons pas de grille tarifaire standard. Pour obtenir un devis personnalisé et précis, il vous suffit de nous transmettre votre cahier des charges à l'adresse axiomtechnologie@business.com ou de nous appeler au 07 48 34 59 39. Un premier échange de 30 minutes suffit généralement pour vous proposer une estimation claire."
  },

  // ── Pages du site ──
  {
    keywords: ["page", "site", "navigation", "menu", "sections", "about", "à propos", "media", "business", "confidentialité"],
    response: "Le site AXIOM est organisé en plusieurs espaces : Services (nos 6 expertises), Business (nos offres pour les entreprises), À propos (notre histoire et équipe), Media (actualités et ressources) et Confidentialité. Vous pouvez y accéder via la barre de navigation en haut de page. Y a-t-il une rubrique en particulier qui vous intéresse ?"
  },

  // ── Remerciements / Fins de conversation ──
  {
    keywords: ["merci", "remercie", "parfait", "super", "excellent", "génial", "cool", "top", "bravo", "nickel", "d'accord", "ok merci"],
    response: "Avec plaisir ! C'est toujours un plaisir d'échanger avec vous. N'hésitez pas à revenir si vous avez d'autres questions — l'équipe AXIOM reste à votre disposition. Bonne journée !"
  },

  // ── Aurevoir ──
  {
    keywords: ["au revoir", "goodbye", "bye", "à bientôt", "a bientot", "bonne journée", "bonne soirée", "ciao"],
    response: "À très bientôt ! L'équipe AXIOM reste disponible pour vous accompagner dans vos projets. Passez une excellente journée !"
  }
];


// ─── 2. MOTEUR DE RÉPONSE ─────────────────────────────────────

function findResponse(question) {
  const q = question.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // retire les accents pour comparaison

  for (let entry of knowledgeBase) {
    for (let keyword of entry.keywords) {
      const kw = keyword.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (q.includes(kw)) {
        return entry.response;
      }
    }
  }

  return "Je n'ai pas saisi exactement votre question, mais je suis là pour vous aider ! Voici ce sur quoi je peux vous renseigner :\n\n— Nos services et expertises\n— Notre processus de travail\n— Tarifs et devis\n— Contact et horaires\n— Valeurs et vision d'AXIOM\n\nReformulée autrement, votre question trouvera certainement sa réponse. Ou contactez-nous directement au 07 48 34 59 39.";
}


// ─── 3. INTERFACE UTILISATEUR ─────────────────────────────────

let chatHistory = [];
let isTyping = false;

function formatMessage(text) {
  // Convertit les \n en <br> et les tirets en puce stylisée
  return text
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
    .replace(/^— /gm, '<span class="axiom-bullet">▸</span> ')
    .replace(/<br><span class="axiom-bullet">/g, '<br><span class="axiom-bullet">');
}

function addMessage(content, isUser = false, withTyping = false) {
  const agentIMG = `<img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=56&h=56&fit=crop&crop=face&auto=format" alt="Agent AXIOM" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block;" />`;
  const chatContainer = document.getElementById("axiom-chat-messages");
  if (!chatContainer) return;

  if (withTyping) {
    // Affiche l'indicateur de frappe
    const typingDiv = document.createElement("div");
    typingDiv.className = "axiom-msg axiom-msg--bot axiom-typing-indicator";
    typingDiv.id = "axiom-typing";
    typingDiv.innerHTML = `
      <div class="axiom-avatar">${agentIMG}</div>
      <div class="axiom-bubble">
        <span class="axiom-dot"></span>
        <span class="axiom-dot"></span>
        <span class="axiom-dot"></span>
      </div>`;
    chatContainer.appendChild(typingDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    return;
  }

  // Supprime l'indicateur de frappe
  const typingEl = document.getElementById("axiom-typing");
  if (typingEl) typingEl.remove();

  const msgDiv = document.createElement("div");
  msgDiv.className = `axiom-msg ${isUser ? "axiom-msg--user" : "axiom-msg--bot"}`;

  const formatted = `<p>${formatMessage(content)}</p>`;

  if (isUser) {
    msgDiv.innerHTML = `<div class="axiom-bubble">${formatted}</div>`;
  } else {
    msgDiv.innerHTML = `
      <div class="axiom-avatar">${agentIMG}</div>
      <div class="axiom-bubble">${formatted}</div>`;
  }

  // Animation d'entrée
  msgDiv.style.opacity = "0";
  msgDiv.style.transform = "translateY(8px)";
  chatContainer.appendChild(msgDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;

  requestAnimationFrame(() => {
    msgDiv.style.transition = "opacity 0.35s ease, transform 0.35s ease";
    msgDiv.style.opacity = "1";
    msgDiv.style.transform = "translateY(0)";
  });

  chatHistory.push({ role: isUser ? "user" : "assistant", content });
}

function sendMessage() {
  if (isTyping) return;

  const input = document.getElementById("axiom-chat-input");
  const question = input.value.trim();
  if (!question) return;

  addMessage(question, true);
  input.value = "";
  input.style.height = "auto";
  isTyping = true;

  const sendBtn = document.getElementById("axiom-send-btn");
  if (sendBtn) sendBtn.disabled = true;

  // Indicateur de frappe
  addMessage("", false, true);

  const delay = 600 + Math.random() * 600;
  setTimeout(() => {
    const response = findResponse(question);
    addMessage(response, false);
    isTyping = false;
    if (sendBtn) sendBtn.disabled = false;
    input.focus();
  }, delay);
}

function resetChat() {
  chatHistory = [];
  const container = document.getElementById("axiom-chat-messages");
  if (container) container.innerHTML = "";
  addMessage("Bonjour ! Je suis l'assistant virtuel d'AXIOM, votre partenaire en transformation digitale.\n\nJe peux vous renseigner sur nos services, notre méthode de travail, nos tarifs ou encore nos coordonnées.\n\nComment puis-je vous aider aujourd'hui ?", false);
}

// ─── 4. SUGGESTIONS RAPIDES ──────────────────────────────────

const quickSuggestions = [
  { label: "Nos services", query: "Quels services proposez-vous ?" },
  { label: "Devis", query: "Je souhaite un devis." },
  { label: "Contact", query: "Quelles sont vos coordonnées ?" },
  { label: "Notre processus", query: "Comment fonctionne la collaboration ?" },
];

function renderSuggestions() {
  const wrap = document.getElementById("axiom-suggestions");
  if (!wrap) return;
  wrap.innerHTML = "";
  quickSuggestions.forEach(s => {
    const btn = document.createElement("button");
    btn.className = "axiom-suggestion-btn";
    btn.textContent = s.label;
    btn.onclick = () => {
      document.getElementById("axiom-chat-input").value = s.query;
      sendMessage();
      wrap.style.display = "none";
    };
    wrap.appendChild(btn);
  });
}


// ─── 5. INITIALISATION ───────────────────────────────────────

function initChatbot() {

  // ── Inject CSS ──
  const style = document.createElement("style");
  style.textContent = `
    /* ── Google Fonts ── */
    @import url('https://fonts.googleapis.com/css2?family=Jura:wght@400;600;700&family=Manrope:wght@400;500;600&display=swap');

    /* ── Variables ── */
    :root {
      --axiom-accent:   #c040b8;
      --axiom-accent2:  #ff7cf5;
      --axiom-dark:     #0a0a0a;
      --axiom-surface:  #111111;
      --axiom-card:     #191919;
      --axiom-border:   rgba(192, 64, 184, 0.18);
      --axiom-border-h: rgba(255, 124, 245, 0.4);
      --axiom-text:     #e8e8e8;
      --axiom-muted:    #888888;
      --axiom-radius:   14px;
      --axiom-shadow:   0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(192,64,184,0.12);
    }

    /* ── Wrapper bouton flottant (pour les anneaux) ── */
    #axiom-btn-wrap {
      position: fixed;
      bottom: 28px;
      right: 28px;
      width: 58px;
      height: 58px;
      z-index: 9998;
    }

    /* Anneaux de halo violet — très subtils, toutes les 3s */
    .axiom-ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 1.5px solid rgba(192, 64, 184, 0.3);
      opacity: 0;
      pointer-events: none;
    }
    .axiom-ring-1 { animation: axiom-halo 3s ease-out infinite; }
    .axiom-ring-2 { animation: axiom-halo 3s ease-out 0.7s infinite; }
    .axiom-ring-3 { animation: axiom-halo 3s ease-out 1.4s infinite; }

    @keyframes axiom-halo {
      0%   { transform: scale(1);   opacity: 0.45; }
      65%  { opacity: 0.12; }
      100% { transform: scale(1.85); opacity: 0;   }
    }

    /* ── Bouton flottant ── */
    #axiom-open-btn {
      position: absolute;
      inset: 0;
      width: 58px;
      height: 58px;
      background: linear-gradient(135deg, #f070e8 0%, #c040b8 100%);
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(192,64,184,0.5);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }
    #axiom-open-btn:hover {
      transform: scale(1.08);
      box-shadow: 0 8px 32px rgba(192,64,184,0.7);
    }

    /* Icône messagerie dans le bouton */
    #axiom-open-btn svg.axiom-chat-icon {
      width: 26px; height: 26px; fill: white;
    }

    /* Badge notification */
    #axiom-notif-badge {
      position: absolute;
      top: 2px; right: 2px;
      width: 14px; height: 14px;
      background: #ff4d4d;
      border-radius: 50%;
      border: 2px solid #0a0a0a;
      z-index: 2;
      animation: axiom-blink 2s ease-in-out infinite;
    }
    @keyframes axiom-blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }

    /* ── Fenêtre chat ── */
    #axiom-chat-modal {
      position: fixed;
      bottom: 100px;
      right: 28px;
      width: 380px;
      max-height: 600px;
      background: var(--axiom-dark);
      border: 1px solid var(--axiom-border);
      border-radius: var(--axiom-radius);
      box-shadow: var(--axiom-shadow);
      z-index: 9999;
      display: none;
      flex-direction: column;
      overflow: hidden;
      font-family: 'Manrope', sans-serif;
      transform-origin: bottom right;
      animation: axiom-open 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    #axiom-chat-modal.axiom-visible {
      display: flex;
    }

    @keyframes axiom-open {
      from { opacity: 0; transform: scale(0.85) translateY(16px); }
      to   { opacity: 1; transform: scale(1) translateY(0); }
    }

    /* Ligne lumineuse top */
    #axiom-chat-modal::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,124,245,0.7), transparent);
      z-index: 10;
    }

    /* ── Header ── */
    .axiom-header {
      background: linear-gradient(135deg, #1a0a1e 0%, #120112 100%);
      border-bottom: 1px solid var(--axiom-border);
      padding: 16px 18px;
      display: flex;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
    }
    .axiom-header-avatar {
      width: 42px; height: 42px;
      border-radius: 50%;
      flex-shrink: 0;
      overflow: hidden;
      box-shadow: 0 0 0 2px rgba(192,64,184,0.5), 0 0 16px rgba(192,64,184,0.3);
      background: #1a0a24;
    }
    .axiom-header-avatar img {
      width: 100%; height: 100%;
      object-fit: cover; border-radius: 50%; display: block;
    }
    .axiom-header-info { flex: 1; }
    .axiom-header-name {
      font-family: 'Jura', sans-serif;
      font-weight: 700;
      font-size: 14px;
      color: #ffffff;
      letter-spacing: 0.03em;
    }
    .axiom-header-status {
      font-size: 11px;
      color: var(--axiom-muted);
      display: flex; align-items: center; gap: 5px;
      margin-top: 2px;
    }
    .axiom-status-dot {
      width: 7px; height: 7px;
      background: #4ade80;
      border-radius: 50%;
      box-shadow: 0 0 6px rgba(74,222,128,0.6);
      animation: axiom-blink 2.5s ease-in-out infinite;
    }
    .axiom-header-actions {
      display: flex; gap: 6px;
    }
    .axiom-icon-btn {
      width: 30px; height: 30px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 7px;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.2s;
      color: var(--axiom-muted);
      font-size: 14px;
    }
    .axiom-icon-btn:hover {
      background: rgba(192,64,184,0.12);
      border-color: var(--axiom-border-h);
      color: var(--axiom-accent2);
    }

    /* ── Zone messages ── */
    #axiom-chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 18px 16px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      background: var(--axiom-dark);
      scroll-behavior: smooth;
    }
    #axiom-chat-messages::-webkit-scrollbar { width: 4px; }
    #axiom-chat-messages::-webkit-scrollbar-track { background: transparent; }
    #axiom-chat-messages::-webkit-scrollbar-thumb {
      background: rgba(192,64,184,0.25);
      border-radius: 4px;
    }

    /* ── Messages ── */
    .axiom-msg {
      display: flex;
      align-items: flex-end;
      gap: 8px;
      max-width: 88%;
    }
    .axiom-msg--user {
      align-self: flex-end;
      flex-direction: row-reverse;
    }
    .axiom-msg--bot { align-self: flex-start; }

    .axiom-avatar {
      width: 28px; height: 28px;
      border-radius: 50%;
      flex-shrink: 0;
      overflow: hidden;
      background: #1a0a24;
      box-shadow: 0 0 0 1.5px rgba(192,64,184,0.4);
    }
    .axiom-avatar img {
      width: 100%; height: 100%; object-fit: cover; border-radius: 50%; display: block;
    }

    .axiom-bubble {
      padding: 11px 15px;
      border-radius: 16px;
      font-size: 13.5px;
      line-height: 1.65;
      color: var(--axiom-text);
    }
    .axiom-bubble p { margin: 0; }
    .axiom-bubble p + p { margin-top: 8px; }

    .axiom-msg--bot .axiom-bubble {
      background: var(--axiom-card);
      border: 1px solid rgba(255,255,255,0.05);
      border-bottom-left-radius: 4px;
    }
    .axiom-msg--user .axiom-bubble {
      background: linear-gradient(135deg, rgba(192,64,184,0.25), rgba(120,30,130,0.2));
      border: 1px solid rgba(192,64,184,0.3);
      border-bottom-right-radius: 4px;
      text-align: right;
    }

    .axiom-bullet {
      color: var(--axiom-accent2);
      margin-right: 5px;
      font-size: 10px;
    }

    /* ── Typing indicator ── */
    .axiom-typing-indicator .axiom-bubble {
      display: flex; align-items: center; gap: 5px;
      padding: 13px 16px;
    }
    .axiom-dot {
      width: 7px; height: 7px;
      background: var(--axiom-accent);
      border-radius: 50%;
      animation: axiom-bounce 1.2s ease-in-out infinite;
    }
    .axiom-dot:nth-child(2) { animation-delay: 0.2s; }
    .axiom-dot:nth-child(3) { animation-delay: 0.4s; }
    @keyframes axiom-bounce {
      0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
      40% { transform: translateY(-6px); opacity: 1; }
    }

    /* ── Suggestions rapides ── */
    #axiom-suggestions {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
      padding: 10px 16px 6px;
      background: var(--axiom-dark);
      border-top: 1px solid rgba(255,255,255,0.04);
    }
    .axiom-suggestion-btn {
      background: transparent;
      border: 1px solid var(--axiom-border);
      border-radius: 20px;
      padding: 5px 13px;
      font-family: 'Manrope', sans-serif;
      font-size: 11.5px;
      color: var(--axiom-accent2);
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .axiom-suggestion-btn:hover {
      background: rgba(192,64,184,0.12);
      border-color: var(--axiom-border-h);
    }

    /* ── Zone saisie ── */
    .axiom-input-wrap {
      padding: 12px 14px;
      border-top: 1px solid var(--axiom-border);
      background: var(--axiom-surface);
      display: flex;
      align-items: center;
      gap: 9px;
      flex-shrink: 0;
    }
    #axiom-chat-input {
      flex: 1;
      background: var(--axiom-card);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 22px;
      padding: 10px 16px;
      font-family: 'Manrope', sans-serif;
      font-size: 13.5px;
      color: var(--axiom-text);
      outline: none;
      resize: none;
      max-height: 100px;
      transition: border-color 0.2s;
      line-height: 1.4;
    }
    #axiom-chat-input::placeholder { color: var(--axiom-muted); }
    #axiom-chat-input:focus {
      border-color: rgba(192,64,184,0.45);
      box-shadow: 0 0 0 3px rgba(192,64,184,0.08);
    }
    #axiom-send-btn {
      width: 40px; height: 40px;
      background: linear-gradient(135deg, #f070e8, #c040b8);
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
      box-shadow: 0 2px 12px rgba(192,64,184,0.4);
    }
    #axiom-send-btn:hover:not(:disabled) {
      transform: scale(1.08);
      box-shadow: 0 4px 20px rgba(192,64,184,0.6);
    }
    #axiom-send-btn:disabled { opacity: 0.45; cursor: not-allowed; }
    #axiom-send-btn svg { width: 17px; height: 17px; fill: white; }

    /* ── Responsive mobile ── */
    @media (max-width: 480px) {
      #axiom-chat-modal {
        right: 12px; left: 12px;
        bottom: 90px;
        width: auto;
        max-height: 70vh;
      }
      #axiom-btn-wrap { right: 16px; bottom: 20px; }
    }
  `;
  document.head.appendChild(style);

  // ── Inject HTML ──
  const html = `
    <!-- Bouton flottant avec anneaux violet -->
    <div id="axiom-btn-wrap">
      <div class="axiom-ring axiom-ring-1"></div>
      <div class="axiom-ring axiom-ring-2"></div>
      <div class="axiom-ring axiom-ring-3"></div>
      <div id="axiom-notif-badge"></div>
      <button id="axiom-open-btn" aria-label="Ouvrir l'assistant AXIOM">
        <svg class="axiom-chat-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16ZM7 9H9V11H7V9ZM11 9H13V11H11V9ZM15 9H17V11H15V9Z"/>
        </svg>
      </button>
    </div>

    <!-- Fenêtre de chat -->
    <div id="axiom-chat-modal" role="dialog" aria-label="Assistant AXIOM">

      <!-- Header -->
      <div class="axiom-header">
        <div class="axiom-header-avatar">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format" alt="Agent AXIOM" />
        </div>
        <div class="axiom-header-info">
          <div class="axiom-header-name">Assistant AXIOM</div>
          <div class="axiom-header-status">
            <span class="axiom-status-dot"></span>
            En ligne · Répond rapidement
          </div>
        </div>
        <div class="axiom-header-actions">
          <button class="axiom-icon-btn" id="axiom-reset-btn" title="Nouvelle conversation">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.6"/>
            </svg>
          </button>
          <button class="axiom-icon-btn" id="axiom-close-btn" title="Fermer">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Messages -->
      <div id="axiom-chat-messages"></div>

      <!-- Suggestions rapides -->
      <div id="axiom-suggestions"></div>

      <!-- Input -->
      <div class="axiom-input-wrap">
        <textarea
          id="axiom-chat-input"
          placeholder="Posez votre question..."
          rows="1"
          aria-label="Votre message"
        ></textarea>
        <button id="axiom-send-btn" title="Envoyer">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </div>

    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", html);

  // ── Events ──
  document.getElementById("axiom-open-btn").onclick = () => {
    const modal = document.getElementById("axiom-chat-modal");
    const badge = document.getElementById("axiom-notif-badge");
    modal.classList.add("axiom-visible");
    if (badge) badge.style.display = "none";
    document.getElementById("axiom-chat-input").focus();
  };

  document.getElementById("axiom-close-btn").onclick = () => {
    document.getElementById("axiom-chat-modal").classList.remove("axiom-visible");
  };

  document.getElementById("axiom-reset-btn").onclick = () => {
    const sugWrap = document.getElementById("axiom-suggestions");
    if (sugWrap) sugWrap.style.display = "flex";
    resetChat();
    renderSuggestions();
  };

  document.getElementById("axiom-send-btn").onclick = sendMessage;

  const input = document.getElementById("axiom-chat-input");
  input.onkeydown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Auto-resize textarea
  input.addEventListener("input", () => {
    input.style.height = "auto";
    input.style.height = Math.min(input.scrollHeight, 100) + "px";
  });

  // Cacher suggestions après 1er envoi manuel
  input.addEventListener("input", () => {
    const sugWrap = document.getElementById("axiom-suggestions");
    if (sugWrap && input.value.trim()) sugWrap.style.display = "none";
    if (sugWrap && !input.value.trim()) sugWrap.style.display = "flex";
  });

  // ── Init ──
  resetChat();
  renderSuggestions();
}


// ─── 6. LANCEMENT ────────────────────────────────────────────
if (document.readyState === "complete" || document.readyState === "interactive") {
  initChatbot();
} else {
  document.addEventListener("DOMContentLoaded", initChatbot);
}