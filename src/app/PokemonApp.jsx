import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemos } from "../index";

export const PokemonApp = () => {
  const { pokemons, isLoading, pages } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemos());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      {isLoading ? (
        <span>Cargando...</span>
      ) : (
        <ul>
          {pokemons.map(({ name }) => (
            <li key={name}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      )}

      <button disabled={isLoading} onClick={() => dispatch(getPokemos(pages))}>
        Next
      </button>
    </>
  );
};
