import { Component, OnInit, EventEmitter, Output, OnDestroy } from "@angular/core";

import { Frase } from "../shared/frase.model";
import { FRASES } from "./frases-mock";

@Component({
  selector: "app-painel",
  templateUrl: "./painel.component.html",
  styleUrls: ["./painel.component.css"]
})
export class PainelComponent implements OnInit,OnDestroy {
  public frases: Frase[] = FRASES;
  public instrucao: string = "Traduza a frase:";
  public resposta: string = "";

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;
//Output permite jogar uma varivel de filho pra pai contrario do imput
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('o componente painel foi destruido')
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    //console.log(this.resposta)
  }

  public verificarResposta(): void {
    //  teste
    // console.log('Verificar resposta: ',this.resposta)

    if (this.rodadaFrase.frasePtbr == this.resposta) {
      alert("A tradução está correta");

      //troca pergunta da rodada
      this.rodada++;

      //progresso divide o array das frases por 100 para achar a porcentagem q vai interar
      this.progresso += 100 / this.frases.length;
      console.log(this.progresso);

      if (this.rodada == 4) {
        this.encerrarJogo.emit('vitoria')
        //alert("parabens você ganhou");
      }

      //atualiza o objeto rodadaFrase
      this.atualizaRodada();
    } else {
      //alert('A tradução está errada')
      this.tentativas--;
      if (this.tentativas == -1) {
        this.encerrarJogo.emit('derrota')
      }
    }
  }
  public atualizaRodada(): void {
    //atualiza o atributo rodadaFrase com base no objeto contido no indice da rodada que esteja contido no array de frases
    this.rodadaFrase = this.frases[this.rodada];
    //limpa a resposta
    this.resposta = "";
  }
}
