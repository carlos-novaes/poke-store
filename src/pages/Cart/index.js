/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { useTheme } from '../../hooks/theme';
import { Container, PokeTable, Total } from './styles';
import pokeTest from '../../assets/images/pokeTest.png';

export default function Cart() {
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <div>
        <PokeTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {'123456789'.split('').map((x) => (
              <tr key={x}>
                <td>
                  <img src={pokeTest} alt="test" />
                </td>
                <td>
                  <strong>Teste Nome</strong>
                  <span>R$20,00</span>
                </td>
                <td>
                  <div>
                    <button
                      type="button"
                      onClick={() => console.log('decrement')}
                    >
                      <MdRemoveCircleOutline
                        size={20}
                        color={theme.backgroundColor}
                      />
                    </button>
                    <input type="number" readOnly value="10" />
                    <button
                      type="button"
                      onClick={() => console.log('increment')}
                    >
                      <MdAddCircleOutline
                        size={20}
                        color={theme.backgroundColor}
                      />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>R$10,00</strong>
                </td>
                <td>
                  <button type="button" onClick={() => console.log('remove')}>
                    <MdDelete size={20} color={theme.backgroundColor} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </PokeTable>
      </div>

      <footer>
        <button type="button"> Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$20,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
