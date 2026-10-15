# Changelog

## 1.6.2
- Include il CASiNO e gli interruttori della v1.6, mai numerati: sezione con portafoglio (saldo calcolato dai movimenti, bonus giornaliero, guadagni di gara), grafico, classifica dei saldi e targa "Il Banco"; interruttori CASiNO, Voto MVP e Voti a stelle nel pannello admin.
- Il ritardo costa 0,3 punti OVR (`LATE_PEN`, prima 1). Il bonus dei voti a stelle va da −0,2 a +0,2 (`RATE_STEP` 0,1, prima 0,25). Gli OVR si ricalcolano da soli.
- Admin: scheda "Voti a stelle" con voti ricevuti, media, distribuzione e bonus per ogni gara (mai chi ha votato), anche con l'interruttore spento.
- CASiNO: tema "tavolo da gioco" (verde acceso, oro, bordo cucito).
- CASiNO: modello di probabilità per tutti i mercati (solo funzioni pure, `buildModel`, `bmMarkets`, `bmCombo`, `payoutOf`) e parametri in `BETP`, leggibili con `cparam()` anche da `casino/params`.
- CASiNO: l'admin apre le scommesse di una gara in programma (anteprima e conferma, snapshot delle quote in `casino/markets/{gara}`, annullamento se cambia la formazione, "Chiudi e rimborsa", "Riapri"). Gli amici non possono ancora puntare.

## 1.5.0
- Pulsante "Novità": toccando lo stemma in alto, o la versione in fondo alla pagina, si apre l'elenco degli aggiornamenti. Lo stemma si accende (anello verde) quando c'è qualcosa di nuovo.
- L'elenco delle novità (`NEWS`) sta dentro `index.html`, quindi funziona anche offline. Nessuna modifica a punteggi o dati.

## 1.4.0
- Sposta giocatori: la pagina non salta più in cima (si ridisegna solo il campo e la posizione viene ripristinata).
- Squadre di qualsiasi misura: da 1 a 11 titolari più 2 "in più" per squadra, fino a 26 giocatori; moduli per ogni numero; bilanciatore veloce con "Bianchi n / Neri n"; testi dinamici.
- Votazione di 12 ore per le gare nuove (le vecchie restano a 24) e tasto admin "Riapri votazione".
- Ritardo: −1 OVR per chi arriva in ritardo (spunta nell'editor gara) e nuovo primato "Il Ritardatario".
- Cambi: motivo dell'uscita (infortunio o impegno) e rientro di chi è uscito.
- Schede giocatore con approvazione dell'admin, compleanni e retro della figurina girabile ("↻ Gira").
- Il backup include anche le richieste di scheda (`profileReq`). Nuovi percorsi del database: `profileReq/{pid}` e `players/{pid}/profile`.

## 1.3.0
- Voto anonimo ai compagni da 1 a 5 stelle (solo gare nuove, flag `rate`): la media dà un bonus o malus all'OVR da −0,5 a +0,5, dopo la chiusura della votazione. Servono almeno 3 votanti; ogni giocatore vede solo il proprio risultato, nella sezione Io.
- I voti sono salvati senza il nome del votante (`ratings` e `ratingsDone`). Il backup include i due nuovi percorsi; eliminando una gara si eliminano anche i suoi voti.

## 1.2.0
- Cambi durante la gara: giocatori "in più" (fino a 2 per squadra) e passaggi da una squadra all'altra. Campo, replay e immagini esportate restano 8 contro 8; i cambi compaiono nel tabellino e nella cronaca.
- Risultato, OVR e statistiche usano la squadra in cui il giocatore ha giocato più minuti (senza minuti, la squadra di partenza).

## 1.1.0
- Versione dell'app mostrata a fondo pagina e nel pannello admin.
- Rimosso il ruolo Portiere: i giocatori salvati come POR vengono trattati in memoria come DIF (OVR invariati).
- Autogol a −1 (prima −1,5), anche per le gare già giocate. Rimosso il +0,5 OVR per l'MVP (il titolo resta). L'OVR si ricalcola da zero.
- Capitani scelti dall'admin (campi opzionali `capW` e `capB` della gara), mostrati anche in "Prossima gara" e nel dettaglio gara programmata.
- "Backup completo" (file JSON) al posto di "Esporta Excel".

## 1.0.0
- Stato di partenza.
