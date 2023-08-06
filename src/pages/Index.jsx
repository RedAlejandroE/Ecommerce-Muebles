
const Index = () => {
  return (
    <>
      <div className="hero"></div>

      <section className="contenedor categorias">
      <h2 className="text-center">Categoria de productos</h2>

      <div className="listado-categorias">
        <div className="categoria">
          <img src="/src/img/categoria1.jpg" alt="imagen_categoria" />
          <a href="#">Oficina</a>
        </div>

        <div className="categoria">
          <img src="/src/img/categoria2.jpg" alt="imagen_categoria" />
          <a href="#">Hogar</a>
        </div>

        <div className="categoria">
          <img src="/src/img/categoria3.jpg" alt="imagen_categoria" />
          <a href="#">cocina</a>
        </div>
      </div>
    </section>

    <section className="sobre-nosotros">
      <div className="contenedor sobre-nosotros-grid">
        <div className="texto-nosotros">
          <h2>Sobre nosotros</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            sint ratione perferendis quis totam, natus aut fugit unde delectus,
            saepe officiis fuga repudiandae nisi veritatis! Corporis dicta amet
            praesentium nostrum.
          </p>
        </div>
      </div>
    </section>

    <main className="contenido-principal contenedor">
      <h2 className="text-center">Nuestros productos</h2>

      <div className="listado-productos">
        <div className="producto">
          <img src="/src/img/producto1.jpg" alt="producto1" />

          <div className="texto-producto">
            <h3>Producto 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quo.
            </p>
            <p className="precio">$1,000,000.00</p>

            <a className="btn" href="#">Agregar al carrito</a>
          </div>
          {/* <!-- Info producto --> */}
        </div>
        {/* <!-- Producto --> */}

        <div className="producto">
          <img src="/src/img/producto2.jpg" alt="producto1" />

          <div className="texto-producto">
            <h3>Producto 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quo.
            </p>
            <p className="precio">$2,000,000.00</p>

            <a className="btn" href="#">Agregar al carrito</a>
          </div>
          {/* <!-- Info producto --> */}
        </div>
        {/* <!-- Producto --> */}

        <div className="producto">
          <img src="/src/img/producto3.jpg" alt="producto1" />

          <div className="texto-producto">
            <h3>Producto 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quo.
            </p>
            <p className="precio">$3,000,000.00</p>

            <a className="btn" href="#">Agregar al carrito</a>
          </div>
          {/* <!-- Info producto --> */}
        </div>
        {/* <!-- Producto --> */}

        <div className="producto">
          <img src="/src/img/producto4.jpg" alt="producto1" />

          <div className="texto-producto">
            <h3>Producto 4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quo.
            </p>
            <p className="precio">$4,000,000.00</p>

            <a className="btn" href="#">Agregar al carrito</a>
          </div>
          {/* <!-- Info producto --> */}
        </div>
        {/* <!-- Producto --> */}

        <div className="producto">
          <img src="/src/img/producto5.jpg" alt="producto1" />

          <div className="texto-producto">
            <h3>Producto 5</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quo.
            </p>
            <p className="precio">$5,000,000.00</p>

            <a className="btn" href="#">Agregar al carrito</a>
          </div>
          {/* <!-- Info producto --> */}
        </div>
        {/* <!-- Producto --> */}

        <div className="producto">
          <img src="/src/img/producto6.jpg" alt="producto1" />

          <div className="texto-producto">
            <h3>Producto 6</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quo.
            </p>
            <p className="precio">$6,000,000.00</p>

            <a className="btn" href="#">Agregar al carrito</a>
          </div>
          {/* <!-- Info producto --> */}
        </div>
        {/* <!-- Producto --> */}
      </div>
      {/* <!-- Fin de listado de productos --> */}
    </main>
    </>
  )
}

export default Index