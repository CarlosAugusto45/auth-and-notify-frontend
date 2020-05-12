import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';

import { Container, Content, Menu } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/home">FIRST</Link>
          <Menu>
            <li>
              <Link to="/home">Ínicio</Link>
            </li>
            <li>
              <Link to="/home">Sair da Aplicação</Link>
            </li>
          </Menu>
        </nav>
        <Notifications />
      </Content>
    </Container>
  );
}
