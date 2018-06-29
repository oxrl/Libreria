import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
/*
const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Allow': 'GET,PUT,POST,DELETE,OPTIONS'
     })
};*/

@Injectable({
  providedIn: 'root'
})
export class ApiLibroService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3702/api/libros';
  getLibros() {
  /* const fakeUsers = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
     {id: 2, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
     {id: 3, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
     {id: 4, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
   ];
   return of(fakeUsers);*/
   return this.http.get<any[]>(this.baseUrl);
  }
}
