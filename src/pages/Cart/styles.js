import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    button {
      background-color: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: 700;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background-color: ${darken(0.03, '#7159c1')};
      }
    }
  }
`;

export const ProducTable = styled.table`
  width: 100%;

  thead {
    color: #999;
    text-align: left;
  }

  thead th {
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    vertical-align: middle;
    border-bottom: solid 1px #eee;
  }

  tbody td:first-child {
    padding-left: 0;
  }

  img {
    height: 100px;
    border: solid 1px #eee;
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

  .amount {
    display: flex;
    align-items: center;

    input {
      border: solid 1px #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: 700;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
