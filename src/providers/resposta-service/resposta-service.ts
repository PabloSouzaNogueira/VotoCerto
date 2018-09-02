import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class RespostaServiceProvider {

  rotaAPI: string = "https://votocerto.herokuapp.com/";

  respostas: any;

  constructor(public http: Http) {
  }

  loadRespostas() {
    this.http.get(this.rotaAPI + "RespostasCandidatos/").map(res => res.json()).subscribe(data => { this.respostas = data; });
  }

  getRespostas(): any {
    return this.respostas;
  }

  getRespostasFromCandidato(idCandidato: number){
    return this.respostas.filter((resposta) => { return resposta.idCandidato == idCandidato });
  }

}
