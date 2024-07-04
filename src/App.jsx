import PokemonCard from "./conponents/PokemonCard";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

      <button
        onClick={() => setPokemonIndex((pokemonIndex + 1) % pokemonList.length)}
      >
        Next Pokémon
      </button>
    </>
  );
}

export default App;
