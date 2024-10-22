## Descripción
Prueba técnica para MUTA donde se crea un FrontEnd (React.js, Next.js, TailwindCSS) con API de Pokemon, este proyecto renderiza las cartas de la pokedex del lado del servidor, lo que ayuda en el indexado del proyecto.

## Deployment
Visualizar proyecto en producción por medio del siguiente dominio:
    ```bash
    https://mute-dex.pilotbase6.com/
    ```

El proyecto está diseñado para mostrar la lista de Pokemones hasta 1025 ejemplares:
1. **Lista de Pokemones**: fetch obtenido desde el servidor, con un limite inicial de 20 Pokemones.
2. **Botón "Cargar más"**: Permite obtener los 20 Pokemones que siguen en la lista, esto es posible con la ayuda de useSearchParams y useRouter.
3. **Cartas Linkeables**: Cada carta permite redireccionar a una vista donde se obtiene la información del Pokemon.
4. **Botón y Barra de busqueda**: Esquina inferior derecha se encuentra un botón que despliega un searchBar con el que podemos buscar cualquier Pokemon de la lista de 1025 por medio de nombre.

## Requisitos

1. Node.js
2. VSC

## Instalación

1. Clonar el repositorio.
2. Instalar las dependencias del proyecto:

    ```bash
    npm install
    ```

3. Ejecutar el servidor de desarrollo:

    ```bash
    npm run dev
    ```

4. Abrir el navegador y acceder a:

    ```bash
    http://localhost:3000
    ```

5. Para construir el proyecto para producción:

    ```bash
    npm run build
    ```

6. Para iniciar el servidor en modo producción:

    ```bash
    npm run start
    ```
