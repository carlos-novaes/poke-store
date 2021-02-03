import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin: 1rem auto;
    width: 30vw;
    @media (max-width: 1100px) {
      width: 50vw;
      margin-bottom: 80px;
    }
    @media (max-width: 868px) {
      width: 70vw;
      margin-bottom: 60px;
    }
  }

  div {
    display: grid;
    width: 70%;
    grid-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);

    a {
      width: fit-content;
      display: flex;
      margin: 0 auto;

      img {
        border-radius: 50%;
        background: #e7e7e7;
        width: 15vw;
        height: 15vw;

        &:hover {
          filter: brightness(80%);
        }

        @media (max-width: 868px) {
          width: 30vw;
          height: 30vw;
        }
      }
    }
  }
`;
