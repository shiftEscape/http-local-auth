import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request, BaseRequestOptions, RequestMethod } from "@angular/http";
import { Observable} from "rxjs";

@Injectable()
export class PMISHttpService {

  private customHeaders: Array<any> = [];

  constructor(private http: Http) {
    this.http = http;
  }

  /**
   * Wraps GET method
   * @param {string} url - The endpoint URL to be fetched.
   * @returns Observable
   */
  public get (url:string): Observable<Response> {
    return this._request(url, RequestMethod.Get, null);
  }

  /**
   * Wraps POST method
   * @param {string} url - The endpoint URL to be fetched.
   * @param {Object} body - Payload request to be sent to server.
   * @returns Observable
   */
  public post (url:string, body:any): Observable<Response> {
    return this._request(url, RequestMethod.Post, body);
  }

  /**
   * Wraps PUT method
   * @param {string} url - The endpoint URL to be fetched.
   * @param {Object} body - Payload request to be sent to server.
   * @returns Observable
   */
  public put (url:string, body:any): Observable<Response> {
    return this._request(url, RequestMethod.Put, body);
  }

  /**
   * Wraps PATCH method
   * @param {string} url - The endpoint URL to be fetched.
   * @param {Object} body - Payload request to be sent to server.
   * @returns Observable
   */
  public patch (url:string, body:any): Observable<Response> {
    return this._request(url, RequestMethod.Patch, body);
  }

  /**
   * Wraps DELETE method
   * @param {string} url - The endpoint URL to be fetched.
   * @returns Observable
   */
  public delete (url:string): Observable<Response> {
    return this._request(url, RequestMethod.Delete, null);
  }

  /**
   * Appends headers for the next request
   * @param {string} key - Represents header key.
   * @param {string} value - Represents header value.
   */
  public addHeaders (key: string, value: string) {
    this.customHeaders.push({key: key, value: value});
  }

  /**
   * Appends headers for the next request
   * @param {string} url - The endpoint URL to be fetched.
   * @param {RequestMethod} method - HTTP Verb method to be used.
   * @param {Object} body - Payload request to be sent to server.
   * @returns Observable
   */
  private _request (url: string, method: RequestMethod, body?: any): Observable<Response> {

    let headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });

    this.createAuthorizationHeader(headers);
    this.appendCreatedHeaders(headers);

    let options = new BaseRequestOptions();
    options.headers = headers;
    options.url = url;
    options.method = method;
    options.body = body;
    options.withCredentials = true;

    let request = new Request(options);
    return this.http.request(request);

  }

  /**
   * Creates Authorization header to be used globally
   * @param {Headers} headers - Current Header data.
   */
  private createAuthorizationHeader (headers: Headers) {
    if(localStorage.getItem("token") !== null) {
      headers.append('Authorization',`Bearer ${localStorage.getItem("token")}`);
    }
  }

  /**
   * Appends custom headers defined before each request
   * @param {Headers} headers - Current Header data.
   */
  private appendCreatedHeaders (headers: Headers) {
    let createdHeaders = this.customHeaders;
    if(createdHeaders.length > 0) {
      for(var i in createdHeaders) {
        headers.append(createdHeaders[i]['key'], createdHeaders[i]['value']);
      } this.customHeaders = [];
    }
  }

}
