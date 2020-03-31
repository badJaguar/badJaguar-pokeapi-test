export interface IPokemon {
  name: string;
  url: string;
}
export interface IPokemonList {
  count: number;
  next: string;
  previous: string;
  results: IPokemon[];
}
