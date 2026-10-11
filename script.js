let currentVersion = 'desktop';
    let currentLang = 'ru';

    const translations = {
        ru: {
            flagSrc: 'icons/flags/ru.svg',
            languageLabel: 'Язык',
            support: '💖 Поддержать проект ParaElys',
            collaboration: '🤝 Сотрудничество',
            emailAction: 'Написать на Email',
            copyEmail: 'Скопировать Email',
            copied: 'Email скопирован',
            copyFailed: 'Не удалось скопировать — выделите адрес вручную',
            soon: 'Скоро',
            rights: 'Все права защищены',
            rulesMenu: 'Правила сообщества',
            mobileVersion: 'Мобильная версия',
            fullVersion: 'Полная версия',
            rulesTitle: 'Правила сообщества',
            homeLabel: 'На главную',
            rulesHtml: `<p class="rules-intro" id="rulesIntro">Добро пожаловать! В сообществе <strong>ParaElys</strong> важны уважение и <em>безопасность</em>.</p><ol class="rules-list"><li class="rules-item"><strong class="rules-item-title">Уважайте других</strong><p><strong>Оскорбления, травля и угрозы</strong> недопустимы.</p></li><li class="rules-item"><strong class="rules-item-title">Без спама и рекламы</strong><p><strong>Спам</strong> и реклама без разрешения запрещены.</p></li><li class="rules-item"><strong class="rules-item-title">Соблюдайте закон</strong><p>Не публикуйте незаконные материалы и вредоносные ссылки.</p></li><li class="rules-item"><strong class="rules-item-title">Официальная поддержка</strong><p>Донаты и обмены проводите через <u>официальные ссылки ParaElys</u>.</p></li><li class="rules-item"><strong class="rules-item-title">Соблюдайте порядок</strong><p>Администрация вправе <strong>удалять сообщения и ограничивать доступ</strong> за нарушения.</p></li><li class="rules-item"><strong class="rules-item-title">Берегите личные данные</strong><p><strong>Не передавайте</strong> пароли и коды подтверждения.</p></li></ol><aside class="rules-warning"><strong>Внимание</strong><p>Если кто-то от имени ParaElys просит перевести деньги в личных сообщениях, сообщить пароль или код подтверждения — <strong>не верьте такому сообщению</strong>. Не переводите деньги и не передавайте свои данные.</p></aside><section class="rules-disclaimer"><strong class="rules-disclaimer-title">Дисклеймер</strong><p>Мы не отвечаем за <em>действия пользователей</em> и за сторонний контент.</p></section>`
        },
        en: {
            flagSrc: 'icons/flags/gb.svg',
            languageLabel: 'Language',
            support: '💖 Support the ParaElys project',
            collaboration: '🤝 Partnerships',
            emailAction: 'Write via Email',
            copyEmail: 'Copy Email',
            copied: 'Email copied',
            copyFailed: 'Could not copy — select the address manually',
            soon: 'Soon',
            rights: 'All rights reserved',
            rulesMenu: 'Community Rules',
            mobileVersion: 'Mobile version',
            fullVersion: 'Full version',
            rulesTitle: 'Community Rules',
            homeLabel: 'Back to home',
            rulesHtml: `<p class="rules-intro" id="rulesIntro">Welcome! <strong>ParaElys</strong> values respect and <em>safety</em>.</p><ol class="rules-list"><li class="rules-item"><strong class="rules-item-title">Respect others</strong><p><strong>Insults, harassment, and threats</strong> are not allowed.</p></li><li class="rules-item"><strong class="rules-item-title">No spam or unsolicited ads</strong><p><strong>Spam</strong> and advertising without permission are prohibited.</p></li><li class="rules-item"><strong class="rules-item-title">Follow the law</strong><p>Do not share unlawful content or malicious links.</p></li><li class="rules-item"><strong class="rules-item-title">Use official support links</strong><p>Donate and trade only through <u>official ParaElys links</u>.</p></li><li class="rules-item"><strong class="rules-item-title">Respect moderation</strong><p>Admins may <strong>remove messages or restrict access</strong> for violations.</p></li><li class="rules-item"><strong class="rules-item-title">Protect your information</strong><p><strong>Never share</strong> passwords or verification codes.</p></li></ol><aside class="rules-warning"><strong>Important</strong><p>If someone claiming to represent ParaElys asks for money in private messages, a password, or a verification code, <strong>do not trust that message</strong>. Do not send money or share your information.</p></aside><section class="rules-disclaimer"><strong class="rules-disclaimer-title">Disclaimer</strong><p>We are not responsible for <em>users' actions</em> or third-party content.</p></section>`
        },
        ua: {
            flagSrc: 'icons/flags/ua.svg',
            languageLabel: 'Мова',
            support: '💖 Підтримати проєкт ParaElys',
            collaboration: '🤝 Співпраця',
            emailAction: 'Написати на Email',
            copyEmail: 'Скопіювати Email',
            copied: 'Email скопійовано',
            copyFailed: 'Не вдалося скопіювати — виділіть адресу вручну',
            soon: 'Скоро',
            rights: 'Усі права захищені',
            rulesMenu: 'Правила спільноти',
            mobileVersion: 'Мобільна версія',
            fullVersion: 'Повна версія',
            rulesTitle: 'Правила спільноти',
            homeLabel: 'На головну',
            rulesHtml: `<p class="rules-intro" id="rulesIntro">Ласкаво просимо! У <strong>ParaElys</strong> ми цінуємо повагу та <em>безпеку</em>.</p><ol class="rules-list"><li class="rules-item"><strong class="rules-item-title">Поважайте інших</strong><p><strong>Образи, цькування та погрози</strong> неприпустимі.</p></li><li class="rules-item"><strong class="rules-item-title">Без спаму та реклами</strong><p><strong>Спам</strong> і реклама без дозволу заборонені.</p></li><li class="rules-item"><strong class="rules-item-title">Дотримуйтеся закону</strong><p>Не поширюйте незаконні матеріали та шкідливі посилання.</p></li><li class="rules-item"><strong class="rules-item-title">Офіційна підтримка</strong><p>Для донатів та обмінів використовуйте <u>офіційні посилання ParaElys</u>.</p></li><li class="rules-item"><strong class="rules-item-title">Дотримуйтеся порядку</strong><p>За порушення адміністрація може <strong>видаляти повідомлення й обмежувати доступ</strong>.</p></li><li class="rules-item"><strong class="rules-item-title">Бережіть особисті дані</strong><p><strong>Не передавайте</strong> паролі та коди підтвердження.</p></li></ol><aside class="rules-warning"><strong>Увага</strong><p>Якщо хтось від імені ParaElys просить переказати гроші в особистих повідомленнях, повідомити пароль або код підтвердження — <strong>не довіряйте такому повідомленню</strong>. Не переказуйте гроші та не передавайте свої дані.</p></aside><section class="rules-disclaimer"><strong class="rules-disclaimer-title">Застереження</strong><p>Ми не відповідаємо за <em>дії користувачів</em> і за сторонній контент.</p></section>`
        },
        kz: {
            flagSrc: 'icons/flags/kz.svg',
            languageLabel: 'Тіл',
            support: '💖 ParaElys жобасын қолдау',
            collaboration: '🤝 Ынтымақтастық',
            emailAction: 'Email арқылы жазу',
            copyEmail: 'Email көшіру',
            copied: 'Email көшірілді',
            copyFailed: 'Көшіру мүмкін болмады — мекенжайды қолмен таңдаңыз',
            soon: 'Жақында',
            rights: 'Барлық құқықтар қорғалған',
            rulesMenu: 'Қауымдастық ережелері',
            mobileVersion: 'Мобильді нұсқа',
            fullVersion: 'Толық нұсқа',
            rulesTitle: 'Қауымдастық ережелері',
            homeLabel: 'Басты бетке',
            rulesHtml: `<p class="rules-intro" id="rulesIntro">Қош келдіңіз! <strong>ParaElys</strong> сыйластық пен <em>қауіпсіздікті</em> бағалайды.</p><ol class="rules-list"><li class="rules-item"><strong class="rules-item-title">Басқаларды құрметтеңіз</strong><p><strong>Қорлауға, қудалауға және қорқытуға</strong> жол берілмейді.</p></li><li class="rules-item"><strong class="rules-item-title">Спам мен жарнамаға тыйым салынады</strong><p><strong>Спам</strong> және рұқсатсыз жарнама жарияламаңыз.</p></li><li class="rules-item"><strong class="rules-item-title">Заңды сақтаңыз</strong><p>Заңсыз материалдар мен зиянды сілтемелерді таратпаңыз.</p></li><li class="rules-item"><strong class="rules-item-title">Ресми қолдау</strong><p>Донаттар мен айырбастау үшін <u>ParaElys ресми сілтемелерін</u> пайдаланыңыз.</p></li><li class="rules-item"><strong class="rules-item-title">Тәртіпті сақтаңыз</strong><p>Ереже бұзылса, әкімшілік <strong>хабарламаларды өшіріп, қолжетімділікті шектей алады</strong>.</p></li><li class="rules-item"><strong class="rules-item-title">Жеке деректерді қорғаңыз</strong><p><strong>Құпиясөз бен растау кодтарын</strong> ешкімге бермеңіз.</p></li></ol><aside class="rules-warning"><strong>Назар аударыңыз</strong><p>Егер біреу ParaElys атынан жеке хабарламада ақша аударуды, құпиясөзді немесе растау кодын сұраса, <strong>мұндай хабарламаға сенбеңіз</strong>. Ақша аудармаңыз және жеке деректеріңізді бермеңіз.</p></aside><section class="rules-disclaimer"><strong class="rules-disclaimer-title">Ескертпе</strong><p>Біз <em>пайдаланушылардың әрекеттері</em> мен үшінші тарап контенті үшін жауап бермейміз.</p></section>`
        }
    };

    function closeDropdowns(except = null) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            if (dropdown !== except) {
                dropdown.classList.remove('open');
                dropdown.querySelector('[data-dropdown-toggle]')?.setAttribute('aria-expanded', 'false');
            }
        });
    }

    function toggleDropdown(btn) {
        const dropdown = btn.parentElement;
        const willOpen = !dropdown.classList.contains('open');

        closeDropdowns(dropdown);
        closeLanguageMenu();
        dropdown.classList.toggle('open', willOpen);
        btn.setAttribute('aria-expanded', String(willOpen));
    }

    function toggleLanguageMenu(event) {
        event.stopPropagation();
        const menu = document.getElementById('languageMenu');
        const willOpen = !menu.classList.contains('open');
        closeDropdowns();
        menu.classList.toggle('open', willOpen);
        document.getElementById('languageToggle').setAttribute('aria-expanded', String(willOpen));
    }

    function closeLanguageMenu() {
        document.getElementById('languageMenu')?.classList.remove('open');
        document.getElementById('languageToggle')?.setAttribute('aria-expanded', 'false');
    }

    // Закрываем раскрывающиеся меню при клике вне них.
    document.addEventListener('click', event => {
        if (!event.target.closest('.dropdown')) {
            closeDropdowns();
        }
        if (!event.target.closest('.language-menu')) {
            closeLanguageMenu();
        }
    });

    function goHome(event) {
        event.preventDefault();
        closeDropdowns();
        closeLanguageMenu();
        closeRules();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function isMobileDevice() {
        const mobileUserAgent = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
        const narrowScreen = window.matchMedia('(max-width: 768px)').matches;
        return mobileUserAgent || narrowScreen;
    }

    const SITE_START_YEAR = 2025;
    const CONTACT_EMAIL = 'paraelys.info@gmail.com';

    function savePreference(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (_) {
            // Сайт продолжит работать, даже если браузер запретил localStorage.
        }
    }

    function loadPreference(key) {
        try {
            return localStorage.getItem(key);
        } catch (_) {
            return null;
        }
    }

    function copyrightFor(lang) {
        const currentYear = new Date().getFullYear();
        const years = currentYear > SITE_START_YEAR
            ? SITE_START_YEAR + '–' + currentYear
            : String(SITE_START_YEAR);
        return '© ' + years + ' ParaElys | ' + translations[lang].rights;
    }

    function updateVersionSwitchText() {
        const t = translations[currentLang];
        const switcher = document.getElementById('versionSwitch');
        switcher.textContent = currentVersion === 'mobile' ? t.fullVersion : t.mobileVersion;
    }

    function applyVersion(version) {
        currentVersion = version;
        document.body.classList.toggle('mobile-mode', version === 'mobile');
        document.body.classList.toggle('desktop-mode', version === 'desktop');
        updateVersionSwitchText();
        savePreference('paraelys-version', version);
        closeDropdowns();
        window.refreshCosmicParticles?.();
    }

    function toggleVersion() {
        applyVersion(currentVersion === 'mobile' ? 'desktop' : 'mobile');
    }

    function setLang(lang) {
        if (!translations[lang]) return;

        currentLang = lang;
        const t = translations[lang];

        document.documentElement.lang = lang === 'ua' ? 'uk' : (lang === 'kz' ? 'kk' : lang);
        document.body.classList.toggle('english-ui-font', lang === 'en');
        document.body.classList.toggle('kazakh-ui-font', lang === 'kz');
        document.getElementById('supportTitle').textContent = t.support;
        document.getElementById('collaborationTitle').textContent = t.collaboration;
        document.getElementById('emailContactLink').textContent = t.emailAction;
        document.getElementById('copyEmailButton').textContent = t.copyEmail;
        document.querySelectorAll('[data-soon]').forEach(label => {
            label.textContent = t.soon;
        });
        document.getElementById('rulesMenuLabel').textContent = t.rulesMenu;
        document.getElementById('copyrightText').textContent = copyrightFor(lang);
        document.getElementById('rulesTitle').textContent = t.rulesTitle;
        document.getElementById('rulesText').innerHTML = t.rulesHtml;
        document.querySelector('.logo').setAttribute('aria-label', t.homeLabel);
        const languageToggle = document.getElementById('languageToggle');
        const languageFlag = languageToggle.querySelector('.flag-icon');
        if (languageFlag) languageFlag.src = t.flagSrc;
        languageToggle.setAttribute('aria-label', t.languageLabel);
        updateVersionSwitchText();
        savePreference('paraelys-language', lang);
        closeLanguageMenu();
    }

    function toggleCollaboration() {
        const block = document.getElementById('collaborationBlock');
        const toggle = document.getElementById('collaborationToggle');
        const willOpen = !block.classList.contains('open');

        closeDropdowns();
        closeLanguageMenu();
        block.classList.toggle('open', willOpen);
        toggle.setAttribute('aria-expanded', String(willOpen));

        if (!willOpen) {
            document.getElementById('copyStatus').textContent = '';
        }
    }

    function closeCollaboration() {
        document.getElementById('collaborationBlock')?.classList.remove('open');
        document.getElementById('collaborationToggle')?.setAttribute('aria-expanded', 'false');
        const status = document.getElementById('copyStatus');
        if (status) status.textContent = '';
    }

    async function copyContactEmail() {
        const status = document.getElementById('copyStatus');
        const t = translations[currentLang];

        try {
            await navigator.clipboard.writeText(CONTACT_EMAIL);
            status.textContent = t.copied;
        } catch (_) {
            status.textContent = CONTACT_EMAIL + ' — ' + t.copyFailed;
        }
    }

    function toggleSupport() {
        const block = document.getElementById('supportBlock');
        const toggle = document.getElementById('supportToggle');
        const willOpen = !block.classList.contains('open');

        block.classList.toggle('open', willOpen);
        toggle.setAttribute('aria-expanded', String(willOpen));
    }

    function openRules() {
        closeDropdowns();
        closeLanguageMenu();
        document.getElementById('rulesModal').style.display = 'flex';
        document.getElementById('closeRulesButton').focus();
    }

    function closeRules() {
        document.getElementById('rulesModal').style.display = 'none';
        document.getElementById('rulesMenu').focus();
    }

    function activateWithKeyboard(element, action) {
        element.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                action(event);
            }
        });
    }

    function openEmailContact(event) {
        event.preventDefault();

        const emailMessages = {
            ru: { subject: 'Сотрудничество', body: 'Здравствуйте!' },
            en: { subject: 'Partnerships', body: 'Hello!' },
            ua: { subject: 'Співпраця', body: 'Вітаю!' },
            kz: { subject: 'Ынтымақтастық', body: 'Сәлеметсіз бе!' }
        };
        const message = emailMessages[currentLang] || emailMessages.ru;
        const subject = message.subject;
        const body = message.body;
        const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(CONTACT_EMAIL)
            + '&su=' + encodeURIComponent(subject)
            + '&body=' + encodeURIComponent(body);

        const openedWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
        if (openedWindow) {
            openedWindow.opener = null;
        } else {
            window.location.href = event.currentTarget.href;
        }
    }

    function initCosmicParticles() {
        const canvas = document.getElementById('cosmicParticles');
        if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let particles = [];
        let rafId = 0;
        let width = 0;
        let height = 0;
        let dpr = 1;
        let liteMode = false;
        let lastTime = 0;

        function useLiteMode() {
            return isMobileDevice()
                || document.body.classList.contains('mobile-mode')
                || window.innerWidth <= 768;
        }

        function particleCount() {
            return liteMode ? 34 : Math.min(150, Math.max(95, Math.round((width * height) / 12500)));
        }

        function createParticle(randomPosition = true) {
            const cx = width * 0.5;
            const cy = height * 0.46;
            const angle = Math.random() * Math.PI * 2;
            const startRadius = randomPosition
                ? Math.random() * Math.max(width, height) * 0.52
                : (10 + Math.random() * 90);
            const speed = (liteMode ? 0.018 : 0.028) + Math.random() * (liteMode ? 0.045 : 0.085);

            return {
                x: cx + Math.cos(angle) * startRadius,
                y: cy + Math.sin(angle) * startRadius * 0.72,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed * 0.72,
                size: (liteMode ? 0.35 : 0.28) + Math.random() * (liteMode ? 0.65 : 1.05),
                alpha: 0.18 + Math.random() * 0.62,
                twinkle: 0.0015 + Math.random() * 0.0035,
                phase: Math.random() * Math.PI * 2,
                blue: 170 + Math.floor(Math.random() * 86)
            };
        }

        function rebuild() {
            liteMode = useLiteMode();
            dpr = Math.min(window.devicePixelRatio || 1, liteMode ? 1 : 1.5);
            width = window.innerWidth;
            height = liteMode
                ? (document.getElementById('cosmicStage')?.clientHeight || window.innerHeight)
                : window.innerHeight;
            canvas.width = Math.max(1, Math.round(width * dpr));
            canvas.height = Math.max(1, Math.round(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const wanted = particleCount();
            particles = Array.from({ length: wanted }, () => createParticle(true));
        }

        function resetParticle(p) {
            const fresh = createParticle(false);
            Object.assign(p, fresh);
        }

        function draw(now) {
            if (document.hidden) {
                rafId = 0;
                return;
            }
            rafId = requestAnimationFrame(draw);

            // На телефонах рисуем примерно 30 кадров/с, на ПК — до 60.
            const minFrame = liteMode ? 32 : 15;
            if (now - lastTime < minFrame) return;
            const dt = Math.min(2.5, Math.max(0.45, (now - lastTime) / 16.67 || 1));
            lastTime = now;

            ctx.clearRect(0, 0, width, height);
            const cx = width * 0.5;
            const cy = height * 0.46;
            const maxX = width + 24;
            const maxY = height + 24;

            for (const p of particles) {
                p.x += p.vx * dt;
                p.y += p.vy * dt;

                // Очень медленно ускоряем частицы от центра, как от разлома пространства.
                const dx = p.x - cx;
                const dy = p.y - cy;
                const dist = Math.max(1, Math.hypot(dx, dy));
                const push = liteMode ? 0.000018 : 0.00003;
                p.vx += (dx / dist) * push * dt;
                p.vy += (dy / dist) * push * dt;

                if (p.x < -24 || p.x > maxX || p.y < -24 || p.y > maxY) {
                    resetParticle(p);
                }

                const twinkle = 0.58 + Math.sin(now * p.twinkle + p.phase) * 0.42;
                const alpha = Math.max(0.04, p.alpha * twinkle);
                const radius = p.size;

                ctx.beginPath();
                ctx.fillStyle = 'rgba(' + (120 + Math.round(p.blue * 0.2)) + ',' + p.blue + ',255,' + alpha.toFixed(3) + ')';
                ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
                ctx.fill();

                // Редкие микроскопические искры получают короткий хвост.
                if (!liteMode && p.size > 1.0 && alpha > 0.45) {
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgba(120,210,255,' + (alpha * 0.24).toFixed(3) + ')';
                    ctx.lineWidth = 0.45;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p.x - p.vx * 24, p.y - p.vy * 24);
                    ctx.stroke();
                }
            }
        }

        let resizeTimer = 0;
        let lastViewportWidth = window.innerWidth;
        let lastViewportHeight = window.innerHeight;

        function scheduleRebuild() {
            const nextWidth = window.innerWidth;
            const nextHeight = window.innerHeight;
            const widthChanged = Math.abs(nextWidth - lastViewportWidth) > 8;
            const heightChanged = Math.abs(nextHeight - lastViewportHeight) > 140;

            // На мобильных браузерах адресная строка постоянно меняет innerHeight
            // во время скролла. Это не должно пересобирать фон и вызывать "прыжок".
            if (useLiteMode() && !widthChanged && !heightChanged) return;

            lastViewportWidth = nextWidth;
            lastViewportHeight = nextHeight;
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(rebuild, 160);
        }

        window.refreshCosmicParticles = rebuild;
        window.addEventListener('resize', scheduleRebuild, { passive: true });
        rebuild();
        rafId = requestAnimationFrame(draw);

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(rafId);
                rafId = 0;
            } else if (!rafId) {
                lastTime = 0;
                rafId = requestAnimationFrame(draw);
            }
        });
        window.addEventListener('pagehide', () => {
            cancelAnimationFrame(rafId);
            rafId = 0;
        });
        window.addEventListener('pageshow', () => {
            if (!document.hidden && !rafId) {
                lastTime = 0;
                rafId = requestAnimationFrame(draw);
            }
        });
    }

    // При первом открытии используем сохранённые настройки, а если их нет —
    // автоматически выбираем мобильную версию на смартфоне.
    document.addEventListener('DOMContentLoaded', () => {
        const savedLang = loadPreference('paraelys-language');
        const savedVersion = loadPreference('paraelys-version');

        currentLang = translations[savedLang] ? savedLang : 'ru';
        applyVersion(savedVersion === 'mobile' || savedVersion === 'desktop'
            ? savedVersion
            : (isMobileDevice() ? 'mobile' : 'desktop'));
        setLang(currentLang);
        initCosmicParticles();

        const homeLink = document.getElementById('homeLink');
        const languageToggle = document.getElementById('languageToggle');
        const rulesMenu = document.getElementById('rulesMenu');
        const supportToggle = document.getElementById('supportToggle');
        const collaborationToggle = document.getElementById('collaborationToggle');
        const copyEmailButton = document.getElementById('copyEmailButton');
        const versionSwitch = document.getElementById('versionSwitch');
        const closeRulesButton = document.getElementById('closeRulesButton');
        const rulesModal = document.getElementById('rulesModal');
        const emailContactLink = document.getElementById('emailContactLink');

        homeLink.addEventListener('click', goHome);
        languageToggle.addEventListener('click', toggleLanguageMenu);
        rulesMenu.addEventListener('click', openRules);
        supportToggle.addEventListener('click', toggleSupport);
        collaborationToggle.addEventListener('click', toggleCollaboration);
        copyEmailButton.addEventListener('click', copyContactEmail);
        versionSwitch.addEventListener('click', toggleVersion);
        closeRulesButton.addEventListener('click', closeRules);
        emailContactLink.addEventListener('click', openEmailContact);

        activateWithKeyboard(versionSwitch, toggleVersion);

        document.querySelectorAll('.support-disabled, .social-disabled').forEach(link => {
            link.addEventListener('click', event => event.preventDefault());
        });

        document.querySelectorAll('[data-lang]').forEach(button => {
            button.addEventListener('click', () => setLang(button.dataset.lang));
        });

        document.querySelectorAll('[data-dropdown-toggle]').forEach(button => {
            button.addEventListener('click', () => toggleDropdown(button));
            activateWithKeyboard(button, () => toggleDropdown(button));
        });

        rulesModal.addEventListener('click', event => {
            if (event.target === rulesModal) closeRules();
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Tab' && rulesModal.style.display === 'flex') { event.preventDefault(); closeRulesButton.focus(); }
            if (event.key === 'Escape') {
                closeDropdowns();
                closeLanguageMenu();
                closeCollaboration();
                closeRules();
            }
        });
    });