import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CloudFunctionCallProvider } from '../../providers/cloud-function-call/cloud-function-call';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public cloudFunctonService: CloudFunctionCallProvider) {

  }

  ionViewDidLoad() {
    this.callingCloudFunction();
  }

  callingCloudFunction() {
    this.cloudFunctonService.callHelloFunction().then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

}
