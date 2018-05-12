import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter2Page } from '../chapter2/chapter2';
import { Chapter4Page } from '../chapter4/chapter4';

/**
 * Generated class for the Chapter3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter3',
  templateUrl: 'chapter3.html',
})
export class Chapter3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openPage2() {
    this.navCtrl.push(Chapter2Page);
  }
  openPage4() {
    this.navCtrl.push(Chapter4Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter3Page');
  }

}
