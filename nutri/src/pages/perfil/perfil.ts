import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
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

}
