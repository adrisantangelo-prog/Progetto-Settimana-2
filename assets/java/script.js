/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const prodotti = [
   {
      nome: "Tablet",
      categoria: "elettronica",
      prezzo: 49.99,
      rating: 4,
      immagine: "img1.jpg",
      disponibile: true
   },
   {
      nome: "Gonna",
      categoria: "abbigliamento",
      prezzo: 29.50,
      rating: 5,
      immagine: "img2.jpg",
      disponibile: true
   },
   {
      nome: "Sapone",
      categoria: "casa",
      prezzo: 15.00,
      rating: 3,
      immagine: "img3.jpg",
      disponibile: true
   },
   {
      nome: "Cellulare",
      categoria: "elettronica",
      prezzo: 120.00,
      rating: 4,
      immagine: "img4.jpg",
      disponibile: true
   },
   {
      nome: "Maglietta",
      categoria: "abbigliamento",
      prezzo: 19.99,
      rating: 2,
      immagine: "img5.jpg",
      disponibile: true
   },
   {
      nome: "Sedia",
      categoria: "casa",
      prezzo: 34.90,
      rating: 5,
      immagine: "img6.jpg",
      disponibile: true
   },
   {
      nome: "Orologio",
      categoria: "elettronica",
      prezzo: 89.00,
      rating: 3,
      immagine: "img7.jpg",
      disponibile: true
   },
   {
      nome: "Pantalloni",
      categoria: "abbigliamento",
      prezzo: 45.00,
      rating: 4,
      immagine: "img8.jpg",
      disponibile: true
   },
   {
      nome: "Tavolo",
      categoria: "casa",
      prezzo: 12.50,
      rating: 1,
      immagine: "img9.jpg",
      disponibile: true
   },
   {
      nome: "Microfono",
      categoria: "elettronica",
      prezzo: 299.99,
      rating: 5,
      immagine: "img10.jpg",
      disponibile: true
   },
   {
      nome: "Scarpe",
      categoria: "abbigliamento",
      prezzo: 75.00,
      rating: 4,
      immagine: "img11.jpg",
      disponibile: true
   },
   {
      nome: "Frigorifero",
      categoria: "casa",
      prezzo: 99.00,
      rating: 5,
      immagine: "img12.jpg",
      disponibile: true
   }
];




/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function formattaPrezzo(prezzo) {
   for (let i = 0; i < prodotti.length; i++) {
      // Prende il nome e il prezzo corrispondenti alla stessa posizione
      console.log(prodotti[i].nome + ': € ' + prodotti[i].prezzo.toFixed(2));
   }

}

formattaPrezzo(prodotti);

/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function formattaRating(rating) {
    const stellePiene = "★".repeat(rating);
    const stelleVuote = "☆".repeat(5 - rating);
    return stellePiene + stelleVuote;
}

for (let i = 0; i < prodotti.length; i++) {
    const prodotto = prodotti[i]; 
    // Controlliamo che il prodotto abbia un rating valido prima di stamparlo
    if (prodotto.rating !== undefined) {
        console.log(prodotto.nome + ": rating " + prodotto.rating + " → " + formattaRating(prodotto.rating));
    }
}

/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function filtraPerCategoria(categoriaCercata){
   let prodottiFiltrati = [];
   for(let i = 0; i < prodotti.length; i++){
      if(prodotti[i].categoria === categoriaCercata){
         prodottiFiltrati.push(prodotti[i]);
      }
   }
   return prodottiFiltrati;
}

console.log(filtraPerCategoria('casa'));

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function filtraDisponibiliERating() {
    let prodottiSelezionati = [];

    for (let i = 0; i < prodotti.length; i++) {
        // Filtra: devono essere disponibili (true) E avere rating maggiore o uguale a 3
        if (prodotti[i].disponibile === true && prodotti[i].rating >= 3) {
            prodottiSelezionati.push(prodotti[i]);
        }
    }

    return prodottiSelezionati;
}
// Sotto la funzione, salviamo i prodotti filtrati in una variabile
let risultatiFiltro = filtraDisponibiliERating();
// Cicliamo i risultati per stampare SOLO il nome e il rating a schermo
for (let a = 0; a < risultatiFiltro.length; a++) {
    console.log(risultatiFiltro[a].nome + " - Rating: " + risultatiFiltro[a].rating);
}

/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* C'è UN ALTRA PAGINA FUNZIONANTE CON IL SECONDO JAVASCRIPT FUNZIONANTE */


/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */