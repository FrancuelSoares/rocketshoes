import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md';

import { Container, ProducTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProducTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Tênis para correr</strong>
              <span>R$ 150,00</span>
            </td>
            <td>
              <div className="amount">
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 300,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Tênis para correr</strong>
              <span>R$ 150,00</span>
            </td>
            <td>
              <div className="amount">
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 300,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProducTable>
      <footer>
        <button type="button">Finalizar Pedido</button>
        <Total>
          <span>TOTAL:</span>
          <strong>R$ 1920,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
