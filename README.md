# Huggies Pet Grooming — Landing

Landing estática, sin build ni dependencias. Se abre con doble clic o se sube tal cual
a cualquier hosting (Netlify, Vercel, S3, o el hosting actual de Wix vía HTML embed).

```
landing/
├─ index.html
├─ README.md
└─ assets/
   ├─ css/styles.css
   ├─ js/main.js
   ├─ fonts/          Chewy + Montserrat auto-hospedadas (168 KB, subset latin)
   └─ img/            logo en blanco/azul + 4 fotos del local optimizadas
```

Para previsualizar en local:

```bash
cd landing && python -m http.server 4173
```

---

## ⚠️ Lo único que bloquea publicar

**Falta la URL de reserva de Moego.** Está aislada en una sola constante:

```js
// assets/js/main.js — línea 10
const BOOKING_URL = null;   // ← poner acá la URL de Moego
```

Mientras siga en `null`, el botón "Agendar" **cae automáticamente al SMS** para no perder
el lead. Al cargar la URL, los 6 botones de agendar del sitio apuntan solos a Moego.
No hay que tocar nada más.

---

## Jerarquía de CTA

Implementada según lo pedido. El orden se respeta en el hero, en la sección final y en la
barra fija de mobile.

| # | Acción | Implementación |
|---|--------|----------------|
| 1 | Agendar turno | `BOOKING_URL` · hoy cae a SMS |
| 2 | Enviar SMS | `sms:` con mensaje previo en el idioma activo |
| 3 | Llamar | `tel:+19546685679` |
| 4 | Curso | Sección propia + SMS con mensaje específico del curso |

El formato `sms:+1...?&body=` es el que respetan tanto iOS como Android.

---

## Idiomas

Inglés y español con toggle en el header. El diccionario completo está en
`assets/js/main.js` (136 claves, `I18N.en` / `I18N.es`).

- **Detección**: parámetro `?lang=es` → `localStorage` → idioma del navegador → inglés.
- **Persiste** la elección entre visitas.
- Cambia también `<title>`, `meta description`, `<html lang>` y el texto del SMS.
- El español está escrito en **registro de Miami**, no rioplatense: "cita" en vez de
  "turno", tuteo neutro, sin voseo. El material original de la carpeta estaba en
  rioplatense pero era para reclutamiento interno, no de cara al cliente.

**Para editar textos**: se tocan solo las dos tablas de `I18N`. El HTML no se toca —
cada texto tiene su `data-i18n`.

### Pendiente de SEO

El toggle es JS, así que Google indexa **solo la versión en inglés**. Si el español va a
traer tráfico orgánico, hay que moverlo a una URL propia (`/es/`) con `hreflang`.
Como decisión de arranque el toggle alcanza; como estrategia de SEO en español, no.

---

## Decisiones tomadas y por qué

**Fuentes auto-hospedadas.** Chewy y Montserrat son las de la marca y están en Google
Fonts, pero un `<link>` a Google bloquea el render: si tarda o está bloqueado, la página
queda en blanco. Pasó literalmente durante el desarrollo. Ahora se sirven desde el propio
dominio: más rápido, sin terceros y sin ese riesgo.

**Sistema de naranjas por accesibilidad.** El naranja de marca (`#FB6E00`) con texto
blanco da **2,86:1** de contraste, debajo del mínimo de 4,5:1 de WCAG AA. No es un
detalle cosmético: en EE.UU. la accesibilidad web es exigible por ADA y Florida es uno de
los focos de litigio. La solución no fue descartar el naranja sino ordenarlo:

| Token | Hex | Uso | Contraste |
|-------|-----|-----|-----------|
| `--orange` | `#FB6E00` | Solo decorativo, sin texto encima | — |
| `--orange-cta` | `#C25100` | Superficies con texto blanco | 4,70:1 |
| `--orange-ink` | `#B34700` | Texto naranja sobre fondo claro | 5,50:1 |

A ojo se sigue leyendo como la marca. **Si el cliente rechaza el cambio**, la alternativa
que también cumple es mantener `#FB6E00` con texto navy `#14264F` (5,16:1).

**El botón "Agendar" del header desaparece en mobile.** La barra fija inferior ya lo
ofrece como CTA primario y siempre visible. Además, mantenerlo desbordaba el header a
375px.

---

## Datos que la landing da por ciertos

Todos salen de la carpeta. Los tres primeros **requieren confirmación del cliente**.

| Dato | Fuente | Estado |
|------|--------|--------|
| Precios S/M/L/XL, salón y móvil | Fundamentos de Marketing | ⚠️ **De diciembre 2025 — confirmar** |
| Promos 10% y $5 por referido | Fundamentos de Marketing | ⚠️ **Confirmar vigencia** |
| Dirección "12239 Sheridan St, Cooper City" | Nº leído de la fachada + doc | ⚠️ **Falta CP y confirmar ciudad** |
| Teléfono (954) 668-5679 | Vidriera + todos los copies | ✅ |
| Horario Lun–Sáb 8–17, walk-ins | Vidriera del local | ✅ |
| Especialidades (senior, discapacidad…) | Vidriera del local | ✅ |
| Boarding y daycare | Vidriera del local | ✅ Existe, faltan precios |
| Curso: 8 semanas, máx 3, pago adelantado | Planning mayo/junio 2026 | ✅ |

Los precios se publican como rango con la aclaración de que el precio final depende del
tamaño, el estado del pelaje y los add-ons. **No publicar sin que el cliente los confirme.**

---

## Lo que falta

- **Fotos del camión móvil.** El diferencial central del negocio no tiene una sola foto en
  toda la carpeta. La sección "Cómo funciona el móvil" hoy va sin imagen. Es el pedido más
  urgente.
- **Paquetes reales.** La landing todavía no lista qué incluye cada paquete, porque los
  Fundamentos dicen Basic Bath / Full Bath / Full Groom y la vidriera dice BASIC /
  PREMIUM. Hay que sacar la lista de Moego, que es la fuente operativa.
- **Reseñas.** No hay ni un testimonio en la carpeta. La sección de prueba social no está
  construida por falta de material.
- **Logo vectorial.** Los PNG salieron de recortar los que estaban incrustados en
  `Logos.docx`. Para retina y para el favicon conviene el SVG original.
- **Fotos sin decoración navideña.** Las del local tienen guirnalda de Navidad.
- **Favicon.**
- **Google Business Profile** enlazado y con NAP idéntico al de la landing.

---

## Verificado

- Sin scroll horizontal en 14 anchos, de 360px a 1440px.
- Contraste WCAG AA en los 116 elementos de texto medidos sobre el render real.
- Áreas táctiles ≥ 44px.
- Toggle de idioma: cambia las 136 claves, el título, la meta y el idioma del SMS.
- Los 4 CTA cableados y con fallback.
- Fuentes cargan; sin peticiones a terceros; sin imágenes rotas.
- Schema `PetGroomer` con dirección, horario y zona de cobertura.
- `prefers-reduced-motion` respetado · foco visible por teclado · skip link.

**No verificado visualmente**: la herramienta de captura de pantalla del entorno no
funcionó, así que el layout se auditó por medición del DOM, no mirándolo. Conviene una
pasada de ojo humana antes de mostrarlo al cliente.
