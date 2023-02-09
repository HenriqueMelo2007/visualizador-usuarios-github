import { useState, useEffect } from 'react'
import {Card} from './components/card'

export function App() {
  const [user, setUser] = useState('')

  return (
    <div>
      <header>
        <h1>Digite o login do usuário que deseja visualizar</h1>
        <h2>{user}</h2>
        <div class='divHeader'>
          <input type="text" placeholder="Escreva o login do usuário" onChange={e => setUser(e.target.value)} />
          <button type='button' onClick={console.log('sim')}>Pesquisar</button>
        </div>

        
      </header>

    </div>
  )
}