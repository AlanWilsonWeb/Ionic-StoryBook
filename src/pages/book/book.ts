import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

const CHAPTERS = [
  { id: 1, title: 'A Pirates Life', words: '' },
  { id: 2, title: 'Treasure Of The Deep', words: '' },
  { id: 3, title: 'Trouble On The Wakes', words: '' },
  { id: 4, title: 'The Giant Squid', words: '' },
  { id: 5, title: 'Licking The Wounds', words: '' },
  { id: 6, title: 'The Old Man', words: '' },
  { id: 7, title: 'Captains Meeting', words: '' },
  { id: 8, title: 'The Battle', words: '' },
  { id: 9, title: 'Opening The Chest', words: '' },
  { id: 10, title: 'Epilogue', words: '' }
];

@Component({
  selector: 'page-contact',
  templateUrl: 'book.html'
})
export class BookPage {

  constructor(public navCtrl: NavController) {

  }
  chapters = CHAPTERS;

}
