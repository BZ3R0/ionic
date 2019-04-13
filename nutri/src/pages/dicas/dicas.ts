import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../home/home';

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
  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fire: AngularFireAuth) {
    this.nome = 'caio';
    this.email = fire.auth.currentUser.email;
  }

  logout(){
    this.fire.auth.signOut();
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DicasPage');
  }

}
