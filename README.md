# Huggies Pet Grooming — Landing

**En producción: https://huggiesgrooming.com**

Landing estática bilingüe (EN/ES), sin build ni dependencias.

```
landing/
├─ index.html
├─ robots.txt · sitemap.xml
└─ assets/
   ├─ css/styles.css
   ├─ js/main.js       ← diccionario I18N (146 claves EN/ES) + config
   ├─ fonts/           Chewy + Montserrat auto-hospedadas (subset latin)
   └─ img/             logos con alfa, fotos del local, favicons
```

## Flujo de deploy

```
editar → python build.py → git commit → git push → auto-deploy (~7 s) → huggiesgrooming.com
```

> **`python build.py` no es opcional.** Hostinger sirve CSS y JS con
> `Cache-Control: max-age=604800` (7 días). Un visitante que ya estuvo en el sitio
> seguiría viendo el `main.js` viejo por una semana — y como el JS reescribe todos los
> textos vía el diccionario `I18N`, los cambios de copy **no aparecerían** aunque el HTML
> esté actualizado. El script pone un hash del contenido en la URL (`?v=abc12345`), así
> el navegador descarga la versión nueva apenas cambia algo.

- Repo: `github.com/emilianocobe/huggies-landing` (rama `main` → `public_html`)
- La conexión GitHub↔Hostinger tiene **implementación automática**: no hay pasos manuales.
- Preview local: `python -m http.server 4173` dentro de `landing/`.
- **Caché del CDN**: `build.py` resuelve CSS y JS automáticamente. Para **imágenes**,
  que el script no versiona, hay que cambiar su URL a mano (`?v=N`) al reemplazarlas —
  la purga de caché de hPanel no siempre invalida las variantes por navegador.

## Datos del negocio (confirmados por el cliente, 15-jul-2026)

| Dato | Valor |
|---|---|
| Dirección (NAP) | 12239 Sheridan St, **Pembroke Pines, FL 33026** |
| Teléfono | (954) 668-5679 |
| Horario | Lun–Sáb 8:00–17:00, walk-ins y citas |
| Booking | `https://booking.moego.pet/ol/HuggiesPetGrooming/landing` |
| Desde | Julio 2014, negocio familiar |
| Impuesto | 7% FL sales tax (no incluido en precios) |

**Precios publicados** (confirmados por el cliente — la mayoría de clientes es de Broward):

| Tamaño | Bath salón | Bath móvil | Groom salón | Groom móvil |
|---|---|---|---|---|
| Small (0–25 lb) | $65 | $75 | $75 | $85 |
| Medium (26–40 lb) | $75 | $85 | $85 | $95 |
| Large (41–70 lb) | $85 | $95 | $95 | $100 |
| XL (71+ lb) | $95 | $100 | $100–150 | $110–150 |
| Gatos (solo full groom) | — | — | $95 | $110 |

Add-ons: dental sin anestesia $75–150 · uñas $30 · oídos $20 · deshedding $30 ·
de-matting $30 · glándulas $15 · antipulgas $30 · shampoo hipoalergénico gratis ·
**botellita de perfume para llevar $12 (producto, no servicio)**.

Curso de grooming: presencial, máx. 3 estudiantes, **12 semanas · 36 clases**,
certificado, pago total por adelantado.

Cobertura móvil: Pembroke Pines · Hollywood · Cooper City · Miramar · Davie · Weston ·
Southwest Ranches · Plantation · Sunrise · Tamarac · Coral Springs · Fort Lauderdale ·
Miami Lakes · Hialeah · Miami-Dade.

## Cómo editar

- **Textos**: solo en los diccionarios `I18N.en` / `I18N.es` de `assets/js/main.js`
  **y** en el HTML estático (el texto default debe coincidir con `I18N.en`, si no hay
  flash de contenido viejo). Cada texto tiene su `data-i18n`.
- **Precios**: tabla en `index.html` + claves `pricing.*`/`addon.*` en ambos idiomas +
  bloque `hasOfferCatalog` del schema JSON-LD del `<head>`.
- **CTA**: jerarquía Agendar (MoeGo) → SMS → Llamar → Curso. Los `href` base viven en el
  HTML (funcionan sin JS); JS agrega el body del SMS según idioma.

## Decisiones de diseño vigentes

- **Naranjas accesibles**: `--orange` #FB6E00 solo decorativo; `--orange-cta` #C25100
  para texto blanco (4,7:1); `--orange-ink` #B34700 para texto naranja (5,5:1). WCAG AA.
- **Fuentes auto-hospedadas** (Google Fonts como `<link>` bloqueaba el render).
- **Sin logo en el header** (el hero lo presenta justo debajo) — pedido del cliente.
- **ES en registro de Miami**, no rioplatense.

## Pendientes

- **Fotos del camión móvil** — sigue sin existir ninguna; la sección "How mobile works" las espera.
- **Google Business Profile** con NAP idéntico al del sitio (Pembroke Pines, FL 33026).
  Es el activo #1 para "near me" (80% de la demanda de keywords).
- **Corregir la dirección en MoeGo** (dice Hollywood; el cliente confirmó Pembroke Pines).
- Reseñas/testimonios para prueba social.
- Versión `/es/` con hreflang si se busca orgánico en español (el toggle JS no indexa).
- Fotos del local sin decoración navideña.
- Boarding & daycare: precios y detalle (hoy solo hay CTA de consulta por SMS).
