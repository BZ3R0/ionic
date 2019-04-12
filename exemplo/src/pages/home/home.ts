import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nome:string;
  idade:number;

  constructor(public navCtrl: NavController) {
    this.nome = 'Caio';
    this.idade = 23;
  }

}
