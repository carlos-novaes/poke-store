import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  background: ${({ theme }) => theme.backgroundColor};
  border-radius: 4px;
  margin-bottom: 10px;

  @media (max-width: 750px) {
    position: sticky;
    top: 0;
  }

  img {
    max-width: 10rem;
  }
`;

export const Anchor = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  svg {
    margin: 5px;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: ${({ theme }) => theme.textColor};
    }

    span {
      font-size: 12px;
      color: ${({ theme }) => theme.textColor};
    }
  }
`;
