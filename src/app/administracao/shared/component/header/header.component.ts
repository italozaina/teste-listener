import { Component, OnInit } from '@angular/core';
import { SeletorService } from 'src/app/service/seletor.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mySelect = 1;

  constructor(private seletor: SeletorService) { }

  ngOnInit(): void {
  }

  mudouNumero(selecionado){
    this.seletor.setarNumeroSelecionado(this.mySelect);
    console.log(this.mySelect);
    // console.log(selecionado.value);

  }
}
