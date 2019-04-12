import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DicasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dicas',
  templateUrl: 'dicas.html',
})
export class DicasPage {
  nome:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nome = 'caio';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DicasPage');
  }

}
