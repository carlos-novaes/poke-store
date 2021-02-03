import React from 'react';
import { Link } from 'react-router-dom';
import water from '../../assets/images/water.png';
import fire from '../../assets/images/fire.png';
import stone from '../../assets/images/stone.png';
import leaf from '../../assets/images/leaf.png';
import logo from '../../assets/images/PokeLogo.png';
import { Wrapper } from './styles';

export default function Home() {
  return (
    <Wrapper>
      <img src={logo} alt="PokeStore" />
      <div>
        <Link to="/store/grass">
          <img src={leaf} alt="leaf" />
        </Link>
        <Link to="/store/fire">
          <img src={fire} alt="fire" />
        </Link>
        <Link to="/store/rock">
          <img src={stone} alt="stone" />
        </Link>
        <Link to="/store/water">
          <img src={water} alt="water" />
        </Link>
      </div>
    </Wrapper>
  );
}
