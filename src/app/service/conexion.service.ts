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

  // Habrá que hacer todos los métodos que se necesiten. Uno por cada método que tengamos de get, post...
  leerApi(url:string):Observable<any>{ 
    return this.http.get(this.API_URL+url).pipe(share()); // Recojo el tthp de client 
  }

  // EN post y put hay que enviar el componente también también
  // postApi(url:string):Observable<any>{
  //   return this.http.post(this.API_URL+url).pipe(share());
  // }

  // putApi(url:string):Observable<any>{
  //   return this.http.put(this.API_URL+url).pipe(share());
  // }

  deleteApi(url:string):Observable<any>{
    return this.http.delete(this.API_URL+url).pipe(share());
  }
}
