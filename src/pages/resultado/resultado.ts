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

  candidatos: any;
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
    this.calcularAfinidade();
    
    loading.dismiss();
  }

  ionViewDidLoad() {
  }

  

  calcularAfinidade() {


    let respostasEu = this.perguntaService.getPerguntas();

    for (let candidato of this.candidatos) {

      let respostasCandidato = this.respostaService.getRespostasFromCandidato(candidato.id);

      for (let RC of respostasCandidato) {
        let RE = respostasEu.find((resposta) => { return resposta.id == RC.idPergunta })
        if (RE.resposta == RC.resposta &&  RC.idCandidato == 1) {
          //console.log("Resposta igual!");
          this.candidatoService.updateAfinidadeFromCandidato(candidato.id);
        }
      }
    }

  }



}
