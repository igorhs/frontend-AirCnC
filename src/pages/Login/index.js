import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }){

    const [email, setEmail] = useState('');

    //Aqui faremos a autenticação com uma função assíncrona
    async function handleSubmit (event){
      //previnir o funcionamento padrão - não enviar p/ outra página
      event.preventDefault();
  
      //Chamar api para mandar nosso usuário para o nosso DB
      const response = await api.post('/sessions', { email });
      //nós vamos fazer uma requisição para mandar o e-mail ao usuário e, dps que tiver a resposta,
      //armazenar em response
  
      //console.log(response);
  
      //Para obtermos um dado do nosso usuário
      const { _id } = response.data;
  
      localStorage.setItem('user', _id);

      history.push('/dashboard');   
    }

    return (
        <React.Fragment>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>
                <input 
                type="email"
                id="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
                />

                <button className="btn" type="submit">Entrar</button>

            </form>
        </React.Fragment>
    )
}