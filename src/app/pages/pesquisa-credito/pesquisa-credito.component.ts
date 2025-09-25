import { Component, DEFAULT_CURRENCY_CODE, LOCALE_ID, OnInit } from '@angular/core';
import { CreditoDto } from '../../interfaces/credito-dto';
import { CreditoService } from '../../services/credito.service';
import { CurrencyPipe, DatePipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-pesquisa-credito',
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
  templateUrl: './pesquisa-credito.component.html',
  styleUrl: './pesquisa-credito.component.scss'
})
export class PesquisaCreditoComponent implements OnInit {

    credito: CreditoDto | null = null;
  
  
    constructor(private service: CreditoService) { }
  
  
    ngOnInit(): void {
  
    }
  
  
  
    onChange(event: any) {
      let numeroCredito: string = event.target!['value'];
  
      try {
        this.service.getCreditoByNumeroCredito(numeroCredito).subscribe(credito => {
          this.credito = credito
        });
      } catch (e) {
        console.log(e);
      }
  
    }
  

}
