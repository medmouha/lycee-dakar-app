import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  private classesSubject = new BehaviorSubject<any[]>([]);
  classes$ = this.classesSubject.asObservable();

  constructor() { }

  createClasse(libelle: string) {
    const classe = this.classesSubject.getValue();
    classe.push(libelle);
    this.classesSubject.next(classe);
  }
}
