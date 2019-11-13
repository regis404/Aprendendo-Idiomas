import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {
  //imput funcao decoradora para aceitar parametros externos dos componentes pai para finlhos
  @Input() public progresso: number = 25

  constructor() { }

  ngOnInit() {
  }

}
