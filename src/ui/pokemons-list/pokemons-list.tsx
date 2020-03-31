import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import fetchPokemonsAction from "../../redux/pokemons-list/fetch-pokemons";
import { getPokemons, getProductsError, getProductsPending, IPokemonState } from "../../redux/pokemons-list/pokemon-reducer";
import { IPokemon, IPokemonList } from './intity.interfaces';
import styles from './pokemon-list.module.scss';


export interface IPokemonProps {
  error: any
  list: IPokemonList,
  pending: boolean,
  fetchPokemonsAction: () => void
}

const PokeList = (props: IPokemonProps) => {
  useEffect(() => {
    props.fetchPokemonsAction();
  }, [props.pending]
  );

  return (
    <div className={styles.content}>
      {props.list?.results.map((product: IPokemon, index: number) =>
        <Card className={styles.card} title="Pokemon name" key={index}>
          <p>{product.name}</p>
          <Button label="Open" />
        </Card>
      )}
    </div>
  );
};

const mapStateToProps = (state: IPokemonState) => ({
  error: getProductsError(state),
  list: getPokemons(state),
  pending: getProductsPending(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  fetchPokemonsAction
}, dispatch);

export const PokeListConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(PokeList));