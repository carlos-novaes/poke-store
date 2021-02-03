import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  width: 80%;
  margin: 30px auto;
  a {
    text-decoration: none;
    color: #000;
    header {
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }
    }
  }

  section {
    display: grid;
    grid-template-columns: 2fr 5fr;
    grid-gap: 2rem;
    margin-top: 2rem;

    @media (max-width: 1150px) {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    div#img {
      display: flex;
      align-items: center;

      img {
        display: flex;
        align-items: center;
        height: 50vh;
      }

      @media (max-width: 1150px) {
        display: none;
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

      div.attr {
        margin-top: 2rem;

        h3 {
          font-size: 25px;
        }

        div {
          margin: 1rem 0;
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 20vw);
          @media (max-width: 1150px) {
            grid-template-columns: repeat(2, 30vw);
          }
          @media (max-width: 670px) {
            grid-template-columns: 1fr;
          }

          li {
            font-size: 20px;
            text-transform: capitalize;

            strong {
              margin-right: 10px;
            }
          }
        }
      }
      button {
        background: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.textColor};
        border: 0;
        border-radius: 4px;
        overflow: hidden;
        margin-top: auto;

        display: flex;
        align-items: center;

        transition: background 0.2s;

        &:hover {
          filter: brightness(80%);
        }

        div {
          display: flex;
          align-items: center;
          padding: 12px;
          background: rgba(0, 0, 0, 0.1);

          svg {
            margin-right: 5px;
          }
        }
        span {
          flex: 1;
          text-align: center;
          font-weight: bold;
          padding: 0 5px;
        }
      }
    }
  }
`;
