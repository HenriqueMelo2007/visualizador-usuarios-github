import style from './card.module.css'

export function Card (props) {
  return (

    <div className={style.container}>
      <header className={style.header}>
        <img className={style.image} src={props.imagem} alt="" />
        <h3>{props.login}</h3>
      </header>

      <main className={style.main}>
        <h4>Repositórios: {props.repos}</h4>
        <h4>Nome: {props.nome}</h4>
        <h4>Local: {props.local}</h4>
        <h4>Seguidores: {props.seguidores}</h4>
        <h4>Criado em: {props.criado}</h4>       
      </main>
    </div>
  )
}