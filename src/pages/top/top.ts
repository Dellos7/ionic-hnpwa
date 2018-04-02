import { NodeHnNewTypeEnum, NodeHnNewMaxPagesEnum } from './../../providers/node-hn-api/node-hn-api';
import { Item } from './../../app/models/item';
import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NodeHnApiProvider } from '../../providers/node-hn-api/node-hn-api';
import { NewsListComponent } from '../../components/news-list/news-list';

/**
 * Generated class for the TopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top',
  templateUrl: 'top.html',
})
export class TopPage {

  pageNumber: number = 1;
  nodeHnNewTypeEnum = NodeHnNewTypeEnum;
  maxPages = NodeHnNewMaxPagesEnum.TOP;

  @ViewChild('newsList')
  private newsList: NewsListComponent;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {}

  nextPage() {
    this.pageNumber += 1;
    this.newsList.pageNumber = this.pageNumber;
    this.newsList.retrieve();
  }

  previousPage() {
    this.pageNumber -= 1;
    this.newsList.pageNumber = this.pageNumber;
    this.newsList.retrieve();
  }

}
