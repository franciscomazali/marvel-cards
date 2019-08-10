import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Card } from '../models/card.model';
import { Config } from '../config';
import { map, flatMap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MarvelService {

  constructor(private http: HttpClient) { }

  apiPath = new Config().url;

  getAll(): Observable<Card[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCards)
    );
  }

  getById(id: number): Observable<Card> {
    const url = `${this.apiPath}/${id}`;
    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCard));
  }

  private jsonDataToCards(jsonData: any): Card[] {
    const cards: Card[] = []; console.log(jsonData);
    jsonData.data.results.forEach(element => cards.push(element as Card));

    return cards;
  }

  private jsonDataToCard(jsonData: any): Card {
    return jsonData as Card;
  }

  private handleError(error: any): Observable<any> {
    console.log('erro =>', error);
    return throwError(error);
  }
}

