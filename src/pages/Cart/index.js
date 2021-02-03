import React from 'react';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/theme';
import { Container, Total } from './styles';
import PokeTable from '../../components/PokeTable';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

export default function Cart() {
  const { theme } = useTheme();
  const subTotalHidden = false;

  const dispatch = useDispatch();

  const total = useSelector((state) =>
    formatPrice(
      state.cart
        .filter((poke) => poke.type === theme.type)
        .reduce((sumTotal, poke) => {
          sumTotal += poke.id * poke.amount;
          return sumTotal;
        }, 0),
    ),
  );

  const handleCheckout = (pokeType) => {
    swal(
      'Compra Finalizada',
      'Você recebeu R$50,00 em cashback',
      'success',
    ).then(() => dispatch(CartActions.emptyCart(pokeType)));
  };

  return (
    <Container theme={theme}>
      <Link to={`/store/${theme.type}`}>
        <header>
          <IoChevronBackCircleOutline size={20} />
          <span>Voltar</span>
        </header>
      </Link>
      <div>
        <PokeTable subTotalHidden={subTotalHidden} />
      </div>

      <footer>
        <button type="button" onClick={() => handleCheckout(theme.type)}>
          Finalizar pedido
        </button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
