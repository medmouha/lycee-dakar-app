import { Component, input } from '@angular/core';
import { ClasseService } from '../services/classe.service';

@Component({
  selector: 'app-classe',
  standalone: false,
  //imports: [],
  templateUrl: './classe.component.html',
  styleUrl: './classe.component.css'
})
export class ClasseComponent {
  libelle!: string;

  constructor(private classeService: ClasseService) {}

  addClasse() {
    this.classeService.createClasse(this.libelle);
    this.libelle='';
  }
}
