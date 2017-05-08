import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlanoCartesianoComponent } from './plano-cartesiano/plano-cartesiano.component';
import { PontosComponent } from './pontos/pontos.component';
import { LinhasGradesComponent } from './linhas-grades/linhas-grades.component';
import { LinesComponent } from './lines/lines.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanoCartesianoComponent,
    PontosComponent,
    LinhasGradesComponent,
    LinesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
