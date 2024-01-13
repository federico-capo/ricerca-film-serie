"use client";
import React, { useState } from 'react';
import axios from 'axios';// importo la axios
import Card from './Card'; // importo la card

export default function Header() {
  const [RicercaBox, setRicercaBox] = useState('');
  const [RisultatiFilm, setRisultatiFilm] = useState([]);
  const [RisultatiSerieTv, setRisultatiSerieTv] = useState([]);

  const API_KEY = "ddca4c5657c283be431fcf36e6386f69";
  const link_Film = 'https://api.themoviedb.org/3/search/movie';
  const link_SerieTv = 'https://api.themoviedb.org/3/search/tv';

  const EffettuaRichiesta = async () => {
    console.log('EffettuaRichiesta');

    try {
      const RispostaFilm = await axios.get(link_Film, {
      // compone url e parametri da passare alla richiesta get di axios 
        params: {
          api_key: API_KEY,
          query: RicercaBox,
        },
      });
      
      const RispostaSerieTv = await axios.get(link_SerieTv, {
        params: {
          api_key: API_KEY,
          query: RicercaBox,
        },
      });
      console.log(RispostaFilm);
      console.log(RispostaSerieTv);

      setRisultatiFilm(RispostaFilm.data.results);
      // setto i risultati della ricerca per i film
      // RispostaFilm.data.results è un array di oggetti
      setRisultatiSerieTv(RispostaSerieTv.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <header>
        <div className="header-content">
          <div className="logo"><h1>FlixFlix</h1></div>
          <div className="spacer"></div>
          <div className="ricerca">
            <input
              type="search"
              placeholder="inserisci film/Serie"
              id="richiesta"
              value={RicercaBox}// valore della ricerca
              onChange={(e) => setRicercaBox(e.target.value)}
              /*
                al cambiamento del valore della ricerca eseguo la funzione setRicercaBox
                che cambia il valore della ricerca con il valore inserito
                e.target.value è il valore inserito nella ricerca
                onChange è un evento che si attiva al cambiamento del valore della ricerca
              */
            />
            <button type="button" onClick={EffettuaRichiesta}
            //al click eseguo la funzione EffettuaRichiesta
            >
              Ricerca
            </button>
          </div>
        </div>
      </header>

      {/* Mostro i risultati per i film */}
      <div className="search-results">
      <h2 className='text'>Film</h2>
        <div className="movie-results">
      
          {RisultatiFilm.map((result) => (//mappo i risultati dell'api e prendo i valori che mi servono
            <Card
              key={result.id}
              title={result.title}
              overview={result.overview}
              Copertina={result.poster_path}
            />
          ))}
        </div>

        {/* Mostro i risultati per i Serie  */}
        <h2 className='text'>Serie TV</h2>
        <div className="tv-results">
          {RisultatiSerieTv.map((result) => (//mappo i risultati dell'api e prendo i valori che mi servono
            <Card
              key={result.id}
              title={result.name}
              overview={result.overview}
              Copertina={result.poster_path}
            />
          ))}
        </div>
      </div>
    </>
  );
}
