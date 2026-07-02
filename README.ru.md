![Header](header.png)

<div align="center">

# DocsNets

**Конспекты лекций по компьютерным сетям и отчёты по лабораторным работам Cisco**

[![License](https://img.shields.io/badge/license-MIT-2C2C2C?style=for-the-badge&labelColor=1E1E1E)](LICENSE)
[![Docusaurus](https://img.shields.io/badge/docusaurus-3.6-2C2C2C?style=for-the-badge&logo=docusaurus&labelColor=1E1E1E)]()
[![React](https://img.shields.io/badge/react-18-2C2C2C?style=for-the-badge&logo=react&labelColor=1E1E1E)]()

</div>

Сайт на Docusaurus, собирающий учебные материалы по курсу компьютерных сетей: лекции по протоколам (L2–L5) и отчёты по лабораторным работам в Cisco Packet Tracer. Страницы сочетают Markdown с пользовательскими React-компонентами — диаграммы Mermaid, формулы KaTeX, SVG из draw.io, интерактивные таблицы PDU/протоколов и встроенные iframe. Полностью локализован на русский язык и развёрнут на GitHub Pages.

## ■ Возможности

- ❖ **Лекции и лабораторные** — два экземпляра документации (`lectures`, `labs`), каждый со своим сайдбаром
- ❖ **Диаграммы Mermaid** — отрисовка через пользовательский компонент `Mermaid` поверх пакета `mermaid`
- ❖ **Математика KaTeX** — формулы LaTeX через `react-katex` (`InlineMath` / `BlockMath`)
- ❖ **SVG из draw.io** — встроенные векторные диаграммы в лекциях
- ❖ **Интерактивные компоненты** — пользовательские таблицы PDU/протоколов, сворачиваемый текст и встроенные iframe
- ❖ **Русская локаль** — единственная локаль `ru`, тёмная тема по умолчанию

## ■ Стек

<div align="center">

| Компонент | Technology |
|-----------|------------|
| Фреймворк | Docusaurus 3.6.1 (classic preset) |
| Фронтенд | React 18, MDX, styled-components |
| Диаграммы | Mermaid 11, draw.io SVG |
| Математика | KaTeX (react-katex) |
| Подсветка | Prism (Catppuccin theme) |
| Деплой | GitHub Pages |

</div>

## ■ Скриншоты

<div align="center">

![Screenshot](screenshots/main.png)
*Главная страница сайта DocsNets*

</div>

## ■ Запуск

```bash
npm install
npm start       # сервер разработки
npm run build   # сборка для продакшена
npm run deploy  # публикация на GitHub Pages
```

## ■ License

MIT © [pluttan](https://github.com/pluttan)
