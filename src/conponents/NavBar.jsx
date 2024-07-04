function NavBar({ setPokemonIndex, pokemonIndex, pokemonList }) {
  return (
    <>
      <nav>
        <button
          onClick={() =>
            setPokemonIndex((pokemonIndex + 1) % pokemonList.length)
          }
        >
          Next Pokémon
        </button>
        <button
          onClick={() =>
            setPokemonIndex((pokemonIndex - 1) % pokemonList.length)
          }
        >
          Cancel Pokémon
        </button>
      </nav>
    </>
  );
}

export default NavBar;
