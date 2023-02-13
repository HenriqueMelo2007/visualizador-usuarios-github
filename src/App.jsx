import { useState, useEffect } from 'react'
import {Card} from './components/card'

export function App() {
  const [loginInput, setLoginInput] = useState('')
  const [user, setUser] = useState([])

  useEffect(() => {}, [])

  return (
    <div>
      <header>
        <h1>Digite o login do usuário que deseja visualizar</h1>
        <h2>{loginInput}</h2>
        <div class='divHeader'>
          <input type="text" placeholder="Escreva o login do usuário" onChange={e => setLoginInput(e.target.value)} />
          <button type='button' onClick={console.log('sim')}>Pesquisar</button>
        </div>

        
      </header>

    </div>
  )
}