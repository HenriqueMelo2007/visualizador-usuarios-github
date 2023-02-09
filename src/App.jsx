import { useState } from 'react'
import {Card} from './components/card'

export function App() {
  const [user, setUser] = useState()

  return (
    <div>
      <header>
        <h1>Digite o login do usuário que deseja visualizar</h1>
        <h2>{user}</h2>
        <input type="text" placeholder="Escreva o login do usuário" onChange={e => setUser(e.target.value)} />
      </header>

      <Card></Card>
    </div>
  )
}