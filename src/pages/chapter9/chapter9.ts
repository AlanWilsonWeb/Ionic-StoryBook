import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter8Page } from '../chapter8/chapter8';
import { Chapter10Page } from '../chapter10/chapter10';
/**
 * Generated class for the Chapter9Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter9',
  templateUrl: 'chapter9.html',
})
export class Chapter9Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openPage8() {
    this.navCtrl.push(Chapter8Page);
  }
  openPage10() {
    this.navCtrl.push(Chapter10Page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter9Page');
  }

}
