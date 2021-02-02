import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import api from '../../services/api';
import { Container } from './styles';
import unknown from '../../assets/images/unknown.png';
import { capitalize } from '../../util/capitalize';
import { formatPrice } from '../../util/format';
import { useTheme } from '../../hooks/theme';

export default function Details() {
  const { theme } = useTheme();
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    api.get(`pokemon/${id}`).then((response) => {
      setPokemon({
        ...response.data,
        name: capitalize(response.data.name),
        price: formatPrice(response.data.id),
      });
    });
  }, [id]);

  return pokemon.name ? (
    <Container theme={theme}>
      <Link to={`/store/${theme.type}`}>
        <header>
          <IoChevronBackCircleOutline size={20} />
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
          <div id="stats">
            <h2>Stats</h2>
            <div>
              {pokemon.stats.map((s) => (
                <li>
                  <strong>{s.stat.name}:</strong>
                  <span>{s.base_stat}</span>
                </li>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer>
        <button type="button"> Adicionar Ao carrinho</button>
      </footer>
    </Container>
  ) : (
    <Container theme={theme}>Carregando</Container>
  );
}
