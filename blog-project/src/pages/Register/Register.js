import React from 'react'
import styles from './Register.module.css'

import {useState, useEffect} from 'react'
import { useAuthentication } from '../../hooks/useAutentication';

const Register = () => {

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const {createUser, error: authError, loading} = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    const user = {
      displayName,
      email,
      password
    }
    if(password !== confirmPassword){
      setError("As senhas precisam ser iguais!");
      return
    }

    const rest = await createUser(user);
    console.log(user);
  }

  //Use effect para mapear se o erro mudou
  useEffect (()=>{
    if(authError){
      setError(authError);
    }
  },[authError]);


  return (
    <div className={styles['register']}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input type="text" name="displayName" onChange={(e)=>setDisplayName(e.target.value)} required placeholder='Nome_do_usuário' />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} required placeholder='email_do_usuário' />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} required placeholder='senha_do_usuário' />
        </label>
        <label>
          <span>Confirmar senha:</span>
          <input type="password" name="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)} required placeholder='confirmar_senha_do_usuário' />
        </label>
        {!loading && <button className="btn">Cadastrar</button>}
        {loading && <button className='btn' disabled>Aguarde...</button>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Register