/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  MdAddCircleOutline,
  MdDelete,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '../../hooks/theme';
import { Table } from './styles';
import { capitalize } from '../../util/capitalize';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import unknown from '../../assets/images/unknown.png';

export default function PokeTable({ subTotalHidden, imgSize }) {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  /**
   * Populates cart
   */
  const cart = useSelector((state) =>
    state.cart
      .filter((pokemon) => pokemon.type === theme.type)
      .map((pokemon) => ({
        ...pokemon,
        name: capitalize(pokemon.name),
        subtotal: formatPrice(pokemon.amount * pokemon.id),
      })),
  );

  const increment = (pokemon) =>
    dispatch(CartActions.updateAmountRequest(pokemon.id, pokemon.amount + 1));

  const decrement = (pokemon) =>
    dispatch(CartActions.updateAmountRequest(pokemon.id, pokemon.amount - 1));

  const removeFromCart = (pokemon) =>
    dispatch(CartActions.removeFromCart(pokemon.id));

  return (
    <Table imgSize={imgSize}>
      <thead>
        <tr>
          <th />
          <th>PRODUTO</th>
          <th>QTD</th>
          {subTotalHidden ? null : <th className="subtotal">SUBTOTAL</th>}
          <th />
        </tr>
      </thead>
      <tbody>
        {cart.map((pokemon) => (
          <tr key={pokemon.id}>
            <td>
              <img
                src={pokemon.sprites.front_default || unknown}
                alt={pokemon.name}
              />
            </td>
            <td>
              <strong>{pokemon.name}</strong>
              <span>{pokemon.price}</span>
            </td>
            <td>
              <div>
                <button type="button" onClick={() => decrement(pokemon)}>
                  <MdRemoveCircleOutline
                    size={20}
                    color={theme.backgroundColor}
                  />
                </button>
                <input type="number" readOnly value={pokemon.amount} />
                <button type="button" onClick={() => increment(pokemon)}>
                  <MdAddCircleOutline size={20} color={theme.backgroundColor} />
                </button>
              </div>
            </td>
            {subTotalHidden ? null : (
              <td className="subtotal">
                <strong>{pokemon.subtotal}</strong>
              </td>
            )}
            <td>
              <button type="button" onClick={() => removeFromCart(pokemon)}>
                <MdDelete size={20} color={theme.backgroundColor} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
