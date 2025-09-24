import { Component, DEFAULT_CURRENCY_CODE, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreditoService } from './services/credito.service';
import { CurrencyPipe, DatePipe, PercentPipe, JsonPipe, registerLocaleData } from '@angular/common';
import { CreditoDto } from './interfaces/credito-dto';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CurrencyPipe,
    DatePipe,
    PercentPipe
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    {
      provide:  DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent implements OnInit {

  title = 'teste-front';
  creditos: CreditoDto[] = [];


  constructor(private service: CreditoService) { }


  ngOnInit(): void {
    this.buscarDados();
  }

  buscarDados() {
    this.service.getCreditos().subscribe(creditos => {
      this.creditos = creditos;
    });
  }

  onChange(event: any) {
    let numeroNfse: string = event.target!['value'];

    try {
      this.service.getCreditoByNumeroNsfe(numeroNfse).subscribe(credito => {
        this.creditos = [credito];
      });
    } catch (e) {
      console.log(e);
      this.buscarDados();
    }


  }




}
