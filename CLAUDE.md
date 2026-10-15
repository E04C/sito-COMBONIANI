# Sito "Stagione Comboniani 26/27"

Un unico `index.html` con CSS e JS inline, più `manifest.webmanifest`, `sw.js` e la cartella `icons/`.
I dati stanno su Firebase Realtime Database e contengono partite reali.

## Regole di lavoro (valgono per ogni aggiornamento)

1. Modifiche mirate nel file esistente. Non rigenerare né riformattare `index.html`.
2. Non cambiare `firebaseConfig`, i percorsi del database né la struttura dei dati esistenti. I nuovi campi sono solo opzionali: le gare già salvate devono funzionare senza.
3. Non scrivere mai sul database reale, nemmeno nei test. Per le verifiche usa dati inventati.
4. Interfaccia in italiano, stesso stile grafico, layout mobile e `prefers-reduced-motion` rispettati.
5. Dopo ogni modifica estrai lo script e controlla la sintassi (`node --check`). Cerca riferimenti rimasti a funzioni, costanti o ruoli rimossi.
6. Un commit per ogni modifica, con messaggio chiaro in italiano. Lavora su un branch (per questo giro `v1.1`) e fai push del branch, non del `main`: Cloudflare Pages genera l'anteprima. Il merge lo fa il proprietario.
7. Versioning: a ogni aggiornamento aumenta `APP_VERSION` (nuova funzione = secondo numero, correzione = terzo), aggiorna il nome della cache in `sw.js` con lo stesso numero (`cmb-v` + versione) e aggiungi una riga a `CHANGELOG.md`.
