import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-linhas-grades',
  templateUrl: './linhas-grades.component.html',
  styleUrls: ['./linhas-grades.component.css']
})
export class LinhasGradesComponent implements OnInit {

  @Input() largura: number
  @Input() altura: number
  @Input() escala: number
  linhaX = []
  linhaY = []

  constructor() { }

  ngOnInit() {
    var x = []
    var y = []
    for (let a = 0; a <= this.largura; a += this.escala) {
      x.push([a + 'px', this.altura + 'px'])
    }
    for (let b = 0; b <= this.altura; b += this.escala) {
      y.push([b + 'px', this.largura + 'px'])
    }

    this.linhaX = x
    this.linhaY = y

  }

}
