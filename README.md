# Real Trends Challenge

Este es un proyecto que se hizo para la entrevista técnica de Real Trends.

## Tabla de Contenidos

1. [Descripción](#descripción)
2. [Librerias](#Librerias)
3. [Instalación](#instalación)
4. [Estructura del Proyecto](#estructura-del-proyecto)

## Descripción

La aplicación utiliza la API de MercadoLibre para obtener datos que se muestran en una pantalla principal y una pantalla de detalles. Los usuarios pueden filtrar estos datos por nombre mediante una barra de búsqueda y por condición (usado o nuevo) mediante un filtro. Al seleccionar un producto, se accede a la pantalla de detalles donde se muestra información adicional como fotografías adicionales y descripciones. Además, la aplicación incluye una pestaña de favoritos donde los usuarios pueden ver los productos marcados como favoritos o sacarlos. Se trato de reutilizar la mayor cantidad de componentes, espero que les guste! 

# Mi Proyecto de React Native

Este proyecto utiliza varias librerías para diferentes funcionalidades. A continuación se presentan las librerías utilizadas y su propósito:

- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons): Para tener íconos.
- [Zustand](https://github.com/pmndrs/zustand): Para manejo de estado.
- [axios](https://github.com/axios/axios): Para el manejo de peticiones.
- [react-navigation](https://reactnavigation.org/): Para la navegación. Nota: Inicialmente se pedia usar [react-native-navigation](https://github.com/wix/react-native-navigation), pero debido a problemas de compatibilidad, se optó por `react-navigation`.

## Instalación

Instrucciones para instalar y configurar el proyecto en un entorno local.

```bash
# Clona el repositorio
git clone https://github.com/Mggadea/RealTrendsChallenge.git

# Navega al directorio del proyecto
cd RealTrendsChallenge

# Instala las dependencias
npm install
cd ios && pod install 

# Ejecuta el proyecto
npm run start
```

## Estructura del Proyecto

- **`src/`**: Aquí se encuentra todo el código fuente de la aplicación.
  - **`components/`**: Componentes reutilizables en toda la aplicación.
  - **`screens/`**: Pantallas principales de la aplicación.
  - **`navigation/`**: Configuración de la navegación entre pantallas.
  - **`helpers/`**: Funciones y utilidades diversas.
  - **`store/`**: Condiene la lógica de estado global de la aplicación .
  - **`types/`**: Contiene los typos e interfaces de la aplicación.
  - 
- **`android/` y `ios/`**: Contienen los archivos específicos de configuración y compilación para Android e iOS respectivamente.
- **`package.json`**: Archivo que describe las dependencias del proyecto y los scripts disponibles.


