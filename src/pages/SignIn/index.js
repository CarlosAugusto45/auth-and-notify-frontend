import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(signInRequest(email, password));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Seu e-mail: "
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Sua senha:"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button type="submit">Acessar</button>
      <Link to="/register">Não possui uma conta? Cadastra-se</Link>
    </form>
  );
}
