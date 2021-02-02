import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { MdShoppingBasket } from 'react-icons/md';

import { useSelector } from 'react-redux';
import logo from '../../assets/images/PokeLogo.png';
import { Container, Anchor } from './styles';
import { useTheme } from '../../hooks/theme';

export default function Header({ children }) {
  const { theme } = useTheme();

  const cartSize = useSelector(
    (state) =>
      state.cart.filter((pokemon) => pokemon.type === theme.type).length,
  );
  return (
    <>
      <Container theme={theme}>
        <Anchor to="/" theme={theme}>
          <AiOutlineArrowLeft size={20} color={theme.textColor} />
          <div>
            <strong>Lojas</strong>
          </div>
        </Anchor>

        <Link to="/store">
          <img src={logo} alt="PokeStore" />
        </Link>

        <Anchor to="/cart" theme={theme}>
          <div>
            <strong>Meu carrinho</strong>
            <span>{cartSize} itens</span>
          </div>
          <MdShoppingBasket size={36} color={theme.textColor} />
        </Anchor>
      </Container>
      {children}
    </>
  );
}
