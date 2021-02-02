import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { MdAddShoppingCart } from 'react-icons/md';

import { Link } from 'react-router-dom';
import unknown from '../../assets/images/unknown.png';

import * as CartActions from '../../store/modules/cart/actions';

import { ListItem } from './styles';
import { capitalize } from '../../util/capitalize';
import { useTheme } from '../../hooks/theme';
import { formatPrice } from '../../util/format';

export default function Card({ url, price }) {
  const [pokemon, setPokemon] = useState({});

  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(url).then((response) => {
      const pokemonData = {
        ...response.data,
        price: formatPrice(response.data.id),
        type: theme.type,
      };
      setPokemon(pokemonData);
    });
  }, [url, theme.type]);

  function handleAddPokemon(pokemonToAdd) {
    dispatch(CartActions.addToCartRequest(pokemonToAdd));
  }

  return pokemon.name ? (
    <ListItem theme={theme}>
      <Link to={`/details/${pokemon.id}`}>
        <div id="link">
          <img
            src={pokemon.sprites.front_default || unknown}
            alt={pokemon.name}
          />
          <strong>{capitalize(pokemon.name)}</strong>
          <span>{price}</span>
        </div>
      </Link>

      <button type="button" onClick={() => handleAddPokemon(pokemon)}>
        <div>
          <MdAddShoppingCart size={16} color={theme.textColor} /> 2
        </div>

        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </ListItem>
  ) : (
    <ListItem>
      <strong>Carregando</strong>
    </ListItem>
  );
}
