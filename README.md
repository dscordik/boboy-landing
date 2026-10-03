# Бобой — лендинг чайханы

Современный одностраничный сайт на **Vite + React + TypeScript**.

## Стек
- Vite 8
- React 19
- TypeScript
- CSS (BEM-методология)
- Фиксированный фоновый фон (parallax-эффект)
- Полная адаптация под мобильные

## Запуск

```bash
cd boboy-landing
npm install
npm run dev
```

Откроется на http://localhost:5173

## Сборка

```bash
npm run build
npm run preview
```

## Структура

```
src/
  components/     # Header, Hero, About, Menu, Popular, Sides, Gallery, Contacts, Footer
  data/menu.ts    # Полное меню
  styles/
    variables.css # Цвета, отступы, шрифты
    base.css      # Сброс + базовые стили
    blocks.css    # Все BEM-блоки
  App.tsx
  main.tsx
```

## Безопасность
- Content-Security-Policy
- X-Content-Type-Options
- Referrer-Policy
- Все внешние ссылки с `rel="noopener noreferrer"`
- Нет форм с пользовательским вводом (бронь только через Telegram)
- Нет опасного dangerouslySetInnerHTML

## Фон
Картинка фиксирована (background-attachment: fixed). На мобильных автоматически переключается на scroll из-за ограничений iOS.
