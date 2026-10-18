# Changelog

## 1.9.3
- Campo TOTW/TOTM: ogni giocatore è la stessa figurina della griglia Giocatori (cornice, targhetta overall e ruolo, nome), rimpicciolita in scala (`twFit`); al posto delle cinque statistiche ci sono media e presenze, e le targhe stanno sotto la carta. TOTW arancio e viola; TOTM con la nuova cornice bianca e oro (`.mfig.totm`), usata solo nella scheda TOTM.
- Tolte le vecchie figurine a scudo del campo.

## 1.9.2
- Figurine del campo TOTW/TOTM: il ruolo è più piccolo e, anche con due ruoli (es. AD/CC), non è mai più largo dell'overall.
- Sotto la media di ogni giocatore compaiono le presenze nel periodo (campo opzionale `np` nei team salvati; le bozze vecchie non lo hanno e non lo mostrano). La soglia del TOTM resta di 3 presenze: verificato che chi ne ha esattamente 3 entra e chi ne ha 2 no.
- Campo un po' più alto per far respirare le righe.

## 1.9.1
- Nuova scheda «TOTM» in Trofei: Team of the Month, stessa formazione 2-4-2 e stesso punteggio del TOTW (media a gara), calcolato sul mese di calendario secondo la data delle gare, con almeno 3 presenze. Stesso flusso admin: «Ricalcola» (bozza visibile solo all'admin) e «Mostra a tutti»; frecce per scorrere i mesi; nel mese in corso il team è provvisorio.
- Dati nuovi e opzionali: `totm/draft/{AAAA-MM}` e `totm/pub/{AAAA-MM}`, stessa struttura di `totw`. **Le regole di Firebase devono permettere il percorso `totm`.**
- La grafica bianca e oro vale solo nella scheda TOTM: le figurine dei giocatori non cambiano. Le quattro schede dei Trofei si stringono su telefono per stare in una riga.

## 1.9.0
- Nuova scheda «TOTW» in Trofei: Team of the Week, 8 giocatori in 2-4-2 senza portiere, almeno 2 DIF e 2 CEN, gli altri i migliori. Punteggio di gara = rendimento personale (gol e assist pesati dal ruolo, MVP, voto dei compagni, meno autogol e ritardo); la vittoria e la sconfitta servono solo da spareggio. Settimana da lunedì a domenica secondo la data della gara (senza data, quella di inserimento), media sulle gare giocate, minimo 1 presenza; settimana senza gare = team vuoto.
- Admin: «Ricalcola» salva una bozza che vede solo l'admin, «Mostra a tutti» la pubblica; frecce per scorrere le settimane (l'admin può ricalcolare anche quelle passate).
- Dati nuovi e opzionali: `totw/draft/{lunedì}` e `totw/pub/{lunedì}` = `{ d, m, f, sc, n, t }` (id per riga separati da virgola, punteggi, gare, orario). **Le regole di Firebase devono permettere il percorso `totw`**; se lo rifiutano l'app funziona e l'admin vede l'avviso nella scheda.
- Il team pubblicato più recente dà la figurina speciale arancio e viola (overlay SVG statico, nessuna animazione) nella griglia Giocatori e il bollino «TOTW» nella figurina aperta; chi non è più nel team torna normale alla pubblicazione successiva.

## 1.8.3
- Tolto del tutto il ruolo JOLLY: non c'è più nel form giocatore, nelle etichette, nei filtri, nell'import Excel (un ruolo sconosciuto diventa CEN), nei moltiplicatori e nell'ordine dei ruoli. Un giocatore con un ruolo non valido è trattato come CEN (moltiplicatore 1, come prima il Jolly): nessun numero cambia. Nessun giocatore era Jolly.

## 1.8.2
- «Best Comeback» e «Il Downfall» ricalcolati: contano i punti di OVR guadagnati (persi) in gare consecutive senza che l'OVR si muova nel verso opposto. Prima si misurava dal punto più basso al picco successivo anche con cali in mezzo. Una gara con variazione nulla (es. sconfitta a OVR al minimo o senza perdita) non interrompe la serie; una che muove l'OVR al contrario sì (`swing` in `computeRecords`).
- Primati storici: a parità in cima il primato resta a chi lo teneva già, cioè a chi lo ha raggiunto per primo (`recPick`); cambia mano solo se qualcuno supera davvero il detentore. Il detentore precedente si legge dalla storia gara per gara (`trophyHistory` ora salva `hold` per passo); fuori dalla storia si consulta l'ultimo passo, solo se c'è un pareggio in cima. I primati «di evento» (manita, mida, ecc.) erano già a favore di chi arriva prima. Nessun dato o percorso del database cambia.
- Possibile effetto alla prima apertura: dove i detentori cambiano per le nuove regole, chi apre l'app vede il solito avviso di primato cambiato.

## 1.8.1
- Nuova targa «Inarrestabile» (`winRun` su `hist`): la serie più lunga di vittorie di fila in stagione, da 2 in su; il pareggio la interrompe. Parità: serie in corso, poi più vittorie. Come le altre targhe, massimo 2 a testa.
- Figurine Oro e Argento con cornice sottile e pulita (oro caldo con doppia linea, argento freddo con una linea); il bordo è circa la metà di prima e c'è una riga libera in fondo per il tasto di rotazione.
- Tolta la riga tra foto e statistiche: la fascia sfuma nella foto (maschera sul fondo della fascia).
- «Vedi bacheca» dal popup dei primati apre i Trofei storici (prima apriva le Targhe) e scende al primo primato cambiato; il popup si scorre con «Avanti ›» e mostra «N di M primati cambiati».
- Figurina girata: il retro non si inclina più (`.tilt.on-holo` solo sul fronte) e la faccia nascosta sparisce a metà giro, così non sfarfalla. Solo interfaccia.

## 1.8.0
- Figurine della griglia rifatte, una cornice per livello (overlay SVG statico sopra la carta, nessuna animazione, nessun filtro): Diamante cristallo sfaccettato con fascia low-poly e gemma, Oro telaio dorato a gradini con barre sui lati, Argento poche linee argentate, Bronzo una sola linea. Il bronzo (`--tier`) è ora un vero bronzo e non più arancione, anche nelle altre schermate.
- Ruoli sulla carta scelti dall'admin: nel form «Modifica giocatore», sotto il ruolo generale (ATT/CEN/DIF/JOLLY, che decide il moltiplicatore e non cambia), si scelgono al massimo due sigle tra TS, TD, DC, CC, AD, AS, ST (campo opzionale `players/{id}/cardPos`, es. `AD/CC`). Compaiono sotto l'overall nella carta della griglia e nella figurina aperta; senza sigle resta il ruolo generico. Il «Ruolo preciso» della scheda giocatore non influisce più sulla carta.
- Cinque statistiche centrate: gol, assist, presenze, vittorie, sconfitte. Solo interfaccia: nessun dato o percorso del database cambia.

## 1.7.10
- Corretto: all'apertura dell'app il giocatore scelto veniva dimenticato (bug dalla 1.7.3). La prima schermata si disegna prima che il database sia collegato (`db` ancora `null`) e `watchMyKey` lo scambiava per modalità locale: non trovava il codice e scollegava il giocatore a ogni avvio. Ora la copia locale dei codici si controlla solo con `localMode`.
- Accesso admin ricordato su questo dispositivo per 30 giorni (`cmb_admin_until` in `localStorage`), finché non si esce o il PIN cambia (`cmb_admin_sig`: da un altro telefono serve rifare l'accesso; dal telefono che lo cambia resta admin). Chi perde il telefono: cambiare il PIN da Admin.

## 1.7.9
- Carte Oro e Diamante: tolto del tutto il riflesso olografico (griglia, figurina aperta, popup dei record, confronto). Restano cornice, colori e inclinazione della figurina aperta. Gli ologrammi comprati nel Negozio non cambiano. Solo interfaccia.

## 1.7.8
- Io: nuova sezione "Overall spiegato" (sola lettura). `ovrDelta` ora poggia su `ovrParts`, che restituisce anche il dettaglio (vittoria/sconfitta, gol e assist con moltiplicatore di ruolo, premio di reparto, autogol, tetti, voti dei compagni, ritardo, limite 50-99); `computeStats` lo salva in `hist[].parts`. Gli OVR sono identici a prima (verificato su tutti i giocatori e su 27.648 combinazioni) e le voci si sommano esattamente alla variazione reale.
- Gara in programma (Resoconto): i capitani si sfidano con le figurine in grande e il VS in mezzo, al posto delle magliette; sotto restano le scritte Bianchi e Neri e il nome del capitano. Nessun nuovo campo nel database.

## 1.7.7
- Sicurezza senza passaggi per gli utenti: nel database il codice giocatore è ora `{ s, h2, v:2 }` con `h2` = SHA-256 dell'hash che resta sul telefono (prima l'hash letto dal database bastava per entrare come quel giocatore); i record vecchi `{ s, h, v:1 }` si aggiornano da soli, con lo stesso salt, alla prossima apertura del giocatore e i telefoni già collegati restano validi. Dati sporchi (nomi non testuali, id come `constructor`, date e orari con codice, foto che non sono immagini) scartati o resi innocui solo in memoria; ogni sezione si disegna per conto suo e un errore all'avvio svuota la cache invece di bloccare l'app. `meta robots`, `robots.txt` e `_headers` (noindex, nosniff, niente incorniciamento, referrer e permessi ridotti).
- Carte Oro e Diamante: nuovo foil con sole sfumature trasparenti (via color-dodge, maschere, filtri e animazioni infinite nella griglia); la luce segue l'inclinazione solo sulla figurina aperta. Le variabili della luce passano da `--tx/--ty` (che si scontravano con il colore del testo e rendevano grigi i numeri delle figurine) a `--lx/--ly`.
- Prestazioni: tolto `backdrop-filter` da card, tile, targhe, primati e dalle finestre chiuse (nelle prove da ~10 a ~58 fps con CPU 4x, differenza visiva minima).
- Classifica e Giocatori: la tua riga e la tua carta evidenziate in arancione (pillola "Tu"); il pulsante in alto mostra il nome di chi ha fatto l'accesso.
- Correzioni grafiche: colori e numeri delle viste diverse dalla Generale, barra in alto tra 900 e 1280 px (solo icone), chip ruolo sulle foto con sfondo scuro.
- Popup: un solo "Fischio finale" (e al primo avvio su un telefono solo se la gara ha meno di un giorno e mezzo); più primati cambiati diventano un solo popup con il pulsante per la bacheca.
- Restano da fare lato Firebase (console del proprietario): regole del database, controllo del PIN e restrizione della chiave. Vedi il resoconto della release.

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
