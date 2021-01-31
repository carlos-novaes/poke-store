import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  width: 80%;
  margin: 30px auto;
  height: 80vh;

  header {
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  section {
    display: flex;
    height: 90%;

    div#img {
      display: flex;
      align-items: center;
      margin-right: 40px;
      margin-top: 30px;
      border-radius: 4px;
      border: 5px solid ${({ theme }) => theme.backgroundColor};

      img {
        display: flex;
        align-items: center;
        height: 50vh;
      }
    }

    div {
      div#title {
        h2 {
          font-size: 36px;
        }
        span {
          font-weight: bold;
          font-size: 30px;
          color: #777;
        }
      }

      div#stats {
        margin-top: 20px;
        h2 {
          font-size: 36px;
        }
        div {
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 20px;
          list-style: none;

          li {
            font-size: 20px;
            margin-right: 40px;
            text-transform: uppercase;

            strong {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }

  footer {
    display: flex;
    justify-content: center;

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
