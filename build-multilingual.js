const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const indexHtmlPath = path.join(rootDir, 'index.html');
const scriptJsPath = path.join(rootDir, 'script.js');

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');
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

function generateLanguagePage(lang, locale) {
  let html = baseHtml;

  // 1. Update <html lang="...">
  html = html.replace(/<html lang="[^"]*"/i, `<html lang="${lang}"`);

  // 2. Update meta tags
  if (translations[lang]) {
    const t = translations[lang];
    if (t.metaTitle) {
      html = html.replace(/<title id="meta-title">[\s\S]*?<\/title>/i, `<title id="meta-title">${t.metaTitle}</title>`);
    }
    if (t.metaDesc) {
      html = html.replace(/<meta id="meta-desc" name="description" content="[^"]*"/i, `<meta id="meta-desc" name="description" content="${t.metaDesc}"`);
    }
    if (t.metaKeywords) {
      html = html.replace(/<meta id="meta-keywords" name="keywords" content="[^"]*"/i, `<meta id="meta-keywords" name="keywords" content="${t.metaKeywords}"`);
    }
    if (t.ogTitle) {
      html = html.replace(/<meta id="og-title" property="og:title" content="[^"]*"/i, `<meta id="og-title" property="og:title" content="${t.ogTitle}"`);
    }
    if (t.ogDesc) {
      html = html.replace(/<meta id="og-desc" property="og:description" content="[^"]*"/i, `<meta id="og-desc" property="og:description" content="${t.ogDesc}"`);
    }
  }

  // 3. Update OG URL & Locale
  html = html.replace(/<meta property="og:locale" content="[^"]*"/i, `<meta property="og:locale" content="${locale}"`);
  html = html.replace(/<meta property="og:url" content="[^"]*"/i, `<meta property="og:url" content="${baseUrl}/${lang}/"`);

  // 4. Update Schema.org URL
  html = html.replace(/"url":\s*"https:\/\/dalat-lashes-brows\.vercel\.app\/?"/g, `"url": "${baseUrl}/${lang}/"`);

  // 5. Update canonical link (only canonical changes to /lang/, hreflangs stay consistent across all pages)
  html = html.replace(/<link rel="canonical" href="[^"]*"/i, `<link rel="canonical" href="${baseUrl}/${lang}/"`);

  // 6. Adjust relative asset paths for 1 level deeper subdirectory (/ru/ or /vi/)
  html = html.replace(/href="style\.css"/g, 'href="../style.css"');
  html = html.replace(/src="script\.js"/g, 'src="../script.js"');
  html = html.replace(/src="hero_master\.jpg"/g, 'src="../hero_master.jpg"');
  html = html.replace(/src="photos\//g, 'src="../photos/');
  html = html.replace(/href="favicon/g, 'href="../favicon');
  html = html.replace(/href="apple-touch-icon/g, 'href="../apple-touch-icon');

  // 7. Pre-render translated text content in HTML
  if (translations[lang]) {
    html = replaceI18nContent(html, translations[lang]);
  }

  // 8. Update active state on language switcher buttons (desktop)
  html = html.replace(
    /(<div [^>]*?id="lang-switcher"[^>]*?>)([\s\S]*?)(<\/div>)/i,
    (match, open, inner, close) => {
      let updated = inner;
      updated = updated.replace(/active-lang/g, '');
      updated = updated.replace(/text-pink-800 hover:text-pink-950/g, '');
      updated = updated.replace(/(class="lang-btn[^"]*)(")/gi, (m, c1, c2) => {
        return `${c1.trim()} text-pink-800 hover:text-pink-950${c2}`;
      });
      const targetRegex = new RegExp(`(<button[^>]*?data-lang="${lang}"[^>]*?class="[^"]*)(")`, 'i');
      updated = updated.replace(targetRegex, (m, c1, c2) => {
        let clean = c1.replace('text-pink-800 hover:text-pink-950', '').trim();
        return `${clean} active-lang${c2}`;
      });
      return `${open}${updated}${close}`;
    }
  );

  // 9. Update active state on language switcher buttons (mobile)
  html = html.replace(
    /(<div class="flex items-center bg-pink-100\/90 p-0\.5 rounded-full[^>]*?>)([\s\S]*?)(<\/div>)/i,
    (match, open, inner, close) => {
      let updated = inner;
      updated = updated.replace(/active-lang/g, '');
      updated = updated.replace(/text-pink-900/g, '');
      updated = updated.replace(/(class="lang-btn[^"]*)(")/gi, (m, c1, c2) => {
        return `${c1.trim()} text-pink-900${c2}`;
      });
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

// 1. Generate ru/index.html
const ruDir = path.join(rootDir, 'ru');
if (!fs.existsSync(ruDir)) fs.mkdirSync(ruDir, { recursive: true });
const ruHtml = generateLanguagePage('ru', 'ru_RU');
fs.writeFileSync(path.join(ruDir, 'index.html'), ruHtml, 'utf8');
console.log('Successfully generated ru/index.html');

// 2. Generate vi/index.html
const viDir = path.join(rootDir, 'vi');
if (!fs.existsSync(viDir)) fs.mkdirSync(viDir, { recursive: true });
const viHtml = generateLanguagePage('vi', 'vi_VN');
fs.writeFileSync(path.join(viDir, 'index.html'), viHtml, 'utf8');
console.log('Successfully generated vi/index.html');

// 3. Update robots.txt
const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
`;
fs.writeFileSync(path.join(rootDir, 'robots.txt'), robotsTxt, 'utf8');
console.log('Updated robots.txt');

// 4. Update sitemap.xml
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
console.log('Updated sitemap.xml');
console.log('Build completed successfully!');
