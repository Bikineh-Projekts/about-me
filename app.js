let currentLang = 'de';
let menuOpen = false;

const translations = {
    "de": {
        "tab-about": "Über mich",
        "tab-projects": "Projekte",
        "tab-skills": "Kompetenzen",
        "tab-docku": "Zertifikate",
        "tab-contact": "Kontakt",
        "about-title": "Über mich",
        "about-intro": "Absolvent M.Sc. Technische Informatik (Universität Rostock) mit Werkstudentenerfahrung in Produktions-IT und Data Engineering. Mein Schwerpunkt: <strong>Maschinen- und Produktionsdaten von der Steuerung bis zur Auswertung</strong>, also Anbindung über OPC, Speicherung in SQL Server oder PostgreSQL und Analysen zu Leistung, Störungen und OEE. Ich suche einen Berufseinstieg in Produktions-IT, MES, IT/OT-Integration oder Data Engineering.",
        "exp-title": "Berufserfahrung",
        "job1-date": "November 2025 – Oktober 2026",
        "job1-title": "Werkstudent | Data Engineering & Datenanalyse | Universität Rostock",
        "job1-list": "<li>Performance-Vergleich von SQL-Abfragetechniken (rekursive CTEs und PL/pgSQL-Funktionen) in PostgreSQL auf 2 realen Netzwerken mit bis zu 1,38 Mio. Knoten und 1,92 Mio. Kanten, 30 Messwiederholungen je Tiefenstufe</li><li>Ergebnis: PL/pgSQL-Funktionen erreichten Pfadlängen bis 1.054 Kanten, rekursive CTEs nur bis 19; Validierung mit pgRouting und NetworkX</li>",
        "job2-date": "Oktober 2024 – Oktober 2025",
        "job2-title": "Werkstudent | Produktions-IT, Datenanalyse & IT-Support (EDV-Abteilung) | Rostocker Wurst- und Schinkenspezialitäten GmbH",
        "job2-list": "<li>Aufbau einer automatisierten Maschinendatenerfassung für 2 Verpackungsmaschinen (VARIOVAC, Siemens S7): Prozess-, Zustands- und Leistungsdaten sowie 94 Alarmsignale gelangen über OPC DA (Softing dataFEED) und ODBC in SQL Server und ersetzen die papierbasierte Erfassung</li><li>Entwurf eines normalisierten Datenmodells mit 11 Tabellen als Grundlage für OEE-, Stillstands- und Temperaturanalysen</li><li>SQL-Abfragen, Stored Procedures und Dashboards, die der Produktionsleitung Leistung und Störungen der Maschinen sichtbar machen</li><li>1st-/2nd-Level-IT-Support (Windows, Microsoft 365), Active Directory und Betreuung des Warenwirtschaftssystems Winweb</li>",
        "job3-date": "März 2023 – September 2024",
        "job3-title": "Werkstudent | IT-Support (1st-/2nd-Level) | Deutsches Rotes Kreuz (DRK), Rostock",
        "job3-list": "<li>1st-/2nd-Level-Support in Windows und Microsoft 365 (Outlook, Teams, SharePoint) sowie Bearbeitung von Störungen und Service Requests</li><li>Anwenderschulungen und Softwareeinführungen zur Reduzierung wiederkehrender Anfragen</li>",
        "job4-date": "Oktober 2018 – Dezember 2020",
        "job4-title": "Mitarbeiter | IT- & Datenbank-Support | Avangar Darak Co., IT-Partner der Medizinischen Universität Shiraz, Iran",
        "job4-list": "<li>Installation und Konfiguration von SQL-Server-Umgebungen einschließlich automatisierter Backups, Zugriffsrechte und Firewall-Regeln</li><li>Unterstützung bei Datenbankmigrationen sowie Behebung von Server- und Verbindungsproblemen</li>",
        "edu-title": "Bildungsweg",
        "edu1-date": "Oktober 2023 – August 2025",
        "edu1-title": "M.Sc. Informationstechnik / Technische Informatik",
        "edu1-location": "Universität Rostock, Deutschland",
        "edu1-focus": "<strong>Masterarbeit:</strong> „Analysetechniken zur Steigerung der Betriebseffizienz von Verpackungsmaschinen“ in Kooperation mit der Rostocker Wurst- und Schinkenspezialitäten GmbH<br><strong>Schwerpunkte:</strong> Datenanalyse, Prozessautomatisierung, Maschinenkommunikation, Datenbankdesign",
        "edu2-date": "Oktober 2012 – Juli 2016",
        "edu2-title": "B.Sc. Ingenieurwesen für Elektroniktechnologie",
        "edu2-location": "Technische und Berufliche Universität Shiraz, Iran",
        "edu2-focus": "<strong>Schwerpunkte:</strong> Energiedatenanalyse, IoT-Kommunikation, Smart-Home-Systeme, Energieeffizienz<br><strong>ZAB-Zeugnisbewertung:</strong> entspricht einem deutschen Hochschulabschluss auf Bachelor-Ebene",
        "cert-title": "Zertifikate & Weiterbildungen",
        "cert-list": "<li><strong>SAP Analytics Cloud</strong> (SAP Learning, 03/2026): vier abgeschlossene Learning Journeys</li><li><strong>Python Pro Bootcamp & Complete SQL Bootcamp</strong> (Udemy, 08/2024)</li><li><strong>SPS-Programmierung: PLC-Anwender 1. und 2. Grades</strong> (2019): je 272 Stunden, Bewertung 90/100 und 89/100 („sehr gut“)</li><li><strong>Intelligentes Gebäudemanagement</strong> (2019): 64 Stunden, Bewertung 88/100</li>",
        "projects-title": "Projekte",
        "proj1-title": "Masterarbeit: Analyse-Software für Verpackungsmaschinen",
        "proj1-partner": "<strong>Kooperationspartner:</strong> Rostocker Wurst- und Schinkenspezialitäten GmbH",
        "proj1-desc": "Durchgängige Lösung von der Maschine bis zur Auswertung: Maschinendaten aus Siemens-S7-Steuerungen werden automatisch erfasst, gespeichert und in einer Webanwendung ausgewertet.",
        "proj1-list": "<li>Erfassung von 2 Verpackungsmaschinen über OPC DA (Softing dataFEED OPC Suite) und ODBC in SQL Server; Datenmodell mit 11 Tabellen</li><li>Webanwendung (ASP.NET Core, Entity Framework Core) mit 9 Auswertungsansichten für Leistung, Temperatur, Alarme, Zustände, Störungen und Planung; im Werk produktiv genutzt</li><li>Leistungsermittlung aus SPS-Zählerständen und Häufigkeitsanalyse der Alarm- und Störungsmeldungen</li><li>Stückweise Regression der Temperaturverläufe und Fehlerwahrscheinlichkeitsmodell mit 5 Einflussfaktoren; daraus 4 Empfehlungen, u. a. Migration von OPC DA auf OPC UA</li><li>Technologien: Siemens S7, OPC DA, ODBC, SQL Server, C#, ASP.NET Core, Docker</li>",
        "proj1-link": "📄 Masterarbeit ansehen",
        "proj1-link2": "💻 GitHub Repository",
        "proj1-link3": "🌐 Live Demo",
        "proj-market-title": "Market Data Pipeline & Dashboard",
        "proj-market-desc": "Automatisierte Datenpipeline für Finanzmarktdaten: von drei REST-APIs über PostgreSQL bis zu Dashboard und Power BI, mit Tests und geplanten Läufen.",
        "proj-market-list": "<li>Python-ETL für 3 REST-APIs (Finnhub, Alpha Vantage, Twelve Data): Kurse, Fundamentaldaten und 4 technische Indikatoren</li><li>PostgreSQL mit DIM-/FACT-/LOG-Datenmodell, idempotenten Upserts und 17 BI-Views; Power-BI-Measures (DAX)</li><li>Automatisierung mit GitHub Actions: ETL alle 30 Minuten während der US-Handelszeit plus nächtlicher Volllauf, wöchentliches Backup, monatliche Wartung</li><li>CI mit automatisierten Tests (pytest); Web-Dashboard mit Pipeline-Monitoring, Bereitstellung mit Docker</li><li>Technologien: Python, PostgreSQL, SQL, REST-APIs, GitHub Actions, Docker, Power BI</li>",
        "proj-market-github": "💻 GitHub Repository",
        "proj-graph-title": "Shortest-Path-Analyse in Graphen (PostgreSQL)",
        "proj-graph-desc": "Vergleich von SQL-Ansätzen für kürzeste Pfade in großen realen Netzwerken, mit Fokus auf Performance und Skalierbarkeit.",
        "proj-graph-list": "<li>Datensätze: Gnutella-P2P-Netz (6.301 Knoten, 20.777 Kanten) und Straßennetz Texas (1,38 Mio. Knoten, 1,92 Mio. Kanten)</li><li>BFS, DFS und Bidirectional BFS als rekursive CTEs und als PL/pgSQL-Funktionen, 30 Messwiederholungen je Tiefenstufe</li><li>Ergebnis: CTEs sind bei Pfaden unter 5 Kanten schneller, PL/pgSQL-Funktionen skalieren bis 1.054 Kanten, CTEs nur bis 19</li><li>Optimierung durch Indexierung, Adjazenzlisten und PostgreSQL-Konfiguration; Validierung mit pgRouting und NetworkX</li>",
        "proj-graph-link1": "📄 Projektbericht ansehen",
        "proj-graph-link2": "💻 GitHub Repository",
        "proj4-title": "Microsoft 365, Azure & DevOps",
        "proj4-desc": "Administration einer Microsoft-365-Testumgebung (Business Standard, Entra ID P1) sowie CI/CD-Pipeline für eine .NET-Anwendung auf Microsoft Azure.",
        "proj4-list": "<li>Benutzeranlage, Lizenzverwaltung und Rollenkonzept (Least Privilege) in Microsoft 365</li><li>Multi-Faktor-Authentifizierung, Kontosperrung und Offboarding-Prozesse</li><li>Exchange Online: freigegebene Postfächer, Gruppen, Abwesenheitsnotizen und Weiterleitungen</li><li>CI/CD mit Azure DevOps, Docker und Azure Container Apps für das .NET-Projekt „Maschinen“</li>",
        "more-projects": "Weitere Unterlagen auf Anfrage",
        "more-projects-desc": "Gerne stelle ich Ihnen detaillierte Projektdokumentationen und Code-Beispiele zur Verfügung.",
        "skills-title": "Technische Kompetenzen",
        "skills-ot": "🏭 Maschinenanbindung (OT)",
        "skills-ot-list": "<li>Siemens S7</li><li>OPC DA (OPC UA: Grundlagen)</li><li>Softing dataFEED OPC Suite</li><li>ODBC</li><li>Maschinen- und Betriebsdatenerfassung (MDE/BDE)</li><li>SPS-Programmierung, TIA Portal (Grundlagen)</li>",
        "skills-db": "🗄️ Datenbanken & Daten",
        "skills-db-list": "<li>SQL Server (T-SQL, Stored Procedures, SSDT)</li><li>PostgreSQL (PL/pgSQL, Indexierung)</li><li>Relationale Datenmodellierung (DIM/FACT/LOG)</li><li>Python (pandas), ETL</li><li>Dashboards, Power BI, OEE-Analyse</li>",
        "skills-dev": "💻 Entwicklung & DevOps",
        "skills-dev-list": "<li>C#, ASP.NET Core MVC (.NET 8)</li><li>Entity Framework Core</li><li>Docker</li><li>Git, GitHub Actions</li><li>Azure DevOps (Grundlagen)</li>",
        "skills-it": "🖥️ IT-Betrieb",
        "skills-it-list": "<li>Windows 10/11</li><li>Active Directory</li><li>Microsoft 365, Entra ID, Exchange Online</li><li>ERP-Betreuung (Winweb)</li><li>1st-/2nd-Level-Support</li>",
        "lang-skills": "Sprachkenntnisse",
        "lang-de-title": "🇩🇪 Deutsch",
        "lang-de-level": "Verhandlungssicher (C1)",
        "lang-en-title": "🇬🇧 Englisch",
        "lang-en-level": "Gute Kenntnisse (B2)",
        "lang-fa-title": "🌐 Persisch",
        "lang-fa-level": "Muttersprache",
        "contact-title": "Kontakt aufnehmen",
        "contact-intro": "Ich freue mich über Ihre Nachricht, ob zu einer offenen Stelle, einem Projekt oder einfach zum Austausch.",
        "contact-cta": "Lassen Sie uns sprechen",
        "contact-cta-desc": "Ich bringe praktische Erfahrung mit Maschinendaten, Datenbanken und IT-Support mit und kann sofort starten.",
        "contact-phone": "📞 Anrufen",
        "contact-email": "✉️ E-Mail schreiben",
        "avail-title": "Standort & Verfügbarkeit",
        "avail-location": "<strong>📍 Standort:</strong> Rostock, Deutschland",
        "avail-status": "<strong>✓ Mobilität:</strong> Deutschlandweit umzugsbereit, Remote/Hybrid möglich",
        "avail-ready": "<strong>💼 Verfügbarkeit:</strong> Ab sofort",
        "avail-interests": "<strong>Interessen:</strong> Fußball, Schwimmen, kontinuierliche Weiterbildung in IT-Themen"
    },
    "en": {
        "tab-about": "About Me",
        "tab-projects": "Projects",
        "tab-skills": "Skills",
        "tab-docku": "Certificates",
        "tab-contact": "Contact",
        "about-title": "About Me",
        "about-intro": "M.Sc. graduate in Technical Computer Science (University of Rostock) with working-student experience in production IT and data engineering. My focus: <strong>machine and production data from the controller to the analysis</strong>, i.e. connecting machines via OPC, storing the data in SQL Server or PostgreSQL and analysing performance, downtime and OEE. I am looking for an entry-level position in production IT, MES, IT/OT integration or data engineering.",
        "exp-title": "Professional Experience",
        "job1-date": "November 2025 – October 2026",
        "job1-title": "Working Student | Data Engineering & Data Analysis | University of Rostock",
        "job1-list": "<li>Performance comparison of SQL query techniques (recursive CTEs and PL/pgSQL functions) in PostgreSQL on 2 real networks with up to 1.38 million nodes and 1.92 million edges, 30 repetitions per depth level</li><li>Result: PL/pgSQL functions reached path lengths of up to 1,054 edges, recursive CTEs only up to 19; validated with pgRouting and NetworkX</li>",
        "job2-date": "October 2024 – October 2025",
        "job2-title": "Working Student | Production IT, Data Analysis & IT Support (IT Department) | Rostocker Wurst- und Schinkenspezialitäten GmbH",
        "job2-list": "<li>Built automated machine data acquisition for 2 packaging machines (VARIOVAC, Siemens S7): process, state and performance data plus 94 alarm signals flow via OPC DA (Softing dataFEED) and ODBC into SQL Server, replacing paper-based recording</li><li>Designed a normalised data model with 11 tables as the basis for OEE, downtime and temperature analyses</li><li>SQL queries, stored procedures and dashboards that make machine performance and faults visible to production management</li><li>1st/2nd-level IT support (Windows, Microsoft 365), Active Directory and support of the Winweb ERP system</li>",
        "job3-date": "March 2023 – September 2024",
        "job3-title": "Working Student | IT Support (1st/2nd Level) | German Red Cross (DRK), Rostock",
        "job3-list": "<li>1st/2nd-level support for Windows and Microsoft 365 (Outlook, Teams, SharePoint), handling incidents and service requests</li><li>User training and software roll-outs to reduce recurring requests</li>",
        "job4-date": "October 2018 – December 2020",
        "job4-title": "Employee | IT & Database Support | Avangar Darak Co., IT partner of Shiraz University of Medical Sciences, Iran",
        "job4-list": "<li>Installation and configuration of SQL Server environments including automated backups, access rights and firewall rules</li><li>Support for database migrations and resolution of server and connectivity issues</li>",
        "edu-title": "Education",
        "edu1-date": "October 2023 – August 2025",
        "edu1-title": "M.Sc. Information Technology / Technical Computer Science",
        "edu1-location": "University of Rostock, Germany",
        "edu1-focus": "<strong>Master's thesis:</strong> \"Analysis techniques for increasing the operational efficiency of packaging machines\", in cooperation with Rostocker Wurst- und Schinkenspezialitäten GmbH<br><strong>Focus areas:</strong> data analysis, process automation, machine communication, database design",
        "edu2-date": "October 2012 – July 2016",
        "edu2-title": "B.Sc. Electronics Technology Engineering",
        "edu2-location": "Technical and Vocational University Shiraz, Iran",
        "edu2-focus": "<strong>Focus areas:</strong> energy data analysis, IoT communication, smart-home systems, energy efficiency<br><strong>ZAB evaluation:</strong> equivalent to a German bachelor's degree",
        "cert-title": "Certificates & Further Education",
        "cert-list": "<li><strong>SAP Analytics Cloud</strong> (SAP Learning, 03/2026): four completed learning journeys</li><li><strong>Python Pro Bootcamp & Complete SQL Bootcamp</strong> (Udemy, 08/2024)</li><li><strong>PLC programming: PLC user level 1 and 2</strong> (2019): 272 hours each, rated 90/100 and 89/100 (\"very good\")</li><li><strong>Intelligent building management</strong> (2019): 64 hours, rated 88/100</li>",
        "projects-title": "Projects",
        "proj1-title": "Master's Thesis: Analysis Software for Packaging Machines",
        "proj1-partner": "<strong>Cooperation partner:</strong> Rostocker Wurst- und Schinkenspezialitäten GmbH",
        "proj1-desc": "End-to-end solution from the machine to the analysis: machine data from Siemens S7 controllers is collected automatically, stored and analysed in a web application.",
        "proj1-list": "<li>Data acquisition from 2 packaging machines via OPC DA (Softing dataFEED OPC Suite) and ODBC into SQL Server; data model with 11 tables</li><li>Web application (ASP.NET Core, Entity Framework Core) with 9 analysis views for performance, temperature, alarms, states, faults and planning; used in production at the plant</li><li>Output calculation from PLC counters and frequency analysis of alarm and fault messages</li><li>Piecewise regression of temperature curves and a fault probability model with 5 factors, resulting in 4 recommendations, incl. migration from OPC DA to OPC UA</li><li>Technologies: Siemens S7, OPC DA, ODBC, SQL Server, C#, ASP.NET Core, Docker</li>",
        "proj1-link": "📄 View master's thesis",
        "proj1-link2": "💻 GitHub repository",
        "proj1-link3": "🌐 Live demo",
        "proj-market-title": "Market Data Pipeline & Dashboard",
        "proj-market-desc": "Automated data pipeline for financial market data: from three REST APIs via PostgreSQL to a dashboard and Power BI, with tests and scheduled runs.",
        "proj-market-list": "<li>Python ETL for 3 REST APIs (Finnhub, Alpha Vantage, Twelve Data): prices, fundamentals and 4 technical indicators</li><li>PostgreSQL with a DIM/FACT/LOG data model, idempotent upserts and 17 BI views; Power BI measures (DAX)</li><li>Automation with GitHub Actions: ETL every 30 minutes during US trading hours plus a nightly full run, weekly backup, monthly maintenance</li><li>CI with automated tests (pytest); web dashboard with pipeline monitoring, deployed with Docker</li><li>Technologies: Python, PostgreSQL, SQL, REST APIs, GitHub Actions, Docker, Power BI</li>",
        "proj-market-github": "💻 GitHub repository",
        "proj-graph-title": "Shortest-Path Analysis in Graphs (PostgreSQL)",
        "proj-graph-desc": "Comparison of SQL approaches for shortest paths in large real-world networks, focusing on performance and scalability.",
        "proj-graph-list": "<li>Datasets: Gnutella P2P network (6,301 nodes, 20,777 edges) and Texas road network (1.38 million nodes, 1.92 million edges)</li><li>BFS, DFS and bidirectional BFS as recursive CTEs and as PL/pgSQL functions, 30 repetitions per depth level</li><li>Result: CTEs are faster for paths below 5 edges, PL/pgSQL functions scale up to 1,054 edges, CTEs only up to 19</li><li>Optimisation through indexing, adjacency lists and PostgreSQL configuration; validated with pgRouting and NetworkX</li>",
        "proj-graph-link1": "📄 View project report",
        "proj-graph-link2": "💻 GitHub repository",
        "proj4-title": "Microsoft 365, Azure & DevOps",
        "proj4-desc": "Administration of a Microsoft 365 test environment (Business Standard, Entra ID P1) and a CI/CD pipeline for a .NET application on Microsoft Azure.",
        "proj4-list": "<li>User creation, licence management and role concept (least privilege) in Microsoft 365</li><li>Multi-factor authentication, account blocking and offboarding processes</li><li>Exchange Online: shared mailboxes, groups, out-of-office replies and forwarding</li><li>CI/CD with Azure DevOps, Docker and Azure Container Apps for the .NET project \"Maschinen\"</li>",
        "more-projects": "More documents on request",
        "more-projects-desc": "I am happy to provide detailed project documentation and code samples.",
        "skills-title": "Technical Skills",
        "skills-ot": "🏭 Machine Connectivity (OT)",
        "skills-ot-list": "<li>Siemens S7</li><li>OPC DA (OPC UA: basics)</li><li>Softing dataFEED OPC Suite</li><li>ODBC</li><li>Machine and production data acquisition (MDE/BDE)</li><li>PLC programming, TIA Portal (basics)</li>",
        "skills-db": "🗄️ Databases & Data",
        "skills-db-list": "<li>SQL Server (T-SQL, stored procedures, SSDT)</li><li>PostgreSQL (PL/pgSQL, indexing)</li><li>Relational data modelling (DIM/FACT/LOG)</li><li>Python (pandas), ETL</li><li>Dashboards, Power BI, OEE analysis</li>",
        "skills-dev": "💻 Development & DevOps",
        "skills-dev-list": "<li>C#, ASP.NET Core MVC (.NET 8)</li><li>Entity Framework Core</li><li>Docker</li><li>Git, GitHub Actions</li><li>Azure DevOps (basics)</li>",
        "skills-it": "🖥️ IT Operations",
        "skills-it-list": "<li>Windows 10/11</li><li>Active Directory</li><li>Microsoft 365, Entra ID, Exchange Online</li><li>ERP support (Winweb)</li><li>1st/2nd-level support</li>",
        "lang-skills": "Languages",
        "lang-de-title": "🇩🇪 German",
        "lang-de-level": "Fluent (C1)",
        "lang-en-title": "🇬🇧 English",
        "lang-en-level": "Good command (B2)",
        "lang-fa-title": "🌐 Persian",
        "lang-fa-level": "Native",
        "contact-title": "Get in Touch",
        "contact-intro": "I look forward to your message, whether about an open position, a project or simply to connect.",
        "contact-cta": "Let's talk",
        "contact-cta-desc": "I bring hands-on experience with machine data, databases and IT support and can start immediately.",
        "contact-phone": "📞 Call",
        "contact-email": "✉️ Send email",
        "avail-title": "Location & Availability",
        "avail-location": "<strong>📍 Location:</strong> Rostock, Germany",
        "avail-status": "<strong>✓ Mobility:</strong> Willing to relocate anywhere in Germany, remote/hybrid possible",
        "avail-ready": "<strong>💼 Availability:</strong> Immediately",
        "avail-interests": "<strong>Interests:</strong> Football, swimming, continuous learning in IT"
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
                key.includes('title') ||
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
