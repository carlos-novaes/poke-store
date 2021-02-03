import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';

import { Link } from 'react-router-dom';
import unknown from '../../assets/images/unknown.png';

import * as CartActions from '../../store/modules/cart/actions';

import { ListItem } from './styles';
import { capitalize } from '../../util/capitalize';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

export default function Card({ price, theme, id, type }) {
  const [pokemon, setPokemon] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    api.get(`pokemon/${id}/`).then((response) => {
      const pokemonData = {
        ...response.data,
        price: formatPrice(response.data.id),
        type,
      };
      setPokemon(pokemonData);
    });
  }, [id, type]);

  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {}),
  );

  const handleAddPokemon = (pokemonToAdd) =>
    dispatch(CartActions.addToCartRequest(pokemonToAdd));

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
          <MdAddShoppingCart size={16} color={theme.textColor} />
          {amount[pokemon.id] || 0}
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
