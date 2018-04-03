import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPage } from './new';
import { NewsListComponentModule } from '../../components/news-list/news-list.module';

@NgModule({
  declarations: [
    NewPage,
  ],
  imports: [
    NewsListComponentModule,
    IonicPageModule.forChild(NewPage),
  ],
})
export class NewPageModule {}
