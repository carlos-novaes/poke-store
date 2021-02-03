import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { Container } from './styles';
import unknown from '../../assets/images/unknown.png';
import { capitalize } from '../../util/capitalize';
import { formatPrice } from '../../util/format';
import { useTheme } from '../../hooks/theme';
import * as CartActions from '../../store/modules/cart/actions';

export default function Details() {
  const { theme } = useTheme();
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    api.get(`pokemon/${id}`).then((response) => {
      setPokemon({
        ...response.data,
        name: capitalize(response.data.name),
        price: formatPrice(response.data.id),
        type: theme.type,
      });
    });
  }, [id, theme.type]);

  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {}),
  );

  const handleAddPokemon = (pokemonToAdd) =>
    dispatch(CartActions.addToCartRequest(pokemonToAdd));

  return pokemon.name ? (
    <Container theme={theme}>
      <Link to={`/store/${theme.type}`}>
        <header>
          <IoChevronBackCircleOutline size={26} />
          <span>Voltar</span>
        </header>
      </Link>
      <section>
        <div id="img">
          <img
            src={pokemon.sprites.front_default || unknown}
            alt={pokemon.name}
          />
        </div>
        <div>
          <div id="title">
            <h2>{pokemon.name}</h2>
            <span>{pokemon.price}</span>
          </div>
          <div className="attr">
            <h3>Tipos</h3>
            <div>
              {pokemon.types.map((t) => (
                <li key={t.type.name}>
                  <span>{t.type.name}</span>
                </li>
              ))}
            </div>
          </div>
          <div className="attr">
            <h3>Stats Iniciais</h3>
            <div>
              {pokemon.stats.map((s) => (
                <li key={s.stat.name}>
                  <strong>{s.stat.name}:</strong>
                  <span>{s.base_stat}</span>
                </li>
              ))}
            </div>
          </div>
          <button type="button" onClick={() => handleAddPokemon(pokemon)}>
            <div>
              <MdAddShoppingCart size={16} color={theme.textColor} />
              {amount[pokemon.id] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </div>
      </section>
    </Container>
  ) : (
    <Container theme={theme}>Carregando</Container>
  );
}
