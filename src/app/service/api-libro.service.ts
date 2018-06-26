import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiLibroService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://www.etnassoft.com/api/v1/get/?book_author=adrian_paenza';
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
