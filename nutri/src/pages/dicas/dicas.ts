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

  email: string;

  fotoPerfil: boolean = false;

  facebook = {
    nome: '',
    fotoUrl: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public fire: AngularFireAuth) {
    this.facebook.nome = fire.auth.currentUser.displayName;
    this.facebook.fotoUrl = fire.auth.currentUser.photoURL;
    this.email = fire.auth.currentUser.email;

    if(this.facebook.fotoUrl == null){
      this.fotoPerfil = false;
    }
    else{
      this.fotoPerfil = true;
    }
  }

  logout(){
    this.fire.auth.signOut();
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DicasPage');
  }

}
