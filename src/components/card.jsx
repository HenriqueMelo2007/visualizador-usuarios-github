import style from './card.module.css'

export function Card () {
  return (

    <div className={style.container}>
      <header className={style.header}>
        <img className={style.image} src="https://avatars.githubusercontent.com/u/86623792?v=4" alt="" />
        <h3>HenriqueMelo2007</h3>
      </header>

      <main>
        <h4>repositorios</h4>
        <h4>nome</h4>
        <h4>local</h4>
        <h4>seguidores</h4>
        <h4>created at</h4>
      </main>
    </div>
  )
}