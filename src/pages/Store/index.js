import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { Cart, Container, Filter, ProductList } from './styles';

const styles = {
  display: 'grid',
  justifyContent: 'space-around',
  alignItems: 'center',
};

export default function Store() {
  const [pokemon, setPokemon] = useState([]);
  const [pokeFilter, setPokeFilter] = useState('');

  useEffect(() => {
    api.get('type/10').then((response) => {
      const data = response.data.pokemon.map((pokeData) => ({
        ...pokeData.pokemon,
        price: formatPrice(Math.ceil(Math.random() * 100)),
      }));
      setPokemon(data);
    });
  }, []);

  // function handleSearchInput(filter) {
  //   const filteredPokemon = pokemon.filter((poke) =>
  //     poke.name.includes(filter),
  //   );
  //   console.log(filteredPokemon);
  // }

  return (
    <div style={styles}>
      <Filter>
        <input
          type="text"
          vale={pokeFilter}
          placeholder="Buscar Pokemon"
          onChange={(event) => setPokeFilter(event.target.value)}
        />
      </Filter>
      <Container>
        <ProductList>
          {pokemon
            .filter((pokemonData) => pokemonData.name.includes(pokeFilter))
            .map((filteredPokemon) => (
              <Card
                key={filteredPokemon.url}
                price={filteredPokemon.price}
                url={filteredPokemon.url}
              />
            ))}
        </ProductList>
        <Cart>
          <p>Carrinho</p>
        </Cart>
      </Container>
    </div>
  );
}
