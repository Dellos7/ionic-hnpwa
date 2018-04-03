import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobsPage } from './jobs';
import { NewsListComponentModule } from '../../components/news-list/news-list.module';

@NgModule({
  declarations: [
    JobsPage,
  ],
  imports: [
    NewsListComponentModule,
    IonicPageModule.forChild(JobsPage),
  ],
})
export class JobsPageModule {}
