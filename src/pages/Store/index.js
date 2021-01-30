import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../../components/Card';
import { useTheme } from '../../hooks/theme';
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
  const history = useHistory();

  const { theme } = useTheme();

  useEffect(() => {
    if (theme.type) {
      api.get(`type/${theme.type}`).then((response) => {
        const data = response.data.pokemon.map((pokeData) => ({
          ...pokeData.pokemon,
          price: formatPrice(Math.ceil(Math.random() * 100)),
        }));
        setPokemon(data);
      });
    } else {
      history.push('/');
    }
  }, [theme, history]);

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
                theme={theme}
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
