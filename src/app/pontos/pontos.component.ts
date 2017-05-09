import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pontos',
  templateUrl: './pontos.component.html',
  styleUrls: ['./pontos.component.css']
})
export class PontosComponent implements OnInit {

  @Input() abscissa: number
  @Input() ordenada: number
  @Input() altura: number
  @Input() largura: number
  @Input() nome: string
  @Input() escala: number
  @Input() conexao: boolean

  constructor() { }

  ngOnInit() {
  }

  getOrdenada() {
    return ((this.ordenada * this.escala)) + 'px'
  }

  getAbscissa() {
    return (this.abscissa * this.escala) + 'px'
  }

  getCor() {
    return this.conexao ? 'yellow' : 'red'
  }

}
