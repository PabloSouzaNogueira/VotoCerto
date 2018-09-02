import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';



@Injectable()
export class PerguntaServiceProvider {

  rotaAPI: string = "https://votocerto.herokuapp.com/";

  perguntas: any;
  
  /*perguntas = [
    { codigo: 1, tema: "Economia", titulo: "Reforma Trabalhista", texto: 'Você concorda com as alterações realizadas na CLT e defende que a terceirização possa ocorrer em todas as atividades das empresas?', descricao: "Recentemente o Congresso Nacional aprovou mudanças na Consolidação das Leis Trabalhistas (CLT) que incluíram, entre outras, ampliação das possibilidades de terceirização para a atividade-fim da empresa, flexibilização dos horários de trabalhos, ampliação das possibilidades de contratos com tempo determinado e fim do imposto sindical.", resposta: 0 },
    { codigo: 2, tema: "Economia", titulo: "Reforma da Previdência", texto: 'Os trabalhadores devem contribuir mais tempo do que contribuem hoje para se aposentar?', descricao: "A solução apresentada com mais frequência para solucionar a questão da previdência é o aumento do tempo de contribuição dos trabalhadores na ativa. Outras seriam a mudança do regime previdenciário ou a redução dos montantes recebidos após estes se aposentarem.", resposta: 0 },
    { codigo: 3, tema: "Economia", titulo: "PEC do Teto", texto: 'Você defende o congelamento dos gastos com investimentos e serviços públicos por 20 anos?', descricao: "O Novo Regime Fiscal, instituído em 2016, e apelidado de PEC do Teto, tornou mais rígidas as regras para os gastos públicos da União, limitando-os ao do ano de 2018 mais correção inflacionária do período. Os defensores da mudança alegam que ela é essencial para evitar o aumento do déficit público. Os críticos dizem, sem negar o déficit, que haverá precarização dos serviços e que há soluções socialmente mais justas para enfrentar o problema.", resposta: 0 },
    { codigo: 4, tema: "Economia", titulo: "Tributação Progressiva", texto: 'A tributação deve se tornar progressiva, começando a cobrar impostos dos lucros de acionistas e das grandes heranças?', descricao: "Progressividade, no contexto de arrecadação de impostos, é a capacidade de taxar em maior proporção os que possuem maior renda. É consenso que os impostos no Brasil são regressivos, extraindo uma parcela maior da renda dos que menos a possuem. Duas das propostas para eliminar essa distorção são a taxação de dividendos (lucros de acionistas) e de grandes heranças.", resposta: 0 },
    { codigo: 5, tema: "Economia", titulo: "Desenvolvimento", texto: 'O Estado deve ser empreendedor e investir ativamente na economia?', descricao: "Existem diversas correntes econômicas que pensam sobre o papel do Estado no fomento da economia nacional. Uma das correntes mais fortes do pensamento econômico brasileiro durante o século XX, com reflexos nos dias atuais, é o desenvolvimentismo. Esta corrente propõe que o Estado tenha um papel ativo de empreendedor na economia, escolhendo os setores nos quais os investimentos públicos devem ser realizados. Por exemplo, possuindo empresas — as estatais — e ser monopolistas em certas áreas.", resposta: 0 },
    { codigo: 6, tema: "Economia", titulo: "Prioridade ao Controle de Gastos", texto: 'O ajuste fiscal deve ser a principal prioridade do governo federal?', descricao: "Correntes econômicas advertem que o descontrole fiscal pode ter diversos efeitos adversos em um país, como perda da capacidade de governo ou inflação alta. Para evitar estas consequências, advogam que o governo deve acabar com os déficits na forma de um ajuste fiscal. Outras correntes econômicas defendem que a finalidade do ajuste é apenas garantir retorno aos credores. Existem ainda correntes que defendem que o Estado deve usar o endividamento como ferramenta para alavancar a economia.", resposta: 0 }

  ];*/

  constructor(public http: Http) {
  }


  setPerguntas(perguntas: any) {
    this.perguntas = perguntas;
  }

  loadPerguntas() {
    //this.http.get("https://votocerto.herokuapp.com/Perguntas/").map(res => res.json()).subscribe(data => { this.perguntas = data; });
    return this.http.get("https://votocerto.herokuapp.com/Perguntas/").map(res => res.json());
  }


  getPerguntasFromTema(tema: string): any[] {
    return this.perguntas.filter((pergunta) => { return pergunta.tema == tema });
  }

  updatePergunta(codigoPergunta: number, resposta: number) {
    this.perguntas.find((pergunta) => { return pergunta.codigo == codigoPergunta }).resposta = resposta;
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
