import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdAddShoppingCart } from 'react-icons/md';

import unknown from '../../assets/images/unknown.png';
import { ListItem } from './styles';
import { capitalize } from '../../util/capitalize';
import { useTheme } from '../../hooks/theme';

export default function Card({ url, price }) {
  const [pokemon, setPokemon] = useState({});

  const { theme } = useTheme();

  useEffect(() => {
    axios.get(url).then((response) => {
      setPokemon(response.data);
    });
  }, [url]);

  return pokemon.name ? (
    <ListItem theme={theme}>
      <img src={pokemon.sprites.front_default || unknown} alt={pokemon.name} />
      <strong>{capitalize(pokemon.name)}</strong>
      <span>{price}</span>

      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#fff" /> 2
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
