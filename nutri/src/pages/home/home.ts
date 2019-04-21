import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

import { DicasPage } from '../dicas/dicas';
import { RegistroPage } from '../registro/registro';
import { RecuperarPage } from '../recuperar/recuperar';
import { Users } from './users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: Users = new Users();
  //ViewChild é uma lib utilizada para obter informação digitada pelo usuário no HTML
  //email e senha são variáveis disponíveis neste escopo e elas contém os valores que foram passados no HTML pela variável usuario e senha através da tag #usuario, #senha
  @ViewChild('usuario') email;
  @ViewChild('senha') senha;

  //navController é responsável por realizar o push das páginas do aplicativo.
  constructor(public navCtrl: NavController,
              public fire: AngularFireAuth,
              public toastCtrl: ToastController) {

  }

  entrar(){
    //toast é um controller que pode exibir uma mensagem por um determinado tempo e em uma determinada posição
    let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});

    this.fire.auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
    .then(data => {
      console.log('data: ', data);
      this.users.email = this.email.value;
      this.users.senha = this.senha.value;
      toast.setMessage('Usuário logado com sucesso!');
      toast.present();
      this.navCtrl.setRoot(DicasPage);
    })
    .catch((error: any) => {
      if (error.code == 'auth/invalid-email'){
        toast.setMessage('The email address is not valid.');
      }
      else if (error.code == 'auth/user-disabled'){
        toast.setMessage('The user corresponding to the given email has been disabled.');
      }
      else if (error.code == 'auth/user-not-found'){
        toast.setMessage('There is no user corresponding to the given email.');
      }
      else if(error.code == 'auth/wrong-password'){
        toast.setMessage('Wrong password.');
      }
      toast.present();
    });
    // if (this.email.value == 'caio' && this.senha.value == '123')
    // {
    //   this.navCtrl.push(DicasPage);
    //   toast.setMessage('Usuário logado com sucesso!');
    //   toast.present();
    // }
    // else
    // {
    //   toast.setMessage('Usuário ou senha estão incorretos!');
    //   toast.present();
    // }
  }

  registrar(){
    this.navCtrl.push(RegistroPage);
  }

  recuperar(){
    this.navCtrl.push(RecuperarPage);
  }

  entrarComFacebook(){
    let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});

    //Conexão com API do Facebook, permitindo logar no sistema com a conta do Facebook
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res => {
      console.log(res);
      this.navCtrl.setRoot(DicasPage);
    })
    .catch((error: any) => {
      if(error.code == 'auth/account-exists-with-different-credential'){
        toast.setMessage('An account already exists with the same email address but different sign-in credential. Sign-in using a provider associated with this email address');
      }
      toast.present();
    });
  }

  entrarComGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    //conexão com API do Google, possibilitando logar no sistema com a conta do Google
    this.fire.auth.signInWithPopup(provider).then(res => {
      //var token = result.credential.accessToken;
      //var user = result.user;
      console.log(res);
      this.navCtrl.setRoot(DicasPage);
    })
  }

}
