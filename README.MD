# angular-cc-expiration-date

## Installation

To install this library, run:

```bash
$ npm install angular-cc-expiration-date --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install angular-cc-expiration-date
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import your library
import { ExpirationDateModule } from 'angular-cc-expiration-date';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,

    // Specify your library as an import
    ExpirationDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml

```


```xml
<!-- To use the exp-date directive which will format a text input into a date -->
<input type="text" expDate>
```

```xml
<!-- To use the exp-date pipe which will format a text binded variable into a date -->
<h1 [innerHtml]="someStringVariable | expDate"></h1>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Everett Zettersten](mailto:Everett@zettersten.com)
# angular-cc-expiration-date
