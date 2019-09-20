import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kukold } from '../models/Kukold';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class KukoldService {
  private URL = '/api/kukolds';
  private SQUADSURL = '/api/squads';
  private CURRENTSQUAD = '/api/squad';
  private ADDSQUAD = '/api/squad';
  private CHANGEKUKOLD = '/api/squad';
  private CHECKABILITY =  '/api/check';
  constructor(private http: HttpClient) {
  }
  getKukolds(): Observable<Kukold[]> {
    return this.http.get<Kukold[]>(`${this.URL}`);
  }
  getSquads(): Observable<any[]> {
    return this.http.get<any[]>(`${this.SQUADSURL}`);
  }
  checkAbility(): Observable<boolean> {
    return this.http.get<boolean>(this.CHECKABILITY);
  }
  getSquad(id: string): Observable<any[]> {
    console.log(id);
    return this.http.get<any[]>(`${this.CURRENTSQUAD}/${id}`);
  }
  changeKukold(partyId: string, newQueue: Array<object>): Observable<any[]> {
    return this.http.put<any[]>(`${this.CHANGEKUKOLD}/${partyId}`, newQueue);
  }
  addSquad(squad: any): Observable<any> {
    return this.http.post<any>(this.ADDSQUAD, squad);
  }
/*
  addBike(bike: any): Observable<any> {
    return this.http.post<any>(this.URL, bike, httpOptions);
  }/*
  getBike(id: string): Observable<Bikes> {
    return this.http.get<Bikes>(`${this.URL}/${id}`);
  }
  updateBike(id: string, bike: Bikes): Observable<Bikes> {
    const updateUrl = `${this.URL}/${id}`;
    return this.http.put<Bikes>(updateUrl, bike, httpOptions);
  }/*
  addDish(dish: any): Observable<any> {
    return this.http.post<any>(this.URL, dish, httpOptions);
  }
  */
  deleteBike(id: string): any {
    const url = `${this.URL}/${id}`;
    return this.http.delete(url).pipe(
    );
  }

}
