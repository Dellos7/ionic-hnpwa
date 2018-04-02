import { InfoPage } from './../info/info';
import { JobsPage } from './../jobs/jobs';
import { AskPage } from './../ask/ask';
import { TopPage } from './../top/top';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NewPage } from '../new/new';
import { ShowPage } from '../show/show';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  topPage = TopPage;
  newPage = NewPage;
  showPage = ShowPage;
  askPage = AskPage;
  jobsPage = JobsPage;
  infoPage = InfoPage;

  constructor() {

  }
}
