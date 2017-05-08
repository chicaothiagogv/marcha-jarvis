import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css']
})
export class LinesComponent implements OnInit {
  @Input() conexoes: Array<number>
  @Input() id: number
  @Input() escala: number

  anterior
  proximo

  constructor() { }

  ngOnInit() {
    if (this.id >= (this.conexoes.length - 1)) {
      console.log('fim')
    }
    else {
      this.anterior = this.conexoes[this.id]
      this.proximo = this.conexoes[this.id + 1]
    }
  }

  definido() {
    return this.proximo === undefined || this.anterior === undefined
  }

  calcularDistancia(p, q) {
    let dx = q[0] - p[0]
    let dy = q[1] - p[1]
    return (dx * dx) + (dy * dy)
  }

  getTransform() {
    if (this.definido()) {
      return ''
    }

    let angle  = Math.atan2(this.proximo[1] - this.anterior[1], this.proximo[0] - this.anterior[0]) * 180 / Math.PI;
    let _transform = 'rotate(' + angle + 'deg)';
    return _transform
  }

  getWidth() {
    if (this.definido()) {
      return ''
    }

    let dist = this.calcularDistancia(this.anterior, this.proximo)
    var length = Math.sqrt(dist) * this.escala;
    return length + 'px'
  }

  getLeft() {
    if (this.definido()) {
      return ''
    }

    return (this.anterior[0] * this.escala) + 'px'
  }

  getTop() {
    if (this.definido()) {
      return ''
    }

    return (this.anterior[1] * this.escala) + 'px'
  }

}
