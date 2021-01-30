import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/images/PokeLogo.png';
import { Container, Anchor } from './styles';
import { useTheme } from '../../hooks/theme';

export default function Header({ children }) {
  const { theme } = useTheme();
  return (
    <>
      <Container theme={theme}>
        <Anchor to="/">
          <AiOutlineArrowLeft size={20} color="#fff" />
          <div>
            <strong>Lojas</strong>
          </div>
        </Anchor>

        <Link to="/store">
          <img src={logo} alt="PokeStore" />
        </Link>

        <Anchor to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span>3 itens</span>
          </div>
          <MdShoppingBasket size={36} color="#fff" />
        </Anchor>
      </Container>
      {children}
    </>
  );
}
