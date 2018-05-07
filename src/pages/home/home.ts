import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoomPage } from '../room/room';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  roomPage = RoomPage
  constructor(public navCtrl: NavController) {}
  

}
