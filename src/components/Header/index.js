import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';

import { signOut } from '../../store/modules/auth/actions';

import { Container, Content, Menu } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

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
              <button onClick={handleSignOut}>Sair da Aplicação</button>
            </li>
          </Menu>
        </nav>
        <Notifications />
      </Content>
    </Container>
  );
}
