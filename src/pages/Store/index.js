import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { Cart, Container, ProductList } from './styles';

export default function Store() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    api.get('type/10').then((response) => {
      const data = response.data.pokemon.map((pokeData) => ({
        ...pokeData.pokemon,
        price: formatPrice(Math.ceil(Math.random() * 100)),
      }));
      setPokemon(data);
    });
  }, []);

  return (
    <Container>
      <ProductList>
        {pokemon.map((pokemonData) => (
          <Card
            key={pokemonData.url}
            price={pokemonData.price}
            url={pokemonData.url}
          />
        ))}
      </ProductList>
      <Cart>
        <p>Carrinho</p>
      </Cart>
    </Container>
  );
}
