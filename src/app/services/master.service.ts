import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient, private router: Router) { }

  public token = sessionStorage.getItem('token');
  httpOptions = 
  {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + this.token })
  };

  ////////////////////////////////////// For GET //////////////////////

   getFunction(functionName: any) 
   {
    return this.http.get(environment.rootUrl + functionName,this.httpOptions).pipe(tap(res => res), catchError(e => {
        throw new Error(e);
    }));
  }

  paramFunction(functionName: any, params: any) 
  {
    const url = environment.rootUrl + functionName + '/' + params;
    return this.http.get(url).pipe(tap(res => res), catchError(e => {
        throw new Error(e);
    }));
  }

}
