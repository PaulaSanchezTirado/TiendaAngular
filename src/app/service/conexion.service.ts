import { HttpClient } from '@angular/common/http'; //Este es uno de sus componentes y en el otro hemos importado el módulo entero
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  API_URL:string = 'http://localhost:8080/'; // Esto es el servidor del destino
  constructor(private http:HttpClient) { } // Inyecta aquí el httpclient

  leerApi(url:string):Observable<any>{ 
    return this.http.get(this.API_URL+url).pipe(share()); // Recojo el http de client 
  }

  // En post y put hay que enviar el componente también también
  postApi(url:string, dto:any):Observable<any>{
    return this.http.post(this.API_URL+url, dto).pipe(share());
  }

  putApi(url:string, dto:any):Observable<any>{
    return this.http.put(this.API_URL+url, dto).pipe(share());
  }

  deleteApi(url:string):Observable<any>{
    return this.http.delete(this.API_URL+url).pipe(share());
  }
}
