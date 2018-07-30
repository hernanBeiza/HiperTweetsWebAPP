# TweetsLanding

Esta aplicación obtiene los tweets según un #hashtag y los muestra en un landing

## Tecnologías

* Angular 5
* Twitter API

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

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