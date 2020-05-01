import { Component, OnInit } from '@angular/core';
import { SeletorService } from 'src/app/service/seletor.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  numero = 0;

  constructor(private seletor: SeletorService) {
    seletor.numeroSelecionado$.subscribe(
      numeroSelecionado => {
        this.numero = numeroSelecionado;
    });
  }

  ngOnInit(): void {
  }

}
