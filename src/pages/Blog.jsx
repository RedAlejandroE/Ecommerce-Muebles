
export const Blog = () => {
  return (
    <>
        <main className="contenido-principal contenedor">
      <h2 className="text-center">Nuestro Blog</h2>

      <section className="contenedor-blog">
        <div className="blog">
          <article className="entrada">
            <h2>Guia de colores</h2>

            <div className="imagen">
              <img src="/src/img/nosotros.jpg" alt="imagen blog" />
            </div>

            <div className="entrada-meta">
              <p>Fecha: <span>22 de Octubre del 2022</span></p>
              <p>Escrito por: <span>TiendaMueble</span></p>
            </div>

            <div className="entrada-blog">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt minus facere cum nam mollitia assumenda, architecto
                cumque facilis quos atque voluptas molestiae quidem error?
                Laudantium et nihil adipisci magni nostrum.
              </p>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis quis corrupti magnam modi amet accusantium
                laudantium enim, quibusdam illo maiores temporibus quae possimus
                obcaecati voluptatum! Dolores fuga sequi qui iusto.
              </p>
            </div>

            <a href="entrada.html" className="btn max-width-300" >Leer</a>
          </article>

          <article className="entrada">
            <h2>Guia de colores</h2>

            <div className="imagen">
              <img src="/src/img/nosotros.jpg" alt="imagen blog" />
            </div>

            <div className="entrada-meta">
              <p>Fecha: <span>22 de Octubre del 2022</span></p>
              <p>Escrito por: <span>TiendaMueble</span></p>
            </div>

            <div className="entrada-blog">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt minus facere cum nam mollitia assumenda, architecto
                cumque facilis quos atque voluptas molestiae quidem error?
                Laudantium et nihil adipisci magni nostrum.
              </p>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis quis corrupti magnam modi amet accusantium
                laudantium enim, quibusdam illo maiores temporibus quae possimus
                obcaecati voluptatum! Dolores fuga sequi qui iusto.
              </p>
            </div>

            <a href="entrada.html" className="btn max-width-300">Leer</a>
          </article>
        </div>

        <aside>
          <h3>Otras Entradas de Blog</h3>

          <ul>
            <li>
              <a href="entrada.html">Guia de Colores</a>
            </li>
            <li>
              <a href="entrada.html">Nuevos Modelos</a>
            </li>
            <li>
              <a href="entrada.html">Guia para diseño de interiores</a>
            </li>
            <li>
              <a href="entrada.html">Guia para diseño de exteriores</a>
            </li>
          </ul>
        </aside>
      </section>
    </main>
    </>
  )
}
