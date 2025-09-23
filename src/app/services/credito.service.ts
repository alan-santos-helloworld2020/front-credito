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

  public  getCreditos(): Observable<CreditoDto[]> {
    return this.http.get<CreditoDto[]>(this.apiUrl);
  }

   // Buscar um crédito pelo ID
  public getCreditoByNumeroNsfe(numeroNfse: string): Observable<CreditoDto> {
    return this.http.get<CreditoDto>(`${this.apiUrl}/${numeroNfse}`);
  }



}
