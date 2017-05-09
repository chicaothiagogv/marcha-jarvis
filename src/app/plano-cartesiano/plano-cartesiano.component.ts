import { Component, OnInit, Input } from '@angular/core';
import { PontosComponent } from '../pontos/pontos.component'
import { LinhasGradesComponent } from '../linhas-grades/linhas-grades.component'

@Component({
  selector: 'app-plano-cartesiano',
  templateUrl: './plano-cartesiano.component.html',
  styleUrls: ['./plano-cartesiano.component.css']
})

export class PlanoCartesianoComponent implements OnInit {

  @Input() pontos: Array<number>
  @Input() raiz: number
  @Input() largura: number
  @Input() altura: number
  @Input() conexoes: Array<number>
  @Input() escala: number

  constructor() { }

  ngOnInit() {
  }

  getHeight() {
    return this.altura + 'px'
  }

  getWidth() {
    return this.largura + 'px'
  }

}
