import { NewsListComponent } from './../../components/news-list/news-list';
import { NodeHnNewTypeEnum } from './../../providers/node-hn-api/node-hn-api';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {

  pageNumber: number = 1;
  nodeHnNewTypeEnum = NodeHnNewTypeEnum;

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