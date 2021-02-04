/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';
import swal from 'sweetalert';
import Card from '../../components/Card';
import { useTheme } from '../../hooks/theme';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { Cart, Container, Filter, ProductList, Total, Wrapper } from './styles';
import PokeTable from '../../components/PokeTable';
import * as CartActions from '../../store/modules/cart/actions';

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
  const { type } = useParams();
  const { theme, changeTheme } = useTheme();
  const history = useHistory();
  const subTotalHidden = true;

  const dispatch = useDispatch();
  useEffect(() => changeTheme(type), [changeTheme, type]);

  /**
   * Loads all pokémon from a type, if type isn't in context, redirects to store selection
   */
  useEffect(() => {
    if (type) {
      api.get(`type/${type}`).then((response) => {
        const data = response.data.pokemon.map((pokeData) => {
          const urlParts = pokeData.pokemon.url.split('/');
          const pokeId = Number(urlParts[urlParts.length - 2]);
          return {
            ...pokeData.pokemon,
            id: pokeId,
            price: formatPrice(pokeId),
            type,
          };
        });
        setPokemon(data);
      });
    } else {
      history.push('/');
    }
  }, [type, history]);

  /**
   * Calculates total value
   */
  const total = useSelector((state) =>
    state.cart
      .filter((poke) => poke.type === type)
      .reduce((sumTotal, poke) => {
        sumTotal += poke.id * poke.amount;
        return sumTotal;
      }, 0),
  );

  const formattedTotal = formatPrice(total);

  const handleCheckout = (pokeType) => {
    swal(
      'Compra Finalizada',
      `Você recebeu 15% de cashback, totalizando: ${formatPrice(total * 0.15)}`,
      'success',
    ).then(() => dispatch(CartActions.emptyCart(pokeType)));
  };

  return (
    <Wrapper>
      <Filter>
        <input
          type="text"
          vale={pokeFilter}
          placeholder="Buscar Pokemon"
          onChange={(event) => setPokeFilter(event.target.value.toLowerCase())}
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
                type={filteredPokemon.type}
                theme={theme}
                id={filteredPokemon.id}
              />
            ))}
        </ProductList>
        <Cart id="cart-section" theme={theme}>
          <div style={styles.cartTopSection}>
            <MdShoppingCart size={30} />
            <h2>Carrinho</h2>
          </div>
          <div id="poke-list">
            <div>
              <PokeTable subTotalHidden={subTotalHidden} imgSize="80px" />
            </div>
          </div>
          <footer>
            <button type="button" onClick={() => handleCheckout(type)}>
              Finalizar pedido
            </button>

            <Total>
              <span>TOTAL</span>
              <strong>{formattedTotal}</strong>
            </Total>
          </footer>
        </Cart>
      </Container>
    </Wrapper>
  );
}
