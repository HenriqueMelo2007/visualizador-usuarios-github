import { useState, useEffect } from 'react'
import {Card} from './components/card'

export function App() {
  const [loginInput, setLoginInput] = useState('')
  const [user, setUser] = useState([])

  function add() {
    setUser([loginInput])
  }

  useEffect(() => {
    async function buscandoNaApi () {}
  }, [user])


  return (
    <div>
      <header>
        <h1>Digite o login do usuário que deseja visualizar</h1>
        <h2>{loginInput}</h2>
        <div id='divHeader'>
          <input type="text" placeholder="Escreva o login do usuário" onChange={e => setLoginInput(e.target.value)} />
          <button type='button' onClick={add}>Pesquisar</button>
        </div>

        
      </header>

    </div>
  )
}