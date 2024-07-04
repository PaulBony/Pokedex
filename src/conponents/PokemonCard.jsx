import React from "react";
import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  if (!pokemon) return null; // Ajoutez une vérification pour éviter des erreurs si pokemon est undefined

  return (
    <div className="pokemon-card">
      <h2>{pokemon.name}</h2>
      {pokemon.imgSrc && <img src={pokemon.imgSrc} alt={pokemon.name} />}
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
