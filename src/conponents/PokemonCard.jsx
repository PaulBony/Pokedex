function PokemonCard(props) {
  console.log(props);

  return (
    <figure>
      {props.pokemon.imgSrc != null ? (
        <img src={props.pokemon.imgSrc} alt="" />
      ) : (
        <p>???</p>
      )}

      <figcaption>{props.pokemon.name}</figcaption>
    </figure>
  );
}
export default PokemonCard;
