import { NgModule } from '@angular/core';
import { NewsListComponent } from './news-list';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [NewsListComponent],
	imports: [IonicModule],
	exports: [NewsListComponent]
})
export class NewsListComponentModule {}