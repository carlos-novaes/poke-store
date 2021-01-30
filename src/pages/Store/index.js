/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import Card from '../../components/Card';
import { useTheme } from '../../hooks/theme';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { Cart, Container, Filter, ProductList } from './styles';
import pokeTest from '../../assets/images/pokeTest.png';

const styles = {
  display: 'grid',
  justifyContent: 'space-around',
  alignItems: 'center',
  margin: '20px',
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
          <h2>Carrinho</h2>
          <div id="poke-list">
            <table>
              <thead>
                <tr>
                  <th />
                  <th>PRODUTO</th>
                  <th>QTD</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {'123'.split('').map((x) => (
                  <tr key={x}>
                    <td>
                      <img src={pokeTest} alt="test" />
                    </td>
                    <td>
                      <strong>Teste Nome</strong>
                      <span>R$20,00</span>
                    </td>
                    <td>
                      <div>
                        <input type="number" readOnly value={10} />
                        <div>
                          <button
                            type="button"
                            onClick={() => console.log('decrement')}
                          >
                            <MdRemoveCircleOutline size={20} color="#7159c1" />
                          </button>
                          <button
                            type="button"
                            onClick={() => console.log('increment')}
                          >
                            <MdAddCircleOutline size={20} color="#7159c1" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => console.log('remove')}
                      >
                        <MdDelete size={20} color="#7159c1" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h3>Total</h3>
          </div>
        </Cart>
      </Container>
    </div>
  );
}
