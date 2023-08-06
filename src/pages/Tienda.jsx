export const Tienda = () => {
  const productos = [
    {
      imagen: '/src/img/producto1.jpg',
      nombre: 'Producto 1',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quo.',
      precio: '$1,000,000.00'
    },
    {
      imagen: '/src/img/producto2.jpg',
      nombre: 'Producto 2',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quo.',
      precio: '$2,000,000.00'
    },
    // Agregar más productos aquí
    {
      imagen: '/src/img/producto3.jpg',
      nombre: 'Producto 3',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quo.',
      precio: '$3,000,000.00'
    },
    {
      imagen: '/src/img/producto4.jpg',
      nombre: 'Producto 4',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quo.',
      precio: '$4,000,000.00'
    },
    {
      imagen: '/src/img/producto5.jpg',
      nombre: 'Producto 5',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quo.',
      precio: '$5,000,000.00'
    },
    {
      imagen: '/src/img/producto6.jpg',
      nombre: 'Producto 6',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quo.',
      precio: '$6,000,000.00'
    },
  ];

  return (
    <main className="contenido-principal contenedor">
      <h2 className="text-center">Nuestros productos</h2>
  
      <div className="listado-productos">
        {productos.map((producto, index) => (
          <div className="producto" key={index}>
            <img src={producto.imagen} alt={producto.nombre} />
  
            <div className="texto-producto">
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p className="precio">{producto.precio}</p>
  
              <a className="btn" href="#">Agregar al carrito</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}


