import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CandidatoServiceProvider } from '../../providers/candidato-service/candidato-service';


@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})

export class ResultadoPage {

  candidatos: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public candidatoService: CandidatoServiceProvider, public loadingCtrl: LoadingController) {

    let loading = this.loadingCtrl.create();
    loading.present();
    
    this.candidatos = this.candidatoService.getCandidatos();
    loading.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoPage');
  }

}
