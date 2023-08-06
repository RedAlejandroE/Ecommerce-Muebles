
const Footer = () => {
  return (
    <>
        <footer className="site-footer">
      <div className="grid-footer contenedor">
        <div>
          <h3>Categorias</h3>
          <nav className="footer-menu">
            <a href="#">cocina</a>
            <a href="#">oficina</a>
            <a href="#">jardin</a>
            <a href="#">cochera</a>
            <a href="#">Dormitorios</a>
          </nav>
        </div>

        <div>
          <h3>Sobre nosostros</h3>
          <nav className="footer-menu">
            <a href="#">Nuestra historia</a>
            <a href="#">mision, vision y valores</a>
            <a href="#">carreras</a>
            <a href="#">politica de privacidad</a>
            <a href="#">terminos del servicio</a>
          </nav>
        </div>

        <div>
          <h3>Soporte</h3>
          <nav className="footer-menu">
            <a href="#">preguntas frecuentes</a>
            <a href="#">ayuda en linea</a>
            <a href="#">confianza y seguridad</a>
          </nav>
        </div>
      </div>
      <p className="copyright">footer Lorem ipsum dolor sit</p>
    </footer>
    </>
  )
}

export default Footer