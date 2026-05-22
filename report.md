# Глютеновий сканер: потенціал продукту для ринку України

Дата: 2026-05-22  
Формат продукту: мобільний застосунок або сайт/PWA для сканування **штрихкоду товару** та/або **складу на етикетці** через OCR. Це цифрова оцінка ризику на основі бази SKU і rule engine, не фізичний хімічний тест на глютен.  
Фокус: Україна; глобальний ринок використано як benchmark.

## 1. Title Page + Executive Summary

### Висновок за 2 хвилини

**Рекомендація:** запустити 90-денний MVP. Не тому що ринок уже підтверджений, а щоб підтвердити або спростувати три ключові гіпотези: repeat usage, paid intent і масштабування SKU-бази.

**Що це:** продукт перевіряє харчовий товар за 3-5 секунд через штрихкод, OCR складу або пошук. Цільова аудиторія — люди з целіакією/чутливістю, родини й покупці, які регулярно перевіряють склад. Українська перевага — локальні SKU, кирилиця, імпортні етикетки та пояснюваний confidence score. Масштабування виправдане тільки після proof of repeat usage, SKU growth і paid intent.

**Первинний user insight:** автор — людина з целіакією в Україні; продуктова гіпотеза спирається на власний досвід перевірки складу під час покупок. Це первинний якісний сигнал проблеми, але не замінює валідацію розміру аудиторії, willingness-to-pay і repeat usage через MVP.

**Чому зараз:** глобальний ринок gluten-free продуктів оцінюється в **~8.1-8.5 млрд USD у 2025** і прогнозується до **15.4-18.3 млрд USD до 2032-2033** з CAGR **~9.6-10.1%** за оцінками Fortune Business Insights і Grand View Research. Поширеність целіакії глобально оцінена в **1.4% за серологією** та **0.7% за біопсією** у systematic review/meta-analysis.

**Україна:** офіційної актуальної статистики по целіакії немає; демографічні оцінки на 2026 різняться через війну, міграцію та окуповані території. Для продуктової моделі використано консервативний робочий базис **29.5 млн наявного населення**. Це припущення для сценарної моделі, не офіційна статистика.

**TAM/SAM/SOM, Україна, scenario model:**  
- Patient proxy: **~295 тис.** осіб = 29.5 млн × 1.0% global celiac proxy.  
- Reachable TAM: **90-250 тис.** потенційних користувачів: low case = 295 тис. × 60% reachable × 50% active need; high case додає родини й lifestyle-суміжність.  
- SAM: **20-60 тис.** активних користувачів у великих містах і онлайн-покупках.  
- SOM 24 міс.: **3-12 тис. MAU**, якщо продукт має сильне покриття локальних SKU.

**Ключовий ризик:** не попит, а **якість локальної бази**. Глобальні конкуренти сильні в США/ЄС, але слабше покривають українські товари, кирилицю, локальні бренди, імпорт із Польщі/Італії/Німеччини та українські ритейлери.

**Вердикт:** MVP Go — не венчурна ставка, а 90-денний ринковий тест із чіткими stop criteria. Критерій продовження: 5,000+ перевірених SKU, >8% conversion у waitlist на лендінгу, >50% повторних сканувань у beta cohort, >3% trial-to-paid.

### Decision dashboard

| Питання | Відповідь | Рівень впевненості | Що перевірити |
|---|---|---:|---|
| Чи є ринковий tailwind? | Так: global gluten-free food market росте ~9.6-10.1% CAGR | Високий | Не потрібно |
| Чи є проблема в Україні? | Так, але розмір платної аудиторії треба довести | Середній | 30-50 інтервʼю + waitlist |
| Чи можна відрізнитись від глобальних конкурентів? | Так, через UA SKU, кирилицю, локальні ритейлери | Середній | 5-10 тис. SKU + repeat scans |
| Чи це venture-scale одразу? | Ні для gluten-only Ukraine; потенційно так для allergy scanner + CEE | Середній | B2B interest + регіональні тести |

## 2. Market Opportunity

### 2.1 Глобальний ринок

| Факт | Значення | Джерело |
|---|---:|---|
| Gluten-free food market, 2025 | 8.12 млрд USD | Fortune Business Insights |
| Forecast до 2032 | 15.45 млрд USD | Fortune Business Insights |
| CAGR 2025-2032 | 9.62% | Fortune Business Insights |
| Gluten-free products market, 2025 | 8.50 млрд USD | Grand View Research |
| Forecast до 2033 | 18.32 млрд USD | Grand View Research |
| CAGR 2026-2033 | 10.1% | Grand View Research |
| Поширеність целіакії | 1.4% serology / 0.7% biopsy | Singh et al., systematic review |

**Інтерпретація:** ринок продуктів росте швидко, але застосунок-сканер не монетизує весь food market. Його реальний opportunity — сервісний шар: зниження невизначеності при покупці, локальна база товарів, історія сканів, персональні профілі алергенів, B2B API для ритейлерів.

### 2.2 Україна

| Факт | Значення | Джерело |
|---|---:|---|
| Наявне населення для моделі, 2026 | 29.5 млн | Консервативне припущення автора |
| Населення України, UN/Worldometer benchmark | верхня демографічна рамка, не база моделі | UN / Worldometer |
| Internet users, end-2025 | 35.3 млн; 89.6% penetration | DataReportal 2026 |
| Cellular mobile connections, late-2025 | 55.0 млн; 140% of population | DataReportal 2026 |
| Food eCommerce Ukraine, 2025 forecast | 179.1 млн USD | ECDB |
| Поріг “gluten-free” | <20 mg/kg або 20 ppm | FDA / AOECS / USDA GAIN Україна |

**Обмеження даних:** офіційної актуальної статистики по целіакії в Україні немає; демографічні дані нестабільні через війну та міграцію. Market sizing подано сценарно — це коректний підхід за таких умов невизначеності.

### 2.3 TAM/SAM/SOM, Україна

| Рівень | Оцінка | Логіка |
|---|---:|---|
| Patient proxy | ~295 тис. | 29.5 млн × 1.0% global celiac proxy |
| Reachable TAM | 90-250 тис. | Low: 295K × 60% reachable × 50% active need ≈ 90K; high додає родини/lifestyle adjacency |
| SAM | 20-60 тис. | Активні цифрові користувачі у великих містах і онлайн-покупках |
| SOM, 24 міс. | 3-12 тис. MAU | Досяжна частка за умови локальної бази SKU, комʼюніті та партнерств |
| Paid users | 60-720 | 2-6% paid conversion від SOM при freemium |

**Гіпотеза:** Україна не є самостійним venture-scale ринком для gluten-only app. Але може бути прибутковим beachhead і data lab для ширшого “алергенного сканера” у Східній Європі. Reachable TAM не є офіційною статистикою: нижня межа моделює активну цифрову аудиторію з медичною потребою, верхня додає родини й lifestyle-суміжність.

## 3. Customer Problem & Insights

### Jobs-to-be-done

| Сценарій | Біль | Що має робити продукт |
|---|---|---|
| Магазин | Треба швидко зрозуміти, чи товар безпечний | Скан штрихкоду; якщо даних немає — фото складу |
| Онлайн-покупка | Фото складу нечітке або товар імпортний | Пошук за назвою/брендом + база verified SKU |
| Подорож | Інша мова на етикетці | OCR + словник ризикових інгредієнтів EN/PL/DE/IT |
| Дитина з целіакією | Батьки не хочуть ризикувати | Сімейний профіль, історія, “перевірені товари” |
| Ресторан | Меню не має алергенного маркування | OCR меню + попередження: cross-contamination не визначається |

Ці сценарії — гіпотези для discovery-інтервʼю, не підтверджений розподіл попиту. Їх потрібно перевірити через 30-50 розмов із користувачами та beta cohort.

### Ключовий insight

Користувач не купує сканування. Він купує впевненість у момент рішення про покупку — що цей конкретний товар не нашкодить. Тому цінність продукту залежить від:

1. Покриття локальних товарів.
2. Пояснюваного результату.
3. Рівня довіри до джерела: verified / OCR parsed / community / unknown.
4. Швидкості: результат за 3-5 секунд.

## 4. Competitive Landscape

| Конкурент | Фокус | Доказ traction | Сильні сторони | Слабкі місця для України |
|---|---|---:|---|---|
| Gluten Free Scanner | Штрихкод + ingredient checker | App Store: 9.5K ratings, 4.9 (platform-verified); 1M+ users, 4.8 rating (self-reported, офіційний сайт) | Простий barcode UX, велика база, offline mode | Немає явного фокусу на Україні, кирилиці, локальних SKU |
| Find Me Gluten Free | Ресторани | Google Play: 1M+ downloads, 4.8, 13K+ reviews; App Store: 4.9, 24K ratings | Сильне restaurant discovery і community reviews | Не вирішує grocery scanning; в Україні ймовірно мало GF-закладів у базі, тому цінність нижча |
| Sansglu | Ресторани | 50K+ users, rating 5.0 (self-reported, офіційний сайт; мала вибірка) | Safety scores, celiac-focused filters | Менший масштаб, не grocery-first |
| Open Food Facts clients | База продуктів / API | Open API, глобальна база | Безкоштовна база, barcode foundation | Якість і повнота залежать від країни та community |
| General food scanners | Nutrition/additives | Ширша аудиторія | Легший mass-market positioning | Не спеціалізовані на целіакії та gluten-risk |

**Приклади локальних UA виробників gluten-free лінійок:** Food Like Company, Dobrodiya Foods / WOWOATS — потенційні партнери для verified brand profile та тестування B2B API.

### Gap-аналіз

| Gap | As-Is | To-Be MVP | Business impact |
|---|---|---|---|
| Перевірка складу | Ручне читання етикетки, 1-3 хв/товар | Штрихкод або OCR за 3-5 сек | Менше friction у магазині |
| Кирилиця та імпорт | Користувач сам шукає синоніми UA/PL/EN/DE | Rule engine зі словником ризикових інгредієнтів | Менше помилок і повторних запитів |
| Довіра до результату | Немає видимого джерела рішення | Confidence score: verified / OCR / community / unknown | Вища retention через прозорість |
| Локальна база SKU | Глобальні apps не покривають long-tail UA товарів | 5-10K перевірених SKU у топ-ритейлерах | Data moat, який важко швидко скопіювати |
| B2B layer | Ритейлер не має allergy-risk API | Віджет/API для e-commerce картки товару | Upside поза B2C підпискою |

### Позиціонування

**Рекомендована позиція:** “Український сканер складу та штрихкоду для глютенового ризику”.  
**Не позиціонувати:** “AI magic” — продукт не використовує ML як core mechanism; “гарантовано безпечно” — cross-contamination не визначається; “медичний пристрій” — регуляторні наслідки без клінічної валідації неприйнятні.

### Диференціація

1. Українська + кирилиця + локальні ритейлери.
2. Власний verified layer поверх Open Food Facts.
3. Пояснення ризику, не просто зелений/червоний статус.
4. Комʼюніті-валідація з модерацією.
5. B2B для ритейлерів: API/віджет алергенного ризику.

## 5. Product Concept & Differentiation

### MVP

| Модуль | Must-have | Навіщо |
|---|---|---|
| Barcode scan | UPC/EAN scan через камеру | Найшвидший grocery use case |
| OCR складу | Фото етикетки, виділення інгредієнтів | Покриває товари без бази |
| Rule engine | wheat/barley/rye/malt + локальні синоніми | Менше AI hallucination |
| Confidence score | verified / OCR / community / unknown | Довіра і юридична обережність |
| User corrections | Додати фото, бренд, статус | Швидке нарощування бази |
| Admin QA | Модерація SKU | Якість даних |

### Статуси результату

| Статус | Значення | Приклад повідомлення |
|---|---|---|
| Низький ризик | Явних глютенових інгредієнтів не знайдено | “Не знайдено пшеницю, ячмінь, жито, солод; перевірте may contain.” |
| Обережно | Є фрази “може містити”, shared facility, unclear starch | “Є ризик слідів: виробник зазначає можливу присутність.” |
| Високий ризик | Є прямий маркер глютену | “Знайдено: пшеничне борошно.” |
| Невідомо | Даних недостатньо | “Потрібне фото складу або перевірка модератором.” |

### Scope після MVP

1. Профілі алергенів: глютен, пшениця, лактоза, горіхи, соя.
2. Ресторани: OCR меню + community review.
3. Browser extension для онлайн-магазинів.
4. API для ритейлерів.
5. Партнерський каталог verified gluten-free брендів.

## 6. Go-to-Market Strategy & Monetization

### Україна: 90 днів

| Період | Дії | KPI |
|---|---|---|
| 0-30 днів | Лендінг, 30-50 інтервʼю, outreach до Української спілки целіакії, Telegram/Facebook спільнот, 1,000 SKU | >8% waitlist conversion |
| 31-60 днів | PWA: barcode + OCR, rule engine, admin QA, 3-5 дієтологів, referral у beta cohort | >500 beta users, >2 scans/user/week |
| 61-90 днів | 5,000-10,000 SKU, pricing test, referral, B2B talks з ритейлерами та GF-брендами | >50% повторних користувачів, >3% trial-to-paid |

### Stage gates

| Gate | Go | Pivot | Stop |
|---|---|---|---|
| Попит | >8% waitlist conversion | 3-8% conversion | <3% conversion |
| Повторне використання | >50% beta users повторно сканують | 25-50% | <25% |
| Дані | 5,000+ SKU, QA pipeline працює | SKU росте, але QA повільна | SKU не росте без ручної роботи |
| Монетизація | >3% trial-to-paid | Є engagement, немає paid intent | Немає engagement і paid intent |
| B2B | 2-3 LOI | Є розмови без LOI | Немає interest від ритейлерів/брендів |

### Пріоритет каналів запуску

| Пріоритет | Канал | Навіщо | Коли стартує | KPI |
|---:|---|---|---|---|
| 1 | Українська спілка целіакії + Telegram/Facebook спільноти | Перші інтервʼю, waitlist, ручна валідація болю | День 1 | >8% waitlist conversion; 30-50 інтервʼю |
| 2 | Дієтологи / гастроентерологи | Довіра і точний сегмент без broad paid media | Тиждень 2 | 10 партнерів у пілоті; CPA < paid social |
| 3 | Ритейлери / GF-бренди | Доступ до SKU, verified layer і B2B LOI | Тиждень 4 | 2-3 LOI за 6 міс. |
| 4 | SEO | Long-tail попит: “чи містить X глютен” | Після 1K SKU | 10K organic visits/month за 12 міс. |
| 5 | TikTok/Instagram | Освіта й ретаргетинг після proof of retention | Після beta retention | CAC < LTV/3 |

KPI каналів — гіпотези для пілоту. Вони не є benchmark-даними ринку, доки не підтверджені фактичним CAC, referral rate і trial-to-paid conversion.

### Монетизація

| Модель | Ціна | Що включає | Статус |
|---|---:|---|---|
| Freemium | 0 грн | 10-20 сканів/міс, обмежена історія | MVP hypothesis |
| Plus | 99-149 грн/міс | Unlimited scans, OCR, історія, safe list | UA WTP hypothesis; global gluten-app proxy only |
| Family | 199-249 грн/міс | 3-5 профілів, дитячий режим | WTP hypothesis |
| B2B API | setup + monthly fee | Ритейлери, бренди, e-commerce | LOI validation needed |
| Verified brand profile | annual fee | Бренди з gluten-free лінійками | Brand validation needed |

Ціноутворення 129 грн/міс — локальна willingness-to-pay гіпотеза, не доведений benchmark. Find Me Gluten Free і Gluten Free Scanner майже не працюють як українські pricing references: вони корисні тільки як global category ceiling, бо не доводять готовність платити саме в Україні. Для орієнтиру: Find Me Gluten Free Premium коштує $24.99/рік для individual plan і $39.99/рік для Family Plan; Gluten Free Scanner у App Store має free download і платні IAP/subscription options, що відрізняються за регіоном. Для sanity check по ширшій food/wellness категорії Nutrola у 2026 оцінює YAZIO PRO приблизно в €4-6/міс, а Nutrola Premium — у €2.50/міс. BetterMe не використовується як чистий paid benchmark для України, бо за умовами сервісу українські користувачі можуть мати безкоштовний доступ. Діапазон 99-149 грн має перевірятися локально через pricing test і trial-to-paid cohort.

## 7. Financial Projections

### 7.1 Україна, B2C

| Сценарій | MAU | Paid conversion | ARPPU | MRR |
|---|---:|---:|---:|---:|
| Low | 5,000 | 2% | 99 грн | 9,900 грн |
| Base | 20,000 | 3% | 129 грн | 77,400 грн |
| High | 50,000 | 6% | 149 грн | 447,000 грн |

Примітка: paid conversion знижено до 2-6%, щоб не моделювати 15% як нереалістичний high-case без benchmark. High-сценарій припускає premium tier із ARPPU 149 грн; sensitivity heatmap у HTML використовує ті самі MAU-точки 5K / 20K / 50K, але фіксує ARPPU 129 грн, щоб ізолювати вплив MAU і paid conversion.

### 7.2 Unit economics gate

| Метрика | Base assumption | Логіка / формула |
|---|---:|---|
| ARPPU | 129 грн/міс | Ціна Plus у base-сценарії |
| Churn | 20%/міс | Гіпотеза для early wellness/utilities subscription |
| Lifetime | 5 міс. | 1 / monthly churn |
| LTV gross | 645 грн | 129 грн × 5 міс. |
| Target CAC ceiling | 215 грн | LTV / CAC = 3x |
| OCR COGS | ~0.06 грн/scan | $1.50 / 1,000 OCR images × 40 грн/USD |
| Base OCR subsidy | ~21 грн/paid user | При 3% conversion на 1 paid припадає ~32 free users: (32 × 10 + 1 × 30) × 0.06 грн |
| Contribution after OCR | ~108 грн/paid user/month | ARPPU - OCR subsidy; без app store fees, support і hosting |

Висновок: freemium має сенс тільки з лімітом OCR. Якщо безкоштовний користувач отримує 10-20 OCR-сканів щомісяця, OCR COGS не вбиває модель сам по собі, але зменшує contribution margin і підсилює вимогу до CAC discipline.

### 7.3 Base P&L bridge

| Base P&L bridge | грн/міс | Логіка |
|---|---:|---|
| Gross MRR | 77,400 | 20,000 MAU × 3% paid × 129 грн |
| App Store / Google Play fee | -11,610 | 15% blended platform fee assumption |
| OCR volume | 212,000 scans | 600 paid × 30 OCR + 19,400 free × 10 OCR |
| OCR API COGS | -12,720 | 212,000 OCR scans × ~0.06 грн |
| Hosting + support | -8,000 | Lean MVP infrastructure/support assumption |
| SKU QA / moderation | -30,000 | Part-time data ops / moderator budget |
| Податки (ФОП 3 група, 5%) | -3,870 | 5% від Gross MRR |
| Contribution margin (Net) | 11,200 | Залишок після COGS, комісій та 5% податку; бюджет на маркетинг та команду |
| Net contribution margin | 14% | 11,200 / 77,400 |

Висновок: base-сценарій може бути self-sustaining лише як lean MVP з жорстким OCR-лімітом і дешевим acquisition. Це ще не P&L-positive компанія, бо таблиця не включає зарплати команди, paid media та юридичний супровід.

### 7.4 Україна, B2B add-on

| Сценарій | Тип клієнтів | Клієнти | Середній MRR/клієнт | B2B MRR |
|---|---|---:|---:|---:|
| Low | 1 GF-бренд або дієтологічна мережа | 1 | 10,000 грн | 10,000 грн |
| Base | Ритейлер + 2 бренди / клініки | 3 | 25,000 грн | 75,000 грн |
| High | Ритейлери, e-commerce, GF-бренди | 8 | 40,000 грн | 320,000 грн |

**Примітка:** MRR/клієнт — гіпотеза без підтвердженого прецеденту на UA ринку. Потребує валідації через LOI з конкретними ритейлерами або GF-брендами до того, як B2B додається в фінансову модель як надійний сценарій.

### 7.5 Висновок по фінансах

В base-сценарії (20K MAU, 3% conversion, 129 грн ARPPU) Україна дає ~77K грн MRR і ~11K грн net contribution після 15% platform fee, OCR COGS, hosting/support, SKU QA та 5% ФОП-податку. Це не venture-scale і не повний операційний прибуток; це MVP для перевірки retention, willingness-to-pay і data moat. Для venture-scale потрібен один із трьох кроків:

1. Регіональна експансія: Польща, Румунія, Чехія, Балтія.
2. Розширення на allergy scanner: лактоза, горіхи, соя, веганські обмеження.
3. B2B infrastructure: API/віджет для ритейлерів і брендів.

### 7.6 Decision logic

| Якщо після 90 днів | Рішення |
|---|---|
| Є repeat usage + paid intent + SKU growth | Масштабувати B2C і почати B2B API пілот |
| Є repeat usage, але немає paid intent | Pivot у B2B2C через дієтологів, клініки, страхові/роботодавців |
| Є paid intent, але погана якість SKU | Інвестувати в data operations перед маркетингом |
| Немає repeat usage | Закрити gluten-only MVP або розширити в allergy scanner |

## 8. Risks & Recommendations

| Ризик | Ймовірність | Вплив | Рекомендація |
|---|---:|---:|---|
| Неправильна рекомендація шкодить користувачу | Висока | Високий | Не давати “safe guarantee”; показувати джерело і confidence |
| Низьке покриття SKU | Висока | Високий | Почати з 5-10 тис. SKU у топ-ритейлерах |
| OCR помилки | Середня | Високий | Rule engine + user confirmation + фото складу |
| App Store / Google Play review | Середня | Високий | Не давати медичні поради; показувати джерела даних у результаті; privacy review перед submission |
| UA маркування алергенів | Середня | Високий | Спиратись на маркування та Закон про інформацію для споживачів; не заявляти сертифікацію gluten-free |
| Юридичні та регуляторні ризики | Середня | Високий | Review кожного тексту продукту; “оцінка ризику”, не “гарантія безпеки”; не позиціонувати як медичний пристрій |
| Слабка готовність платити | Середня | Середній | Freemium + family plan + B2B2C |
| Конкуренти копіюють функції | Середня | Середній | Data moat: локальна база + verified layer |

### Рекомендації

1. **Запустити MVP за 90 днів**, не будувати “ідеальну базу” перед тестом.
2. **Почати з України**, але одразу проєктувати data model для багатомовності.
3. **Вимірювати не downloads, а повторні скани**: продукт цінний, якщо стає звичкою в магазині.
4. **Створити verified layer**: позначати товари, перевірені модератором, брендом або ритейлером.
5. **Писати юридично обережно**: “оцінка ризику”, “дані неповні”, “перевірте маркування”, “не визначає cross-contamination”.

**UA compliance note:** продукт не визначає лабораторний статус “без глютену”. Він читає маркування, OCR-дані та verified SKU, після чого показує оцінку ризику й джерело рішення. Перед публічним запуском потрібен legal review алергенного маркування, рекламних claims і privacy flow.

## 9. Appendix: джерела та методологія

### Джерела

1. Grand View Research — Gluten-free products market: https://www.grandviewresearch.com/industry-analysis/gluten-free-products-market  
2. Fortune Business Insights — Gluten Free Food Market: https://www.fortunebusinessinsights.com/industry-reports/gluten-free-food-market-100188  
3. Singh et al. — Global Prevalence of Celiac Disease: Systematic Review and Meta-analysis: https://www.sciencedirect.com/science/article/pii/S1542356517307838  
4. FDA — Gluten-Free Means What It Says: https://www.fda.gov/consumers/consumer-updates/gluten-free-means-what-it-says  
5. AOECS — Gluten Free Certification: https://www.aoecs.org/working-with-food/gluten-free-certification/  
6. USDA GAIN — Ukraine adopts new labeling requirements: https://apps.fas.usda.gov/newgainapi/api/Report/DownloadReportByFileName?fileName=Ukraine+Adopts+New+Labeling+Requirements_Kyiv_Ukraine_01-28-2020  
7. DataReportal — Digital 2026 Ukraine, Internet use section; 35.3 млн internet users, 89.6% penetration, 55.0 млн cellular mobile connections: https://datareportal.com/reports/digital-2026-ukraine  
8. UN World Population Prospects: https://population.un.org/wpp/  
9. Worldometer — Ukraine Population 2026: https://www.worldometers.info/world-population/ukraine-population/  
10. ECDB — Food eCommerce market in Ukraine: https://ecommercedb.com/markets/ua/food  
11. Gluten Free Scanner official site: https://glutenfreescanner.app/  
12. Gluten Free Scanner App Store page: https://apps.apple.com/us/app/gluten-free-scanner/id1642357030  
13. Find Me Gluten Free Google Play: https://play.google.com/store/apps/details?id=com.fmgf.free  
14. Find Me Gluten Free App Store ratings: https://apps.apple.com/us/app/find-me-gluten-free/id431006818  
15. Find Me Gluten Free Premium: https://www.findmeglutenfree.com/premium  
16. Sansglu official site: https://sansglu.com/  
17. Open Food Facts API docs: https://openfoodfacts.github.io/documentation/docs/Product-Opener/api/  
18. Google Cloud Vision pricing: https://cloud.google.com/vision/pricing  
19. Apple App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/  
20. Держпродспоживслужба — маркування імпортних харчових продуктів: https://dpss.gov.ua/news/bezpechnist-kharchovykh-produktiv-markuvannia-importnykh-kharchovykh-produktiv-na-shcho-zvernuty-uvahu-spozhyvachu  
21. Закон України, ст. 15 — інформація про алергени: https://zakon.rada.gov.ua/laws/show/2639-19/paran15  
22. BetterMe App Store listing: https://apps.apple.com/ua/app/betterme-health-coaching/id1264546236  
23. BetterMe subscription terms: https://betterme.world/ua/subscription-terms  
24. YAZIO App Store listing: https://apps.apple.com/ua/app/yazio-calorie-counter-diet/id946099227  
25. Nutrola — YAZIO pricing 2026: https://nutrola.app/uk/blog/why-is-yazio-so-expensive-now  
26. Silpo gluten-free category: https://silpo.ua/category/bezghliutenovi-produkty-4868  
27. Українська спілка целіакії: https://celiac.org.ua/c/index.cfm?sid=50  
28. Food Like Company profile: https://ukrainian-food.com.ua/producers/producer/food-like-company  
29. Dobrodiya Foods / WOWOATS AOECS certification note: https://www.fin.org.ua/news/1509197  

### Методологія

- Global market sizing взято з двох комерційних research providers, щоб не залежати від одного forecast.
- Поширеність целіакії взято з systematic review/meta-analysis: 1.4% serology, 0.7% biopsy.
- Український sizing подано сценарно через нестачу актуальної офіційної статистики по целіакії та демографічну невизначеність.
- Первинний user insight базується на lived experience автора як людини з целіакією в Україні; це якісний сигнал проблеми, не статистичний доказ попиту.
- TAM/SAM/SOM — гіпотези для тестування, не факт.
- Financial projections — модель чутливості за MAU, paid conversion, ARPPU, OCR COGS, CAC/LTV та B2B add-on.
- Traction конкурентів позначено як platform-verified для App Store / Google Play і як self-reported там, де джерелом є офіційний сайт компанії.

### Якість джерел

| Тип джерела | Використання | Обмеження |
|---|---|---|
| Research providers | Розмір і CAGR глобального ринку | Методологія платна/не повністю відкрита |
| Systematic review | Поширеність целіакії | Глобальний proxy, не Україна |
| App stores / official sites | Traction конкурентів | Ratings/downloads не дорівнюють активним користувачам; user counts з офіційних сайтів є self-reported |
| DataReportal / ECDB | Digital та e-commerce context | Не вимірюють gluten-free app market напряму |
| Українські NGO/медіа/локальні джерела | Ознаки проблеми й локального ринку | Немає актуальної офіційної статистики |
