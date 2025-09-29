# ✨ Comet Animation Welcome Screen Template

This project is a beautifully designed, reusable welcome screen template built with React and Tailwind CSS. It features a stunning comet-like border animation that is active in dark mode, providing an eye-catching starting point for any web application.

## Features

- **Stunning Comet Animation**: A unique conic-gradient border animation that gracefully circles the main container in dark mode.
- **Dark/Light Mode**: A sleek theme switcher with persistence via `localStorage`.
- **Responsive Design**: The layout is fully responsive and centered, looking great on all screen sizes.
- **Modern UI/UX**: Built with Tailwind CSS for a clean, modern aesthetic, including subtle animations and hover effects.
- **Auto-resizing Textarea**: The input area dynamically adjusts its height based on the content.
- **Minimal & Reusable**: Designed as a template, making it easy to integrate into your existing projects as a landing page, login screen, or initial setup view.
- **SVG Icons**: Uses lightweight, inline SVG icons for quick rendering and easy customization.

## How to Use

This template is designed to be easily portable. To integrate it into your own project:

1.  **Copy Components**: Copy the contents of `App.tsx` and `constants.tsx` into your React project.
2.  **Set up Tailwind CSS**: Ensure your project has Tailwind CSS installed and configured.
3.  **Add Styles & Animations**:
    -   Copy the `@property` and `@keyframes` rules for the comet animation from `index.html` into your global CSS file.
    -   Extend your `tailwind.config.js` with the custom `keyframes` and `animation` settings found in the `<script>` tag of `index.html`.
4.  **Mount the App**: Ensure you have a root element in your main HTML file (`<div id="root"></div>`) and render the `App` component into it.

## File Structure

-   `index.html`: The main HTML entry point. Contains the core setup for Tailwind CSS, Google Fonts, and the comet animation's CSS keyframes.
-   `App.tsx`: The main React component that renders the entire welcome screen UI and handles state for the theme and text input.
-   `constants.tsx`: Contains reusable SVG icon components (`SunIcon`, `MoonIcon`, etc.) to keep the main component clean.
-   `index.tsx`: The entry point for the React application.
-   `metadata.json`: Basic metadata for the application.
