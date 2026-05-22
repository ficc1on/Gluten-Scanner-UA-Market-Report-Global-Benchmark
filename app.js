const fmt = new Intl.NumberFormat("uk-UA");

const data = {
  metrics: [
    ["Глобальний ринок 2025", "8.1-8.5 млрд USD", "Fortune Business Insights; Grand View Research."],
    ["Прогноз до 2032/33", "15.4-18.3 млрд USD", "CAGR ~9.6-10.1% за двома research providers."],
    ["Целіакія глобально", "0.7-1.4%", "0.7% biopsy / 1.4% serology, systematic review."],
    ["Digital adoption Україна", "35.3 млн / 89.6%", "DataReportal: internet users and penetration at end-2025."],
    ["Reachable TAM Україна", "90-250 тис.", "Low: 295K × 60% reachable × 50% active need; high додає родини/lifestyle."]
  ],
  market: [
    ["2025", 8.3],
    ["2028", 11.0],
    ["2030", 13.7],
    ["2032/33", 16.9]
  ],
  funnel: [
    ["Patient proxy", 295000, "29.5M × 1.0% celiac proxy"],
    ["Reachable TAM", 250000, "Верхня межа digital + medical/lifestyle need"],
    ["SAM upper", 60000, "Великі міста + online grocery users"],
    ["SOM", 12000, "Досяжні MAU за 24 міс."],
    ["Paid", 720, "6% paid conversion у high-сценарії"]
  ],
  segments: [
    ["Целіакія", 42, "#5ba33c"],
    ["Чутливість / непереносимість", 28, "#78c455"],
    ["Родини", 18, "#f4c542"],
    ["Lifestyle", 12, "#f39a37"]
  ],
  competitors: [
    ["1", "Gluten Free Scanner", 78, 42, "#5ba33c", "Сильний barcode UX; слабший локальний UA фокус"],
    ["2", "Find Me Gluten Free", 48, 82, "#78c455", "Сильний restaurant discovery; не grocery-first; UA база GF-закладів може бути малою"],
    ["3", "Sansglu", 38, 64, "#f4c542", "Safety scores; менший масштаб"],
    ["4", "Open Food Facts clients", 68, 34, "#f39a37", "API/base; якість залежить від країни"],
    ["5", "UA Gluten Scanner", 70, 66, "#ffffff", "Гіпотеза позиціонування: локальні SKU + OCR кирилиці"]
  ],
  revenue: [
    ["Low", 5000, 2, 99, 9900],
    ["Base", 20000, 3, 129, 77400],
    ["High", 50000, 6, 149, 447000]
  ],
  sensitivity: {
    mau: [5000, 20000, 50000],
    conversion: [2, 3, 6],
    arppu: 129
  },
  unitEconomics: {
    headers: ["Метрика", "Base assumption", "Логіка / формула"],
    rows: [
      ["ARPPU", "129 грн/міс", "Ціна Plus у base-сценарії"],
      ["Churn", "20%/міс", "Гіпотеза для early wellness/utilities subscription"],
      ["Lifetime", "5 міс.", "1 / monthly churn"],
      ["LTV gross", "645 грн", "129 грн × 5 міс."],
      ["Target CAC ceiling", "215 грн", "LTV / CAC = 3x"],
      ["OCR COGS", "~0.06 грн/scan", "$1.50 / 1,000 OCR images × 40 грн/USD"],
      ["Base OCR subsidy", "~21 грн/paid user", "При 3% conversion на 1 paid припадає ~32 free users: (32 × 10 + 1 × 30) × 0.06 грн"],
      ["Contribution after OCR", "~108 грн/paid user/month", "ARPPU - OCR subsidy; без app store fees, support і hosting"]
    ]
  },
  pnl: {
    headers: ["Base P&L bridge", "грн/міс", "Логіка"],
    rows: [
      ["Gross MRR", "77,400", "20,000 MAU × 3% paid × 129 грн"],
      ["App Store / Google Play fee", "-11,610", "15% blended platform fee assumption"],
      ["OCR volume", "212,000 scans", "600 paid × 30 OCR + 19,400 free × 10 OCR"],
      ["OCR API COGS", "-12,720", "212,000 OCR scans × ~0.06 грн"],
      ["Hosting + support", "-8,000", "Lean MVP infrastructure/support assumption"],
      ["SKU QA / moderation", "-30,000", "Part-time data ops / moderator budget"],
      ["Податки (ФОП 3 група, 5%)", "-3,870", "5% від Gross MRR"],
      ["Contribution margin (Net)", "11,200", "Залишок після COGS, комісій та 5% податку; бюджет на маркетинг та команду"],
      ["Net contribution margin", "14%", "11,200 / 77,400"]
    ]
  },
  skuRamp: [
    ["Day 0", 0, 0],
    ["Day 30", 1000, 10],
    ["Day 60", 5000, 25],
    ["Day 90", 10000, 35]
  ],
  driverImpact: {
    scale: "Directional expert assessment, scale -5 to +5; not independently validated.",
    items: [
      ["UA SKU coverage", 5, "positive"],
      ["OCR quality", 4, "positive"],
      ["Dietitian channel", 3, "positive"],
      ["Paid intent", 4, "positive"],
      ["Legal claims risk", -4, "negative"],
      ["Global competition", -3, "negative"]
    ]
  },
  decision: {
    headers: ["Питання", "Відповідь", "Рівень впевненості", "Що перевірити"],
    rows: [
      ["Чи є ринковий tailwind?", "Так: global gluten-free food market росте ~9.6-10.1% CAGR", "Високий", "Не потрібно"],
      ["Чи є проблема в Україні?", "Так, але розмір аудиторії треба довести через MVP", "Середній", "30-50 інтервʼю + waitlist"],
      ["Чи можна перемогти глобальних конкурентів?", "Так, якщо фокус на UA SKU, кирилиці та локальних ритейлерах", "Середній", "5-10 тис. SKU + repeat scans"],
      ["Чи це venture-scale одразу?", "Ні для gluten-only Ukraine; так потенційно для allergy scanner + CEE", "Середній", "B2B interest + регіональні тести"]
    ]
  },
  gtm: {
    headers: ["Етап", "Дії", "KPI", "Рішення"],
    rows: [
      ["0-30 днів", "Лендінг, 30-50 інтервʼю, outreach до Української спілки целіакії, Telegram/Facebook спільнот, 1,000 SKU", ">8% waitlist conversion", "Продовжувати discovery"],
      ["31-60 днів", "PWA barcode + OCR, rule engine, admin QA, 3-5 дієтологів, referral у beta cohort", ">500 beta users; >2 scans/user/week", "Інвестувати в SKU-базу"],
      ["61-90 днів", "5-10 тис. SKU, pricing test, referral, B2B talks з ритейлерами та GF-брендами", ">50% повторних користувачів; >3% trial-to-paid", "Go / pivot / stop"]
    ]
  },
  channels: {
    headers: ["Пріоритет", "Канал", "Навіщо", "Коли стартує", "KPI"],
    rows: [
      ["1", "Українська спілка целіакії + Telegram/Facebook спільноти", "Перші інтервʼю, waitlist, ручна валідація болю", "День 1", ">8% waitlist conversion; 30-50 інтервʼю"],
      ["2", "Дієтологи / гастроентерологи", "Довіра і точний сегмент без broad paid media", "Тиждень 2", "10 партнерів у пілоті; CPA < paid social"],
      ["3", "Ритейлери / GF-бренди", "Доступ до SKU, verified layer і B2B LOI", "Тиждень 4", "2-3 LOI за 6 міс."],
      ["4", "SEO", "Long-tail попит: “чи містить X глютен”", "Після 1K SKU", "10K organic visits/month за 12 міс."],
      ["5", "TikTok/Instagram", "Освіта й ретаргетинг після proof of retention", "Після beta retention", "CAC < LTV/3"]
    ]
  },
  monetization: {
    headers: ["Модель", "Ціна", "Що включає", "Статус", "Ризик"],
    rows: [
      ["Freemium", "0 грн", "10-20 сканів/міс, базовий статус", "MVP hypothesis", "Може не конвертувати без сильної звички"],
      ["Plus", "99-149 грн/міс", "Безліміт, OCR, історія, safe list", "UA WTP hypothesis; global gluten-app proxy only", "Потрібна висока якість SKU"],
      ["Family", "199-249 грн/міс", "3-5 профілів, дитячий режим", "WTP hypothesis", "Менша аудиторія, вища готовність платити"],
      ["B2B API", "setup + monthly fee", "Віджет/оцінка ризику для e-commerce", "LOI validation needed", "Довший sales cycle"],
      ["Verified profile", "annual fee", "Профіль бренду + аудит маркування", "Brand validation needed", "Потрібна довіра до методології"]
    ]
  },
  b2b: {
    headers: ["Сценарій", "Тип клієнтів", "Клієнти", "MRR/клієнт", "B2B MRR"],
    rows: [
      ["Low", "1 GF-бренд або дієтологічна мережа", "1", "10,000 грн", "10,000 грн"],
      ["Base", "Ритейлер + 2 бренди / клініки", "3", "25,000 грн", "75,000 грн"],
      ["High", "Ритейлери, e-commerce, GF-бренди", "8", "40,000 грн", "320,000 грн"]
    ]
  },
  riskMatrix: [
    ["1", "Помилкова рекомендація", 86, 78, "#ce5a4a"],
    ["2", "Покриття SKU", 76, 86, "#ce5a4a"],
    ["7", "App Store review", 66, 82, "#ce5a4a"],
    ["6", "Медичні твердження", 54, 86, "#f39a37"],
    ["3", "OCR-помилки", 58, 76, "#f39a37"],
    ["4", "Готовність платити", 48, 48, "#f4c542"],
    ["5", "Копіювання функцій", 40, 42, "#78c455"]
  ],
  audience: {
    headers: ["Рівень", "Оцінка", "Логіка"],
    rows: [
      ["Patient proxy", "~295 тис.", "29.5M наявне населення × 1.0% celiac proxy"],
      ["Reachable TAM", "90-250 тис.", "Low: 295K × 60% reachable × 50% active need ≈ 90K; high додає родини/lifestyle adjacency"],
      ["SAM", "20-60 тис.", "Великі міста, цифрові користувачі, онлайн-покупці"],
      ["SOM 24 міс.", "3-12 тис. MAU", "Досяжна аудиторія за умови локальної бази SKU"],
      ["Paid users", "60-720", "2-6% paid conversion при freemium"]
    ]
  },
  competitorsTable: {
    headers: ["Конкурент", "Фокус", "Traction", "Слабке місце для України"],
    rows: [
      ["Gluten Free Scanner", "Штрихкод + склад", "1M+ users (self-reported); App Store 4.9 / 9.5K ratings (platform-verified)", "Немає явного UA-фокусу"],
      ["Find Me Gluten Free", "Ресторани", "Google Play 1M+ downloads; App Store 4.9 / 24K ratings", "Не grocery-first; в Україні ймовірно мало GF-закладів у базі"],
      ["Sansglu", "Ресторани", "50K+ users, rating 5.0 (self-reported, мала вибірка)", "Менший масштаб"],
      ["Open Food Facts clients", "База/API", "Open API", "Покриття залежить від країни"]
    ]
  },
  gapAnalysis: {
    headers: ["Gap", "As-Is", "To-Be MVP", "Business impact"],
    rows: [
      ["Перевірка складу", "Ручне читання етикетки, 1-3 хв/товар", "Штрихкод або OCR за 3-5 сек", "Менше friction у магазині"],
      ["Кирилиця та імпорт", "Користувач сам шукає синоніми UA/PL/EN/DE", "Rule engine зі словником ризикових інгредієнтів", "Менше помилок і повторних запитів"],
      ["Довіра до результату", "Немає видимого джерела рішення", "Confidence score: verified / OCR / community / unknown", "Вища retention через прозорість"],
      ["Локальна база SKU", "Глобальні apps не покривають long-tail UA товарів", "5-10K перевірених SKU у топ-ритейлерах", "Data moat, який важко швидко скопіювати"],
      ["B2B layer", "Ритейлер не має allergy-risk API", "Віджет/API для e-commerce картки товару", "Upside поза B2C підпискою"]
    ]
  },
  hypotheses: {
    headers: ["Гіпотеза", "Тест", "Метрика успіху"],
    rows: [
      ["Попит є в Україні", "Лендінг + 30-50 інтервʼю", ">8% waitlist conversion"],
      ["OCR важливіший за базу на старті", "Beta у магазині", ">50% сканів через OCR"],
      ["Люди готові платити", "Pricing test", ">3% trial-to-paid"],
      ["Дані створюються спільнотою", "Community uploads", ">20% beta users додають/виправляють SKU"],
      ["Дієтологи знижують CAC", "Пілот із 10 партнерами", "CPA < paid social (гіпотеза; валідувати в пілоті)"]
    ]
  },
  risks: {
    headers: ["Ризик", "Ймовірність", "Вплив", "Рекомендація"],
    rows: [
      ["Неправильна рекомендація", "Висока", "Високий", "Не давати safe guarantee; показувати джерело і confidence"],
      ["Низьке покриття SKU", "Висока", "Високий", "5-10 тис. SKU у топ-ритейлерах до scale"],
      ["OCR-помилки", "Середня", "Високий", "Rule engine + user confirmation + фото складу"],
      ["App Store / Google Play review", "Середня", "Високий", "Не давати медичні поради; джерела даних у результаті; privacy review перед submission"],
      ["UA маркування алергенів", "Середня", "Високий", "Спиратись на маркування та Закон про інформацію для споживачів; не заявляти сертифікацію gluten-free"],
      ["Юридичні та регуляторні ризики", "Середня", "Високий", "Review кожного тексту продукту; 'оцінка ризику', не 'гарантія безпеки'; не медичний пристрій"],
      ["Низька готовність платити", "Середня", "Середній", "Freemium + family plan + B2B2C"],
      ["Копіювання функцій", "Середня", "Середній", "Data moat: локальна база + verified layer"]
    ]
  },
  methodology: {
    headers: ["Блок", "Метод", "Коментар"],
    rows: [
      ["Global market", "Два research providers", "Grand View Research + Fortune Business Insights, щоб не залежати від одного forecast"],
      ["Prevalence", "Systematic review/meta-analysis", "0.7% biopsy / 1.4% serology як глобальний proxy"],
      ["Ukraine sizing", "Scenario-based", "Офіційної актуальної статистики по целіакії немає; демографія має воєнну невизначеність"],
      ["Primary user insight", "Lived-experience input", "Автор — людина з целіакією в Україні; якісний сигнал проблеми, не статистичний доказ попиту"],
      ["Competitors", "Store listings + official websites", "Використано public traction: ratings, downloads/users, positioning"],
      ["Financial model", "Unit economics + sensitivity", "MAU × conversion × ARPPU; CAC/LTV/COGS як feasibility gates"]
    ]
  },
  sources: [
    ["Grand View Research", "https://www.grandviewresearch.com/industry-analysis/gluten-free-products-market"],
    ["Fortune Business Insights", "https://www.fortunebusinessinsights.com/industry-reports/gluten-free-food-market-100188"],
    ["Systematic review: celiac prevalence", "https://www.sciencedirect.com/science/article/pii/S1542356517307838"],
    ["FDA: gluten-free threshold", "https://www.fda.gov/consumers/consumer-updates/gluten-free-means-what-it-says"],
    ["AOECS Gluten Free Certification", "https://www.aoecs.org/working-with-food/gluten-free-certification/"],
    ["DataReportal Ukraine 2026", "https://datareportal.com/reports/digital-2026-ukraine"],
    ["Google Cloud Vision pricing", "https://cloud.google.com/vision/pricing"],
    ["Apple App Review Guidelines", "https://developer.apple.com/app-store/review/guidelines/"],
    ["Держпродспоживслужба: маркування імпортних харчових продуктів", "https://dpss.gov.ua/news/bezpechnist-kharchovykh-produktiv-markuvannia-importnykh-kharchovykh-produktiv-na-shcho-zvernuty-uvahu-spozhyvachu"],
    ["Закон України: інформація для споживачів щодо харчових продуктів, ст. 15", "https://zakon.rada.gov.ua/laws/show/2639-19/paran15"],
    ["USDA GAIN Ukraine labeling report", "https://apps.fas.usda.gov/newgainapi/api/Report/DownloadReportByFileName?fileName=Ukraine+Adopts+New+Labeling+Requirements_Kyiv_Ukraine_01-28-2020"],
    ["UN World Population Prospects", "https://population.un.org/wpp/"],
    ["Worldometer Ukraine population", "https://www.worldometers.info/world-population/ukraine-population/"],
    ["ECDB Ukraine food eCommerce", "https://ecommercedb.com/markets/ua/food"],
    ["Gluten Free Scanner", "https://glutenfreescanner.app/"],
    ["Gluten Free Scanner App Store", "https://apps.apple.com/us/app/gluten-free-scanner/id1642357030"],
    ["Find Me Gluten Free Google Play", "https://play.google.com/store/apps/details?id=com.fmgf.free"],
    ["Find Me Gluten Free App Store", "https://apps.apple.com/us/app/find-me-gluten-free/id431006818"],
    ["Find Me Gluten Free Premium", "https://www.findmeglutenfree.com/premium"],
    ["Sansglu", "https://sansglu.com/"],
    ["BetterMe App Store", "https://apps.apple.com/ua/app/betterme-health-coaching/id1264546236"],
    ["BetterMe subscription terms", "https://betterme.world/ua/subscription-terms"],
    ["YAZIO App Store", "https://apps.apple.com/ua/app/yazio-calorie-counter-diet/id946099227"],
    ["Nutrola: YAZIO pricing 2026", "https://nutrola.app/uk/blog/why-is-yazio-so-expensive-now"],
    ["Open Food Facts API", "https://openfoodfacts.github.io/documentation/docs/Product-Opener/api/"],
    ["Silpo gluten-free category", "https://silpo.ua/category/bezghliutenovi-produkty-4868"],
    ["Українська спілка целіакії", "https://celiac.org.ua/c/index.cfm?sid=50"],
    ["Food Like Company", "https://ukrainian-food.com.ua/producers/producer/food-like-company"],
    ["Dobrodiya Foods / WOWOATS AOECS note", "https://www.fin.org.ua/news/1509197"]
  ]
};

function renderTable(targetId, tableData) {
  const target = document.getElementById(targetId);
  const head = tableData.headers.map((header) => `<th>${header}</th>`).join("");
  const rows = tableData.rows
    .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
    .join("");
  target.innerHTML = `<thead><tr>${head}</tr></thead><tbody>${rows}</tbody>`;
}

function renderCompetitorCards() {
  const rows = data.competitorsTable.rows;
  document.getElementById("competitorsCards").innerHTML = rows.map(([name, focus, traction, weakness]) => `
    <article class="traction-card">
      <h4>${name}</h4>
      <dl>
        <div><dt>Фокус</dt><dd>${focus}</dd></div>
        <div><dt>Traction</dt><dd>${traction}</dd></div>
        <div><dt>Слабке місце для України</dt><dd>${weakness}</dd></div>
      </dl>
    </article>
  `).join("");
}

function marketChart() {
  const max = Math.max(...data.market.map(([, value]) => value));
  return data.market.map(([year, value]) => `
    <div class="bar-column">
      <div class="bar-value">${value.toFixed(1)}</div>
      <div class="bar-shell"><div class="bar-fill" style="height:${(value / max) * 100}%"></div></div>
      <strong>${year}</strong>
    </div>
  `).join("");
}

function funnelChart() {
  const max = data.funnel[0][1];
  return data.funnel.map(([label, value, note]) => `
    <div class="funnel-row">
      <div>
        <strong>${label}</strong>
        <span>${note}</span>
      </div>
      <div class="funnel-track"><div style="width:${Math.max((value / max) * 100, 8)}%"></div></div>
      <b>${fmt.format(value)}</b>
    </div>
  `).join("");
}

function segmentChart() {
  let start = 0;
  const gradient = data.segments.map(([, value, color]) => {
    const end = start + value;
    const part = `${color} ${start}% ${end}%`;
    start = end;
    return part;
  }).join(", ");
  const legend = data.segments.map(([label, value, color]) => `
    <li><i style="background:${color}"></i><span>${label}</span><strong>${value}%</strong></li>
  `).join("");
  return `
    <div class="donut-wrap vertical">
      <div class="donut" style="--segments:${gradient}"></div>
      <ul class="legend">${legend}</ul>
    </div>
  `;
}

function competitorMatrix() {
  return `
    <div class="matrix">
      <span class="axis x">Покриття товарів</span>
      <span class="axis y">Локальна релевантність</span>
      ${data.competitors.map(([id, name, x, y, color, note]) => `
        <div class="dot" style="left:${x}%; bottom:${y}%; --dot-color:${color};" title="${name}: ${note}">
          <span>${id}</span>
        </div>
      `).join("")}
    </div>
    <ol class="chart-legend compact">
      ${data.competitors.map(([id, name, , , color, note]) => `<li style="--dot-color:${color};"><b>${id}</b><strong>${name}</strong><span>${note}</span></li>`).join("")}
    </ol>
  `;
}

function revenueChart() {
  const max = Math.max(...data.revenue.map(([, , , , mrr]) => mrr));
  return data.revenue.map(([scenario, mau, conv, arppu, mrr]) => `
    <div class="revenue-row">
      <strong>${scenario}</strong>
      <div class="track"><div style="width:${(mrr / max) * 100}%"></div></div>
      <span>${fmt.format(mrr)} грн MRR</span>
      <small>${fmt.format(mau)} MAU · ${conv}% · ${arppu} грн</small>
    </div>
  `).join("");
}

function sensitivityHeatmap() {
  const { mau, conversion, arppu } = data.sensitivity;
  const values = [];
  mau.forEach((m) => conversion.forEach((c) => values.push(Math.round(m * (c / 100) * arppu))));
  const max = Math.max(...values);
  return `
    <div class="heatmap">
      <div></div>
      ${conversion.map((c) => `<b>${c}% paid</b>`).join("")}
      ${mau.map((m) => `
        <b>${fmt.format(m)} MAU</b>
        ${conversion.map((c) => {
          const v = Math.round(m * (c / 100) * arppu);
          const alpha = 0.18 + (v / max) * 0.72;
          const isBase = m === 20000 && c === 3;
          return `<span class="${isBase ? "base-cell" : ""}" style="background:rgba(91,163,60,${alpha})">${fmt.format(v)}<small>грн MRR${isBase ? " · Base" : ""}</small></span>`;
        }).join("")}
      `).join("")}
    </div>
  `;
}

function skuRampChart() {
  const maxSku = Math.max(...data.skuRamp.map(([, sku]) => sku));
  return data.skuRamp.map(([label, sku, community]) => `
    <div class="sku-row">
      <strong>${label}</strong>
      <div class="track"><div style="width:${Math.max((sku / maxSku) * 100, 4)}%"></div></div>
      <span>${fmt.format(sku)} SKU</span>
      <small>${community}% target community</small>
    </div>
  `).join("");
}

function driverImpactChart() {
  const max = Math.max(...data.driverImpact.items.map(([, value]) => Math.abs(value)));
  return data.driverImpact.items.map(([label, value, type]) => {
    const width = (Math.abs(value) / max) * 50;
    const positive = type === "positive";
    return `
      <div class="impact-row ${positive ? "positive" : "negative"}">
        <span>${label}</span>
        <div class="impact-track">
          <i class="zero"></i>
          <b style="${positive ? `left:50%;width:${width}%` : `right:50%;width:${width}%`}"></b>
        </div>
        <strong>${positive ? "+" : ""}${value}</strong>
      </div>
    `;
  }).join("");
}

function riskMatrix() {
  return `
    <div class="risk-layout">
      <div class="risk-grid">
        ${data.riskMatrix.map(([id, label, x, y, color]) => `
          <div class="risk-dot" style="left:${x}%; bottom:${y}%; --dot-color:${color};" title="${label}">
            <span>${id}</span>
          </div>
        `).join("")}
        <b class="risk-x">Ймовірність</b>
        <b class="risk-y">Вплив</b>
      </div>
      <ol class="chart-legend risk-legend">
        ${data.riskMatrix.map(([id, label, , , color]) => `<li style="--dot-color:${color};"><b>${id}</b><strong>${label}</strong></li>`).join("")}
      </ol>
    </div>
  `;
}

function render() {
  document.getElementById("metricGrid").innerHTML = data.metrics.map(([label, value, note]) => `
    <article class="metric">
      <small>${label}</small>
      <strong>${value}</strong>
      <span>${note}</span>
    </article>
  `).join("");

  document.getElementById("marketChart").innerHTML = marketChart();
  document.getElementById("funnelChart").innerHTML = funnelChart();
  document.getElementById("segmentChart").innerHTML = segmentChart();
  document.getElementById("competitorMatrix").innerHTML = competitorMatrix();
  document.getElementById("revenueChart").innerHTML = revenueChart();
  document.getElementById("sensitivityHeatmap").innerHTML = sensitivityHeatmap();
  document.getElementById("skuRampChart").innerHTML = skuRampChart();
  document.getElementById("driverImpactChart").innerHTML = driverImpactChart();
  document.getElementById("riskMatrix").innerHTML = riskMatrix();

  renderTable("audienceTable", data.audience);
  renderTable("decisionTable", data.decision);
  renderTable("competitorsTable", data.competitorsTable);
  renderCompetitorCards();
  renderTable("gapAnalysisTable", data.gapAnalysis);
  renderTable("gtmTable", data.gtm);
  renderTable("channelsTable", data.channels);
  renderTable("monetizationTable", data.monetization);
  renderTable("b2bTable", data.b2b);
  renderTable("unitEconomicsTable", data.unitEconomics);
  renderTable("pnlTable", data.pnl);
  renderTable("hypothesisTable", data.hypotheses);
  renderTable("riskTable", data.risks);
  renderTable("methodologyTable", data.methodology);

  document.getElementById("sourceList").innerHTML = data.sources.map(([label, url]) => `
    <li><a href="${url}" target="_blank" rel="noreferrer">${label}</a></li>
  `).join("");
}

render();
