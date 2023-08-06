
export const Galeria = () => {
  const images = [
    '/src/img/galeria_01.jpg',
    '/src/img/galeria_02.jpg',
    '/src/img/galeria_03.jpg',
    '/src/img/galeria_04.jpg',
    '/src/img/galeria_05.jpg',
    '/src/img/galeria_06.jpg',
    '/src/img/galeria_07.jpg',
    '/src/img/galeria_08.jpg',
    '/src/img/galeria_09.jpg'
  ];

  return (
    <main className="contenido-principal contenedor">
      <h2 className="text-center">Galeria</h2>
      <ul className="galeria">
        {images.map((image, index) => (
          <li key={index}>
            <a href={image}>
              <img src={image} alt={`imagen Galeria ${index}`} />
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

