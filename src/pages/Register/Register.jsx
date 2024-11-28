import styles from './Register.module.css'

import { useEffect, useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      name,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas não são iguais.");
      return;
    }

    fetch('http://localhost:3004/users', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  };

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="name"
            required
            placeholder="Nome do usuário"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira a senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </label>
        {/* {!loading && <button className="btn">Entrar</button>} */}
        <button className="btn">Registrar</button>
        {/* {loading && ( */}
          {/* <button className="btn" disabled>
            Aguarde...
          </button> */}
        {/* )} */}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Register