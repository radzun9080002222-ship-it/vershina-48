# MEMORY.md

## Текущая версия

- Город: Липецк.
- Домен: https://vershina48.ru/
- GitHub-репозиторий и локальная папка: `vershina48`.
- Старое имя `vershina49` и домен `vershina49.ru` выведены из использования; они допустимы только в исторических записях.
- Источник истины — свежая ветка `main` на GitHub. Перед любой работой сначала выполнять `git fetch` и `git pull --ff-only`.

## Позиционирование

- Hero: «Доступный клининг в каждую квартиру и дом Липецка».
- В SEO-текстах: «Доступный клининг квартир и домов в Липецке».
- Не использовать «премиальный клининг» как позиционирование: оно создаёт ожидание завышенной цены.
- Основные обещания бренда: точная цена до приезда, 47 пунктов приёмки, 48 часов гарантии, без доплат на месте.

## Контакты и аналитика

- Телефон: +7 (922) 453-91-45; ссылка: `tel:+79224539145`.
- WhatsApp: https://wa.me/79224539145
- Telegram: https://t.me/vershina_cleaning
- MAX: https://max.ru/u/f9LHodD0cOKZEJQUwiiemzvhecZLDTq6jxMPZ2SmNnd5JdJWltsbNUafP4o
- Яндекс.Метрика: счётчик `111309225`; материнский аккаунт `dima.radzun`.
- Липецк использует отдельные рекламный кабинет, Метрику и Вебмастер.

## Размещение

- GitHub `main` остаётся источником истины; production-развёртывание выполняет GitHub Actions в Yandex Object Storage.
- Бакеты: `vershina48.ru` (статический сайт) и `www.vershina48.ru` (HTTPS-редирект на основной домен).
- Cloud DNS: зона `vershina48.ru.` (`dns55j01h4qpkkpafalf`), делегирование у регистратора — `ns1.yandexcloud.net` и `ns2.yandexcloud.net`.
- DNS сайта: `ANAME @` → `vershina48.ru.website.yandexcloud.net.`, `CNAME www` → `www.vershina48.ru.website.yandexcloud.net.`, CAA разрешает `letsencrypt.org`.
- Сертификат Certificate Manager: `vershina48-ru` (`fpq5at7e9ncogll9vkbu`); после статуса `Issued` его нужно подключить к обоим бакетам.
- Workflow: `.github/workflows/deploy-yandex-cloud.yml`. Секреты `YC_STATIC_ACCESS_KEY_ID` и `YC_STATIC_SECRET_ACCESS_KEY` хранятся только в GitHub Secrets; их значения нигде не записывать.

## Где менять

- `src/components/Hero.tsx` — главный экран.
- `src/data.ts` — услуги, цены, минимальные заказы, контакты и чек-листы.
- `index.html` — title, description, Open Graph, JSON-LD, Метрика.
- `public/CNAME`, `public/robots.txt`, `public/sitemap.xml` — домен и индексация.
- Цены нельзя без проверки переносить из другого города: каждая городская версия настраивается отдельно.

## Favicon

- Эталон favicon — готовый набор из `vershina-cleaning/public/`: `favicon.ico`, PNG 120/48/32/16 и `apple-touch-icon.png`.
- Для Липецка эти файлы копируются из Сочи без перегенерации; SHA-256 эталонного `favicon.ico`: `1479DED0F2D53604C258DF97D838E33DFCBD6EE1FE4DAA0EAB90890589DD27BB`.
- В `index.html` favicon указывается абсолютным URL текущего домена с корректным `type`, включая `rel="icon"` и `rel="shortcut icon"`.
- После изменения favicon главную страницу нужно отправлять на переобход в Яндекс Вебмастере; обновление выдачи происходит не мгновенно.



## Цены

- Эталон — сохранённый городской прайс менеджерского калькулятора https://chisto23.ru/calc/, сверка 05.10.2026.
- Влажная уборка — 160 ₽/м², минимум 6 000 ₽.
- Генеральная — 250 ₽/м², минимум 9 000 ₽.
- После ремонта — 300 ₽/м², минимум 12 000 ₽.
- Под ключ — 450 ₽/м² со стандартными окнами или 550 ₽/м² с панорамными, минимум 12 000 ₽.
- Расчёт начинается с 25 м²; стоимость = max(площадь × ставка, минимальный заказ).
- При обновлении городского прайса синхронизировать src/data.ts, FAQ, SeoCopy и SEO/JSON-LD в index.html.

