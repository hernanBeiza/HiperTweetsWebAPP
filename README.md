# HiperTweets

Esta aplicación obtiene los tweets según un #hashtag y los muestra en un landing

## Tecnologías

* Angular 5
* Twitter API

## Servidor de desarrollo

Ejecutar en la terminal `ng serve`. Y luego abrir en el navegador `http://localhost:4200/`. La aplicación se recargará automáticamente cuando hayan cambios en el código fuente.

## Compilar

Ejecutar en la terminal `ng build` para compilar el proyecto. El resultado de la compilación está en la carpeta `dist/`. Usar el flag `--prod`.

## API de Twitter
### Iniciar sesión

Primero hay que iniciar sesión usando oauth 2 enviando:

Header `Authorization: Basic Auth`

URL: `https://api.twitter.com/oauth2/token`

Método: `POST`

Username: `Customer API Key`

Password: `Customer API Secret Key`

#### Respuesta

La respuesta retornará un Bearer Token
{
    "token_type": "bearer",
    "access_token": "XXXXX"
}

### Buscar por un #hashtag específico
Usar el Bearer Token y enviarlo en la cabecera del request como **Bearer Token**

Header Bearer Token: `Agregar token aquí`

URL: `https://api.twitter.com/1.1/search/tweets.json?q=%23hiperactivo`

Método: `GET`

`%23 es # codificado para enviar vía URL`

### Referencias
http://www.developerdrive.com/2013/06/oauth2-and-the-twitter-api-a-wordpress-plugin/

https://medium.com/@federicojordn/simplertapp-twitter-search-api-with-node-js-29e4664db299

## Herramientas

Para codificar en base 64

https://www.base64encode.org/