import axios from "axios";
import { startLoadingPokemons, setPokemons } from "./";

///https://pokeapi.co/api/v2/pokemon?limit=10&offset=0
export const getPokemos = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    const { data } = await axios(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`
    );

    dispatch(setPokemons(data.results));
  };
};
