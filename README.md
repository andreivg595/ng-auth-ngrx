# NgAuthNgrx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Fake Backend

The app itself is a basic Node/Express application with the following routes:\
\
http://localhost:1337/ping 	    GET 	Sanity Check\
http://localhost:1337/register 	POST 	Register a new user\
http://localhost:1337/login 	POST 	Log a user in\
http://localhost:1337/status 	GET 	Get user status\
\
$ git clone https://github.com/testdrivenio/fake-token-api \
$ cd fake-token-api\
$ npm install\
$ npm start\
\
It only works with test@test.com - test