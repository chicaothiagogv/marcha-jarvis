import { Component } from '@angular/core';
import { PlanoCartesianoComponent } from './plano-cartesiano/plano-cartesiano.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  largura = 500
  altura = 500
  escala = 25
  raiz = 0
  maxPontos = 100
  minPontos = 3
  quantidade
  pontos

  conexoes = []

  getRaiz() {
    return this.pontos[this.raiz]
  }

  constructor () {
    this.gerarPontos(event)
  }

  buscaRaiz(pontos) {
    var maxY = -Infinity
    var ind = Infinity
    var equal = false
    var inds = []

    // maior Y
    for(let x = 0; x < pontos.length; x++) {
      if (pontos[x][1] > maxY) {
        maxY = pontos[x][1]
        ind = x
      }
    }

    // Maior X
    var maxX = -Infinity
    for (let x = 0; x < pontos.length; x++) {
      if (pontos[x][0] >= maxX && pontos[x][1] == maxY) {
        ind = x
        maxX = pontos[x][0]
      }
    }

    this.raiz = ind
  }

  buscarConexoes() {
    this.conexoes.push(this.pontos[this.raiz])
    for (let i = 0; i < 10; i++) {
      if (this.conexoes[i] != undefined)
      if (!this.buscarProximo(this.pontos, this.conexoes[i]) ) {
        break
      }
    }
    this.conexoes.push(this.conexoes[0])    
  }

  // Busca os pontos de acordo com o angulo deste com o vetor
  buscarProximo(pontos, p) {
    // """Returns the next point on the convex hull in CCW from p."""
    var q = p
    for (let r of pontos) {
      var t = this.verificaRotacao(p, q, r)
      var distancia = this.calcularDistancia(p, r) > this.calcularDistancia(p, q)

      if (t == -1 || t == 0  && distancia) {
        q = r
      }
    }

    if (this.compVetor(this.conexoes[0], q) ) {
      return false
    }
    else {
      if (!this.verificarSeExiste(q)) {
        this.conexoes.push(q)
      }

      return true
    }
  }

  verificarSeExiste(q) {
    for (let i = 1; i < this.conexoes.length; i++) {
      if (this.compVetor(this.conexoes[i], q)) {
        return true
      }
    }

    return false
  }

  verificaRotacao(p, q, r) {
    var vetor = (q[0] - p[0]) * (r[1] - p[1]) - (r[0] - p[0]) * (q[1] - p[1])

    if (vetor > 0) {
      return 1
    }
    else if (vetor == 0) {
      return 0
    }
    else {
      return -1
    }
  }

  calcularDistancia(p, q) {
    let dx = q[0] - p[0]
    let dy = q[1] - p[1]
    return (dx * dx) + (dy * dy)
  }

  compVetor(a1, a2) {
    return a1.length==a2.length && a1.every((v,i)=> v === a2[i])
  }

  gerarPontos(event) {
    this.quantidade = Math.floor((Math.random() * (this.maxPontos - this.minPontos)) + this.minPontos);
    var maxX = Math.round(this.largura / this.escala)
    var maxY = Math.round(this.altura / this.escala)
    var _pontos = []
    for (let i = 0; i < this.quantidade; i++) {
      var y = Math.floor((Math.random() * maxY));
      var x = Math.floor((Math.random() * maxX));
      _pontos.push([x, y])
    }

    this.pontos = _pontos
    this.conexoes = []

    this.buscaRaiz(this.pontos)
    this.buscarConexoes()
    
  }

}
