import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CandidatoServiceProvider } from '../../providers/candidato-service/candidato-service';
import { RespostaServiceProvider } from '../../providers/resposta-service/resposta-service';
import { PerguntaServiceProvider } from '../../providers/pergunta-service/pergunta-service';


@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})

export class ResultadoPage {

  candidatos: any[];
  respostasEu: any[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public candidatoService: CandidatoServiceProvider,
    public respostaService: RespostaServiceProvider,
    public perguntaService: PerguntaServiceProvider,
    public loadingCtrl: LoadingController) {

    let loading = this.loadingCtrl.create();
    loading.present();

    this.candidatoService.zerarAfinidade();
    this.candidatos = this.candidatoService.getCandidatos();
    this.respostasEu = this.perguntaService.getPerguntas();
    this.calcularAfinidade();
    this.candidatoService.ordernarCandidatos();
    
    loading.dismiss();
  }

  ionViewDidLoad() {
  }

  calcularAfinidade() {
    for (let candidato of this.candidatos) {
      let respostasCandidato = this.respostaService.getRespostasFromCandidato(candidato.id);

      for (let RC of respostasCandidato) {
        let RE = this.respostasEu.find((resposta) => { return resposta.id == RC.idPergunta })

        if (RE.resposta == RC.resposta) {
          this.candidatoService.updateAfinidadeFromCandidato(candidato.id);
        }
      }
    }
  }

}
