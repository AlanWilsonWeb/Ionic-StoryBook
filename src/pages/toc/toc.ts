import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chapter1Page } from '../chapter1/chapter1';
import { Chapter2Page } from '../chapter2/chapter2';
import { Chapter3Page } from '../chapter3/chapter3';
import { Chapter4Page } from '../chapter4/chapter4';
import { Chapter5Page } from '../chapter5/chapter5';
import { Chapter6Page } from '../chapter6/chapter6';
import { Chapter7Page } from '../chapter7/chapter7';
import { Chapter8Page } from '../chapter8/chapter8';
import { Chapter9Page } from '../chapter9/chapter9';
import { Chapter10Page } from '../chapter10/chapter10';

@Component({
  selector: 'page-toc',
  templateUrl: 'toc.html'
})
export class TocPage {

  constructor(public navCtrl: NavController) {

  }
  openPage1() {
    this.navCtrl.push(Chapter1Page);
  }
  openPage2() {
    this.navCtrl.push(Chapter2Page);
  }
  openPage3() {
    this.navCtrl.push(Chapter3Page);
  }
  openPage4() {
    this.navCtrl.push(Chapter4Page);
  }
  openPage5() {
    this.navCtrl.push(Chapter5Page);
  }
  openPage6() {
    this.navCtrl.push(Chapter6Page);
  }
  openPage7() {
    this.navCtrl.push(Chapter7Page);
  }
  openPage8() {
    this.navCtrl.push(Chapter8Page);
  }
  openPage9() {
    this.navCtrl.push(Chapter9Page);
  }
  openPage10() {
    this.navCtrl.push(Chapter10Page);
  }

}
