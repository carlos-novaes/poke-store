import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PokeStoreLink = styled(Link)`
  width: fit-content;
  display: flex;
  margin: 0 auto;

  img {
    border-radius: 50%;
    background: #e7e7e7;
    width: 200px;
    height: 200px;

    &:hover {
      filter: brightness(80%);
    }
  }
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 50px;
  margin: 30px 300px;
  grid-template-columns: repeat(2, 1fr);
`;
