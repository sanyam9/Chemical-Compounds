import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compound, CompoundResponse } from '../types/compound';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CompoundService {
  private apiUrl = 'http://localhost:3000/api/compounds';

  constructor(private http:HttpClient) { }

  getCompounds(page): Observable<CompoundResponse> {
    return this.http.get<CompoundResponse>(this.apiUrl + '?pg=' + page);
  };

  getCompoundById(id: string): Observable<Compound> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Compound>(url);
  };

  deleteCompound(compound: Compound): Observable<Compound> {
    const url = `${this.apiUrl}/${compound.id}`;
    return this.http.delete<Compound>(url);
  };

  updateCompound(compound: Compound): Observable<Compound> {
    const url = `${this.apiUrl}/${compound.id}`;
    return this.http.put<Compound>(url, compound, httpOptions);
  };

  addCompound(compound: Compound): Observable<Compound> {
    console.log(compound);
    return this.http.post<Compound>(this.apiUrl, compound, httpOptions);
  }
};
