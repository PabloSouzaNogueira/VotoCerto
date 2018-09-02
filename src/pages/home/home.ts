import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerguntaPage } from '../pergunta/pergunta';
import { PerguntaServiceProvider } from '../../providers/pergunta-service/pergunta-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  perguntasEconomia: number[];
  perguntasEnergia: number[];
  perguntasSocial: number[];
  perguntasSeguranca: number[];
  perguntasEducacao: number[];

  constructor(public navCtrl: NavController, public perguntaService: PerguntaServiceProvider) {
    this.carregarContadorRespostas();
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

  
}
