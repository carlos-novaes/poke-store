import styled from 'styled-components';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 955px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const Cart = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  height: auto;
  max-height: 75vh;
  width: 450px;
  position: sticky;
  top: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  #poke-list {
    overflow: auto;
    height: 100%;
    div {
      display: flex;
      justify-content: start;
    }
  }

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: ${({ theme }) => theme.backgroundColor};
      color: ${({ theme }) => theme.textColor};
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;

      transition: background 0.2s;

      &:hover {
        filter: brightness(80%);
      }
    }
  }
`;

export const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 5fr 2fr;
  grid-gap: 20px;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    div#cart-section {
      display: none;
    }
  }
`;

export const Filter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  input {
    width: 50vw;
    margin-bottom: 20px;
    padding-left: 35px;
    color: $color-gray-one;
    box-shadow: 2px 3px 28px 1px rgba(0, 0, 0, 0.1);
    border: 0px solid transparent;
    border-radius: 5px;

    height: 40px;
    font-size: 16px;

    transition: all 0.2s ease;

    &::placeholder {
      color: #b3b3b3;
    }

    &:focus {
      outline: none;
      box-shadow: 2px 3px 20px 1px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const Wrapper = styled.div`
  display: grid;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
`;
