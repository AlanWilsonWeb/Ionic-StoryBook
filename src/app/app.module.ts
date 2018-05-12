import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TocPage } from '../pages/toc/toc';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Chapter1Page } from '../pages/chapter1/chapter1';
import { Chapter2Page } from '../pages/chapter2/chapter2';
import { Chapter3Page } from '../pages/chapter3/chapter3';
import { Chapter4Page } from '../pages/chapter4/chapter4';
import { Chapter5Page } from '../pages/chapter5/chapter5';
import { Chapter6Page } from '../pages/chapter6/chapter6';
import { Chapter7Page } from '../pages/chapter7/chapter7';
import { Chapter8Page } from '../pages/chapter8/chapter8';
import { Chapter9Page } from '../pages/chapter9/chapter9';
import { Chapter10Page } from '../pages/chapter10/chapter10';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TocPage,
    ContactPage,
    HomePage,
    Chapter1Page,
    Chapter2Page,
    Chapter3Page,
    Chapter4Page,
    Chapter5Page,
    Chapter6Page,
    Chapter7Page,
    Chapter8Page,
    Chapter9Page,
    Chapter10Page,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TocPage,
    ContactPage,
    HomePage,
    Chapter1Page,
    Chapter2Page,
    Chapter3Page,
    Chapter4Page,
    Chapter5Page,
    Chapter6Page,
    Chapter7Page,
    Chapter8Page,
    Chapter9Page,
    Chapter10Page,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
