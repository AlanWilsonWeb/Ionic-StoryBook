import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TocPage } from '../toc/toc';
import { Chapter2Page } from '../chapter2/chapter2';

/**
 * Generated class for the Chapter1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter1',
  templateUrl: 'chapter1.html',
})
export class Chapter1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openToc() {
    this.navCtrl.push(TocPage);
  }
  openPage2() {
    this.navCtrl.push(Chapter2Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter1Page');
  }

}
