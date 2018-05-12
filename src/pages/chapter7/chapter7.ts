import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter6Page } from '../chapter6/chapter6';
import { Chapter8Page } from '../chapter8/chapter8';
/**
 * Generated class for the Chapter7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter7',
  templateUrl: 'chapter7.html',
})
export class Chapter7Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openPage6() {
    this.navCtrl.push(Chapter6Page);
  }
  openPage8() {
    this.navCtrl.push(Chapter8Page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter7Page');
  }

}
