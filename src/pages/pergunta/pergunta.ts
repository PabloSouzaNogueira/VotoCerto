import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PerguntaServiceProvider } from '../../providers/pergunta-service/pergunta-service';


@IonicPage()
@Component({
  selector: 'page-pergunta',
  templateUrl: 'pergunta.html',
})

export class PerguntaPage {

  tema: string;
  perguntas: any[];
  callback;

  constructor(public navCtrl: NavController, public navParams: NavParams, public perguntaService: PerguntaServiceProvider, public alertCtrl: AlertController) {
    this.tema = navParams.get('titulo');
    this.perguntas = perguntaService.getPerguntasFromTema(this.tema);
  }

  carregarDescricao(descricao: string) {
    this.alertCtrl.create({
      subTitle: descricao,
      buttons: ['Continuar']
    }).present();
  }

  atualizarResposta(codigoPergunta: number, resposta: number) {
    this.perguntaService.updatePergunta(codigoPergunta, resposta);
    
    this.navParams.get("contexto").carregarContadorRespostas();
  }


 /* ionViewWillEnter() {
    console.log("onSubmit2");
    this.callback = this.navParams.get("callback");
  }
  ionViewWillLeave() {
    console.log("onSubmit1");
    this.callback();
  }*/
}
