import { Link } from "react-router-dom"

const Appbar = () => {
  return (
    <nav>
      <div>
        <h1>Acontece Aqui</h1>
        <Link to="/">
          Home
        </Link>
        <Link to='/events'>
          Eventos
        </Link>
        <Link to='/categories'>
          Categorias
        </Link>
        <Link to='/about'>
          Sobre
        </Link>
      </div>
    </nav>
  )
}

export default Appbar