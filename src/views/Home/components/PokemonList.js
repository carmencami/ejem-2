import PokemonListItem from "./PokemonListItem";
export default function PokemonList({ pokemons }) {
    if (!Array.isArray(pokemons)) {
      return <p>No hay datos para mostrar.</p>;
    }
    return (
      <>
        {pokemons.map((pokemon, index) => (
          <PokemonListItem key={index} {...pokemon} />
        ))}
      </>
    );
  }
  