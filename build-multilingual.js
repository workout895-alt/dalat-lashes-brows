const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const indexHtmlPath = path.join(rootDir, 'index.html');
const scriptJsPath = path.join(rootDir, 'script.js');

const rawHtml = fs.readFileSync(indexHtmlPath, 'utf8');
const scriptCode = fs.readFileSync(scriptJsPath, 'utf8');

// Extract translations from script.js
const match = scriptCode.match(/const translations = (\{[\s\S]*?\n\};)/);
if (!match) {
  console.error('Could not find translations in script.js');
  process.exit(1);
}

const cleanObj = match[1].replace(/;\s*$/, '');
const translations = eval('(' + cleanObj + ')');

const baseUrl = 'https://browsaigon.com'; // User can point custom domain here, or host on netlify/vercel

const hreflangBlock = `
  <!-- Multilingual SEO & Canonical hreflang tags -->
  <link rel="canonical" href="${baseUrl}/">
  <link rel="alternate" hreflang="en" href="${baseUrl}/">
  <link rel="alternate" hreflang="ru" href="${baseUrl}/ru/">
  <link rel="alternate" hreflang="vi" href="${baseUrl}/vi/">
  <link rel="alternate" hreflang="x-default" href="${baseUrl}/">
`;

// Helper to replace text inside elements with data-i18n attribute
function replaceI18nContent(html, langData) {
  // Regex matches <tag ... data-i18n="key" ...>Original Text</tag>
  return html.replace(/(<([a-zA-Z0-9\-]+)[^>]*?data-i18n="([^"]+)"[^>]*?>)([\s\S]*?)(<\/\2>)/gi, (match, openTag, tagName, key, innerContent, closeTag) => {
    if (langData[key]) {
      return `${openTag}${langData[key]}${closeTag}`;
    }
    return match;
  });
}

// 1. Update root index.html with hreflang tags if not already present
let enHtml = rawHtml;
if (!enHtml.includes('rel="alternate" hreflang="ru"')) {
  enHtml = enHtml.replace('</head>', `${hreflangBlock}\n</head>`);
  fs.writeFileSync(indexHtmlPath, enHtml, 'utf8');
  console.log('Updated root index.html with hreflang tags');
}

// 2. Generate Russian page (ru/index.html)
const ruDir = path.join(rootDir, 'ru');
if (!fs.existsSync(ruDir)) fs.mkdirSync(ruDir, { recursive: true });

let ruHtml = rawHtml;
// Replace lang attribute
ruHtml = ruHtml.replace('<html lang="en"', '<html lang="ru"');

// Replace Meta tags
ruHtml = ruHtml.replace(/<title id="meta-title">[\s\S]*?<\/title>/, `<title id="meta-title">${translations.ru.metaTitle}</title>`);
ruHtml = ruHtml.replace(/<meta id="meta-desc" name="description" content="[\s\S]*?">/, `<meta id="meta-desc" name="description" content="${translations.ru.metaDesc}">`);
ruHtml = ruHtml.replace(/<meta id="meta-keywords" name="keywords" content="[\s\S]*?">/, `<meta id="meta-keywords" name="keywords" content="${translations.ru.metaKeywords}">`);
ruHtml = ruHtml.replace(/<meta id="og-title" property="og:title" content="[\s\S]*?">/, `<meta id="og-title" property="og:title" content="${translations.ru.ogTitle}">`);
ruHtml = ruHtml.replace(/<meta id="og-desc" property="og:description" content="[\s\S]*?">/, `<meta id="og-desc" property="og:description" content="${translations.ru.ogDesc}">`);
ruHtml = ruHtml.replace(/<meta property="og:locale" content="[\s\S]*?">/, `<meta property="og:locale" content="ru_RU">`);

// Replace hreflang and canonical for Russian
const ruHreflangBlock = `
  <!-- Multilingual SEO & Canonical hreflang tags -->
  <link rel="canonical" href="${baseUrl}/ru/">
  <link rel="alternate" hreflang="en" href="${baseUrl}/">
  <link rel="alternate" hreflang="ru" href="${baseUrl}/ru/">
  <link rel="alternate" hreflang="vi" href="${baseUrl}/vi/">
  <link rel="alternate" hreflang="x-default" href="${baseUrl}/">
`;
if (ruHtml.includes('rel="alternate" hreflang="ru"')) {
  ruHtml = ruHtml.replace(/<!-- Multilingual SEO & Canonical hreflang tags -->[\s\S]*?<link rel="alternate" hreflang="x-default"[^>]*?>/gi, ruHreflangBlock);
} else {
  ruHtml = ruHtml.replace('</head>', `${ruHreflangBlock}\n</head>`);
}

// Adjust relative asset paths for subdirectory
ruHtml = ruHtml.replace(/href="style\.css"/g, 'href="../style.css"');
ruHtml = ruHtml.replace(/src="script\.js"/g, 'src="../script.js"');
ruHtml = ruHtml.replace(/src="hero_master\.jpg"/g, 'src="../hero_master.jpg"');
ruHtml = ruHtml.replace(/content="hero_master\.jpg"/g, 'content="../hero_master.jpg"');
ruHtml = ruHtml.replace(/src="photos\//g, 'src="../photos/');
ruHtml = ruHtml.replace(/href="#/g, 'href="#'); // smooth anchor links still work on same page

// Pre-render Russian text content
ruHtml = replaceI18nContent(ruHtml, translations.ru);

// Pre-render Russian language buttons active state
ruHtml = ruHtml.replace(
  /<button data-lang="en" class="lang-btn([^"]*?)active-lang([^"]*?)">EN<\/button>\s*<button data-lang="ru" class="lang-btn([^"]*?)">RU<\/button>/gi,
  '<button data-lang="en" class="lang-btn$1$2">EN</button>\n            <button data-lang="ru" class="lang-btn px-2.5 py-1 rounded-full transition-all active-lang">RU</button>'
);

fs.writeFileSync(path.join(ruDir, 'index.html'), ruHtml, 'utf8');
console.log('Created ru/index.html with pre-rendered Russian SEO content');

// 3. Generate Vietnamese page (vi/index.html)
const viDir = path.join(rootDir, 'vi');
if (!fs.existsSync(viDir)) fs.mkdirSync(viDir, { recursive: true });

let viHtml = rawHtml;
// Replace lang attribute
viHtml = viHtml.replace('<html lang="en"', '<html lang="vi"');

// Replace Meta tags
viHtml = viHtml.replace(/<title id="meta-title">[\s\S]*?<\/title>/, `<title id="meta-title">${translations.vi.metaTitle}</title>`);
viHtml = viHtml.replace(/<meta id="meta-desc" name="description" content="[\s\S]*?">/, `<meta id="meta-desc" name="description" content="${translations.vi.metaDesc}">`);
viHtml = viHtml.replace(/<meta id="meta-keywords" name="keywords" content="[\s\S]*?">/, `<meta id="meta-keywords" name="keywords" content="${translations.vi.metaKeywords}">`);
viHtml = viHtml.replace(/<meta id="og-title" property="og:title" content="[\s\S]*?">/, `<meta id="og-title" property="og:title" content="${translations.vi.ogTitle}">`);
viHtml = viHtml.replace(/<meta id="og-desc" property="og:description" content="[\s\S]*?">/, `<meta id="og-desc" property="og:description" content="${translations.vi.ogDesc}">`);
viHtml = viHtml.replace(/<meta property="og:locale" content="[\s\S]*?">/, `<meta property="og:locale" content="vi_VN">`);

// Replace hreflang and canonical for Vietnamese
const viHreflangBlock = `
  <!-- Multilingual SEO & Canonical hreflang tags -->
  <link rel="canonical" href="${baseUrl}/vi/">
  <link rel="alternate" hreflang="en" href="${baseUrl}/">
  <link rel="alternate" hreflang="ru" href="${baseUrl}/ru/">
  <link rel="alternate" hreflang="vi" href="${baseUrl}/vi/">
  <link rel="alternate" hreflang="x-default" href="${baseUrl}/">
`;
if (viHtml.includes('rel="alternate" hreflang="ru"')) {
  viHtml = viHtml.replace(/<!-- Multilingual SEO & Canonical hreflang tags -->[\s\S]*?<link rel="alternate" hreflang="x-default"[^>]*?>/gi, viHreflangBlock);
} else {
  viHtml = viHtml.replace('</head>', `${viHreflangBlock}\n</head>`);
}

// Adjust relative asset paths for subdirectory
viHtml = viHtml.replace(/href="style\.css"/g, 'href="../style.css"');
viHtml = viHtml.replace(/src="script\.js"/g, 'src="../script.js"');
viHtml = viHtml.replace(/src="hero_master\.jpg"/g, 'src="../hero_master.jpg"');
viHtml = viHtml.replace(/content="hero_master\.jpg"/g, 'content="../hero_master.jpg"');
viHtml = viHtml.replace(/src="photos\//g, 'src="../photos/');

// Pre-render Vietnamese text content
viHtml = replaceI18nContent(viHtml, translations.vi);

// Pre-render Vietnamese language buttons active state
viHtml = viHtml.replace(
  /<button data-lang="en" class="lang-btn([^"]*?)active-lang([^"]*?)">EN<\/button>[\s\S]*?<button data-lang="vi" class="lang-btn([^"]*?)">VI<\/button>/gi,
  '<button data-lang="en" class="lang-btn">EN</button>\n            <button data-lang="ru" class="lang-btn px-2.5 py-1 rounded-full transition-all text-pink-800">RU</button>\n            <button data-lang="vi" class="lang-btn px-2.5 py-1 rounded-full transition-all active-lang">VI</button>'
);

fs.writeFileSync(path.join(viDir, 'index.html'), viHtml, 'utf8');
console.log('Created vi/index.html with pre-rendered Vietnamese SEO content');

// 4. Create robots.txt
const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
`;
fs.writeFileSync(path.join(rootDir, 'robots.txt'), robotsTxt, 'utf8');
console.log('Created robots.txt');

// 5. Create sitemap.xml
const today = new Date().toISOString().split('T')[0];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/"/>
    <xhtml:link rel="alternate" hreflang="ru" href="${baseUrl}/ru/"/>
    <xhtml:link rel="alternate" hreflang="vi" href="${baseUrl}/vi/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/"/>
  </url>
  <url>
    <loc>${baseUrl}/ru/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/"/>
    <xhtml:link rel="alternate" hreflang="ru" href="${baseUrl}/ru/"/>
    <xhtml:link rel="alternate" hreflang="vi" href="${baseUrl}/vi/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/"/>
  </url>
  <url>
    <loc>${baseUrl}/vi/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/"/>
    <xhtml:link rel="alternate" hreflang="ru" href="${baseUrl}/ru/"/>
    <xhtml:link rel="alternate" hreflang="vi" href="${baseUrl}/vi/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/"/>
  </url>
</urlset>
`;
fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemapXml, 'utf8');
console.log('Created sitemap.xml');
console.log('SEO build completed successfully!');
