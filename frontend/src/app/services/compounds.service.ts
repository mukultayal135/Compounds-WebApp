import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { CompoundType, PageContent } from '../models/compound-type';
import { URL } from '../../../config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CompoundsService {
  constructor(private http: HttpClient) {}

  getAllCompounds(page: number): Observable<PageContent | null> {
    return this.http
      .get<PageContent>(`${URL}?page=${page}`)
      .pipe(catchError((err) => this.handleError(err, null)));
  }

  getCompoundById(id: number): Observable<CompoundType | null> {
    return this.http
      .get<CompoundType>(`${URL}/${id}`)
      .pipe(catchError((err) => this.handleError(err, null)));
  }

  deleteCompound(id: number): Observable<any> {
    return this.http.delete(`${URL}/${id}`);
  }

  updateCompound(id: number | undefined, data: CompoundType): Observable<any> {
    return this.http
      .put(`${URL}/${id}`, data, httpOptions)
      .pipe(catchError((err) => this.handleError(err, null)));
  }

  createCompound(data: any): Observable<CompoundType | null> {
    return this.http
      .post<CompoundType>(URL, data, httpOptions)
      .pipe(catchError((err) => this.handleError(err, null)));
  }

  handleError<Type>(err: HttpErrorResponse, fallBack: Type): Observable<Type> {
    let message;
    if (err.status == 0) {
      message = 'Error Code: 500\nMessage: Could not connect to server';
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.error.message}`;
    }
    alert(message);
    return of(fallBack);
  }
}
