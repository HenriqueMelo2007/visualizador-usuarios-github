import { useState, useEffect } from 'react'
import {Card} from './components/card'

export function App() {
  const [loginInput, setLoginInput] = useState('')
  const [userGitHub, setUserGitHub] = useState('')
  const [infoUserGitHub, setInfoUserGitHub] = useState({imagem: '', login: '', repos: '', nome: '', local: '', seguidores: '', criado: '', id: '', seguindo: '', atualizado: ''})

  function add() {
    setUserGitHub(loginInput)
  }

  useEffect(() => {
    async function buscandoNaApi () {
      const urlAPI = `https://api.github.com/users/${userGitHub}`
      const jsonAPI = await fetch(urlAPI).then(u => u.json()).then(data => {
        setInfoUserGitHub({imagem: data.avatar_url, login: data.login, repos: data.public_repos, nome: data.name, local: data.location, seguidores: data.followers, criado: data.created_at, id: data.id, seguindo: data.following, atualizado: data.updated_at})
      })

    }

    buscandoNaApi()
  }, [userGitHub])


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

      <Card imagem={infoUserGitHub.imagem} login={infoUserGitHub.login} repos={infoUserGitHub.repos} nome={infoUserGitHub.nome} local={infoUserGitHub.local} seguidores={infoUserGitHub.seguidores} criado={infoUserGitHub.criado} id={infoUserGitHub.id} seguindo={infoUserGitHub.seguindo} atualizado={infoUserGitHub.atualizado} />
      
    </div>
  )
}