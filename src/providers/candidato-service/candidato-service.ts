import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CandidatoServiceProvider {

  rotaAPI: string = "https://votocerto.herokuapp.com/";

  candidatos: any;

  constructor(public http: Http) {

  }

  loadCandidatos() {
    this.http.get(this.rotaAPI + "Candidatos/").map(res => res.json()).subscribe(data => { this.candidatos = data; });
  }

  getCandidatos(): any {
    return this.candidatos;
  }

  updateAfinidadeFromCandidato(idCandidato: number){
    this.candidatos.find((candidato) => { return candidato.id == idCandidato }).afinidade++;
  }

  zerarAfinidade() {
    let resultado = this.candidatos.filter((candidato) => { return candidato.afinidade != 0 });

    for (let i = 0; i < resultado.length; i++) {
      resultado[i].afinidade = 0;
    }
  }

}
