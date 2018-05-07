import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-home',
  templateUrl: 'room.html'
})
export class RoomPage {
  homePage = HomePage
  constructor(public navCtrl: NavController) {

  }

}
