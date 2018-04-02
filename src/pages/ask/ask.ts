import { NodeHnNewTypeEnum } from './../../providers/node-hn-api/node-hn-api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ask',
  templateUrl: 'ask.html',
})
export class AskPage {

  nodeHnNewTypeEnum = NodeHnNewTypeEnum;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AskPage');
  }

}
