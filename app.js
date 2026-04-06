let currentLang = 'de';
let menuOpen = false;

const translations = {
    de: {
        'tab-about': 'Über mich',
        'tab-projects': 'Projekte',
        'tab-skills': 'Kompetenzen',
        'tab-docku': 'Zertifikate',
        'tab-contact': 'Kontakt',

        'about-title': 'Über mich',
        'about-intro': 'Als IT-Spezialist mit einem Master in Technischer Informatik bringe ich umfassende Expertise in <strong>Datenanalyse, Prozessoptimierung und Softwareentwicklung</strong> mit. Meine Leidenschaft liegt in der Digitalisierung und Automatisierung von Produktionsprozessen durch moderne Technologien.',

        'exp-title': 'Berufserfahrung',
        'job1-title': 'IT-Spezialist | Die ROSTOCKER Wurst- und Schinkenspezialitäten GmbH',
        'job1-list': '<li>Entwicklung und Einführung von Softwarelösungen für Produktionsprozesse</li><li>Analyse und Verwaltung von SQL-Server-Datenbanken</li><li>Integration des Warenwirtschaftssystems Winweb</li><li>Anbindung von Produktionsmaschinen über OPC-Schnittstellen</li><li>Benutzer-Support und Betreuung von Mitarbeitenden</li>',
        'job2-title': 'IT-Support | Deutsches Rotes Kreuz (DRK), Rostock',
        'job2-list': '<li>Betreuung und Schulung der Mitarbeitenden bei neuer Software</li><li>Technische Beratung und Prozessoptimierung</li><li>Erstellung von Dokumentationen und Schulungsmaterialien</li>',
        'job3-title': 'IT-Mitarbeiter / Netzwerktechniker | Avanegar Derak, Iran',
        'job3-list': '<li>Fehlerdiagnose und Behebung von Netzwerkproblemen</li><li>Installation und Konfiguration von Hardwarekomponenten</li>',

        'edu-title': 'Bildungsweg',
        'edu1-title': 'M.Sc. Informationstechnik / Technische Informatik',
        'edu1-location': 'Universität Rostock, Deutschland',
        'edu1-focus': '<strong>Schwerpunkte:</strong> Datenanalyse, Prozessautomatisierung, Industrielle Maschinenkommunikation',
        'edu2-title': 'B.Sc. Elektronik-Technologie-Ingenieurwesen',
        'edu2-location': 'University of Technical and Engineering, Iran',
        'edu2-focus': '<strong>Schwerpunkte:</strong> Elektronische Systeme, Automatisierungstechnik, Embedded Systems',

        'cert-title': 'Zertifikate & Weiterbildungen',
        'cert-list': '<li><strong>SPS-Programmierung (TIA Portal)</strong> - Bewertung: 90/100, 89/100</li><li><strong>Intelligentes Gebäudemanagement (Smart House)</strong> - Bewertung: 88/100</li><li><strong>Online-Kurse:</strong> Python Pro Bootcamp, SQL Bootcamp, Full-Stack Web Developer</li>',

        'projects-title': 'Projekte',
        'proj1-title': 'Masterarbeit: Digitalisierung von Produktionsprozessen',
        'proj1-partner': '<strong>Kooperationspartner:</strong> Rostocker Wurst- und Schinkenspezialitäten GmbH',
        'proj1-desc': 'Entwicklung eines vollständigen Systems zur Digitalisierung und Optimierung von Produktionsprozessen durch Maschinendatenerfassung über Softing OPC-Programme.',
        'proj1-list': '<li>Standardisierte Datenübertragung mittels OPC UA/DA-Protokoll</li><li>Speicherung in SQL-Datenbank</li><li>Implementierung effizienter Verfahren zur Datenanalyse und -visualisierung</li><li>Technologien: .NET (C#, ASP.NET Core), Python, SQL Server</li>',
        'proj1-link': '📄 Masterarbeit ansehen',
        'proj1-link2': '💻 GitHub Repository',
        'proj1-link3': '🌐 Live Demo Masterarbeit',

        'proj-market-title': 'Power BI Dashboard – Finanzmarkt-Datenvisualisierung',
        'proj-market-desc': 'Entwicklung einer End-to-End Datenpipeline zur Verarbeitung und Visualisierung von Finanzmarktdaten in nahezu Echtzeit.',
        'proj-market-list': '<li>Konzeption und Betrieb einer Echtzeit-Datenpipeline (3 Finanz-APIs, inkrementelle Aktualisierung)</li><li>Entwicklung eines Python-basierten ETL-Prozesses mit PostgreSQL</li><li>Integration von PostgreSQL in Power BI (Native Query, SQL-Views)</li><li>Entwicklung interaktiver Dashboards (RSI, EMA, SMA, Fundamentaldaten)</li><li>Drill-Down-Analysen für Finanzinstrumente (AAPL, MSFT, GOOGL)</li>',
        'proj-market-demo': '🌐 Live Demo ansehen',
        'proj-market-github': '💻 GitHub Repository',

        'proj-graph-title': 'Shortest-Path Analyse in Graphen',
        'proj-graph-desc': 'Implementierung und Vergleich verschiedener Algorithmen zur Berechnung kürzester Pfade in realen Netzwerk- und Straßengraphen. Fokus auf Performance-Optimierung, rekursiven SQL-Abfragen und der Analyse von Peer-to-Peer- sowie Road-Network-Datasets.',
        'proj-graph-list': '<li>BFS, DFS und Bidirectional BFS</li><li>Performance-Optimierung durch Indexing und Adjazenzlisten</li><li>Vergleich von UDF- und CTE-basierten Methoden</li><li>Rekursive SQL-Abfragen mittels <code>WITH RECURSIVE</code></li><li>Analyse auf Gnutella Peer-to-Peer und Texas Road Network Datensätzen</li><li>Technologien: PostgreSQL, pgRouting, Python (NetworkX)</li><li>System: Intel i7-9750H, 16 GB RAM, Work Mem 1250 MB, Cache 4 GB</li><li>Ergebnisse: UDF schneller als CTE, Bidirectional BFS am effizientesten, CTE-Limits bei sehr großen Graphen</li><li>Umsetzungsschritte: Repository klonen, PostgreSQL einrichten, Datensätze importieren, Algorithmen per SQL oder Python ausführen</li>',
        'proj4-title': 'Web-Anwendung',
        'proj4-desc': 'Entwicklung einer modernen Web-Anwendung mit benutzerfreundlicher Oberfläche.',
        'proj4-list': '<li>Frontend-Entwicklung mit modernen Web-Technologien</li><li>Responsive Design für alle Geräte</li><li>Veröffentlicht auf GitHub Pages</li>',
        'more-projects': 'Weitere Projekte auf Anfrage',
        'more-projects-desc': 'Gerne stelle ich Ihnen detaillierte Projektdokumentationen und Code-Beispiele zur Verfügung.',

        'skills-title': 'Technische Kompetenzen',
        'skills-prog': '💻 Programmierung',
        'skills-db': '🗄️ Datenbanken',
        'skills-auto': '⚙️ Automatisierung',
        'skills-enterprise': '🏢 Enterprise Software',
        'lang-skills': 'Sprachkenntnisse',
        'lang-de-title': '🇩🇪 Deutsch',
        'lang-de-level': 'Fließend (C1)',
        'lang-en-title': '🇬🇧 Englisch',
        'lang-en-level': 'Kenntnisse (B2)',

        'contact-title': 'Kontakt aufnehmen',
        'contact-intro': 'Ich freue mich darauf, von Ihnen zu hören! Ob für neue Projekte, Jobangebote oder einfach zum Netzwerken – kontaktieren Sie mich gerne.',
        'contact-cta': 'Lassen Sie uns zusammenarbeiten!',
        'contact-cta-desc': 'Als motivierter IT-Spezialist mit fundierter Ausbildung und praktischer Erfahrung bin ich bereit, meine Kenntnisse in einem innovativen Team einzubringen.',
        'contact-phone': '📞 Anrufen',
        'contact-email': '✉️ E-Mail schreiben',
        'avail-title': 'Standort & Verfügbarkeit',
        'avail-location': '<strong>📍 Aktueller Standort:</strong> Rostock, Deutschland',
        'avail-status': '<strong>✓ Status:</strong> Umzugsbereit',
        'avail-ready': '<strong>💼 Verfügbarkeit:</strong> Für neue Herausforderungen offen',
        'avail-interests': '<strong>Interessen:</strong> Fußball, Schwimmen, kontinuierliche Weiterbildung in IT-Trends'
    },

    en: {
        'tab-about': 'About Me',
        'tab-projects': 'Projects',
        'tab-skills': 'Skills',
        'tab-docku': 'Certificates',
        'tab-contact': 'Contact',

        'about-title': 'About Me',
        'about-intro': 'As an IT specialist with a Master\'s degree in Technical Computer Science, I bring comprehensive expertise in <strong>data analysis, process optimization, and software development</strong>. My passion lies in digitizing and automating production processes through modern technologies.',

        'exp-title': 'Professional Experience',
        'job1-title': 'IT Specialist | Die ROSTOCKER Wurst- und Schinkenspezialitäten GmbH',
        'job1-list': '<li>Development and implementation of software solutions for production processes</li><li>Analysis and management of SQL Server databases</li><li>Integration of the Winweb ERP system</li><li>Connection of production machines via OPC interfaces</li><li>User support and employee training</li>',
        'job2-title': 'IT Support | German Red Cross (DRK), Rostock',
        'job2-list': '<li>Support and training of employees for new software</li><li>Technical consulting and process optimization</li><li>Creation of documentation and training materials</li>',
        'job3-title': 'IT Employee / Network Technician | Avanegar Derak, Iran',
        'job3-list': '<li>Diagnosis and resolution of network problems</li><li>Installation and configuration of hardware components</li>',

        'edu-title': 'Education',
        'edu1-title': 'M.Sc. Information Technology / Technical Computer Science',
        'edu1-location': 'University of Rostock, Germany',
        'edu1-focus': '<strong>Focus areas:</strong> Data analysis, Process automation, Industrial machine communication',
        'edu2-title': 'B.Sc. Electronic Technology Engineering',
        'edu2-location': 'University of Technical and Engineering, Iran',
        'edu2-focus': '<strong>Focus areas:</strong> Electronic systems, Automation technology, Embedded Systems',

        'cert-title': 'Certificates & Further Education',
        'cert-list': '<li><strong>PLC Programming (TIA Portal)</strong> - Rating: 90/100, 89/100</li><li><strong>Intelligent Building Management (Smart House)</strong> - Rating: 88/100</li><li><strong>Online Courses:</strong> Python Pro Bootcamp, SQL Bootcamp, Full-Stack Web Developer</li>',

        'projects-title': 'Projects',
        'proj1-title': 'Master Thesis: Digitization of Production Processes',
        'proj1-partner': '<strong>Cooperation Partner:</strong> Rostocker Wurst- und Schinkenspezialitäten GmbH',
        'proj1-desc': 'Development of a complete system for digitizing and optimizing production processes through machine data acquisition via Softing OPC programs.',
        'proj1-list': '<li>Standardized data transmission using OPC UA/DA protocol</li><li>Storage in SQL database</li><li>Implementation of efficient methods for data analysis and visualization</li><li>Technologies: .NET (C#, ASP.NET Core), Python, SQL Server</li>',
        'proj1-link': '📄 View Master Thesis',
        'proj1-link2': '💻 GitHub Repository',
        'proj1-link3': '🌐 Live Demo Master Thesis',

        'proj-market-title': 'Power BI Dashboard – Financial Market Data Visualization',
        'proj-market-desc': 'Development of an end-to-end data pipeline for near real-time processing and visualization of financial market data.',
        'proj-market-list': '<li>Design and operation of a real-time data pipeline (3 financial APIs, incremental updates)</li><li>Development of a Python-based ETL process with PostgreSQL</li><li>Integration of PostgreSQL into Power BI (Native Query, SQL Views)</li><li>Development of interactive dashboards (RSI, EMA, SMA, fundamentals)</li><li>Drill-down analysis for financial instruments (AAPL, MSFT, GOOGL)</li>',
        'proj-market-demo': '🌐 View Live Demo',
        'proj-market-github': '💻 GitHub Repository',

        'proj-graph-title': 'Shortest-Path Analysis in Graphs',
        'proj-graph-desc': 'Implementation and comparison of various algorithms for calculating shortest paths in real network and road graphs. Focus on performance optimization, recursive SQL queries and analysis of peer-to-peer and road network datasets.',
        'proj-graph-list': '<li>BFS, DFS and Bidirectional BFS</li><li>Performance optimization through indexing and adjacency lists</li><li>Comparison of UDF and CTE-based methods</li><li>Recursive SQL queries using <code>WITH RECURSIVE</code></li><li>Analysis on Gnutella Peer-to-Peer and Texas Road Network datasets</li><li>Technologies: PostgreSQL, pgRouting, Python (NetworkX)</li><li>System: Intel i7-9750H, 16 GB RAM, Work Mem 1250 MB, Cache 4 GB</li><li>Results: UDF faster than CTE, Bidirectional BFS most efficient, CTE limits with very large graphs</li><li>Implementation steps: Clone repository, set up PostgreSQL, import datasets, execute algorithms via SQL or Python</li>',
        'proj4-title': 'Web Application',
        'proj4-desc': 'Development of a modern web application with user-friendly interface.',
        'proj4-list': '<li>Frontend development with modern web technologies</li><li>Responsive design for all devices</li><li>Published on GitHub Pages</li>',
        'more-projects': 'More projects on request',
        'more-projects-desc': 'I\'m happy to provide detailed project documentation and code samples.',

        'skills-title': 'Technical Skills',
        'skills-prog': '💻 Programming',
        'skills-db': '🗄️ Databases',
        'skills-auto': '⚙️ Automation',
        'skills-enterprise': '🏢 Enterprise Software',
        'lang-skills': 'Language Skills',
        'lang-de-title': '🇩🇪 German',
        'lang-de-level': 'Fluent (C1)',
        'lang-en-title': '🇬🇧 English',
        'lang-en-level': 'Intermediate (B2)',

        'contact-title': 'Get in Touch',
        'contact-intro': 'I look forward to hearing from you! Whether for new projects, job offers or just networking - feel free to contact me.',
        'contact-cta': 'Let\'s work together!',
        'contact-cta-desc': 'As a motivated IT specialist with solid education and practical experience, I am ready to contribute my knowledge to an innovative team.',
        'contact-phone': '📞 Call',
        'contact-email': '✉️ Send Email',
        'avail-title': 'Location & Availability',
        'avail-location': '<strong>📍 Current Location:</strong> Rostock, Germany',
        'avail-status': '<strong>✓ Status:</strong> Relocation ready',
        'avail-ready': '<strong>💼 Availability:</strong> Open to new challenges',
        'avail-interests': '<strong>Interests:</strong> Soccer, Swimming, Continuous education in IT trends'
    }
};

async function loadPartial(file, elementId) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`Datei nicht gefunden: ${file}`);
        }
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error('Fehler beim Laden der Datei:', error);
    }
}

function showTab(tabId, event) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
        button.setAttribute('aria-selected', 'false');
    });

    document.getElementById(tabId).classList.add('active');

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
        event.currentTarget.setAttribute('aria-selected', 'true');
    } else {
        const activeButton = document.querySelector(`[aria-controls="${tabId}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
            activeButton.setAttribute('aria-selected', 'true');
        }
    }

    if (window.innerWidth <= 768 && menuOpen) {
        toggleMenu();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchLanguage(lang) {
    currentLang = lang;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.getElementById(`lang-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');

    Object.keys(translations[lang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (
                key.includes('list') ||
                key.includes('intro') ||
                key.includes('desc') ||
                key.includes('focus') ||
                key.includes('partner') ||
                key.includes('avail') ||
                key.includes('location') ||
                key.includes('status') ||
                key.includes('ready') ||
                key.includes('interests') ||
                key.includes('cta-desc')
            ) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle && !menuOpen) {
        menuToggle.textContent = lang === 'de' ? '☰ Menü' : '☰ Menu';
    }
    if (menuToggle && menuOpen) {
        menuToggle.textContent = lang === 'de' ? '✕ Schließen' : '✕ Close';
    }
}

function toggleMenu() {
    const tabsMenu = document.getElementById('tabsMenu');
    const menuToggle = document.querySelector('.menu-toggle');

    menuOpen = !menuOpen;
    tabsMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', menuOpen.toString());

    if (menuOpen) {
        menuToggle.textContent = currentLang === 'de' ? '✕ Schließen' : '✕ Close';
    } else {
        menuToggle.textContent = currentLang === 'de' ? '☰ Menü' : '☰ Menu';
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    document.getElementById('progressBar').style.width = scrolled + '%';
}

function toggleScrollButton() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollButton.style.display = 'flex';
    } else {
        scrollButton.style.display = 'none';
    }
}

window.addEventListener('scroll', () => {
    updateProgressBar();
    toggleScrollButton();
});

document.addEventListener('DOMContentLoaded', async () => {
    await loadPartial('header.html', 'header-placeholder');
    showTab('about');

    const menuToggle = document.querySelector('.menu-toggle');
    if (window.innerWidth <= 768) {
        menuToggle.textContent = '☰ Menü';
    }
});
