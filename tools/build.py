#!/usr/bin/env python3
"""Builds index.html from the bilingual content below (DE is rendered, EN is embedded for the switch).

    python3 tools/build.py

Edit text here, not in index.html.
"""
import html
import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
URL = 'https://bikineh-projekts.github.io/about-me/'
GH = 'https://github.com/Bikineh-Projekts'
LINKEDIN = 'https://www.linkedin.com/in/bikineh'
MAIL = 'bikineh.work@gmail.com'
PHONE = '+49 157 52457684'

L = {
    'thesis_pdf': 'https://drive.google.com/file/d/1zPazGEJl9pyEbR-EI68I0HswA4bzsf3S/view?usp=sharing',
    'masch_gh': f'{GH}/Maschinen',
    'masch_demo': 'https://maschinen.onrender.com',
    'market_gh': f'{GH}/market_pipeline-Aktiv',
    'graph_gh': f'{GH}/graphsql',
    'graph_pdf': 'https://drive.google.com/file/d/1un1coiAS_82-Wfou5ntCf7Vi5YGE7xXF/view?usp=sharing',
    'docs_all': '#entfernt',
    'm365': [
        'https://drive.google.com/file/d/1ILyAC1vKqlSgPbrPonMSdryeAYAclz9P/view?usp=drive_open',
        'https://drive.google.com/file/d/1n_89GwKypf6qHycb_MNFIdBsYJHRN5VA/view',
        'https://drive.google.com/file/d/194wrOJuB2_FyaYvn5F35luBUvE0mfZZ6/view',
        'https://drive.google.com/file/d/1Fk78nUW6ehT1Qo3F62R-lHHo4fKTVamd/view',
        'https://drive.google.com/file/d/1ZKMVS3x_FH0HAXA49upNzpz1xIlKl5Gu/view',
    ],
}

# key: (Deutsch, English)
C = {
    'meta-title': ('Mohammadhossein Bikineh | IT/OT-Integration & Data Engineering',
                   'Mohammadhossein Bikineh | IT/OT Integration & Data Engineering'),
    'meta-desc': ('Portfolio von Mohammadhossein Bikineh, M.Sc. Technische Informatik: Maschinendatenerfassung mit Siemens S7 und OPC, SQL Server, PostgreSQL und Python. Rostock, deutschlandweit umzugsbereit.',
                  'Portfolio of Mohammadhossein Bikineh, M.Sc. Technical Computer Science: machine data acquisition with Siemens S7 and OPC, SQL Server, PostgreSQL and Python. Based in Rostock, open to relocating across Germany.'),
    'skip': ('Zum Inhalt springen', 'Skip to content'),
    'lang-switch': ('Sprache auf Englisch umstellen', 'Switch language to German'),
    'nav-exp': ('Erfahrung', 'Experience'), 'nav-proj': ('Projekte', 'Projects'),
    'nav-skills': ('Kompetenzen', 'Skills'), 'nav-edu': ('Ausbildung', 'Education'),
    'nav-contact': ('Kontakt', 'Contact'),

    'role-1': ('IT/OT-Integration', 'IT/OT integration'),
    'role-2': ('Produktions-IT', 'Production IT'),
    'role-3': ('Data Engineering', 'Data engineering'),
    'menu': ('Menü', 'Menu'),
    'lang-group': ('Sprache', 'Language'),
    'nav-label': ('Hauptnavigation', 'Main navigation'),
    'hero-h1': ('Maschinendaten von der Steuerung bis zur Entscheidung.',
                'Machine data, from the controller to the decision.'),
    'hero-lead': ('M.Sc. Technische Informatik. Ich verbinde Produktionsanlagen mit Datenbanken und mache aus Signalen Kennzahlen, mit denen eine Produktionsleitung arbeiten kann.',
                  'M.Sc. in Technical Computer Science. I connect production machines to databases and turn their signals into figures that production managers can work with.'),
    'btn-mail': ('E-Mail schreiben', 'Send an email'),
    'btn-proj': ('Projekte ansehen', 'See projects'),
    'status-1': ('Ab sofort verfügbar', 'Available now'),
    'status-2': ('Rostock, deutschlandweit umzugsbereit', 'Rostock, open to relocating across Germany'),
    'status-3': ('Deutsch C1, Englisch B2', 'German C1, English B2'),
    'portrait-alt': ('Porträt von Mohammadhossein Bikineh', 'Portrait of Mohammadhossein Bikineh'),

    'path-h2': ('So läuft ein Signal durch mein Masterprojekt', 'How a signal travels through my master’s project'),
    'path-hint': ('Wählen Sie eine Station.', 'Select a stage.'),
    'node-1': ('Steuerung', 'Controller'), 'node-1s': ('Siemens S7', 'Siemens S7'),
    'node-2': ('Erfassung', 'Acquisition'), 'node-2s': ('OPC DA, Softing', 'OPC DA, Softing'),
    'node-3': ('Datenbank', 'Database'), 'node-3s': ('SQL Server', 'SQL Server'),
    'node-4': ('Anwendung', 'Application'), 'node-4s': ('ASP.NET Core', 'ASP.NET Core'),
    'node-5': ('Analyse', 'Analysis'), 'node-5s': ('OEE, Fehlerdiagnose', 'OEE, fault diagnosis'),
    'stage1-value': ('2 Maschinen, 94 Alarmsignale', '2 machines, 94 alarm signals'),
    'stage1-text': ('Zwei VARIOVAC-Verpackungsmaschinen mit Siemens-S7-Steuerung liefern Prozess-, Zustands- und Leistungsdaten sowie 94 Alarmsignale.',
                    'Two VARIOVAC packaging machines with Siemens S7 controllers deliver process, state and performance data plus 94 alarm signals.'),
    'stage2-value': ('OPC DA, dann ODBC', 'OPC DA, then ODBC'),
    'stage2-text': ('Softing dataFEED liest die Werte als OPC-Tags aus den Datenbausteinen der Steuerung und schreibt sie zeitgesteuert per ODBC in die Datenbank. Rohwerte im Zehntel-Format, etwa 432, werden zu 43,2 °C.',
                    'Softing dataFEED reads the values as OPC tags from the controller’s data blocks and writes them to the database via ODBC on a schedule. Raw values in tenths, such as 432, become 43.2 °C.'),
    'stage3-value': ('11 Tabellen', '11 tables'),
    'stage3-text': ('Ein normalisiertes Datenmodell für Maschinen-, Leistungs-, Temperatur-, Alarm-, Zustands- und Störungsdaten ist die Grundlage für OEE- und Stillstandsanalysen.',
                    'A normalised data model for machine, performance, temperature, alarm, state and fault data is the basis for OEE and downtime analyses.'),
    'stage4-value': ('9 Ansichten, produktiv im Werk', '9 views, in use at the plant'),
    'stage4-text': ('Eine Webanwendung zeigt Leistung, Temperatur, Alarme, Zustände, Störungen und Planung live an. Sie ist im Werk produktiv im Einsatz.',
                    'A web application shows performance, temperature, alarms, states, faults and planning live. It is in productive use at the plant.'),
    'stage5-value': ('5 Einflussfaktoren, 4 Empfehlungen', '5 factors, 4 recommendations'),
    'stage5-text': ('Stückweise Regression der Temperaturverläufe und ein Fehlerwahrscheinlichkeitsmodell. Daraus entstanden Empfehlungen, unter anderem die Migration von OPC DA auf OPC UA.',
                    'Piecewise regression of temperature curves and a fault probability model. They led to recommendations, including the migration from OPC DA to OPC UA.'),
    'path-code': ('Code auf GitHub', 'Code on GitHub'),
    'path-demo': ('Live-Demo', 'Live demo'),
    'path-thesis': ('Masterarbeit (PDF)', 'Master’s thesis (PDF)'),

    'exp-h2': ('Erfahrung', 'Experience'),
    'job1-h': ('Wissenschaftliche Hilfskraft, Data Engineering & Datenanalyse', 'Research assistant, data engineering & data analysis'),
    'job1-org': ('Universität Rostock', 'University of Rostock'),
    'job1-list': ('<li>Performance-Vergleich von SQL-Abfragetechniken (rekursive CTEs und PL/pgSQL-Funktionen) in PostgreSQL auf 2 realen Netzwerken mit bis zu 1,38 Mio. Knoten und 1,92 Mio. Kanten, 30 Messwiederholungen je Tiefenstufe.</li><li>Ergebnis: PL/pgSQL-Funktionen erreichten Pfadlängen bis 1.054 Kanten, rekursive CTEs nur bis 19. Validierung mit pgRouting und NetworkX.</li>',
                  '<li>Performance comparison of SQL query techniques (recursive CTEs and PL/pgSQL functions) in PostgreSQL on 2 real networks with up to 1.38 million nodes and 1.92 million edges, 30 repetitions per depth level.</li><li>Result: PL/pgSQL functions reached path lengths of up to 1,054 edges, recursive CTEs only 19. Validated with pgRouting and NetworkX.</li>'),
    'job2-h': ('Werkstudent Produktions-IT, Datenanalyse & IT-Support', 'Working student, production IT, data analysis & IT support'),
    'job2-org': ('Rostocker Wurst- und Schinkenspezialitäten GmbH, EDV-Abteilung', 'Rostocker Wurst- und Schinkenspezialitäten GmbH, IT department'),
    'job2-list': ('<li>Automatisierte Maschinendatenerfassung für 2 Verpackungsmaschinen (VARIOVAC, Siemens S7): Prozess-, Zustands- und Leistungsdaten sowie 94 Alarmsignale gelangen über OPC DA und ODBC in SQL Server und ersetzen die papierbasierte Erfassung.</li><li>Normalisiertes Datenmodell mit 11 Tabellen als Grundlage für OEE-, Stillstands- und Temperaturanalysen.</li><li>SQL-Abfragen, Stored Procedures und Dashboards, die der Produktionsleitung Leistung und Störungen der Maschinen sichtbar machen.</li><li>1st-/2nd-Level-IT-Support (Windows, Microsoft 365), Active Directory und Betreuung des Warenwirtschaftssystems Winweb.</li>',
                  '<li>Automated machine data acquisition for 2 packaging machines (VARIOVAC, Siemens S7): process, state and performance data plus 94 alarm signals flow via OPC DA and ODBC into SQL Server, replacing paper-based recording.</li><li>Normalised data model with 11 tables as the basis for OEE, downtime and temperature analyses.</li><li>SQL queries, stored procedures and dashboards that make machine performance and faults visible to production management.</li><li>1st/2nd-level IT support (Windows, Microsoft 365), Active Directory and support of the Winweb ERP system.</li>'),
    'job3-h': ('Werkstudent IT-Support (1st-/2nd-Level)', 'Working student, IT support (1st/2nd level)'),
    'job3-org': ('Deutsches Rotes Kreuz (DRK), Rostock', 'German Red Cross (DRK), Rostock'),
    'job3-list': ('<li>1st-/2nd-Level-Support in Windows und Microsoft 365 (Outlook, Teams, SharePoint) sowie Bearbeitung von Störungen und Service Requests.</li><li>Anwenderschulungen und Softwareeinführungen zur Reduzierung wiederkehrender Anfragen.</li>',
                  '<li>1st/2nd-level support for Windows and Microsoft 365 (Outlook, Teams, SharePoint), handling incidents and service requests.</li><li>User training and software roll-outs to reduce recurring requests.</li>'),
    'job4-h': ('IT- und Datenbank-Support', 'IT and database support'),
    'job4-org': ('Avangar Darak Co., IT-Partner der Medizinischen Universität Shiraz, Iran', 'Avangar Darak Co., IT partner of Shiraz University of Medical Sciences, Iran'),
    'job4-list': ('<li>Installation und Konfiguration von SQL-Server-Umgebungen einschließlich automatisierter Backups, Zugriffsrechte und Firewall-Regeln.</li><li>Unterstützung bei Datenbankmigrationen sowie Behebung von Server- und Verbindungsproblemen.</li>',
                  '<li>Installation and configuration of SQL Server environments including automated backups, access rights and firewall rules.</li><li>Support for database migrations and resolution of server and connectivity issues.</li>'),

    'proj-h2': ('Projekte', 'Projects'),
    'p1-cap': ('Alarmsignale aus 2 Maschinen, live erfasst', 'alarm signals from 2 machines, captured live'),
    'p1-h': ('Masterarbeit: Analyse-Software für Verpackungsmaschinen', 'Master’s thesis: analysis software for packaging machines'),
    'p1-intro': ('In Kooperation mit der Rostocker Wurst- und Schinkenspezialitäten GmbH. Den Datenweg zeigt die Grafik oben.',
                 'In cooperation with Rostocker Wurst- und Schinkenspezialitäten GmbH. The data path is shown in the diagram above.'),
    'p1-list': ('<li>Erfassung über OPC DA (Softing dataFEED OPC Suite) und ODBC in SQL Server, Datenmodell mit 11 Tabellen.</li><li>Webanwendung mit 9 Auswertungsansichten, im Werk produktiv genutzt.</li><li>Leistungsermittlung aus SPS-Zählerständen und Häufigkeitsanalyse der Alarm- und Störungsmeldungen.</li><li>Regression der Temperaturverläufe und Fehlermodell mit 5 Einflussfaktoren, daraus 4 Empfehlungen.</li>',
                '<li>Acquisition via OPC DA (Softing dataFEED OPC Suite) and ODBC into SQL Server, data model with 11 tables.</li><li>Web application with 9 analysis views, in productive use at the plant.</li><li>Output calculation from PLC counters and frequency analysis of alarm and fault messages.</li><li>Regression of temperature curves and a fault model with 5 factors, resulting in 4 recommendations.</li>'),
    'p1-tech': ('Siemens S7, OPC DA, ODBC, SQL Server, C#, ASP.NET Core, Entity Framework Core, Docker',
                'Siemens S7, OPC DA, ODBC, SQL Server, C#, ASP.NET Core, Entity Framework Core, Docker'),
    'p2-cap': ('ETL-Takt während der US-Handelszeit, vollautomatisch', 'ETL interval during US trading hours, fully automated'),
    'p2-h': ('Market Data Pipeline & Dashboard', 'Market data pipeline & dashboard'),
    'p2-intro': ('Eine Datenpipeline, die ohne manuelles Zutun läuft: von drei REST-APIs über PostgreSQL bis zu Dashboard und Power BI.',
                 'A data pipeline that runs without manual work: from three REST APIs via PostgreSQL to a dashboard and Power BI.'),
    'p2-list': ('<li>Python-ETL für Finnhub, Alpha Vantage und Twelve Data: Kurse, Fundamentaldaten und 4 technische Indikatoren.</li><li>PostgreSQL mit DIM-/FACT-/LOG-Datenmodell, idempotenten Upserts, 17 BI-Views und Power-BI-Measures (DAX).</li><li>GitHub Actions: ETL alle 30 Minuten plus nächtlicher Volllauf, wöchentliches Backup, monatliche Wartung.</li><li>CI mit automatisierten Tests (pytest), Web-Dashboard mit Pipeline-Monitoring, Bereitstellung mit Docker.</li>',
                '<li>Python ETL for Finnhub, Alpha Vantage and Twelve Data: prices, fundamentals and 4 technical indicators.</li><li>PostgreSQL with a DIM/FACT/LOG data model, idempotent upserts, 17 BI views and Power BI measures (DAX).</li><li>GitHub Actions: ETL every 30 minutes plus a nightly full run, weekly backup, monthly maintenance.</li><li>CI with automated tests (pytest), web dashboard with pipeline monitoring, deployed with Docker.</li>'),
    'p2-tech': ('Python, PostgreSQL, SQL, REST-APIs, GitHub Actions, Docker, Power BI', 'Python, PostgreSQL, SQL, REST APIs, GitHub Actions, Docker, Power BI'),
    'p3-num': ('1.054', '1,054'),
    'p3-cap': ('Kanten Pfadlänge mit PL/pgSQL, mit rekursiven CTEs nur 19', 'edges of path length with PL/pgSQL, only 19 with recursive CTEs'),
    'p3-h': ('Kürzeste Pfade in großen Graphen mit PostgreSQL', 'Shortest paths in large graphs with PostgreSQL'),
    'p3-intro': ('Welcher SQL-Ansatz skaliert, wenn das Netz groß wird? Gemessen statt vermutet.',
                 'Which SQL approach scales once the network gets large? Measured, not assumed.'),
    'p3-list': ('<li>Gnutella-P2P-Netz (6.301 Knoten, 20.777 Kanten) und Straßennetz Texas (1,38 Mio. Knoten, 1,92 Mio. Kanten).</li><li>BFS, DFS und Bidirectional BFS als rekursive CTEs und als PL/pgSQL-Funktionen, 30 Messwiederholungen je Tiefenstufe.</li><li>CTEs sind bei Pfaden unter 5 Kanten schneller, PL/pgSQL-Funktionen skalieren deutlich weiter.</li><li>Optimierung durch Indexierung, Adjazenzlisten und PostgreSQL-Konfiguration, Validierung mit pgRouting und NetworkX.</li>',
                '<li>Gnutella P2P network (6,301 nodes, 20,777 edges) and Texas road network (1.38 million nodes, 1.92 million edges).</li><li>BFS, DFS and bidirectional BFS as recursive CTEs and as PL/pgSQL functions, 30 repetitions per depth level.</li><li>CTEs are faster for paths below 5 edges, PL/pgSQL functions scale much further.</li><li>Optimisation through indexing, adjacency lists and PostgreSQL configuration, validated with pgRouting and NetworkX.</li>'),
    'p3-report': ('Projektbericht (PDF)', 'Project report (PDF)'),
    'p4-cap': ('dokumentierte Module, von MFA bis CI/CD', 'documented modules, from MFA to CI/CD'),
    'p4-h': ('Microsoft 365, Azure & DevOps', 'Microsoft 365, Azure & DevOps'),
    'p4-intro': ('Eine Microsoft-365-Testumgebung (Business Standard, Entra ID P1) und eine CI/CD-Pipeline für das .NET-Projekt aus der Masterarbeit.',
                 'A Microsoft 365 test environment (Business Standard, Entra ID P1) and a CI/CD pipeline for the .NET project from the master’s thesis.'),
    'p4-list': ('<li>Benutzeranlage, Lizenzverwaltung und Rollenkonzept nach Least Privilege.</li><li>Multi-Faktor-Authentifizierung, Kontosperrung und Offboarding.</li><li>Exchange Online: freigegebene Postfächer, Gruppen, Abwesenheitsnotizen und Weiterleitungen.</li><li>CI/CD mit Azure DevOps, Docker und Azure Container Apps.</li>',
                '<li>User creation, licence management and a least-privilege role concept.</li><li>Multi-factor authentication, account blocking and offboarding.</li><li>Exchange Online: shared mailboxes, groups, out-of-office replies and forwarding.</li><li>CI/CD with Azure DevOps, Docker and Azure Container Apps.</li>'),
    'p4-m1': ('Modul 1: Sicherheit & MFA', 'Module 1: security & MFA'),
    'p4-m2': ('Modul 2: Benutzer & Kennwörter', 'Module 2: users & passwords'),
    'p4-m3': ('Modul 3: Lizenzen', 'Module 3: licences'),
    'p4-m4': ('Modul 4: Exchange Online', 'Module 4: Exchange Online'),
    'p4-m5': ('Modul 5: DevOps', 'Module 5: DevOps'),
    'gh': ('GitHub', 'GitHub'),

    'skills-h2': ('Kompetenzen', 'Skills'),
    'skills-p': ('Geordnet nach dem Weg, den Daten in einer Fabrik nehmen.', 'Ordered along the path data takes in a factory.'),
    'lg-solid': ('praxiserprobt', 'used in practice'),
    'lg-basic': ('Grundlagen', 'foundations'),
    'l1-h': ('Maschinenanbindung', 'Machine connectivity'), 'l1-s': ('OT-Ebene', 'OT level'),
    'l2-h': ('Datenbanken & Auswertung', 'Databases & analysis'), 'l2-s': ('Daten-Ebene', 'data level'),
    'l3-h': ('Anwendungen & Automatisierung', 'Applications & automation'), 'l3-s': ('Software-Ebene', 'software level'),
    'l4-h': ('IT-Betrieb', 'IT operations'), 'l4-s': ('Arbeitsplatz-Ebene', 'workplace level'),
    'c-mde': ('Maschinen- und Betriebsdatenerfassung', 'Machine and production data acquisition'),
    'c-sps': ('SPS-Programmierung (TIA Portal)', 'PLC programming (TIA Portal)'),
    'c-mes': ('MES-/SCADA-Konzepte', 'MES/SCADA concepts'),
    'c-model': ('Datenmodellierung (DIM/FACT/LOG)', 'Data modelling (DIM/FACT/LOG)'),
    'c-oee': ('OEE- und Stillstandsanalyse', 'OEE and downtime analysis'),
    'c-support': ('1st-/2nd-Level-Support', '1st/2nd-level support'),
    'c-erp': ('ERP-Betreuung (Winweb)', 'ERP support (Winweb)'),
    'ai-h': ('Arbeiten mit KI', 'Working with AI'),
    'ai-p1': ('Ich setze Claude und Claude Code im Alltag als Werkzeug ein: für Recherche, Code-Reviews und Automatisierung. Ein Beispiel ist meine eigene Jobsuche, die ich mit Python, GitHub und Claude Code automatisiert habe, mit Deduplizierung, Excel-Berichten und Passungsprüfung gegen meinen Lebenslauf.',
              'I use Claude and Claude Code as everyday tools for research, code reviews and automation. One example is my own job search, which I automated with Python, GitHub and Claude Code, including deduplication, Excel reports and a fit check against my CV.'),
    'ai-p2': ('Was die KI liefert, prüfe ich selbst gegen Code, Daten und Quellen. Auch diese Website ist so entstanden: ohne Framework, mit selbst gehosteter Schrift und ohne Tracking.',
              'I check what the AI produces against the code, the data and the sources myself. This website was built the same way: no framework, a self-hosted font and no tracking.'),

    'edu-h2': ('Ausbildung & Nachweise', 'Education & certificates'),
    'edu-col1': ('Studium', 'Degrees'), 'edu-col2': ('Zertifikate', 'Certificates'),
    'e1-h': ('M.Sc. Informationstechnik / Technische Informatik', 'M.Sc. Information Technology / Technical Computer Science'),
    'e1-p': ('Universität Rostock. Masterarbeit: „Analysetechniken zur Steigerung der Betriebseffizienz von Verpackungsmaschinen“.',
             'University of Rostock. Thesis: "Analysis techniques for increasing the operational efficiency of packaging machines".'),
    'e1-f': ('Schwerpunkte: Datenanalyse, Prozessautomatisierung, Maschinenkommunikation, Datenbankdesign.',
             'Focus: data analysis, process automation, machine communication, database design.'),
    'e2-h': ('B.Sc. Ingenieurwesen für Elektroniktechnologie', 'B.Sc. Electronics Technology Engineering'),
    'e2-p': ('Technische und Berufliche Universität Shiraz, Iran. Laut ZAB-Zeugnisbewertung gleichwertig mit einem deutschen Bachelor.',
             'Technical and Vocational University Shiraz, Iran. Rated equivalent to a German bachelor’s degree by the ZAB.'),
    'e2-f': ('Schwerpunkte: Energiedatenanalyse, IoT-Kommunikation, Smart-Home-Systeme.',
             'Focus: energy data analysis, IoT communication, smart-home systems.'),
    'z1-h': ('SAP Analytics Cloud', 'SAP Analytics Cloud'),
    'z1-p': ('SAP Learning, vier abgeschlossene Learning Journeys.', 'SAP Learning, four completed learning journeys.'),
    'z2-h': ('Python Pro Bootcamp & Complete SQL Bootcamp', 'Python Pro Bootcamp & Complete SQL Bootcamp'),
    'z2-p': ('Udemy.', 'Udemy.'),
    'z3-h': ('SPS-Anwender 1. und 2. Grades', 'PLC user, level 1 and 2'),
    'z3-p': ('Je 272 Stunden, Bewertung 90/100 und 89/100 („sehr gut“).', '272 hours each, rated 90/100 and 89/100 ("very good").'),
    'z4-h': ('Intelligentes Gebäudemanagement', 'Intelligent building management'),
    'z4-p': ('64 Stunden, Bewertung 88/100.', '64 hours, rated 88/100.'),
    'docs': ('Alle Zeugnisse und Abschlussdokumente (PDF)', 'All references and degree documents (PDF)'),

    'contact-h2': ('Kontakt', 'Contact'),
    'contact-p': ('Am schnellsten erreichen Sie mich per E-Mail.', 'Email is the fastest way to reach me.'),
    'ch-phone': ('Telefon', 'Phone'),
    'vcard': ('Kontakt speichern (vCard)', 'Save contact (vCard)'),
    'avail-h': ('Verfügbarkeit', 'Availability'),
    'avail-1': ('Ab sofort, in Vollzeit.', 'Immediately, full-time.'),
    'avail-2': ('Wohnort Rostock, deutschlandweit umzugsbereit, Remote oder Hybrid möglich.', 'Based in Rostock, open to relocating anywhere in Germany, remote or hybrid possible.'),
    'avail-3': ('Deutsch C1, Englisch B2, Persisch Muttersprache.', 'German C1, English B2, Persian native.'),
    'foot-1': ('© 2026 Mohammadhossein Bikineh. Von Hand gebaut mit HTML, CSS und JavaScript, mit Unterstützung von Claude Code. Kein Framework, keine Cookies, kein Tracking.',
               '© 2026 Mohammadhossein Bikineh. Hand-built with HTML, CSS and JavaScript, with help from Claude Code. No framework, no cookies, no tracking.'),
    'foot-2': ('Schrift: Archivo, SIL Open Font License, selbst gehostet. Stand: November 2026.',
               'Typeface: Archivo, SIL Open Font License, self-hosted. Updated November 2026.'),
}

DE = {k: v[0] for k, v in C.items()}
EN = {k: v[1] for k, v in C.items()}


def tx(key, tag='span', cls=None, **attrs):
    """Text element bound to a key (rendered in German)."""
    a = ''.join(f' {k.replace("_", "-")}="{html.escape(v)}"' for k, v in attrs.items())
    c = f' class="{cls}"' if cls else ''
    return f'<{tag}{c}{a} data-i18n="{key}">{html.escape(DE[key])}</{tag}>'


def hx(key, tag='div', cls=None):
    """HTML element bound to a key."""
    c = f' class="{cls}"' if cls else ''
    return f'<{tag}{c} data-i18n-html="{key}">{DE[key]}</{tag}>'


def ext(href, inner):
    return f'<a href="{href}" target="_blank" rel="noopener">{inner}</a>'


NODES = [('S7', 1), ('OPC', 2), ('SQL', 3), ('.NET', 4), ('OEE', 5)]
nodes_html = '\n'.join(
    f'''          <button class="node" type="button" aria-pressed="false" aria-controls="readout">
            <span class="dot" aria-hidden="true">{lbl}</span>
            {tx(f'node-{n}', cls='name')}
            {tx(f'node-{n}s', cls='sub')}
          </button>''' for lbl, n in NODES)

JOBS = [('11/2025 – 10/2026', 1, ''), ('10/2024 – 10/2025', 2, ' key'), ('03/2023 – 09/2024', 3, ''), ('10/2018 – 12/2020', 4, '')]
jobs_html = '\n'.join(
    f'''        <li class="job{key}">
          <time>{d}</time>
          <div>
            {tx(f'job{n}-h', 'h3')}
            {tx(f'job{n}-org', 'p', 'org')}
            {hx(f'job{n}-list', 'ul')}
          </div>
        </li>''' for d, n, key in JOBS)


def chips(items):
    out = []
    for it in items:
        basic = it.startswith('~')
        it = it.lstrip('~')
        cls = ' class="basic"' if basic else ''
        if it.startswith('@'):
            out.append(f'<li{cls} data-i18n="{it[1:]}">{html.escape(DE[it[1:]])}</li>')
        else:
            out.append(f'<li{cls}>{html.escape(it)}</li>')
    return '<ul class="chips">' + ''.join(out) + '</ul>'


LAYERS = [
    (1, ['Siemens S7', 'OPC DA', 'Softing dataFEED OPC Suite', 'ODBC', '@c-mde', '~OPC UA', '~@c-sps', '~@c-mes']),
    (2, ['SQL Server (T-SQL, Stored Procedures, SSDT)', 'PostgreSQL (PL/pgSQL)', '@c-model', 'Python (pandas)', 'ETL', 'Dashboards', '@c-oee', '~Power BI']),
    (3, ['C#', 'ASP.NET Core MVC (.NET 8)', 'Entity Framework Core', 'Docker', 'Git', 'GitHub Actions', '~Azure DevOps']),
    (4, ['Windows 10/11', 'Active Directory', 'Microsoft 365', 'Entra ID', 'Exchange Online', '@c-erp', '@c-support']),
]
layers_html = '\n'.join(
    f'''        <div class="layer">
          <h3>{tx(f'l{n}-h')}<small data-i18n="l{n}-s">{html.escape(DE[f'l{n}-s'])}</small></h3>
          {chips(items)}
        </div>''' for n, items in LAYERS)


def project(num_html, cap, h, intro, lst, links, tech=None):
    tech_html = f'\n            <p class="tech">{tx(tech)}</p>' if tech else ''
    return f'''      <article class="proj">
        <p class="figure">{num_html}{tx(cap, cls='cap')}</p>
        <div>
          {tx(h, 'h3')}
          {tx(intro, 'p', 'intro')}
          {hx(lst, 'ul')}{tech_html}
          <p class="links">{links}</p>
        </div>
      </article>'''


projects_html = '\n'.join([
    project('<span class="num">94</span>', 'p1-cap', 'p1-h', 'p1-intro', 'p1-list',
            ext(L['masch_gh'], tx('gh')) + ext(L['masch_demo'], tx('path-demo')) + ext(L['thesis_pdf'], tx('path-thesis')), 'p1-tech'),
    project('<span class="num">30 min</span>', 'p2-cap', 'p2-h', 'p2-intro', 'p2-list', ext(L['market_gh'], tx('gh')), 'p2-tech'),
    project(f'<span class="num" data-i18n="p3-num">{DE["p3-num"]}</span>', 'p3-cap', 'p3-h', 'p3-intro', 'p3-list',
            ext(L['graph_gh'], tx('gh')) + ext(L['graph_pdf'], tx('p3-report'))),
    project('<span class="num">5</span>', 'p4-cap', 'p4-h', 'p4-intro', 'p4-list',
            ''.join(ext(u, tx(f'p4-m{i + 1}')) for i, u in enumerate(L['m365']))),
])

EDU = '\n'.join(f'''          <div class="entry">
            <time>{d}</time>
            {tx(f'{k}-h', 'h3')}
            {tx(f'{k}-p', 'p')}
            {tx(f'{k}-f', 'p') if f'{k}-f' in DE else ''}
          </div>''' for d, k in [('03/2023 – 08/2025', 'e1'), ('10/2012 – 07/2016', 'e2')])
CERT = '\n'.join(f'''          <div class="entry">
            <time>{d}</time>
            {tx(f'{k}-h', 'h3')}
            {tx(f'{k}-p', 'p')}
          </div>''' for d, k in [('03/2026', 'z1'), ('08/2024', 'z2'), ('2019', 'z3'), ('2019', 'z4')])

LD = {
    '@context': 'https://schema.org', '@type': 'Person', 'name': 'Mohammadhossein Bikineh',
    'jobTitle': 'IT/OT-Integration & Data Engineering', 'email': f'mailto:{MAIL}', 'url': URL,
    'image': URL + 'assets/portrait.jpg', 'sameAs': [LINKEDIN, GH],
    'address': {'@type': 'PostalAddress', 'addressLocality': 'Rostock', 'addressCountry': 'DE'},
    'alumniOf': {'@type': 'CollegeOrUniversity', 'name': 'Universität Rostock'},
    'knowsLanguage': ['de', 'en', 'fa'],
    'knowsAbout': ['Siemens S7', 'OPC', 'SQL Server', 'PostgreSQL', 'Python', 'ETL', 'MES', 'OEE', 'C#', 'ASP.NET Core'],
}

PAGE = f'''<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{html.escape(DE['meta-title'])}</title>
  <meta name="description" content="{html.escape(DE['meta-desc'])}" data-i18n-attr="content:meta-desc">
  <link rel="canonical" href="{URL}">
  <meta name="theme-color" content="#e8ecef" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#131b23" media="(prefers-color-scheme: dark)">
  <meta property="og:type" content="profile">
  <meta property="og:title" content="{html.escape(DE['meta-title'])}">
  <meta property="og:description" content="{html.escape(DE['meta-desc'])}">
  <meta property="og:url" content="{URL}">
  <meta property="og:image" content="{URL}assets/portrait.jpg">
  <link rel="icon" href="assets/icon.svg" type="image/svg+xml">
  <link rel="preload" href="assets/archivo-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="assets/site.css">
  <script type="application/ld+json">{json.dumps(LD, ensure_ascii=False)}</script>
</head>
<body>
  <a class="skip" href="#main" data-i18n="skip">{DE['skip']}</a>

  <header class="bar">
    <div class="wrap">
      <a class="brand" href="#top"><img src="assets/icon.svg" width="30" height="30" alt=""><span class="brand-full">Mohammadhossein Bikineh</span><span class="brand-short">M. Bikineh</span></a>
      <nav class="nav" id="menu" aria-label="{DE['nav-label']}" data-i18n-attr="aria-label:nav-label">
        <a href="#experience" data-i18n="nav-exp">{DE['nav-exp']}</a>
        <a href="#projects" data-i18n="nav-proj">{DE['nav-proj']}</a>
        <a href="#skills" data-i18n="nav-skills">{DE['nav-skills']}</a>
        <a href="#education" data-i18n="nav-edu">{DE['nav-edu']}</a>
        <a class="nav-contact" href="#contact" data-i18n="nav-contact">{DE['nav-contact']}</a>
      </nav>
      <div class="bar-end">
        <div class="seg" role="group" aria-label="{DE['lang-group']}" data-i18n-attr="aria-label:lang-group">
          <button type="button" data-lang="de" aria-pressed="true">DE</button><button type="button" data-lang="en" aria-pressed="false">EN</button>
        </div>
        <a class="btn btn-primary btn-sm cta-top" href="#contact" data-i18n="nav-contact">{DE['nav-contact']}</a>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu" aria-label="{DE['menu']}" data-i18n-attr="aria-label:menu"><span class="burger" aria-hidden="true"></span></button>
      </div>
    </div>
  </header>

  <main id="main">
    <section class="hero" id="top">
      <div class="wrap">
        <div class="hero-card">
          <figure class="portrait">
            <picture>
              <source srcset="assets/portrait.webp" type="image/webp">
              <img src="assets/portrait.jpg" width="480" height="480" alt="{DE['portrait-alt']}" data-i18n-attr="alt:portrait-alt" fetchpriority="high">
            </picture>
            <figcaption class="avail"><span class="pulse" aria-hidden="true"></span><span data-i18n="status-1">{DE['status-1']}</span></figcaption>
          </figure>
          <div class="hero-text">
            <h1 class="name">Mohammadhossein Bikineh</h1>
            <ul class="roles">
              <li data-i18n="role-1">{DE['role-1']}</li><li data-i18n="role-2">{DE['role-2']}</li><li data-i18n="role-3">{DE['role-3']}</li>
            </ul>
            {tx('hero-h1', 'p', 'tagline')}
            {hx('hero-lead', 'p', 'lead')}
            <div class="actions">
              <a class="btn btn-primary" href="mailto:{MAIL}" data-i18n="btn-mail">{DE['btn-mail']}</a>
              <a class="btn btn-quiet" href="#projects" data-i18n="btn-proj">{DE['btn-proj']}</a>
            </div>
            <ul class="status">
              <li class="on only-mobile" data-i18n="status-1">{DE['status-1']}</li>
              <li data-i18n="status-2">{DE['status-2']}</li>
              <li data-i18n="status-3">{DE['status-3']}</li>
            </ul>
          </div>
        </div>

        <div class="path" aria-labelledby="path-h2">
          <div class="path-frame">
            <div class="path-head">
              <h2 id="path-h2" data-i18n="path-h2">{DE['path-h2']}</h2>
              {tx('path-hint', 'p')}
            </div>
            <div class="line">
              <span class="packet" aria-hidden="true"></span>
{nodes_html}
            </div>
            <div class="readout" id="readout" aria-live="polite">
              <div class="value" id="readout-value">{DE['stage1-value']}</div>
              <p class="text" id="readout-text">{DE['stage1-text']}</p>
            </div>
            <p class="links">{ext(L['masch_gh'], tx('path-code'))}{ext(L['masch_demo'], tx('path-demo'))}{ext(L['thesis_pdf'], tx('path-thesis'))}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="block" id="experience" aria-labelledby="exp-h2">
      <div class="wrap">
        <div class="block-head"><h2 id="exp-h2" data-i18n="exp-h2">{DE['exp-h2']}</h2></div>
        <ol class="timeline">
{jobs_html}
        </ol>
      </div>
    </section>

    <section class="block" id="projects" aria-labelledby="proj-h2">
      <div class="wrap">
        <div class="block-head"><h2 id="proj-h2" data-i18n="proj-h2">{DE['proj-h2']}</h2></div>
{projects_html}
      </div>
    </section>

    <section class="block" id="skills" aria-labelledby="skills-h2">
      <div class="wrap">
        <div class="block-head">
          <h2 id="skills-h2" data-i18n="skills-h2">{DE['skills-h2']}</h2>
          {tx('skills-p', 'p')}
        </div>
        <div class="layers">
{layers_html}
        </div>
        <p class="legend"><span data-i18n="lg-solid">{DE['lg-solid']}</span><span class="basic" data-i18n="lg-basic">{DE['lg-basic']}</span></p>
        <div class="ai">
          {tx('ai-h', 'h3')}
          <div>
            {tx('ai-p1', 'p')}
            {tx('ai-p2', 'p')}
          </div>
        </div>
      </div>
    </section>

    <section class="block" id="education" aria-labelledby="edu-h2">
      <div class="wrap">
        <div class="block-head"><h2 id="edu-h2" data-i18n="edu-h2">{DE['edu-h2']}</h2></div>
        <div class="split">
          <div>
            {tx('edu-col1', 'h3', 'col')}
{EDU}
          </div>
          <div>
            {tx('edu-col2', 'h3', 'col')}
{CERT}
          </div>
        </div>
        <p class="docs links">{ext(L['docs_all'], tx('docs'))}</p>
      </div>
    </section>

    <section class="block contact" id="contact" aria-labelledby="contact-h2">
      <div class="wrap">
        <div class="block-head">
          <h2 id="contact-h2" data-i18n="contact-h2">{DE['contact-h2']}</h2>
          {tx('contact-p', 'p')}
        </div>
        <div class="contact-grid">
          <div>
            <a class="mail" href="mailto:{MAIL}">{MAIL}</a>
            <ul class="channels">
              <li>{tx('ch-phone')}: <a href="tel:+4915752457684">{PHONE}</a></li>
              <li>{ext(LINKEDIN, 'LinkedIn')}</li>
              <li>{ext(GH, 'GitHub')}</li>
            </ul>
            <button class="btn btn-quiet vcard" id="vcard" type="button" data-i18n="vcard">{DE['vcard']}</button>
          </div>
          <div>
            {tx('avail-h', 'h3', 'col')}
            {tx('avail-1', 'p')}
            {tx('avail-2', 'p')}
            {tx('avail-3', 'p')}
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="wrap">
      {tx('foot-1', 'p')}
      {tx('foot-2', 'p')}
    </div>
  </footer>

  <script type="application/json" id="i18n">{json.dumps({'de': DE, 'en': EN}, ensure_ascii=False)}</script>
  <script src="assets/site.js" defer></script>
</body>
</html>
'''

(ROOT / 'index.html').write_text(PAGE, encoding='utf-8')
print('index.html written,', len(PAGE) // 1024, 'KB,', len(C), 'keys')
