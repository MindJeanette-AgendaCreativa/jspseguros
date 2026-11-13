/**
 * JSP SEGUROS · JEANETTE SALINAS PONCE
 * Corredora de Seguros Titular
 * "Yo gestiono por ti."
 *
 * Motor interactivo: Bilingüe (ES/EN), 4 Líneas de Servicio Oficiales,
 * Cotizador Express RCI Mercosur / SOAPEX, WhatsApp Dinámico y Registro de Leads.
 */

// Teléfono oficial de Jeanette (formato internacional para wa.me)
const JEANETTE_PHONE = "56996173591"; 

// Textos bilingües oficiales
const translations = {
  es: {
    brand_sub: "Corredora de Seguros Titular · CMF",
    nav_services: "Servicios",
    nav_rci: "RCI & SOAPEX",
    nav_carriers: "Compañías CMF",
    nav_testimonials: "Testimonios",
    nav_faq: "Preguntas",
    nav_alliances: "Alianzas B2B",
    nav_cta: "Solicitar Asesoría",
    floating_clara_text: "Pregúntale a Clara",

    hero_tag: "Jeanette Salinas Ponce · Corredora de Seguros Titular",
    hero_title: 'Asesoría Profesional en Seguros <br><span class="highlight">y Protección Patrimonial</span>',
    hero_slogan: "Yo gestiono por ti.",
    hero_desc: "En JSP Seguros entrego asesoría profesional y personalizada, orientada a proteger los bienes, el patrimonio y el bienestar de personas, familias y empresas. Identifico las necesidades de cada cliente y busco alternativas de protección adecuadas, acompañándolo desde la cotización y contratación hasta la renovación y gestión de sus seguros.",
    hero_btn_generales: "Cotizar un Seguro",
    hero_note_generales: "Formulario web · Respuesta por correo",
    hero_btn_rci: "Cotizar RCI Mercosur / SOAPEX",
    hero_note_rci: "Formulario específico · Envío por correo",
    hero_ctas_reassurance: "Completa el formulario y te responderemos por correo",
    hero_trust_1: "Corredora de Seguros Titular CMF",
    hero_trust_2: "Atención Nacional e Internacional",
    hero_trust_3: "Gestión Integral: Cotización a Siniestro",

    profile_name: "Jeanette Salinas Ponce",
    profile_role: "Corredora de Seguros",
    profile_badge: "Registro CMF Verificado",
    stat_1_num: "100%",
    stat_1_label: "Asesoría Profesional y Personalizada",
    stat_2_num: "5",
    stat_2_label: "Compañías Líderes CMF en Chile",
    profile_direct_tag: "Acceso Exclusivo a WhatsApp",
    profile_box_text: "¿Necesitas atención directa de tu corredora titular?",
    profile_box_btn: "Hablar con Jeanette",
    profile_box_channel: "Atención directa · WhatsApp de Jeanette",
    floating_clara_sub: "Asistente virtual de JSP",

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
    nav_services: "Services",
    nav_rci: "RCI & SOAPEX",
    nav_carriers: "CMF Companies",
    nav_testimonials: "Testimonials",
    nav_faq: "FAQ",
    nav_alliances: "B2B Alliances",
    nav_cta: "Request Advisory",
    floating_clara_text: "Ask Clara",

    hero_tag: "Jeanette Salinas Ponce · Licensed Insurance Broker",
    hero_title: 'Professional Insurance Advisory <br><span class="highlight">& Asset Protection</span>',
    hero_slogan: "I manage everything for you.",
    hero_desc: "At JSP Seguros I provide professional, personalized advisory aimed at protecting the assets, property, and well-being of individuals, families, and businesses. I assess each client's specific needs and find suitable protection alternatives, supporting them from initial quotation and contracting through renewals and claims management.",
    hero_btn_generales: "Get an Insurance Quote",
    hero_note_generales: "Web form · Response by email",
    hero_btn_rci: "Quote RCI Mercosur / SOAPEX",
    hero_note_rci: "Specific form · Sent by email",
    hero_ctas_reassurance: "Fill out the form and we will reply by email",
    hero_trust_1: "Licensed Broker CMF Chile",
    hero_trust_2: "Domestic & International Clients",
    hero_trust_3: "Full Support: Quote to Claims",

    profile_name: "Jeanette Salinas Ponce",
    profile_role: "Licensed Insurance Broker",
    profile_badge: "Verified CMF License",
    stat_1_num: "100%",
    stat_1_label: "Professional & Personal Advisory",
    stat_2_num: "5",
    stat_2_label: "Top CMF-Regulated Insurers in Chile",
    profile_direct_tag: "Exclusive WhatsApp Access",
    profile_box_text: "Need direct assistance from your licensed broker?",
    profile_box_btn: "Speak with Jeanette",
    profile_box_channel: "Direct attention · Jeanette's WhatsApp",
    floating_clara_sub: "JSP Virtual Assistant",

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
  initFaq();
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
// Configuración de contacto para Clara (Asistente virtual de JSP)
// Se conectará al número propio de Clara cuando esté disponible (ej. "569XXXXXXXX")
const CLARA_PHONE = ""; 

function initWhatsApp() {
  const claraBtn = document.getElementById('clara-floating-btn');

  if (claraBtn) {
    claraBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (CLARA_PHONE && CLARA_PHONE.trim().length > 0) {
        // Conectado al número propio de Clara cuando esté disponible
        const msg = currentLang === 'es'
          ? "Hola Clara! Te escribo desde la web de JSP Seguros para hacerte una consulta."
          : "Hello Clara! I am writing from the JSP Seguros website to ask a question.";
        window.open(`https://wa.me/${CLARA_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
      } else {
        // Mientras se habilita su número propio, abre el formulario web para respuesta por correo
        const backdrop = document.getElementById('contact-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalSubject = document.getElementById('form-subject');
        const modalNotes = document.getElementById('form-notes');
        
        if (modalSubject) modalSubject.value = "Consulta Asistente Clara";
        if (modalTitle) modalTitle.textContent = currentLang === 'es' ? "Pregúntale a Clara · Asistente Virtual de JSP" : "Ask Clara · JSP Virtual Assistant";
        if (modalNotes) modalNotes.placeholder = currentLang === 'es' 
          ? "Escribe tu consulta para Clara (vehículos, RCI Mercosur, hogar, colectivos...). Te responderemos por correo a la brevedad." 
          : "Type your inquiry for Clara (vehicles, RCI Mercosur, home, group policies...). We will reply by email shortly.";
        
        if (backdrop) backdrop.classList.add('active');
      }
    });
  }
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

  // Envío del formulario integrado con Resend Serverless & Firebase
  if (modalForm) {
    const submitBtn = document.getElementById('form-submit-btn') || modalForm.querySelector('button[type="submit"]');
    const feedbackEl = document.getElementById('form-feedback');
    const hpInput = document.getElementById('form-hp');

    modalForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const phoneInput = document.getElementById('form-phone');
      const emailInput = document.getElementById('form-email');
      const notesInput = document.getElementById('form-notes');

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = (modalSubject && modalSubject.value) ? modalSubject.value : 'General';
      const notes = notesInput ? notesInput.value.trim() : '';
      const hp = hpInput ? hpInput.value.trim() : '';

      // Validación en cliente
      if (!name || !phone || !email) {
        if (feedbackEl) {
          feedbackEl.className = 'feedback-alert-error';
          feedbackEl.innerHTML = currentLang === 'es'
            ? 'Por favor completa todos los campos obligatorios (*).'
            : 'Please complete all required fields (*).';
          feedbackEl.style.display = 'block';
        }
        return;
      }

      // Estado de envío: prevenir doble clic y mostrar indicador de carga
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <span style="display:inline-block; width:16px; height:16px; border:2px solid #ffffff; border-top-color:transparent; border-radius:50%; animation:spin 0.8s linear infinite; vertical-align:middle; margin-right:8px;"></span>
          ${currentLang === 'es' ? 'Enviando solicitud...' : 'Sending request...'}
        `;
      }

      if (feedbackEl) {
        feedbackEl.style.display = 'none';
        feedbackEl.innerHTML = '';
      }

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            subject,
            notes,
            _hp: hp
          })
        });

        const result = await response.json().catch(() => ({}));

        if (response.ok && result.success) {
          // Éxito confirmado por el servidor
          if (feedbackEl) {
            feedbackEl.className = 'feedback-alert-success';
            feedbackEl.innerHTML = currentLang === 'es'
              ? `<strong>¡Solicitud enviada con éxito!</strong><br>Hemos enviado un correo de confirmación a <strong>${escapeHtml(email)}</strong>. Jeanette revisará tu solicitud y se contactará a la brevedad.`
              : `<strong>Request sent successfully!</strong><br>A confirmation email has been sent to <strong>${escapeHtml(email)}</strong>. Jeanette will review your details and reach out shortly.`;
            feedbackEl.style.display = 'block';
          }

          // Mantener respaldo en Firebase de JSP Seguros
          if (typeof window.saveWebLeadToFirebase === 'function') {
            try {
              window.saveWebLeadToFirebase({
                nombre: name,
                telefono: phone,
                email: email,
                asunto: subject,
                notas: notes,
                origen: 'modal_asesoria_resend',
                resendAdminId: result.adminEmail?.id || null,
                resendClientId: result.clientEmail?.id || null
              });
            } catch (fbErr) {
              console.warn('[Firebase] Registro no crítico:', fbErr);
            }
          }

          showToast(currentLang === 'es' 
            ? "¡Solicitud enviada! Revisa tu correo de confirmación." 
            : "Inquiry sent! Check your confirmation email.");

          modalForm.reset();

          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHtml;
          }

          // Cierre suave después de 4.5 segundos permitiendo leer el mensaje
          setTimeout(() => {
            if (backdrop.classList.contains('active')) {
              backdrop.classList.remove('active');
              if (feedbackEl) feedbackEl.style.display = 'none';
            }
          }, 4500);

        } else {
          // Fallo reportado por el servidor
          const errorMsg = result.error || (result.errors && result.errors.join(' | ')) || 'No se pudo enviar la solicitud. Por favor intenta nuevamente.';
          if (feedbackEl) {
            feedbackEl.className = 'feedback-alert-error';
            feedbackEl.innerHTML = `<strong>Error al enviar:</strong> ${escapeHtml(errorMsg)}<br><small>Si el problema persiste, puedes escribirnos directamente por WhatsApp.</small>`;
            feedbackEl.style.display = 'block';
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHtml;
          }
        }

      } catch (networkErr) {
        console.error('[Error de red al enviar formulario]:', networkErr);
        if (feedbackEl) {
          feedbackEl.className = 'feedback-alert-error';
          feedbackEl.innerHTML = currentLang === 'es'
            ? '<strong>Error de conexión:</strong> No pudimos conectar con el servidor. Revisa tu conexión a internet o contáctanos por WhatsApp.'
            : '<strong>Connection error:</strong> Could not connect to server. Check your connection or contact us via WhatsApp.';
          feedbackEl.style.display = 'block';
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }
      }
    });
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
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

/* ==========================================================================
   7. PREGUNTAS FRECUENTES (FAQ ACORDEÓN)
   ========================================================================== */
function initFaq() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}
