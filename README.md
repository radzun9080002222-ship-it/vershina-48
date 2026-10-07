# Вершина — доступный клининг в Липецке

Лендинг. React + Vite + TypeScript + Tailwind CSS.

## Реклама

Полная конфигурация подготовленной, но не запущенной ЕПК Липецка хранится в [`advertising/YANDEX-DIRECT-LIPETSK-PRELAUNCH.md`](advertising/YANDEX-DIRECT-LIPETSK-PRELAUNCH.md).

## Концепция
Сайт продаёт не «услуги уборки», а уверенность: точная цена до приезда, прозрачный чек-лист 47 пунктов, гарантия 48 часов и отдельное направление для арендного и корпоративного жилья. Телефон, MAX, Telegram и WhatsApp общие с брендом «Вершина».

## Запуск
```bash
pnpm install
pnpm run dev      # разработка
pnpm run build    # сборка в dist/
```

## Где что лежит
- `src/data.ts` — ВЕСЬ контент: телефоны, WhatsApp, тарифы, ставки ₽/м², чек-листы, кейсы, FAQ
- `src/components/` — секции в порядке страницы (см. App.tsx)
- `public/images/` — изображения и отдельная social-card Липецка
- `source-assets/images/GPT/` — исходные GPT-генерации, не попадают в production build
## Публикация

- Отдельный клон v2 для `vershina-48.ru`; оригинал `vershina48.ru` остаётся без изменений.
- Публикация в Yandex Object Storage выполняется workflow; автоматический push включается после настройки новых Secrets.
- Основной домен сайта — `https://vershina-48.ru`; относительный `base` сохраняет корректную работу GitHub Pages и локальной сборки.
- Пока сохранён исходный липецкий счётчик Метрики `111309225`; настройка аналитики нового домена и Вебмастера ещё не завершена.
- Домен закреплён файлом `public/CNAME`; канонические URL, Open Graph, structured data, robots и sitemap используют `vershina-48.ru`.
