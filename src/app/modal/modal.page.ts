import { Component, OnInit } from '@angular/core';

import { NavController} from '@ionic/angular';
import { ModalController} from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public navCtrl: NavController, public viewCtrl: ModalController) { }

  ngOnInit() {
    this.viewCtrl.dismiss();
  }

}
