import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter1Page } from '../chapter1/chapter1';
import { Chapter3Page } from '../chapter3/chapter3';

/**
 * Generated class for the Chapter2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter2',
  templateUrl: 'chapter2.html',
})
export class Chapter2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openPage1() {
    this.navCtrl.push(Chapter1Page);
  }
  openPage3() {
    this.navCtrl.push(Chapter3Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter2Page');
  }

}
