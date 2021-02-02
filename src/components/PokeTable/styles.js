import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  height: 100%;
  overflow: auto;

  thead th {
    color: #999;
    text-align: center;
    padding: 12px;
  }

  tbody {
    td {
      padding: 5px;
      text-align: center;
      border-bottom: 1px solid #eee;
    }
  }

  img {
    height: ${({ imgSize }) => imgSize};
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
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      text-align: center;
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 40px;
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
`;
