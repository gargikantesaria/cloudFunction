import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CloudFunctionCallProvider {

  constructor(public http: Http) {
    console.log('Hello CloudFunctionCallProvider Provider');
  }

  callHelloFunction() {
    return new Promise<any>((resolve, reject) => {
      this.http.get('CLOUD_FUNCTION_URL').subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    })
  }

}
