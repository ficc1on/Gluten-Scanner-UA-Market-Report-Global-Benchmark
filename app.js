const fmt = new Intl.NumberFormat("uk-UA");

function labelContrast(hex) {
  const raw = String(hex).replace("#", "");
  if (raw.length !== 6) return "light";
  const r = parseInt(raw.slice(0, 2), 16);
  const g = parseInt(raw.slice(2, 4), 16);
  const b = parseInt(raw.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.58 ? "dark" : "light";
}
const POPULATION_M = 29.5;
const PENETRATION = 0.896;
const DIGITAL_M = Math.round(POPULATION_M * PENETRATION * 10) / 10;

const data = {
  funnelContext: `Digital addressable: ${fmt.format(Math.round(POPULATION_M * 1_000_000 * PENETRATION))} (~${DIGITAL_M} млн) = ${POPULATION_M} млн наявного населення × ${(PENETRATION * 100).toFixed(1)}% penetration (DataReportal proxy).`,
  metrics: [
    ["Глобальний ринок 2025", "8.1-8.5 млрд USD", "Fortune BI; Grand View Research."],
    ["Прогноз до 2032/33", "15.4-18.3 млрд USD", "CAGR ~9.6-10.1% (два research providers)."],
    ["Целіакія глобально", "0.7-1.4%", "Systematic review: biopsy / serology."],
    ["Digital base Україна", `~${DIGITAL_M} млн`, `${POPULATION_M}M × ${(PENETRATION * 100).toFixed(1)}% — не 35.3M DataReportal raw.`],
    ["Reachable TAM Україна", "90-250 тис.", "60% e-commerce proxy × 50% symptom filter (low)."]
  ],
  market: [
    ["2025", 8.3],
    ["2028", 11.0],
    ["2030", 13.7],
    ["2032/33", 16.9]
  ],
  funnel: [
    ["Patient proxy", 295000, "29.5M × 1.0% celiac proxy"],
    ["Reachable TAM", 250000, "90-250K: low = 295K × 60% e-commerce proxy × 50% symptom filter; high + родини/lifestyle", "90-250 тис."],
    ["SAM", 60000, "Великі міста + online grocery"],
    ["SOM base (MAU)", 20000, "Base 24 міс.; 50K — stretch"],
    ["Paid users", 600, "3% conversion · ~0.2% of patient proxy"]
  ],
  segmentPriorities: {
    headers: ["Сегмент", "Потреба", "MVP-пріоритет", "Коментар"],
    rows: [
      ["Целіакія", "High", "Core", "Медично обґрунтований use case; найвищий очікуваний WTP"],
      ["Чутливість / непереносимість", "High", "Core", "Частий супермаркетний сценарій; валідація через beta"],
      ["Родини", "Medium", "Secondary", "Family plan після core retention"],
      ["Lifestyle / wellness", "Low", "Later", "Розширення після proof of paid intent"]
    ]
  },
  competitors: [
    ["1", "Gluten Free Scanner", 78, 42, "#0077c8", "Сильний barcode UX; слабший локальний UA фокус"],
    ["2", "Find Me Gluten Free", 48, 82, "#4a90c8", "Restaurant discovery; не grocery-first"],
    ["3", "Sansglu", 38, 64, "#6ba3d6", "Safety scores; менший масштаб"],
    ["4", "Open Food Facts clients", 68, 34, "#00338d", "API/base; якість залежить від країни"],
    ["5", "UA Gluten Scanner", 70, 66, "#e8f0f7", "Цільова позиція · To-Be: локальні SKU + OCR кирилиці"]
  ],
  revenue: [
    ["Low", 5000, 2, 99, 9900],
    ["Base", 20000, 3, 129, 77400],
    ["High", 50000, 6, 149, 447000]
  ],
  sensitivity: {
    mau: [5000, 20000, 50000],
    columns: [
      { conversion: 2, arppu: 99, label: "2% · 99 грн" },
      { conversion: 3, arppu: 129, label: "3% · 129 грн" },
      { conversion: 6, arppu: 149, label: "6% · 149 грн" }
    ]
  },
  unitEconomics: {
    headers: ["Метрика", "Base assumption", "Логіка / формула"],
    rows: [
      ["ARPPU", "129 грн/міс", "Ціна Plus у base-сценарії"],
      ["Churn, pessimistic", "20%/міс", "Lifetime = 5 міс. до beta-retention даних"],
      ["Churn, retention upside", "7%/міс", "Sensitivity; lifetime ≈ 14 міс."],
      ["LTV gross, pessimistic", "645 грн", "129 грн × 5 міс."],
      ["Target CAC ceiling", "215 грн", "LTV/3; ≈6.45 грн за free user при 3% conversion"],
      ["Contribution after OCR", "~108 грн/міс", "ARPPU − OCR subsidy (без store fee)"],
      ["CAC payback", "~2 міс.", "215 грн ÷ ~108 грн contribution ≈ 2 міс. — ключовий viability gate"],
      ["OCR COGS", "~0.06 грн/scan", "$1.50/1K images × 40 грн/USD"],
      ["Base OCR subsidy", "~21 грн/paid user", "(97%/3% ≈ 32 free на 1 paid; 32×10 + 1×30) × 0.06 грн"],
      ["Distribution", "Community-first", "Paid social не primary до retention proof"]
    ]
  },
  pnl: {
    headers: ["Base P&L bridge", "грн/міс", "Логіка"],
    rows: [
      ["Gross MRR", "77,400", "20,000 MAU × 3% × 129 грн"],
      ["App Store / Google Play fee", "-11,610", "15% blended platform fee"],
      ["OCR API COGS", "-12,720", "212K scans × ~0.06 грн"],
      ["Hosting + support", "-8,000", "Lean MVP assumption"],
      ["SKU QA / moderation", "-30,000", "~50 год × 600 грн/год"],
      ["Податки (ФОП 3, 5%)", "-3,870", "5% від Gross MRR до platform fee; conservative MVP assumption"],
      ["Contribution margin (Net)", "11,200", "Після COGS, комісій, податку"],
      ["Net contribution margin", "14%", "11,200 / 77,400"]
    ]
  },
  skuRamp: [
    ["Day 0", 0, 0],
    ["Day 30", 1000, 10],
    ["Day 60", 5000, 10],
    ["Day 90", 10000, 15]
  ],
  driverMatrix: [
    ["1", "UA SKU coverage", 84, 72, "#0077c8"],
    ["2", "OCR quality", 78, 66, "#0077c8"],
    ["3", "Paid intent", 72, 58, "#4a90c8"],
    ["4", "Dietitian channel", 62, 74, "#4a90c8"],
    ["5", "Legal claims risk", 68, 82, "#b45309"],
    ["6", "Global competition", 44, 52, "#64748b"]
  ],
  decision: {
    headers: ["Невідоме", "Що тестує MVP", "Deadline", "Gate"],
    rows: [
      ["Repeat usage", "Чи повертаються beta users у магазині без нагадування", "Day 60", ">2 scans/user/week; >50% repeat users"],
      ["Paid intent", "Чи платить вузька аудиторія за безліміт/OCR/history", "Day 90", ">3% trial-to-paid"],
      ["SKU growth", "Чи можна зібрати й перевірити локальну базу без ручного burn", "Day 90", "5-10K verified SKU"],
      ["B2B pull", "Чи є інтерес ритейлерів/GF-брендів до verified layer/API", "Day 90", "2-3 LOI або pilot talks"]
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
      ["Plus", "99-149 грн/міс", "Безліміт, OCR, історія, safe list", "UA WTP hypothesis", "Потрібна висока якість SKU"],
      ["Family", "199-249 грн/міс", "3-5 профілів, дитячий режим", "WTP hypothesis", "Менша аудиторія, вища готовність платити"],
      ["B2B API", "setup + monthly fee", "Віджет/оцінка ризику для e-commerce", "LOI validation needed", "Довший sales cycle"],
      ["Verified profile", "annual fee", "Профіль бренду + аудит маркування", "Brand validation needed", "Потрібна довіра до методології"]
    ]
  },
  b2b: {
    headers: ["Сценарій", "Тип клієнтів", "Клієнти", "MRR/клієнт", "B2B MRR", "Proxy-логіка"],
    rows: [
      ["Low", "1 GF-бренд або дієтологічна мережа", "1", "5,000 грн", "5,000 грн", "Базовий SaaS для малого бізнесу UA (~3-7K грн/міс)"],
      ["Base", "Ритейлер + 2 бренди / клініки", "3", "8,000 грн", "24,000 грн", "CRM/loyalty lite + API access tier"],
      ["High", "Ритейлери, e-commerce, GF-бренди", "8", "15,000 грн", "120,000 грн", "E-commerce plugin + verified catalog tier"]
    ]
  },
  riskMatrix: [
    ["1", "Помилкова рекомендація", 86, 78, "#b91c1c"],
    ["2", "Покриття SKU", 76, 86, "#b91c1c"],
    ["3", "App Store review", 66, 82, "#b45309"],
    ["4", "Медичні твердження", 54, 86, "#b45309"],
    ["5", "OCR-помилки", 58, 76, "#b45309"],
    ["6", "Готовність платити", 48, 48, "#0077c8"],
    ["7", "Копіювання функцій", 40, 42, "#4a90c8"]
  ],
  audience: {
    headers: ["Рівень", "Оцінка", "Логіка"],
    rows: [
      ["Available population", "29.5 млн", "UN ~38M мінус окуповані території та чиста еміграція (estimated)"],
      ["Digital addressable", `~${DIGITAL_M} млн`, `${POPULATION_M}M × ${(PENETRATION * 100).toFixed(1)}% penetration — єдина цифрова база моделі`],
      ["Patient proxy", "~295 тис.", "29.5M × 1.0% celiac proxy (midpoint serology/biopsy)"],
      ["Reachable TAM", "90-250 тис.", "Low: 60% e-commerce penetration proxy × 50% symptom severity filter"],
      ["SAM", "20-60 тис.", "Активні digital users у містах + online grocery"],
      ["SOM 24 міс.", "5-20 тис. MAU; 50K stretch", "Відповідає фінмоделі"],
      ["Paid users", "100-600 base; до 3K stretch", "2-6% paid conversion"]
    ]
  },
  competitorsTable: {
    headers: ["Конкурент", "Фокус", "Traction", "Traffic proxy", "Слабке місце для України"],
    rows: [
      [
        "Gluten Free Scanner",
        "Штрихкод + склад",
        "App Store 4.9 / 9.5K ratings; 1M+ users (self-reported)",
        "Similarweb: top-5k Health & Fitness US; SensorTower: ~200-400K global MAU order-of-magnitude (estimated)",
        "Немає явного UA-фокусу"
      ],
      [
        "Find Me Gluten Free",
        "Ресторани",
        "Google Play 1M+ downloads; App Store 4.9 / 24K ratings",
        "Similarweb: strong US restaurant vertical; low UA locale share (estimated)",
        "Не grocery-first; мало GF-закладів у UA базі"
      ],
      [
        "Sansglu",
        "Ресторани",
        "50K+ users, 5.0 rating (self-reported, мала вибірка)",
        "SensorTower: <50K downloads lifetime order-of-magnitude (estimated)",
        "Менший масштаб"
      ],
      [
        "Open Food Facts clients",
        "База/API",
        "Open API",
        "N/A — infrastructure, not direct competitor MAU",
        "Покриття залежить від країни"
      ]
    ]
  },
  gapAnalysis: {
    headers: ["Gap", "As-Is", "To-Be MVP", "Business impact"],
    rows: [
      ["Перевірка складу", "Ручне вивчення складу: 30-60 сек", "Штрихкод або OCR за 3-5 сек", "Менше friction у магазині"],
      ["Кирилиця та імпорт", "Користувач сам шукає синоніми", "Rule engine UA/PL/EN/DE", "Менше помилок"],
      ["Довіра до результату", "Немає джерела рішення", "Confidence score + verified layer", "Вища retention"],
      ["Локальна база SKU", "Глобальні apps без long-tail UA", "5-10K verified SKU", "Data moat"],
      ["B2B layer", "Немає allergy-risk API", "Віджет/API для e-commerce", "Upside поза B2C"]
    ]
  },
  hypotheses: {
    headers: ["Гіпотеза", "Тест", "Метрика успіху"],
    rows: [
      ["Попит є в Україні", "Лендінг + 30-50 інтервʼю", ">8% waitlist conversion"],
      ["OCR важливіший за базу на старті", "Beta у магазині", ">50% сканів через OCR"],
      ["Люди готові платити", "Pricing test", ">3% trial-to-paid"],
      ["Дані створюються спільнотою", "Community uploads", ">20% beta users додають SKU"],
      ["Дієтологи знижують CAC", "Пілот із 10 партнерами", "CPA < paid social"]
    ]
  },
  risks: {
    headers: ["Ризик", "Ймовірність", "Вплив", "Рекомендація"],
    rows: [
      ["Неправильна рекомендація", "Висока", "Високий", "Не давати safe guarantee; confidence + джерело"],
      ["Низьке покриття SKU", "Висока", "Високий", "5-10 тис. SKU у топ-ритейлерах"],
      ["OCR-помилки", "Середня", "Високий", "Rule engine + user confirmation"],
      ["App Store / Google Play review", "Середня", "Високий", "Без медичних порад; privacy review"],
      ["UA маркування алергенів", "Середня", "Високий", "Маркування + Закон про інформацію для споживачів"],
      ["Юридичні ризики", "Середня", "Високий", "«Оцінка ризику», не «гарантія безпеки»"],
      ["Низька готовність платити", "Середня", "Середній", "Freemium + family + B2B2C"],
      ["Копіювання функцій", "Середня", "Середній", "Data moat: локальна база + verified layer"]
    ]
  },
  methodology: {
    headers: ["Блок", "Метод", "Коментар"],
    rows: [
      ["Global market", "Commercial estimates", "Grand View + Fortune BI; use as market benchmark, not scanner TAM"],
      ["Prevalence", "Systematic review", "0.7% biopsy / 1.4% serology"],
      ["Ukraine sizing", "Scenario-based", "29.5M population; digital = ×89.6% penetration"],
      ["Primary insight", "Discovery hypothesis", "Потребує 30-50 інтервʼю + beta; не статистика попиту"],
      ["Competitors", "Stores + traffic proxies", "Similarweb/SensorTower — order-of-magnitude only"],
    ["Financial model", "Unit economics + sensitivity", "FX: 40 грн/USD для OCR COGS; ФОП 5% раховано від Gross MRR"]
    ]
  },
  appendixNotes: [
    "Населення 29.5 млн: консервативна база від UN WPP (~38 млн) з коригуванням на окуповані території та міграцію; не офіційна держстатистика.",
    "Digital 26.4 млн: 29.5 млн × 89.6% (DataReportal Ukraine 2026 penetration), а не 35.3 млн internet users на registered-population basis.",
    "Reachable 60%: proxy penetration e-commerce / digital grocery в UA (~50-70% urban active buyers).",
    "Reachable 50%: proxy symptom severity / active label-checking need.",
    "Конвертація OCR: Google Cloud Vision $1.50/1K × 40 грн/USD (planning rate, Appendix).",
    "ФОП 5% у P&L раховано від Gross MRR до platform fee як консервативний MVP-підхід.",
    "Конкуренти: self-reported user counts + Similarweb/SensorTower directional proxies; не аудит."
  ],
  sources: [
    ["Grand View Research", "https://www.grandviewresearch.com/industry-analysis/gluten-free-products-market"],
    ["Fortune Business Insights", "https://www.fortunebusinessinsights.com/industry-reports/gluten-free-food-market-100188"],
    ["Systematic review: celiac prevalence", "https://www.sciencedirect.com/science/article/pii/S1542356517307838"],
    ["FDA: gluten-free threshold", "https://www.fda.gov/consumers/consumer-updates/gluten-free-means-what-it-says"],
    ["AOECS Gluten Free Certification", "https://www.aoecs.org/working-with-food/gluten-free-certification/"],
    ["DataReportal Ukraine 2026", "https://datareportal.com/reports/digital-2026-ukraine"],
    ["Google Cloud Vision pricing", "https://cloud.google.com/vision/pricing"],
    ["Apple App Review Guidelines", "https://developer.apple.com/app-store/review/guidelines/"],
    ["Держпродспоживслужба", "https://dpss.gov.ua/news/bezpechnist-kharchovykh-produktiv-markuvannia-importnykh-kharchovykh-produktiv-na-shcho-zvernuty-uvahu-spozhyvachu"],
    ["Закон України, ст. 15", "https://zakon.rada.gov.ua/laws/show/2639-19/paran15"],
    ["UN World Population Prospects", "https://population.un.org/wpp/"],
    ["Worldometer Ukraine population (aggregator cross-check)", "https://www.worldometers.info/world-population/ukraine-population/"],
    ["ECDB Ukraine food eCommerce", "https://ecommercedb.com/markets/ua/food"],
    ["Gluten Free Scanner", "https://glutenfreescanner.app/"],
    ["Gluten Free Scanner App Store", "https://apps.apple.com/us/app/gluten-free-scanner/id1642357030"],
    ["Find Me Gluten Free Google Play", "https://play.google.com/store/apps/details?id=com.fmgf.free"],
    ["Find Me Gluten Free App Store", "https://apps.apple.com/us/app/find-me-gluten-free/id431006818"],
    ["Find Me Gluten Free Premium", "https://www.findmeglutenfree.com/premium"],
    ["Sansglu", "https://sansglu.com/"],
    ["Open Food Facts API", "https://openfoodfacts.github.io/documentation/docs/Product-Opener/api/"],
    ["Silpo gluten-free category", "https://silpo.ua/category/bezghliutenovi-produkty-4868"],
    ["Українська спілка целіакії", "https://celiac.org.ua/c/index.cfm?sid=50"],
    ["BetterMe App Store", "https://apps.apple.com/ua/app/betterme-health-coaching/id1264546236"],
    ["BetterMe subscription terms", "https://betterme.world/ua/subscription-terms"],
    ["YAZIO App Store", "https://apps.apple.com/ua/app/yazio-calorie-counter-diet/id946099227"],
    ["Food Like Company", "https://foodlike.com.ua/"],
    ["Dobrodiya Foods / WOWOATS", "https://dobrodiya.com.ua/"]
  ]
};

const TABLE_COL_WIDTHS = {
  competitorsTable: [130, 110, 260, 280, 240],
  decisionTable: [76, 260, 90, 200],
  gapAnalysisTable: [84, 160, 190, 170],
  gtmTable: [62, 270, 150, 150],
  channelsTable: [36, 160, 185, 112, 190],
  monetizationTable: [72, 120, 230, 160, 170],
  riskTable: [128, 88, 88, 220],
  methodologyTable: [88, 210, 220],
  unitEconomicsTable: [140, 160, 500],
  pnlTable: [140, 160, 500],
  b2bTable: [56, 130, 80, 110, 110, 300]
};

const MOBILE_TABLE_WIDTH_QUERY = "(max-width: 680px)";
let tableWidthMode = null;

function currentTableWidthMode() {
  if (typeof window === "undefined" || !window.matchMedia) return "desktop";
  return window.matchMedia(MOBILE_TABLE_WIDTH_QUERY).matches ? "mobile" : "desktop";
}

function parseColumnWidths(value) {
  if (!value) return null;
  const widths = value.split(",").map((item) => item.trim()).filter(Boolean);
  return widths.length ? widths : null;
}

function formatColumnWidth(width) {
  if (typeof width === "number") return `${width}px`;
  const value = String(width).trim();
  if (!value || value.toLowerCase() === "auto") return "auto";
  return /^-?\d+(\.\d+)?$/.test(value) ? `${value}px` : value;
}

function getTableColumnWidths(targetId, table) {
  const mobileWidths = currentTableWidthMode() === "mobile"
    ? parseColumnWidths(table?.dataset.mobileColWidths)
    : null;
  return mobileWidths || TABLE_COL_WIDTHS[targetId];
}

function renderColgroup(targetId, table) {
  const widths = getTableColumnWidths(targetId, table);
  if (!widths) return "";
  return `<colgroup>${widths.map((w) => {
    const style = `width:${formatColumnWidth(w)}`;
    return `<col style="${style}">`;
  }).join("")}</colgroup>`;
}

function ensureScrollWrap(table) {
  if (table.parentElement?.classList.contains("table-scroll-wrap")) return;
  const wrap = document.createElement("div");
  wrap.className = "table-scroll-wrap";
  table.parentNode.insertBefore(wrap, table);
  wrap.appendChild(table);
}

function renderTable(targetId, tableData, options = {}) {
  const table = document.getElementById(targetId);
  if (!table) return;

  const mobile = options.mobile || "scroll";
  const tableClass = options.tableClass || (mobile === "stack" ? "table-mobile-stack" : "table-scroll-wide");
  const useLabels = mobile === "stack";
  const colgroup = renderColgroup(targetId, table);
  const head = tableData.headers.map((header) => `<th>${header}</th>`).join("");
  const rows = tableData.rows
    .map((row) => `<tr>${row.map((cell, index) => {
      const labelAttr = useLabels ? ` data-label="${tableData.headers[index]}"` : "";
      return `<td${labelAttr}>${cell}</td>`;
    }).join("")}</tr>`)
    .join("");

  table.className = tableClass;
  table.innerHTML = `${colgroup}<thead><tr>${head}</tr></thead><tbody>${rows}</tbody>`;

  if (mobile === "scroll") {
    ensureScrollWrap(table);
  }
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
  const context = `<p class="funnel-context">${data.funnelContext}</p>`;
  const rows = data.funnel.map(([label, value, note, displayValue]) => {
    const pct = (value / max) * 100;
    const width = pct < 0.5 && value > 0 ? 0.5 : pct;
    return `
    <div class="funnel-row">
      <div>
        <strong>${label}</strong>
        <span>${note}</span>
      </div>
      <div class="funnel-track"><div style="width:${width}%"></div></div>
      <b>${displayValue || fmt.format(value)}</b>
    </div>
  `;
  }).join("");
  return context + rows;
}

function segmentChart() {
  return renderSegmentPriorityTable();
}

function renderSegmentPriorityTable() {
  const priorityClass = (p) => {
    const key = String(p).toLowerCase();
    if (key === "high" || key === "core") return "priority-high";
    if (key === "medium" || key === "secondary") return "priority-medium";
    return "priority-low";
  };
  const head = data.segmentPriorities.headers.map((h) => `<th>${h}</th>`).join("");
  const rows = data.segmentPriorities.rows.map((row) => `
    <tr>${row.map((cell, i) => {
      const labelAttr = ` data-label="${data.segmentPriorities.headers[i]}"`;
      if (i === 1 || i === 2) {
        return `<td${labelAttr}><span class="priority-pill ${priorityClass(cell)}">${cell}</span></td>`;
      }
      return `<td${labelAttr}>${cell}</td>`;
    }).join("")}</tr>
  `).join("");
  const colgroup = `<colgroup>
    <col class="col-seg-name">
    <col class="col-seg-need">
    <col class="col-seg-mvp">
    <col class="col-seg-note">
  </colgroup>`;
  return `<div class="segment-table-wrap"><table class="segment-priority-table">${colgroup}<thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
}

function matrixMarker(color, id) {
  const contrast = labelContrast(color);
  return { contrast, className: `dot-label-${contrast}` };
}

function competitorMatrix() {
  return `
    <div class="matrix-layout">
      <div class="matrix">
        <span class="axis x">Покриття товарів</span>
        <span class="axis y">Локальна релевантність</span>
        ${data.competitors.map(([id, name, x, y, color, note]) => {
          const { className } = matrixMarker(color, id);
          return `
        <div class="dot ${className}${id === "5" ? " target-dot" : ""}" style="left:${x}%; bottom:${y}%; --dot-color:${color};" title="${name}: ${note}">
            <span>${id}</span>
          </div>`;
        }).join("")}
      </div>
      <ol class="chart-legend compact">
        ${data.competitors.map(([id, name, , , color, note]) => {
          const { className } = matrixMarker(color, id);
        return `<li class="${id === "5" ? "target-legend" : ""}" style="--dot-color:${color};"><b class="${className}">${id}</b><strong>${name}</strong><span>${note}</span></li>`;
        }).join("")}
      </ol>
    </div>
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
  const { mau, columns } = data.sensitivity;
  const values = [];
  mau.forEach((m) => columns.forEach(({ conversion, arppu }) => {
    values.push(Math.round(m * (conversion / 100) * arppu));
  }));
  const max = Math.max(...values);
  return `
    <div class="heatmap-scroll">
      <div class="heatmap">
        <b>MAU ↓</b>
        ${columns.map(({ label }) => `<b>${label}</b>`).join("")}
        ${mau.map((m) => `
          <b>${fmt.format(m)} MAU</b>
          ${columns.map(({ conversion, arppu }) => {
            const v = Math.round(m * (conversion / 100) * arppu);
            const mix = Math.round(14 + (v / max) * 72);
            const isBase = m === 20000 && conversion === 3 && arppu === 129;
            return `<span class="heatmap-cell${isBase ? " base-cell" : ""}" style="--heat:${mix}%">${fmt.format(v)}<small>грн MRR${isBase ? " · Base" : ""}</small></span>`;
          }).join("")}
        `).join("")}
      </div>
    </div>
  `;
}

function skuRampChart() {
  const maxSku = Math.max(...data.skuRamp.map(([, sku]) => sku), 1);
  return data.skuRamp.map(([label, sku, community]) => `
    <div class="sku-row">
      <strong>${label}</strong>
      <div class="track"><div style="width:${sku ? (sku / maxSku) * 100 : 0}%"></div></div>
      <span>${fmt.format(sku)} SKU</span>
      <small>${community}% target community</small>
    </div>
  `).join("");
}

function driverImpactChart() {
  return `
    <div class="driver-layout">
      <div class="matrix driver-matrix">
        <span class="axis x">Feasibility</span>
        <span class="axis y">Impact</span>
        ${data.driverMatrix.map(([id, label, x, y, color]) => {
          const { className } = matrixMarker(color, id);
          return `
          <div class="dot ${className}" style="left:${x}%; bottom:${y}%; --dot-color:${color};" title="${label}">
            <span>${id}</span>
          </div>`;
        }).join("")}
      </div>
      <ol class="chart-legend driver-legend">
        ${data.driverMatrix.map(([id, label, , , color]) => {
          const { className } = matrixMarker(color, id);
          return `<li style="--dot-color:${color};"><b class="${className}">${id}</b><strong>${label}</strong></li>`;
        }).join("")}
      </ol>
    </div>
  `;
}

function riskMatrix() {
  return `
    <div class="risk-layout">
      <div class="risk-grid">
        ${data.riskMatrix.map(([id, label, x, y, color]) => {
          const { className } = matrixMarker(color, id);
          return `
          <div class="risk-dot ${className}" style="left:${x}%; bottom:${y}%; --dot-color:${color};" title="${label}">
            <span>${id}</span>
          </div>`;
        }).join("")}
        <b class="risk-x">Ймовірність</b>
        <b class="risk-y">Вплив</b>
      </div>
      <ol class="chart-legend risk-legend">
        ${data.riskMatrix.map(([id, label, , , color]) => {
          const { className } = matrixMarker(color, id);
          return `<li style="--dot-color:${color};"><b class="${className}">${id}</b><strong>${label}</strong></li>`;
        }).join("")}
      </ol>
    </div>
  `;
}

function renderAppendixNotes() {
  const el = document.getElementById("appendixNotes");
  if (!el) return;
  el.innerHTML = data.appendixNotes.map((note) => `<li>${note}</li>`).join("");
}

function render() {
  tableWidthMode = currentTableWidthMode();

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

  renderTable("audienceTable", data.audience, { mobile: "stack" });
  renderTable("hypothesisTable", data.hypotheses, { mobile: "stack" });
  renderTable("decisionTable", data.decision);
  renderTable("competitorsTable", data.competitorsTable);
  renderTable("gapAnalysisTable", data.gapAnalysis);
  renderTable("gtmTable", data.gtm);
  renderTable("channelsTable", data.channels);
  renderTable("monetizationTable", data.monetization);
  renderTable("b2bTable", data.b2b, { tableClass: "table-b2b" });
  renderTable("unitEconomicsTable", data.unitEconomics, { tableClass: "table-financial" });
  renderTable("pnlTable", data.pnl, { tableClass: "table-financial" });
  renderTable("riskTable", data.risks);
  renderTable("methodologyTable", data.methodology);
  renderAppendixNotes();

  document.getElementById("sourceList").innerHTML = data.sources.map(([label, url]) => `
    <li><a href="${url}" target="_blank" rel="noreferrer">${label}</a></li>
  `).join("");
}

render();

let resizeTimer;
window.addEventListener("resize", () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    if (currentTableWidthMode() !== tableWidthMode) render();
  }, 120);
});
