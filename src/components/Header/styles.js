import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 0 10px;
  background: #fff;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: 64px;
  margin: 0 auto;

  nav {
    display: flex;
    align-items: center;

    > a {
      color: #000;
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 3px;
      margin-right: 10px;
      padding-right: 10px;
      border-right: 1px solid #999;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;

  li {
    > a {
      color: #222;
    }
  }
`;
