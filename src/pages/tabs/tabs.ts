import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  topPage = 'TopPage';
  newPage = 'NewPage';
  showPage = 'ShowPage';
  askPage = 'AskPage';
  jobsPage = 'JobsPage';
  infoPage = 'InfoPage';

  constructor() {

  }
}
