import style from './card.module.css'

export function Card (props) {
  return (

    <div className={style.container}>
      <header className={style.header}>
        <img className={style.image} src={props.imagem} alt="" />
        <h3>{props.login}</h3>
      </header>

      <main className={style.main}>
        <h4>Nome: <span className={style.span}>{props.nome}</span></h4>
        <h4>Id: <span className={style.span}>{props.id}</span></h4>
        <h4>Repositórios: <span className={style.span}>{props.repos}</span></h4>
        <h4>Local: <span className={style.span}>{props.local}</span></h4>
        <h4>Seguidores: <span className={style.span}>{props.seguidores}</span></h4>
        <h4>Seguindo: <span className={style.span}>{props.seguindo}</span></h4>
        <h4>Criado em: <span className={style.span}>{props.criado}</span></h4>
        <h4>Atualizado pela última vez em: <span className={style.span}>{props.atualizado}</span></h4>        
      </main>
    </div>
  )
}