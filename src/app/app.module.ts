import { AskPageModule } from './../pages/ask/ask.module';
import { InfoPage } from './../pages/info/info';
import { JobsPage } from './../pages/jobs/jobs';
import { AskPage } from './../pages/ask/ask';
import { ShowPage } from './../pages/show/show';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TopPage } from './../pages/top/top';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NodeHnApiProvider } from '../providers/node-hn-api/node-hn-api';
import { NewsListComponent } from '../components/news-list/news-list';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NewPage } from '../pages/new/new';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    TopPage,
    NewPage,
    ShowPage,
    AskPage,
    JobsPage,
    //InfoPage,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //AskPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    NewPage,
    ShowPage,
    AskPage,
    JobsPage,
    TopPage,
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
