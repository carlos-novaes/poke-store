import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  width: 80%;
  margin: 30px auto;
  max-height: 75vh;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  a {
    text-decoration: none;
    color: #000;
    header {
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }

      span {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 672px) {
    width: 95%;
    padding: 10px;
  }

  div {
    overflow: auto;
    height: 100%;
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

      @media (max-width: 394px) {
        padding: 6px 10px;
      }
    }
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
    @media (max-width: 375px) {
      font-size: 20px;
    }
  }
`;
