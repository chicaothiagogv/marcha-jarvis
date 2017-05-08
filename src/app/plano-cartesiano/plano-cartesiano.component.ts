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

  desenharLinhas () {
    var plano = document.getElementById('plano-cartesiano')
    for (let p = 1; p <= this.conexoes.length; p++) {
      let a = p-1
      let i = p
      if (p == this.conexoes.length) {
        a = this.conexoes.length - 1
        i = 0
      }

      let ant = this.conexoes[a]
      let prox = this.conexoes[i]
      console.log(ant, prox)
      let dist = this.calcularDistancia(ant, prox)
      var length = Math.sqrt(dist) * this.escala;
      var angle  = Math.atan2(prox[1] - ant[1], prox[0] - ant[0]) * 180 / Math.PI;

      var _transform = 'rotate(' + angle + 'deg)';

      var line = document.createElement('DIV')
      line.style.position = 'absolute'
      line.style.transform = _transform
      line.style.width = length + 'px'
      line.style.left = (ant[0] * this.escala) + 'px'
      line.style.top =  (ant[1] * this.escala) + 'px'
      line.style.backgroundColor = 'green'
      line.style.transformOrigin = '0 100%'
      line.style.height = '3px'
      line.style.backgroundColor = 'lightgreen'
      line.style.margin = '30px'

      plano.appendChild(line)
      // break
    }
  }

  calcularDistancia(p, q) {
    let dx = q[0] - p[0]
    let dy = q[1] - p[1]
    return (dx * dx) + (dy * dy)
  }

}
