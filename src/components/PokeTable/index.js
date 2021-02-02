/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  MdAddCircleOutline,
  MdDelete,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useTheme } from '../../hooks/theme';
import { Table } from './styles';
import { capitalize } from '../../util/capitalize';
import { formatPrice } from '../../util/format';

export default function PokeTable({ subTotalHidden, imgSize }) {
  const { theme } = useTheme();

  /**
   * Populates cart and calculates total value
   */
  const cart = useSelector((state) =>
    state.cart.map((pokemon) => ({
      ...pokemon,
      name: capitalize(pokemon.name),
      subtotal: formatPrice(pokemon.amount * pokemon.id),
    })),
  );

  return (
    <Table imgSize={imgSize}>
      <thead>
        <tr>
          <th />
          <th>PRODUTO</th>
          <th>QTD</th>
          {subTotalHidden ? null : <th>SUBTOTAL</th>}
          <th />
        </tr>
      </thead>
      <tbody>
        {cart.map((pokemon) => (
          <tr key={pokemon.id}>
            <td>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </td>
            <td>
              <strong>{pokemon.name}</strong>
              <span>{pokemon.price}</span>
            </td>
            <td>
              <div>
                <button type="button" onClick={() => console.log('decrement')}>
                  <MdRemoveCircleOutline
                    size={20}
                    color={theme.backgroundColor}
                  />
                </button>
                <input type="number" readOnly value={pokemon.amount} />
                <button type="button" onClick={() => console.log('increment')}>
                  <MdAddCircleOutline size={20} color={theme.backgroundColor} />
                </button>
              </div>
            </td>
            {subTotalHidden ? null : (
              <td>
                <strong>{pokemon.subtotal}</strong>
              </td>
            )}
            <td>
              <button type="button" onClick={() => console.log('remove')}>
                <MdDelete size={20} color={theme.backgroundColor} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
