import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AskPage } from './ask';
import { NewsListComponentModule } from '../../components/news-list/news-list.module';

@NgModule({
  declarations: [
    AskPage,
  ],
  imports: [
    NewsListComponentModule,
    IonicPageModule.forChild(AskPage),
  ],
})
export class AskPageModule {}
