# Adso Martín Obregón Gutiérrez — Software Engineer Portfolio

Portafolio profesional interactivo de ingeniería de software, arquitectura backend y desarrollo de productos digitales de alta precisión. Construido sobre arquitectura estática (SSG) de alto rendimiento, soporte bilingüe nativo (ES / EN) y diseño editorial técnico.

---

## 🎨 Tipografía y Fuentes

El sistema tipográfico del proyecto combina una fuente geométrica moderna para lectura y titulares con una fuente monoespaciada para elementos técnicos:

* **Tipografía Principal:** **[Plus Jakarta Sans](https://fontsource.org/fonts/plus-jakarta-sans)** (`@fontsource/plus-jakarta-sans` en pesos 400, 500, 600 y 700).
  * *Uso:* Titulares, nombre personal, subtítulos, párrafos, tarjetas y elementos de interfaz.
  * *Estilo:* Geométrica, moderna, limpia y altamente legible, inspirada en las interfaces de software de nueva generación (Linear, Vercel, Supabase).
* **Tipografía de Respaldo:** **[Inter](https://fontsource.org/fonts/inter)** (`@fontsource/inter` en pesos 400, 500 y 600).
* **Tipografía Técnica:** `font-mono` (Stack del sistema: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace).
  * *Uso:* Fechas, números de sección (01, 02), badges, tags de tecnologías y enlaces de navegación.

---

## 🏛️ Estilo General y Concepto de Diseño

El diseño sigue una estética **Técnica Editorial / Minimalista Funcional** con inspiración en la estructura clásica de feed dividido (*Split-pane sidebar layout*):

1. **Layout Asimétrico Fijo (Split Screen):**
   * **Columna Izquierda (Sidebar Fijo en Desktop / Barra Fluida en Móvil):** Identidad profesional, disponibilidad inmediata en tiempo real, selector bilingüe `[ ES / EN ]` con persistencia en `localStorage`, y navegación sincronizada mediante `IntersectionObserver`.
   * **Columna Derecha (Feed de Contenido Principal):** Secciones estructuradas (*Sobre Mí*, *Proyectos*, *Habilidades*, *Trayectoria* y *Contacto*).

2. **Paleta de Colores Centralizada (Tailwind v4 `@theme`):**
   * Definida semánticamente en `src/styles/global.css` mediante tokens CSS (`--color-canvas`, `--color-surface`, `--color-surface-card`, `--color-border-subtle`, `--color-heading`, `--color-body`, `--color-accent`). Permite cambiar la atmósfera de todo el sitio desde un solo archivo.

3. **Tarjetas de Proyectos Full-Bleed (Borde a Borde):**
   * Las capturas de software ocupan el ancho total superior de la tarjeta sin padding envolvente para máxima inmersión visual.
   * Carrusel interactivo compatible con swipe táctil en móvil, arrastre con mouse y botones anterior/siguiente.
   * Soporte interactivo para proyectos multitema (ej. interruptor `Dark / Light` en *The Wasppers*).

4. **Micro-interacciones y Efectos Técnicos:**
   * **Spotlight dinámico:** Gradiente radial sutil que sigue al cursor del mouse.
   * **Líneas guía laterales de ingeniería:** Enmarcado fino con gradiente vertical a los costados de la ventana en monitores grandes.

---

## 🛠️ Stack Tecnológico

* **Framework:** [Astro v7 (SSG)](https://astro.build/)
* **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Internacionalización:** Astro Native i18n (`/` Español por defecto, `/en` English)
* **Despliegue:** GitHub Pages automatizado mediante GitHub Actions (`.github/workflows/deploy.yml`)

---

## 🧞 Comandos de Desarrollo

```sh
# Instalar dependencias
npm install

# Iniciar servidor local de desarrollo
npm run dev

# Compilar para producción (carpeta ./dist/)
npm run build

# Previsualizar la compilación de producción
npm run preview
```
