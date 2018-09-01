import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { PerguntaPage } from '../pergunta/pergunta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('usuario') email;
  @ViewChild('senha') password;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  entrarTema(tema: string) {
    //let toast = this.toastCtrl.create({duration:3000, position:'bottom'});

    this.navCtrl.push(PerguntaPage, { 'titulo': tema });
    /*if (this.email.value == "pablo" && this.password.value == "123") {
      
      toast.setMessage('Logado com sucesso!');
      toast.present();
    } else {
      toast.setMessage('Logado com sucesso!');
      toast.present();
    }*/
  }

  entrarTemaEnergia() {
    this.navCtrl.push(PerguntaPage);
  }
}
