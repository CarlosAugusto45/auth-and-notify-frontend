import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit="">
      <input
        type="text"
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
