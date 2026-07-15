/* ============================================================
   Huggies Pet Grooming — Landing
   ============================================================ */

/* URL pública de reserva (MoeGo) — verificada y activa. */
const BOOKING_URL = "https://booking.moego.pet/ol/HuggiesPetGrooming/landing";

const PHONE = "+19546685679";

const SMS_BODY = {
  en: "Hi Huggies! I'd like to book a grooming appointment for my pet.",
  es: "¡Hola Huggies! Quisiera agendar una cita de grooming para mi mascota."
};
const SMS_BODY_COURSE = {
  en: "Hi Huggies! I'd like more information about the grooming course.",
  es: "¡Hola Huggies! Quisiera más información sobre el curso de grooming."
};

/* ============================================================
   Diccionario
   ES en registro de Miami (no rioplatense): "cita", tuteo, sin voseo.
   Las claves "a11y.*" alimentan atributos (aria-label / alt) vía
   data-i18n-attr-*, no textContent.
   ============================================================ */
const I18N = {
  en: {
    "skip": "Skip to content",

    "a11y.nav": "Main",
    "a11y.quickactions": "Quick actions",
    "a11y.img.storefront": "Huggies Pet Grooming salon storefront on Sheridan St, Hollywood FL",

    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.specialties": "Specialties",
    "nav.course": "Course",
    "nav.visit": "Visit us",

    "cta.book": "Book now",
    "cta.book.long": "Book your appointment",
    "cta.sms": "Text us",
    "cta.call": "Call us",
    "cta.course": "Want to become a groomer? See our course",

    "hero.h1": "Dog & Cat Grooming in Hollywood, FL — Salon & Mobile",
    "hero.sub": "A spa experience at our Sheridan St salon or right at your door. Gentle, professional dog grooming and cat grooming across Miami-Dade & Broward — caring for South Florida pets since 2014.",

    "trust.1.k": "Since 2014",
    "trust.1.v": "Family owned",
    "trust.2.k": "Mon–Sat",
    "trust.2.v": "8:00am – 5:00pm, walk-ins ok",
    "trust.3.k": "Salon + Mobile",
    "trust.3.v": "You choose",
    "trust.4.k": "Miami-Dade",
    "trust.4.v": "& Broward",

    "services.eyebrow": "Two ways to groom",
    "services.h2": "Come to us, or we come to you",
    "services.lede": "Same groomers, same care, same love. The only difference is who does the driving.",
    "services.mobile.tag": "Most popular",
    "services.mobile.h3": "Mobile dog & cat grooming",
    "services.mobile.p": "Our fully equipped van pulls up to your door. No traffic, no waiting room, no stress for your pet — they never leave their own street.",
    "services.mobile.li1": "One-on-one attention, no cages",
    "services.mobile.li2": "Ideal for anxious or senior pets",
    "services.mobile.li3": "You keep working while we groom",
    "services.mobile.cta": "Book mobile grooming",
    "services.salon.h3": "Grooming at our salon",
    "services.salon.p": "Visit us at 12239 Sheridan St. Walk-ins are welcome, and it's the best option for full styling and bigger dogs.",
    "services.salon.li1": "Walk-ins welcome, Mon–Sat",
    "services.salon.li2": "Full grooming and styling",
    "services.salon.li3": "Lower price than mobile",
    "services.salon.cta": "Book at the salon",

    "pricing.eyebrow": "Clear pricing",
    "pricing.h2": "No surprises. Just clear pricing.",
    "pricing.lede": "Prices depend on your pet's size and the package you choose — not on the day, not on who's asking. These are our real starting prices.",
    "pricing.bath.h3": "Bath Package",
    "pricing.bath.p": "Bath, blow-dry, sanitary trim, ear cleaning, teeth brushing, nail clipping & filing, perfume and bandana.",
    "pricing.full.h3": "Full Groom Package",
    "pricing.full.p": "Everything in the Bath Package, plus a full body haircut or trim styled to your pet.",
    "pricing.th.size": "Size",
    "pricing.th.bath.salon": "Bath · salon",
    "pricing.th.bath.mobile": "Bath · mobile",
    "pricing.th.full.salon": "Full groom · salon",
    "pricing.th.full.mobile": "Full groom · mobile",
    "pricing.s": "Small",
    "pricing.s.ex": "0–25 lb",
    "pricing.m": "Medium",
    "pricing.m.ex": "26–40 lb",
    "pricing.l": "Large",
    "pricing.l.ex": "41–70 lb",
    "pricing.xl": "Extra large",
    "pricing.xl.ex": "71 lb and up",
    "pricing.cats": "Cats",
    "pricing.cats.ex": "All sizes",
    "pricing.fine": "Starting prices. Doodles, double-coated breeds and coats that need extra time may cost more — we'll always confirm the final price with you before we start, never after. Prices don't include 6% FL sales tax.",
    "pricing.addons.h3": "Add only what your pet needs",
    "addon.1": "Dental plaque removal · $85–100",
    "addon.2": "Nail clipping & filing · $30",
    "addon.3": "Deep ear cleaning · $20",
    "addon.4": "Deshedding · $30",
    "addon.5": "De-matting · $30",
    "addon.6": "Anal glands expression · $15",
    "addon.7": "Flea & tick shampoo · $30",
    "addon.8": "Perfume · $12",
    "addon.9": "Hypoallergenic shampoo · free",

    "spec.eyebrow": "What sets us apart",
    "spec.h2": "The pets other salons turn away",
    "spec.lede": "Not every pet can handle a busy salon floor. These are the cases we're trained for — and the reason many families come to us after trying everywhere else.",
    "spec.1.h": "Senior dog grooming",
    "spec.1.p": "Slower, calmer sessions with breaks. We work around stiff joints and low tolerance for standing.",
    "spec.2.h": "Special needs dog grooming",
    "spec.2.p": "Anxious, reactive or recovering pets, handled one-on-one at their own pace.",
    "spec.3.h": "Handicapped dogs",
    "spec.3.p": "Mobility-limited pets groomed with support and positioning that keeps them comfortable.",
    "spec.4.h": "Dog teeth cleaning without anesthesia",
    "spec.4.p": "Gentle dental plaque removal as part of grooming — no sedation, with an oral evaluation first.",
    "spec.5.h": "Deshedding treatment",
    "spec.5.p": "For double coats that leave half of themselves on your sofa.",
    "spec.6.h": "Deep ear cleaning",
    "spec.6.p": "Careful cleaning for ears that need more than a routine wipe.",
    "spec.7.h": "Flea & tick treatment",
    "spec.7.p": "Done with the bath, so your home stays clear too.",
    "spec.8.h": "Cat grooming — bath & shave",
    "spec.8.p": "Yes, cats too. Quietly, patiently, and with a lot of respect.",

    "how.eyebrow": "How mobile works",
    "how.h2": "Three steps, one hour, zero traffic",
    "how.1.h": "You book a time",
    "how.1.p": "Pick a slot that fits your day. Online, by text, or by phone — whatever you prefer.",
    "how.2.h": "The van comes to you",
    "how.2.p": "We park at your door with water, power and everything we need. Your pet walks in from home.",
    "how.3.h": "They come back fresh",
    "how.3.p": "Clean, brushed, trimmed and calm — usually in about an hour, without ever leaving your street.",
    "how.cov.h3": "Where the van goes",
    "how.cov.p": "Hollywood · Pembroke Pines · Cooper City · Miramar · Davie · Plantation · Sunrise · Tamarac · Coral Springs · Fort Lauderdale · Miami-Dade",
    "how.cov.cta": "Check if we reach your address",

    "promo.1.h": "off your first groom",
    "promo.1.p": "First time with Huggies? We'd like to make it easy to say yes.",
    "promo.2.h": "for every friend you refer",
    "promo.2.p": "Tell a neighbor with a dog. You both save on your next visit.",

    "course.eyebrow": "Learn grooming",
    "course.h2": "Become a professional groomer",
    "course.p": "Learn the craft hands-on, in groups of no more than three students, taught by groomers who do this every single day. Eight weeks, sixteen classes, and a certificate at the end.",
    "course.f1.k": "Format",
    "course.f1.v": "In person, max 3 students",
    "course.f2.k": "Length",
    "course.f2.v": "8 weeks · 16 classes",
    "course.f3.k": "Finish with",
    "course.f3.v": "Practical exam + certificate",
    "course.cta": "Ask about the course",
    "course.fine": "Seats are confirmed with full payment in advance. No partial payments or holds.",
    "course.syl.h": "What you'll cover",
    "course.syl.1": "Introduction to professional grooming",
    "course.syl.2": "Basic tools and their use",
    "course.syl.3": "Professional bathing and drying",
    "course.syl.4": "Brushing and pain-free detangling",
    "course.syl.5": "Nails, ears, eyes and glands",
    "course.syl.6": "Cutting with machine and scissors",
    "course.syl.7": "Grooming by breed",
    "course.syl.8": "Final practical class + evaluation",

    "also.eyebrow": "Also at Huggies",
    "also.h2": "Boarding & daycare for dogs",
    "also.p": "Going away, or just need a hand for the day? Your dog can stay with people who already know their name — and their haircut.",
    "also.cta": "Ask about availability",

    "visit.eyebrow": "Visit the salon",
    "visit.h2": "Find us on Sheridan St",
    "visit.addr.k": "Address",
    "visit.hours.k": "Hours",
    "visit.hours.v": "Mon – Sat, 8:00am – 5:00pm",
    "visit.hours.v2": "Walk-ins and appointments",
    "visit.phone.k": "Phone",
    "visit.area.k": "Mobile service area",
    "visit.area.v": "Miami-Dade & Broward",
    "visit.directions": "Get directions on Google Maps",

    "final.h2": "Your pet's next spa day starts here",
    "final.p": "Pick the time, we'll handle the rest — at our salon or at your door.",

    "footer.tag": "Salon & mobile pet grooming in Miami-Dade & Broward — family owned since 2014.",
    "footer.contact": "Contact",
    "footer.follow": "Follow",

    "_title": "Dog & Cat Grooming in Hollywood, FL — Salon & Mobile Pet Grooming | Huggies",
    "_desc": "Dog grooming and cat grooming in Hollywood, FL — at our Sheridan St salon or with our mobile grooming van across Miami-Dade & Broward. Clear pricing by size, senior & special-needs friendly. Book online or text (954) 668-5679."
  },

  es: {
    "skip": "Ir al contenido",

    "a11y.nav": "Principal",
    "a11y.quickactions": "Acciones rápidas",
    "a11y.img.storefront": "Fachada del salón Huggies Pet Grooming en Sheridan St, Hollywood FL",

    "nav.services": "Servicios",
    "nav.pricing": "Precios",
    "nav.specialties": "Especialidades",
    "nav.course": "Curso",
    "nav.visit": "Visítanos",

    "cta.book": "Agendar",
    "cta.book.long": "Agenda tu cita",
    "cta.sms": "Escríbenos",
    "cta.call": "Llámanos",
    "cta.course": "¿Quieres ser groomer? Conoce nuestro curso",

    "hero.h1": "Grooming para perros y gatos en Hollywood, FL — Salón y a domicilio",
    "hero.sub": "Una experiencia de spa en nuestro salón de Sheridan St o en la puerta de tu casa. Grooming profesional y con paciencia para perros y gatos en Miami-Dade y Broward — cuidando mascotas del sur de Florida desde 2014.",

    "trust.1.k": "Desde 2014",
    "trust.1.v": "Negocio familiar",
    "trust.2.k": "Lun–Sáb",
    "trust.2.v": "8:00am – 5:00pm, sin cita ok",
    "trust.3.k": "Salón + Móvil",
    "trust.3.v": "Tú eliges",
    "trust.4.k": "Miami-Dade",
    "trust.4.v": "y Broward",

    "services.eyebrow": "Dos formas de hacerlo",
    "services.h2": "Ven al salón, o vamos nosotros",
    "services.lede": "Los mismos groomers, el mismo cuidado, el mismo cariño. La única diferencia es quién maneja.",
    "services.mobile.tag": "El más pedido",
    "services.mobile.h3": "Grooming a domicilio para perros y gatos",
    "services.mobile.p": "Nuestra van llega completamente equipada hasta tu puerta. Sin tráfico, sin sala de espera y sin estrés para tu mascota: nunca sale de su propia cuadra.",
    "services.mobile.li1": "Atención uno a uno, sin jaulas",
    "services.mobile.li2": "Ideal para mascotas ansiosas o mayores",
    "services.mobile.li3": "Tú sigues con tu día mientras lo hacemos",
    "services.mobile.cta": "Agendar servicio a domicilio",
    "services.salon.h3": "Grooming en nuestro salón",
    "services.salon.p": "Visítanos en 12239 Sheridan St. Puedes venir sin cita, y es la mejor opción para cortes completos y perros grandes.",
    "services.salon.li1": "Puedes venir sin cita, lun–sáb",
    "services.salon.li2": "Corte y estilismo completo",
    "services.salon.li3": "Más económico que el móvil",
    "services.salon.cta": "Agendar en el salón",

    "pricing.eyebrow": "Precios claros",
    "pricing.h2": "Sin sorpresas. Precios claros.",
    "pricing.lede": "El precio depende del tamaño de tu mascota y del paquete que elijas — no del día ni de quién pregunte. Estos son nuestros precios base reales.",
    "pricing.bath.h3": "Paquete de Baño",
    "pricing.bath.p": "Baño, secado, recorte sanitario, limpieza de oídos, cepillado de dientes, corte y limado de uñas, perfume y bandana.",
    "pricing.full.h3": "Paquete Full Groom",
    "pricing.full.p": "Todo lo del Paquete de Baño, más un corte de pelo completo al estilo de tu mascota.",
    "pricing.th.size": "Tamaño",
    "pricing.th.bath.salon": "Baño · salón",
    "pricing.th.bath.mobile": "Baño · móvil",
    "pricing.th.full.salon": "Full groom · salón",
    "pricing.th.full.mobile": "Full groom · móvil",
    "pricing.s": "Pequeño",
    "pricing.s.ex": "0–25 lb",
    "pricing.m": "Mediano",
    "pricing.m.ex": "26–40 lb",
    "pricing.l": "Grande",
    "pricing.l.ex": "41–70 lb",
    "pricing.xl": "Extra grande",
    "pricing.xl.ex": "71 lb o más",
    "pricing.cats": "Gatos",
    "pricing.cats.ex": "Todos los tamaños",
    "pricing.fine": "Precios base. Doodles, razas de doble pelaje y pelajes que requieren más tiempo pueden costar más — siempre te confirmamos el precio final antes de empezar, nunca después. Los precios no incluyen el 6% de impuesto de FL.",
    "pricing.addons.h3": "Agrega solo lo que tu mascota necesita",
    "addon.1": "Limpieza de placa dental · $85–100",
    "addon.2": "Corte y limado de uñas · $30",
    "addon.3": "Limpieza profunda de oídos · $20",
    "addon.4": "Deshedding · $30",
    "addon.5": "Desenredado · $30",
    "addon.6": "Glándulas anales · $15",
    "addon.7": "Shampoo antipulgas · $30",
    "addon.8": "Perfume · $12",
    "addon.9": "Shampoo hipoalergénico · gratis",

    "spec.eyebrow": "Lo que nos hace distintos",
    "spec.h2": "Las mascotas que otros salones rechazan",
    "spec.lede": "No todas las mascotas toleran un salón lleno de gente. Estos son los casos para los que estamos preparados — y la razón por la que muchas familias llegan a nosotros después de intentarlo en todas partes.",
    "spec.1.h": "Grooming para perros mayores",
    "spec.1.p": "Sesiones más lentas y con pausas. Trabajamos con articulaciones rígidas y poca tolerancia a estar de pie.",
    "spec.2.h": "Grooming para necesidades especiales",
    "spec.2.p": "Mascotas ansiosas, reactivas o en recuperación, atendidas uno a uno y a su propio ritmo.",
    "spec.3.h": "Perros con discapacidad",
    "spec.3.p": "Mascotas con movilidad limitada, con el apoyo y la postura que las mantiene cómodas.",
    "spec.4.h": "Limpieza dental sin anestesia",
    "spec.4.p": "Removemos la placa dental como parte del grooming — sin sedación y con una evaluación oral previa.",
    "spec.5.h": "Tratamiento de deshedding",
    "spec.5.p": "Para pelajes dobles que dejan la mitad de sí mismos en tu sofá.",
    "spec.6.h": "Limpieza profunda de oídos",
    "spec.6.p": "Limpieza cuidadosa para oídos que necesitan más que una pasada de rutina.",
    "spec.7.h": "Tratamiento antipulgas y garrapatas",
    "spec.7.p": "Se hace junto con el baño, para que tu casa también quede libre.",
    "spec.8.h": "Grooming para gatos — baño y corte",
    "spec.8.p": "Sí, también gatos. En silencio, con paciencia y con mucho respeto.",

    "how.eyebrow": "Cómo funciona el móvil",
    "how.h2": "Tres pasos, una hora, cero tráfico",
    "how.1.h": "Eliges el horario",
    "how.1.p": "Escoge el momento que te acomode. En línea, por mensaje o por teléfono — como prefieras.",
    "how.2.h": "La van llega a tu puerta",
    "how.2.p": "Nos estacionamos frente a tu casa con agua, energía y todo lo necesario. Tu mascota entra desde su propia casa.",
    "how.3.h": "Vuelve fresco y feliz",
    "how.3.p": "Limpio, cepillado, recortado y tranquilo — normalmente en una hora, sin salir nunca de tu cuadra.",
    "how.cov.h3": "Hasta dónde llega la van",
    "how.cov.p": "Hollywood · Pembroke Pines · Cooper City · Miramar · Davie · Plantation · Sunrise · Tamarac · Coral Springs · Fort Lauderdale · Miami-Dade",
    "how.cov.cta": "Verifica si llegamos a tu dirección",

    "promo.1.h": "en tu primer grooming",
    "promo.1.p": "¿Primera vez en Huggies? Queremos que te sea fácil decir que sí.",
    "promo.2.h": "por cada amigo que nos refieras",
    "promo.2.p": "Cuéntale a un vecino con perro. Ahorran los dos en su próxima visita.",

    "course.eyebrow": "Aprende grooming",
    "course.h2": "Conviértete en groomer profesional",
    "course.p": "Aprende el oficio con las manos, en grupos de máximo tres estudiantes, con groomers que hacen esto todos los días. Ocho semanas, dieciséis clases y un certificado al final.",
    "course.f1.k": "Modalidad",
    "course.f1.v": "Presencial, máx. 3 estudiantes",
    "course.f2.k": "Duración",
    "course.f2.v": "8 semanas · 16 clases",
    "course.f3.k": "Terminas con",
    "course.f3.v": "Examen práctico + certificado",
    "course.cta": "Pregunta por el curso",
    "course.fine": "El cupo se confirma con el pago total por adelantado. No se aceptan pagos parciales ni reservas sin pago.",
    "course.syl.h": "Lo que vas a ver",
    "course.syl.1": "Introducción al grooming profesional",
    "course.syl.2": "Herramientas básicas y su uso",
    "course.syl.3": "Baño y secado profesional",
    "course.syl.4": "Cepillado y desenredado sin dolor",
    "course.syl.5": "Uñas, oídos, ojos y glándulas",
    "course.syl.6": "Corte con máquina y tijera",
    "course.syl.7": "Grooming por raza",
    "course.syl.8": "Clase práctica final + evaluación",

    "also.eyebrow": "También en Huggies",
    "also.h2": "Boarding y daycare para perros",
    "also.p": "¿Te vas de viaje o necesitas una mano por el día? Tu perro se queda con gente que ya sabe su nombre — y su corte.",
    "also.cta": "Pregunta por disponibilidad",

    "visit.eyebrow": "Visita el salón",
    "visit.h2": "Encuéntranos en Sheridan St",
    "visit.addr.k": "Dirección",
    "visit.hours.k": "Horario",
    "visit.hours.v": "Lun – Sáb, 8:00am – 5:00pm",
    "visit.hours.v2": "Con cita o sin cita",
    "visit.phone.k": "Teléfono",
    "visit.area.k": "Zona del servicio móvil",
    "visit.area.v": "Miami-Dade y Broward",
    "visit.directions": "Cómo llegar en Google Maps",

    "final.h2": "El próximo spa day de tu mascota empieza aquí",
    "final.p": "Tú eliges la hora, nosotros nos encargamos del resto — en el salón o en tu puerta.",

    "footer.tag": "Grooming en salón y a domicilio en Miami-Dade y Broward — negocio familiar desde 2014.",
    "footer.contact": "Contacto",
    "footer.follow": "Síguenos",

    "_title": "Grooming para perros y gatos en Hollywood, FL — Salón y a domicilio | Huggies",
    "_desc": "Grooming para perros y gatos en Hollywood, FL — en nuestro salón de Sheridan St o con nuestra van a domicilio en Miami-Dade y Broward. Precios claros por tamaño, especialistas en perros mayores y con necesidades especiales. Agenda en línea o escribe al (954) 668-5679."
  }
};

/* ============================================================
   Idioma
   ============================================================ */
const SUPPORTED = ["en", "es"];

function detectLang() {
  const fromUrl = (new URLSearchParams(location.search).get("lang") || "").toLowerCase();
  if (SUPPORTED.includes(fromUrl)) {
    // El parámetro sirve para el primer aterrizaje; se limpia para que
    // la preferencia guardada gane en las próximas recargas.
    try { history.replaceState(null, "", location.pathname + location.hash); } catch (e) { /* no-op */ }
    return fromUrl;
  }

  try {
    const saved = localStorage.getItem("huggies-lang");
    if (SUPPORTED.includes(saved)) return saved;
  } catch (e) { /* storage bloqueado: seguimos con el navegador */ }

  const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
  return nav === "es" ? "es" : "en";
}

let currentLang = detectLang();

function applyLang(lang) {
  const dict = I18N[lang];
  if (!dict) return;
  currentLang = lang;

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const val = dict[el.getAttribute("data-i18n")];
    if (val != null) el.textContent = val;
  });

  // Atributos traducibles: data-i18n-attr-aria-label, data-i18n-attr-alt, ...
  document.querySelectorAll("[data-i18n-attr-aria-label]").forEach(function (el) {
    const val = dict[el.getAttribute("data-i18n-attr-aria-label")];
    if (val != null) el.setAttribute("aria-label", val);
  });
  document.querySelectorAll("[data-i18n-attr-alt]").forEach(function (el) {
    const val = dict[el.getAttribute("data-i18n-attr-alt")];
    if (val != null) el.setAttribute("alt", val);
  });

  document.documentElement.lang = lang;
  document.title = dict._title;

  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", dict._desc);

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    const on = btn.dataset.lang === lang;
    btn.classList.toggle("is-on", on);
    btn.setAttribute("aria-pressed", String(on));
  });

  try { localStorage.setItem("huggies-lang", lang); } catch (e) { /* no-op */ }

  wireActions();
}

document.querySelectorAll(".lang-btn").forEach(function (btn) {
  btn.addEventListener("click", function () { applyLang(btn.dataset.lang); });
});

/* ============================================================
   CTA — jerarquía: 1 agendar · 2 SMS · 3 llamar · 4 curso
   Los href básicos (tel:/sms:/booking) ya viven en el HTML, así
   la conversión no depende de que este script cargue. JS solo
   agrega el body del SMS en el idioma activo.
   ============================================================ */
function smsHref(body) {
  // "?&body=" es el formato que respetan tanto iOS como Android.
  return "sms:" + PHONE + "?&body=" + encodeURIComponent(body);
}

function wireActions() {
  const smsLink = smsHref(SMS_BODY[currentLang]);
  const telLink = "tel:" + PHONE;

  document.querySelectorAll(".js-book").forEach(function (el) {
    el.href = BOOKING_URL;
    el.target = "_blank";
    el.rel = "noopener";
  });

  document.querySelectorAll(".js-sms").forEach(function (el) { el.href = smsLink; });
  document.querySelectorAll(".js-call, .js-call-link").forEach(function (el) { el.href = telLink; });
  document.querySelectorAll(".js-course-sms").forEach(function (el) {
    el.href = smsHref(SMS_BODY_COURSE[currentLang]);
  });
}

/* ============================================================
   Header
   ============================================================ */
const header = document.getElementById("siteHeader");
let ticking = false;

function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(function () {
    header.classList.toggle("is-stuck", window.scrollY > 8);
    ticking = false;
  });
}
window.addEventListener("scroll", onScroll, { passive: true });

/* ============================================================
   Init
   ============================================================ */
document.getElementById("year").textContent = new Date().getFullYear();
applyLang(currentLang);
onScroll();
