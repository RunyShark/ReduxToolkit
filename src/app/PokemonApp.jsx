import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingPokemons, setPokemons, getPokemos } from "../index";

export const PokemonApp = () => {
  const { pokemons } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemos());
  }, []);
  console.log(pokemons);
  return (
    <>
      <h1>Pokemon App</h1>
      <hr />

      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.url}>
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
