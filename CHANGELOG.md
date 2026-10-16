# Changelog

## 1.7.6
- Animazione d'ingresso rifatta in modo più naturale: lettere che salgono una dopo l'altra, pallone con scia, schegge irregolari con fisica (spinta che si smorza, gravità, rotazioni 3D), scintille, lampo e onda d'urto più morbidi. Niente filtri sulle singole schegge, così i bordi dei tagli sono puliti. Con "riduci animazioni" resta solo la scritta ferma. Solo interfaccia.

## 1.7.5
- Nuova animazione d'ingresso: la scritta Comboniani (arancione con contorno nero) appare e viene frantumata da un pallone calciato fortissimo, poi si apre l'app. Una volta per sessione, tocca per saltare; con "riduci animazioni" resta solo la scritta ferma. Tolte le spade e il sottotitolo. Solo interfaccia.

## 1.7.4
- Classifica: il podio dei primi 3 c'è in tutte le viste (nelle viste a conteggio entra solo chi ha almeno 1).
- "Premi stagionali": tasto dorato tra la prossima gara e la classifica; sul computer la pagina è a colonna unica centrata (niente colonna vuota a destra).
- Sottosezioni di Trofei e Partite: tasti più grandi e arancioni (nuova classe `sub-tab`; le schede del CASiNO non cambiano); sul computer il resoconto e i tasti sono centrati con larghezza contenuta.
- Solo interfaccia: nessuna modifica a dati, punteggi o codici.

## 1.7.3
- Codice giocatore: ogni giocatore può avere un codice numerico di 4–6 cifre, all'inizio nessuno. Primo arrivato: chi sceglie per primo un giocatore senza codice lo imposta; poi serve il codice per sceglierlo, e resta salvato sul telefono (`cmb_pk`). Nuovo percorso del database `playerKeys/{pid}` = `{ s, h, v }` (salt e hash PBKDF2-SHA256, mai il codice in chiaro); campo opzionale, i dati esistenti funzionano senza. Le chiavi NON fanno parte del backup.
- Voti MVP, voti a stelle, richiesta scheda e ogni azione "come giocatore" richiedono il codice verificato su quel dispositivo (`myPid()`). Regola ferma: i record `ratings` restano `{ to, s }` con id casuale, senza votante né orario; il codice decide solo chi può votare.
- Blocco di 5 minuti dopo 5 tentativi sbagliati (solo nell'app, in `localStorage`).
- Io: "Gestisci account" (giocatore, codice attuale, nuovo codice, Salva, Esci); per l'Ospite solo il tasto per scegliere un giocatore. Schermata di ingresso invariata (elenco giocatori e Ospite).
- Admin: "Codici giocatori" con "Azzera codice" per ogni giocatore (si vede solo se c'è un codice, mai il codice) e avviso "controlla i voti recenti". Un telefono il cui codice viene azzerato o cambiato deve rifare l'accesso.
- Migrazione: alla prima apertura ogni telefono dimentica il giocatore scelto (`cmb_me`) e rifà l'accesso; gli ospiti restano ospiti.
- Limiti: il codice protegge dagli scherzi, non da chi sa leggere il database (l'hash di un codice a poche cifre si può indovinare); il blocco vale solo nell'app; gli amici non devono usare codici che usano altrove. Servono le regole di Firebase per il percorso `playerKeys` (lettura e scrittura).

## 1.7.2
- Grafica e struttura, nessuna modifica a punteggi, OVR o dati. Classifica: tendina con Generale, Capocannoniere, Assist man, % vittorie, Sconfitte, Autogol, ognuna con le sue colonne (niente scorrimento laterale a 390 px); tasto Filtri (ricerca, solo chi ha giocato, PG minimo); tolti l'hero dell'ultima gara e i riquadri Scarpa d'Oro / Miglior assist-man; nuovo tasto "Premi stagionali" verso Trofei.
- Trofei: sottosezioni Targhe e Trofei storici.
- Partite: tendina della giornata e selettore Resoconto / Formazioni; marcatori con minuto, assist e "(aut.)" sotto ogni squadra (le gare senza sequenza dei gol restano senza minuti); liste squadre sotto Formazioni; replay ed esportazioni sotto entrambe le voci. Rimossa la cronaca (resta la sezione Cambi).
- Indicatore di connessione con scritta e senza aspetto da pulsante (etichette: Live, Attesa…, Offline, Errore, Locale).
- Retro della figurina: statistiche, targhe, compagno ideale e bestia nera (dati già calcolati, sola lettura); pulsanti sotto la carta sempre visibili.
- Nuovi stati interni solo di interfaccia (`ui.cView`, `ui.cf`, `ui.tTab`, `ui.mTab`): nessun nuovo campo nel database.

## 1.7.1
- Corretto: nell'editor delle formazioni, toccando un giocatore compariva "CASiNO sospeso" (o "Scommesse chiuse") e non si selezionava nessuno. Il Monte MVP usava lo stesso attributo `data-pool` dei gettoni dei giocatori; ora usa `data-mpool`. Errore presente dalla 1.6.2.

## 1.7.0
- Negozio del CASiNO (dietro l'interruttore CASiNO): catalogo di oggetti cosmetici con nomi e disegni originali, acquisti in `casino/shop/buys` (prezzo e durata congelati, scadenza a 30 giorni dalla data d'acquisto, voce `shop` nel registro, saldo mai negativo), un oggetto attivo per categoria (`casino/shop/active`), prezzi, durata e disponibilità modificabili dall'admin (`casino/shop/cfg`).
- Oggetti: colore, effetto e stemma del nome, riga in classifica, cornici e ologrammi alternativi della figurina, scia dei gol, esultanza e set di icone di gol e assist nel replay, cronaca e tabellino. Solo estetica: nessun effetto su OVR, punteggi, classifica, quote o scommesse.
- Oggetti per merito (cornice d'oro, nome Veggente, stemma Bersaglio, scia Esplosiva) validi finché si detiene Il Banco, Il Profeta, Il Colpaccio o Il Kamikaze.
- Aste dei numeri di maglia gestite dall'admin (`casino/auctions`): offerte intere e crescenti, patate dell'offerta in testa trattenute (derivate, non spendibili altrove), addebito alla chiusura, annullamento con rimborso, numero unico per 30 giorni, mostrato come #N accanto al nome.
- Token formazione simbolico (nessun rimborso, elenco per l'admin con "Segna come usato").
- Il Banco e la classifica dei saldi non contano le spese cosmetiche per Il Banco.
- Messaggi all'admin: nuovo interruttore "Messaggi" (spento di default), pulsante ✉️, limiti anti-spam (280 caratteri, 3 al giorno, 30 secondi), zona "Richieste" in Admin con stati Nuovo/Letto/Risolto, archivio ed eliminazione (`messages`). Il backup include `messages`.

## 1.6.2
- Include il CASiNO e gli interruttori della v1.6, mai numerati: sezione con portafoglio (saldo calcolato dai movimenti, bonus giornaliero, guadagni di gara), grafico, classifica dei saldi e targa "Il Banco"; interruttori CASiNO, Voto MVP e Voti a stelle nel pannello admin.
- Il ritardo costa 0,3 punti OVR (`LATE_PEN`, prima 1). Il bonus dei voti a stelle va da −0,2 a +0,2 (`RATE_STEP` 0,1, prima 0,25). Gli OVR si ricalcolano da soli.
- Admin: scheda "Voti a stelle" con voti ricevuti, media, distribuzione e bonus per ogni gara (mai chi ha votato), anche con l'interruttore spento.
- CASiNO: tema "tavolo da gioco" (verde acceso, oro, bordo cucito).
- CASiNO: modello di probabilità per tutti i mercati (solo funzioni pure, `buildModel`, `bmMarkets`, `bmCombo`, `payoutOf`) e parametri in `BETP`, leggibili con `cparam()` anche da `casino/params`.
- CASiNO: l'admin apre le scommesse di una gara in programma (anteprima e conferma, snapshot delle quote in `casino/markets/{gara}`, annullamento se cambia la formazione, "Chiudi e rimborsa", "Riapri").
- CASiNO: scheda Scommesse con schedina (singole e combo fino a 3 selezioni di una gara, puntata minima `ceil(1/(quota−1))`, tetto di vincita `WIN_CAP`), divieto di puntare su sé stessi, giocate visibili a tutti.
- CASiNO: Monte MVP (puntata fissa, si divide il monte) e sfide create dall'admin (`casino/pools`, `casino/duels`), rimborsati con il voto MVP spento o se la sfida è annullata.
- CASiNO: liquidazione di ogni mercato (`settleLeg`, `settleBet`), movimenti del portafoglio per puntate e vincite, scheda "Storico e premi", admin "Annulla scommessa" e "Rettifica saldo" (`casino/log`, `casino/adj`).
- Nuova targa "Il Profeta" e primati "Il Colpaccio" e "Il Kamikaze" (in coda a `REC_KEYS`, nascosti a CASiNO spento senza spostare le altre chiavi). Eliminando una gara spariscono anche i suoi mercati, scommesse, monti e sfide.

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
