import { CurrencyPipe, DatePipe, PercentPipe, registerLocaleData } from '@angular/common';
import { Component, DEFAULT_CURRENCY_CODE, LOCALE_ID, OnInit } from '@angular/core';
import { CreditoDto } from '../../interfaces/credito-dto';
import { CreditoService } from '../../services/credito.service';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@Component({
  selector: 'app-pesquisa-nfse',
  imports: [
    CurrencyPipe,
    DatePipe,
    PercentPipe
  ], providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
  ],
  templateUrl: './pesquisa-nfse.component.html',
  styleUrl: './pesquisa-nfse.component.scss'
})
export class PesquisaNfseComponent implements OnInit {


  title = 'teste-front';
  creditos: CreditoDto[] = [];


  constructor(private service: CreditoService) { }


  ngOnInit(): void {

  }



  onChange(event: any) {
    let numeroNfse: string = event.target!['value'];

    try {
      this.service.getCreditoByNumeroNfse(numeroNfse).subscribe(credito => {
        this.creditos = credito
      });
    } catch (e) {
      console.log(e);
    }

  }



}
