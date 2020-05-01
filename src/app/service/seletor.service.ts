import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeletorService {
  private fonteNumeroSelecionado = new Subject<number>();

  numeroSelecionado$ = this.fonteNumeroSelecionado.asObservable();
  
  constructor() { }

  setarNumeroSelecionado(numero: number) {
    this.fonteNumeroSelecionado.next(numero);
  }
}
