import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

import { DicasPage } from '../dicas/dicas';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  @ViewChild('email') email;
  @ViewChild('senha') senha;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fire: AngularFireAuth,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  registrar(){
    let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});

    this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.senha.value).then(data => {
      //Logado com sucesso
      this.navCtrl.setRoot(DicasPage); //utilizando o setRoot não tem botão para retornar a página anterior
    }).catch((error: any) => {
      if(error.code == 'auth/email-already-in-use'){
        toast.setMessage('Already exists an account with the given email address.');
      } else if(error.code == 'auth/invalid-email'){
        toast.setMessage('Email address is not valid.');
      } else if(error.code == 'auth/operation-not-allowed'){
        toast.setMessage('Email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.');
      } else if(error.code == 'auth/weak-password'){
        toast.setMessage('The password is not strong enough.');
      }
      toast.present();
    });
  }

}
