import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter3Page } from '../chapter3/chapter3';
import { Chapter5Page } from '../chapter5/chapter5';

/**
 * Generated class for the Chapter4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter4',
  templateUrl: 'chapter4.html',
})
export class Chapter4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openPage3() {
    this.navCtrl.push(Chapter3Page);
  }
  openPage5() {
    this.navCtrl.push(Chapter5Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter4Page');
  }

}
