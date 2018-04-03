import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowPage } from './show';
import { NewsListComponentModule } from '../../components/news-list/news-list.module';

@NgModule({
  declarations: [
    ShowPage,
  ],
  imports: [
    NewsListComponentModule,
    IonicPageModule.forChild(ShowPage),
  ],
})
export class ShowPageModule {}
