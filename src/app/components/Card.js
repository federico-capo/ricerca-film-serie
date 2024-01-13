// Card.js
import React from 'react';

const Card = ({ title, overview, Copertina }) => {
  return (
    <div className="card">
      {Copertina && (
        <img
          src={`https://image.tmdb.org/t/p/w300${Copertina}`}
          alt={title}
          className="card-poster"
        />
      )}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-overview">{overview}</p>
      </div>
    </div>
  );
};

export default Card;
