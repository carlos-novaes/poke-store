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
  height: 628px;
  max-height: 628px;
  width: 400px;
  position: sticky;
  top: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  #poke-list {
    overflow: auto;
    height: 100%;

    table {
      width: 100%;

      thead th {
        color: #999;
        text-align: left;
        padding: 5px;
      }

      tbody td {
        padding: 5px;
        border-bottom: 1px solid #eee;
      }

      img {
        height: 95px;
      }

      strong {
        color: #333;
        display: block;
      }

      span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
      }
      div {
        text-align: center;

        input {
          border: 1px solid #ddd;
          border-radius: 4px;
          color: #666;
          padding: 6px;
          width: 50px;
        }

        div {
          display: flex;
          align-items: center;
        }
      }

      button {
        background: none;
        border: 0;
        padding: 6px;
      }
    }
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 20px;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  input {
    width: 30%;
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
