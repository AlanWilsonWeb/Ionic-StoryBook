import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter7Page } from '../chapter7/chapter7';
import { Chapter9Page } from '../chapter9/chapter9';
/**
 * Generated class for the Chapter8Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter8',
  templateUrl: 'chapter8.html',
})
export class Chapter8Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openPage7() {
    this.navCtrl.push(Chapter7Page);
  }
  openPage9() {
    this.navCtrl.push(Chapter9Page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter8Page');
  }

}
