import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerguntaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pergunta',
  templateUrl: 'pergunta.html',
})
export class PerguntaPage {

  descricao: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.descricao = navParams.get('titulo');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntaPage');
  }

}
