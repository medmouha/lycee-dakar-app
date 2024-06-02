import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importez FormsModule

import { AppComponent } from './app.component';
import { ClasseComponent } from '../classe/classe.component';
import { EleveComponent } from '../eleve/eleve.component';
import { ClasseService } from '../services/classe.service';

@NgModule({
  declarations: [
    ClasseComponent
  ],
  imports: [
    AppComponent,
    BrowserModule,
    FormsModule,
    EleveComponent
    
  ],
  providers: [ClasseService],
  bootstrap: []
})
export class AppModule { }
