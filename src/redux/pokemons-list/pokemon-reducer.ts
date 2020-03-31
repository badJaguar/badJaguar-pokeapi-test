import { IPokemonList } from "../../ui/pokemons-list/intity.interfaces";
import { IPokeActions } from "./pokemon-actions";


export interface IPokemonState {
  pokemonsReducer: IPokemonsReducer;
  pending: boolean;
  error: any
}

export interface IPokemonsReducer {
  list: IPokemonList;
}

const initialState: IPokemonState = {
  pokemonsReducer: {} as IPokemonsReducer,
  pending: false,
  error: null
};

export const pokemonsReducer = (state = initialState, action: IPokeActions) => {
  switch (action.type) {
    case "FETCH_POKES_BEGIN":
      return {
        ...state,
        pending: true,
        error: null
      };

    case "FETCH_POKES_SUCCESS":
      return {
        ...state,
        pending: false,
        list: action.payload
      };

    case "FETCH_POKES_ERROR":
      return {
        ...state,
        pending: false,
        error: action.error,
        list: {}
      };

    default:
      return state;
  }
}

export const getPokemons = (state: IPokemonState) => state.pokemonsReducer.list;
export const getProductsPending = (state: IPokemonState) => state.pending;
export const getProductsError = (state: IPokemonState) => state.error;
