import { AskPageModule } from './../pages/ask/ask.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NodeHnApiProvider } from '../providers/node-hn-api/node-hn-api';
//import { NewsListComponent } from '../components/news-list/news-list';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NewPage } from '../pages/new/new';

@NgModule({
  declarations: [
    MyApp,
    //InfoPage,
    //NewsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NodeHnApiProvider,
    InAppBrowser
  ]
})
export class AppModule {}
