# Contador de clics.

Proyecto creado con el framework **React** de JS.

Este proyecto es una aplicación creada para contar clics recibidos en el botón "Clic" o reiniciar el contador al presionar el botón "reiniciar". Fue creado como un ejercicio del curso de React de freeCodeCamp, con adaptaciones a su estilo e incluyendo una sorpresa al llegar al clic número 23.

Entre sus directorios se encuentran:

- public
  - Aquí podemos encontrar el archivo index.html con el esqueleto en html de la aplicación.
- src
  - Directorio componentes:
    - Boton.jsx. Aquí se encuentra el componente que represeanta a ambos botones ("clic" y "reiniciar").
    - contador.jsx. Aquí se encuentra el componente del contador, el cual avanza según el número de clics realizados.
  - Directorio hojas-de-estilo:
    - Boton.css. Tiene el estilo de los botones.
    - Contador.css. Tiene el estilo del contador.
  - Directorio imagenes:
    - Tiene una imágen sorpresa, a utilizar al llegar al número 23.
  - Archivo App.js. Tiene la componente principal.
  - Archivo App.css. Tiene el estilo de la componente principal.
  - Archivo index.js. Tiene el esqueleto en JS y renderiza las componentes anteriores.
  - Archivo index.css. Tiene algunos estilos, incluyendo el pie de página.

## Instrucciones para correr la aplicación.
Una vez descargado el repositorio, en la consola utilizar el comando "npm start".