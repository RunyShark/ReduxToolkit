import axios from "axios";
import { startLoadingPokemons, setPokemons } from "./";
import { pokemonApi } from "../../../index";

///https://pokeapi.co/api/v2/pokemon?limit=10&offset=0
export const getPokemos = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
