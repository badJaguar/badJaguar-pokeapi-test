import axios from 'axios';
import { Dispatch } from 'redux';
import { fetchPokesBegin, fetchPokesFailure, fetchPokesSuccess, IPokeActions } from "./pokemon-actions";

// const fetchPokemonsAction = async (dispatch: Dispatch<IPokeActions>) => {

//   dispatch(fetchPokesBegin());

//   await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20`)

//     .then((result: AxiosResponse<IPokemonState>) => result.data.results)
//     .then((res: IPokemon[]) => {

//       dispatch(fetchPokesSuccess(res));

//       return res;
//     })
//     .catch(error => {
//       dispatch(fetchPokesFailure(error));
//     })
// }

export const fetchPokemonsAction = () => {
  return async (dispatch: Dispatch<IPokeActions>) => {
    dispatch(fetchPokesBegin());

    const request = axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20`)

    try {
      const response = await request;
      return dispatch(fetchPokesSuccess(response.data));
    }
    catch (err) {
      return dispatch(fetchPokesFailure(err));
    }
  }
}

export default fetchPokemonsAction;