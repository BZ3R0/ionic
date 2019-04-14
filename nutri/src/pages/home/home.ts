import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

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

}
