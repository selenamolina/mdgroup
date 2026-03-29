# Plan de Rediseño Visual — MD Group

**Objetivo:** Transformar el sitio de un look genérico a un diseño minimalista, serio y profesional inspirado en Apple. Menos ruido, más impacto.

---

## Diagnóstico actual

| Problema | Impacto |
|----------|---------|
| Cuatro colores distintos en las service cards (azul, ámbar, verde, violeta) | Se ve desordenado y poco serio |
| Secciones con fondos alternados navy/gris/blanco sin un sistema claro | Rompe la coherencia visual |
| Tipografía sin jerarquía fuerte — títulos no dominan la página | La página no "habla" con autoridad |
| Botones y CTAs muy recargados con bordes, sombras y gradientes | Falta de elegancia |
| Animaciones de Framer Motion muy pronunciadas (mucho movimiento) | Distrae en vez de acompañar |
| Iconos con fondos de color sólido dentro de las cards | Infantiliza el diseño |
| Footer denso con demasiada información junta | Pesado visualmente |

---

## Principios de diseño (guía Apple)

1. **Espacio en blanco como elemento de diseño** — no llenar cada píxel
2. **Tipografía que manda** — los títulos grandes y finos son el centro visual
3. **Una paleta, pocos colores** — máximo 3 tonos, usados con intención
4. **Profundidad sutil** — sombras casi imperceptibles, bordes muy finos
5. **Animaciones que acompañan, no que gritan** — suaves, rápidas, elegantes
6. **Consistencia absoluta** — cada card, cada sección responde al mismo sistema

---

## Nueva paleta de colores

```
--color-slate:       #0f172a   → Títulos principales, navbar, footer
--color-slate-mid:   #334155   → Subtítulos, texto secundario
--color-slate-light: #64748b   → Labels, metadatos, placeholders
--color-border:      #e2e8f0   → Bordes de cards, divisores
--color-surface:     #f8fafc   → Fondo de secciones alternas
--color-white:       #ffffff   → Fondo principal
--color-accent:      #1d4ed8   → Único color de acento (azul índigo sobrio)
```

> Se elimina el gold. Le da a la marca un tono más sobrio y moderno.
> El azul índigo es el único acento — se usa solo en CTAs, links y detalles.

---

## Nueva escala tipográfica

```
Fuente: Geist Sans (ya instalada — similar a SF Pro de Apple)

Hero title:    text-6xl / font-light / tracking-tight  → impacto con ligereza
Page titles:   text-4xl / font-semibold / tracking-tight
Section titles: text-2xl / font-semibold
Card titles:   text-lg  / font-medium
Body:          text-base / font-normal / text-slate-mid / leading-relaxed
Labels:        text-sm  / uppercase / tracking-widest / text-slate-light
```

> Apple usa pesos de fuente extremos: muy fino para display, semibold para jerarquía. Se replican esos contrastes.

---

## Cambios por componente

### Navbar
- Fondo: blanco con `backdrop-blur` muy sutil y borde inferior `border-slate-100`
- Links: `text-slate-mid` → hover `text-slate` (sin subrayado, sin colores)
- Logo: solo texto bold, sin ícono ni decoración
- Sin sombra — solo el borde fino separa del contenido

### Hero (Homepage)
- Fondo: blanco puro
- Título: 5xl–6xl, font-light, `text-slate` — una sola línea poderosa
- Subtítulo: text-lg, `text-slate-light`, máximo 2 líneas
- CTA único: botón sólido `bg-accent text-white`, sin iconos
- Imagen/gráfico de fondo: sutil gradiente gris muy claro o nada
- Sin stats en el hero — moverlos a su propia sección

### Stats
- Fondo: `bg-surface` (gris casi blanco)
- Números: text-5xl, font-light, `text-slate` — que respiren
- Labels: text-sm, uppercase, tracking-widest, `text-slate-light`
- Sin íconos ni decoraciones extra

### Service Cards
- Fondo: blanco, borde `border-slate-100`, sin sombra en estado normal
- Hover: sombra suave `shadow-sm`, borde `border-slate-300`
- Ícono: sin fondo de color — solo el ícono en `text-slate-mid` o `text-accent`
- Todas las cards: el mismo tratamiento visual (adios azul/ámbar/verde/violeta)
- Transición: `transition-all duration-200` — rápida y limpia

### Secciones de valores / features
- Layout: dos columnas con mucho padding
- Izquierda: texto largo, títulos grandes
- Derecha: lista de items con iconos mínimos (`CheckCircle` en accent)
- Sin fondos de color — solo blanco y superficie

### Trayectoria / Timeline
- Línea de tiempo: borde izquierdo `border-slate-200`, puntos `bg-accent`
- Sin cajas ni cards — texto limpio sobre fondo blanco
- Años: font-mono, text-sm, `text-slate-light`

### Equipo (Organigrama)
- Cards: foto circular (placeholder por ahora), nombre, cargo
- Sin bordes ni fondos de color
- Hover: escala mínima `scale-[1.02]`

### Formulario de contacto
- Inputs: sin borde redondeado agresivo — `rounded-md` apenas
- Focus: `ring-2 ring-accent/30` — sutil
- Botón submit: `bg-accent` sólido, sin gradiente

### Footer
- Fondo: `bg-slate` (negro azulado)
- Texto: `text-slate-light` para info secundaria, blanco para datos importantes
- Layout más simple: 3 columnas bien espaciadas
- Sin separadores ni iconos decorativos

---

## Animaciones refinadas

Reemplazar los `y: 30` y `duration: 0.6` actuales por:

```tsx
// Antes (actual)
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}

// Después (Apple-style)
initial={{ opacity: 0, y: 12 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
```

> Movimiento más corto, easing personalizado, duración más rápida. Parece más fluido y no distrae.

---

## Estado de implementación

| Tarea | Estado |
|-------|--------|
| globals.css — nueva paleta de tokens | ✅ Hecho |
| Navbar — blur, sin colores, links limpios | ✅ Hecho |
| Homepage hero — tipografía grande, font-light | ✅ Hecho |
| Service Cards — íconos sin fondo de color, unified | ✅ Hecho |
| Stats section — números grandes, font-light | ✅ Hecho |
| Footer — 3 columnas, bg-slate | ✅ Hecho |
| Servicios page — sistema aplicado | ✅ Hecho |
| Trayectoria page — timeline limpio | ✅ Hecho |
| Contacto page — formulario refinado | ✅ Hecho |
| Animaciones — duración 0.35s, y:12 | ✅ Hecho |

---

## Próximas mejoras (ronda 2)

### 1. Navbar — botón CTA "Contactar"
Agregar un botón `bg-accent text-white` al lado derecho del nav en desktop.
Apple siempre tiene un CTA visible en la barra de navegación.

### 2. Navbar — indicador de página activa
Reemplazar el `font-medium` actual por una línea inferior (`border-b-2 border-slate`) debajo del link activo. Más claro y elegante.

### 3. Hero — elemento visual de fondo
Agregar un número decorativo grande (ej: `+80` o `2018`) en gris muy claro como fondo del hero. Le da profundidad sin ruido visual.

### 4. Bug — CTA final, texto invisible
El párrafo del CTA final usa `text-slate-light` sobre `bg-slate` oscuro → casi invisible.
Cambiar a `text-white/60`.

### 5. Organigrama — avatares más grandes
Aumentar de `w-16 h-16` a `w-24 h-24`. Iniciales más grandes (`text-2xl`). Se ven mucho más elegantes y dan más presencia a las personas.

### 6. Menú mobile — animación suave
El menú aparece/desaparece sin transición. Agregar `AnimatePresence` + `motion.ul` con fade+slide para que sea fluido.

---

---

## Ronda 3 — Innovación visual (sin perder seriedad)

**Referencia:** Linear, Stripe, Vercel — sitios técnicos y serios que usan efectos de luz y profundidad para verse modernos sin ser llamativos.

**Regla de oro:** cada efecto debe ser sutil. Si al verlo decís "qué lindo efecto", está bien. Si decís "qué recargado", hay que bajarlo.

---

### 1. Hero — fondo con gradiente radial y grid de puntos
Agregar detrás del texto del hero:
- Un grid de puntos muy tenues (`bg-dot-slate/5`) como fondo base
- Un gradiente radial azul/índigo muy difuminado en la esquina superior derecha (como Linear)
- Efecto: da sensación de profundidad y modernidad sin distraer del contenido

```css
/* background pattern */
background-image: radial-gradient(circle, #e2e8f0 1px, transparent 1px);
background-size: 24px 24px;

/* radial glow */
background: radial-gradient(ellipse 80% 50% at 70% -10%, rgba(29,78,216,0.08), transparent);
```

---

### 2. Stats — números con contador animado
Los números (2018, +80, 4, NOA) aparecen contando desde 0 al entrar en viewport.
Usar `useEffect` + `requestAnimationFrame` o la lib `react-countup`.
Efecto: da vida a los datos sin ningún efecto visual extra.

---

### 3. Service Cards — borde con gradiente en hover
Al hacer hover en una card, el borde se ilumina con un gradiente sutil azul/transparente.
Técnica: pseudo-elemento `::before` con `background: linear-gradient(...)` y `opacity` animado.
Efecto: las cards "responden" al usuario de forma elegante.

---

### 4. CTA final — efecto de luz (glow) sobre fondo oscuro
La sección oscura del CTA (`bg-slate`) lleva un orbe de luz difuminado detrás del título:
- Un círculo `bg-accent/10` muy grande y `blur-3xl` centrado detrás del texto
- Completamente estático, sin animación
Efecto: el texto parece iluminado desde adentro, como en los sitios de Vercel o Stripe.

---

### 5. Navbar — línea de progreso de scroll
Una barra delgada (2px) `bg-accent` que crece horizontalmente en la parte superior de la página según el progreso de scroll.
Efecto: feedback visual moderno, muy usado en blogs y sitios tech serios.

---

### 6. Texto del hero — reveal por línea
Las líneas del título principal aparecen una por una con un clip-path animado (como si se "descorriera" una cortina).
Técnica: `clipPath: "inset(0 0 100% 0)"` → `"inset(0 0 0% 0)"` con stagger.
Efecto: entrada poderosa y memorable. Lo que hace Apple en sus keynotes.

---

### 7. Sección de pilares — icono con glow suave
Los íconos de Shield, Award y Users llevan un `drop-shadow` azul muy sutil al hacer hover.
```css
filter: drop-shadow(0 0 8px rgba(29,78,216,0.3))
```
Efecto: los íconos "brillan" levemente al pasar el mouse.

---

### 8. Footer — separador con gradiente
La línea divisora superior del footer pasa de un borde sólido a un gradiente:
`transparent → accent/30 → transparent`
Efecto: un detalle de lujo que separa el contenido del footer con elegancia.

---

### Prioridad de implementación (ronda 3)

| # | Mejora | Impacto visual | Complejidad |
|---|--------|---------------|-------------|
| 1 | Grid de puntos + glow en hero | Alto | Bajo |
| 2 | Contador animado en stats | Alto | Bajo |
| 4 | Orbe de luz en CTA oscuro | Alto | Bajo |
| 6 | Reveal por línea en título | Muy alto | Medio |
| 3 | Borde gradiente en cards | Medio | Medio |
| 5 | Barra de progreso de scroll | Medio | Bajo |
| 7 | Glow en íconos de pilares | Bajo | Bajo |
| 8 | Separador gradiente en footer | Bajo | Bajo |

---

## Resultado esperado

Un sitio que al abrirlo transmita: **claridad, confianza, seriedad** — y que además diga que esta firma usa tecnología moderna y piensa en los detalles. Que el cliente potencial sienta que está ante profesionales que están un paso adelante.
