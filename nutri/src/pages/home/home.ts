import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { DicasPage } from '../dicas/dicas';
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //ViewChild é uma lib utilizada para obter informação digitada pelo usuário no HTML
  //email e senha são variáveis disponíveis neste escopo e elas contém os valores que foram passados no HTML pela variável usuario e senha através da tag #usuario, #senha
  @ViewChild('usuario') email;
  @ViewChild('senha') senha;

  //navController é responsável por realizar o push das páginas do aplicativo.
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  entrar(){
    //toast é um controller que pode exibir uma mensagem por um determinado tempo e em uma determinada posição
    let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});

    if (this.email.value == 'caio' && this.senha.value == '123')
    {
      this.navCtrl.push(DicasPage);
      toast.setMessage('Usuário logado com sucesso!');
      toast.present();
    }
    else
    {
      toast.setMessage('Usuário ou senha estão incorretos!');
      toast.present();
    }
  }

  registrar(){
    this.navCtrl.push(RegistroPage);
  }

}
