import React from 'react';
import swal from 'sweetalert';
import { useTheme } from '../../hooks/theme';
import { Container, Total } from './styles';
import PokeTable from '../../components/PokeTable';

export default function Cart() {
  const { theme } = useTheme();
  const subTotalHidden = false;

  return (
    <Container theme={theme}>
      <div>
        <PokeTable subTotalHidden={subTotalHidden} />
      </div>

      <footer>
        <button
          type="button"
          onClick={() =>
            swal(
              'Compra Finalizada',
              'Você recebeu R$50,00 em cashback',
              'success',
            )
          }
        >
          Finalizar pedido
        </button>

        <Total>
          <span>TOTAL</span>
          <strong>R$20,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
