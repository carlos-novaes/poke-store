import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/images/PokeLogo.png';
import { Container, Anchor } from './styles';

export default function Header() {
  return (
    <Container>
      <Anchor to="/">
        <AiOutlineArrowLeft size={20} color="#fff" />
        <div>
          <strong>Lojas</strong>
        </div>
      </Anchor>

      <Link to="/store">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Anchor to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Anchor>
    </Container>
  );
}
