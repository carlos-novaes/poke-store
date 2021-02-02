import React from 'react';
import water from '../../assets/images/water.png';
import fire from '../../assets/images/fire.png';
import stone from '../../assets/images/stone.png';
import leaf from '../../assets/images/leaf.png';
import logo from '../../assets/images/PokeLogo.png';
import { Container, PokeStoreLink } from './styles';

const styles = {
  img: {
    margin: '10px auto',
    display: 'flex',
  },
};

export default function Home() {
  return (
    <div>
      <img style={styles.img} src={logo} alt="PokeStore" />
      <Container>
        <PokeStoreLink to="/store/grass">
          <img src={leaf} alt="leaf" />
        </PokeStoreLink>
        <PokeStoreLink to="/store/fire">
          <img src={fire} alt="fire" />
        </PokeStoreLink>
        <PokeStoreLink to="/store/stone">
          <img src={stone} alt="stone" />
        </PokeStoreLink>
        <PokeStoreLink to="/store/water">
          <img src={water} alt="water" />
        </PokeStoreLink>
      </Container>
    </div>
  );
}
