import React from 'react';
import { useTheme } from '../../hooks/theme';
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
  const { changeTheme } = useTheme();

  return (
    <div>
      <img style={styles.img} src={logo} alt="PokeStore" />
      <Container>
        <PokeStoreLink to="/store" onClick={() => changeTheme('grass')}>
          <img src={leaf} alt="leaf" />
        </PokeStoreLink>
        <PokeStoreLink to="/store" onClick={() => changeTheme('fire')}>
          <img src={fire} alt="fire" />
        </PokeStoreLink>
        <PokeStoreLink to="/store" onClick={() => changeTheme('stone')}>
          <img src={stone} alt="stone" />
        </PokeStoreLink>
        <PokeStoreLink to="/store" onClick={() => changeTheme('water')}>
          <img src={water} alt="water" />
        </PokeStoreLink>
      </Container>
    </div>
  );
}
