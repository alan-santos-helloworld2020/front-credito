import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreditoService } from './services/credito.service';
import { Credito } from './interfaces/credito';
import { CurrencyPipe, DatePipe, PercentPipe } from '@angular/common';
import { CreditoDto } from './interfaces/credito-dto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrencyPipe, DatePipe, PercentPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent implements OnInit {

  title = 'teste-front';
  creditos: CreditoDto[] = [];


  constructor(private service: CreditoService) { }

  ngOnInit(): void {
    this.service.getCreditos().subscribe(creditos => {
      this.creditos = creditos;

    });
  }

  onChange(event: any) {
    let numeroNfse: string = event.target!['value'];
    this.service.getCreditoByNumeroNsfe(numeroNfse).subscribe(credito => {

        this.creditos = [credito];

      
    });
  }




}
