import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';



@Injectable()
export class PerguntaServiceProvider {

  rotaAPI: string = "https://votocerto.herokuapp.com/";

  perguntas: any[];

  constructor(public http: Http) {
  }

  getPerguntas(): any[] {
    return this.perguntas;
  }

  setPerguntas(perguntas: any[]) {
    this.perguntas = perguntas;
  }

  loadPerguntas() {
    return this.http.get(this.rotaAPI + "Perguntas/").map(res => res.json());
  }


  getPerguntasFromTema(tema: string): any[] {
    return this.perguntas.filter((pergunta) => { return pergunta.tema == tema });
  }

  updateRespostaFromPergunta(codigoPergunta: number, resposta: number) {
    this.perguntas.find((pergunta) => { return pergunta.id == codigoPergunta }).resposta = resposta;
    //let p = this.perguntas.find((pergunta) => { return pergunta.codigo == codigoPergunta }).resposta = resposta;
  }


  getTotalPerguntasFromTema(tema: string): number {
    return this.perguntas.filter((pergunta) => { return pergunta.tema == tema }).length;
  }

  getTotalPerguntasRespondidasFromTema(tema: string): number {
    return this.perguntas.filter((pergunta) => { return pergunta.tema == tema && pergunta.resposta != 0 }).length;
  }


  zerarRespostas() {
    let resultado = this.perguntas.filter((pergunta) => { return pergunta.resposta != 0 });

    for (let i = 0; i < resultado.length; i++) {
      resultado[i].resposta = 0;
    }
  }

  existePerguntaSemResposta(): boolean {
    return this.perguntas.some((pergunta) => { return pergunta.resposta == 0 });
  }

}
