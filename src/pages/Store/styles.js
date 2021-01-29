import styled from 'styled-components';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
`;

export const Cart = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  height: 520px;
  width: 400px;
  position: sticky;
  top: 20px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 20px;
`;
