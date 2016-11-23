# HTTP Local Auth

### Installation ###
```sh
npm install --save http-local-auth
```
### Usage ###
```sh
import { HttpLocalAuthService } from 'http-local-auth';
```

And inject the service to the constructor:
```sh
constructor (private HttpLocalAuth: HttpLocalAuthService) { ...
```
And you can use all request type provided: **GET**, **POST**, **PATCH**, **PUT** and **DELETE**
```sh
HttpLocalAuth.get('/path-to-api-endpoint-or-file').subscribe((successCallback) => {
    // do something
}, (errorCallback) => {
    // do something
});
```
### Adding custom headers ###
```sh
HttpLocalAuth.addHeaders({<key>, <value>});
```

### Note ###
By default, `'Accept': 'application/json'` and `'Content-Type': 'application/json'` headers are already added. Also, the `Authorization` header is being appended **every request** with  a value from `localStorage` item `token`.
