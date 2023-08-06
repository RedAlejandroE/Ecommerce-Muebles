import { Link } from "react-router-dom"



const Header = () => {
  return (
    <>
        <header>
      <h1 className="nombre-sitio">Tienda <span>muebles</span></h1>
    </header>

    <div className="contenedor-navegacion">
      <nav className="nav-principal contenedor">
        <Link to="/">Inicio</Link>
        <Link to="/Nosotros">nosotros</Link>
        <Link to="/Tienda">Tienda</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/Galeria">Galeria</Link>
        <Link to="/Contacto">Contacto</Link>
      </nav>
    </div>
    </>
  )
}

export default Header