
export const Contacto = () => {

  return (
    <>
    <main className="contenido-principal contenedor">
      <h2 className="text-center">Contacto</h2>

      
      <form className="formulario">
        <fieldset>
          <legend>Tus Datos</legend>

          <div className="campo">
            <label htmlFor="nombre">Nombre: </label>
            <input id="nombre" type="text" placeholder="Tu nombre" required />
          </div>

          <div className="campo">
            <label htmlFor="asunto">Asunto: </label>
            <input id="asunto" type="text" placeholder="Tu asunto" />
          </div>

          <div className="campo">
            <label htmlFor="email">E-mail: </label>
            <input id="email" type="email" placeholder="Tu email" />
          </div>

          <div className="campo">
            <label htmlFor="tel">Telefono: </label>
            <input id="tel" type="tel" placeholder="Tu Telefono" />
          </div>

          <div className="campo">
            <label htmlFor="mensaje">Mensaje: </label>
            <textarea rows="10" cols="20" placeholder="Hello friend"></textarea>
          </div>
        </fieldset>

        <fieldset>
          <legend>País</legend>

          <div className="campo">
            <label htmlFor="pais">País</label>
            <select id="pais">
              <option value="">Elege un país</option>
              <option value="MX">México</option>
              <option value="PR">Perú</option>
              <option value="CO">Argentina</option>
              <option value="AR">Colombia</option>
              <option value="CL">Chile</option>
              <option value="ES">España</option>
            </select>
          </div>
        </fieldset>

        <fieldset>
          <legend>Informacion Extra</legend>
          
          <div className="campo">
            <label htmlFor="cliente">Cliente</label>
            <input type="radio" name="tipo" id="cliente" value="cliente" />
          </div>

          <div className="campo">
            <label htmlFor="proveedor">Proveedor</label>
            <input id="proveedor" type="radio" name="tipo" value="proveedor" />
          </div>

          <div className="campo">
            <label htmlFor="categoria">Categoria de Interés</label>
            <input list="categorias" name="categorias" />
            <datalist id="categorias">
              <option value="Cocina" />
              <option value="Exterior" />
              <option value="Recamaras" />
              <option value="Oficina" />
              <option value="Television" />
            </datalist>
          </div>
        </fieldset>

        <input className="btn" type="submit" value="Enviar Formulario" />
      </form>
    </main>

    </>
  )
}
