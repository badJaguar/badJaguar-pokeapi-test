import { IPokemonList } from "../../ui/pokemons-list/intity.interfaces";

export enum PokeActionType {
  FETCH_POKES_BEGIN = 'FETCH_POKES_BEGIN',
  FETCH_POKES_SUCCESS = 'FETCH_POKES_SUCCESS',
  FETCH_POKES_ERROR = 'FETCH_POKES_ERROR',
}

export interface IPokeActions {
  type: PokeActionType;
  payload: IPokemonList;
  error?: any
}

export const fetchPokesBegin = (): IPokeActions => ({
  type: PokeActionType.FETCH_POKES_BEGIN,
  payload: {} as IPokemonList
});

export const fetchPokesSuccess = (pokemons: IPokemonList): IPokeActions => ({
  type: PokeActionType.FETCH_POKES_SUCCESS,
  payload: pokemons
});

export const fetchPokesFailure = (error: any): IPokeActions => ({
  type: PokeActionType.FETCH_POKES_ERROR,
  payload: error
});
