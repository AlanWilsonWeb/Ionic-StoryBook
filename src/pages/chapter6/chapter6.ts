import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter5Page } from '../chapter5/chapter5';
import { Chapter7Page } from '../chapter7/chapter7';
/**
 * Generated class for the Chapter6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter6',
  templateUrl: 'chapter6.html',
})
export class Chapter6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openPage5() {
    this.navCtrl.push(Chapter5Page);
  }
  openPage7() {
    this.navCtrl.push(Chapter7Page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter6Page');
  }

}
