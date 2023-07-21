import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compound } from '../types/compound';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CompoundService {
  private apiUrl = 'http://localhost:5000/compounds';

  constructor(private http:HttpClient) { }

  getCompounds(): Observable<Compound[]> {
    return this.http.get<Compound[]>(this.apiUrl);
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
