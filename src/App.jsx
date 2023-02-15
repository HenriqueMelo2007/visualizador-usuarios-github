import { useState, useEffect } from 'react'
import {Card} from './components/card'

export function App() {
  const [loginInput, setLoginInput] = useState('')
  const [userGitHub, setUserGitHub] = useState('')
  const [infoUserGitHub, setInfoUserGitHub] = useState({local: ''})

  function add() {
    setUserGitHub(loginInput)
  }

  useEffect(() => {
    async function buscandoNaApi () {
      const urlAPI = `https://api.github.com/users/${userGitHub}`
      const jsonAPI = await fetch(urlAPI).then(u => u.json()).then(data => {
        setInfoUserGitHub({local: data.location})
      })

    }

    buscandoNaApi()
  }, [userGitHub])

  useEffect(() => {
    console.log(infoUserGitHub.local)
  }, [infoUserGitHub])


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