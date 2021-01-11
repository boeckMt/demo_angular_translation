# TranslateMe

Check out the guide https://angular.io/guide/i18n

1. Add the localize package `ng add @angular/localize`
2. Adjust your app's source locale for the build by setting the source locale in the sourceLocale field in angular.json
3. Define locales in the build configuration -> https://angular.io/guide/i18n#define-locales-in-the-build-configuration
4. Use built-in data angular pipes DatePipe | CurrencyPipe | DecimalPipe | PercentPipe
5. Mark templates for translations: [see app.component.html](src/app/app.component.html)
6. Use `$localize` function for transaltions in typescript files
7. Extract the source language file `ng extract-i18n --output-path=src/locale --ivy`


8. USE XLIFF to manage transaltions https://marketplace.visualstudio.com/items?itemName=rvanbekkum.xliff-sync
- 1. XLIFF: Create New Target File(s) (add file e.g. de-DE)
- 2. XLIFF: Synchronize to Single File (when the file e.g. messages.de-DE.xlf is open )


9. Serve localized `ng serve --configuration=de` //configuration is set in the angular.json from stepp 2 

10. Build distributable files for each locale 
(The build process replaces the original text with translated text, and sets the LOCALE_ID token for each distributable copy of the app. It also loads and registers the locale data)
---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

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
