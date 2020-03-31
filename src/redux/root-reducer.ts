import { combineReducers } from "redux";
import { pokemonsReducer } from "./pokemons-list/pokemon-reducer";

export default combineReducers({
  pokemonsReducer,
});