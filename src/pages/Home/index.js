import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>
          Tênis de Caminhada Leve Confortável um titulo muito grande aqui
        </strong>
        <span>R$ 89,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao Carinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis de Caminhada Leve Confortável</strong>
        <span>R$ 89,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao Carinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis de Caminhada Leve Confortável</strong>
        <span>R$ 89,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao Carinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis de Caminhada Leve Confortável</strong>
        <span>R$ 89,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao Carinho</span>
        </button>
      </li>
    </ProductList>
  );
}
