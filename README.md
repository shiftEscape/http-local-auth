# http-local-auth
[![version](https://img.shields.io/npm/v/http-local-auth.svg?style=flat-square)](http://npm.im/http-local-auth) [![downloads](https://img.shields.io/npm/dm/http-local-auth.svg?style=flat-square)](https://npm-stat.com/charts.html?package=http-local-auth&from=2016-11-24) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![MIT License](https://img.shields.io/npm/l/http-local-auth.svg?style=flat-square)](http://opensource.org/licenses/MIT)

### Installation ###
```sh
npm install --save http-local-auth
```
### Usage ###
```javascript
import { HttpLocalAuthService } from 'http-local-auth';
```

And inject the service to the constructor:
```javascript
constructor (private HttpLocalAuth: HttpLocalAuthService) { ...
```
And you can use all request type provided: **GET**, **POST**, **PATCH**, **PUT** and **DELETE**
```javascript
HttpLocalAuth.get('/path-to-api-endpoint-or-file').subscribe((successCallback) => {
    // do something
}, (errorCallback) => {
    // do something
});
```
### Adding custom headers ###
```javascript
HttpLocalAuth.addHeaders({<key>, <value>});
```

### Note ###
By default, `'Accept': 'application/json'` and `'Content-Type': 'application/json'` headers are already added. Also, the `Authorization` header is being appended **every request** with  a value from `localStorage` item `token`.