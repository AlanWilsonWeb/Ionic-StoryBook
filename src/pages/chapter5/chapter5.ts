import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter4Page } from '../chapter4/chapter4';
import { Chapter6Page } from '../chapter6/chapter6';

/**
 * Generated class for the Chapter5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter5',
  templateUrl: 'chapter5.html',
})
export class Chapter5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openPage4() {
    this.navCtrl.push(Chapter4Page);
  }
  openPage6() {
    this.navCtrl.push(Chapter6Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter5Page');
  }

}
