
# MORÉA Café

Landing page moderna y responsive para una cafetería ficticia, desarrollada como proyecto de portafolio para **VORTEX WEB**.

El proyecto está enfocado en combinar desarrollo web, diseño visual, experiencia de usuario (UX) y principios de conversión para crear una experiencia digital elegante y funcional.

## 🎯 Objetivo

Crear una landing page moderna, elegante y responsive para una cafetería, aplicando principios de:

* Diseño web
* UX/UI
* Marketing digital
* Conversión
* Responsive design
* Accesibilidad

## ✨ Características

* Diseño responsive **mobile-first**
* Menú de navegación adaptable a dispositivos móviles
* Formulario de reservación con validación mediante JavaScript
* Animaciones al hacer scroll
* Microinteracciones en botones y elementos del formulario
* Navegación con scroll suave
* Diseño adaptado para móvil, tablet y escritorio
* Estados de foco para mejorar la accesibilidad
* Soporte para `prefers-reduced-motion`
* Arquitectura de estilos organizada mediante Sass
* Estructura modular de JavaScript

## 🛠️ Tecnologías

* HTML5
* Sass (SCSS)
* JavaScript
* Git
* GitHub

## 📁 Estructura del proyecto

```text
morea-cafe/
├── src/
│   ├── images/
│   ├── JS/
│   │   ├── animations.js
│   │   ├── form.js
│   │   ├── main.js
│   │   └── menu.js
│   └── scss/
│       ├── abstracts/
│       ├── base/
│       ├── components/
│       └── layout/
├── dist/
│   └── css/
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## 📱 Responsive Design

El diseño fue desarrollado siguiendo un enfoque **mobile-first** y adaptado posteriormente para:

* 📱 Móviles
* 📲 Tablets
* 💻 Laptops
* 🖥️ Escritorios y pantallas grandes

Se utilizaron diferentes puntos de ruptura para mantener una composición equilibrada en distintos tamaños de pantalla.

## ♿ Accesibilidad y UX

Se implementaron diferentes prácticas para mejorar la experiencia de usuario:

* Etiquetas semánticas en HTML
* `aria-label` y `aria-expanded` en el menú móvil
* Estados `:focus-visible`
* Mensajes dinámicos de validación
* `aria-live` para mensajes del formulario
* Soporte para usuarios que prefieren reducir el movimiento

## 🌿 Sass

Los estilos están organizados mediante una arquitectura modular:

* `abstracts/` — variables, mixins y funciones
* `base/` — reset, tipografía y estilos generales
* `components/` — botones, formularios y tarjetas
* `layout/` — header, hero, campañas, testimonios, CTA y footer

## ⚙️ JavaScript

JavaScript está organizado mediante módulos independientes:

* `main.js` — punto de entrada
* `menu.js` — navegación móvil
* `form.js` — validación del formulario
* `animations.js` — animaciones mediante `IntersectionObserver`

## 🔀 Git y GitHub

El proyecto fue desarrollado utilizando un flujo de trabajo basado en:

* Issues
* Ramas por funcionalidad
* Pull Requests
* Revisiones antes de realizar merges
* Conventional Commits

Ejemplos:

```text
feat: agregar interacciones y animaciones suaves con JavaScript
style: implementar diseño visual de la landing con Sass
fix: resolvimos un conflicto de la rama main hacia la de estructura-html
```

## 🚀 Demo

Actualmente el proyecto se encuentra en desarrollo local y **todavía no cuenta con una demo pública**.

> Próximamente se agregará el enlace al sitio publicado.

## 👨‍💻 Autor

Proyecto desarrollado por **Abel Valverde Ortuño** como parte del portafolio de **VORTEX WEB**.

**MORÉA Café — Tu momento, tu café.**
