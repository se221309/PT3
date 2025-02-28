import matplotlib.pyplot as plt

# Readme content
readme_text = """
📘 Lern-App – Dokumentation & Setup-Anleitung

Diese App wurde entwickelt, um Lehrlinge und Ausbilder beim Lernen und Verwalten von Fragen zu unterstützen. 
Die Anwendung unterscheidet zwischen zwei Benutzerrollen: **Lehrling** und **Ausbilder**.

🚀 Setup & Installation

1️⃣ Voraussetzungen
- **Node.js** (empfohlen: Version 16 oder höher) → [Download hier](https://nodejs.org/)
- **Expo CLI** (muss global installiert sein) → [Installationsanleitung](https://docs.expo.dev/get-started/installation/)
- **Git** (optional, falls Repository geklont werden soll)

2️⃣ Installation der Abhängigkeiten
Falls du das Projekt als ZIP heruntergeladen hast oder von Git geklont hast, wechsle in das Projektverzeichnis:

    cd dein-projekt-ordner

Dann installiere die Abhängigkeiten mit:

    npm install

3️⃣ App starten
Die App kann mit Expo gestartet werden. Dafür gibt es folgende Befehle:

    npm start

oder

    expo start

Das öffnet die Expo Developer Console im Browser. Von dort kannst du die App auf einem Gerät oder Emulator ausführen.

📱 Empfohlene Testumgebung

Es wird **Expo Go** empfohlen, um die App direkt auf einem **Android- oder iOS-Gerät** zu testen. 

Schritte:
1. **Expo Go App installieren**
   - 📱 [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - 🍏 [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   
2. **QR-Code aus Expo Developer Console scannen**
3. **App startet direkt auf deinem Smartphone!**

👥 Benutzer & Login

Es gibt zwei Benutzerrollen:
1. **Lehrling** → Benutzername: `lehrling`, Passwort: `passwort456`
2. **Ausbilder** → Benutzername: `ausbilder`, Passwort: `passwort123`

Beim Login wird automatisch die Benutzerrolle gespeichert und der entsprechende Inhalt geladen.

🏠 Hauptfunktionen

📌 **Dashboard**
- Lehrlinge können ihre Lernfortschritte und Duell-Modi nutzen.
- Ausbilder haben Zugriff auf die **Fragenverwaltung**.

🏆 **Leaderboard**
- Erreichbar per Swipe auf dem Dashboard.
- Zeigt die aktuellen Platzierungen.

📋 **Fragenverwaltung (nur für Ausbilder)**
- Fragen können hinzugefügt werden.(noch nicht vollständig implementiert)
- Unterstützte Fragetypen: Multiple Choice, Lückentext, Texteingabe.

🔍 **Quiz-Modus**
- **Einzelspiel & Duellmodus** mit verschiedenen Fragetypen.
- **Duellmodus hat einen Timer**.
- Der Timer stoppt nach dem Beantworten der Frage.
- Falsche Antworten werden rot markiert, richtige Antworten grün.

⚙️ **Einstellungen & Profil**
- Im Drawer-Menü kann das **Profil** aufgerufen werden.
- Benutzerinformationen werden angezeigt.
- Der **UserType bleibt beim Navigieren erhalten**.

Falls es Schwierigkeiten gibt bitte melden Sie sich.




