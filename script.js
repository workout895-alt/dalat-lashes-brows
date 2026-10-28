/**
 * Multilingual Engine & Interactive Logic
 * Brow & Lash Studio Da Lat (@browsaigon)
 * Master: Yuliya (@Yuliya_zateyka)
 * Location: 73 Đông Tĩnh, Lâm Viên - Đà Lạt, Lâm Đồng, Vietnam
 * Languages: English (EN), Russian (RU), Vietnamese (VI)
 */

const translations = {
  en: {
    // Meta & Head
    metaTitle: "Brow & Lash Studio Da Lat | @browsaigon - 73 Đông Tĩnh",
    metaDesc: "Professional lash extensions, lash lamination & brow styling in Da Lat at 73 Đông Tĩnh. English & Russian speaking master Yuliya. Book via Telegram or Instagram!",
    metaKeywords: "eyelash extensions Da Lat, lash lift Dalat, brow lamination Da Lat, brow shaping Da Lat, 73 Dong Tinh Dalat, beauty salon Da Lat",
    ogTitle: "Brow & Lash Studio Da Lat | @browsaigon",
    ogDesc: "Professional Lash & Brow Master Yuliya in Da Lat (73 Đông Tĩnh). English & Russian speaking master. Natural look & premium quality.",

    // Top Bar & Navigation
    topBarText: "🌸 Da Lat Studio (73 Đông Tĩnh) • Also taking appointments in Saigon (Thảo Điền) on visiting dates!",
    topBarSaigonLink: "View Saigon Studio →",
    topBarDaLatLink: "View Da Lat Studio →",
    citySelectDaLat: "📍 Da Lat (73 Đông Tĩnh)",
    citySelectSaigon: "📍 Saigon (Thảo Điền)",
    navServices: "Services & Price List",
    navPortfolio: "Real Results",
    navWhyUs: "Why Us",
    navLocation: "Location & Map",
    navContacts: "Contacts",
    ctaBookNow: "Book Now",

    // Saigon Specific Translations
    saigonMetaTitle: "Lash & Brow Studio Ho Chi Minh City (Saigon) | @browsaigon - Thảo Điền",
    saigonMetaDesc: "Professional lash extensions, lash lift & brow styling in Ho Chi Minh City (near Thảo Điền, District 2). Visiting artist Yuliya. English & Russian speaking master. Book your slot!",
    saigonMetaKeywords: "lash extensions saigon, eyelash extensions ho chi minh city, lash lift thao dien, brow lamination district 2 hcmc, nối mi thảo điền, @browsaigon",
    saigonOgTitle: "Brow & Lash Studio Ho Chi Minh City (Thảo Điền) | @browsaigon",
    saigonOgDesc: "Professional Lash & Brow Master Yuliya in Saigon (near Thảo Điền, D2). English & Russian speaking master. Natural elegance & premium quality.",
    saigonTopBarText: "✨ Ho Chi Minh City Studio • Near Thảo Điền (District 2) • Visiting Artist Sessions",
    saigonHeroBadge: "Ho Chi Minh City • Near Thảo Điền (District 2) • Visiting Artist",
    saigonHeroTitle: "Professional Lash & Brow Artist in Saigon (Thảo Điền)",
    saigonHeroSubtitle: "Natural elegance tailored to your unique beauty. Studio near Thảo Điền (District 2). Visiting master from Da Lat with scheduled sessions each month. Zero language barrier (English & Russian).",
    saigonVisitingNoticeTitle: "Visiting Sessions in Ho Chi Minh City:",
    saigonVisitingNoticeDesc: "Master Yuliya conducts exclusive visiting beauty sessions in Ho Chi Minh City on selected dates each month at a cozy studio near Thảo Điền (District 2). Slots are limited per trip — please message in Telegram or Instagram to check current dates and reserve your appointment!",
    saigonBadgeFeature1: "English & Russian",
    saigonBadgeFeature2: "100% Sterile Tools",
    saigonBadgeFeature3: "Near Thảo Điền, D2",
    saigonHeroSubText: "Near Thảo Điền, District 2 (Thủ Đức City), HCMC",
    saigonLocTitle: "Studio Location in Ho Chi Minh City",
    saigonLocSubtitle: "Near Thảo Điền, District 2 (Thủ Đức City)",
    saigonLocDesc: "Comfortable private studio space located near Thảo Điền (District 2). Convenient access, parking, and tranquil atmosphere. Exact address and location pin are sent upon booking confirmation.",
    saigonLocAddressLabel: "Area:",
    saigonLocAddressValue: "Near Thảo Điền, District 2 (Thủ Đức City), Ho Chi Minh City",
    saigonSwitchToDalat: "Looking for our permanent studio in Da Lat? Visit 73 Đông Tĩnh, Da Lat →",
    saigonFooterSeoTitle: "Local SEO & Popular Searches in Ho Chi Minh City (Saigon):",

    // Hero Section
    heroBadge: "Da Lat • 73 Đông Tĩnh • English & Russian Speaking",
    heroTitle: "Professional Lash & Brow Artist in Da Lat",
    heroSubtitle: "Natural elegance tailored to your unique beauty. Premium hypoallergenic materials, 100% sterile tools, and comfortable service with zero language barrier.",
    heroBookBtn: "Book Appointment",
    heroServicesBtn: "View Price List",
    heroDirectChat: "Direct chat in:",
    badgeFeature1: "English & Russian",
    badgeFeature2: "100% Sterile Tools",
    badgeFeature3: "73 Đông Tĩnh, Da Lat",
    heroSubText: "73 Đông Tĩnh, Lâm Viên - Đà Lạt",
    heroExpText: "Certified Artist",
    heroExpSub: "Premium Care",

    // Services Section
    servicesSubtitle: "Official Price List",
    servicesTitle: "Services & Pricing",
    servicesDesc: "All treatments are tailored to your facial geometry and performed strictly with premium hypoallergenic materials.",
    priceListBadge: "Official Salon Menu",
    eyebrowsCategory: "Eyebrows & Shaping",
    eyelashesCategory: "Eyelashes & Lamination",
    additionalCategory: "Additional Care",
    srvBookBtn: "Book",
    calcBadge: "Online Booking & Summary",
    selectedCountLabel: "Selected services:",
    totalCostLabel: "Estimated Total:",
    noneSelectedText: "Tick one or multiple services above to calculate total and book directly with Master Yuliya.",
    clearSelectionBtn: "Clear",
    bookSelectedBtn: "Book Selected Services",
    bookAnyBtn: "Book an Appointment",

    // Price list items (Strict from photo)
    price_eb_shaping_title: "Eyebrow shaping",
    price_eb_shaping_sub: "Wax / Tweezers precision sculpting",
    price_eb_men_title: "Men's eyebrow shaping",
    price_eb_men_sub: "Natural grooming for masculine brows",
    price_eb_tint_title: "Eyebrow tinting",
    price_eb_tint_sub: "Custom mixed dye or hybrid tone",
    price_eb_lam_title: "Eyebrow lamination",
    price_eb_lam_sub: "Feathery lifted look & hair realignment",
    price_deep_care_title: "Deep care for brows/lashes",
    price_deep_care_sub: "Intensive keratin & vitamin therapy",
    price_brow_pack_title: "Brow package (All-in-one)",
    price_brow_pack_sub: "Lamination + Tinting + Shaping complete set",

    price_lash_tint_title: "Eyelash tinting",
    price_lash_tint_sub: "Deep glossy black pigment enhancement",
    price_lash_lam_title: "Lash lamination (Lash lift)",
    price_lash_lam_sub: "Natural root lift, botox infusion & curl",
    price_lash_light_title: "Eyelash extensions LIGHT",
    price_lash_light_sub: "1 - 1.5D delicate natural definition",
    price_lash_med_title: "Eyelash extensions MEDIUM",
    price_lash_med_sub: "2 - 3D soft fluffy volume effect",
    price_lash_mega_title: "Eyelash extensions MEGA",
    price_lash_mega_sub: "4 - 5D glamorous & dramatic volume",
    price_lash_rem_title: "Lash removal",
    price_lash_rem_sub: "Safe gentle removal without new set",

    price_wax_title: "Facial waxing (1 area)",
    price_wax_sub: "Delicate hair removal for lip, chin or sides",

    pricingDisclaimer: "Exact price is confirmed before the procedure. All lash sets include custom curl and thickness mapping to protect natural eyelashes.",

    // Portfolio Section
    portfolioSubtitle: "Real Work Portfolio",
    portfolioTitle: "Genuine Work by Master Yuliya",
    portfolioDesc: "Actual close-up photographs of lash extensions, lash lamination, and brow architecture completed for our clients in Da Lat.",
    filterAll: "All Works",
    filterLashes: "Eyelash Extensions",
    filterLashLam: "Lash Lift & Tint",
    filterBrows: "Brows & Lamination",
    portfolioInstagramBtn: "More on Instagram @browsaigon",

    // Why Choose Us
    whySubtitle: "Why Choose Our Studio",
    whyTitle: "Your Beauty & Comfort in Good Hands",
    whyDesc: "We provide an international level of comfort, precise artistry, and zero language barriers in beautiful Da Lat.",
    benefit1Title: "Fluent English & Russian",
    benefit1Desc: "No language barriers or misunderstandings. You can easily explain your exact wishes, preferred shape, length, and comfort needs.",
    benefit2Title: "Personalized Eye Mapping",
    benefit2Desc: "We don't do template work. We calculate your eye shape, eyebrow arch, and hair structure to highlight your unique features naturally.",
    benefit3Title: "100% Sterile & Hypoallergenic",
    benefit3Desc: "Medical sterilization protocols, disposable consumables, and premium certified glues that won't sting or damage sensitive eyes.",
    benefit4Title: "Cozy Central Da Lat Studio",
    benefit4Desc: "Located in calm, scenic Da Lat (73 Đông Tĩnh). Comfortable anatomical lounger, calming music, and relaxing atmosphere.",

    // Location & Map Section
    locSubtitle: "Easy to find in Da Lat",
    locTitle: "Studio Location & Google Maps",
    locDesc: "Visit us at our serene beauty space in Da Lat. Free bike parking, quiet pine air surroundings.",
    locAddressLabel: "Address:",
    locAddressValue: "73 Đông Tĩnh, Lâm Viên - Đà Lạt, Lâm Đồng, Vietnam",
    locHoursLabel: "Hours:",
    locHoursValue: "Monday – Sunday: 09:00 – 20:00 (By Appointment)",
    locOpenInGoogleMaps: "Open in Google Maps",
    locAskDirections: "Ask Route on Telegram",

    // Booking & Contacts
    bookingSubtitle: "Instant Appointment",
    bookingTitle: "Book Your Lash & Brow Transformation",
    bookingDesc: "Direct message master Yuliya in Telegram or Instagram Direct. We respond quickly with available time slots and studio directions.",
    msgFastest: "Fastest response",
    msgPortfolio: "DM & Portfolio",
    contactLocationText: "73 Đông Tĩnh, Lâm Viên - Đà Lạt, Lâm Đồng",
    contactHoursText: "09:00 – 20:00 (By Appointment)",

    // Modal
    modalTitle: "Select Booking Channel",
    modalDesc: "Pick your preferred channel to chat directly with master Yuliya (Da Lat & Saigon):",
    modalNote: "Free consultation & style advice. Please specify whether you are booking for Da Lat (73 Đông Tĩnh) or Saigon (Thảo Điền)!",
    mobileFloatingBtn: "Book Lash / Brow",
    mobileFloatingSub: "Telegram / Instagram",
    footerSeoTitle: "Local SEO & Popular Searches in Da Lat:"
  },

  ru: {
    // Meta & Head
    metaTitle: "Студия ресниц и бровей в Далате | @browsaigon - 73 Đông Tĩnh",
    metaDesc: "Профессиональное наращивание ресниц, ламинирование и коррекция бровей в Далате по адресу 73 Đông Tĩnh. Русско- и англоязычный мастер Юля. Запись через Telegram или Instagram!",
    metaKeywords: "наращивание ресниц Далат, ламинирование ресниц Далат, бровист Далат, коррекция бровей Далат, 73 Dong Tinh Dalat, салон красоты Далат, ресницы Далат",
    ogTitle: "Студия ресниц и бровей в Далате | @browsaigon",
    ogDesc: "Профессиональный мастер по ресницам и бровям Юля в Далате (73 Đông Tĩnh). Премиум-материалы, стерильность, индивидуальный подход.",

    // Top Bar & Navigation
    topBarText: "🌸 Студия в Далате (73 Đông Tĩnh) • Также приём в Сайгоне (Тао Диен) по датам!",
    topBarSaigonLink: "Студия в Сайгоне →",
    topBarDaLatLink: "Студия в Далате →",
    citySelectDaLat: "📍 Далат (73 Đông Tĩnh)",
    citySelectSaigon: "📍 Сайгон (Тао Диен)",
    navServices: "Услуги и прайс-лист",
    navPortfolio: "Примеры работ",
    navWhyUs: "Преимущества",
    navLocation: "Локация и карта",
    navContacts: "Контакты",
    ctaBookNow: "Записаться",

    // Saigon Specific Translations
    saigonMetaTitle: "Студия ресниц и бровей в Хошимине (Сайгон) | @browsaigon - Тао Диен",
    saigonMetaDesc: "Профессиональное наращивание ресниц, ламинирование и брови в Хошимине (район Тао Диен, Район 2). Мастер Юля. Запись на выездные сессии через Telegram или Instagram!",
    saigonMetaKeywords: "наращивание ресниц хошимин, ламинирование ресниц сайгон, брови тао диен, ресницы район 2 хошимин, мастер по ресницам сайгон, @browsaigon",
    saigonOgTitle: "Студия ресниц и бровей в Хошимине (Тао Диен) | @browsaigon",
    saigonOgDesc: "Профессиональный мастер по ресницам и бровям Юля в Хошимине (вблизи Тао Диен, Район 2). Премиум-материалы, стерильность, сервис на русском и английском.",
    saigonTopBarText: "✨ Студия в Хошимине • Вблизи Тао Диен (Район 2) • Выездные даты мастера",
    saigonHeroBadge: "Хошимин • Вблизи Тао Диен (Район 2) • Выездные сессии",
    saigonHeroTitle: "Профессиональный мастер по ресницам и бровям в Хошимине",
    saigonHeroSubtitle: "Естественная эстетика под ваши черты лица. Студия вблизи Тао Диен (Район 2). Выездные даты мастера из Далата каждый месяц. Премиум-материалы и сервис без языкового барьера.",
    saigonVisitingNoticeTitle: "Формат работы и выездные даты в Сайгоне:",
    saigonVisitingNoticeDesc: "Мастер Юля регулярно приезжает в Хошимин на определённые даты и принимает в уютной студии в районе Тао Диен (District 2). Количество мест ограничено — напишите в Telegram или Instagram, чтобы узнать ближайшие даты визита и забронировать удобное время!",
    saigonBadgeFeature1: "Русский и английский",
    saigonBadgeFeature2: "100% стерильные приборы",
    saigonBadgeFeature3: "Вблизи Тао Диен, D2",
    saigonHeroSubText: "Вблизи Тао Диен, Район 2 (город Тхудык), Хошимин",
    saigonLocTitle: "Локация студии в Хошимине",
    saigonLocSubtitle: "Район Тао Диен, Район 2 (Thủ Đức City)",
    saigonLocDesc: "Уютная студия с анатомической кушеткой рядом с Тао Диен (District 2). Удобный подъезд и комфортная атмосфера. Точный адрес и геолокация отправляются при подтверждении записи.",
    saigonLocAddressLabel: "Локация:",
    saigonLocAddressValue: "Вблизи Тао Диен, Район 2 (город Тхудык), Хошимин",
    saigonSwitchToDalat: "Ищете постоянную студию в Далате? Перейти к адресу 73 Đông Tĩnh, Далат →",
    saigonFooterSeoTitle: "Local SEO и популярные запросы в Хошимине (Сайгон):",

    // Hero Section
    heroBadge: "Далат • 73 Đông Tĩnh • Русско- и англоязычный мастер",
    heroTitle: "Профессиональный мастер по ресницам и бровям в Далате",
    heroSubtitle: "Естественная эстетика под ваши черты лица. Премиум-материалы, 100% стерильность, мягкая анатомическая кушетка и сервис без языкового барьера.",
    heroBookBtn: "Записаться на процедуру",
    heroServicesBtn: "Смотреть прайс-лист",
    heroDirectChat: "Быстрая связь в мессенджерах:",
    badgeFeature1: "Русский и английский",
    badgeFeature2: "100% стерильные приборы",
    badgeFeature3: "73 Đông Tĩnh, Далат",
    heroSubText: "73 Đông Tĩnh, Lâm Viên - Đà Lạt",
    heroExpText: "Сертифицированный мастер",
    heroExpSub: "Премиум уход",

    // Services Section
    servicesSubtitle: "Официальный прайс-лист",
    servicesTitle: "Услуги и стоимость процедур",
    servicesDesc: "Индивидуальный подбор формы и изгиба под анатомию вашего лица. Работаем исключительно на сертифицированных гипоаллергенных материалах.",
    priceListBadge: "Прайс студии",
    eyebrowsCategory: "Брови и оформление",
    eyelashesCategory: "Ресницы и ламинирование",
    additionalCategory: "Дополнительные услуги",
    srvBookBtn: "Запись",
    calcBadge: "Выбор услуг и онлайн расчет",
    selectedCountLabel: "Выбрано услуг:",
    totalCostLabel: "Итоговая стоимость:",
    noneSelectedText: "Отметьте одну или несколько услуг галочкой выше для расчета и быстрой записи к мастеру Юле.",
    clearSelectionBtn: "Сбросить выбор",
    bookSelectedBtn: "Записаться на выбранные услуги",
    bookAnyBtn: "Записаться на консультацию / услугу",

    // Price list items (Strict from photo)
    price_eb_shaping_title: "Коррекция бровей (воск / пинцет)",
    price_eb_shaping_sub: "Eyebrow shaping (wax/tweezers) • Моделирование идеальной формы",
    price_eb_men_title: "Мужская коррекция бровей",
    price_eb_men_sub: "Men's eyebrow shaping • Аккуратная эстетичная форма без лишнего",
    price_eb_tint_title: "Окрашивание бровей",
    price_eb_tint_sub: "Eyebrow tinting • Индивидуальный стойкий оттенок под цвет волос",
    price_eb_lam_title: "Ламинирование бровей",
    price_eb_lam_sub: "Eyebrow lamination • Долговременная укладка, фиксация и послушность волосков",
    price_deep_care_title: "Глубокий уход для бровей / ресниц",
    price_deep_care_sub: "Deep care for brows/lashes • Интенсивное питание кератином и ботоксом",
    price_brow_pack_title: "Комплекс для бровей (Brow package)",
    price_brow_pack_sub: "Ламинирование + Окрашивание + Коррекция бровей «всё включено»",

    price_lash_tint_title: "Окрашивание ресниц",
    price_lash_tint_sub: "Eyelash tinting • Насыщенный глубокий черный глянец",
    price_lash_lam_title: "Ламинирование ресниц (Lash lift)",
    price_lash_lam_sub: "Лифтинг от корней, питание и стойкий красивый завиток",
    price_lash_light_title: "Наращивание ресниц LIGHT (1 - 1.5D)",
    price_lash_light_sub: "Невесомая нежная классика и легкое загущение",
    price_lash_med_title: "Наращивание ресниц MEDIUM (2 - 3D)",
    price_lash_med_sub: "Воздушный бархатный объем, подчеркивающий взгляд",
    price_lash_mega_title: "Наращивание ресниц MEGA (4 - 5D)",
    price_lash_mega_sub: "Роскошный выразительный объем и густота",
    price_lash_rem_title: "Снятие ресниц",
    price_lash_rem_sub: "Lash removal (без последующего наращивания)",

    price_wax_title: "Депиляция воском лица (1 зона)",
    price_wax_sub: "Facial waxing (1 area) • Верхняя губа, подбородок или зона у висков",

    pricingDisclaimer: "Итоговая стоимость фиксируется перед началом процедуры. Все наращивания выполняются с моделированием изгиба для полной безопасности своих ресниц.",

    // Portfolio Section
    portfolioSubtitle: "Реальные примеры мастера",
    portfolioTitle: "Примеры работ мастера Юли",
    portfolioDesc: "Фотографии реальных работ мастера: наращивание, ламинирование и оформление бровей для наших клиенток в Далате.",
    filterAll: "Все работы",
    filterLashes: "Наращивание ресниц",
    filterLashLam: "Ламинирование ресниц",
    filterBrows: "Брови и ламинирование",
    portfolioInstagramBtn: "Больше работ в Instagram @browsaigon",

    // Why Choose Us
    whySubtitle: "Почему выбирают нашу студию",
    whyTitle: "Ваша красота и комфорт — на первом месте",
    whyDesc: "Мы знаем, как важно найти проверенного и чуткого мастера в другой стране, где понимают вас с полуслова.",
    benefit1Title: "Русско- и англоязычный мастер",
    benefit1Desc: "Никаких языковых сложностей. Вы можете в деталях объяснить свои пожелания по форме, длине, цвету и плотности.",
    benefit2Title: "Индивидуальный подбор формы",
    benefit2Desc: "Мы не делаем по шаблону. Учитываем разрез глаз, посадку, рост натуральных ресниц и архитектонику лица.",
    benefit3Title: "100% стерильность и безопасность",
    benefit3Desc: "Строгая дезинфекция инструментов по медицинским стандартам, одноразовые расходники, сертифицированный гипоаллергенный клей.",
    benefit4Title: "Уютная студия в центре Далата",
    benefit4Desc: "Удобная локация по адресу 73 Đông Tĩnh. Мягкая кушетка, расслабляющая музыка, чашечка чая и горный воздух Далата.",

    // Location & Map Section
    locSubtitle: "Удобно найти в Далате",
    locTitle: "Локация студии на Google Maps",
    locDesc: "Ждем вас в уютном пространстве в Далате. Удобный подъезд, бесплатная парковка для байков, тихий район.",
    locAddressLabel: "Адрес:",
    locAddressValue: "73 Đông Tĩnh, Lâm Viên - Đà Lạt, Lâm Đồng, Вьетнам",
    locHoursLabel: "Время работы:",
    locHoursValue: "Понедельник – Воскресенье: 09:00 – 20:00 (По записи)",
    locOpenInGoogleMaps: "Открыть в Google Карты",
    locAskDirections: "Спросить маршрут в Telegram",

    // Booking & Contacts
    bookingSubtitle: "Быстрая запись",
    bookingTitle: "Запишитесь на преображение бровей и ресниц",
    bookingDesc: "Напишите мастеру в удобный мессенджер. Быстро подберем подходящую дату, время и подскажем точный маршрут.",
    msgFastest: "Самый быстрый ответ",
    msgPortfolio: "Директ и портфолио",
    contactLocationText: "73 Đông Tĩnh, Lâm Viên - Đà Lạt, Lâm Đồng",
    contactHoursText: "09:00 – 20:00 (По предварительной записи)",

    // Modal
    modalTitle: "Выберите канал для связи",
    modalDesc: "Нажмите на удобный мессенджер для диалога с мастером Юлией (Далат и Сайгон):",
    modalNote: "Бесплатная консультация и подбор эффекта. Пожалуйста, укажите город (Далат или Сайгон) в сообщении!",
    mobileFloatingBtn: "Записаться на ресницы / брови",
    mobileFloatingSub: "Telegram / Instagram",
    footerSeoTitle: "Local SEO и популярные запросы в Далате:"
  },

  vi: {
    // Meta & Head
    metaTitle: "Nối Mi & Định Hình Chân Mày Tại Đà Lạt | @browsaigon - 73 Đông Tĩnh",
    metaDesc: "Tiệm nối mi đẹp, uốn mi phủ đen & làm chân mày uy tín tại Đà Lạt ở số 73 Đông Tĩnh. Master Yuliya giao tiếp tiếng Anh và tiếng Nga. Đặt lịch qua Telegram hoặc Instagram!",
    metaKeywords: "nối mi Đà Lạt, uốn mi Đà Lạt, làm chân mày Đà Lạt, 73 Dong Tinh Dalat, tiệm nối mi đẹp Đà Lạt",
    ogTitle: "Brow & Lash Studio Đà Lạt | @browsaigon",
    ogDesc: "Nối Mi & Làm Chân Mày Chuyên Nghiệp Tại Đà Lạt (73 Đông Tĩnh). Chất lượng chuẩn quốc tế, an toàn tuyệt đối.",

    // Top Bar & Navigation
    topBarText: "🌸 Studio tại Đà Lạt (73 Đông Tĩnh) • Có nhận lịch tại Sài Gòn (Thảo Điền) theo đợt!",
    topBarSaigonLink: "Xem Studio Sài Gòn →",
    topBarDaLatLink: "Xem Studio Đà Lạt →",
    citySelectDaLat: "📍 Đà Lạt (73 Đông Tĩnh)",
    citySelectSaigon: "📍 Sài Gòn (Thảo Điền)",
    navServices: "Dịch vụ & Bảng giá",
    navPortfolio: "Hình ảnh thực tế",
    navWhyUs: "Ưu điểm",
    navLocation: "Vị trí & Bản đồ",
    navContacts: "Liên hệ",
    ctaBookNow: "Đặt Lịch",

    // Saigon Specific Translations
    saigonMetaTitle: "Nối Mi & Làm Chân Mày Tại TP. Hồ Chí Minh (Sài Gòn) | @browsaigon - Thảo Điền",
    saigonMetaDesc: "Dịch vụ nối mi đẹp, uốn mi & làm chân mày uy tín tại TP. Hồ Chí Minh (gần Thảo Điền, Quận 2). Master Yuliya nhận lịch theo đợt. Đặt lịch qua Telegram hoặc Instagram!",
    saigonMetaKeywords: "nối mi sài gòn, uốn mi thảo điền, làm chân mày quận 2, nối mi hồ chí minh, tiệm nối mi thảo điền, @browsaigon",
    saigonOgTitle: "Brow & Lash Studio TP. Hồ Chí Minh (Thảo Điền) | @browsaigon",
    saigonOgDesc: "Nối Mi & Làm Chân Mày Chuyên Nghiệp Tại TP.HCM (gần Thảo Điền, Quận 2). Chuẩn quốc tế, an toàn tuyệt đối, giao tiếp tiếng Anh và tiếng Nga.",
    saigonTopBarText: "✨ Studio tại TP. Hồ Chí Minh • Gần Thảo Điền (Quận 2) • Lịch nhận theo đợt",
    saigonHeroBadge: "TP. Hồ Chí Minh • Gần Thảo Điền (Quận 2) • Lịch theo đợt",
    saigonHeroTitle: "Nối Mi & Định Hình Chân Mày Chuyên Nghiệp Tại Sài Gòn",
    saigonHeroSubtitle: "Vẻ đẹp tự nhiên tôn vinh đường nét khuôn mặt bạn. Studio gần Thảo Điền (Quận 2). Master Yuliya nhận lịch định kỳ hàng tháng từ Đà Lạt. Tiêu chuẩn quốc tế, không rào cản ngôn ngữ.",
    saigonVisitingNoticeTitle: "Lịch làm việc và đặt hẹn tại Sài Gòn:",
    saigonVisitingNoticeDesc: "Master Yuliya có lịch công tác định kỳ tại TP. Hồ Chí Minh theo các đợt trong tháng tại studio gần khu Thảo Điền (Quận 2). Số lượng chỗ có hạn — vui lòng nhắn tin qua Telegram hoặc Instagram để cập nhật ngày làm việc sắp tới và giữ lịch hẹn sớm nhất!",
    saigonBadgeFeature1: "Tiếng Anh & Tiếng Nga",
    saigonBadgeFeature2: "Khử trùng 100% chuẩn y tế",
    saigonBadgeFeature3: "Gần Thảo Điền, Quận 2",
    saigonHeroSubText: "Gần Thảo Điền, Quận 2 (TP. Thủ Đức), TP.HCM",
    saigonLocTitle: "Vị trí Studio tại TP. Hồ Chí Minh",
    saigonLocSubtitle: "Khu vực gần Thảo Điền, Quận 2 (TP. Thủ Đức)",
    saigonLocDesc: "Không gian studio yên tĩnh, hiện đại với giường đệm êm ái tại khu vực Thảo Điền (Quận 2). Địa chỉ chi tiết và định vị GPS sẽ được gửi khi xác nhận lịch hẹn.",
    saigonLocAddressLabel: "Khu vực:",
    saigonLocAddressValue: "Gần Thảo Điền, Quận 2 (TP. Thủ Đức), TP. Hồ Chí Minh",
    saigonSwitchToDalat: "Bạn muốn đặt lịch tại studio chính ở Đà Lạt? Xem địa chỉ 73 Đông Tĩnh, Đà Lạt →",
    saigonFooterSeoTitle: "Từ khóa Local SEO tại TP. Hồ Chí Minh (Sài Gòn):",

    // Hero Section
    heroBadge: "Đà Lạt • 73 Đông Tĩnh • Giao tiếp Tiếng Anh & Tiếng Nga",
    heroTitle: "Nối Mi & Làm Chân Mày Chuyên Nghiệp Tại Đà Lạt",
    heroSubtitle: "Tôn vinh nét đẹp tự nhiên của bạn. Sử dụng nguyên liệu cao cấp không gây kích ứng, dụng cụ khử trùng 100%, phong cách phục vụ chu đáo, tận tâm.",
    heroBookBtn: "Đặt Lịch Hẹn Ngay",
    heroServicesBtn: "Xem Bảng Giá Dịch Vụ",
    heroDirectChat: "Nhắn tin trực tiếp qua:",
    badgeFeature1: "Tiếng Anh & Tiếng Nga",
    badgeFeature2: "Khử trùng 100% chuẩn y tế",
    badgeFeature3: "73 Đông Tĩnh, Đà Lạt",
    heroSubText: "73 Đông Tĩnh, Lâm Viên - Đà Lạt",
    heroExpText: "Chuyên viên tay nghề cao",
    heroExpSub: "Chăm sóc cao cấp",

    // Services Section
    servicesSubtitle: "Bảng giá chính thức",
    servicesTitle: "Bảng Giá Dịch Vụ Mi & Chân Mày",
    servicesDesc: "Thiết kế riêng theo tỉ lệ khuôn mặt của bạn. Sản phẩm an toàn, không kích ứng mắt.",
    priceListBadge: "Bảng giá dịch vụ",
    eyebrowsCategory: "Chân mày & Tạo dáng",
    eyelashesCategory: "Lông mi & Uốn mi",
    additionalCategory: "Dịch vụ khác",
    srvBookBtn: "Đặt hẹn",
    calcBadge: "Chọn dịch vụ & Tính tổng",
    selectedCountLabel: "Dịch vụ đã chọn:",
    totalCostLabel: "Tổng cộng ước tính:",
    noneSelectedText: "Đánh dấu chọn một hoặc nhiều dịch vụ ở trên để tính tổng và đặt hẹn trực tiếp với Master Yuliya.",
    clearSelectionBtn: "Đặt lại",
    bookSelectedBtn: "Đặt lịch các dịch vụ đã chọn",
    bookAnyBtn: "Đặt lịch hẹn tư vấn / làm đẹp",

    // Price list items (Strict from photo)
    price_eb_shaping_title: "Tạo dáng lông mày (Wax / Nhíp)",
    price_eb_shaping_sub: "Eyebrow shaping (wax/tweezers) • Cân chỉnh tỉ lệ chuẩn",
    price_eb_men_title: "Tỉa dáng lông mày nam",
    price_eb_men_sub: "Men's eyebrow shaping • Tự nhiên, gọn gàng, nam tính",
    price_eb_tint_title: "Nhuộm màu chân mày",
    price_eb_tint_sub: "Eyebrow tinting • Nhuộm màu thảo mộc bền màu tự nhiên",
    price_eb_lam_title: "Định hình & Uốn lông mày",
    price_eb_lam_sub: "Eyebrow lamination • Vào nếp tơi xốp, bồng bềnh",
    price_deep_care_title: "Dưỡng chất chuyên sâu Mi / Mày",
    price_deep_care_sub: "Deep care for brows/lashes • Bổ sung Collagen & Vitamin",
    price_brow_pack_title: "Gói trọn gói chân mày (Brow package)",
    price_brow_pack_sub: "Uốn định hình + Nhuộm màu + Tỉa dáng hoàn chỉnh",

    price_lash_tint_title: "Nhuộm đen bóng mi",
    price_lash_tint_sub: "Eyelash tinting • Phủ màu đen bóng không cần mascara",
    price_lash_lam_title: "Uốn mi collagen phục hồi (Lash lift)",
    price_lash_lam_sub: "Nâng cong mi thật từ gốc, bền đẹp 6-8 tuần",
    price_lash_light_title: "Nối mi LIGHT (1 - 1.5D)",
    price_lash_light_sub: "Nối mi tự nhiên trong trẻo siêu nhẹ mắt",
    price_lash_med_title: "Nối mi MEDIUM (2 - 3D)",
    price_lash_med_sub: "Độ dày vừa vặn, mềm mại và cuốn hút",
    price_lash_mega_title: "Nối mi MEGA (4 - 5D)",
    price_lash_mega_sub: "Phong cách dày quyến rũ, sắc sảo nổi bật",
    price_lash_rem_title: "Tháo mi cũ",
    price_lash_rem_sub: "Lash removal (không kèm nối mới)",

    price_wax_title: "Wax lông mặt (1 vùng)",
    price_wax_sub: "Facial waxing (1 area) • Dịu nhẹ, không đau rát",

    pricingDisclaimer: "Mức giá rõ ràng, minh bạch trước khi thực hiện. Thiết kế độ cong an toàn cho mi thật.",

    // Portfolio Section
    portfolioSubtitle: "Tác phẩm thực tế",
    portfolioTitle: "Hình Ảnh Thực Tế Master Yuliya",
    portfolioDesc: "Hình ảnh cận cảnh các liệu trình nối mi, uốn mi collagen và làm chân mày thực hiện cho khách hàng tại Đà Lạt.",
    filterAll: "Tất cả",
    filterLashes: "Nối mi",
    filterLashLam: "Uốn mi",
    filterBrows: "Chân mày",
    portfolioInstagramBtn: "Xem thêm tại Instagram @browsaigon",

    // Why Choose Us
    whySubtitle: "Vì sao nên chọn chúng tôi",
    whyTitle: "Vẻ Đẹp Và Sự An Tâm Của Bạn Là Ưu Tiên",
    whyDesc: "Chúng tôi mang đến sự hài lòng về chất lượng, tay nghề chuẩn và không trở ngại ngôn ngữ.",
    benefit1Title: "Thành thạo Tiếng Anh & Tiếng Nga",
    benefit1Desc: "Dễ dàng trao đổi mọi mong muốn của bạn về dáng mắt, độ dài hay phong cách mà không gặp trở ngại ngôn ngữ.",
    benefit2Title: "Thiết kế riêng cho từng khuôn mặt",
    benefit2Desc: "Không làm theo rập khuôn. Master phân tích cấu trúc mắt và dáng mày để tôn vinh nét duyên dáng riêng của bạn.",
    benefit3Title: "Khử trùng 100% & An toàn cho mắt",
    benefit3Desc: "Dụng cụ tiệt trùng nghiêm ngặt, đồ dùng một lần vệ sinh, keo nối mi chuẩn quốc tế không cay hay kích ứng mắt.",
    benefit4Title: "Không gian ấm cúng tại Đà Lạt",
    benefit4Desc: "Địa chỉ 73 Đông Tĩnh. Giường nệm êm ái, âm nhạc thư giãn, không khí se lạnh dễ chịu của phố núi Đà Lạt.",

    // Location & Map Section
    locSubtitle: "Dễ dàng tìm thấy",
    locTitle: "Vị Trí Studio & Bản Đồ Google Maps",
    locDesc: "Không gian làm đẹp yên tĩnh tại Đà Lạt. Bãi đỗ xe máy miễn phí, không gian thoáng đãng.",
    locAddressLabel: "Địa chỉ:",
    locAddressValue: "73 Đông Tĩnh, Lâm Viên - Đà Lạt, Lâm Đồng, Việt Nam",
    locHoursLabel: "Thời gian mở cửa:",
    locHoursValue: "Thứ Hai – Chủ Nhật: 09:00 – 20:00 (Vui lòng đặt hẹn trước)",
    locOpenInGoogleMaps: "Mở trong Google Maps",
    locAskDirections: "Hỏi đường qua Telegram",

    // Booking & Contacts
    bookingSubtitle: "Đặt lịch nhanh chóng",
    bookingTitle: "Đặt Lịch Làm Mi & Chân Mày Ngay Hôm Nay",
    bookingDesc: "Nhắn tin trực tiếp cho Master Yuliya qua Telegram hoặc Instagram Direct. Chúng tôi phản hồi nhanh chóng.",
    msgFastest: "Phản hồi nhanh nhất",
    msgPortfolio: "Xem tin nhắn & Hình ảnh",
    contactLocationText: "73 Đông Tĩnh, Lâm Viên - Đà Lạt, Lâm Đồng",
    contactHoursText: "09:00 – 20:00 (Vui lòng đặt hẹn trước)",

    // Modal
    modalTitle: "Chọn kênh liên hệ",
    modalDesc: "Chọn Telegram hoặc Instagram Direct để trao đổi trực tiếp cùng Master Yuliya (Đà Lạt & Sài Gòn):",
    modalNote: "Tư vấn miễn phí. Vui lòng cho biết bạn muốn đặt lịch tại Đà Lạt (73 Đông Tĩnh) hay Sài Gòn (Thảo Điền) khi nhắn tin!",
    mobileFloatingBtn: "Đặt lịch làm Mi / Mày",
    mobileFloatingSub: "Telegram / Instagram",
    footerSeoTitle: "Từ khóa Local SEO tại Đà Lạt:"
  }
};

let currentLang = 'en';

/**
 * Format number as Vietnamese Dong (e.g. ₫ 250.000)
 */
function formatVND(amount) {
  return '₫ ' + (amount || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

/**
 * Get list of currently selected services
 */
function getSelectedServices() {
  const checkedBoxes = Array.from(document.querySelectorAll('.service-checkbox:checked'));
  return checkedBoxes.map((cb) => {
    const nameKey = cb.getAttribute('data-name-key');
    const price = parseInt(cb.getAttribute('data-price') || '0', 10);
    const localizedName = (translations[currentLang] && translations[currentLang][nameKey]) || nameKey;
    return {
      el: cb,
      nameKey,
      localizedName,
      price
    };
  });
}

/**
 * Update visual states and calculation summary of selected services
 */
function updateServiceSelection() {
  const selected = getSelectedServices();
  const count = selected.length;
  const total = selected.reduce((sum, item) => sum + item.price, 0);

  // Update visual card styles (highlight active selection)
  document.querySelectorAll('.service-checkbox').forEach((cb) => {
    const card = cb.closest('.service-checkbox-card');
    if (card) {
      if (cb.checked) {
        card.classList.add('is-checked');
      } else {
        card.classList.remove('is-checked');
      }
    }
  });

  // Update Count & Total elements
  const countEl = document.getElementById('selected-services-count');
  if (countEl) countEl.textContent = count;

  const totalEl = document.getElementById('selected-services-total');
  if (totalEl) totalEl.textContent = formatVND(total);

  // Update selected service names preview
  const namesEl = document.getElementById('selected-services-names');
  const clearBtn = document.getElementById('clear-selection-btn');
  const bookBtnText = document.getElementById('book-selected-text');

  if (count === 0) {
    if (namesEl && translations[currentLang]) {
      namesEl.textContent = translations[currentLang].noneSelectedText;
    }
    if (clearBtn) clearBtn.classList.add('hidden');
    if (bookBtnText && translations[currentLang]) {
      bookBtnText.textContent = translations[currentLang].bookAnyBtn;
    }
  } else {
    if (namesEl) {
      namesEl.textContent = selected.map((s) => `${s.localizedName} (${formatVND(s.price)})`).join(' • ');
    }
    if (clearBtn) clearBtn.classList.remove('hidden');
    if (bookBtnText && translations[currentLang]) {
      bookBtnText.textContent = `${translations[currentLang].bookSelectedBtn} (${count})`;
    }
  }
}

/**
 * Clear all selected services
 */
function clearAllSelectedServices() {
  document.querySelectorAll('.service-checkbox').forEach((cb) => {
    cb.checked = false;
  });
  updateServiceSelection();
}

/**
 * Switch page language dynamically
 */
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  const data = translations[lang];

  // Update elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (data[key]) {
      element.textContent = data[key];
    }
  });

  // Dynamic SEO Meta tags update (supports both Da Lat and Saigon landing pages)
  const isSaigon = typeof window !== 'undefined' && window.location.pathname.toLowerCase().includes('/saigon');
  const titleVal = (isSaigon && data.saigonMetaTitle) ? data.saigonMetaTitle : data.metaTitle;
  const descVal = (isSaigon && data.saigonMetaDesc) ? data.saigonMetaDesc : data.metaDesc;
  const kwVal = (isSaigon && data.saigonMetaKeywords) ? data.saigonMetaKeywords : data.metaKeywords;
  const ogTitleVal = (isSaigon && data.saigonOgTitle) ? data.saigonOgTitle : data.ogTitle;
  const ogDescVal = (isSaigon && data.saigonOgDesc) ? data.saigonOgDesc : data.ogDesc;

  if (titleVal) document.title = titleVal;
  const metaDesc = document.getElementById('meta-desc');
  if (metaDesc && descVal) metaDesc.setAttribute('content', descVal);

  const metaKeywords = document.getElementById('meta-keywords');
  if (metaKeywords && kwVal) metaKeywords.setAttribute('content', kwVal);

  const ogTitle = document.getElementById('og-title');
  if (ogTitle && ogTitleVal) ogTitle.setAttribute('content', ogTitleVal);

  const ogDesc = document.getElementById('og-desc');
  if (ogDesc && ogDescVal) ogDesc.setAttribute('content', ogDescVal);

  // Update Language switchers active styling
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active-lang');
      btn.classList.remove('text-stone-600', 'text-pink-800');
    } else {
      btn.classList.remove('active-lang');
      btn.classList.add('text-pink-800');
    }
  });

  // Re-render selection summary with translated names
  updateServiceSelection();

  try {
    localStorage.setItem('preferred_lang', lang);
  } catch (e) {
    // ignore local storage restrictions
  }
}

/**
 * Filter portfolio gallery items
 */
function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');
  const buttons = document.querySelectorAll('.gallery-filter-btn');

  buttons.forEach((btn) => {
    if (btn.getAttribute('data-filter') === category) {
      btn.className = 'gallery-filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-rose-500 text-white shadow-md transition-all';
    } else {
      btn.className = 'gallery-filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-white/80 text-pink-900 hover:bg-pink-100 border border-pink-200 transition-all';
    }
  });

  items.forEach((item) => {
    if (category === 'all' || item.getAttribute('data-category') === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

/**
 * Modal handlers with multi-service summary & prefilled message
 */
function openBookingModal(preselectedService = null, totalSumFormatted = null) {
  const modal = document.getElementById('booking-modal');
  const sub = document.getElementById('modal-service-subtitle');
  const tgLink = document.getElementById('modal-tg-link');
  
  let customTgMessage = '';

  if (preselectedService && sub) {
    const totalAddon = totalSumFormatted ? ` [${totalSumFormatted}]` : '';
    if (currentLang === 'ru') {
      sub.textContent = `Вы выбрали: ${preselectedService}${totalAddon}. Напишите мастеру Юлии в Telegram или Instagram для выбора даты и времени:`;
      customTgMessage = `Здравствуйте, Юля! Хочу записаться в студию (73 Đông Tĩnh, Далат) на процедуры: ${preselectedService}. Расчет: ${totalSumFormatted || ''}. Есть ли свободные окошки?`;
    } else if (currentLang === 'vi') {
      sub.textContent = `Dịch vụ đã chọn: ${preselectedService}${totalAddon}. Nhắn tin cho Master Yuliya qua Telegram hoặc Instagram:`;
      customTgMessage = `Xin chào Master Yuliya! Tôi muốn đặt lịch tại 73 Đông Tĩnh, Đà Lạt: ${preselectedService}. Tổng cộng: ${totalSumFormatted || ''}. Bạn có lịch trống không?`;
    } else {
      sub.textContent = `Selected services: ${preselectedService}${totalAddon}. Message master Yuliya via Telegram or Instagram:`;
      customTgMessage = `Hello Yuliya! I would like to book an appointment at 73 Dong Tinh, Da Lat for: ${preselectedService}. Total: ${totalSumFormatted || ''}. What slots are available?`;
    }
  } else {
    if (sub && translations[currentLang]) {
      sub.textContent = translations[currentLang].modalDesc;
    }
    if (currentLang === 'ru') {
      customTgMessage = `Здравствуйте, Юля! Хочу записаться на консультацию / процедуру по ресницам и бровям в Далате (73 Đông Tĩnh). Подскажите свободные даты?`;
    } else if (currentLang === 'vi') {
      customTgMessage = `Xin chào Master Yuliya! Tôi muốn đặt lịch làm mi / mày tại 73 Đông Tĩnh, Đà Lạt. Bạn có lịch trống tuần này không?`;
    } else {
      customTgMessage = `Hello Yuliya! I would like to book an appointment at 73 Dong Tinh, Da Lat. Are there open slots available?`;
    }
  }

  // Pre-fill message query parameters for Telegram
  if (tgLink) {
    tgLink.href = `https://t.me/Yuliya_zateyka?text=${encodeURIComponent(customTgMessage)}`;
  }

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

function bookSpecificService(serviceName) {
  openBookingModal(serviceName);
}

/**
 * Initialize DOM listeners
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Language buttons event delegation
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const selected = e.currentTarget.getAttribute('data-lang');
      setLanguage(selected);
      
      // Update URL path without full reload for nice SEO UX
      if (window.history && window.location.protocol !== 'file:') {
        let basePath = window.location.pathname.replace(/\/ru\/?$/, '').replace(/\/vi\/?$/, '').replace(/\/$/, '');
        const targetPath = selected === 'en' ? (basePath ? basePath + '/' : '/') : ((basePath ? basePath : '') + '/' + selected + '/');
        if (window.location.pathname !== targetPath) {
          window.history.pushState({ lang: selected }, '', targetPath);
        }
      }
    });
  });

  // Service Checkbox change events
  document.querySelectorAll('.service-checkbox').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      updateServiceSelection();
    });
  });

  // Clear selection button
  const clearBtn = document.getElementById('clear-selection-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      clearAllSelectedServices();
    });
  }

  // Bottom Booking button
  const bookSelectedBtn = document.getElementById('book-selected-btn');
  if (bookSelectedBtn) {
    bookSelectedBtn.addEventListener('click', () => {
      const selected = getSelectedServices();
      if (selected.length > 0) {
        const total = selected.reduce((sum, item) => sum + item.price, 0);
        const namesSummary = selected.map((s) => s.localizedName).join(', ');
        openBookingModal(namesSummary, formatVND(total));
      } else {
        openBookingModal();
      }
    });
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close on link click
    document.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Close modal when clicking outside of dialog
  const modal = document.getElementById('booking-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeBookingModal();
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBookingModal();
    }
  });

  // Check language: URL path -> document lang -> saved preference -> browser language
  let initialLang = document.documentElement.lang || 'en';
  const path = window.location.pathname.toLowerCase();
  
  if (path.includes('/ru')) {
    initialLang = 'ru';
  } else if (path.includes('/vi')) {
    initialLang = 'vi';
  } else {
    try {
      const saved = localStorage.getItem('preferred_lang');
      if (saved && ['en', 'ru', 'vi'].includes(saved)) {
        initialLang = saved;
      } else {
        const browserLang = navigator.language || navigator.userLanguage || '';
        if (browserLang.startsWith('ru')) initialLang = 'ru';
        else if (browserLang.startsWith('vi')) initialLang = 'vi';
      }
    } catch (e) {
      // fallback
    }
  }

  setLanguage(initialLang);
  updateServiceSelection();
});

