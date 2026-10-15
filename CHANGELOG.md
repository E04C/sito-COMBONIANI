# Changelog

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
