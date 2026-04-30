# Little Blooms Performance Optimization Guide

This document outlines the performance strategies implemented for the Little Blooms website to ensure fast load times, smooth animations, and high lighthouse scores.

---

### 1. Font Loading Strategy
We use Google Fonts with `preconnect` and `font-display: swap` to prevent "Flash of Invisible Text" (FOIT).

**Implementation (index.html):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=...&display=swap" rel="stylesheet">
```

### 2. Critical CSS
Vite automatically extracts CSS. For manual inlining, focus on:
- Background colors for hero sections.
- Font families.
- Navbar height and layout.

### 3. Image Lazy Loading
We prioritize native loading with a JS fallback for older browsers.

**React Pattern:**
```jsx
<img 
  src="..." 
  loading="lazy" 
  alt="..." 
  referrerPolicy="no-referrer"
  className="... blur-up" 
/>
```

### 4. Caching Headers
Configure your server to cache static assets for 1 year.

**Nginx (.conf):**
```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, no-transform";
}
```

**Apache (.htaccess):**
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresDefault "access plus 1 month"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
</IfModule>
```

### 5. IntersectionObserver Pattern
For battery-efficient animations, use `IntersectionObserver` to trigger only when in view.

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
```

### 6. Reduced Motion
Always respect user preferences for motion to ensure accessibility.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 7. Mobile Touch Optimization
Touch targets are at least 44x44px. Use `touch-action: manipulation` to disable double-tap zoom delay.

```css
button, a {
  touch-action: manipulation;
  min-width: 44px;
  min-height: 44px;
}
```
