const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const indexHtmlPath = path.join(rootDir, 'index.html');
const saigonHtmlPath = path.join(rootDir, 'saigon', 'index.html');
const scriptJsPath = path.join(rootDir, 'script.js');

const dalatBaseHtml = fs.readFileSync(indexHtmlPath, 'utf8');
const saigonBaseHtml = fs.readFileSync(saigonHtmlPath, 'utf8');
const scriptCode = fs.readFileSync(scriptJsPath, 'utf8');

// Extract translations from script.js
const match = scriptCode.match(/const translations = (\{[\s\S]*?\n\};)/);
if (!match) {
  console.error('Could not find translations in script.js');
  process.exit(1);
}

const cleanObj = match[1].replace(/;\s*$/, '');
const translations = eval('(' + cleanObj + ')');

const baseUrl = 'https://dalat-lashes-brows.vercel.app';

// Helper to replace text inside elements with data-i18n attribute
function replaceI18nContent(html, langData) {
  return html.replace(/(<([a-zA-Z0-9\-]+)[^>]*?data-i18n="([^"]+)"[^>]*?>)([\s\S]*?)(<\/\2>)/gi, (match, openTag, tagName, key, innerContent, closeTag) => {
    if (langData && langData[key] !== undefined) {
      return `${openTag}${langData[key]}${closeTag}`;
    }
    return match;
  });
}

function generateDalatPage(lang, locale) {
  let html = dalatBaseHtml;

  // 1. Update <html lang="...">
  html = html.replace(/<html lang="[^"]*"/i, `<html lang="${lang}"`);

  // 2. Update meta tags
  if (translations[lang]) {
    const t = translations[lang];
    if (t.metaTitle) html = html.replace(/<title id="meta-title">[\s\S]*?<\/title>/i, `<title id="meta-title">${t.metaTitle}</title>`);
    if (t.metaDesc) html = html.replace(/<meta id="meta-desc" name="description" content="[^"]*"/i, `<meta id="meta-desc" name="description" content="${t.metaDesc}"`);
    if (t.metaKeywords) html = html.replace(/<meta id="meta-keywords" name="keywords" content="[^"]*"/i, `<meta id="meta-keywords" name="keywords" content="${t.metaKeywords}"`);
    if (t.ogTitle) html = html.replace(/<meta id="og-title" property="og:title" content="[^"]*"/i, `<meta id="og-title" property="og:title" content="${t.ogTitle}"`);
    if (t.ogDesc) html = html.replace(/<meta id="og-desc" property="og:description" content="[^"]*"/i, `<meta id="og-desc" property="og:description" content="${t.ogDesc}"`);
  }

  // 3. Update OG URL & Locale
  html = html.replace(/<meta property="og:locale" content="[^"]*"/i, `<meta property="og:locale" content="${locale}"`);
  html = html.replace(/<meta property="og:url" content="[^"]*"/i, `<meta property="og:url" content="${baseUrl}/${lang}/"`);

  // 4. Update Schema.org URL
  html = html.replace(/"url":\s*"https:\/\/dalat-lashes-brows\.vercel\.app\/?"/g, `"url": "${baseUrl}/${lang}/"`);

  // 5. Update canonical link
  html = html.replace(/<link rel="canonical" href="[^"]*"/i, `<link rel="canonical" href="${baseUrl}/${lang}/"`);

  // 6. Adjust relative asset paths for 1 level deeper (/ru/ or /vi/)
  html = html.replace(/href="style\.css"/g, 'href="../style.css"');
  html = html.replace(/src="script\.js"/g, 'src="../script.js"');
  html = html.replace(/src="hero_master\.jpg"/g, 'src="../hero_master.jpg"');
  html = html.replace(/src="photos\//g, 'src="../photos/');
  html = html.replace(/href="favicon/g, 'href="../favicon');
  html = html.replace(/href="apple-touch-icon/g, 'href="../apple-touch-icon');

  // 7. Pre-render translated text
  if (translations[lang]) {
    html = replaceI18nContent(html, translations[lang]);
  }

  // 8. Update language switcher (desktop)
  html = html.replace(
    /(<div [^>]*?id="lang-switcher"[^>]*?>)([\s\S]*?)(<\/div>)/i,
    (match, open, inner, close) => {
      let updated = inner.replace(/active-lang/g, '').replace(/text-pink-800 hover:text-pink-950/g, '');
      updated = updated.replace(/(class="lang-btn[^"]*)(")/gi, (m, c1, c2) => `${c1.trim()} text-pink-800 hover:text-pink-950${c2}`);
      const targetRegex = new RegExp(`(<button[^>]*?data-lang="${lang}"[^>]*?class="[^"]*)(")`, 'i');
      updated = updated.replace(targetRegex, (m, c1, c2) => {
        let clean = c1.replace('text-pink-800 hover:text-pink-950', '').trim();
        return `${clean} active-lang${c2}`;
      });
      return `${open}${updated}${close}`;
    }
  );

  // 9. Update language switcher (mobile)
  html = html.replace(
    /(<div class="flex items-center bg-pink-100\/90 p-0\.5 rounded-full[^>]*?>)([\s\S]*?)(<\/div>)/i,
    (match, open, inner, close) => {
      let updated = inner.replace(/active-lang/g, '').replace(/text-pink-900/g, '');
      updated = updated.replace(/(class="lang-btn[^"]*)(")/gi, (m, c1, c2) => `${c1.trim()} text-pink-900${c2}`);
      const targetRegex = new RegExp(`(<button[^>]*?data-lang="${lang}"[^>]*?class="[^"]*)(")`, 'i');
      updated = updated.replace(targetRegex, (m, c1, c2) => {
        let clean = c1.replace('text-pink-900', '').trim();
        return `${clean} active-lang${c2}`;
      });
      return `${open}${updated}${close}`;
    }
  );

  return html;
}

function generateSaigonPage(lang, locale) {
  let html = saigonBaseHtml;

  // 1. Update <html lang="...">
  html = html.replace(/<html lang="[^"]*"/i, `<html lang="${lang}"`);

  // 2. Update meta tags for Saigon
  if (translations[lang]) {
    const t = translations[lang];
    if (t.saigonMetaTitle) html = html.replace(/<title id="meta-title">[\s\S]*?<\/title>/i, `<title id="meta-title">${t.saigonMetaTitle}</title>`);
    if (t.saigonMetaDesc) html = html.replace(/<meta id="meta-desc" name="description" content="[^"]*"/i, `<meta id="meta-desc" name="description" content="${t.saigonMetaDesc}"`);
    if (t.saigonMetaKeywords) html = html.replace(/<meta id="meta-keywords" name="keywords" content="[^"]*"/i, `<meta id="meta-keywords" name="keywords" content="${t.saigonMetaKeywords}"`);
    if (t.saigonOgTitle) html = html.replace(/<meta id="og-title" property="og:title" content="[^"]*"/i, `<meta id="og-title" property="og:title" content="${t.saigonOgTitle}"`);
    if (t.saigonOgDesc) html = html.replace(/<meta id="og-desc" property="og:description" content="[^"]*"/i, `<meta id="og-desc" property="og:description" content="${t.saigonOgDesc}"`);
  }

  // 3. Update OG URL & Locale
  html = html.replace(/<meta property="og:locale" content="[^"]*"/i, `<meta property="og:locale" content="${locale}"`);
  html = html.replace(/<meta property="og:url" content="[^"]*"/i, `<meta property="og:url" content="${baseUrl}/saigon/${lang}/"`);

  // 4. Update Schema.org URL
  html = html.replace(/"url":\s*"https:\/\/dalat-lashes-brows\.vercel\.app\/saigon\/?"/g, `"url": "${baseUrl}/saigon/${lang}/"`);

  // 5. Update canonical link
  html = html.replace(/<link rel="canonical" href="[^"]*"/i, `<link rel="canonical" href="${baseUrl}/saigon/${lang}/"`);

  // 6. Adjust relative asset paths for 2 levels deeper (/saigon/ru/ or /saigon/vi/)
  html = html.replace(/href="\.\.\/style\.css"/g, 'href="../../style.css"');
  html = html.replace(/src="\.\.\/script\.js"/g, 'src="../../script.js"');
  html = html.replace(/src="\.\.\/hero_master\.jpg"/g, 'src="../../hero_master.jpg"');
  html = html.replace(/src="\.\.\/photos\//g, 'src="../../photos/');
  html = html.replace(/href="\.\.\/favicon/g, 'href="../../favicon');
  html = html.replace(/href="\.\.\/apple-touch-icon/g, 'href="../../apple-touch-icon');

  // 7. Pre-render translated text
  if (translations[lang]) {
    html = replaceI18nContent(html, translations[lang]);
  }

  // 8. Update language switcher (desktop)
  html = html.replace(
    /(<div [^>]*?id="lang-switcher"[^>]*?>)([\s\S]*?)(<\/div>)/i,
    (match, open, inner, close) => {
      let updated = inner.replace(/active-lang/g, '').replace(/text-pink-800 hover:text-pink-950/g, '');
      updated = updated.replace(/(class="lang-btn[^"]*)(")/gi, (m, c1, c2) => `${c1.trim()} text-pink-800 hover:text-pink-950${c2}`);
      const targetRegex = new RegExp(`(<button[^>]*?data-lang="${lang}"[^>]*?class="[^"]*)(")`, 'i');
      updated = updated.replace(targetRegex, (m, c1, c2) => {
        let clean = c1.replace('text-pink-800 hover:text-pink-950', '').trim();
        return `${clean} active-lang${c2}`;
      });
      return `${open}${updated}${close}`;
    }
  );

  // 9. Update language switcher (mobile)
  html = html.replace(
    /(<div class="flex items-center bg-pink-100\/90 p-0\.5 rounded-full[^>]*?>)([\s\S]*?)(<\/div>)/i,
    (match, open, inner, close) => {
      let updated = inner.replace(/active-lang/g, '').replace(/text-pink-900/g, '');
      updated = updated.replace(/(class="lang-btn[^"]*)(")/gi, (m, c1, c2) => `${c1.trim()} text-pink-900${c2}`);
      const targetRegex = new RegExp(`(<button[^>]*?data-lang="${lang}"[^>]*?class="[^"]*)(")`, 'i');
      updated = updated.replace(targetRegex, (m, c1, c2) => {
        let clean = c1.replace('text-pink-900', '').trim();
        return `${clean} active-lang${c2}`;
      });
      return `${open}${updated}${close}`;
    }
  );

  return html;
}

// A. Generate Da Lat multilingual pages
const ruDir = path.join(rootDir, 'ru');
if (!fs.existsSync(ruDir)) fs.mkdirSync(ruDir, { recursive: true });
const dalatRuHtml = generateDalatPage('ru', 'ru_RU');
fs.writeFileSync(path.join(ruDir, 'index.html'), dalatRuHtml, 'utf8');
console.log('Successfully generated ru/index.html (Da Lat)');

const viDir = path.join(rootDir, 'vi');
if (!fs.existsSync(viDir)) fs.mkdirSync(viDir, { recursive: true });
const dalatViHtml = generateDalatPage('vi', 'vi_VN');
fs.writeFileSync(path.join(viDir, 'index.html'), dalatViHtml, 'utf8');
console.log('Successfully generated vi/index.html (Da Lat)');

// B. Generate Saigon multilingual pages
const saigonRuDir = path.join(rootDir, 'saigon', 'ru');
if (!fs.existsSync(saigonRuDir)) fs.mkdirSync(saigonRuDir, { recursive: true });
const saigonRuHtml = generateSaigonPage('ru', 'ru_RU');
fs.writeFileSync(path.join(saigonRuDir, 'index.html'), saigonRuHtml, 'utf8');
console.log('Successfully generated saigon/ru/index.html (Saigon)');

const saigonViDir = path.join(rootDir, 'saigon', 'vi');
if (!fs.existsSync(saigonViDir)) fs.mkdirSync(saigonViDir, { recursive: true });
const saigonViHtml = generateSaigonPage('vi', 'vi_VN');
fs.writeFileSync(path.join(saigonViDir, 'index.html'), saigonViHtml, 'utf8');
console.log('Successfully generated saigon/vi/index.html (Saigon)');

// C. Update robots.txt
const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
`;
fs.writeFileSync(path.join(rootDir, 'robots.txt'), robotsTxt, 'utf8');
console.log('Updated robots.txt');

// D. Update sitemap.xml with both Da Lat and Saigon pages
const today = new Date().toISOString().split('T')[0];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Da Lat Studio -->
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

  <!-- Ho Chi Minh City (Saigon - Thảo Điền) Studio -->
  <url>
    <loc>${baseUrl}/saigon/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/saigon/"/>
    <xhtml:link rel="alternate" hreflang="ru" href="${baseUrl}/saigon/ru/"/>
    <xhtml:link rel="alternate" hreflang="vi" href="${baseUrl}/saigon/vi/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/saigon/"/>
  </url>
  <url>
    <loc>${baseUrl}/saigon/ru/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/saigon/"/>
    <xhtml:link rel="alternate" hreflang="ru" href="${baseUrl}/saigon/ru/"/>
    <xhtml:link rel="alternate" hreflang="vi" href="${baseUrl}/saigon/vi/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/saigon/"/>
  </url>
  <url>
    <loc>${baseUrl}/saigon/vi/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/saigon/"/>
    <xhtml:link rel="alternate" hreflang="ru" href="${baseUrl}/saigon/ru/"/>
    <xhtml:link rel="alternate" hreflang="vi" href="${baseUrl}/saigon/vi/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/saigon/"/>
  </url>
</urlset>
`;
fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemapXml, 'utf8');
console.log('Updated sitemap.xml with Da Lat and Saigon landing pages');
console.log('Multi-city build completed successfully!');
