/**
 * JSP SEGUROS · JEANETTE SALINAS PONCE
 * Corredora de Seguros Titular
 * "Yo gestiono por ti."
 *
 * Motor interactivo: Bilingüe (ES/EN), 4 Líneas de Servicio Oficiales,
 * Cotizador Express RCI Mercosur / SOAPEX, WhatsApp Dinámico y Registro de Leads.
 */

// Teléfono oficial de Jeanette (formato internacional para wa.me)
const JEANETTE_PHONE = "56999999999"; 

// Textos bilingües oficiales
const translations = {
  es: {
    brand_sub: "Corredora de Seguros Titular · CMF",
    nav_services: "Nuestros Servicios",
    nav_rci: "RCI Mercosur & SOAPEX",
    nav_commitment: "Nuestro Compromiso",
    nav_alliances: "Alianzas B2B",
    nav_cta: "Solicitar Asesoría",

    hero_tag: "Jeanette Salinas Ponce · Corredora de Seguros Titular",
    hero_title: 'Asesoría Profesional en Seguros <br><span class="highlight">y Protección Patrimonial</span>',
    hero_slogan: "Yo gestiono por ti.",
    hero_desc: "En JSP Seguros entrego asesoría profesional y personalizada, orientada a proteger los bienes, el patrimonio y el bienestar de personas, familias y empresas. Identifico las necesidades de cada cliente y busco alternativas de protección adecuadas, acompañándolo desde la cotización y contratación hasta la renovación y gestión de sus seguros.",
    hero_btn_generales: "Cotizar Seguros Generales",
    hero_btn_rci: "Cotizar RCI Mercosur & SOAPEX",
    hero_trust_1: "Corredora de Seguros Titular CMF",
    hero_trust_2: "Atención Nacional e Internacional",
    hero_trust_3: "Gestión Integral: Cotización a Siniestro",

    profile_name: "Jeanette Salinas Ponce",
    profile_role: "Corredora de Seguros",
    profile_badge: "Registro CMF Verificado",
    stat_1_num: "100%",
    stat_1_label: "Asesoría Profesional y Personalizada",
    stat_2_num: "+15",
    stat_2_label: "Aseguradoras Reguladas en Chile",
    profile_box_text: "¿Tienes dudas sobre una póliza o necesitas gestionar un seguro?",
    profile_box_btn: "Conversar con Jeanette",

    banner_intl_badge: "Atención Especializada para Viajeros y Extranjeros",
    banner_intl_title: "Seguros RCI Mercosur & SOAPEX para circular por Sudamérica",
    banner_intl_desc: "Atención especializada para conductores y vehículos extranjeros que ingresan a Chile o circulan por Argentina, Brasil, Uruguay, Paraguay y Bolivia. Emisión digital ágil desde Chile o el extranjero.",
    banner_intl_btn: "Cotizador Express RCI & SOAPEX",

    services_tag: "Nuestros Servicios",
    services_title: "Soluciones de protección profesional a tu medida",
    services_desc: "Conoce nuestras 4 líneas principales de seguros. Te acompaño en la selección, contratación, renovación y ante cualquier siniestro.",
    tab_generales: "1. Seguros Generales",
    tab_rci: "2. RCI Mercosur y SOAPEX",
    tab_vida: "3. Vida y Personas",
    tab_colectivos: "4. Seguros Colectivos",

    wizard_badge: "Atención a Clientes Internacionales",
    wizard_title: "Emisión Express RCI Mercosur & SOAPEX",
    wizard_desc: "Gestión ágil para viajeros, transportistas y conductores particulares que cruzan fronteras en Sudamérica.",
    wizard_b1: "Obligatorio por ley para aduanas, pasos fronterizos y controles policiales.",
    wizard_b2: "Válido para vehículos particulares, camionetas, motos, transporte y casas rodantes.",
    wizard_b3: "Emisión digital inmediata enviada directamente a tu correo y WhatsApp.",

    wizard_form_title: "Solicitud Express RCI & SOAPEX",
    wizard_label_type: "¿Qué seguro necesitas?",
    wizard_opt_rci: "RCI Mercosur (Circulación en Sudamérica: Arg, Bra, Uru, Par, Bol)",
    wizard_opt_soapex: "SOAPEX (Vehículo extranjero ingresando a Chile)",
    wizard_opt_travel: "Asistencia Médica y Seguro de Viaje",
    wizard_label_vehicle: "Tipo de Vehículo",
    wizard_label_country: "País de Origen / Matrícula",
    wizard_label_duration: "Vigencia / Tiempo de Cobertura",
    wizard_btn: "Solicitar Emisión con Jeanette",

    commitment_tag: "Nuestro Compromiso",
    commitment_title: "Cercanía, responsabilidad y protección oportuna",
    commitment_text: "«Entregar una asesoría responsable, oportuna y personalizada, identificando las necesidades de cada cliente y ofreciendo soluciones que contribuyan a proteger sus bienes, patrimonio y bienestar. Atención cercana y profesional para clientes nacionales e internacionales.»",
    commitment_author: "— Jeanette Salinas Ponce, Corredora de Seguros · JSP Seguros («Yo gestiono por ti»)",
    quote_phrase: "«¿Qué tanto estoy creciendo, pero qué tanto estoy contribuyendo?»",

    method_tag: "Metodología de Trabajo",
    method_title: "Cómo te acompaño paso a paso",
    method_desc: "Un proceso transparente, personal y profesional desde el primer contacto.",
    step1_title: "01. Identifico tus necesidades",
    step1_desc: "Evaluamos qué bienes, personas o actividades necesitas proteger para diseñar la cobertura precisa.",
    step2_title: "02. Comparo alternativas",
    step2_desc: "Busco las mejores opciones entre las principales aseguradoras reguladas por la CMF en Chile.",
    step3_title: "03. Soluciones claras",
    step3_desc: "Te explico cada cláusula y cobertura en lenguaje directo y transparente, sin letra chica.",
    step4_title: "04. Yo gestiono por ti",
    step4_desc: "Te acompaño durante toda la vigencia, en renovaciones y con defensa técnica directa ante un siniestro.",

    alliances_tag: "Canal B2B & Convenios",
    alliances_title: "Alianzas Estratégicas Comerciales",
    alliances_desc: "Convenios para agencias de viaje, tour operadores, empresas de transporte y rent-a-car. Facilita seguros de viaje, RCI y SOAPEX a tus pasajeros con atención preferente y respaldo continuo.",
    alliances_btn: "Coordinar Reunión de Alianza",

    carriers_title: "Trabajamos con las principales aseguradoras reguladas por la CMF en Chile",

    footer_desc: "En JSP Seguros entrego asesoría profesional y personalizada, orientada a proteger los bienes, el patrimonio y el bienestar de personas, familias y empresas. Atención para clientes nacionales e internacionales.",
    footer_rights: "© 2026 JSP Seguros · Jeanette Salinas Ponce (Corredora de Seguros Titular). Todos los derechos reservados."
  },

  en: {
    brand_sub: "Licensed Insurance Broker · CMF Chile",
    nav_services: "Our Services",
    nav_rci: "RCI Mercosur & SOAPEX",
    nav_commitment: "Our Commitment",
    nav_alliances: "B2B Alliances",
    nav_cta: "Request Advisory",

    hero_tag: "Jeanette Salinas Ponce · Licensed Insurance Broker",
    hero_title: 'Professional Insurance Advisory <br><span class="highlight">& Asset Protection</span>',
    hero_slogan: "I manage everything for you.",
    hero_desc: "At JSP Seguros I provide professional, personalized advisory aimed at protecting the assets, property, and well-being of individuals, families, and businesses. I assess each client's specific needs and find suitable protection alternatives, supporting them from initial quotation and contracting through renewals and claims management.",
    hero_btn_generales: "Quote General Insurance",
    hero_btn_rci: "Quote RCI Mercosur & SOAPEX",
    hero_trust_1: "Licensed Broker CMF Chile",
    hero_trust_2: "Domestic & International Clients",
    hero_trust_3: "Full Support: Quote to Claims",

    profile_name: "Jeanette Salinas Ponce",
    profile_role: "Licensed Insurance Broker",
    profile_badge: "Verified CMF License",
    stat_1_num: "100%",
    stat_1_label: "Professional & Personal Advisory",
    stat_2_num: "+15",
    stat_2_label: "Regulated Insurers in Chile",
    profile_box_text: "Have questions about a policy or need help with a claim?",
    profile_box_btn: "Speak with Jeanette",

    banner_intl_badge: "Specialized Service for Travelers & Foreign Drivers",
    banner_intl_title: "RCI Mercosur & SOAPEX Insurance for South American Transit",
    banner_intl_desc: "Specialized service for foreign drivers entering Chile or traveling through Argentina, Brazil, Uruguay, Paraguay, and Bolivia. Fast digital issuance from Chile or abroad.",
    banner_intl_btn: "Express RCI & SOAPEX Quoter",

    services_tag: "Our Services",
    services_title: "Professional protection tailored to your needs",
    services_desc: "Explore our 4 core insurance lines. I support you through policy selection, underwriting, renewals, and claims.",
    tab_generales: "1. General Insurance",
    tab_rci: "2. RCI Mercosur & SOAPEX",
    tab_vida: "3. Life & Personal Coverage",
    tab_colectivos: "4. Group Insurance",

    wizard_badge: "International Client Service",
    wizard_title: "Express RCI Mercosur & SOAPEX Issuance",
    wizard_desc: "Fast digital processing for travelers, freight carriers, and private drivers crossing borders in South America.",
    wizard_b1: "Mandatory by law for customs, border crossings, and highway controls.",
    wizard_b2: "Valid for passenger cars, pickups, motorcycles, transport, and campervans / RVs.",
    wizard_b3: "Instant digital policy delivered straight to your email and WhatsApp.",

    wizard_form_title: "Express RCI & SOAPEX Request",
    wizard_label_type: "Select Insurance Coverage",
    wizard_opt_rci: "RCI Mercosur (South America transit: Arg, Bra, Uru, Par, Bol)",
    wizard_opt_soapex: "SOAPEX (Foreign vehicle entering Chile)",
    wizard_opt_travel: "Travel Medical Assistance",
    wizard_label_vehicle: "Vehicle Category",
    wizard_label_country: "Country of Registration / License Plate",
    wizard_label_duration: "Coverage Period / Duration",
    wizard_btn: "Request Issuance with Jeanette",

    commitment_tag: "Our Commitment",
    commitment_title: "Closeness, responsibility, and timely protection",
    commitment_text: "«To deliver responsible, timely, and personalized advice, identifying the needs of each client and offering solutions that help protect their property, assets, and well-being. Close and professional service for national and international clients.»",
    commitment_author: "— Jeanette Salinas Ponce, Licensed Insurance Broker · JSP Seguros («I manage everything for you»)",
    quote_phrase: "«How much am I growing, but more importantly, how much am I truly contributing?»",

    method_tag: "Our Methodology",
    method_title: "How I support you step by step",
    method_desc: "A transparent, personal, and professional process from day one.",
    step1_title: "01. I assess your needs",
    step1_desc: "We identify what assets, people, or business operations require protection to craft the exact coverage.",
    step2_title: "02. I compare market options",
    step2_desc: "I evaluate top policies across leading CMF-regulated insurance companies in Chile.",
    step3_title: "03. Clear solutions",
    step3_desc: "I explain terms, limits, and conditions in plain language without deceptive fine print.",
    step4_title: "04. I manage everything for you",
    step4_desc: "Ongoing support through policy life, renewal audits, and direct technical advocacy in any claim.",

    alliances_tag: "B2B Channels & Partnerships",
    alliances_title: "Strategic Commercial Alliances",
    alliances_desc: "Agreements for travel agencies, tour operators, transportation companies, and car rental firms. Provide RCI, SOAPEX, and travel insurance with priority response.",
    alliances_btn: "Schedule a Partnership Call",

    carriers_title: "We work with top CMF-regulated insurance companies in Chile",

    footer_desc: "At JSP Seguros I provide professional, personalized advisory aimed at protecting the assets, property, and well-being of individuals, families, and businesses. Domestic and international service.",
    footer_rights: "© 2026 JSP Seguros · Jeanette Salinas Ponce (Licensed Insurance Broker). All rights reserved."
  }
};

let currentLang = 'es';
let activeCategory = 'generales';

// Inicialización cuando carga el DOM
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTabs();
  initWizard();
  initWhatsApp();
  initModals();
});

/* ==========================================================================
   1. GESTIÓN DE IDIOMA (ES / EN)
   ========================================================================== */
function initLanguage() {
  const savedLang = localStorage.getItem('jsp_lang');
  if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
    setLanguage(savedLang);
  }

  const esBtn = document.getElementById('lang-es');
  const enBtn = document.getElementById('lang-en');

  if (esBtn && enBtn) {
    esBtn.addEventListener('click', () => setLanguage('es'));
    enBtn.addEventListener('click', () => setLanguage('en'));
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('jsp_lang', lang);

  // Actualizar botones de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`lang-${lang}`);
  if (activeBtn) activeBtn.classList.add('active');

  // Aplicar traducciones según data-i18n
  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  updateWhatsAppTooltip();
}

/* ==========================================================================
   2. SELECTOR MODULAR DE SERVICIOS (4 LÍNEAS OFICIALES)
   ========================================================================== */
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-target');
      activeCategory = target;
      
      // Mostrar/ocultar contenedores de tarjetas
      document.querySelectorAll('.services-category-group').forEach(group => {
        if (group.id === `group-${target}`) {
          group.style.display = 'grid';
        } else {
          group.style.display = 'none';
        }
      });

      updateWhatsAppTooltip();
    });
  });
}

/* ==========================================================================
   3. COTIZADOR EXPRESS RCI MERCOSUR & SOAPEX (INTERNACIONAL)
   ========================================================================== */
function initWizard() {
  const form = document.getElementById('express-wizard-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const typeSelect = document.getElementById('wizard-type');
    const vehicleSelect = document.getElementById('wizard-vehicle');
    const countryInput = document.getElementById('wizard-country');
    const durationSelect = document.getElementById('wizard-duration');

    const type = typeSelect ? typeSelect.value : 'RCI Mercosur';
    const vehicle = vehicleSelect ? vehicleSelect.value : 'Automóvil';
    const country = countryInput && countryInput.value.trim() ? countryInput.value.trim() : 'Extranjero';
    const duration = durationSelect ? durationSelect.value : '30 días';

    // Registro automático en Firebase si está disponible
    if (typeof window.saveWebLeadToFirebase === 'function') {
      window.saveWebLeadToFirebase({
        tipoSeguro: type,
        vehiculo: vehicle,
        paisMatricula: country,
        duracion: duration,
        origen: 'cotizador_express_rci_soapex'
      });
    }

    let msg = "";
    if (currentLang === 'es') {
      msg = `Hola Jeanette! Necesito cotizar/emitir el seguro: ${type}. Tipo de vehículo: ${vehicle}, Matrícula/País: ${country}, Duración: ${duration}. ¿Podrías indicarme los pasos y costos?`;
    } else {
      msg = `Hello Jeanette! I would like to quote/issue the insurance: ${type}. Vehicle: ${vehicle}, Plate/Country: ${country}, Duration: ${duration}. Could you guide me with the steps and quote?`;
    }

    sendWhatsAppMessage(msg);
  });
}

/* ==========================================================================
   4. WHATSAPP INTELIGENTE CONTEXTUAL
   ========================================================================== */
function initWhatsApp() {
  const floatingBtn = document.getElementById('whatsapp-floating-btn');
  const heroBtn = document.getElementById('hero-wa-btn');
  const footerLink = document.getElementById('footer-wa-link');

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    let msg = "";

    if (activeCategory === 'rci') {
      msg = currentLang === 'es'
        ? "Hola Jeanette, requiero cotizar o emitir un seguro RCI Mercosur o SOAPEX para circular con mi vehículo."
        : "Hello Jeanette, I need a quote or issuance for RCI Mercosur or SOAPEX insurance for cross-border transit.";
    } else if (activeCategory === 'generales') {
      msg = currentLang === 'es'
        ? "Hola Jeanette, me gustaría recibir asesoría para Seguros Generales (vehículos, hogar, empresas o transporte)."
        : "Hello Jeanette, I would like advisory regarding General Insurance (vehicles, home, commercial, cargo).";
    } else if (activeCategory === 'colectivos') {
      msg = currentLang === 'es'
        ? "Hola Jeanette, me gustaría consultar por Seguros Colectivos para empresas o grupos familiares."
        : "Hello Jeanette, I would like to inquire about Group Insurance for companies or families.";
    } else {
      msg = currentLang === 'es'
        ? "Hola Jeanette, me gustaría recibir asesoría sobre Seguros de Vida y Salud para mi familia."
        : "Hello Jeanette, I would like advisory regarding Life and Health coverage for my family.";
    }

    sendWhatsAppMessage(msg);
  };

  if (floatingBtn) floatingBtn.addEventListener('click', handleWhatsAppClick);
  if (heroBtn) heroBtn.addEventListener('click', handleWhatsAppClick);
  if (footerLink) footerLink.addEventListener('click', handleWhatsAppClick);
}

function updateWhatsAppTooltip() {
  const tooltip = document.getElementById('whatsapp-tooltip-text');
  if (!tooltip) return;

  if (activeCategory === 'rci') {
    tooltip.textContent = currentLang === 'es' ? "Consultar RCI & SOAPEX" : "Chat RCI & SOAPEX";
  } else if (activeCategory === 'generales') {
    tooltip.textContent = currentLang === 'es' ? "Seguros Generales" : "General Insurance";
  } else if (activeCategory === 'colectivos') {
    tooltip.textContent = currentLang === 'es' ? "Seguros Colectivos" : "Group Insurance";
  } else {
    tooltip.textContent = currentLang === 'es' ? "Vida y Personas" : "Life & Personal";
  }
}

function sendWhatsAppMessage(text) {
  const url = `https://wa.me/${JEANETTE_PHONE}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

/* ==========================================================================
   5. MODAL DE CONTACTO & ASESORÍA
   ========================================================================== */
function initModals() {
  const backdrop = document.getElementById('contact-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalForm = document.getElementById('consultation-form');
  const modalTitle = document.getElementById('modal-title');
  const modalSubject = document.getElementById('form-subject');

  if (!backdrop) return;

  // Abrir modal desde botones de tarjetas y CTAs
  document.querySelectorAll('[data-open-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const subject = trigger.getAttribute('data-subject') || 'General';
      if (modalSubject) modalSubject.value = subject;
      
      if (modalTitle) {
        if (subject.toLowerCase().includes('alianza') || subject.toLowerCase().includes('partner')) {
          modalTitle.textContent = currentLang === 'es' ? "Solicitud de Alianza Comercial B2B" : "B2B Partnership Inquiry";
        } else {
          modalTitle.textContent = currentLang === 'es' ? `Asesoría: ${subject}` : `Advisory: ${subject}`;
        }
      }

      backdrop.classList.add('active');
    });
  });

  // Cerrar modal
  if (closeBtn) {
    closeBtn.addEventListener('click', () => backdrop.classList.remove('active'));
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) backdrop.classList.remove('active');
  });

  // Envío del formulario
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      const phone = document.getElementById('form-phone').value;
      const email = document.getElementById('form-email').value;
      const subject = modalSubject.value;
      const notes = document.getElementById('form-notes').value;

      // Registro automático en Firebase de Jeanette
      if (typeof window.saveWebLeadToFirebase === 'function') {
        window.saveWebLeadToFirebase({
          nombre: name,
          telefono: phone,
          email: email,
          asunto: subject,
          notas: notes,
          origen: 'modal_asesoria'
        });
      }

      // Notificación al usuario
      showToast(currentLang === 'es' 
        ? "¡Solicitud recibida! Jeanette se comunicará contigo a la brevedad." 
        : "Inquiry received! Jeanette will reach out to you shortly.");
      
      backdrop.classList.remove('active');
      modalForm.reset();

      // Enviar a WhatsApp para atención inmediata
      setTimeout(() => {
        const confirmMsg = currentLang === 'es'
          ? `Hola Jeanette! Acabo de enviar una solicitud en tu web. Mi nombre es ${name}. Asunto: ${subject}. Teléfono: ${phone}. Email: ${email}. Detalle: ${notes}`
          : `Hello Jeanette! I just sent a request via your website. Name: ${name}. Topic: ${subject}. Phone: ${phone}. Notes: ${notes}`;
        sendWhatsAppMessage(confirmMsg);
      }, 700);
    });
  }
}

/* ==========================================================================
   6. TOAST NOTICES
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;
  
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
