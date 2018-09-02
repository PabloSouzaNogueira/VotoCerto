import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { PerguntaPage } from '../pergunta/pergunta';
import { ResultadoPage } from '../resultado/resultado';
import { PerguntaServiceProvider } from '../../providers/pergunta-service/pergunta-service';
import { CandidatoServiceProvider } from '../../providers/candidato-service/candidato-service';
import { RespostaServiceProvider } from '../../providers/resposta-service/resposta-service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  perguntasEconomia: number[] = [2];
  perguntasEnergia: number[] = [2];
  perguntasSocial: number[] = [2];
  perguntasSeguranca: number[] = [2];
  perguntasEducacao: number[] = [2];

  constructor(public navCtrl: NavController,
    public perguntaService: PerguntaServiceProvider,
    public candidatoService: CandidatoServiceProvider,
    public respostaService: RespostaServiceProvider,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {

    let loading = this.loadingCtrl.create();
    loading.present();

    this.perguntaService.loadPerguntas().subscribe(data => { this.perguntaService.setPerguntas(data); this.carregarContadorRespostas(); });
    this.candidatoService.loadCandidatos();
    this.respostaService.loadRespostas();

    loading.dismiss();
  }

  entrarTema(tema: string) {
    this.navCtrl.push(PerguntaPage, { 'titulo': tema, "contexto": this });
  }

  carregarContadorRespostas() {
    this.perguntasEconomia = [];
    this.perguntasEnergia = [];
    this.perguntasSocial = [];
    this.perguntasSeguranca = [];
    this.perguntasEducacao = [];

    this.perguntasEconomia.push(this.perguntaService.getTotalPerguntasRespondidasFromTema("Economia"));
    this.perguntasEconomia.push(this.perguntaService.getTotalPerguntasFromTema("Economia"));

    this.perguntasEnergia.push(this.perguntaService.getTotalPerguntasRespondidasFromTema("Energia"));
    this.perguntasEnergia.push(this.perguntaService.getTotalPerguntasFromTema("Energia"));

    this.perguntasSocial.push(this.perguntaService.getTotalPerguntasRespondidasFromTema("Proteção Social"));
    this.perguntasSocial.push(this.perguntaService.getTotalPerguntasFromTema("Proteção Social"));

    this.perguntasSeguranca.push(this.perguntaService.getTotalPerguntasRespondidasFromTema("Segurança"));
    this.perguntasSeguranca.push(this.perguntaService.getTotalPerguntasFromTema("Segurança"));

    this.perguntasEducacao.push(this.perguntaService.getTotalPerguntasRespondidasFromTema("Educação"));
    this.perguntasEducacao.push(this.perguntaService.getTotalPerguntasFromTema("Educação"));
  }

  conferirResultado() {
    /*if (this.perguntaService.existePerguntaSemResposta()) {
      this.toastCtrl.create({
        message: 'É necessário responder todas as perguntas primeiro.',
        duration: 3000,
        position: 'bottom'
      }).present();
    } else {
      this.navCtrl.push(ResultadoPage);
    }*/
    this.navCtrl.push(ResultadoPage);
  }

  resetarRespostas() {
    this.alertCtrl.create({
      title: 'Resetar Respostas',
      message: 'Deseja realmente resetar suas respostas?',
      buttons: [{ text: 'Não' }, { text: 'Sim', handler: () => { this.perguntaService.zerarRespostas(); this.carregarContadorRespostas(); } }]
    }).present();
  }

  /* ionViewWillEnter() {
   
 }
 ionViewWillLeave() {
  
 }*/
}
