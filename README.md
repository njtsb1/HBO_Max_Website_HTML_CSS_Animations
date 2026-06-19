# Cloning the HBO Max Website with HTML and CSS Animations

Project developed in the CSS Web Developer Bootcamp at Digital Innovation One, with guidance from expert [Michele Ambrosio](https://github.com/micheleambrosio "Michele Ambrosio").
Your moment has arrived! You will put into practice everything you learned during the training. You will create a clone of the HBO Max website with HTML and CSS animations. Remember to follow the expert's instructions and submit your project to a public repository on GitHub at the end.

## Technologies used

- **HTML** - semantic and accessible markup.
- **CSS** - styles, dark/light theme, animations, and responsiveness.
- **JavaScript** - theme switching, multilingual (EN/PT-BR/ES), persistence via `localStorage`, and accessibility improvements.

## Features

- **Dark/Light Mode** with icon (moon/sun). **Dark** mode is the default.
- **Multilingual**: EN-US (default), PT-BR, ES. Content dynamically changed via `data-i18n`.
- **Responsive**: layouts for desktop, tablet, and smartphone.
- **Accessibility**: ARIA roles, `aria-live` for ads, visible focus, interactive elements with keyboard.
- **Animations**: smooth transitions and `@keyframes` respecting `prefers-reduced-motion`.
- **Semantics**: use of `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`, `<details>`.

## How to use

1. Open `index.html` in your browser (double-click or `Ctrl+O`).
2. Change the language in the selector; change the theme with the sun/moon button.
3. Shortcuts: `Ctrl/Cmd + K` toggles the theme.

## Best practices and notes

- The project avoids external dependencies to facilitate local execution.
- For production, add optimizations: compression, real images, and contrast tests.

![Screenshot](/img/HBOmax.png)

[LICENSE](/LICENSE)
