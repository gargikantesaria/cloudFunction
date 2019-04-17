import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class CloudFunctionCallProvider {

  constructor(public http: Http) {
    console.log('Hello CloudFunctionCallProvider Provider');
  }

  callHelloFunction() {
    return new Promise<any>((resolve, reject) => {
      var headers = new Headers();
      // headers.append('Content-Type', 'application/x-www-form-urlencoded');
      // headers.append('Access-Control-Allow-Origin' , '*')
      let options = new RequestOptions({ headers: headers });
      this.http.get('CLOUD_FUNCTION_URL').subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    })
  }

}
