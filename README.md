# abcalphabetkids.com

Сайт-воронка для приложения ABC Alphabet: бесплатные прописи → установка приложения.
Astro (статика) → GitHub Pages.

## Откуда контент

Всё берётся из исходников iOS-приложения (`../alphabet/Alphabet`), ничего не рисуется и не придумывается вручную:

| Что | Откуда в приложении |
|---|---|
| Буквы, слово на карточке, цвета | `Models/Alphabets/*Alphabet.swift` (`wordStyle`, `backgroundColor`, `bigLetterFillColor`) |
| Персонажи | `LottieAnimations/*.json` (первый кадр) или `ObjectsImages` |
| Слова на букву с картинками | игра «Слова»: `LetterGameLanguage.swift`, `LetterGameWords.swift` |
| Векторы букв для обводки | `LetterGame/Models/LetterPaths.swift` |
| Контуры раскрасок | `PaintGame/PaintColorableObject.swift` |
| Флаги, иконка | `Assets.xcassets` |

## Команды

Нужен Node ≥ 22.12 (локально: `PATH=/usr/local/opt/node/bin:$PATH`).

```bash
npm run data   # пересобрать data/ и картинки из приложения (APP_DIR=путь, по умолчанию ../alphabet/Alphabet)
npm run pdf    # все PDF + превью листов + OG-картинки (нужен Google Chrome)
npm run pdf -- --lang ru --only bukva-a   # один лист
npm run dev    # http://localhost:4321
npm run build && npm run check   # сборка и проверка SEO-минимума
```

## Настройки

`.env` (см. `.env.example`), в GitHub — Settings → Secrets and variables → Actions → **Variables**:
`PUBLIC_APPSTORE_PROVIDER_TOKEN`, `PUBLIC_PINTEREST_VERIFY`, `PUBLIC_CF_BEACON_TOKEN`. Это не секреты, они попадают в HTML.

Метки кампаний: `site_<lang>_<page>` на кнопках, `pdf_<lang>` в QR (QR ведёт на `/<lang>/app-страницу/?c=pdf`, она сама открывает нужный стор), `pinterest_<lang>` — для пинов (`?c=pinterest`).

## Деплой

GitHub Pages через `.github/workflows/deploy.yml` (push в `main`). Домен — `public/CNAME`.
DNS на Porkbun: A-записи апекса на IP GitHub Pages, CNAME `www` → `<user>.github.io`.
