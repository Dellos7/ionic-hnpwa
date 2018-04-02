import { Item } from './../../app/models/item';
import { NodeHnApiProvider, NodeHnNewTypeEnum } from './../../providers/node-hn-api/node-hn-api';
import { Component, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the NewsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'news-list',
  templateUrl: 'news-list.html'
})
export class NewsListComponent {

  @Input('type') public type: NodeHnNewTypeEnum;
  @Input('pageNumber') public pageNumber: number;

  news: Item[] = [];
  fakeNews: Array<any> = new Array(10);

  constructor( private nodeHnApiProvider: NodeHnApiProvider, private iab: InAppBrowser ) {
    var self = this;
    setTimeout(function() {
      self.retrieve();
    }, 1000);
  }

  public retrieve() {
    var self = this;
    let newsJson = this.getData().subscribe(
      ( data ) => {
        let items = [];
        for( let key in data ){
          let theNew = Object.values(data)[key];
          let item = new Item(
            theNew.id,
            theNew.title,
            theNew.points,
            theNew.user,
            theNew.time,
            theNew.time_ago,
            theNew.comments_count,
            theNew.type,
            theNew.url,
            theNew.domain
          );
          items.push(item);
        }
        self.news = items;
        return items;
      }
    );
  }

  getData() {
    return this.nodeHnApiProvider.retrieveFromEnum( this.type, this.pageNumber );
  }

  getItemNumber( i: number ) {
    return (( this.pageNumber-1 ) *30) + ( i+1 );
  }

  openNew( theNew: Item ) {
    this.iab.create( theNew.url );
  }

}
