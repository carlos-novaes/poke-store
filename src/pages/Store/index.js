/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  MdShoppingCart,
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import swal from 'sweetalert';
import Card from '../../components/Card';
import { useTheme } from '../../hooks/theme';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { Cart, Container, Filter, ProductList, Total } from './styles';
import { capitalize } from '../../util/capitalize';

const styles = {
  main: {
    display: 'grid',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '20px',
  },
  cartTopSection: {
    display: 'flex',
  },
};

export default function Store() {
  const [pokemon, setPokemon] = useState([]);
  const [pokeFilter, setPokeFilter] = useState('');
  const { theme } = useTheme();
  const history = useHistory();

  /**
   * Loads all pokémon from a type, if type isn't in context, redirects to store selection
   */
  useEffect(() => {
    if (theme.type) {
      api.get(`type/${theme.type}`).then((response) => {
        const data = response.data.pokemon.map((pokeData) => {
          const urlParts = pokeData.pokemon.url.split('/');
          const pokeId = Number(urlParts[urlParts.length - 2]);
          return {
            ...pokeData.pokemon,
            id: pokeId,
            price: formatPrice(pokeId),
          };
        });
        setPokemon(data);
      });
    } else {
      history.push('/');
    }
  }, [theme, history]);

  /**
   * Populates cart and calculates total value
   */
  const cart = useSelector((state) =>
    state.cart.map((item) => ({
      ...item,
      name: capitalize(item.name),
    })),
  );

  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((sumTotal, poke) => {
        sumTotal += poke.id * poke.amount;
        return sumTotal;
      }, 0),
    ),
  );

  return (
    <div style={styles.main}>
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
                key={filteredPokemon.id}
                price={filteredPokemon.price}
                url={filteredPokemon.url}
                theme={theme}
              />
            ))}
        </ProductList>
        <Cart theme={theme}>
          <div style={styles.cartTopSection}>
            <MdShoppingCart size={30} />
            <h2>Carrinho</h2>
          </div>
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
                {cart.map((poke) => (
                  <tr key={poke.id}>
                    <td>
                      <img src={poke.sprites.front_default} alt={poke.name} />
                    </td>
                    <td>
                      <strong>{poke.name}</strong>
                      <span>{poke.price}</span>
                    </td>
                    <td>
                      <div>
                        <input type="number" readOnly value={poke.amount} />
                        <div>
                          <button
                            type="button"
                            onClick={() => console.log('decrement')}
                          >
                            <MdRemoveCircleOutline
                              size={20}
                              color={theme.backgroundColor}
                            />
                          </button>
                          <button
                            type="button"
                            onClick={() => console.log('increment')}
                          >
                            <MdAddCircleOutline
                              size={20}
                              color={theme.backgroundColor}
                            />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => console.log('remove')}
                      >
                        <MdDelete size={20} color={theme.backgroundColor} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <footer>
            <button
              type="button"
              onClick={() =>
                swal(
                  'Compra Finalizada',
                  'Você recebeu R$50,00 em cashback',
                  'success',
                )
              }
            >
              {' '}
              Finalizar pedido
            </button>

            <Total>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </Total>
          </footer>
        </Cart>
      </Container>
    </div>
  );
}
