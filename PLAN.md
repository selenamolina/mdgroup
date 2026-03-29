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

## Orden de implementación

1. **globals.css** — nueva paleta de tokens de color
2. **Navbar** — simplificar, quitar colores, agregar blur
3. **Homepage hero** — reescribir layout y tipografía
4. **Service Cards** — unificar colores, limpiar íconos
5. **Stats section** — rediseñar con tipografía grande
6. **Footer** — simplificar estructura
7. **Servicios page** — aplicar sistema a todas las cards
8. **Trayectoria page** — limpiar timeline y secciones
9. **Contacto page** — refinar formulario
10. **Animaciones** — ajustar en todos los componentes al final

---

## Resultado esperado

Un sitio que al abrirlo transmita: **claridad, confianza, seriedad**. Que el cliente potencial sienta que está en manos de profesionales ordenados y modernos — no en una landing genérica de plantilla.
