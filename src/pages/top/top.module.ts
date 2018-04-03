import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopPage } from './top';
import { NewsListComponentModule } from '../../components/news-list/news-list.module';

@NgModule({
  declarations: [
    TopPage,
  ],
  imports: [
    NewsListComponentModule,
    IonicPageModule.forChild(TopPage),
  ],
})
export class TopPageModule {}
