import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(-120deg, #999, #222);
`;

export const Content = styled.div`
  max-width: 315px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  border-radius: 4px;
  background: #eee;

  form {
    display: flex;
    flex-direction: column;

    input {
      height: 44px;
      margin-bottom: 20px;
      padding: 0 10px;
      border: 0;
      border-radius: 4px;
      color: #fff;
      background: rgba(0, 0, 0, 0.3);

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      height: 44px;
      margin-bottom: 20px;
      border: 0;
      border-radius: 4px;
      color: #333;
      background: rgba(255, 255, 255, 0.8);
      transition: background 0.4s;

      &:hover {
        background: ${darken(0.2, '#fff')};
      }
    }

    a {
      color: #eee;
    }
  }
`;
