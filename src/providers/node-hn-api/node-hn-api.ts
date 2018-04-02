import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NodeHnApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NodeHnApiProvider {

  private nodeHNBaseUrl: string = 'https://node-hnapi.herokuapp.com';
  private topUrl: string = '/news';
  private newsUrl: string = '/newest';
  private showUrl: string = '/show';
  private askUrl: string = '/ask';
  private jobsUrl: string = '/jobs';

  constructor(public http: HttpClient) {
    console.log('Hello NodeHnApiProvider Provider');
  }

  retrieveFromEnum( type: NodeHnNewTypeEnum, pageNumber: number ) {
    switch( type ) {
      case NodeHnNewTypeEnum.TOP:
        return this.retrieveTop( pageNumber );
      case NodeHnNewTypeEnum.NEW:
        return this.retrieveNews( pageNumber );
      case NodeHnNewTypeEnum.SHOW:
        return this.retrieveShow( pageNumber );
      case NodeHnNewTypeEnum.ASK:
        return this.retrieveAsk( pageNumber );
      case NodeHnNewTypeEnum.JOBS:
        return this.retrieveJobs( pageNumber );
    }
  }

  retrieveTop( page: number ) {
    return this.http.get( this.nodeHNBaseUrl + this.topUrl + '?page=' + page );
  }

  retrieveNews( page: number ) {
    return this.http.get( this.nodeHNBaseUrl + this.newsUrl + '?page=' + page );
  }

  retrieveShow( page: number ) {
    return this.http.get( this.nodeHNBaseUrl + this.showUrl + '?page=' + page );
  }

  retrieveAsk( page: number ) {
    return this.http.get( this.nodeHNBaseUrl + this.askUrl + '?page=' + page );
  }

  retrieveJobs( page: number ) {
    return this.http.get( this.nodeHNBaseUrl + this.jobsUrl + '?page=' + page );
  }

}

export enum NodeHnNewTypeEnum {
  TOP = 'news',
  NEW = 'newest',
  SHOW = 'show',
  ASK = 'ask',
  JOBS = 'jobs'
}

export enum NodeHnNewMaxPagesEnum {
  TOP = 10,
  NEW = 10,
  SHOW = 2,
  ASK = 3,
  JOBS = 1
}