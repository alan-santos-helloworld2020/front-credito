import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credito } from '../interfaces/credito';
import { Observable } from 'rxjs';
import { CreditoDto } from '../interfaces/credito-dto';

@Injectable({
  providedIn: 'root',
  
})
export class CreditoService {


  private apiUrl = 'http://localhost:8081/api/creditos';

  constructor(private http: HttpClient ) {}

  public  getCreditoByNumeroCredito(numeroCredito: String): Observable<CreditoDto> {
    return this.http.get<CreditoDto>(`${this.apiUrl}/credito/${numeroCredito}`);
  }

   // Buscar um crédito pelo ID
  public getCreditoByNumeroNfse(numeroNfse: string): Observable<CreditoDto[]> {
    return this.http.get<CreditoDto[]>(`${this.apiUrl}/${numeroNfse}`);
  }



}
